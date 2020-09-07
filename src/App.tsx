import React, { useEffect } from 'react';
import Routes from './Routes'
import api from './services/api';

function App() {

  useEffect(() => {
    api.get('').then(response => {
      const fcdb = JSON.stringify(response.data)
      localStorage.setItem("fcdb", fcdb)

    })
  }, [])


  return <Routes />
}

export default App;

