import React from 'react'
import './styles.css'
import cardImg from '../../assets/img/logo_fundo.png'
import { Link } from 'react-router-dom'

interface HorizonCardProps {
  information: {
    id: string,
    title: string,
    name: string,
    price: number,
    active: string,
    hot: string,
  }
}


const HorizonCard: React.FC<HorizonCardProps> = ({ information }) => {
  return (
    <Link to={`/${information.title}/${information.id}`}>
      <div className="horizon-card">

        <img src={cardImg} alt="" />


        <div className="right">
         <h2>{information.title}</h2>
          <p>{information.name}</p>

          <div className="price">
            {
              !information.hot &&
              <div className="sale">
                <span>
                  {(information.price).toLocaleString(
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
              information.hot &&
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
            }

            {
              information.hot &&
              <div className="full">
                <span>
                  {(information.price).toLocaleString(
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
    </Link>
  )

}
export default HorizonCard