import styled from 'styled-components'
import img from '../assets/not-found.svg'
import { Link, useRouteError } from 'react-router-dom'

const Wrapper = styled.section`
  width: 90vw;
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    margin-top: -3rem;
  }
  h3 {
    margin-top: 2rem;
  }
  p {
    margin-top: 1rem;
    margin-bottom: 1.3rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
  }
`

const Error = () => {
  const error = useRouteError()

  if (error.status === 404) {
    return (
      <Wrapper>
        <img src={img} alt="not found photo" />
        <h3>Ohh!</h3>
        <p>We can't seem to find page you are looking for</p>
        <Link to="/">Back Home</Link>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <h1>something went wrong</h1>
    </Wrapper>
  )
}
export default Error
