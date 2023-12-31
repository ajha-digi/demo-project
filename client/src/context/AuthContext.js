import React, { useState, useEffect } from "react";
import { AuthContext } from "./RootContext";
import authService from "../services/services";

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState(null);
  const [data, setData] = useState([])

  // Load user and token from session storage on app start
  useEffect(() => {
    const savedToken = sessionStorage.getItem("authToken");
    const savedUser = sessionStorage.getItem("user") !== "undefined" &&
      JSON.parse(sessionStorage.getItem("user"));

    if (savedToken) {
      setAuthToken(savedToken);
      setUser(savedUser);
    }
  }, []);

  // Store user and token in session storage
  useEffect(() => {
    if (authToken) {
      sessionStorage.setItem("authToken", authToken);
      user && sessionStorage.setItem("user", JSON.stringify(user));
    }
  }, [authToken, user]);

  const login = async (userData) => {
    try {
      const response = await authService.login(userData);
      const { token, user } = response.data;
      setAuthToken(token);
      setUser(user);
    } catch (error) {
      console.error("Registration failed:", error);
      logout();
    }
  };

  const logout = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("user");
    setAuthToken(null);
    setUser(null);
  };

  const register = async (userData) => {
    try {
      const response = await authService.register(userData);
      const { token, user } = response.data;
      setAuthToken(token);
      setUser(user);
    } catch (error) {
      console.error("Registration failed:", error);
      logout();
    }
  };

  const uploadImage = async (userData) => {
    try {
      const response = await authService.uploadImage(userData);
      console.log(response);
    } catch (error) {
      console.error("Registration failed:", error);
      logout();
    }
  };

  const dynamicPageData = async (route) => {
    try {
      const response = await authService.pageData(route);
      setData(response.data);
    } catch (error) {
      console.error("Registration failed:", error);
      logout();
    }
  };


  return (
    <AuthContext.Provider value={{ authToken, user, login, logout, register, uploadImage, dynamicPageData, data }}>
      {children}
    </AuthContext.Provider>
  );
};
