import axios from 'axios'

const instance = axios.create({
  // baseURL:'http://13.124.25.55',
  baseURL: 'http://localhost:3000',
})

export default instance