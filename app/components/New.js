import React from "react";
import { getNewOrTop } from "../utils/api";
import Metadata from "./Metadata";
import Loading from "./Loading";

export default class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
    };
  }
  componentDidMount() {
    getNewOrTop("newstories")
      .then((data) => this.setState({ posts: data, loading: false }))
      .catch((err) => console.error("err in component did mount", err));
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <Loading />
        ) : (
          <>
            {this.state.posts.map((post) => (
              <Metadata key={post.id} {...post} />
            ))}
          </>
        )}
      </>
    );
  }
}
