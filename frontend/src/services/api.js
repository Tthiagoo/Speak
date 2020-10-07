import axios from 'axios';

const api = axios.create({
  baseURL:'https://speak-server.herokuapp.com/'
})

export default  api