import React from 'react'
import ChoiceList from '../../components/ChoiceList'
import Header from '../../components/Header'
import DB from '../../utils/DB'
import Utils from '../../utils/Utils'

import './styles.css'

const ItemPage = () => {

  const itemName = Utils.getLinkItem()
  const itemPage = DB.getItem(itemName)

  return (
    <div id="item-page">

      <div className="header">
        <Header />
      </div>

      <div className="content">
        <ChoiceList 
        
          title={itemPage[0].title}
          amount={5}
          items={itemPage}
        />
      </div>

    </div>
  )
}

export default ItemPage

