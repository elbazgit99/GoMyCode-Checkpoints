import React, { useState } from 'react';
import Filter from '../components/Filter'; // Import Filter component
import MovieList from '../components/MovieList'; // Import MovieList component

const HomePage = ({
  movies,
  filterTitle,
  setFilterTitle,
  filterRating,
  setFilterRating,
  showAddMovieForm,
  setShowAddMovieForm,
  newMovie,
  setNewMovie,
  handleAddMovie,
  handleNewMovieChange
}) => {
  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(filterTitle.toLowerCase());
    const matchesRating = filterRating === '' || (movie.rating >= parseFloat(filterRating));
    return matchesTitle && matchesRating;
  });

  return (
    <>
      {/* Filter Section */}
      <section>
        <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
          Find Your Favorites
        </h2>
        <Filter
          onTitleChange={setFilterTitle}
          onRatingChange={setFilterRating}
        />
      </section>

      {/* Add New Movie Section */}
      <section className="mb-8">
        <button
          onClick={() => setShowAddMovieForm(!showAddMovieForm)}
          className="w-full bg-indigo-600 text-white py-3.5 px-6 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          {showAddMovieForm ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
              Hide Add Movie Form
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
              </svg>
              Add New Movie
            </>
          )}
        </button>

        {showAddMovieForm && (
          <form onSubmit={handleAddMovie} className="bg-blue-50 p-6 sm:p-8 rounded-2xl shadow-inner mt-6 space-y-5 border border-blue-100">
            <h3 className="text-3xl font-semibold text-blue-800 mb-4 text-center">Add a New Movie</h3>
            <div>
              <label htmlFor="title" className="block text-gray-700 text-base font-medium mb-1">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={newMovie.title}
                onChange={handleNewMovieChange}
                placeholder="e.g., The Matrix"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-gray-700 text-base font-medium mb-1">Description:</label>
              <textarea
                id="description"
                name="description"
                value={newMovie.description}
                onChange={handleNewMovieChange}
                placeholder="Brief synopsis of the movie..."
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y transition duration-200"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="posterURL" className="block text-gray-700 text-base font-medium mb-1">Poster URL:</label>
              <input
                type="url"
                id="posterURL"
                name="posterURL"
                value={newMovie.posterURL}
                onChange={handleNewMovieChange}
                placeholder="https://example.com/movie-poster.jpg"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="trailerURL" className="block text-gray-700 text-base font-medium mb-1">Trailer Embed URL:</label>
              <input
                type="url"
                id="trailerURL"
                name="trailerURL"
                value={newMovie.trailerURL}
                onChange={handleNewMovieChange}
                placeholder="e.g., https://www.youtube.com/embed/aYxI3sYg9aA"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="rating" className="block text-gray-700 text-base font-medium mb-1">Rating (0-5):</label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={newMovie.rating}
                onChange={handleNewMovieChange}
                min="0"
                max="5"
                step="0.1"
                placeholder="e.g., 4.5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-700 transition duration-300 shadow-md flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
              </svg>
              Add Movie to Collection
            </button>
          </form>
        )}
      </section>

      {/* Movie List Section */}
      <section>
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          Your Collection
        </h2>
        <MovieList movies={filteredMovies} />
      </section>
    </>
  );
};

export default HomePage;
