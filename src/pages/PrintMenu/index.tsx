import React, { useEffect, useState } from 'react'

import LoadingPage from '../LoadingPage'
import Menu from '../../components/Menu'
import api from '../../services/api'

function PrintMenu() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    api.get('').then(response => {
      const fcdb = JSON.stringify(response.data)
      localStorage.setItem("fcdb", fcdb)

      setIsLoading(false)

    })
  }, [])

  return isLoading ? <LoadingPage /> : <Menu />
}

export default PrintMenu

