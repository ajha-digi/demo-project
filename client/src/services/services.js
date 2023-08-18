import axiosInstance, { setAuthToken } from './axiosInterceptor';
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

  dynamicData: async (data) => {
    try {
      setAuthToken(sessionStorage.getItem("authToken"))

      const resp = await axiosInstance.post(`${endPoint}/user/upload`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return resp;
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  },

  pageData : async (route='home') => {
    try {
      const response = await axiosInstance.get(`${endPoint}/user/pages/${route}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  getAllPageAndCategory : async () => {
    try {
      const response = await axiosInstance.get(`${endPoint}/user/page_name`);
      return response?.data;
    } catch (error) {
      throw error;
    }
  },

};

export default authService;
