import React from "react";
import { movies } from "../Data";
import { useParams, useNavigate } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((movie) => movie.id == id);
  // console.log(movie);

  const onClick = () => {
    navigate("/");
  };

  return (
    <Movie>
      <img src={movie.posterURL} className="img-fluid" alt="..." />

      <div className="mt-5">
        <button className="btn btn-secondary" onClick={onClick}>
          Go back
        </button>
      </div>
    </Movie>
  );
};

export default Movie;
