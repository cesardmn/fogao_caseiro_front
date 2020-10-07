import React from 'react'
import Header from '../../components/Header'
import DB from '../../utils/DB'

import './styles.css'

function ComboPage() {

  const combos = DB.getCombos()
  console.log(combos);

  return (
    <div id="combo-page">

      <div className="header">
        <Header />
      </div>

      <div className="content">
        {
          combos.map((item: ComboProps['item']) => {
            return (
              <div className="combo-card" key={item.id}>

                <div className="title">
                  <h1 >{item.title}</h1>

                  <p  >Embalagem de 750ml (cada porção).</p  >
                </div>

                {
                  item.acompanhamento &&
                  <h2>Acompanhamento: {item.acompanhamento}</h2>

                }

                {
                  item.carne &&
                  <h2>carne: {item.carne}</h2>

                }

                {
                  item.frango &&
                  <h2>frango: {item.frango}</h2>

                }

                {
                  item.massa &&
                  <h2>massa: {item.massa}</h2>

                }

                {
                  item.peixe &&
                  <h2>peixe: {item.peixe}</h2>

                }

              </div>
            )
          })
        }
      </div>

    </div>

  )
}

export default ComboPage