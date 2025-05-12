//import React from "react";
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovieForm from "./components/AddMovieForm";

const App = () => {
  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description:
        "A thief who steals corporate secrets through dream-sharing technology.",
      posterURL:
        "https://m.media-amazon.com/images/I/51s+ep2Y4NL._AC_SY445_.jpg",
      rating: 8.8,
    },
    {
      id: 2,
      title: "Interstellar",
      description:
        "A team travels through a wormhole in space in an attempt to ensure humanity’s survival.",
      posterURL:
        "https://m.media-amazon.com/images/I/71n1bvlCaqL._AC_SY679_.jpg",
      rating: 8.6,
    },
    {
      id: 3,
      title: "The Dark Knight",
      description:
        "Batman must accept one of the greatest psychological and physical tests.",
      posterURL: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg",
      rating: 9.0,
    },
  ]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Movie Library</h1>
      <Filter
        titleFilter={titleFilter}
        rateFilter={rateFilter}
        setTitleFilter={setTitleFilter}
        setRateFilter={setRateFilter}
      />
      <AddMovieForm onAddMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
