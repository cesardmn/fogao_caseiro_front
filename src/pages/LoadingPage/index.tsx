import React from 'react'

import './styles.css'
import logoImg from '../../assets/img/logo.png'

import Spinner from '../../components/Spinner'

function LoadingPage() {
  return (
    <div id="loading">

      <img src={logoImg} alt="logo fogão caseiro"/>

      <h1>Carregando um cardápio pra você...</h1>
      
      <Spinner />

    </div>
  )
}

export default LoadingPage