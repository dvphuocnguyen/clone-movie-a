import { Progress } from "antd";
import { useMatch } from "react-router-dom";
import { bookMark } from "~/assets/movie detail/bookMark";
import { heart } from "~/assets/movie detail/heart";
import { play } from "~/assets/movie detail/play";
import { start } from "~/assets/movie detail/start";
import { thumbnailsList } from "~/assets/movie detail/thumnailsList";
import {
  IMAGE_BACKGROUD_DETAIL,
  IMAGE_ORIGINAL_SIZE,
} from "~/constant/Urlmovie";

import styles from "./style.module.scss";
import HeaderSelect from "./HeaderSelect";
import { expand } from "~/assets/movie detail/banner/banner";
import { useGetDetailsWithTypeQuery } from "~/API/_apiMovies";

interface Details {
  overview: string;
  backdrop_path: string;
  title: string;
  poster_path: string;
  genres: [];
  tagline: string;
  release_date: string;
  original_language: string;
  runtime: number;
  vote_average: number;
  setVisbleModalFilm: Function;

  handleShowModalVideo: Function;
}

function Banner(props: Details) {
  let percentVote = parseInt((props.vote_average * 10).toFixed());
  const match = useMatch("/movie/:movieId");
  const movieId = match?.params.movieId;
  const movie = useGetDetailsWithTypeQuery({
    id: movieId,
    type: "videos",
  });

  let img = IMAGE_BACKGROUD_DETAIL + props?.backdrop_path;
  var Hours = Math.floor(props.runtime / 60);
  var minutes = props.runtime % 60;

  const handleClickModal = () => {
    let theMovieDetial: HTMLElement = document.getElementById(
      "movie-detail"
    ) as HTMLElement;
    theMovieDetial.style.filter = "grayscale(1)";
    let nav: HTMLElement = document.getElementById("nav") as HTMLElement;
    nav.style.filter = "grayscale(1)";

    props.setVisbleModalFilm(true);
  };
  const handleClickModalVideo = () => {
    const keyMovie = movie.data.results[0].key;
    props.handleShowModalVideo(keyMovie);
  };

  return (
    <>
      {movie.isSuccess && (
        <div className=" h-full block relative">
          <HeaderSelect />
          <div
            // className={` h-full bg-cover bg-no-repeat bg-[url('${img}')]  bg-[right_-300px_top]  `}
            style={{
              background: `linear-gradient(to bottom, rgba(0,0,0,0)
            39%,rgba(0,0,0,0)
            41%,rgba(0,0,0,0.65)
            100%),
            url('${img}'), #1c1c1c`,
              backgroundPosition: "0px, 200px",
              width: "100%",
              backgroundSize: "100%, cover",
              position: "relative",
            }}
          >
            <div className={`${styles["custom_bg"]} h-full `}>
              <div className="h-full py-[30px] px-[40px]">
                <div className="flex text-white pl-5">
                  <>
                    <div className="group relative ">
                      <div
                        className={`${styles.coatings} opacity-0 group-hover:opacity-100 transition-opacity duration-500  rounded-lg `}
                        data-id={1}
                        onClick={handleClickModal}
                      >
                        <a className="text-white group-hover:text-white flex w-full h-full items-center text-[1.3em] justify-center">
                          <img
                            src={expand}
                            className={`text-white w-[20px] h-[20px] mr-[6px]  `}
                          />
                          <span className="text-[#D3D3D3] hover:text-[#D3D3D3] ">
                            Expand
                          </span>
                        </a>
                      </div>
                      <div>
                        <img
                          className="w-min-[300px] h-[450px] overflow-hidden rounded-lg  "
                          src={IMAGE_ORIGINAL_SIZE + props.poster_path}
                        />
                      </div>
                    </div>
                  </>

                  <>
                    <div className="flex">
                      <section className="pl-[40px] mb-[24px] flex items-start content-center w-full flex-wrap">
                        <div className="mb-[24px]">
                          <h2 className="text-[2.2rem] mb-0">
                            <a className="font-[700] text-white pr-2 hover:text-[rgba(255,255,255,0.6)] ">
                              {props.title}
                            </a>
                            <span className="text-white opacity-[0.8] font-[400]">
                              (2022)
                            </span>
                          </h2>
                          <div>
                            <span className="text-[rgba(255,255,255,0.6)] border border-solid border-[rgba(255,255,255,0.6)] p-[2px] rounded-[2px] mr-[7px]">
                              PG-13
                            </span>
                            <span className="font-light">
                              <>
                                {props.release_date} (
                                {props.original_language.toUpperCase()})
                              </>
                            </span>
                            <span className="pl-[7px]">
                              {props.genres.map((item: any) => {
                                return (
                                  <a
                                    key={item.id}
                                    className="text-white hover:text-[rgba(255,255,255,0.6)] pr-2 font-light"
                                  >
                                    {item.name}
                                  </a>
                                );
                              })}
                            </span>
                            <span className="pl-[7px] font-light">
                              {Hours}h{minutes}
                            </span>
                          </div>
                        </div>
                        <ul
                          className={`${styles.actions} mb-[20px] h-[68px] w-full flex items-center  list-none `}
                        >
                          <li className="flex items-center mr-[20px] ">
                            <Progress
                              className={`${styles["percent-circle "]}  left-2 cursor-pointer bg-[#081C22] rounded-full `}
                              type="circle"
                              width={60}
                              percent={percentVote}
                              format={(percent) => (
                                <div className="text-white font-bold flex  items-center justify-center text-[22px]">
                                  {percent}
                                  <span className="w-[1px] h-[1px] pb-[9px] text-[6px]">
                                    %
                                  </span>
                                </div>
                              )}
                              strokeLinecap="square"
                              trailColor={
                                percentVote <= 20
                                  ? "#571435"
                                  : percentVote < 70
                                  ? "#423D0F"
                                  : "#204529"
                              }
                              strokeColor={
                                percentVote <= 20
                                  ? "red"
                                  : percentVote < 70
                                  ? "#D2D530"
                                  : "#21D07A"
                              }
                            />

                            <div className="pl-2 font-bold">
                              User
                              <br />
                              Score
                            </div>
                          </li>
                          <li className="mr-[20px]">
                            <div className="w-[46px] h-[46px] rounded-full bg-[#042541] flex items-center justify-center">
                              <img
                                className="w-[1em] h-[1em]  "
                                src={thumbnailsList}
                              />
                            </div>
                          </li>
                          <li className="mr-[20px]">
                            <div className="w-[46px] h-[46px] rounded-full bg-[#042541] flex items-center justify-center">
                              <img className="w-[1em] h-[1em]  " src={heart} />
                            </div>
                          </li>
                          <li className="mr-[20px]">
                            <div className="w-[46px] h-[46px] rounded-full bg-[#042541] flex items-center justify-center">
                              <img
                                className="w-[1em] h-[1em]  "
                                src={bookMark}
                              />
                            </div>
                          </li>
                          <li className="mr-[20px]">
                            <div className="w-[46px] h-[46px] rounded-full bg-[#042541] flex items-center justify-center">
                              <img className="w-[1em] h-[1em]  " src={start} />
                            </div>
                          </li>
                          <li className="mr-[20px] ">
                            <div
                              onClick={handleClickModalVideo}
                              className="flex items-center cursor-pointer hover:opacity-[0.6]"
                            >
                              <img
                                className={`${styles.play} w-[2em] h-[2em] pr-2 font-bold text-[16px]  	`}
                                src={play}
                              />
                              Play Trailer
                            </div>
                          </li>
                        </ul>
                        <div className=" w-full">
                          <h3 className="text-white italic font-[400] text-[1.1em] opacity-[0.7]">
                            {props.tagline}
                          </h3>
                          <h3 className="text-white font-[600] text-[1.3em]">
                            {" "}
                            Overview
                          </h3>
                          <div>
                            <p className="text-white opacity-[0.9]">
                              {props.overview}
                            </p>
                          </div>
                          <ol className="flex justify-between w-[50%] list-none mb-0">
                            <li>
                              <a className="font-bold hover:opacity-[0.6] hover:text-white text-white">
                                Akira Toriyama
                              </a>
                              <p className="opacity-[0.9]">Screenplay, Story</p>
                            </li>
                            <li>
                              <a className="font-bold hover:opacity-[0.6] hover:text-white text-white">
                                Tetsuro Kodama
                              </a>
                              <p className="opacity-[0.9]">Director</p>
                            </li>
                          </ol>
                        </div>
                      </section>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;
