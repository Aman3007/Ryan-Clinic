import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ryan-clinic.onrender.com/api',
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});


api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      
      console.log('Unauthorized access - please log in');
    }
    return Promise.reject(error);
  }
);

export default api;
