import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/AuthHook";
import { capitalizeAndReplace } from "../helper";

function Preview() {
  const { authToken, getPages, pages } = useAuth();
  const navigate = useNavigate();

  const [pageLists, setPageLists] = useState([]);
  const [page, setPage] = useState("");

  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, [authToken]);

  useEffect(() => {
    getPages();
  }, []);

  useEffect(() => {
    if (pages && pages.length) {
      const pageArray = pages.map((item) => {
        return { value: item.page, text: capitalizeAndReplace(item.page) };
      });
      setPageLists(pageArray);
    }
  }, [pages]);

  console.log(page);

  return (
    <div style={{ minHeight: "75vh" }}>
      <label htmlFor="page">Select page</label>
      <select
        name="page"
        id="page"
        value={page}
        onChange={(e) => setPage(e.target.value)}
      >
        {pageLists.map(({ text, value }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
      {page && (
        <Link
          to={`/admin-dashboard/preview/${page}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Preview
        </Link>
      )}
    </div>
  );
}

export default Preview;
