import React from 'react'
import './styles.css'
import cardImg from '../../assets/img/logo_fundo.png'
import { Link } from 'react-router-dom'

import stringToBRL from '../../utils/Utils'
import Price from '../Price'

interface HorizonCardProps {
  information: {
    id: string,
    title: string,
    name: string,
    price: number,
    active: string,
    hot: string,
  }
}


const HorizonCard: React.FC<HorizonCardProps> = ({ information }) => {

  const item = {
    price: information.price,
    hot: information.hot
  }

  return (
    <Link to={`/${information.title}/${information.id}`}>
      <div className="horizon-card">

        <img src={cardImg} alt="" />


        <div className="right">
          <h2>{information.title}</h2>
          <p>{information.name}</p>
          
          <Price item={item}/>
        </div>

      </div>
    </Link>
  )

}
export default HorizonCard