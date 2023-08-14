import React, { useState, useContext } from "react";
import { AuthContext } from "../context/RootContext";
import { useAuth } from "../Hooks/AuthHook";
import { setAuthToken } from "../services/axiosInterceptor";

function Login() {
  const { authToken } = useAuth();

  const { login } = useContext(AuthContext);

  // Set the auth token if available
  if (authToken) {
    setAuthToken(authToken);
  }
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      // history.push('/protected');
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
