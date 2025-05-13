import React from "react";
import { useParams, Link } from "react-router-dom";
import StarRating from "./StarRating";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie)
    return <p className="text-center text-red-500">Movie not found.</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
      <Link to="/" className="text-blue-600 underline mb-4 inline-block">
        &larr; Back to list
      </Link>
      <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="w-full mb-4 rounded"
      />
      <p className="mb-4 text-gray-700">{movie.description}</p>
      <div className="mb-4">
        <StarRating rating={movie.rating} />
        <p className="text-sm text-gray-500">({movie.rating}/10)</p>
      </div>
      {movie.trailerLink && (
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            width="100%"
            height="400"
            src={movie.trailerLink}
            title={`${movie.title} Trailer`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
