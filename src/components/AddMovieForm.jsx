import React, { useState } from "react";

const AddMovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !posterURL || !rating) return;

    const newMovie = {
      id: Date.now(),
      title,
      description,
      posterURL,
      rating: parseFloat(rating),
    };

    onAddMovie(newMovie);
    // Clear form
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md max-w-md mx-auto mb-6"
    >
      <h2 className="text-xl font-semibold mb-4">Add New Movie</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="number"
        min="0"
        max="10"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Add Movie
      </button>
    </form>
  );
};

export default AddMovieForm;
