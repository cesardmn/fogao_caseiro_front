import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useParams } from 'react-router-dom'
import PortionList from '../../components/PortionList'
import DB from '../../services/DB'
import Utils from '../../Utils'

// import './styles.css'

const LunchesPage = () => {
  const [amount, setAmount] = useState(0)
  const [total, setTotal] = useState(0)

  interface ParamsProps {
    id: string,
  }

  const comboInfo = DB.getInfo('combo').content[1]
  const { id } = useParams<ParamsProps>()
  const combo = DB.getCombo(id)
  const portions = combo.choices

  return (
    <div className="lunch-content">

      <div className="top">
        <div className="back-icon">
          <Link to="/combo">
            <IoIosArrowBack />
          </Link>
        </div>
        <div>
          <h1 className="title">{combo.title}</h1>
          <p>{comboInfo}</p>
        </div>
      </div>
{/* 
      <div className="bottom">

        <button>
          <span className="total">{Utils.numberToCurrencyBRL(total)}</span>
          <span> total</span>
        </button>
      </div> */}

      <div className="lunches-list">
        {
          portions.map((portion: any, index: number) => {
            return (
              <PortionList
                key={index}
                portion={portion}
                amount={amount}
                setAmount={setAmount}
                total={total}
                setTotal={setTotal}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default LunchesPage

