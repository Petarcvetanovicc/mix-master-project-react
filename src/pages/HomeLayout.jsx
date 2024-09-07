import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 90vw;
  max-width: 1080px;
  margin: 0 auto;
`

const HomeLayout = () => {
  const { state } = useNavigation()
  return (
    <main>
      <Navbar />
      <Wrapper>
        {state === 'loading' ? <div className="loading" /> : <Outlet />}
      </Wrapper>
    </main>
  )
}
export default HomeLayout
