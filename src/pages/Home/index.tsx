import React from 'react'
import { FaCarrot, FaDrumstickBite, FaUtensils } from 'react-icons/fa'
import Header from '../../components/Header'
import DB from '../../utils/DB'

import './styles.css'
import comboImg from '../../assets/img/combo.png'
import fitImg from '../../assets/img/fit.png'
import lowcarbImg from '../../assets/img/lowcarb.png'
import { Link } from 'react-router-dom'

function HomePage() {

  const info = DB.getItem('info')
  const infoCards = info.cards

  const combo = infoCards[0]
  const fit = infoCards[1]
  const lowcarb = infoCards[2]


  return (

    <div id="home-page">
      <div className="header">
        <Header />
      </div>

      <div className="content">

        <div id="about">
          <h2>"{info.about[0]}</h2>
          <h2>{info.about[1]}"</h2>
        </div>


        <Link to="/combo">
          <div className="card" id="combo">

            <div className="top">
              <div className="icon-container">
                <FaUtensils />
              </div>
              <div>
                <strong>combo caseiro</strong>
                <p>{combo.content[1]}</p>
              </div>
            </div>

            <img src={comboImg} alt="combo caseiro" />

            <div className="bottom">
              <p>{combo.content[0]}</p>
            </div>

          </div>
        </Link>


        <div className="card" id="fit">

          <div className="top">
            <div className="icon-container">
              <FaCarrot />
            </div>
            <div>
              <strong>marmita fit</strong>
              <p>{fit.content[1]}</p>
            </div>
          </div>

          <img src={fitImg} alt="marmita fit" />

          <div className="bottom">
            <p>{fit.content[0]}</p>
            <p>mínimo de 5 unidades, Fit e/ou Lowcarb</p>
          </div>

        </div>


        <div className="card" id="lowcarb">

          <div className="top">
            <div className="icon-container">
              <FaDrumstickBite />
            </div>
            <div>
              <strong>marmita low carb</strong>
              <p>{lowcarb.content[1]}</p>
            </div>
          </div>

          <img src={lowcarbImg} alt="marmita lowcarb" />

          <div className="bottom">
            <p>{lowcarb.content[0]}</p>
            <p>mínimo de 5 unidades, Fit e/ou Lowcarb</p>
          </div>

        </div>

      </div>

    </div>

  )
}

export default HomePage