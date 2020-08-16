import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Nav from "./Nav";

export default function Metadata({
  by,
  time,
  descendants,
  id,
  type,
  title,
  url,
  style,
}) {
  return (
    <div className="med-padding">
      {type === "story" && title && (
        <div className="sml-padding">
          {url ? (
            <a
              className={`bold-red ${style ? "big-title" : ""}`}
              href={url}
              target="_blank"
            >
              {title}
            </a>
          ) : (
            <NavLink
              className={`bold-red ${style ? "big-title" : ""}`}
              to={`/post?id=${id}`}
            >
              {title}
            </NavLink>
          )}
        </div>
      )}
      <div>
        by{" "}
        {
          <NavLink className="meta-link" to={`/user?id=${by}`}>
            {by}
          </NavLink>
        }{" "}
        on {""}
        {time}{" "}
        {type === "story" && (
          <span>
            <NavLink className="meta-link" to={`/post?id=${id}`}>
              {descendants}
            </NavLink>{" "}
            comments
          </span>
        )}
      </div>
    </div>
  );
}

Metadata.proptypes = {
  by: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  url: PropTypes.string,
  descendants: PropTypes.number,
  style: PropTypes.string,
};
