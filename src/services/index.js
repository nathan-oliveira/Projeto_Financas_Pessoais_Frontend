import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
});

const api = {
  get(endpoint, header) {
    if (header) return axiosInstance.get(endpoint, header);

    return axiosInstance.get(endpoint);
  },
  post(endpoint, body, header) {
    if (header) return axiosInstance.post(endpoint, body, header);

    return axiosInstance.post(endpoint, body);
  },
  delete(endpoint, header) {
    if (header) return axiosInstance.delete(endpoint, header);

    return axiosInstance.delete(endpoint);
  },
  put(endpoint, body, header) {
    if (header) return axiosInstance.put(endpoint, body, header);
    return axiosInstance.put(endpoint, body);
  },
  login(body, active) {
    if (active) {
      return axios.post('http://localhost:4000/users', body);
    }

    return axios.post('http://localhost:4000/session', body);
  },
};

export default api;
