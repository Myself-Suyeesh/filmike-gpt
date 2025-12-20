/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store: any) => store.movies?.latestMovies);

  if (movies === null) return;
  // eslint-disable-next-line react-hooks/purity
  const randomMovieIndex = Math.floor(Math.random() * 50);

  console.log(randomMovieIndex);
  const mainMovie = movies[randomMovieIndex];
  const { originalTitle, plot, id } = mainMovie;

  console.log(mainMovie);

  return (
    <div>
      <VideoTitle title={originalTitle} plot={plot} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
