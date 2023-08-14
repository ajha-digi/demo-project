import React, { useState } from "react";
import { useAuth } from "../Hooks/AuthHook";
import { setAuthToken } from "../services/axiosInterceptor";

function Registration() {
  const { authToken, register } = useAuth();

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
              </form>
            </div>
          </div>
        </div>
    </>
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     name="name"
    //     placeholder="Name"
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="email"
    //     name="email"
    //     placeholder="Email"
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="text"
    //     name="username"
    //     placeholder="Username"
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="password"
    //     name="password"
    //     placeholder="Password"
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="password"
    //     name="confirmPassword"
    //     placeholder="Confirm Password"
    //     onChange={handleChange}
    //   />
    //   <button type="submit">Register</button>
    // </form>
  );
}

export default Registration;
