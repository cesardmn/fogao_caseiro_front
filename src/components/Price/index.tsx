import React from "react"
import Utils from "../../utils/Utils"

import './styles.css'


const Price:React.FC<ItemProps> = ({item}) => {
  return (
    <div className="price">
      {
        item.hot ? 
        (
          <>
            <div className="sale">
              <span>{Utils.numberToCurrencyBRL(item.sale)}</span>
            </div>
  
            <div className="full">
              <span>{Utils.numberToCurrencyBRL((item.price))}</span>
            </div>
          </>
        )
        :
        (

          <div className="sale">
            <span>{Utils.numberToCurrencyBRL(item.sale)}</span>
          </div>
       
        )
      }
      
    </div>
  )
}

export default Price

