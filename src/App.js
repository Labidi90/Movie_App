import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import { movies } from "./Data";
import AddMovie from "./components/AddMovie";
import "./App.css";
import Filter from "./components/Filter";
import Movie from "./components/Movie";

const App = () => {
  const [film, setFilm] = useState(movies);
  const [search, setSearch] = useState("");
  function handleFilm(newfilm) {
    setFilm([...film, newfilm]);
  }

  function hndlsearch(event) {
    setSearch(event.target.value);
  }

  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };

  return (
    <div className="app">
      <h1>Best Movies</h1>
      <Filter
        ratingp={rating}
        setRatingp={handleRating}
        searchp={search}
        setSearchp={hndlsearch}
      />

      <AddMovie handleFilmp={handleFilm} />
      <Routes>
        <Route
          path="/"
          element={
            <MovieList
              movies={film.filter(
                (el) =>
                  el.title
                    .toLowerCase()
                    .includes(search.toLowerCase().trim()) &&
                  el.rating >= rating
              )}
            />
          }
        />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </div>
  );
};

export default App;
