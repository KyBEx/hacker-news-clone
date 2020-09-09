import React from "react";
import PropTypes from "prop-types";
import { convertDateString } from "../utils/helper-functions";

export default function Metadata({ id, created, karma, about }) {
  return (
    <>
      <div className="user-name">{id}</div>
      <div className="user-meta-data">
        joined <b>{convertDateString(created)}</b> has <b>{karma}</b> karma
      </div>
      <br></br>
      {about && <div dangerouslySetInnerHTML={{ __html: about }}></div>}
    </>
  );
}

Metadata.proptypes = {
  id: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired,
  karma: PropTypes.number,
  about: PropTypes.string,
};
