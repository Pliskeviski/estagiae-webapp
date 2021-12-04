import axios from 'axios';

const api = axios.create();

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
