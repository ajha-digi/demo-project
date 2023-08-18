import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Hooks/AuthHook";


function Registration() {
  const { authToken, register } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (authToken) {
      navigate("/admin-dashboard");
    }
  }, [authToken]);

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
      navigate("/admin-dashboard");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <>
    <div className="limiter-register">
          <div className="container-login100">
            <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
              <form className="login100-form validate-form" onSubmit={handleSubmit}>
                <span className="login100-form-title p-b-49">REGISTER</span>
                <div
                  className="wrap-input100 validate-input m-b-23"
                >
                  <span className="label-input100">Name</span>
                  <input
                    className="input100"
                    type="text"
                    name="name"
                    placeholder="Type your name"
                    onChange={handleChange}
                  />
                </div>
                <div
                  className="wrap-input100 validate-input m-b-23"
                >
                  <span className="label-input100">EMail</span>
                  <input
                    className="input100"
                    type="email"
                    name="email"
                    placeholder="Type your Email"
                    onChange={handleChange}
                  />
                </div>
                <div
                  className="wrap-input100 validate-input m-b-23"
                >
                  <span className="label-input100">User name</span>
                  <input
                    className="input100"
                    type="text"
                    name="username"
                    placeholder="Type your User name"
                    onChange={handleChange}
                  />
                </div>
                <div
                  className="wrap-input100 validate-input m-b-23"
                >
                  <span className="label-input100">Password</span>
                  <input
                    className="input100"
                    type="password"
                    name="password"
                    placeholder="Type your password"
                    onChange={handleChange}
                  />
                </div>
                <div
                  className="wrap-input100 validate-input m-b-23"
                >
                  <span className="label-input100"> Confirm Password</span>
                  <input
                    className="input100"
                    type="password"
                    name="confirmPassword"
                    placeholder="Retype your Password"
                    onChange={handleChange}
                  />
                </div>
                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn"></div>
                    <button
                      className="login100-form-btn"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </div>  
                  <span className="label-input100">
                  <Link to="/login">Back to Login</Link>
                  </span>                      
              </form>
            </div>
          </div>
         
        </div>
    </>
  );
}

export default Registration;
