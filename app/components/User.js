import React from "react";
import { getIdFromURL } from "../utils/helper-functions";
import { getUser } from "../utils/api";
import UserSummary from "./UserSummary";

export default class User extends React.Component {
  state = {
    id: "",
    created: "",
    karma: "",
    about: "",
    submitted: [],
  };

  componentDidMount() {
    const userId = getIdFromURL(this.props.location.search);
    console.log("userID", userId);
    getUser(userId).then(
      (data) => {
        const { id, created, karma, about, submitted } = data;
        this.setState({ id, created, karma, about, submitted });
      },
      (err) => {
        console.log("error fetching user", err);
      }
    );
  }
  render() {
    return (
      <>
        <UserSummary {...this.state} />
        <br></br>
        <div>Posts</div>
      </>
    );
  }
}
