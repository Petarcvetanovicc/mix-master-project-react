import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useLoaderData, Link, Navigate } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 2.5rem;
  .header {
    text-align: center;
    margin-bottom: 2.5rem;
    a {
      margin-bottom: 1.5rem;
    }
  }
  img {
    width: 100%;
    display: inline-block;
    object-fit: cover;
  }
  .img-container {
    margin-bottom: 2rem;
  }
  .info p {
    text-transform: capitalize;
    margin-bottom: 1rem;
    font-weight: bold;
    line-height: 2;
  }
  .drink-data {
    margin-right: 0.5rem;
    background-color: var(--primary-400);
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    color: var(--primary-700);
    letter-spacing: 1px;
  }

  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
  }
`
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const response = await axios.get(`${url}${id}`)
      return response.data.drinks
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const id = params.id
    await queryClient.ensureQueryData(singleCocktailQuery(id))
    return { id }
  }

const Cocktail = () => {
  const { id } = useLoaderData()
  const { data: drinks } = useQuery(singleCocktailQuery(id))

  console.log(drinks)

  if (!drinks) {
    return <Navigate to="/" />
  }
  const singleDrink = drinks[0]

  const ingredients = [
    singleDrink.strIngredient1,
    singleDrink.strIngredient2,
    singleDrink.strIngredient3,
    singleDrink.strIngredient4,
    singleDrink.strIngredient5,
    singleDrink.strIngredient6,
    singleDrink.strIngredient7,
  ]

  const filterIngredients = ingredients.filter((item) => {
    if (item === null) {
      return
    }
    return item
  })

  const formatedIngredients = filterIngredients.map((item, index) => {
    if (index === filterIngredients.length - 1) {
      return item
    }

    return `${item}, `
  })

  const {
    strDrink: name,
    strCategory: category,
    strAlcoholic: info,
    strGlass: glass,
    strInstructions: instructions,
    strDrinkThumb: image,
  } = singleDrink
  return (
    <Wrapper>
      <div className="header">
        <Link className="btn" to="/">
          Back Home
        </Link>
        <h3>{name}</h3>
      </div>
      <div className="drink">
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
        <div className="info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">Category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">Info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">Glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Ingredients :</span>
            {formatedIngredients.map((item) => {
              return item
            })}
          </p>
          <p>
            <span className="drink-data">Instructions :</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
export default Cocktail
