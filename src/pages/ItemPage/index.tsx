import React, { useState } from 'react'
import './styles.css'

import Utils from '../../utils/Utils'


import itemImg from '../../assets/img/logo.png'
import Header from '../../components/Header'
import Price from '../../components/Price'
import { Link } from 'react-router-dom'
import Cart from '../../utils/Cart'

function ItemPage() {

  const [item, SetItem] = useState(Utils.getLinkItem())
  const [amount, setAmount] = useState(1)
  const [totalItem, setTotalItem] = useState(item.sale)

  function incrementItem() {
    if (amount < 10) {
      item.amount += 1
      SetItem(item)
      setAmount(amount + 1)
      setTotalItem(totalItem + item.sale)
      
    }
  }

  function decrementItem() {
    if (amount > 1) {
      item.amount -= 1
      SetItem(item)
      setAmount(amount - 1)
      setTotalItem(totalItem - item.sale)
    }
  }

  return (

    <div id="item">

      <Header />

      <main>
        <h2 className="topTitle" >Detalhes do item</h2>
        <img src={itemImg} alt="" />

        <div className="title">
          <h2>{item.title} {item.id}</h2>
          <Price item={item} />
        </div>


        <div className="name">
          {item.name}
        </div>

      </main>

      <footer>

        <div className="controls">

          <div className="add-buttons">
            <button className="min" onClick={decrementItem}>-</button>
            <span className="display" >{amount}</span>
            <button className="add" onClick={incrementItem} >+</button>
          </div>

          <Link
            to={`/${item.type}`}
            className="total-add"
            onClick={() => { Cart.setItemIntoCart(item) }}>
            <div className="label">Adicionar</div>
            <div className="total">{Utils.numberToCurrencyBRL(totalItem)}</div>
          </Link>

        </div>

      </footer>
    </div>

  )
}

export default ItemPage