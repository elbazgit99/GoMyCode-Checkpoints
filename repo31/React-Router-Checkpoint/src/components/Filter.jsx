import React, { useState } from 'react';

const Filter = ({ onTitleChange, onRatingChange }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    onTitleChange(e.target.value);
  };

  const handleRatingChange = (e) => {
    const value = e.target.value;
    if (value === '' || (parseFloat(value) >= 0 && parseFloat(value) <= 5 && !isNaN(parseFloat(value)))) {
      setRating(value);
      onRatingChange(value === '' ? '' : parseFloat(value));
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg mb-10 flex flex-col md:flex-row gap-5 items-center">
      <input
        type="text"
        placeholder="Filter by title..."
        value={title}
        onChange={handleTitleChange}
        className="flex-1 w-full p-3 rounded-lg border-2 border-blue-200 focus:outline-none focus:ring-3 focus:ring-blue-400 focus:border-transparent transition duration-200 text-gray-700 placeholder-gray-400"
      />
      <input
        type="number"
        placeholder="Min rating (0-5)..."
        value={rating}
        onChange={handleRatingChange}
        min="0"
        max="5"
        step="0.1"
        className="w-full md:w-48 p-3 rounded-lg border-2 border-blue-200 focus:outline-none focus:ring-3 focus:ring-blue-400 focus:border-transparent transition duration-200 text-gray-700 placeholder-gray-400"
      />
    </div>
  );
};

export default Filter;
