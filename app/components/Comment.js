import React from "react";
import Metadata from "./Metadata";

export default function Comment(props) {
  console.log("props.text", typeof props.text);
  return (
    <div className="comment">
      <Metadata {...props} />
      <p dangerouslySetInnerHTML={{ __html: props.text }}></p>
    </div>
  );
}
