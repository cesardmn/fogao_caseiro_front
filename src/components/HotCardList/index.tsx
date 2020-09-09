import React from 'react'
import './styles.css'
import HotCard from '../HotCard'




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
              fits.map((fit: { name: string, price: number, title: string }) => <HotCard key={fit.name} information={fit} />)
            }
    
            {
              lowcarbs.map((lowcarb: { name: string, price: number, title: string }) => <HotCard key={lowcarb.name} information={lowcarb} />)
            }
    
          </div>
    
        </div>
        }
      </>

  )
}

export default HotCardList
