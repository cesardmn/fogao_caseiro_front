import React from 'react'
import ChoiceList from '../../components/ChoiceList';
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

  return (

    <div id="combo-options-page">

      <div className="header">
        <Header />
      </div>

      <div className="top-combo">
        <h1>{combo.title}</h1>
        {/* <h2>R$ 167,50</h2> */}
      </div>


      <div className="content">

        {
          combo.acompanhamento &&

          < ChoiceList
            title={'Acompanhamentos'}
            amount={combo.acompanhamento}
            options={acompanhamentos}
          />
        }

        {
          combo.carne &&

          < ChoiceList
            title={'Carnes'}
            amount={combo.carne}
            options={carnes}
          />
        }

        {
          combo.frango &&

          < ChoiceList
            title={'Frangos'}
            amount={combo.frango}
            options={frangos}
          />
        }

        {
          combo.massa &&

          < ChoiceList
            title={'Massas'}
            amount={combo.massa}
            options={massas}
          />
        }

        {
          combo.peixe &&

          < ChoiceList
            title={'Peixes'}
            amount={combo.peixe}
            options={peixes}
          />
        }


      </div>

    </div>
  )
}

export default ComboOptions
