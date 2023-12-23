// utils/api.js
import axios from 'axios';

//change the baseURL to your application's domain, for production

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});

export default api;
