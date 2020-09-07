import React from 'react'
import './styles.css'
import cardImg from '../../assets/img/logo_fundo.png'


interface HotCardProps {
  information: {
    title: string,
    name: string,
    price: number
  }

}

const HotCard: React.FC<HotCardProps> = ({ information }) => {
  return (
    <div className="card">


      <img src={cardImg} alt="" />

      <h3>{information.title}</h3>

      <p>{information.name}</p>


      <div className="price">

        <div className="sale">
          <span>
            {
              (information.price * 0.9)
                .toLocaleString(
                  'pt-BR', {
                  minimumFractionDigits: 2,
                  style: 'currency',
                  currency: 'BRL'
                }
                )
            }

          </span>
        </div>
        <div className="full">
          <span>
            {
              (information.price)
                .toLocaleString(
                  'pt-BR', {
                  minimumFractionDigits: 2,
                  style: 'currency',
                  currency: 'BRL'
                }
                )
            }
          </span>
        </div>
      </div>

    </div>
  )
}

export default HotCard
