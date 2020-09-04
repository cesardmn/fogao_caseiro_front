import React from 'react'

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
          <a href="">
            <i className="fas fa-utensils"></i>
            <span>Combos</span>
          </a>
        </li>

        <li>
          <a href="">
            <i className="fas fa-carrot"></i>
            <span>Fit</span>
          </a>
        </li>

        <li>
          <a href="">
            <i className="fas fa-drumstick-bite"></i>
            <span>Low Carb</span>
          </a>
        </li>

        <li>
          <a href="">
            <i className="fas fa-shopping-cart"></i>
            <span>Pedidos</span>
          </a>
        </li>
        </nav>
      </div>
    </div>
  )
}

export default LandingPage
