import React from 'react'
import Utils from '../../utils/Utils'

import './styles.css'

const ChoiceItem:React.FC<ChoiceItemProps> = ({item}) => {
  return (
    <li key={item.id}>
    <div className="option-card">
      <div className="card-description">
        <h3>{item.name}</h3>
        <p>{Utils.numberToCurrencyBRL(item.sale)}</p>
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

