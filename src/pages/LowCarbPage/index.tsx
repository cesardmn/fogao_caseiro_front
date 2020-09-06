import React from 'react'

import './styles.css'

import Header from '../../components/Header'
import HorizonCard from '../../components/HorizonCard'
import TopPage from '../../components/TopPage'
import HotCardList from '../../components/HotCardList'


function LowCarbPage() {
  return (
    <div id="fit">

      <Header />

      <TopPage 
        title="Refeições Low Carb" 
        information="Refeição individual (embalagem de 350ml)."
      />

      <div className="content">
        
        <HotCardList />

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

export default LowCarbPage
