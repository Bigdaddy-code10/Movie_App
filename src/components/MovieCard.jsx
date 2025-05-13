import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="w-full md:w-1/3 lg:w-1/4 mb-6">
      <div className="bg-white rounded shadow p-4 hover:shadow-lg transition cursor-pointer">
        <img
          src={movie.posterURL}
          alt={movie.title}
          className="w-full h-64 object-cover mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
        <p className="text-gray-700 text-sm mb-2 line-clamp-2">
          {movie.description}
        </p>
        <StarRating rating={movie.rating} />
      </div>
    </Link>
  );
};

export default MovieCard;
