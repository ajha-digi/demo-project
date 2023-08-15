import React from "react";
import { Link } from "react-router-dom";
import { navLists } from "../constant";
import { useAuth } from "../Hooks/AuthHook";

function Navbar() {
  const { authToken, user, logout } = useAuth();

  const filteredNavLists = navLists.filter(({ path, title }) => {
    if (authToken && user) {
      return !(title === "Login" || title === "Register");
    }
    return { path, title };
  });

  return (
    <nav>
      <ul className="navbar">
        {filteredNavLists.map(({ path, title }) => (
          <li key={title}>
            <Link to={path}>{title}</Link>
          </li>
        ))}
        {authToken && user && <button onClick={logout}>Log out</button>}
      </ul>
    </nav>
  );
}

export default Navbar;
