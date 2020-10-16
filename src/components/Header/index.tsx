import React from 'react'

import './styles.css'
// import logoImg from '../../assets/img/logo.png'

import { FaCarrot, FaDrumstickBite, FaHome, FaInstagram, FaShoppingCart, FaUtensils, FaWhatsapp } from 'react-icons/fa';
import DB from '../../utils/DB';
import { Link } from 'react-router-dom';


function Header() {

  const info = DB.getItem('info')

  return (
    <div id="header">

      <div className="bg"></div>

      <div className="top-bar">

        <div className="cart-icon">
          <FaShoppingCart />
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">
                <FaHome />
              </Link>
            </li>

            <li>
              <Link to="/combo">
                <FaUtensils />
              </Link>
            </li>

            <li>
              <Link to="/fit">
                <FaCarrot />
              </Link>
            </li>


            <li>
              <Link to="/lowcarb">
                <FaDrumstickBite />
              </Link>
            </li>
            

          </ul>
        </nav>

        <div className="social-container">

          {/* <a href="https://wa.me/5521999374814" target="blank">
            <div className="social-item">
              <FaWhatsapp />
              <strong>{info.contact[0]}</strong>
            </div>
          </a> */}

          <a href="https://www.instagram.com/fogaocaseirooficial/" target="blank">
            <div className="social-item">
              <FaInstagram />
              <strong>{info.contact[1]}</strong>
            </div>
          </a>

        </div>
      </div>

      <div className="display-bar">

        <div className="left">
          <img src="https://www.fogaocaseiro.com.br/logo.949d0a6c.png" alt="fogão caseiro logo" />
        </div>

        <div className="middle">
          <h2>{info.about[0]}</h2>
          <h2>{info.about[1]}</h2>
        </div>

        <div className="right">

          <div className="info-item">
            <span>Encomendas</span>
            <p>{info.order[0]}</p>
            <p>{info.order[1]}</p>
          </div>

          <div className="info-item">
            <span>Entregas</span>
            <p>{info.delivery[0]}</p>
            <p>{info.delivery[1]}</p>
          </div>
        </div>

      </div>
    </div>
  )
}


export default Header