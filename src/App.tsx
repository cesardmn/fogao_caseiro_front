import React, { useEffect, useState } from 'react';
import LoadingPage from './pages/LoadingPage';
import Routes from './Routes'
import api from './services/api';
import DB from './services/DB';

function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    api.get('').then(response => {
      DB.setDB(response.data)
      setIsLoading(false)

    })
  }, [])

  return isLoading ? <LoadingPage /> : <Routes />
}

export default App;