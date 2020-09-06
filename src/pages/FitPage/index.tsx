import React from 'react'

import './styles.css'

import Header from '../../components/Header'
import HorizonCard from '../../components/HorizonCard'
import TopPage from '../../components/TopPage'
import HotCardList from '../../components/HotCardList'


function FitPage() {
  return (
    <div id="fit">

      <Header />

      <TopPage 
        title="Refeições Fit" 
        information="Refeição individual (embalagem de 500ml)."
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

export default FitPage
