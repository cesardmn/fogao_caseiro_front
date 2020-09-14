import React, { useState } from 'react'
import stringToBRL from '../../utils/Utils';
import './styles.css'

import { FaRegTrashAlt } from 'react-icons/fa';
import Header from '../../components/Header';


function CheckoutPage() {
  const items = JSON.parse(localStorage.getItem("ck") || '[]')

  // !checkoutCart[0] && localStorage.setItem("ck", '[]') 

  let sub = 0
  items.map((item: any) => {
    sub += item.amount * item.price

  })

  return (
    <div id="ck">
      <Header />
      
      <div className="top">
        <h1>Top</h1>
      </div>

      <div className="ck-list">
        <h1>Itens do pedido</h1>
        

      </div>
    </div>
  )
}

export default CheckoutPage

