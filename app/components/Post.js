import React from "react";
import { getItemById, getComments } from "../utils/api";
import { getIdFromURL } from "../utils/helper-functions";
import Metadata from "./Metadata";
import Comment from "./Comment";
import Loading from "./Loading";

export default class Post extends React.Component {
  state = {
    post: {},
    comments: [],
    loading: true,
  };

  componentDidMount() {
    const postId = getIdFromURL(this.props.location.search);
    getItemById(postId)
      .then(
        (data) => {
          this.setState({ post: data, loading: !!data.kids });
          return data.kids;
        },
        (err) => {
          console.error("Error fetching post", err);
        }
      )
      .then((kids) => {
        if (kids) {
          getComments(kids).then(
            (comments) => {
              this.setState({ comments, loading: false });
            },
            (err) => console.log("Error fetching comments", err)
          );
        }
      });
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <Loading />
        ) : (
          <>
            <Metadata style="big" {...this.state.post} />
            <br></br>
            {this.state.comments.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))}
          </>
        )}
      </>
    );
  }
}
