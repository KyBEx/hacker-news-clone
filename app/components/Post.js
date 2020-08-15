import React from "react";
import { getItemById, getComments } from "../utils/api";

export default class Post extends React.Component {
  state = {
    post: {},
    comments: [],
    loading: true,
  };

  componentDidMount() {
    console.log("componentDidMount firing");
    const postId = this.props.location.search.slice(
      this.props.location.search.indexOf("=") + 1
    );
    getItemById(postId).then(
      (data) => {
        if (!data.kids) {
          return this.setState({ post: data, loading: false });
        }
        getComments(data.kids).then(
          (comments) => {
            this.setState({ post: data, comments, loading: false });
          },
          (err) => console.log("Error fetching comments", err)
        );
      },
      (err) => {
        console.log("Error fetching post", err);
      }
    );
  }

  render() {
    return <div>Post Placeholder</div>;
  }
}
