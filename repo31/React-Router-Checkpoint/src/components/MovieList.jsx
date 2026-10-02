import React from 'react';
import MovieCard from './MovieCard'; // Import MovieCard

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="text-center text-gray-600 text-2xl py-12 bg-gray-50 rounded-xl shadow-inner font-semibold">
        No movies found. Try adjusting your filters or add a new movie!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 sm:px-0">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
