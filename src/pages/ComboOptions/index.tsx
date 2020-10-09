import React from 'react'
import Header from '../../components/Header';
import DB from '../../utils/DB';
import Utils from '../../utils/Utils';

import './styles.css'

const ComboOptions = () => {

  const combo = Utils.getCombo()
  const acompanhamentos = DB.getItem('acompanhamentos')
  const carnes = DB.getItem('carnes')
  const frangos = DB.getItem('frangos')
  const massas = DB.getItem('massas')
  const peixes = DB.getItem('peixes')

  console.log(peixes);


  return (

    <div id="combo-options-page">

      <div className="header">
        <Header />
      </div>

      <div className="top-combo">
        <h1>{combo.title}</h1>
        <h2>R$ 167,50</h2>
      </div>


      <div className="content">

        <div className="porcao-option">

          <div className="option-header">

            <div className="display">
              <h2>Acomapanhamento:</h2>
              <p>escolha {combo.acompanhamento} opções </p>
            </div>

            <div className="option-counter">
              <div className="count">0/{combo.acompanhamento}</div>
              <div className="count">obrigatório</div>
            </div>

          </div>



          <ul className="porcao-list">

            {
              acompanhamentos.map((option: OptionProps) => {
                return (
                  <li key={option.id}>
                    <div className="option-card">
                      <div className="card-description">
                        <h3>{option.name}</h3>
                        <p>{Utils.numberToCurrencyBRL(option.sale)}</p>
                      </div>

                      <div className="card-controls">
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







        

      </div>

    </div>
  )
}

export default ComboOptions
