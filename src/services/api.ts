import axios from 'axios'

const api = axios.create({
  baseURL:'https://script.google.com/macros/s/AKfycbxUSP-KtqvhWm2AmMIrixR6oHDVVFvn2tuYYsgqZso1qQUfEp0/exec'
})

export default api
