import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../Hooks/AuthHook";
import { capitalizeAndReplace, capitalizeWords } from "../helper";

const AdminDasboard = () => {
  const { authToken, submitAdminData, recentlyUploadedData, getPages, pages } =
    useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    getPages();
  }, []);

  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, [authToken]);

  const [pageLists, setPageLists] = useState([]);
  const [isAddPage, setIsAddPage] = useState(false);
  const [isCreatePage, setIsCreatePage] = useState(false);
  const [newPage, setNewPage] = useState("");
  const [isPreview, setIsPreview] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    page: "home",
    html: "",
    css: "",
    category: "a",
  });

  useEffect(() => {
    if (pages && pages.length) {
      const pageArray = pages.map((item) => {
        return { value: item.page, text: capitalizeAndReplace(item.page) };
      });
      setPageLists(pageArray);
    }
  }, [pages]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { title, html, page, css, category } = formData;
    const data = new FormData();
    data.append("title", title);
    data.append("html", html);
    data.append("page", page);
    data.append("css", css);
    data.append("category", category);

    try {
      await submitAdminData(data);
      setIsPreview(true);
      alert("Data submitted successfully");
      console.log("Data submitted successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleClick = (event, type) => {
    event.preventDefault();
    if (type === "create") {
      if (!newPage) {
        alert("Please enter page name");
        return false;
      }
      setIsCreatePage(true);
      setPageLists([
        ...pageLists,
        {
          value: newPage.replace(/\s+/g, "-"),
          text: capitalizeWords(newPage),
        },
      ]);
      setFormData({
        ...formData,
        page: newPage.replace(/\s+/g, "-"),
      });
    } else {
      setIsAddPage(true);
    }
    setNewPage("");
  };

  const handleCancel=()=>{
    setIsAddPage(false)
    navigate("/")
  }

  return (
    <>
      <div className="limiter">
        <div className="">
          <div className="">
            {isPreview && (
              <Link
                to={`/admin-dashboard/preview/${recentlyUploadedData.page}?category=${recentlyUploadedData.category}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </Link>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <label htmlFor="page">Select page</label>
                  <select
                    name="page"
                    className="page"
                    value={formData.page}
                    onChange={handleInputChange}
                  >
                    {pageLists.map(({ text, value }) => (
                      <option key={value} value={value}>
                        {text}
                      </option>
                    ))}
                  </select>
                  {!isAddPage ? (
                    <button onClick={(e) => handleClick(e, "add")}>
                      Add New page
                    </button>
                  ) : (
                    !isCreatePage && (
                      <>
                        <label htmlFor="Add new page"> Add new page</label>
                        <input
                          placeholder="Page name"
                          onChange={(e) => setNewPage(e.target.value)}
                        />
                        <button onClick={(e) => handleClick(e, "create")}>
                          Create New page
                        </button>
                        <button onClick={handleCancel}>
                         Cancel
                        </button>
                      </>
                    )
                  )}
                </div>
              </div>
              <div className="row" id="titleInput">
                <div className="col">
                  <label htmlFor="title">Title</label>
                  <input
                    className="page"
                    placeholder="Enter title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="ctegory">Select Category</label>
                  <select
                    className="page"
                    name="category"
                    id="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option key="a" value="a">
                      A
                    </option>
                    <option key="b" value="b">
                      B
                    </option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor="html">Html code</label>
                  <textarea
                    name="html"
                    value={formData.html}
                    onChange={handleInputChange}
                    rows="10"
                    cols="35"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="css">CSS code</label>
                  <textarea
                    name="css"
                    value={formData.css}
                    onChange={handleInputChange}
                    rows="10"
                    cols="35"
                  />
                </div>
              </div>

              <button className="button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDasboard;
