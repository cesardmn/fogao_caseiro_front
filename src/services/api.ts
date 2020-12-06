import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://127.0.0.1:8000/infos',
  // baseURL: 'https://backfc.herokuapp.com/infos',
  baseURL: 'https://script.google.com/macros/s/AKfycbxt0ZoyKJtHLKyqE7YM0tJtGvji_al0LT_wNfNH1Q5EN-dPkRc/exec'
})

export default api
