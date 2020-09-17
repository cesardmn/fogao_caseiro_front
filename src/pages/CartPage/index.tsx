import React from 'react'
import './styles.css'

import Header from '../../components/Header';
import CartCard from '../../components/CartCard';
import TopPage from '../../components/TopPage';
import Cart from '../../utils/Cart';


function CartPage() {
  const ck = Cart.getCart()

  return (

    <>
      <Header />
      <div id="cart">

        <TopPage
          title="Itens do pedido"
          information="Confira os itens do seu pedido"
        />

        <div className="items-cart-list">
          {
            ck.length > 0 ?
              (
                ck.map((item: ItemProps['item']) => {
                  return (
                    <CartCard key={item.id} item={item} />
                  )
                })
              )
              :
              (
                <h1>Carrinho vazio</h1>
              )
          }
        </div>

      </div>
    </>
  )
}


export default CartPage

