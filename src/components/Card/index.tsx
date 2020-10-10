import React from 'react'
import { FaCarrot, FaDrumstickBite, FaListOl, FaUtensils } from 'react-icons/fa'

import './styles.css'

const Card: React.FC<CardProps> = ({ type, title, subtitle, loading, children }) => {
  return (
    <div className="card">

      <div className="top-card">

        <div className="icon-container">
          {
            type === 'fit' &&
            <FaCarrot />
          }

          {
            type === 'lowcarb' &&
            <FaDrumstickBite />
          }

          {
            type === 'combo' &&
            <FaUtensils />
          }

          {
            type === 'porcoes' &&
            <FaListOl />
          }
        </div>


        <div>
          <strong>{title}</strong>
          <p>{subtitle}</p>
        </div>
      </div>

      <div className="content-card">
        {children}
      </div>

      {
        !loading &&
        <div className="bottom-card">
          <span>clique aqui e escolha</span>
        </div>
      }

    </div>
  )
}

export default Card


