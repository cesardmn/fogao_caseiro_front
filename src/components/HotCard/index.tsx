import React from 'react'
import './styles.css'
import cardImg from '../../assets/img/logo_fundo.png'

import stringToBRL from '../../utils/Utils'

interface HotCardProps {
  information: {
    title: string,
    name: string,
    price: number
  }

}

const HotCard: React.FC<HotCardProps> = ({ information }) => {
  return (
    <div className="card">


      <img src={cardImg} alt="" />

      <h3>{information.title}</h3>

      <p>{information.name}</p>


      <div className="price">

        <div className="sale">
          <span>{stringToBRL((information.price * 0.9))}</span>
        </div>
        <div className="full">
        <span>{stringToBRL(information.price)}</span>
        </div>
      </div>

    </div>
  )
}

export default HotCard
