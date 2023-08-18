import React from "react";
import AddPost from "./AddPost";

const addTodo = () => {
  console.log("add todo");
};
const Headers = () => {
  return (
    <>
      <div className="container flex justify-around m-2 p-2 bg-purple-50 ">
        <h2 className="text-xl font-semibold mb-4 text-red-400">Todo List</h2>
        <AddPost />
      </div>
    </>
  );
};

export default Headers;
