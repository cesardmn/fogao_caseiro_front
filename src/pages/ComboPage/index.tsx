import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import PageDefault from '../../components/PageDefault'
import DB from '../../services/DB'

import './styles.css'

const ComboPage = () => {

  const comboInfo = DB.getInfo('combo')
  const combos = DB.getCombos()
  console.log(combos[0].portions);




  return (
    <PageDefault >
      <div className="home-page">

        <div className="cards">
          {
            combos.map((combo: any) => {
              return (

                combo &&
                <Link to={`combo/${combo.id}`} key={combo.id}>
                  <Card
                    type={'combo'}
                    title={combo.title}
                    subtitle={comboInfo.content[1]}>

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
                            combo.portions.map((portion: any, index:number) => {
                              return (
                                portion !== "" &&
                                <tr key={index}>
                                  <td>{portion.name}</td>
                                  <td>{portion.choice_amount}</td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                      </table>

                    </div>

                  </Card>
                </Link>
              )
            })
          }
        </div>

      </div>
    </PageDefault>
  )
}

export default ComboPage