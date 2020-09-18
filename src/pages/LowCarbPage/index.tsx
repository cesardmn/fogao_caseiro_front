import React from 'react'

import './styles.css'

import Header from '../../components/Header'
import HorizonCard from '../../components/HorizonCard'
import TopPage from '../../components/TopPage'
import HotCardList from '../../components/HotCardList'
import DB from '../../utils/DB'


function LowCarbPage() {

  const lowcarb = DB.getItem('lowcarb')


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
            lowcarb.map((item: ItemProps['item']) => item.active &&
              <HorizonCard key={item.name} item={item} />)
          }
        </div>

      </div>

    </div>
  )
}

export default LowCarbPage
