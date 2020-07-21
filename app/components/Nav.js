import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "rgb(252, 3, 3)",
};

export default function Nav() {
  return (
    <div className="row space-between">
      <ul className="row">
        <li>
          <NavLink exact className="nav-link" to="/" activeStyle={activeStyle}>
            Top
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            className="nav-link"
            to="/new"
            activeStyle={activeStyle}
          >
            New
          </NavLink>
        </li>
      </ul>
      <button>Darkmode</button>
    </div>
  );
}
