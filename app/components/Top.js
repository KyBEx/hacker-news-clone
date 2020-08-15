import React from "react";
import { getNewOrTop } from "../utils/api";
import Metadata from "./Metadata";

export default class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    getNewOrTop("topstories")
      .then((data) => {
        this.setState({ posts: data });
      })
      .catch((err) => console.log("err in component did mount", err));
  }

  render() {
    return (
      <>
        {this.state.posts.map((post) => (
          <Metadata key={post.id} {...post} />
        ))}
      </>
    );
  }
}
