import React from 'react'

import './styles.css'
import logoImg from '../../assets/img/logo.png'

import Spinner from '../../components/Spinner'
import Card from '../../components/Card'

function LoadingPage() {
  return (
    <div id="loading">

      <img src={logoImg} alt="logo fogão caseiro" />

      {/* <h1>Carregando um cardápio pra você...</h1> */}

      <Card  
        type={'porcoes'}
        subtitle={'Preparando um cardápio pra você!'}
        title={'Fogão Caseiro'}
        loading={true}
      >
        <Spinner />

      </Card>


    </div>
  )
}

export default LoadingPage