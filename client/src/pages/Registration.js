import React, { useState, useContext } from "react";
import { AuthContext } from "../context/RootContext";
import { useAuth } from "../Hooks/AuthHook";
import { setAuthToken } from "../services/axiosInterceptor";

function Registration() {
  const { authToken } = useAuth();

  const { register } = useContext(AuthContext);

  // Set the auth token if available
  if (authToken) {
    setAuthToken(authToken);
  }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
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
      await register(formData);
      // history.push('/protected');
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
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
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Registration;
