"use client";
import { useState } from "react";
// import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import Modal from "./Modal";
import axios from "axios";
import { useRouter } from "next/navigation";

const Post = ({ post }) => {
  const router = useRouter();
  const [showEditModal, setEditShowModal] = useState(false);
  const [postToEdit, setPostToEdit] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPostToEdit((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log(input);
  };
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    // console.log(postToEdit);
    // console.log(post.id);

    axios
      .patch(`/api/post/${post.id}`, postToEdit)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setEditShowModal(false);
        setPostToEdit({});
        router.refresh();
      });
  };

  const dltHandler = (id) => {
    console.log("post to dlt ");
    axios
      .delete(`/api/post/${id}`)
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // console.log("post deleted");
        router.refresh();
      });
  };

  //   console.log(` this is the posts from post` + post);
  return (
    <div>
      <div className=" m-4 p-4 bg-green-100">
        <h1 className="text-black font-bold bg-slate-50">{post.title}</h1>
        <p className="m-1 p-1 text-pink-500">{post.description}</p>
        <div className="flex justify-end">
          <button
            onClick={() => setEditShowModal(true)}
            className="text-red-700 font-bold "
          >
            <BiEditAlt />
            <Modal modalOpen={showEditModal} setModalOpen={setEditShowModal}>
              <form className="w-full" onSubmit={handleEditSubmit}>
                <h1 className="test-2xl pb-3 text-black font-bold">
                  {" "}
                  Edit Post
                </h1>
                <hr />
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  className="w-full border-2 border-gray-300 p-2 rounded mb-3 text-black"
                  value={postToEdit.title || ""}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  className="w-full border-2 border-gray-300 p-2 rounded mb-3  text-black"
                  value={postToEdit.description || ""}
                  onChange={handleChange}
                />
                <button type="submit" className="bg-blue-700 text-white px-5">
                  Submit
                </button>
              </form>
            </Modal>
          </button>
          <button
            onClick={() => dltHandler(post.id)}
            className="text-red-700 font-bold "
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
