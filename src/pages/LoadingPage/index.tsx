import React from 'react'

import './styles.css'

import Hero from '../../components/Hero'
import Spinner from '../../components/Spinner'

function LoadingPage() {
  return (
    <div id="loading">

      <Hero />

      <>
      <Spinner />
      </>

    </div>
  )
}

export default LoadingPage