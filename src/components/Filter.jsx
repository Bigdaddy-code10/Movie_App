import React from "react";

const Filter = ({ titleFilter, rateFilter, setTitleFilter, setRateFilter }) => {
  return (
    <div className="mb-6 flex flex-wrap gap-4 justify-center">
      <input
        type="text"
        placeholder="Search by title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
        className="border p-2 rounded w-60"
      />
      <input
        type="number"
        min="0"
        max="10"
        placeholder="Minimum rating"
        value={rateFilter}
        onChange={(e) => setRateFilter(Number(e.target.value))}
        className="border p-2 rounded w-40"
      />
    </div>
  );
};

export default Filter;
