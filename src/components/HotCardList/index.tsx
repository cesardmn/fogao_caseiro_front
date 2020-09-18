import React from 'react'
import './styles.css'
import HotCard from '../HotCard'
import { Link } from 'react-router-dom'
import DB from '../../utils/DB'


function HotCardList() {

  const fits = DB.getItems('fit')
  const lowcarbs = DB.getItems('lowcarb')


  return (
    <>
      {
        fits.length > 0 || lowcarbs.length > 0 ?
        (
          <div className="hot-cards">

          <h2>Destaques</h2>

          <div className="cards">
            {
              fits.map((fit: any) =>
                <Link key={fit.id} to={`/${fit.type}/${fit.id - 1}`}>
                  <HotCard key={fit.id} item={fit} />
                </Link>
              )
            }

            {
              lowcarbs.map((lowcarb: any) =>
                <Link key={lowcarb.id} to={`/${lowcarb.type}/${lowcarb.id - 1}`}>
                  <HotCard key={lowcarb.id} item={lowcarb} />
                </Link>
              )
            }

          </div>

        </div>
        )
        :
        (<></>)
        
      }
    </>

  )
}

export default HotCardList

