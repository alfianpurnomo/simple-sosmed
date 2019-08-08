import axios from 'axios'


const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 20000,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

export default instance