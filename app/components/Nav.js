import React from "react";
import { NavLink } from "react-router-dom";
import { ThemeConsumer } from "../context/Theme";

const activeStyle = {
  color: "rgb(252, 3, 3)",
};

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <div className="row space-between">
          <ul className="row">
            <li>
              <NavLink
                exact
                className="nav-link"
                to="/"
                activeStyle={activeStyle}
              >
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
          <button onClick={toggleTheme} className="nav-btn">
            {theme === "light" ? "🔦" : "💡"}
          </button>
        </div>
      )}
    </ThemeConsumer>
  );
}
