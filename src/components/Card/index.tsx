import React from 'react'
import { FaCarrot, FaDrumstickBite, FaUtensils, FaListUl } from 'react-icons/fa'

import './styles.css'

interface CardProps {
  type: string,
  title: string,
  subtitle: string,
  loading?: boolean
}

const Card: React.FC<CardProps> = ({ type, title, subtitle, children, loading }) => {
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
            <FaListUl />
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