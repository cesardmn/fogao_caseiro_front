import React from 'react'
import './styles.css'
import cardImg from '../../assets/img/logo_fundo.png'

import Price from '../Price'

interface HotCardProps {
  information: {
    title: string,
    name: string,
    price: number,
    hot?: string
  }

}

const HotCard: React.FC<HotCardProps> = ({ information }) => {

  const item = {
    price: information.price,
    hot: information.hot
  }

  return (
    <div className="card">


      <img src={cardImg} alt="" />

      <h3>{information.title}</h3>

      <p>{information.name}</p>

      <Price item={item} />

    </div>
  )
}

export default HotCard
