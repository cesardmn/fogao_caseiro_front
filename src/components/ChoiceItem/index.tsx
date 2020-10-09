import React from 'react'
import Utils from '../../utils/Utils'

import './styles.css'

const ChoiceItem: React.FC<ChoiceItemProps> = ({ item }) => {
  return (
    <li key={item.id}>
      <div className="item-card">

        <div className="card-description">
          <div className="name">{item.name}</div>
          <div className="price">
            <div className="sale">
              {Utils.numberToCurrencyBRL(item.sale)}
            </div>

            {
              item.hot &&
              <div className="full">
                {Utils.numberToCurrencyBRL(item.price)}
              </div>
            }

          </div>
        </div>


        <div className="card-controls">
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
      </div>
    </li>
  )
}

export default ChoiceItem

