import React from 'react'
import './styles.css'

import { Link } from 'react-router-dom'

import { FaTrashAlt } from 'react-icons/fa';


import Price from '../Price'

const CheckOutCard: React.FC<ItemProps> = ({ item }) => {


  return (
    <Link to={`/${item.type}/${item.id}`}>
      <div className="ck-card">

        <div className="left">
          <h2 className="title">
            {item.title} {item.id} - <span className="item-name" >{item.name}</span>
          </h2>


          <div className="controls">
            <Price item={item} />

            <div className="add-buttons">
              <button className="min">-</button>
              <span className="display" >2</span>
              <button className="add" >+</button>
            </div>
          </div>


        </div>


        <div className="right">

          <FaTrashAlt />
          <span>R$ 30,00</span>

        </div>

      </div>
    </Link>
  )

}
export default CheckOutCard