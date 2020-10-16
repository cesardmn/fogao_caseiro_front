import React from 'react'
import './styles.css'

import logoImg from '../../assets/img/logo.png'
import DB from '../../utils/DB'
import { FaInstagram, FaListUl } from 'react-icons/fa'
import Utils from '../../utils/Utils'

function PrintMenu() {

  const info = DB.getItem('info')
  const fit = DB.getItem('fit')
  const lowcarb = DB.getItem('lowcarb')
  const acompanhamentos = DB.getItem('acompanhamentos')
  const carnes = DB.getItem('carnes')
  const frangos = DB.getItem('frangos')
  const massas = DB.getItem('massas')
  const peixes = DB.getItem('peixes')

  const menu = [
    { type: 'Fit', info: "Embalagem de 500ml.", items: fit },
    { type: 'Low Carb', info: "Embalagem de 500ml.", items: lowcarb },
    { type: 'Acompanhamentos', info: "Embalagem de 750ml.", items: acompanhamentos },
    { type: 'Carnes', info: "Embalagem de 750ml.", items: carnes },
    { type: 'Frangos', info: "Embalagem de 750ml.", items: frangos },
    { type: 'Massas', info: "Embalagem de 750ml.", items: massas },
    { type: 'Peixes', info: "Embalagem de 750ml.", items: peixes },
  ]

  return (

    <div className="page">
      {
        menu.map((itemMenu: any) => {
          return (
            <div className="print" key={itemMenu.type}>

              <div className="top">

                <div className="bg"></div>

                <img src={logoImg} alt="" />

                <a href="https://www.instagram.com/fogaocaseirooficial/" target="blank">
                  <div className="social-item">
                    <FaInstagram />
                    <strong>{info.contact[1]}</strong>
                  </div>
                </a>

              </div>

              <div className="title">
                <div className="title-left" >
                  <div className="icon">
                    <FaListUl />
                  </div>

                  <div className="infos">
                    <strong>{itemMenu.type}</strong>
                    <p>{itemMenu.info}</p>
                  </div>
                </div>

                <div className="left">
                  <div className="info-item">
                    <span>Encomendas</span>
                    <p>{info.order[0]}</p>
                    <p>{info.order[1]}</p>
                  </div>
                </div>

                <div className="right">
                  <div className="info-item">
                    <span>Entregas</span>
                    <p>{info.delivery[0]}</p>
                    <p>{info.delivery[1]}</p>
                  </div>
                </div>

              </div>

              <div className="list">

                <ul className="list-wrapper">

                  {
                    itemMenu.items.map((item: any) => {
                      return (
                        <li className="list-item" key={item.id}>
                          <div className="item-title">
                            <strong>{item.id}</strong> - {item.name}
                          </div>

                          <div className="price">
                            {Utils.numberToCurrencyBRL(item.sale)}
                          </div>
                        </li>
                      )
                    })
                  }

                </ul>

              </div>
            </div>
          )
        })
      }
    </div >
  )
}

export default PrintMenu
