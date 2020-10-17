import React from 'react'
import PageDefault from '../../components/PageDefault'
import DB from '../../services/DB'

import './styles.css'

const HomePage = () => {

  const aboutInfo = DB.getInfo('about')
  const comboInfo = DB.getInfo('combo')
  const fitInfo = DB.getInfo('fit')
  const lowcarbInfo = DB.getInfo('lowcarb')

  return (
    <PageDefault >
      <div className="home-page">
        
        <div className="about">
          <p>{aboutInfo[0]}</p>
          <p>{aboutInfo[1]}</p>
        </div>

      </div>
    </PageDefault>
  )
}

export default HomePage