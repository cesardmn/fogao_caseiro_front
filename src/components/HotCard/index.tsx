import React from 'react'
import './styles.css'
import cardImg from '../../assets/img/logo_fundo.png'


function HotCard() {
  return (
    <div className="card">


      <img src={cardImg} alt="" />


      <p>Carne louca desfiada com molho de tomate e cebola, legumes com especiarias e arroz  integral.</p>


      <div className="price">
        <div className="sale">
          <span>R$ </span> <span>112,90</span>
        </div>
        <div className="full">
          <span>R$ </span> <span>1.1115,00</span>
        </div>
      </div>

    </div>
  )
}

export default HotCard
