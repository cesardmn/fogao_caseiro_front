import React, { useState } from 'react'
import Utils from '../../Utils'

import './styles.css'

interface ChoiceItemProps {
  item: any
  amount: number
  setAmount: any
  total: number
  setTotal: any
  portionAmount?: number
  setPortionAmount?: any
  choiceAmount?: number
}

const ChoiceItem: React.FC<ChoiceItemProps> = ({ item, total, setTotal, amount, setAmount, portionAmount, setPortionAmount, choiceAmount }) => {

  const [totalItem, setTotalItem] = useState(0)

  function addItem(value: number) {
    if (portionAmount !== undefined && choiceAmount) {
      if (portionAmount < choiceAmount) {
        setPortionAmount(portionAmount + 1)

        setTotal(total + value)
        setAmount(amount + 1)
        setTotalItem(totalItem + 1);
        navigator.vibrate(20)
        Utils.setItemIntoCart(item)
      }
    } else {
      setTotal(total + value)
      setAmount(amount + 1)
      setTotalItem(totalItem + 1);
      navigator.vibrate(20)
      Utils.setItemIntoCart(item)
    }




  }

  function removeItem(value: number) {

    if (portionAmount !== undefined && choiceAmount) {
      if (portionAmount > 0) {
        setPortionAmount(portionAmount - 1)

        setTotal(total - value)
        setAmount(amount - 1)
        setTotalItem(totalItem - 1);
        navigator.vibrate(20)
      }
    } else {

      if (totalItem > 0) {
        setTotal(total - value)
        setAmount(amount - 1)
        setTotalItem(totalItem - 1)
        navigator.vibrate(20)
      }
    }
  }

  return (
    <li className="item">
      <div className="description">

        <p><strong>{item.id}</strong> - {item.name.toLowerCase()}</p>

        <div className="price">
          <span className="sale">{Utils.numberToCurrencyBRL(item.sale)}</span>
          {
            item.hot &&
            <span className="full">{Utils.numberToCurrencyBRL(item.price)}</span>
          }
        </div>
      </div>

      {/* <div className="controls">
        <div className="wrapper">
          <button onClick={() => removeItem(item.sale)} >-</button>
          <span>{totalItem}</span>
          <button onClick={() => addItem(item.sale)} >+</button>
        </div>
      </div> */}

    </li>
  )
}

export default ChoiceItem