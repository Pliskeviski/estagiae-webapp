import axios from 'axios';

const isServerSide = typeof window === 'undefined';

const api = axios.create({
  baseURL: isServerSide ? process.env.API_URL : '/api',
});

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  ({ response }) => {
    return Promise.reject(response?.data);
  }
);

api.interceptors.request.use((config) => {
  return config;
});

export default api;
