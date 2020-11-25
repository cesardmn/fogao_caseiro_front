import axios from 'axios'

const api = axios.create({
  baseURL:'https://script.google.com/macros/s/AKfycbxUSP-KtqvhWm2AmMIrixR6oHDVVFvn2tuYYsgqZso1qQUfEp0/exec',
  // baseURL: 'https://backfc.herokuapp.com',
  // baseURL: 'http://127.0.0.1:8000' 
})

export default api
