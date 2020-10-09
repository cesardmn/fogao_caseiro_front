import React from 'react'
import Utils from '../../utils/Utils'

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
              <li key={option.id}>
                <div className="option-card">
                  <div className="card-description">
                    <h3>{option.name}</h3>
                    <p>{Utils.numberToCurrencyBRL(option.sale)}</p>
                  </div>

                  <div className="card-controls">
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                  </div>
                </div>
              </li>
            )
          })
        }


      </ul>



    </div>

  )
}

export default ChoiceList