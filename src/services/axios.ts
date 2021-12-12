import axios from 'axios';

// const isServerSide = typeof window === 'undefined';
// const baseApiUrl = isServerSide ? process.env.BASE_API_URL : '/api';
const baseApiUrl = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: baseApiUrl,
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
