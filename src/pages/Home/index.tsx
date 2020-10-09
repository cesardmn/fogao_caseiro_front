import React from 'react'
import Header from '../../components/Header'
import DB from '../../utils/DB'

import './styles.css'
import comboImg from '../../assets/img/combo.png'
import fitImg from '../../assets/img/fit.png'
import lowcarbImg from '../../assets/img/lowcarb.png'


import Card from '../../components/Card'
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
          <Card
            title={combo.title}
            subtitle={combo.content[1]}
            type={combo.type} >

            <div className="content-with-img">
              <img src={comboImg} alt="combo caseiro" />
              <p>{combo.content[0]}</p>
            </div>

          </Card>
        </Link>

        <Link to="#"> 
        <Card
          title={fit.title}
          subtitle={fit.content[1]}
          type={fit.type} >

          <div className="content-with-img">
            <img src={fitImg} alt="fit" />
            <p>{fit.content[0]}</p>
          </div>
        </Card>
        </Link>

        <Link to="#"> 
        <Card
          title={lowcarb.title}
          subtitle={lowcarb.content[1]}
          type={lowcarb.type} >

          <div className="content-with-img">
            <img src={lowcarbImg} alt="lowcarb" />
            <p>{lowcarb.content[0]}</p>
          </div>
        </Card>
        </Link>
        

      </div>

    </div>

  )
}

export default HomePage