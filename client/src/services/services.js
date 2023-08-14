import axiosInstance from './axiosInterceptor';
const endPoint  = "http://localhost:8080";

const authService = {
  register: async (userData) => {
    try {
      const response = await axiosInstance.post(`${endPoint}/user/register`, userData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  login: async (userData) => {
    try {
      const response = await axiosInstance.post(`${endPoint}/user/login`, userData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Add other authentication methods here (login, logout, etc.)
};

export default authService;