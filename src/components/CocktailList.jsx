import styled from 'styled-components'
import CocktailCard from './CocktailCard'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`

const CocktailList = ({ drinks }) => {
  return (
    <Wrapper>
      {drinks.map((drink) => {
        return <CocktailCard {...drink} key={drink.id} />
      })}
    </Wrapper>
  )
}
export default CocktailList
