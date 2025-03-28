import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addIndianMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useIndianMovies = () => {
  const dispatch = useDispatch();
  const getIndianMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_origin_country=IN",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    console.log("movies indiana",json.results)
    dispatch(addIndianMovies(json.results));
  };
  useEffect(() => {
    getIndianMovies();
  }, []);
};
export default useIndianMovies;
