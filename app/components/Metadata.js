import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function Metadata({
  by,
  time,
  descendants,
  id,
  score,
  title,
  url,
}) {
  return (
    <div>
      by {<NavLink to={`/user?id=${by}`}>{by}</NavLink>} on {""}
      {time}{" "}
      {title && (
        <span>
          <NavLink to={`/post?id=${id}`}>{title}</NavLink>
          {descendants}
          comments
        </span>
      )}
    </div>
  );
}

Metadata.proptypes = {
  by: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  score: PropTypes.number,
  url: PropTypes.string,
  descendants: PropTypes.number,
};
