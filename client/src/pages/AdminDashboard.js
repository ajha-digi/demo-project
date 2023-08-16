import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../Hooks/AuthHook";

const AdminDasboard = () => {
  const { uploadImage, authToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, [authToken]);

  const [formData, setFormData] = useState({
    title: "",
    page: "home",
    flag: "",
    image: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { title, page, flag, image } = formData;
    const data = new FormData();
    data.append("title", title);
    data.append("page", page);
    data.append("flag", flag);
    data.append("image", image);

    try {
      await uploadImage(data);
      console.log("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form
              className="login100-form validate-form"
              onSubmit={handleSubmit}
            >
              <span className="login100-form-title p-b-49"> Admin Panel</span>
              <div className="wrap-input100 validate-input m-b-23">
                <span className="label-input100">Title</span>
                <input
                  className="input100"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="wrap-input100 validate-input m-b-23">
                <label for="page">Choose a page:</label>

                <select
                  name="page"
                  id="page"
                  value={formData.page}
                  onChange={handleInputChange}
                >
                  <option value="home">Home</option>
                  <option value="about-us">About Us</option>
                  <option value="contact-us">Contact Us</option>
                </select>
              </div>
              <div className="wrap-input100 validate-input m-b-23">
                <span className="label-input100">Flag</span>
                <input
                  className="input100"
                  type="text"
                  name="flag"
                  value={formData.flag}
                  onChange={handleInputChange}
                />
              </div>
              <div className="">
                <span className="label-input100">Image :</span>
                <input
                  className=""
                  style={{ padding: "50px" }}
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                />
              </div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <button className="login100-form-btn" type="submit">
                    Upload
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDasboard;
