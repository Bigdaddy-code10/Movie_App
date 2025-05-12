import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold">{movie.title}</h2>
      <p className="text-gray-600">Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
