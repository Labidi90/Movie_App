import React from "react";
import { Rating } from "react-simple-star-rating";
import "./Filter.css";

const Filter = ({ searchp, setSearchp, ratingp, setRatingp }) => {
  return (
    <div className="filter">
      <Rating
        className="filter-rate"
        onClick={setRatingp}
        ratingValue={ratingp}
      />
      <input
        className="filter-input"
        type="text"
        placeholder="...Search"
        onChange={setSearchp}
        value={searchp}
      />
    </div>
  );
};

export default Filter;
