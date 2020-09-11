import React, { useState } from 'react'
import './styles.css'

import stringToBRL from '../../utils/Utils'


import itemImg from '../../assets/img/logo.png'
import Header from '../../components/Header'
import Price from '../../components/Price'

function ItemPage() {


  function getItem() {
    const db = JSON.parse(localStorage.getItem("fcdb") || '{}')

    const uri = (window.location.href)
      .split('/')
      .slice(-2)
    const title = uri[0]
    const id = uri[1]


    return db[title][id]

  }
  const item = getItem()


  const [un, setUn] = useState(1)
  const [totalItem, setTotalItem] = useState(item.hot ? item.price * 0.9 : item.price)

  const price = {
    price: item.price,
    hot: item.hot
  }

  function incrementItem() {
    if (un < 10) {
      setUn(un + 1)
      setTotalItem(totalItem + (item.hot ? item.price * 0.9 : item.price))
    }
  }

  function decrementItem() {
    if (un > 1) {
      setUn(un - 1)
      setTotalItem(totalItem - (item.hot ? item.price * 0.9 : item.price))
    }
  }



  return (




    <div id="item">

      <Header />

      <main>
        <h2 className="topTitle" >Detalhes do pedido</h2>
        <img src={itemImg} alt="" />

        <div className="title">
          <h2>Refeição {item.title}</h2>
          <Price item={item} />
        </div>


        <div className="name">
          {item.name}
        </div>

        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ad corrupti eaque facere, praesentium autem eum nobis architecto ratione laboriosam provident minus modi quam odit maiores deleniti unde ab delectus.
        </p>

      </main>

      <footer>

        <div className="controls">

          <div className="add-buttons">
            <button className="min" onClick={decrementItem}>-</button>
            <span className="display" >{un}</span>
            <button className="add" onClick={incrementItem} >+</button>
          </div>

          <button className="total-add">
            <div className="label">Adicionar</div>
            <div className="total">{stringToBRL(totalItem)}</div>
          </button>


        </div>

      </footer>
    </div>

  )
}

export default ItemPage