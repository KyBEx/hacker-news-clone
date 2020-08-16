import React from "react";
import Metadata from "./Metadata";
import { ThemeConsumer } from "../context/Theme";

export default function Comment(props) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div
          className={`comment ${
            theme === "light" ? "comment-color-light" : "comment-color-dark"
          }`}
        >
          <Metadata {...props} />
          <p dangerouslySetInnerHTML={{ __html: props.text }}></p>
        </div>
      )}
    </ThemeConsumer>
  );
}
