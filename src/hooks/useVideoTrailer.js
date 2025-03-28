import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useVideoTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    // console.log("video", json);
    const filterTrailers = json.results.filter(
      (video) => video.type === "Trailer" || video.type === "Teaser"
    );
    const trailer = filterTrailers.length ? filterTrailers[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useVideoTrailer;
