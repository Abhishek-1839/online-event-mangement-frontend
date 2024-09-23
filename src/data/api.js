import axios from 'axios';

const api = axios.create
({
  baseURL: 'http://localhost:3000',
  // baseURL: 'https://online-event-management-backend.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials : true,
});

export default api;
