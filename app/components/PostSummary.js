import React from "react";
import Metadata from "./Metadata";

export default function PostSummary({ user, date, post }) {
  return (
    <>
      <div>{post.title}</div>
      <Metadata user={user} date={date} post={post} />
    </>
  );
}
