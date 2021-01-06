import { useEffect, useState } from 'react'
import Routes from './Routes'
import api from './services/api'
import db from './utils/db'

function App() {

  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   api.get('/items').then(response => {
  //     db.setDB(response.data)
  //     setIsLoading(false)

  //   })
  // }, [])

  // return isLoading ? <h1>Loading</h1> : <Routes />

  return <Routes />

}

export default App;
