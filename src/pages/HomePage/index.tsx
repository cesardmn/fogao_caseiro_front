import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import PageDefault from '../../components/PageDefault'
import DB from '../../services/DB'

import './styles.css'

const HomePage = () => {

  const aboutInfo = DB.getInfo('about')
  const comboInfo = DB.getInfo('combo')
  const fitInfo = DB.getInfo('fit')
  const lowcarbInfo = DB.getInfo('lowcarb')

  const cardsInfo = [comboInfo, fitInfo, lowcarbInfo]

    return (
    <PageDefault >
      <div className="home-page">

        <div className="about">
          <p>{aboutInfo[0]}</p>
          <p>{aboutInfo[1]}</p>
        </div>

        <div className="cards">
          {
            cardsInfo.map((card) => {
              return (

                <Link to={card.type} key={card.type}>
                  <Card
                    type={card.type}
                    title={card.title}
                    subtitle={card.content[1]}>

                    <img src={`https://www.fogaocaseiro.com.br/imgs/${card.type}.jpeg`} alt="fogão caseiro" />
                    

                    <p>{card.content[0]}</p>
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

export default HomePage