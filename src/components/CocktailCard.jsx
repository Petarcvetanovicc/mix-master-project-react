import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
  background-color: #fff;
  box-shadow: var(--shadow-1);
  img {
    height: 15rem;
    width: 100%;
    object-fit: cover;
  }
  .footer {
    padding: 1rem;
    h4,
    h5,
    p {
      margin-bottom: 0.75rem;
    }
    h4 {
      font-weight: bold;
    }
    p {
      color: var(--grey-500);
    }
  }
`

const CocktailCard = (drink) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={drink.image} alt={drink.name} />
      </div>
      <div className="footer">
        <h4>{drink.name}</h4>
        <h5>{drink.glass}</h5>
        <p>{drink.info}</p>
        <Link to={`/cocktail/${drink.id}`} className="btn">
          Details
        </Link>
      </div>
    </Wrapper>
  )
}
export default CocktailCard
