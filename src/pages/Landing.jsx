import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import { useQuery } from '@tanstack/react-query'
const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ['cocktails', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}${searchTerm}`)
      return response.data.drinks
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const searchUrl = new URL(request.url).searchParams.get('name')

    const searchTerm = searchUrl || ''
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm))
    return { searchTerm }
  }

const Landing = () => {
  const { searchTerm } = useLoaderData()
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm))
  const formatedDrinks = drinks.map((item) => {
    return {
      id: item.idDrink,
      info: item.strAlcoholic,
      glass: item.strGlass,
      name: item.strDrink,
      image: item.strDrinkThumb,
    }
  })

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={formatedDrinks} />
    </>
  )
}
export default Landing
