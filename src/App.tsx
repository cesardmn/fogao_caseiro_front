import React, { useState, useEffect } from 'react';
import Routes from './Routes'
import api from './services/api';

function App() {


  const [tmpDB, setTmpDB] = useState(0)
  
  useEffect(()=>{
    api.get('').then(response => {
      const fcdb = JSON.stringify(response.data)
      localStorage.setItem("fcdb", fcdb)

    })
  }, [])

   
  return  <Routes />
}

export default App;

