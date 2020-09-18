import React from 'react'
import './styles.css'

import Header from '../../components/Header';
import CartCard from '../../components/CartCard';
import Cart from '../../utils/Cart';
import TopPage from '../../components/TopPage';
import { IconContext } from 'react-icons/lib';
import Checkout from '../../components/Checkout';
import { MdRemoveShoppingCart } from 'react-icons/md';

import logoImg from '../../assets/img/logo.png'
import { Link } from 'react-router-dom';

function CartPage() {


  const cart = Cart.getCart()
  const total = Cart.getTotalCart()
  return (

    <div id="cart-page">
      <Header />

      {
        cart.length > 0 ?
          (
            <>
              <TopPage
                title="Itens do pedido"
                information="Confira os itens antes de finalizar o pedido."
              />
              <div className="cart-list">


                {
                  cart.map((item: ItemProps['item']) => {
                    return (
                      <CartCard key={`{${item.type}}#${item.id}`} item={item} />
                    )
                  })
                }

                <Checkout total={total} />

              </div>
            </>
          )
          :
          (
            <Link to="/" >
              <div className="empty-cart">

                <IconContext.Provider value={{ className: 'empty-cart-icon' }}>
                  <MdRemoveShoppingCart />
                </IconContext.Provider>

                <h1>Seu carrinho está vazio!!!</h1>
                <img src={logoImg} alt="" />

                <button>Confira nosso cardápio.</button>
              </div>

            </Link>
          )
      }

    </div>
  )
}


export default CartPage

