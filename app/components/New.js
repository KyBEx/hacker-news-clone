import React from "react";
import { getStories } from "../utils/api";

export default class New extends React.Component {
  componentDidMount() {
    getStories("new")
      .then((data) => console.log("data in componentDidMount", data))
      .catch((err) => console.log("err in component did mount", err));
  }

  render() {
    return <h1>New Component</h1>;
  }
}
