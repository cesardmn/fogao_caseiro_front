import React, { useEffect, useState } from 'react';
import Routes from './Routes'
import api from './services/api';
import DB from './services/DB';

function App() {

  const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   api.get('').then(response => {
  //     DB.setDB(response.data)
  //     setIsLoading(false)

  //   })
  // }, [])

  return isLoading ? <h1>Loading...</h1> : <Routes />
  // return <Routes />
}

export default App;