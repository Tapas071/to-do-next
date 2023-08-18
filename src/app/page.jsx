import React from "react";
import PostList from "./components/PostList";
import Headers from "./components/Headers";

const getData = async () => {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });
  // console.log(data);
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
  const data = await response.json();
  return data;
};

const page = async () => {
  const posts = await getData();
  // console.log(posts);

  return (
    <>
      <Headers />
      <PostList posts={posts} />
    </>
  );
};

export default page;
