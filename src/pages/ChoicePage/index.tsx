import React from 'react'
import { useParams } from 'react-router'

import PageDefault from '../../components/PageDefault'
import DB from '../../services/DB'

import { IoIosArrowBack } from 'react-icons/io';


import './styles.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Utils from '../../Utils';

interface ParamsProps {
  id: string,
  name: string
}

const ChoicePage = () => {

  const { id, name } = useParams<ParamsProps>()
  const toChoices = id ? DB.getCombo(id) : DB.getLunch(name)

  const [totalAmount, setTotalAmount] = useState(0)


  return (
    <PageDefault >
      <div className="choice-content">

        <div className="top-choice">

          <div className="back-icon">
            <Link to={id ? '/combo' : '/'}>
              <IoIosArrowBack />
            </Link>
          </div>

          <h2 className="title">{toChoices.title}</h2>

          <div className="total">R$ 1.500,50</div>

        </div>

        <div className="choice-list-container">


          {
            toChoices.choices.map((choice: any, index: number) => {
              return (
                <div className="choice-list" key={index}>

                  <div className="top">
                    <div className="left">
                      <h2 className="title">{choice.name}</h2>
                      <p className="amount">escolha {choice.choice_amount} {choice.choice_amount > 1 ? 'opções' : 'opção'}</p>
                    </div>

                    <div className="right">
                      <span>{totalAmount}/{choice.choice_amount}</span>
                      <span>obrigatório</span>
                    </div>
                  </div>

                  <ul className="items-list">
                    {
                      choice.items.map((item: any, index: number) => {
                        return (
                          <li key={index} className="item">
                            <div className="description">

                              <p><strong>{item.id}</strong> - {item.name.toLowerCase()}</p>

                              <div className="price">
                                <span className="sale">{Utils.numberToCurrencyBRL(item.sale)}</span>
                                {
                                  item.hot &&
                                  <span className="full">{Utils.numberToCurrencyBRL(item.price)}</span>
                                }
                              </div>
                            </div>

                            <div className="controls">
                              <div className="wrapper">
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
            })
          }
        </div>

      </div>
    </PageDefault>
  )
}

export default ChoicePage
