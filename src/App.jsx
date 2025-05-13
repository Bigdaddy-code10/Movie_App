import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovieForm from "./components/AddMovieForm";
import MovieDetails from "./components/MovieDetails";

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
        "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      rating: 8.8,
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 2,
      title: "Interstellar",
      description:
        "A team travels through a wormhole in space to ensure humanity’s survival.",
      posterURL:
        "https://cdn.displate.com/artwork/270x380/2023-12-11/84e20ced77de1a2d0ac2b2b4eaa1e848_a505a61fd652bfb472ed74789a3c59d8.jpg",
      rating: 8.6,
      trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      id: 3,
      title: "The Dark Knight",
      description:
        "Batman must accept one of the greatest psychological and physical tests.",
      posterURL: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg",
      rating: 9.0,
      trailerLink: "https://www.youtube.com/embed/EXeTwQWrcwY",
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
    <Router>
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6">Movie Library</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter
                  titleFilter={titleFilter}
                  rateFilter={rateFilter}
                  setTitleFilter={setTitleFilter}
                  setRateFilter={setRateFilter}
                />
                <AddMovieForm onAddMovie={addMovie} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
