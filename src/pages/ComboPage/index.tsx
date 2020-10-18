import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import PageDefault from '../../components/PageDefault'
import DB from '../../services/DB'

import './styles.css'

const ComboPage = () => {

  const comboInfo = DB.getInfo('combo')
  const combos = DB.getCombos()
  console.log(combos, comboInfo);
  
  

  return (
    <PageDefault >
      <div className="home-page">

        <div className="cards">
          {
            combos.map((combo:any) => {
              return (

                <Link to={'combo'} key={combo.id}>
                  <Card
                    type={'combo'}
                    title={combo.title}
                    subtitle={comboInfo.content[1]}>

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