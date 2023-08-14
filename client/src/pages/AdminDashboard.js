import React, { useContext, useState } from "react";
import { AuthContext } from "../context/RootContext";

const AdminDasboard = () => {

  const { uploadImage } = useContext(AuthContext);

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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
        </div>
        <div>
          <label>Page:</label>
          <input type="text" name="page" value={formData.page} onChange={handleInputChange} />
        </div>
        <div>
          <label>Flag:</label>
          <input type="text" name="flag" value={formData.flag} onChange={handleInputChange} />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" name="image" onChange={handleFileChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default AdminDasboard;
