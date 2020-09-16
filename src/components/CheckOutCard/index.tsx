import React from 'react'
import './styles.css'


import { FaTrashAlt } from 'react-icons/fa';


import Price from '../Price'
import { Link } from 'react-router-dom';
import stringToBRL from '../../utils/Utils';

interface ItemCartProps {
  item: {
    id: number,
    title: string,
    name: string,
    price: number,
    type: string,
    sale: number,
    amount: number
  }
}

const CheckOutCard: React.FC<ItemCartProps> = ({ item }) => {


  function getTotalItem() {
    const total = item.amount && item.sale * item.amount
    return stringToBRL(total)
  }

  function setItemIntoCard() {
    
  }

  return (
    <div className="item-cart">

      <Link to={`/${item.type}/${item.id}`}>

        <div className="left-card">

          <h3 className="card-title">
            {item.title} {item.id}
          </h3>

          <div className="description">
            {item.name}
          </div>
        </div>

      </Link>

      <div className="right-card">
        <h4>total do item</h4>
        <div className="total">
          <h3>{getTotalItem()}</h3>
          <FaTrashAlt />
        </div>

        <h4>valor unitário</h4>
        <Price item={item} />

        <div className="controls">

          <div className="add-buttons">
            <button className="min">-</button>
            <span className="display">{item.amount}</span>
            <button className="add" >+</button>
          </div>
        </div>

      </div>

    </div>
  )

}
export default CheckOutCard