import React from "react"
import stringToBRL from "../../utils/Utils"

import './styles.css'

interface PriceProps {
  item: {
  price: number,
  hot?: string
  }
}

const Price:React.FC<PriceProps> = ({item}) => {
  return (
    <div className="price">
      {
        !item.hot &&
        <div className="sale">
          <span>{stringToBRL(item.price)}</span>
        </div>
      }

      {
        item.hot &&
        <>
          <div className="sale">
            <span>{stringToBRL(item.price * 0.9)}</span>
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

