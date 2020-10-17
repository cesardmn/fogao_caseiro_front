import React from 'react'
import PageDefault from '../../components/PageDefault'
import DB from '../../services/DB'

const HomePage = () => {

  const aboutInfo = DB.getInfo('about')
  
  return (
    <PageDefault >
      <h1>HomePage</h1>
    </PageDefault>
  )
}

export default HomePage