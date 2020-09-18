import React, { useState } from 'react'
import './styles.css'


import { FaTrashAlt } from 'react-icons/fa';


import Price from '../Price'
import { Link } from 'react-router-dom';
import Utils from '../../utils/Utils';
import Cart from '../../utils/Cart';
import { IconContext } from 'react-icons/lib';

const CartCard: React.FC<ItemProps> = ({ item }) => {


  function getTotalItem() {
    const total = item.amount && item.sale * item.amount
    return Utils.numberToCurrencyBRL(total)
  }

  const [itemAmount, setItemAmount] = useState(item.amount)


  return (
    <div className="cart-card">


      <div className="left-card">
        <Link to={`/${item.type}/${item.id - 1}`}>

          <h3 className="card-title">
            {item.title} {item.id}
          </h3>

          <div className="description">
            {Utils.formaterDesciptionCard(item.name)}
          </div>

        </Link>
      </div>


      <div className="middle-card">

        <div className="total-display">
          <h4>total do item</h4>

          <h1>{getTotalItem()}</h1>
        </div>

        <div className="item-display">
          <h4>valor unitário</h4>
          <Price item={item} />
        </div>

        <div className="controls">

          <div className="add-buttons">
            <Link to="pedidos">
              <button
                className="min"
                onClick={() => {
                  Cart.removeItemCart(item)
                  setItemAmount(item.amount)
                }}>-
            </button>
            </Link>
            <span className="display">{itemAmount}</span>
            <Link to="pedidos">
              <button
                className="add"
                onClick={() => {
                  Cart.setItemIntoCart(item);
                  setItemAmount(item.amount)
                }}>+
            </button>
            </Link>
          </div>
        </div>

      </div>


      <div className="right">
        <Link to="pedidos" onClick={() => { Cart.deleteItemCart(item) }} >
          <IconContext.Provider value={{ className: 'react-icons' }}>
            <FaTrashAlt />
          </IconContext.Provider>
        </Link >
      </div>

    </div>
  )

}
export default CartCard