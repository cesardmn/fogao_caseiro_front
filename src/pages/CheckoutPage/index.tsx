import React from 'react'
import './styles.css'

import Header from '../../components/Header';
import CheckOutCard from '../../components/CheckOutCard';


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

        {
        items.map(
          (item: any) => {
            return (
              <CheckOutCard key={item.id} item={item}/>
            )
          }
        )
        }      
      </div>
    </div>
  )
}


export default CheckoutPage

