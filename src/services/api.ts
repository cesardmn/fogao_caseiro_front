import axios from 'axios'

const api = axios.create({
  baseURL:'/api/public/items'
})

export default api
