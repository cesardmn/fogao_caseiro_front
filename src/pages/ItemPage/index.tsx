import React, { useState } from 'react'
import './styles.css'

import Utils from '../../utils/Utils'


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
  const [totalItem, setTotalItem] = useState(item.hot ? item.sale : item.price)

  function incrementItem() {
    if (un < 10) {
      setUn(un + 1)
      setTotalItem(totalItem + (item.hot ? item.sale : item.price))
    }
  }

  function decrementItem() {
    if (un > 1) {
      setUn(un - 1)
      setTotalItem(totalItem - (item.hot ? item.sale : item.price))
    }
  }


  function setItemIntoCart() {

    const ck = JSON.parse(localStorage.getItem("ck") || '[]')
    item['amount'] = un

    if (ck.length > 0) {
      

      const ckItem = ck.filter((cartItem: any) => cartItem.id === item.id && cartItem.type === item.type)[0]
      

      if (ckItem) {     
        if (ckItem.amount !== item.amount) {
          const ckIndex = ck.findIndex((cartItem: any) => cartItem.id === item.id && cartItem.type === item.type)
          ck[ckIndex] = item
          console.log(ck);
          localStorage.setItem('ck', JSON.stringify(ck))
        }
      } else {
        ck.push(item)
        localStorage.setItem('ck', JSON.stringify(ck))
      }

    
    } else{
      
      const cart = JSON.stringify([item])
      localStorage.setItem('ck', cart)

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



      </main>

      <footer>

        <div className="controls">

          <div className="add-buttons">
            <button className="min" onClick={decrementItem}>-</button>
            <span className="display" >{un}</span>
            <button className="add" onClick={incrementItem} >+</button>
          </div>

          <button className="total-add" onClick={setItemIntoCart} >
            <div className="label">Adicionar</div>
            <div className="total">{Utils.numberToCurrencyBRL(totalItem)}</div>
          </button>


        </div>

      </footer>
    </div>

  )
}

export default ItemPage