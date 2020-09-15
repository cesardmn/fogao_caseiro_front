import React from 'react'
import './styles.css'
import cardImg from '../../assets/img/logo_fundo.png'

import Price from '../Price'


const HotCard: React.FC<ItemProps> = ({ item }) => {

  return (
    <div className="card">


      <img src={cardImg} alt="" />

      <h3>{item.title}</h3>

      <p>{item.name}</p>

      <Price item={item} />

    </div>
  )
}

export default HotCard
