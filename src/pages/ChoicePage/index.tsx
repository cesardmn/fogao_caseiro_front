import React from 'react'
import { useParams } from 'react-router'

import PageDefault from '../../components/PageDefault'
import DB from '../../services/DB'

import { IoIosArrowBack } from 'react-icons/io';


import './styles.css'
import { Link } from 'react-router-dom';

interface ParamsProps {
  id: string
}

const ChoicePage = () => {

  const { id } = useParams<ParamsProps>()
  const combo = DB.getCombo(id)

  const toChoices = {
    title: combo.title,
    choices: combo.portions
  }

  return (
    <PageDefault >
      <div className="choice-content">
        
        <div className="top-choice">
          <Link to="/combo">
            <div className="back-icon">
              <IoIosArrowBack />
            </div>
          </Link>
          <h1>{toChoices.title}</h1>
        </div>

        <div className="list">
          {
            toChoices.choices.map((choice: any, index: number) =>{
              return (
              <p key={index}>{choice.choices[1].name}</p>
              // <p></p>
              )
            })
          }
        </div>

      </div>
    </PageDefault>
  )
}

export default ChoicePage
