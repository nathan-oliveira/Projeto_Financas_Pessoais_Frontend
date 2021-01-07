import axios from "axios";

const urlApi = 'https://financeiro-app-nathan-oliveira.herokuapp.com/api';
// const urlApi = 'http://localhost:3000/api';

const axiosInstance = axios.create({
  baseURL: urlApi,
});

axiosInstance.interceptors.request.use((config) => {
  const { token } = window.localStorage;

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
},
(error) => Promise.reject(error));

const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
  patch(endpoint, body) {
    return axiosInstance.patch(endpoint, body);
  },
  validateToken() {
    return axiosInstance.post(`${urlApi}/validarToken`);
  },
  login(body, active) {
    if (active) {
      return axios.post(`${urlApi}/users`, body);
    }
    return axios.post(`${urlApi}/session`, body);
  },
};

export default api;
