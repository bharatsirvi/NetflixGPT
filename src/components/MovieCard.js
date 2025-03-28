import React from "react";
import { TMDB_IMAGE_BASE_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-60 h-80 m-1 cursor-pointer group relative transition-all duration-300 ease-in-out overflow-hidden rounded-md hover:scale-95">
      <img
        className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-0"
        alt={movie.title}
        src={TMDB_IMAGE_BASE_URL + movie.poster_path}
      />

      <div className="absolute rounded-md inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
        <div className="h-1/2 w-full overflow-hidden">
          <img
            className="h-full w-full object-cover "
            alt={movie.title}
            src={TMDB_IMAGE_BASE_URL + movie.backdrop_path}
          />
        </div>

        <div className="h-1/2 w-full bg-black bg-opacity-90 p-3 overflow-y-auto no-scrollbar">
          <h3 className="text-white font-bold text-lg mb-2">{movie.title}</h3>
          <div className="flex items-center text-gray-300 text-sm mb-2">
            <span>{new Date(movie.release_date).getFullYear()}</span>
            <span className="mx-2">•</span>
            <span>{Math.round(movie.vote_average * 10)}%</span>
          </div>
          <p className="text-gray-300 text-xs line-clamp-5 mb-2">
            {movie.overview}
          </p>
          <div className="text-xs text-gray-400">
            {movie.genre_ids?.join(" • ")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
