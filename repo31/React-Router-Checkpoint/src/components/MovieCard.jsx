import { Link } from 'react-router-dom'; // Import Link for routing

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="block"> {/* Makes the entire card clickable */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-102 hover:shadow-2xl border border-gray-200 cursor-pointer">
        <img
          src={movie.posterURL || 'https://placehold.co/400x600/aabbcc/ffffff?text=No+Poster'}
          alt={movie.title}
          className="w-full h-72 object-cover object-center" // Slightly taller poster
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x600/aabbcc/ffffff?text=Image+Error'; }}
        />
        <div className="p-5"> {/* Increased padding */}
          <h3 className="text-xl font-bold text-gray-800 mb-2 truncate" title={movie.title}>
            {movie.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed"> {/* Added line-clamp and leading */}
            {movie.description}
          </p>
          <div className="flex items-center justify-between pt-2 border-t border-gray-100"> {/* Added top border for separation */}
            <span className="text-yellow-500 font-extrabold text-lg flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
              {movie.rating ? movie.rating.toFixed(1) : 'N/A'}
            </span>
            <span className="text-gray-500 text-xs font-medium">
              (out of 5)
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
