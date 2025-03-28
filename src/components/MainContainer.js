import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.indianMovies);
  if (!movies) return;
  const mainMovie = movies[0];

  console.log(mainMovie);
  const { title, overview, id, adult ,backdrop_path } = mainMovie;
  return (
    <div className="relative bg-neutral-950">
      <VideoTitle title={title} overview={overview} adult={adult} />
      <VideoBackground movieId={id} backdropPath={backdrop_path} />
    </div>
  );
};

export default MainContainer;
