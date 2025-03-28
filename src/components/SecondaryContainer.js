import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="-mt-64 pb-16 bg-[linear-gradient(to_bottom,rgba(10,10,10,1)_90%,rgba(10,10,10,0)_100%)]">
      <div className="-mt-64 relative z-40 pl-12">
        <MovieList catagory={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList catagory={"Indian Cinema"} movies={movies.indianMovies} />
        <MovieList catagory={"Now Playing"} movies={movies.nowPlayingMovies} />
       
        <MovieList catagory={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList catagory={"Popular"} movies={movies.popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
