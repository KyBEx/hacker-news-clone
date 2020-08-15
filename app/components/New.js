import React from "react";
import { getNewOrTop } from "../utils/api";

export default class New extends React.Component {
  componentDidMount() {
    getNewOrTop("newstories")
      .then((data) => console.log("data in componentDidMount", data))
      .catch((err) => console.log("err in component did mount", err));
  }

  render() {
    return <h1>New Component</h1>;
  }
}
