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

  uploadImage: async (data) => {
    try {
      setAuthToken(sessionStorage.getItem("authToken"))
      await axiosInstance.post(`${endPoint}/user/upload`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  },

};

export default authService;