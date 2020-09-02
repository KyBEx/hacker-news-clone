import React from "react";
import { getItemById, getComments } from "../utils/api";
import { getIdFromURL } from "../utils/helper-functions";
import Metadata from "./Metadata";
import Comment from "./Comment";

export default class Post extends React.Component {
  state = {
    post: {},
    comments: [],
    loading: true,
  };

  componentDidMount() {
    const postId = getIdFromURL(this.props.location.search);
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
        console.error("Error fetching post", err);
      }
    );
  }

  render() {
    return (
      <>
        <Metadata style="big" {...this.state.post} />
        <br></br>
        {this.state.comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </>
    );
  }
}
