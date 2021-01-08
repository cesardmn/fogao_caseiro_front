import { useEffect, useState } from 'react'
import Routes from './Routes'
import api from './services/api'
import db from './utils/db'

import Skeleton from './components/Skeleton';


function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    api.get('/items').then(response => {
      db.setDB(response.data)
      setIsLoading(false)

    })
  }, [])

  return isLoading ? <Skeleton /> : <Routes />

}

export default App;
