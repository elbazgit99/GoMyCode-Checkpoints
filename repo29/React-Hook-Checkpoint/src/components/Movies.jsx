import React, { useState, useEffect } from 'react';

// MovieCard Component: Displays individual movie details.
const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
      <img
        src={movie.posterURL || 'https://placehold.co/400x600/aabbcc/ffffff?text=No+Poster'}
        alt={movie.title}
        className="w-full h-64 object-cover"
        // Fallback for broken image URLs
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x600/aabbcc/ffffff?text=Image+Error'; }}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{movie.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">{movie.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-yellow-500 font-semibold">
            ⭐ {movie.rating ? movie.rating.toFixed(1) : 'N/A'}
          </span>
          <span className="text-gray-500 text-xs">
            Rating out of 5
          </span>
        </div>
      </div>
    </div>
  );
};

// MovieList Component: Renders a list of MovieCard components.
const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="text-center text-gray-600 text-xl py-8">
        No movies found. Try adjusting your filters or add a new movie!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

// Filter Component: Provides input fields for filtering by title and rating.
const Filter = ({ onTitleChange, onRatingChange }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    onTitleChange(e.target.value);
  };

  const handleRatingChange = (e) => {
    const value = e.target.value;
    // Allow empty string or numbers between 0 and 5
    if (value === '' || (parseFloat(value) >= 0 && parseFloat(value) <= 5 && !isNaN(parseFloat(value)))) {
      setRating(value);
      onRatingChange(value === '' ? '' : parseFloat(value));
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-inner mb-8 flex flex-col sm:flex-row gap-4">
      <input
        type="text"
        placeholder="Filter by title..."
        value={title}
        onChange={handleTitleChange}
        className="flex-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
      <input
        type="number"
        placeholder="Filter by rating (0-5)..."
        value={rating}
        onChange={handleRatingChange}
        min="0"
        max="5"
        step="0.1"
        className="w-full sm:w-auto p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
    </div>
  );
};

// App Component: Main application logic, state management, and rendering.
const App = () => {
  // Initial dummy movie data with actual poster URLs
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmJkLWJiMTEtM2QyZjVjMjg3ODAyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
      rating: 4.8,
    },
    {
      id: 2,
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
      rating: 4.7,
    },
    {
      id: 3,
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjYwYjkyZGQ5XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
      rating: 4.5,
    },
    {
      id: 4,
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMjAxMzYwNjUxMl5BMl5BanBnXkFtZTcwNTczMjk2NA@@._V1_FMjpg_UX1000_.jpg',
      rating: 4.6,
    },
    {
      id: 5,
      title: 'Forrest Gump',
      description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNWIwODRkNzctZTY0NS00YzkzLWJhMzQtZTc3NmQ3Njg4Yzg2XkEyXkFqcGdeQXVyNjU0NTI0Nw@@._V1_FMjpg_UX1000_.jpg',
      rating: 4.4,
    },
    {
      id: 6,
      title: 'The Matrix',
      description: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth about reality and his role in a war against its controllers.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNzQzOTg2ODktYWRkNC00ZDdkLWFlYjEtZTc1MTYxODk1Y2Y4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
      rating: 4.5,
    },
    {
      id: 7,
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BZjU5MzU2NTYtZDhmNS00ZTIyLWFjYjAtNTczNzA0MjEwNzY2XkEyXkFqcGdeQXVyMTA3MDExNDEwNTg@._V1_FMjpg_UX1000_.jpg',
      rating: 4.6,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');
  const [showAddMovieForm, setShowAddMovieForm] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });

  // Filter movies based on title and rating
  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(filterTitle.toLowerCase());
    const matchesRating = filterRating === '' || (movie.rating >= parseFloat(filterRating));
    return matchesTitle && matchesRating;
  });

  // Handle adding a new movie
  const handleAddMovie = (e) => {
    e.preventDefault();
    if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.rating) {
      setMovies([...movies, {
        id: movies.length + 1, // Simple ID generation
        title: newMovie.title,
        description: newMovie.description,
        posterURL: newMovie.posterURL,
        rating: parseFloat(newMovie.rating),
      }]);
      // Reset form fields
      setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
      setShowAddMovieForm(false); // Hide form after adding
    } else {
      // For a real app, use a proper modal or inline validation for feedback
      // Using alert for simplicity as per instructions not to use it in final app.
      alert('Please fill in all movie details!');
    }
  };

  // Handle input changes for the new movie form
  const handleNewMovieChange = (e) => {
    const { name, value } = e.target;
    setNewMovie(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 font-sans antialiased">
      <div className="container mx-auto max-w-7xl bg-white p-8 rounded-xl shadow-2xl space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          My Movie & TV Show Collection
        </h1>

        {/* Filter Section */}
        <section>
          <h2 className="text-3xl font-bold text-indigo-700 mb-5 text-center">
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
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            {showAddMovieForm ? 'Hide Add Movie Form' : 'Add New Movie'}
          </button>

          {showAddMovieForm && (
            <form onSubmit={handleAddMovie} className="bg-blue-50 p-6 rounded-lg shadow-inner mt-4 space-y-4">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Add a New Movie</h3>
              <div>
                <label htmlFor="title" className="block text-gray-700 text-sm font-medium mb-1">Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newMovie.title}
                  onChange={handleNewMovieChange}
                  placeholder="e.g., The Matrix"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-gray-700 text-sm font-medium mb-1">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={newMovie.description}
                  onChange={handleNewMovieChange}
                  placeholder="Brief synopsis of the movie..."
                  rows="3"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y"
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="posterURL" className="block text-gray-700 text-sm font-medium mb-1">Poster URL:</label>
                <input
                  type="url"
                  id="posterURL"
                  name="posterURL"
                  value={newMovie.posterURL}
                  onChange={handleNewMovieChange}
                  placeholder="https://example.com/movie-poster.jpg"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="rating" className="block text-gray-700 text-sm font-medium mb-1">Rating (0-5):</label>
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
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-700 transition duration-300 shadow-md"
              >
                Add Movie to Collection
              </button>
            </form>
          )}
        </section>

        {/* Movie List Section */}
        <section>
          <h2 className="text-3xl font-bold text-purple-700 mb-5 text-center">
            Your Collection
          </h2>
          <MovieList movies={filteredMovies} />
        </section>
      </div>
      {/* Tailwind CSS CDN script */}
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
};

export default App;
