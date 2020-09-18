import React from 'react'
import { MdRemoveShoppingCart } from 'react-icons/md'
import { IconContext } from 'react-icons/lib'
import { Link } from 'react-router-dom'
import Cart from '../../utils/Cart'
import Utils from '../../utils/Utils'

import './styles.css'

interface CheckOutProps {
  total: number
}

const Checkout:React.FC<CheckOutProps> = ({total}) => {
  return (
    <div className="checkout">

    <Link to="/pedidos" onClick={Cart.deleteCart}>
      <div className="del-cart">
        <h2>Esvaziar carrinho</h2>


        <IconContext.Provider value={{ className: 'react-icons' }}>
          <MdRemoveShoppingCart />
        </IconContext.Provider>


      </div>
    </Link>

    <div className="display-total">
      <h2>Total do pedido</h2>
      <h2>{Utils.numberToCurrencyBRL(total)}</h2>
    </div>

    <div className="close">
      <h1>Fazer pedido</h1>
    </div>
  </div>
  )
}

export default Checkout