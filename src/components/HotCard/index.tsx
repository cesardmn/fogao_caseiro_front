import React from 'react'
import './styles.css'
import cardImg from '../../assets/img/logo_fundo.png'

import Price from '../Price'
import Utils from '../../utils/Utils'


const HotCard: React.FC<ItemProps> = ({ item }) => {

  return (
    <div className="card">


      <img src={cardImg} alt="" />

      <h3>{item.title} {item.id}</h3>

      <p>{Utils.formaterDesciptionCard(item.name)}</p>

      <Price item={item} />

    </div>
  )
}

export default HotCard
