import React, { useEffect } from 'react'
import { useParams } from 'react-router'

import PageDefault from '../../components/PageDefault'
import DB from '../../services/DB'

import { IoIosArrowBack } from 'react-icons/io';


import './styles.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Utils from '../../Utils';
import ChoiceList from '../../components/ChoiceList';

interface ParamsProps {
  id: string,
  name: string
}

const ChoicePage = () => {

  const { id, name } = useParams<ParamsProps>()
  const toChoices = id ? DB.getCombo(id) : DB.getLunch(name)

  const [totalChoicesValue, setTotalChoiceValues] = useState(0)

  function addTotalChoiceValues(value: number) {
    setTotalChoiceValues(totalChoicesValue + value)
  }

  function removeTotalChoiceValues(value: number) {
    setTotalChoiceValues(totalChoicesValue - value)
  }


  return (

    <div id="page-default">
      <div className="choice-content">

        <div className="top-choice">

          <div className="back-icon">
            <Link to={id ? '/combo' : '/'}>
              <IoIosArrowBack />
            </Link>
          </div>

          <button>
            Adicionar
            <div
              className="total"
              key={`${toChoices.choices[0].name}`}>
              {Utils.numberToCurrencyBRL(totalChoicesValue)}
            </div>
          </button>

        </div>
        
        <h2 className="title">{toChoices.title}</h2>

        <div className="choice-list-container">
          {
            toChoices.choices.map((choice: any, index: number) => {
              return (
                <ChoiceList
                  key={`${choice.name}#${index}`}
                  choice={choice}
                  addTotalChoiceValues={addTotalChoiceValues}
                  removeTotalChoiceValues={removeTotalChoiceValues}
                  totalChoicesValue={totalChoicesValue}
                  setTotalChoiceValues={setTotalChoiceValues}
                />
              )
            })
          }
        </div>

      </div>
    </div>

  )
}

export default ChoicePage
