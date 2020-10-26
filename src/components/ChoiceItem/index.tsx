import React, { useState } from 'react'
import Utils from '../../Utils'

interface ChoiceItemProps {
  item: any
  choiceAmount: number
  totalAmount: number
  setTotalAmount: any
  totalChoiceValues: any
  setTotalChoiceValues: any
}

const ChoiceItem: React.FC<ChoiceItemProps> = ({ item, choiceAmount, totalAmount, setTotalAmount, totalChoiceValues, setTotalChoiceValues}) => {

  
  function addItem(value:number) {
    if (totalItem < choiceAmount && totalAmount < choiceAmount  ) {
      setTotalAmount(totalAmount + 1)
      setTotalItem(totalItem + 1)
      setTotalChoiceValues(totalChoiceValues + value)
      window.navigator.vibrate(20)
    }
  }

  function removeItem(value:number) {
    if(totalItem > 0) {
      setTotalAmount(totalAmount - 1)
      setTotalItem(totalItem - 1)
      setTotalChoiceValues(totalChoiceValues -   value)
      window.navigator.vibrate(20)
    }
  }
  
  const [totalItem, setTotalItem] = useState(0)

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

      <div className="controls">
        <div className="wrapper">
          <button onClick={() => {removeItem(item.sale)}} >-</button>
          <span>{totalItem}</span>
          <button onClick={() =>{addItem(item.sale)}} >+</button>
        </div>
      </div>

    </li>
  )
}

export default ChoiceItem