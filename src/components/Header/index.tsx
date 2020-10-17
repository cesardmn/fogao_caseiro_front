import React from 'react'
import { Link } from 'react-router-dom'
import DB from '../../services/DB'
import { FaHome, FaUtensils, FaCarrot, FaDrumstickBite, FaWhatsapp, FaInstagram, FaShoppingCart } from 'react-icons/fa';

import './styles.css'

const aboutInfo = DB.getInfo('about')
const comboInfo = DB.getInfo('combo')
const fitInfo = DB.getInfo('fit')
const lowcarbInfo = DB.getInfo('lowcarb')
const contactInfo = DB.getInfo('contact')
const deliveryInfo = DB.getInfo('delivery')
const orderInfo = DB.getInfo('order')

const Header = () => {
  return (
    <div className="header">
      <div className="bg"></div>

      <div className="top-bar">

        <img src="https://www.fogaocaseiro.com.br/static/media/logo.949d0a6c.png" alt="fogão caseiro" />

        <nav>
          <ul>
            <li>
              <Link to="/">
                <div className="item-menu">
                  <FaHome />
                  <span>home</span>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/combo">
                <div className="item-menu">
                  <FaUtensils />
                  <span>combos</span>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/lowcarb">
                <div className="item-menu">
                  <FaDrumstickBite />
                  <span>low carb</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/fit">
                <div className="item-menu">
                  <FaCarrot />
                  <span>fit</span>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/lowcarb">
                <div className="item-menu">
                  <FaShoppingCart />
                  <span>carrinho</span>
                </div>
              </Link>
            </li>

          </ul>

          <div className="social-container">

            <a href="https://wa.me/5521999374814" target="_blank" rel="noopener noreferrer">
              <div className="social-item">
                <FaWhatsapp />
                <strong>{contactInfo[0]}</strong>
              </div>
            </a>

            <a href="https://www.instagram.com/fogaocaseirooficial/" target="_blank" rel="noopener noreferrer">
              <div className="social-item">
                <FaInstagram />
                <strong>{contactInfo[1]}</strong>
              </div>
            </a>

          </div>
        </nav>

      </div>

      <div className="info-bar">
        <div className="logo">
          <img src="https://www.fogaocaseiro.com.br/static/media/logo.949d0a6c.png" alt="fogão caseiro" />
        </div>

        <div className="about">
          <p>{aboutInfo[0]}</p>
          <p>{aboutInfo[1]}</p>
        </div>

        <div className="info">
          <div className="info-item">
            <span>Encomendas</span>
            <p>{orderInfo[0]}</p>
            <p>{orderInfo[1]}</p>
          </div>
          <div className="info-item">
            <span>Entregas</span>
            <p>{deliveryInfo[0]}</p>
            <p>{deliveryInfo[1]}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header