import React from 'react'
import './styles.css'

import Header from '../../components/Header';
import CheckOutCard from '../../components/CheckOutCard';
import TopPage from '../../components/TopPage';


function CheckoutPage() {
  const ck = JSON.parse(localStorage.getItem("ck") || '[]')

  return (

    <>
      <Header />
      <div id="ck">

        <TopPage
          title="Itens do pedidos"
          information="Confira os itens do seu pedido"
        />

        <div className="items-cart-list">
          {
            ck.length > 0 ?
              (
                ck.map((ItemCart: any) => {
                  return (
                    <CheckOutCard key={ItemCart.id} item={ItemCart} />
                  )
                })
              )
              :
              (
                console.log('carrinho vazio')
              )
          }
        </div>

      </div>
    </>
  )
}


export default CheckoutPage

