import React, { Children, useState } from 'react'
import ChoiceItem from '../ChoiceItem'

import './styles.css'

interface PortionListProps {
  portion: any
  amount: number
  setAmount: any
  total: number
  setTotal: any
}

const PortionList: React.FC<PortionListProps> = ({ portion, amount, setAmount, total, setTotal }) => {


  const [portionAmount, setPortionAmount] = useState(0)


  return (
    <div id="portion-list">
      <div className="top">
        <div className="left">
          <h2>{portion.name}</h2>
          <p>Escolha {portion.choice_amount} {portion.choice_amount > 1 ? 'porções' : 'porção'}</p>
        </div>
        <div className="right">
          <span>{portionAmount}/{portion.choice_amount}</span>
          <span>obrigatório</span>
        </div>
      </div>

      {
        portion.items.map((item: any) => {
          return (
            <ChoiceItem
              key={`${item.id}#${item.type}`}
              item={item}
              amount={amount}
              setAmount={setAmount}
              total={total}
              setTotal={setTotal}
              portionAmount={portionAmount}
              setPortionAmount={setPortionAmount}
              choiceAmount={portion.choice_amount}
            />
          )
        })
      }

    </div>
  )
}

export default PortionList

