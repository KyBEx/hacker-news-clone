import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function Metadata({ user, date, post = {} }) {
  return (
    <div>
      by {<NavLink to={`/user?id=${user.id}`}>{user.username}</NavLink>} on{" "}
      {date}{" "}
      {Object.keys(post).length > 0 && (
        <span>
          <NavLink to={`/post?id=${post.id}`}>{post.comments.length}</NavLink>{" "}
          comments
        </span>
      )}
    </div>
  );
}

Metadata.proptypes = {
  user: PropTypes.object.isRequired,
  data: PropTypes.string.isRequired,
  post: PropTypes.object,
};
