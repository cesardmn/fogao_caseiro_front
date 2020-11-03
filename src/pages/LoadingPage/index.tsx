import React from 'react'

import './styles.css'

import Spinner from '../../components/Spinner'
import Card from '../../components/Card'

function LoadingPage() {
  return (
    <div id="loading">

      <img src="https://www.fogaocaseiro.com.br/static/media/logo.949d0a6c.png" alt="logo fogão caseiro" />

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