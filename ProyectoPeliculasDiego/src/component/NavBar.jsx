import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-primary d-flex justify-content-between px-4'>
    <nav className='navbar-brand' href='#'>Buscador de Series</nav>

    <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
      <li className='nav-item px-2'>
          <NavLink className='nav-link' to='/'>Home</NavLink>
      </li>
      <li className='nav-item px-2'>
        <NavLink className='nav-link' to='/about'>Series</NavLink>
      </li>
    </ul>

    </nav>
  )
}

export default NavBar