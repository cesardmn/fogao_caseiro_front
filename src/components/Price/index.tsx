import React from "react"
import stringToBRL from "../../utils/Utils"

import './styles.css'


const Price:React.FC<ItemProps> = ({item}) => {
  return (
    <div className="price">
      {
        !item.hot &&
        <div className="sale">
          <span>{stringToBRL(item.sale)}</span>
        </div>
      }

      {
        item.hot &&
        <>
          <div className="sale">
            <span>{stringToBRL(item.sale)}</span>
          </div>

          <div className="full">
            <span>{stringToBRL((item.price))}</span>
          </div>
        </>
      }
      
    </div>
  )
}

export default Price

