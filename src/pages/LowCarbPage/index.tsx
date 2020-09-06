import React from 'react'

import './styles.css'

import Header from '../../components/Header'
import HorizonCard from '../../components/HorizonCard'
import TopPage from '../../components/TopPage'
import HotCardList from '../../components/HotCardList'


function LowCarbPage() {

  const lowcarb = JSON.parse(localStorage.getItem("fcdb") || '{}').lowcarb


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
        {
          lowcarb.map((item: any) => item.active &&  
          <HorizonCard key={item.name} information={item} />)
        }
        </div>

      </div>

    </div>
  )
}

export default LowCarbPage
