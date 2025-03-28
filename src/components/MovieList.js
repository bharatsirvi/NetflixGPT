import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ catagory, movies }) => {
  return (
    <div className="my-10">
      <h1 className="p-1 font-sans text-white text-xl mb-2"> {catagory}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
