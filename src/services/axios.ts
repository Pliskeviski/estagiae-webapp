import axios from 'axios';

const isServerSide = typeof window === 'undefined';

console.log('NEXT_PUBLIC_API_URL', process.env.NEXT_PUBLIC_API_URL);

const api = axios.create({
  baseURL: isServerSide
    ? process.env.NEXT_PUBLIC_API_URL
    : process.env.NEXT_PUBLIC_API_URL,
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
