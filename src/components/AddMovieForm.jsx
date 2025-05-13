import React, { useState } from "react";

const AddMovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");
  const [trailerLink, setTrailerLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Date.now(),
      title,
      description,
      posterURL,
      rating: parseFloat(rating),
      trailerLink,
    };
    onAddMovie(newMovie);
    // Clear form fields
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
    setTrailerLink("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow mb-6 max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold mb-4">Add a New Movie</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      ></textarea>

      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />

      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        min="0"
        max="10"
        step="0.1"
        required
      />

      <input
        type="text"
        placeholder="Trailer Embed Link (e.g. https://www.youtube.com/embed/XYZ)"
        value={trailerLink}
        onChange={(e) => setTrailerLink(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Add Movie
      </button>
    </form>
  );
};

export default AddMovieForm;
