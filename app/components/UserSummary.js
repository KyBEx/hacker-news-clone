import React from "react";
import PropTypes from "prop-types";
import { convertDateString } from "../utils/helper-functions";

export default function Metadata({ id, created, karma, about }) {
  return (
    <>
      <div>{id}</div>
      <div>
        joined {convertDateString(created)} has {karma} karma
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
