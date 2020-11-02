import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useParams } from 'react-router-dom'
import ChoiceItem from '../../components/ChoiceItem'
import PageDefault from '../../components/PageDefault'
import DB from '../../services/DB'
import Utils from '../../Utils'

import './styles.css'

const LunchesPage = () => {
  const [amount, setAmount] = useState(0)
  const [total, setTotal] = useState(0)

  interface ParamsProps {
    name: string,
  }

  const { name } = useParams<ParamsProps>()
  const lunches = [
    DB.getLunch(name),
    name == 'lowcarb' ? DB.getLunch('fit') : DB.getLunch('lowcarb')
  ]

  return (
    <div className="lunch-content">

      <div className="top">
        <div className="back-icon">
          <Link to="/">
            <IoIosArrowBack />
          </Link>
        </div>
        <h1 className="title">Marmitas</h1>
      </div>

      <div className="bottom">

        <div className="amount">
          <span>{amount} / 5 (mínimo)</span>
        </div>

        <button>
          <span className="total">{Utils.numberToCurrencyBRL(total)}</span>
          <span> Adicionar</span>
        </button>
      </div>

      <div className="lunches-list">
        {
          lunches.map((lunch, index) => {
            return (
              <div className="lunch-list" key={index}>
                <div className="top">
                  <h2>{lunch.choices.name}</h2>
                  <p>
                    {
                      DB.getInfo(
                        lunch.choices.items[0].type
                      ).content[1]
                    }
                  </p>
                </div>
                {
                  lunch.choices.items.map((item: any) => {
                    return (
                      <ChoiceItem
                        key={`${item.id}#${item.type}`}
                        item={item}
                        amount={amount}
                        setAmount={setAmount}
                        total={total}
                        setTotal={setTotal}
                      />
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default LunchesPage

