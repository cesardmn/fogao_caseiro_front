import React from 'react'

import './styles.css'

import Header from '../../components/Header'
import HotCard from '../../components/HotCard'
import HorizonCard from '../../components/HorizonCard'


function FitPage() {
  return (
    <div id="fit">

      <Header />

      <div className="top-page">
        <h1 className="title" >Refeições Fit</h1>
        <h3 className="information" >Refeição individual (embalagem de 500ml).</h3>
      </div>

      <div className="content">
        <div className="hot-cards">

          <h2>Destaques</h2>

          <div className="cards">
            <HotCard />
            <HotCard />
            <HotCard />
            <HotCard />
          </div>

        </div>

        <div className="list-cards">
          <HorizonCard />
          <HorizonCard />
          <HorizonCard />
          <HorizonCard />
          <HorizonCard />
        </div>
      </div>


    </div>
  )
}

export default FitPage
