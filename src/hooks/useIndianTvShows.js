import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addIndianTvShows } from "../utils/moviesSlice";
import { useEffect } from "react";

const useIndianTvShows = () => {
  const dispatch = useDispatch();
  const getIndianTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_origin_country=IN",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    
    dispatch(addIndianTvShows(json.results));
  };
  useEffect(() => {
    getIndianTvShows();
  }, []);
};
export default useIndianTvShows;
;
