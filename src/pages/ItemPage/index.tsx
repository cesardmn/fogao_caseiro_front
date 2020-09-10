import React from 'react'
import './styles.css'


import itemImg from '../../assets/img/logo.png'
import Header from '../../components/Header'

function ItemPage() {

  const uri = (window.location.href)
    .split('/')
    .slice(-2)

  const title = uri[0]
  const id = uri[1]

  const db = JSON.parse(localStorage.getItem("fcdb") || '{}')

  const item = db[title][id]
  console.log(item);
  
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
          <div className="total">R$ {item.price}</div>
          <div className="label">Adicionar</div>
        </button>

      </div>

      <div className="content">
        <img src={itemImg} alt="" />

        <h2 className="title">{item.title}</h2>

        <div className="description">
          {item.name}
        </div>

        <div className="price">

          <div className="sale">
            R$ 75,00
          </div>

          <div className="full">
            R$ {item.price}
            </div>
        </div>

      </div>
    </div>

  )
}

export default ItemPage