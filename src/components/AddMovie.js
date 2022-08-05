import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
import Modal from "react-modal";
import { Rating } from "react-simple-star-rating";
import "./AddMovie.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };
Modal.setAppElement("#root");
const AddMovie = ({ handleFilmp }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [form, setForm] = useState({
    title: "",
    date: "",
    type: "",
    description: "",
    posterURL: "",
    trailer: "",
    rating: 0,
  });
  //fonction handlechange
  function handlechange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  function handleSubmit(event) {
    event.preventDefault();
    handleFilmp({ ...form, id: Math.random() });
    setForm({
      title: "",
      date: "",
      type: "",
      description: "",
      posterURL: "",
      trailer: "",
      rating: 0,
    });
    closeModal();
  }
  const handleRating = (rate) => {
    setForm({ ...form, rating: rate });
    // other logic
  };
  return (
    <div>
      <button onClick={openModal} className="add">
        <span className="text">+ Add Movie</span>
      </button>
      <div className="add-movie">
        <Modal
          className="add-modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          // style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="Modal-title">Add a new movie</div>
          <form onSubmit={handleSubmit}>
            <label> Title:</label>{" "}
            <input
              onChange={handlechange}
              type="text"
              placeholder=""
              name="title"
              value={form.title}
              required
            />{" "}
            <br />
            <label> Date:</label>
            <input
              type="text"
              onChange={handlechange}
              name="date"
              value={form.date}
              required
            />
            <br />
            <label> Type:</label>
            <input
              type="text"
              onChange={handlechange}
              name="type"
              value={form.type}
              required
            />
            <br />
            <label> Description:</label>
            <input
              type="text"
              onChange={handlechange}
              name="description"
              value={form.description}
              required
            />
            <br />
            <label> Poster:</label>
            <input
              type="url"
              onChange={handlechange}
              name="posterURL"
              value={form.posterURL}
              required
            />
            <br />
            <label> Rating:</label>
            <Rating onClick={handleRating} ratingValue={form.rating} />
            <br />
            <button className="Modal-btn">submit</button>
          </form>
          <button className="Modal-btn" onClick={closeModal}>
            close
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default AddMovie;
