import React from "react";
import { getIdFromURL } from "../utils/helper-functions";
import { getUser, getUserPosts } from "../utils/api";
import UserSummary from "./UserSummary";
import Metadata from "./Metadata";

export default class User extends React.Component {
  state = {
    id: "",
    created: "",
    karma: "",
    about: "",
    posts: [],
    loading: true,
  };

  componentDidMount() {
    const userId = getIdFromURL(this.props.location.search);
    console.log("userID", userId);
    getUser(userId)
      .then(
        (data) => {
          const { id, created, karma, about, submitted } = data;
          this.setState({
            id,
            created,
            karma,
            about,
            loading: submitted.length ? true : false,
          });
          return submitted;
        },
        (err) => {
          console.log("error fetching user", err);
        }
      )
      .then((submitted) => {
        if (submitted.length) {
          getUserPosts(submitted).then((data) =>
            this.setState({ posts: data, loading: false })
          ),
            (err) => {
              console.log("error fetching user posts", err);
            };
        }
      });
  }
  render() {
    return (
      <>
        <UserSummary {...this.state} />
        <br></br>
        {this.state.posts.map((post) => (
          <Metadata key={post.id} {...post} />
        ))}
      </>
    );
  }
}
