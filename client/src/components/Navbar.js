import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { navLists } from "../constant";
import { useAuth } from "../Hooks/AuthHook";

function Navbar() {
  const { authToken, user, logout, dynamicPageData, data } = useAuth();
  const { page } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!!page) {
      dynamicPageData(page);
    }
  }, [page]);

  if (pathname.includes("/admin-dashboard/preview/")) {
    if (data && data.length < 1) {
      return null;
    }
  }

  const filteredNavLists = navLists.filter(({ title }) => {
    if (authToken && user) {
      return title === "Admin Dasboard";
    }
    return title === "Login";
  });

  return (
    <nav>
      <ul className="navbar">
        {pathname.includes("/admin-dashboard/preview/") ? (
          <h4 style={{ color: "white" }}>{data[0]?.updatedBy?.name}</h4>
        ) : (
          filteredNavLists.map(({ path, title }) => (
            <li key={title}>
              <Link to={path}>{title}</Link>
            </li>
          ))
        )}
        {authToken && user && (
          <li>
            <span style={{ color: "white" }}>Welcome Back {user}</span>
            <button className="log-out-btn" onClick={logout}>
              Log out
            </button>
          </li>
        )}
        {pathname.includes("/admin-dashboard/preview/") && (
          <h4 style={{ color: "white" }}>Preview page</h4>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
