import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import HomePage from './Pages/HomePage';
import MovieDescriptionPage from './Pages/MovieDescriptionPage';

const App = () => {
  // Initial movie data with descriptions and trailer embed links
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. Based on the novella "Rita Hayworth and the Shawshank Redemption" by Stephen King.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmJkLWJiMTEtM2QyZjVjMjg3ODAyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
      trailerURL: 'https://www.youtube.com/embed/PjE_m9h5W7w', // Example YouTube embed link
      rating: 4.8,
    },
    {
      id: 2,
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. Directed by Christopher Nolan.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
      trailerURL: 'https://www.youtube.com/embed/EXe4K7W5E1E',
      rating: 4.7,
    },
    {
      id: 3,
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption. A classic Quentin Tarantino film.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjYwYjkyZGQ5XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
      trailerURL: 'https://www.youtube.com/embed/s75fQ7T5R6o',
      rating: 4.5,
    },
    {
      id: 4,
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O. Another mind-bending masterpiece from Christopher Nolan.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMjAxMzYwNjUxMl5BMl5BanBnXkFtZTcwNTczMjk2NA@@._V1_FMjpg_UX1000_.jpg',
      trailerURL: 'https://www.youtube.com/embed/YoHD9XEInc0',
      rating: 4.6,
    },
    {
      id: 5,
      title: 'Forrest Gump',
      description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart. A heartwarming and iconic film.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNWIwODRkNzctZTY0NS00YzkzLWJhMzQtZTc3NmQ3Njg4Yzg2XkEyXkFqcGdeQXVyNjU0NTI0Nw@@._V1_FMjpg_UX1000_.jpg',
      trailerURL: 'https://www.youtube.com/embed/bTj9yK-z_fI',
      rating: 4.4,
    },
    {
      id: 6,
      title: 'The Matrix',
      description: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth about reality and his role in a war against its controllers. A groundbreaking sci-fi action film.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNzQzOTg2ODktYWRkNC00ZDdkLWFlYjEtZTc1MTYxODk1Y2Y4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
      trailerURL: 'https://www.youtube.com/embed/vKQi3bBA1y8',
      rating: 4.5,
    },
    {
      id: 7,
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival. A grand science fiction epic from Christopher Nolan.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BZjU5MzU2NTYtZDhmNS00ZTIyLWFjYjAtNTczNzA0MjEwNzY2XkEyXkFqcGdeQXVyMTA3MDExNDEwNTg@._V1_FMjpg_UX1000_.jpg',
      trailerURL: 'https://www.youtube.com/embed/zSWdZVtXT7E',
      rating: 4.6,
    },
  ]);

  // State for filtering
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  // State for add movie form visibility and new movie data
  const [showAddMovieForm, setShowAddMovieForm] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    trailerURL: '',
    rating: '',
  });

  // Handle adding a new movie
  const handleAddMovie = (e) => {
    e.preventDefault();
    if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.trailerURL && newMovie.rating) {
      setMovies([...movies, {
        id: movies.length + 1, // Simple ID generation
        title: newMovie.title,
        description: newMovie.description,
        posterURL: newMovie.posterURL,
        trailerURL: newMovie.trailerURL,
        rating: parseFloat(newMovie.rating),
      }]);
      // Reset form fields
      setNewMovie({ title: '', description: '', posterURL: '', trailerURL: '', rating: '' });
      setShowAddMovieForm(false); // Hide form after adding
    } else {
      // Using alert for simplicity, consider a modal for better UX in a real app
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
    <Router> {/* BrowserRouter wraps the entire application */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-10 px-4 font-sans antialiased">
        <div className="container mx-auto max-w-7xl bg-white p-8 sm:p-10 rounded-3xl shadow-2xl space-y-10">
          <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-8 leading-tight">
            My <span className="text-indigo-600">Movie & TV Show</span> Collection
          </h1>

          <Routes> {/* Define application routes */}
            <Route
              path="/"
              element={
                <HomePage
                  movies={movies}
                  filterTitle={filterTitle}
                  setFilterTitle={setFilterTitle}
                  filterRating={filterRating}
                  setFilterRating={setFilterRating}
                  showAddMovieForm={showAddMovieForm}
                  setShowAddMovieForm={setShowAddMovieForm}
                  newMovie={newMovie}
                  setNewMovie={setNewMovie}
                  handleAddMovie={handleAddMovie}
                  handleNewMovieChange={handleNewMovieChange}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDescriptionPage movies={movies} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
