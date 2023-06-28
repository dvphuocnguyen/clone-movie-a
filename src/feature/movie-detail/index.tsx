import { useState } from "react";
import { useMatch } from "react-router-dom";
import {
  useGetDetailsQuery,
  useGetDetailsWithTypeQuery,
} from "~/API/_apiMovies";
import Footer from "~/components/Footer/Footer";
import Nav from "~/components/Header";
import ModalVideo from "~/components/ModalVideo";
import Articles from "./components/Articles";
import Banner from "./components/Banner/Banner";
import ModalFilm from "./components/Banner/ModalFilm";

function MovieDetail() {
  const match = useMatch("/movie/:movieId");
  const movieId = match?.params.movieId;
  const [visibleModalFilm, setVisbleModalFilm] = useState(false);
  const [keyMovie, setKeyMovie] = useState("");
  const [visibleModalVideo, setVisbleModalVideo] = useState(false);
  const detail = useGetDetailsQuery(movieId);
  const img = useGetDetailsWithTypeQuery({
    id: movieId,
    type: "images",
  });

  const people = useGetDetailsWithTypeQuery({
    id: movieId,
    type: "credits",
  });

  const handleShowModalVideo = (keyMovie: string) => {
    let theMovieDetial: HTMLElement = document.getElementById(
      "movie-detail"
    ) as HTMLElement;
    theMovieDetial.style.filter = "grayscale(1)";
    let nav: HTMLElement = document.getElementById("nav") as HTMLElement;
    nav.style.filter = "grayscale(1)";
    setVisbleModalVideo(true);
    setKeyMovie(keyMovie);
  };

  return (
    <>
      {detail.isSuccess && img.isSuccess && people.isSuccess && (
        <>
          <div
            className={` ${
              visibleModalFilm ? "opacity-100 visible" : "hidden opacity-0"
            } transition-all duration-500`}
          >
            <ModalFilm
              setVisbleModalFilm={setVisbleModalFilm}
              posters={img.data.posters}
            />
          </div>
          {visibleModalVideo && (
            <div className={`  transition-all duration-500`}>
              <ModalVideo
                setVisibleModalVideo={setVisbleModalVideo}
                keyVideo={keyMovie}
              />
            </div>
          )}

          <div
            className={` ${
              visibleModalVideo || visibleModalFilm
                ? "opacity-100 visible"
                : "hidden opacity-0"
            } z-[10000000] w-screen h-screen   fixed`}
          ></div>
          <Nav />
          <div id="movie-detail">
            <Banner
              backdrop_path={detail.data.backdrop_path}
              title={detail.data.title}
              poster_path={detail.data.poster_path}
              release_date={detail.data.release_date}
              original_language={detail.data.original_language}
              genres={detail.data.genres}
              runtime={detail.data.runtime}
              vote_average={detail.data.vote_average}
              tagline={detail.data.tagline}
              overview={detail.data.overview}
              setVisbleModalFilm={setVisbleModalFilm}
              handleShowModalVideo={handleShowModalVideo}
            />
            <Articles
              original_title={detail.data.original_title}
              status={detail.data.status}
              original_language={detail.data.original_language}
              revenue={detail.data.revenue}
              budget={detail.data.budget}
              dataCast={people.data.cast}
              dataImg={img}
              handleShowModalVideo={handleShowModalVideo}
            />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default MovieDetail;
