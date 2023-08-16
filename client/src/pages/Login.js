import React, { useState, useEffect } from "react";
import { useAuth } from "../Hooks/AuthHook";
import { useNavigate, Link } from "react-router-dom";
import { setAuthToken } from "../services/axiosInterceptor";

function Login() {
  const { authToken, login } = useAuth();
  const navigate = useNavigate();

  if (authToken) {
    setAuthToken(authToken);
  }

  useEffect(() => {
    if (authToken) {
      navigate("/admin-dashboard");
    }
  }, [authToken]);

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
      navigate("/admin-dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form
              className="login100-form validate-form"
              onSubmit={handleSubmit}
            >
              <span className="login100-form-title p-b-49">LOGIN</span>
              <div className="wrap-input100 validate-input m-b-23">
                <span className="label-input100">Username</span>
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="Type your username"
                  onChange={handleChange}
                />
              </div>
              <div className="wrap-input100 validate-input">
                <span className="label-input100">Password</span>
                <input
                  className="input100"
                  type="password"
                  name="password"
                  placeholder="Type your password"
                  onChange={handleChange}
                />
              </div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <button className="login100-form-btn" type="submit">
                    Login
                  </button>
                </div>
              </div>
              <span className="label-input100">
              <Link to="/register">Register Yourself</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
