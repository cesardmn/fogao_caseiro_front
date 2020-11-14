import React from 'react'
import { FaInstagram, FaListUl } from 'react-icons/fa';
import DB from '../../services/DB'
import Utils from '../../Utils';

import './styles.css'

function PrintMenuPage() {

  const db = DB.getDB()

  const fit = db.products.lunches.fits
  const lowcarb = db.products.lunches.lowcarbs
  const acompanhamentos = db.products.combos[2].portions[0].items
  const carnes = db.products.combos[2].portions[1].items
  const frangos = db.products.combos[2].portions[2].items
  const massas = db.products.combos[2].portions[3].items
  const peixes = db.products.combos[2].portions[4].items


  const menu = [
    { type: 'Fit', info: db.info.fit.content[1], items: fit },
    { type: 'Low Carb', info: db.info.lowcarb.content[1], items: lowcarb },
    { type: 'Acompanhamentos', info: db.info.combo.content[1], items: acompanhamentos },
    { type: 'Carnes', info: db.info.combo.content[1], items: carnes },
    { type: 'Frangos', info: db.info.combo.content[1], items: frangos },
    { type: 'Massas', info: db.info.combo.content[1], items: massas },
    { type: 'Peixes', info: db.info.combo.content[1], items: peixes },
  ]


  return (

    <div id="menu">


      <div className="page">
        {
          menu.map((itemMenu: any) => {
            return (
              <div className="print" key={itemMenu.type}>

                <div className="top">

                  <div className="bg"></div>

                  <img src="https://www.fogaocaseiro.com.br/static/media/logo.949d0a6c.png" alt="" />

                  <a href="https://www.instagram.com/fogaocaseirooficial/" target="blank">
                    <div className="social-item">
                      <FaInstagram />
                      <strong>{db.info.contact[1]}</strong>
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
                      <p>{db.info.order[0]}</p>
                      <p>{db.info.order[1]}</p>
                    </div>
                  </div>

                  <div className="right">
                    <div className="info-item">
                      <span>Entregas</span>
                      <p>{db.info.delivery[0]}</p>
                      <p>{db.info.delivery[1]}</p>
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
    </div>
  )
}

export default PrintMenuPage
