import React, { useEffect, useState } from 'react';
import Routes from './Routes'
import api from './services/api';
import LoadingPage from './pages/LoadingPage';

function App() {

  const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   api.get('').then(response => {
  //     const fcdb = JSON.stringify(response.data)
  //     localStorage.setItem("fcdb", fcdb)

  //     setIsLoading(false)

  //   })
  // }, [])

  return isLoading ? <LoadingPage /> : <Routes />
}

export default App;