import axios from 'axios'

const api = axios.create({
  baseURL:'https://script.google.com/macros/s/AKfycbxt0ZoyKJtHLKyqE7YM0tJtGvji_al0LT_wNfNH1Q5EN-dPkRc/exec'
})

export default api
