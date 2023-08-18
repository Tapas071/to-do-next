"use client";
import { useState } from "react";
import Modal from "./Modal";
import axios from "axios";
// import Router from "next/router";
import { useRouter } from "next/navigation";

const AddPost = () => {
  const router = useRouter();
  // const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [input, setInput] = useState({});

  // handle submit function

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(`/api/post`, input)
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setModalOpen(false);
        setInput({});
        router.refresh();
      }); // clear input
  };

  // handle change function
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log(input);
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="text-red-700 font-bold "
      >
        Add TO Do
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form className="w-full" onSubmit={handleSubmit}>
          <h1 className="test-2xl pb-3 text-black font-bold"> Add New Post</h1>
          <hr />
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="w-full border-2 border-gray-300 p-2 rounded mb-3 text-black"
            value={input.title || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            className="w-full border-2 border-gray-300 p-2 rounded mb-3  text-black"
            value={input.description || ""}
            onChange={handleChange}
          />
          <button type="submit" className="bg-blue-700 text-white px-5">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddPost;
