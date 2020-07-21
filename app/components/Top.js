import React from "react";
import { getStories } from "../utils/api";

export default class Top extends React.Component {
  componentDidMount() {
    getStories("top")
      .then((data) => console.log("data in componentDidMount", data))
      .catch((err) => console.log("err in component did mount", err));
  }

  render() {
    return <h1>Top Component</h1>;
  }
}
