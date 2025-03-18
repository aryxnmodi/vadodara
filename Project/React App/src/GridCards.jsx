import 'tailwindcss/tailwind.css';

/* Add your custom styles here */

import React from "react";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBirmHz8qoykNy914kAohj_N5ZTFdzD-mCJw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_2mqtBqHZc8ukydMost8FGG36S3BuAT4Yww&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LavlcMMlDcUap5W7eWcf25fyVWvvxTHpMw&s",
];

const GridCards = () => {
  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.length > 0 ? images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Random ${index + 1}`}
          className="w-full h-auto rounded-lg shadow-md"
        />
      )) : <p>No images available</p>}
    </div>
  );
};

export default GridCards;