import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://deploy-financeiro-heroku.herokuapp.com/api',
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
  validateToken() {
    return axiosInstance.post('https://deploy-financeiro-heroku.herokuapp.com/api/validarToken');
  },
  login(body, active) {
    if (active) {
      return axios.post('https://deploy-financeiro-heroku.herokuapp.com/api/users', body);
    }
    return axios.post('https://deploy-financeiro-heroku.herokuapp.com/api/session', body);
  },
};

export default api;
