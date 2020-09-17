import React, { useState } from 'react'
import './styles.css'


import { FaTrashAlt } from 'react-icons/fa';


import Price from '../Price'
import { Link } from 'react-router-dom';
import Utils from '../../utils/Utils';
import Cart from '../../utils/Cart';

const CartCard: React.FC<ItemProps> = ({ item }) => {


  function getTotalItem() {
    const total = item.amount && item.sale * item.amount
    return Utils.numberToCurrencyBRL(total)
  }

  const [itemAmount, setItemAmount] = useState(item.amount)


  return (
    <div className="item-cart">

      <Link to={`/${item.type}/${item.id - 1}`}>

        <div className="left-card">

          <h3 className="card-title">
            {item.title} {item.id}
          </h3>

          <div className="description">
            {Utils.formaterDesciptionCard(item.name)}
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
            <button
              className="min"
              onClick={() => {
                Cart.removeItemCart(item)
                setItemAmount(item.amount - 1)
              }}
            >-</button>
            <span className="display">{item.amount}</span>
            <button
              className="add"
              onClick={() => {
                Cart.setItemIntoCart(item);
                setItemAmount(item.amount + 1)
              }}>+
            </button>
          </div>
        </div>

      </div>

    </div>
  )

}
export default CartCard