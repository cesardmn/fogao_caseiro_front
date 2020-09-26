import React from 'react'

import logoImg from '../../assets/img/logo.png'
import './styles.css'


function Hero() {
  return (
    <div className="hero">
      <img src={logoImg} alt="" />
      <h3>"Do <span>Fogão</span> para sua mesa!"</h3>
    </div>
  )
}

export default Hero