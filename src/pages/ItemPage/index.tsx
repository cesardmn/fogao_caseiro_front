import React from 'react'
import './styles.css'


import itemImg from '../../assets/img/logo.png'
import Header from '../../components/Header'



function ItemPage() {
  return (
    <div id="item">

      <Header />

      <div className="controls">

        <div className="add-buttons">
          <button className="min">-</button>
          <span className="display">1</span>
          <button className="add">+</button>
        </div>


        <button className="total-add">
          <div className="total">R$ 75,00</div>
          <div className="label">Adicionar</div>
        </button>

      </div>

      <div className="content">
        <img src={itemImg} alt="" />

        <h2 className="title">Fit</h2>

        <div className="description">
          Panqueuca de frango ao molho
        </div>

        <div className="price">

          <div className="sale">
            R$ 75,00
            </div>

          <div className="full">
            R$ 85,00
            </div>
        </div>

      </div>
    </div>

  )
}

export default ItemPage