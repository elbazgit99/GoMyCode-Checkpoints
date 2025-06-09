import React, { useState, useEffect } from 'react';

// Helper for unique IDs (for mock data)
const generateId = () => Math.random().toString(36).substr(2, 9);

// --- MovieCard Component ---
const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 flex flex-col h-full">
      <img
        src={movie.posterURL || "https://placehold.co/400x600/E0E0E0/333333?text=No+Image"}
        alt={movie.title}
        className="w-full h-64 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x600/E0E0E0/333333?text=No+Image"; }}
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{movie.title}</h3>
        <p className="text-gray-600 text-sm mb-3 flex-grow overflow-hidden text-ellipsis line-clamp-3">{movie.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-yellow-500 font-bold text-lg">⭐ {movie.rating}/10</span>
        </div>
      </div>
    </div>
  );
};

// --- MovieList Component ---
const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <p className="text-center text-gray-600 text-lg mt-8 col-span-full">
        No movies found matching your criteria.
      </p>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

// --- Filter Component ---
const Filter = ({ onTitleChange, onRatingChange, currentTitle, currentRating }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row gap-4 mb-8 items-end">
      <div className="flex-1 w-full">
        <label htmlFor="titleFilter" className="text-gray-700 block text-sm font-medium mb-1">Filter by Title</label>
        <input
          id="titleFilter"
          type="text"
          placeholder="e.g., Inception"
          value={currentTitle}
          onChange={(e) => onTitleChange(e.target.value)}
          // Enhanced input styling
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex-1 w-full">
        <label htmlFor="ratingFilter" className="text-gray-700 block text-sm font-medium mb-1">Minimum Rating</label>
        <input
          id="ratingFilter"
          type="number"
          placeholder="e.g., 7"
          value={currentRating}
          onChange={(e) => onRatingChange(parseFloat(e.target.value))}
          min="0"
          max="10"
          step="0.1"
          // Enhanced input styling
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
};

// --- AddMovieForm Component ---
const AddMovieForm = ({ onAddMovie }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.posterURL || !formData.rating) {
      console.error("Please fill in all fields.");
      return;
    }
    const newMovie = {
      id: generateId(),
      title: formData.title,
      description: formData.description,
      posterURL: formData.posterURL,
      rating: parseFloat(formData.rating),
    };
    onAddMovie(newMovie);
    setFormData({
      title: '',
      description: '',
      posterURL: '',
      rating: '',
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add a New Movie</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="text-gray-700 block text-sm font-medium mb-1">Title</label>
          <input
            id="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            required
            // Enhanced input styling
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="description" className="text-gray-700 block text-sm font-medium mb-1">Description</label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            required
            // Enhanced textarea styling
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm h-24 p-2 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <div>
          <label htmlFor="posterURL" className="text-gray-700 block text-sm font-medium mb-1">Poster URL</label>
          <input
            id="posterURL"
            type="url"
            value={formData.posterURL}
            onChange={handleChange}
            required
            // Enhanced input styling
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="rating" className="text-gray-700 block text-sm font-medium mb-1">Rating (0-10)</label>
          <input
            id="rating"
            type="number"
            value={formData.rating}
            onChange={handleChange}
            min="0"
            max="10"
            step="0.1"
            required
            // Enhanced input styling
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200">Add Movie</button>
      </form>
    </div>
  );
};

// --- App Component (Main) ---
const App = () => {
  const [movies, setMovies] = useState([
    {
      id: generateId(),
      title: "Inception",
      description: "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5NjgyMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 8.8
    },
    {
      id: generateId(),
      title: "The Matrix",
      description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is an elaborate deception of an evil cyber-intelligence.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTEwLThlYjAtMzRjZTljYjdmMTAwXkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_FMjpg_UX1000_.jpg",
      rating: 8.7
    },
    {
      id: generateId(),
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BZjdkOTI3ODBkNS00ZWI0LWExYmMtN2ExMjYwZmNhYzYxXkEyXkFqcGdeQXVyODg3NDUzMjk@._V1_FMjpg_UX1000_.jpg",
      rating: 8.6
    },
    {
      id: generateId(),
      title: "Die Hard",
      description: "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
      posterURL: "https://placehold.co/400x600/3A6EA5/FFFFFF?text=Action+Hero", // Placeholder for action movie
      rating: 8.2
    },
    {
      id: generateId(),
      title: "Mad Max: Fury Road",
      description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
      posterURL: "https://placehold.co/400x600/000000/F0F0F0?text=Desert+Chase", // Placeholder for action movie
      rating: 8.1
    },
    {
      id: generateId(),
      title: "Terminator 2: Judgment Day",
      description: "A cyborg is sent from the future to protect a young John Connor from a more advanced and powerful cyborg assassin.",
      posterURL: "https://placehold.co/400x600/B3CDE0/000000?text=Sci-Fi+Action", // Placeholder for action movie
      rating: 8.5
    }
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const handleAddMovie = (newMovie) => {
    setMovies(prevMovies => [...prevMovies, newMovie]);
  };

  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(filterTitle.toLowerCase());
    const matchesRating = filterRating === '' || movie.rating >= parseFloat(filterRating);
    return matchesTitle && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans antialiased">
      <style>
        {`
          body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
          }
          textarea {
            resize: vertical;
          }
        `}
      </style>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">My Favorite Movies</h1>

        {/* Add Movie Form */}
        <AddMovieForm onAddMovie={handleAddMovie} />

        {/* Filter Component */}
        <Filter
          onTitleChange={setFilterTitle}
          onRatingChange={setFilterRating}
          currentTitle={filterTitle}
          currentRating={filterRating}
        />

        {/* Movie List Component */}
        <MovieList movies={filteredMovies} />
      </div>
    </div>
  );
};

export default App;
