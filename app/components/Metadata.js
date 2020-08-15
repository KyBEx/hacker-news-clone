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
    <div className="med-padding">
      {title && (
        <div className="sml-padding">
          <a className="bold-red" href={url} target="_blank">
            {title}
          </a>
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
        {descendants && (
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
  score: PropTypes.number,
  url: PropTypes.string,
  descendants: PropTypes.number,
};
