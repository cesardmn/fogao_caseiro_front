import React from 'react'
import './styles.css'
import cardImg from '../../assets/img/logo_fundo.png'
import { Link } from 'react-router-dom'

import Utils from '../../utils/Utils'

import Price from '../Price'

const HorizonCard: React.FC<ItemProps> = ({ item }) => {


  return (
    <Link to={`/${item.type}/${item.id - 1}`}>
      <div className="horizon-card">

        <img src={cardImg} alt="" />


        <div className="right">
          <h2>{item.title} {item.id}</h2>
          <p>{Utils.formaterDesciptionCard(item.name)}</p>
          <div className="horizon-card-price">
          </div>
          <Price item={item} />
        </div>

      </div>
    </Link>
  )

}
export default HorizonCard