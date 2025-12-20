import { useEffect } from "react";
import { addLatestMovies } from "@/utils/movieSlice";
import { useDispatch } from "react-redux";

const useLatestMovies = () => {
  const dispatch = useDispatch();

  const getLatestMovies = async () => {
    const data = await fetch(
      "https://api.imdbapi.dev/titles?types=MOVIE&countryCodes=IN"
    );

    const json = await data.json();

    console.log("Data : ", json);
    dispatch(addLatestMovies(json.titles));
  };

  useEffect(() => {
    getLatestMovies();
  }, []);
};

export default useLatestMovies;
