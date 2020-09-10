import React from 'react'
import './styles.css'
import HotCard from '../HotCard'
import { Link } from 'react-router-dom'




function HotCardList() {

  const db = JSON.parse(localStorage.getItem("fcdb") || '{}')
  const fits = (db.fit).filter((item: { hot: string }) => item.hot !== '')
  const lowcarbs = (db.lowcarb).filter((item: { hot: string }) => item.hot !== '')

  return (
    <>
      {
        [fits.length > 0, lowcarbs.length > 0] &&
        <div className="hot-cards">

          <h2>Destaques</h2>

          <div className="cards">
            {
              fits.map((fit: { id: string, name: string, price: number, title: string }) =>
                <Link  key={fit.id} to={`/${fit.title}/${fit.id}`}>
                  <HotCard key={fit.id} information={fit} />
                </Link>
              )
            }

            {
              lowcarbs.map((lowcarb: { id: string, name: string, price: number, title: string }) =>
                <Link  key={lowcarb.id} to={`/${lowcarb.title}/${lowcarb.id}`}>
                  <HotCard key={lowcarb.id} information={lowcarb} />
                </Link>
              )
            }

          </div>

        </div>
      }
    </>

  )
}

export default HotCardList
