import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.BASE_URL || 'https://fakestoreapi.com',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
