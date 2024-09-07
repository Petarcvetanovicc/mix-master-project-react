import { Form } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 2rem 0;
  form {
    width: 90vw;
    max-width: 600px;
    padding: 2rem;
    margin: 0 auto 6rem;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr auto;
    box-shadow: var(--shadow-2);
    input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border: 1px solid var(--grey-200);
      padding: 0.5rem;
    }
    button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`

const SearchForm = ({ searchTerm }) => {
  return (
    <Wrapper>
      <Form method="GET">
        <input
          type="search"
          name="name"
          id="name"
          autoComplete="given-name"
          defaultValue={searchTerm}
        />
        <button type="submit" className="btn">
          Search
        </button>
      </Form>
    </Wrapper>
  )
}
export default SearchForm
