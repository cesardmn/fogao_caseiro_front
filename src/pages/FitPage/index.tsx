import React from 'react'

import './styles.css'

import Header from '../../components/Header'
import HorizonCard from '../../components/HorizonCard'
import TopPage from '../../components/TopPage'
import HotCardList from '../../components/HotCardList'
import DB from '../../utils/DB'


function FitPage() {

  const fit = DB.getItem('fit')

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

          {
            fit.map((item: ItemProps['item']) => item.active &&
              <HorizonCard key={item.name} item={item} />)
          }

        </div>

      </div>

    </div>
  )
}

export default FitPage
