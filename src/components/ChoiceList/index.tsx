import React from 'react'
import ChoiceItem from '../ChoiceItem'

import './styles.css'

const ChoiceList: React.FC<ChoiceListProps> = ({ title, amount, options, items }) => {
  return (
    <div className="porcao-option">

      <div className="option-header">

        <div className="display">
          <h2>{title}</h2>
          <p>escolha {amount} {amount > 1 ? 'opções' : 'opção'} </p>
        </div>

        <div className="option-counter">
          <div className="count">0/{amount}</div>
          <div className="count">obrigatório</div>
        </div>

      </div>


      <ul className="porcao-list">

        {

          options &&

          options.map((option: OptionProps) => {
            return (
              <ChoiceItem item={option} />
            )
          })
        }

        {

          items &&

          items.map((item: ItemProps) => {
            return (
              <ChoiceItem item={item} />
            )
          })
        }

      </ul>



    </div>

  )
}

export default ChoiceList