import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import hooks for routing

const MovieDescriptionPage = ({ movies }) => {
  const { id } = useParams(); // Get movie ID from URL
  const navigate = useNavigate(); // Hook for programmatic navigation
  const movie = movies.find(m => m.id === parseInt(id)); // Find the movie by ID

  // If movie not found, navigate back to home or show a 404
  if (!movie) {
    return (
      <div className="text-center p-8">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Movie Not Found!</h2>
        <p className="text-gray-700 mb-6">The movie you are looking for does not exist.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-indigo-600 text-white py-2 px-5 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-md"
        >
          Back to Home
        </button>
      </div>
    );
  }

  // Sanitize the trailer URL for embedding
  const getEmbedUrl = (url) => {
    if (!url) return null;
    // Basic YouTube embed conversion
    if (url.includes('youtube.com/watch?v=')) {
      return url.replace('watch?v=', 'embed/');
    }
    // Handle already embedded links or Vimeo
    if (url.includes('youtube.com/embed/') || url.includes('vimeo.com/')) {
      return url;
    }
    return null; // Return null if not a recognized embed format
  };

  const embeddedTrailerUrl = getEmbedUrl(movie.trailerURL);

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 sm:p-10">
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-semibold hover:bg-gray-300 transition duration-300 mb-8 shadow-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
          <path fillRule="evenodd" d="M11.03 4.484c.075-.083.179-.136.29-.136H12c.394 0 .62.472.406.81l-3.328 5.305c-.075.12-.179.193-.29.193H8.25a.75.75 0 0 1-.671-.49L4.03 3.21a.75.75 0 0 1 .67-1.144h.944a.75.75 0 0 1 .53.22Z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M17.803 20.732c.075.083.179.136.29.136H19.5a.75.75 0 0 0 .67-1.144l-3.328-5.305c-.075-.12-.179-.193-.29-.193h-.975a.75.75 0 0 0-.67.49l-3.328 5.305a.75.75 0 0 0 .67 1.144h.944a.75.75 0 0 0 .53-.22Z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M18.89 8.666c.075.084.179.137.29.137h.944a.75.75 0 0 0 .53-.22l3.298-5.305a.75.75 0 0 0-.67-1.144h-.945a.75.75 0 0 0-.53.22L19.5 7.423a.75.75 0 0 0 .671.49h-.975a.75.75 0 0 0-.67.49l-3.328 5.305a.75.75 0 0 0 .67 1.144h.944a.75.75 0 0 0 .53-.22l3.298-5.305a.75.75 0 0 0-.67-1.144h-.945a.75.75 0 0 0-.53.22Z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M3.53 15.484c.075-.083.179-.136.29-.136H4.5c.394 0 .62.472.406.81l-3.328 5.305c-.075.12-.179-.193-.29.193H.75a.75.75 0 0 1-.671-.49L-.97 13.21a.75.75 0 0 1 .67-1.144h.944a.75.75 0 0 1 .53.22Z" clipRule="evenodd" />
        </svg>
        Back to Home
      </button>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={movie.posterURL || 'https://placehold.co/400x600/aabbcc/ffffff?text=No+Poster'}
            alt={movie.title}
            className="w-full rounded-lg shadow-xl object-cover object-center aspect-[2/3]"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{movie.title}</h1>
          <p className="text-yellow-500 text-2xl font-semibold mb-6 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96-1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>
            {movie.rating ? movie.rating.toFixed(1) : 'N/A'} <span className="text-gray-500 text-base font-normal">(out of 5)</span>
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Synopsis:</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">{movie.description}</p>

          {embeddedTrailerUrl ? (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Trailer:</h2>
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}> {/* 16:9 Aspect Ratio */}
                <iframe
                  src={embeddedTrailerUrl}
                  title={`${movie.title} Trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 mt-8">No trailer available for this movie.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDescriptionPage;
