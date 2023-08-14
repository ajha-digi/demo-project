import axios from 'axios';

const axiosInstance = axios.create();

export const setAuthToken = (token) => {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      // Handle token expiration here, e.g., refresh token
      // If refreshing is successful, retry the original request
      // If refreshing fails, log the user out
      console.log(error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
