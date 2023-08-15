import React from "react";
import { Link } from "react-router-dom";
import { navLists } from "../constant";

function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        {navLists.map(({path, title}) => (
          <li>
            <Link key={title} to={path}> {title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
