import React from 'react'
import { useParams } from 'react-router'

import PageDefault from '../../components/PageDefault'
import DB from '../../services/DB'

import { IoIosArrowBack } from 'react-icons/io';


import './styles.css'
import { Link } from 'react-router-dom';

interface ParamsProps {
  id: string,
  name: string
}

const ChoicePage = () => {

  const { id, name } = useParams<ParamsProps>()
  const toChoices = id ? DB.getCombo(id) : DB.getLunch(name)

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
                    <span>0/{choice.choice_amount}</span>
                    <span>obrigatório</span>
                  </div>
                </div>

                <ul>
                  {
                    choice.items.map((item: any, index: number) => {
                      return (
                        <li key={index}>
                          <p><strong>{item.id}</strong> - {item.name} - {item.sale}</p>
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
    </PageDefault>
  )
}

export default ChoicePage
