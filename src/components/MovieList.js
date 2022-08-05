import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  // console.log(movies)
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {movies.map((movie) => (
        <MovieCard moviep={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
