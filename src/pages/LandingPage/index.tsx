import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'
import Hero from '../../components/Hero'

function LandingPage() {

  return (

    <div id="landing">

      <Hero />

      <div className="description">
        <p>
          Aquela refeição, quentinha, na medida, para você e sua família e com um tempero caseiro que faz toda diferença.
      </p>

        <p>
          E se ela for Fit ou Low Carb?
      </p>

        <p>
          Será assim, especial! Até porque tempero caseiro sem conservantes e corantes não estraga sua alimentação.

      </p>

      </div>

      <h2>Confira nosso cardápio</h2>

      <nav>

        <li>
          <Link to="/fit">
            <div className="menu-item">
              <i className="fas fa-carrot"></i>
              <span>Fit</span>
            </div>
          </Link>
        </li>


        <li>
          <Link to="/lowcarb">
            <div className="menu-item">
              <i className="fas fa-drumstick-bite"></i>
              <span>Low carb</span>
            </div>
          </Link>
        </li>


        <li>
          <Link to="/">
            <div className="menu-item">
              <i className="fas fa-utensils"></i>
              <span>Combos</span>
            </div>
          </Link>
        </li>

      </nav>


    </div>
  )
}

export default LandingPage
