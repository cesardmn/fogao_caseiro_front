import React from 'react'
import { useState } from 'react'
import Utils from '../../Utils'
import ChoiceItem from '../ChoiceItem'

interface ChoiceListProps {
  choice: any
  addTotalChoiceValues: any
  removeTotalChoiceValues: any
  totalChoicesValue: any
  setTotalChoiceValues: any
}


const ChoiceList: React.FC<ChoiceListProps> = ({ choice, totalChoicesValue, setTotalChoiceValues}) => {

  const [totalAmount, setTotalAmount] = useState(0)
  

  return (
    <div className="choice-list">

      <div className="top">
        <div className="left">
          <h2 className="title">{choice.name}</h2>
          <p className="amount">escolha {choice.choice_amount} {choice.choice_amount > 1 ? 'opções' : 'opção'}</p>
        </div>

        <div className="right">
          <span>{totalAmount}/{choice.choice_amount}</span>
          <span>obrigatório</span>
        </div>
      </div>

      <ul className="items-list">
        {
          choice.items.map((item: any, index: number) => {
            return (
              <ChoiceItem
                key={`${index}#${item.id}`}
                item={item}
                choiceAmount={choice.choice_amount}
                totalAmount={totalAmount}
                setTotalAmount={setTotalAmount}
                totalChoiceValues={totalChoicesValue}
                setTotalChoiceValues={setTotalChoiceValues}
              />
            )
          })
        }
      </ul>

    </div>
  )
}

export default ChoiceList