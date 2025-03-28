import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];

  console.log(mainMovie);
  const { title, overview, id, adult } = mainMovie;
  return (
    <div className="relative">
      <VideoTitle title={title} overview={overview} adult={adult} />
      <VideoBackground movieId={id}  />
    </div>
  );
};

export default MainContainer;
