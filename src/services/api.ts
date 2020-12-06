import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://127.0.0.1:8000/infos',
  baseURL: 'https://backfc.herokuapp.com/infos'
})

export default api
