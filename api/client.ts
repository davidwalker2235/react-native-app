import axios from 'axios';

const client = axios.create({
  baseURL: '',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;