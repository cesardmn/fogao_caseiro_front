import React from 'react'
import './styles.css'
import HotCard from '../HotCard'

function HotCardList() {
  return (
    <div className="hot-cards">

      <h2>Destaques</h2>

      <div className="cards">
        <HotCard />
        <HotCard />
        <HotCard />
        <HotCard />
      </div>

    </div>

  )
}

export default HotCardList
