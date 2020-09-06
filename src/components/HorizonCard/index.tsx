import React from 'react'
import './styles.css'
import cardImg from '../../assets/img/logo_fundo.png'

interface HorizonCardProps {
  information?: {
    name: string,
    price: number,
    active: string,
    hot: string,
  }
}


const HorizonCard: React.FC<HorizonCardProps> = ({ information }) => {
  return (
    <div className="horizon-card">

      <img src={cardImg} alt="" />


      <div className="right">
        <h2></h2>
        <p>{information?.name}</p>

        <div className="price">
          {
            !information?.hot &&
            <div className="sale">
              <span>
                {(information?.price)?.toLocaleString(
                  'pt-BR', {
                  minimumFractionDigits: 2,
                  style: 'currency',
                  currency: 'BRL'
                }
                )}
              </span>
            </div>
          }

          {
            information?.hot &&
            <div className="sale">
              <span>
                {
                  (information?.price * 0.9)
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
          }

          {
            information?.hot &&
            <div className="full">
              <span>
                {(information?.price)?.toLocaleString(
                  'pt-BR', {
                  minimumFractionDigits: 2,
                  style: 'currency',
                  currency: 'BRL'
                }
                )}
              </span>
            </div>
          }

        </div>


      </div>

    </div>
  )

}
export default HorizonCard