import React, { useState } from "react";
import { useAuth } from "../Hooks/AuthHook";

const AdminDasboard = () => {

  const { uploadImage } = useAuth();

  const [formData, setFormData] = useState({
    title: "",
    page: "",
    flag: "", // Initialize the flag state
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
      await uploadImage(data)
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
              <form className="login100-form validate-form" onSubmit={handleSubmit}>
                <span className="login100-form-title p-b-49"> Admin Panel</span>
                <div
                  className="wrap-input100 validate-input m-b-23"
                >
                  <span className="label-input100">Title</span>
                  <input
                    className="input100"
                    type="text"
                    name="title"
                    value={formData.title} 
                    onChange={handleInputChange}
                  />
                </div>
                <div
                  className="wrap-input100 validate-input m-b-23"
                >
                  <span className="label-input100">Page</span>
                  <input
                    className="input100"
                    type="text"
                    name="page"
                    value={formData.page} 
                    onChange={handleInputChange}
                  />
                </div>
                <div
                  className="wrap-input100 validate-input m-b-23"
                >
                  <span className="label-input100">Flag</span>
                  <input
                    className="input100"
                    type="text"
                    name="flag"
                    value={formData.flag}
                    onChange={handleInputChange}
                  />
                </div>
                <div
                  className=""
                >
                  <span className="label-input100">Image :</span>
                  <input
                    className=""
                    style={{padding:"50px"}}
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn"></div>
                    <button
                      className="login100-form-btn"
                      type="submit"
                    >
                      Upload
                    </button>
                  </div>
                </div>                
              </form>
            </div>
          </div>
        </div>
    </>
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>Title:</label>
    //       <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
    //     </div>
    //     <div>
    //       <label>Page:</label>
    //       <input type="text" name="page" value={formData.page} onChange={handleInputChange} />
    //     </div>
    //     <div>
    //       <label>Flag:</label>
    //       <input type="text" name="flag" value={formData.flag} onChange={handleInputChange} />
    //     </div>
    //     <div>
    //       <label>Image:</label>
    //       <input type="file" name="image" onChange={handleFileChange} />
    //     </div>
    //     <button type="submit">Upload</button>
    //   </form>
    // </div>
  );
};

export default AdminDasboard;
