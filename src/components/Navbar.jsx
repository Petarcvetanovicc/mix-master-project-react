import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = styled.nav`
  background-color: #fff;
  padding: 1rem 0;
  margin-bottom: 5rem;
  .nav-center {
    width: 90vw;
    max-width: 1080px;
    margin: 0 auto;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  .logo {
    font-size: 2rem;
    font-weight: bold;
    color: var(--primary-600);
  }
  .nav-link {
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    color: #000;
    transition: color 0.5s ease;
  }
  .nav-link:hover {
    color: var(--primary-600);
  }
  .active {
    color: var(--primary-600);
  }

  @media (min-width: 768px) {
    .nav-links {
      flex-direction: row;
      gap: 0.7rem;
      margin-top: 0;
    }
    .nav-center {
      display: flex;
      justify-content: space-between;
    }
    .nav-link {
      align-self: center;
    }
    .logo {
      font-size: 2.5rem;
    }
  }
`

const Navbar = () => {
  return (
    <NavBar>
      <nav className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </nav>
    </NavBar>
  )
}
export default Navbar
