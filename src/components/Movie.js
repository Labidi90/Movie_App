import React from "react";
import { movies } from "../Data";
import { Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import "./Movie.css";

const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((movie) => movie.id === +id);
  // console.log(movie);

  const onClick = () => {
    navigate("/");
  };

  return (
    <Card className="movie-card">
      <div>
        <h1 className="movie-title">{movie.title}</h1>
        <p className="movie-description">{movie.description}</p>
      </div>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="mt-5">
        <button className="btn btn-primary" onClick={onClick}>
          Go back
        </button>
      </div>
    </Card>
  );
};

export default Movie;
