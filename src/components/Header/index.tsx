import React from 'react'
import { Link } from 'react-router-dom'



import './styles.css'

function Header() {
  return (
    <header>
      <nav>
      <li>
          <Link to="/">
          <i className="fas fa-home"></i>
          </Link>
        </li>

        <li>
          <Link to="/combos">
            <i className="fas fa-utensils"></i>
          </Link>
        </li>

        <li>
          <Link to="/fits">
            <i className="fas fa-carrot"></i>
          </Link>
        </li>

        <li>
          <Link to="#lowcarb">
            <i className="fas fa-drumstick-bite"></i>
          </Link>
        </li>

        <li>
          <Link to="#pedidos">
            <i className="fas fa-shopping-cart"></i>
          </Link>
        </li>
      </nav>
    </header>
  )
}

export default Header
