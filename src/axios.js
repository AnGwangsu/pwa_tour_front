import axios from 'axios'

const instance = axios.create({
  // baseURL:'http://3.37.124.235:3000',
  baseURL: 'http://localhost:3000',
})

export default instance