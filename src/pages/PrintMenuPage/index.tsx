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
    <div id="print-page">

      <div className="page">

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et autem ipsam sint? Modi quam nesciunt, quaerat nam debitis quisquam, vel earum, repellat atque ut nemo a assumenda non illo aliquam.</p>

      </div>

      <div className="page">

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et autem ipsam sint? Modi quam nesciunt, quaerat nam debitis quisquam, vel earum, repellat atque ut nemo a assumenda non illo aliquam.</p>

      </div>

    </div>
  )
}

export default PrintMenuPage
