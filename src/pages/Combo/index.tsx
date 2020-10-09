import React from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import DB from '../../utils/DB'

import './styles.css'

function ComboPage() {

  const combos = DB.getItem('combos')

  return (
    <div id="combo-page">

      <div className="header">
        <Header />
      </div>

      <div className="content">
        {
          combos.map((combo: ComboProps) => {
            return (
              <Card
                title={combo.title}
                type={'porcoes'}
                subtitle={'Embalagem 750ml (cada porção).'}
                key={combo.id}
              >

                <div className="content-with-list">


                  <table>
                    <caption>opções do combo</caption>
                    <thead>
                      <tr>
                        <th>porção</th>
                        <th>quantidade</th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        combo.acompanhamento &&
                        <tr>
                          <td>acompanhamento</td>
                          <td>{combo.acompanhamento}</td>
                        </tr>
                      }

                      {
                        combo.carne &&
                        <tr>
                          <td>carne</td>
                          <td>{combo.carne}</td>
                        </tr>
                      }

                      {
                        combo.frango &&
                        <tr>
                          <td>frango</td>
                          <td>{combo.frango}</td>
                        </tr>
                      }

                      {
                        combo.massa &&
                        <tr>
                          <td>massa</td>
                          <td>{combo.massa}</td>
                        </tr>
                      }

                      {
                        combo.peixe &&
                        <tr>
                          <td>peixe</td>
                          <td>{combo.peixe}</td>
                        </tr>
                      }
                    </tbody>
                  </table>

                </div>
              </Card>
            )
          })
        }
      </div>

    </div>

  )
}

export default ComboPage