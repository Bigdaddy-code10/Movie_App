import React from "react";

const StarRating = ({ rating }) => {
  const stars = [];
  const starCount = Math.round(rating / 2); // Convert 10 to 5 scale

  for (let i = 1; i <= 5; i++) {
    if (i <= starCount) {
      stars.push(
        <span key={i} className="text-yellow-500 text-lg">
          ★
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="text-gray-300 text-lg">
          ★
        </span>
      );
    }
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
