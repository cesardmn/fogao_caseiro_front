import React from 'react'
import './styles.css'
import cardImg from '../../assets/img/logo_fundo.png'
import { Link } from 'react-router-dom'

import Price from '../Price'

const HorizonCard: React.FC<ItemProps> = ({ item }) => {

  
  return (
    <Link to={`/${item.type}/${item.id}`}>
      <div className="horizon-card">

        <img src={cardImg} alt="" />


        <div className="right">
          <h2>{item.title}</h2>
          <p>{item.name}</p>
          
          <Price item={item}/>
        </div>

      </div>
    </Link>
  )

}
export default HorizonCard