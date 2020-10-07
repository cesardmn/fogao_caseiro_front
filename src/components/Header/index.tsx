import React from 'react'

import './styles.css'
import logoImg from '../../assets/img/logo.png'

import { FaInstagram, FaShoppingCart, FaWhatsapp } from 'react-icons/fa';
import DB from '../../utils/DB';


const info = DB.getItem('info')

function Header() {
  return (
    <div id="header">

      <div className="bg"></div>

      <div className="top-bar">

        <div className="cart-icon">
          <FaShoppingCart />
        </div>

        <div className="social-container">

          <a href="https://wa.me/552199999999">
            <div className="social-item">
              <FaWhatsapp />
              <strong>{info.contact[0]}</strong>
            </div>
          </a>

          <a href="https://www.instagram.com/fogaocaseirooficial/">
            <div className="social-item">
              <FaInstagram />
              <strong>{info.contact[1]}</strong>
            </div>
          </a>

        </div>
      </div>

      <div className="display-bar">

        <div className="left">
          <img src={logoImg} alt="fogão caseiro logo" />
        </div>

        <div className="middle">
          <h2>{info.about[0]}</h2>

          <h2>{info.about[1]}</h2>
        </div>

        <div className="right">

          <div className="info-item">
            <span>Encomendas</span>
            <p>{info.order[0]}</p>
          </div>

          <div className="info-item">
            <span>Entregas</span>
            <p>{info.delivery[0]}</p>
            <p>{info.delivery[1]}</p>
          </div>
        </div>

      </div>

      <nav>
        <ul>
            <a href="#">
          <li className="menu-item">
              sobre nós
          </li>
            </a>

          <li className="menu-item">
            <a href="">
              combo caseiro
            </a>
          </li>

          <li className="menu-item">
            <a href="">
              marmita fit
            </a>
          </li>

          <li className="menu-item">
            <a href="">
              marmita low carb
            </a>
          </li>

        </ul>
      </nav>

    </div>
  )
}


export default Header