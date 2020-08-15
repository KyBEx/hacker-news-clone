import React from "react";
import { getNewOrTop } from "../utils/api";

export default class Top extends React.Component {
  componentDidMount() {
    getNewOrTop("topstories")
      .then((data) => console.log("data in componentDidMount", data))
      .catch((err) => console.log("err in component did mount", err));
  }

  render() {
    return <h1>Top Component</h1>;
  }
}
