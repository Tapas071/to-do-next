import React from "react";
import Post from "./Post";

const PostList = ({ posts }) => {
  // console.log(posts);
  return (
    <div>
      <div className="bg-yellow-200 p-4">
        <ul className="list-disc pl-6">
          {posts.map((post) => (
            <li key={post.id} className="mb-4">
              <Post key={post.id} post={post} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostList;
//
