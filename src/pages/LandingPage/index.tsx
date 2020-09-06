import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

import logoImg from '../../assets/img/logo.png'


function LandingPage() {
  return (
    <div id="landing">


      <div className="hero">
        <img src={logoImg} alt="" />
        <h3>"Do Fogão para sua mesa!"</h3>
      </div>

      <div className="menu">
        <nav>
          <li>
            <Link to="#">
              <i className="fas fa-utensils"></i>
              <span>Combos</span>
            </Link>
          </li>

          <li>
            <Link to="/fits">
              <i className="fas fa-carrot"></i>
              <span>Fit</span>
            </Link>
          </li>

          <li>
            <Link to="lowcarb">
              <i className="fas fa-drumstick-bite"></i>
              <span>Low Carb</span>
            </Link>
          </li>

          <li>
            <Link to="#">
              <i className="fas fa-shopping-cart"></i>
              <span>Pedidos</span>
            </Link>
          </li>
        </nav>
      </div>
    </div>
  )
}

export default LandingPage
