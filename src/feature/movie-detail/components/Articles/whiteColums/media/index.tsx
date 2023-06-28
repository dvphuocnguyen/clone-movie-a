import { useState } from "react";
import styles from "./style.module.scss";
import { IMAGE_ORIGINAL_SIZE, IMAGE_YOUTUBE } from "~/constant/Urlmovie";
import { playYoutube } from "~/assets/movie detail/inforMovies/social";
import { TITLEMEDIA } from "~/util/data/dataDetail/dataDetails";
import { useGetDetailsWithTypeQuery } from "~/API/_apiMovies";
import { useMatch } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

interface Iprops {
  dataImg: any;
  handleShowModalVideo: Function;
}

interface Img {
  file_path: string;
}

interface Video {
  key: string;
}
function Media(props: Iprops) {
  const match = useMatch("/movie/:movieId");
  const [fade, setFade] = useState(true);
  const [active, setActive] = useState(1);
  const movieId = match?.params.movieId;

  const video = useGetDetailsWithTypeQuery({
    id: movieId,
    type: "videos",
  });

  const handleClickValue = (e: any) => {
    setActive(e.target.getAttribute("data-id"));
  };

  const handleScroll = () => {
    const scrollFade = document.querySelector("#scrollFade");

    let scroll = scrollFade!.scrollLeft;
    if (scroll >= 56) {
      setFade(false);
    }
    if (scroll === 0) {
      setFade(true);
    }
  };

  const handleShowVideo = (keyMovie: string) => {
    if (!props.handleShowModalVideo) return;
    props.handleShowModalVideo(keyMovie);
  };

  return (
    <>
      {video.isSuccess && (
        <div className="w-full py-[30px]">
          <>
            <div className="flex w-full items-baseline">
              <h3 className="font-[600] mr-[50px] mb-[20px] text-[1.4em]">
                Media
              </h3>
              <ul className="flex list-none ">
                {TITLEMEDIA.map((media) => {
                  return (
                    <li
                      key={media.index}
                      className={`${
                        active == media.index ? `${styles.underSelecter}` : null
                      } mr-[24px]`}
                    >
                      <div>
                        <a
                          data-id={media.index}
                          onClick={handleClickValue}
                          className=" font-[500] text-black hover:text-black text-[1.2em]  pb-[5px]"
                        >
                          {media.title}
                          <span
                            data-id={media.index}
                            className="opacity-[0.6] pl-2"
                          >
                            {media.index == 2
                              ? `${video.data.results.length}`
                              : null}
                            {media.index == 3
                              ? `${props.dataImg.data.backdrops.length}`
                              : null}
                            {media.index == 4
                              ? `${props.dataImg.data.posters.length}`
                              : null}
                          </span>
                        </a>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>

          {active == 1 ? (
            <div className="relative">
              <ol
                onScroll={handleScroll}
                id="scrollFade"
                className={`${styles["scroll-inner"]} relative flex overflow-y-hidden   rounded-lg`}
              >
                <div
                  className="relative  top-[0]"
                  onClick={() => handleShowVideo(video.data.results[0].key)}
                >
                  <img
                    className=" w-[532px] h-[300px] object-cover "
                    src={IMAGE_YOUTUBE(video.data.results[0]?.key)}
                  />
                  <a
                    className="absolute w-full h-full flex items-center justify-center top-0"
                    data-site="Youtube"
                  >
                    <div className="relative bg-[rgba(0,0,0,0.7)] w-[67px] h-[67px] items-center justify-center  rounded-full">
                      <img
                        src={playYoutube}
                        className={`${styles.play} w-[50%] h-[50%] top-[18px] left-[18px] absolute`}
                      />
                    </div>
                  </a>
                </div>
                <img
                  className="w-[533px] h-[300px]  "
                  src={
                    IMAGE_ORIGINAL_SIZE +
                    props.dataImg.data.backdrops[0].file_path
                  }
                />
                <img
                  className="w-[200px] h-[300px]  "
                  src={
                    IMAGE_ORIGINAL_SIZE +
                    props.dataImg.data.posters[0].file_path
                  }
                />
              </ol>
              <div
                className={`${styles.fade} absolute  ${
                  fade ? "visible" : "invisible"
                }`}
              />
            </div>
          ) : null}

          {active == 2 ? (
            <div className="relative">
              <ol
                onScroll={handleScroll}
                id="scrollFade"
                className={`${styles["scroll-inner"]} flex overflow-y-hidden  h-full list-none w-full rounded-lg`}
              >
                {video.data.results.slice(0, 6).map((video: Video) => {
                  return (
                    <li key={video.key}>
                      <div
                        className="relative  top-[0px]"
                        onClick={() => handleShowVideo(video.key)}
                      >
                        <img
                          className="object-cover  w-[533px] h-[300px]"
                          src={IMAGE_YOUTUBE(video.key)}
                        />
                        <a
                          className="absolute w-full h-full flex items-center justify-center top-0"
                          data-site="Youtube"
                        >
                          <div className="relative bg-[rgba(0,0,0,0.7)] w-[67px] h-[67px] items-center justify-center  rounded-full">
                            <img
                              src={playYoutube}
                              className={`${styles.play} w-[50%] h-[50%] top-[18px] left-[18px] absolute`}
                            />
                          </div>
                        </a>
                      </div>
                    </li>
                  );
                })}
                <li className="   my-[10px]  mb-[30px] flex  items-center">
                  <p className="flex w-[300px] px-[20px] items-center font-light pr-10">
                    <a className="text-black hover:text-black hover:opacity-[0.6] text-[1.2rem]">
                      View More
                    </a>
                    <RightOutlined className="pl-2 " />
                  </p>
                </li>
              </ol>
              <div
                className={`${styles.fade} absolute  ${
                  fade ? "visible" : "invisible"
                }`}
              />
            </div>
          ) : null}

          {active == 3 ? (
            <div className="relative">
              <ol
                onScroll={handleScroll}
                id="scrollFade"
                className={`${styles["scroll-inner"]} relative flex overflow-y-hidden  list-none rounded-lg`}
              >
                {props.dataImg.data.backdrops.slice(0, 6).map((img: Img) => {
                  return (
                    <li key={img.file_path}>
                      <img
                        className="w-[533px] h-[300px]  "
                        src={IMAGE_ORIGINAL_SIZE + img.file_path}
                      />
                    </li>
                  );
                })}
                <li className="   my-[10px]  mb-[30px] flex  items-center">
                  <p className="flex w-[300px] px-[20px] items-center font-light pr-10">
                    <a className="text-black hover:text-black hover:opacity-[0.6] text-[1.2rem]">
                      View More
                    </a>
                    <RightOutlined className="pl-2 " />
                  </p>
                </li>
              </ol>
              <div
                className={`${styles.fade} absolute  ${
                  fade ? "visible" : "invisible"
                }`}
              />
            </div>
          ) : null}

          {active == 4 ? (
            <div className="relative">
              <ol
                id="scrollFade"
                onScroll={handleScroll}
                className={`${styles["scroll-inner"]} relative flex overflow-y-hidden   rounded-lg list-none
                 overflow-x-auto snap-x `}
              >
                {props.dataImg.data.posters.slice(0, 6).map((img: Img) => {
                  return (
                    <li key={img.file_path}>
                      <img
                        key={img.file_path}
                        className="w-[200px] h-[300px]  "
                        src={IMAGE_ORIGINAL_SIZE + img.file_path}
                      />
                    </li>
                  );
                })}
                <li className="   my-[10px]  mb-[30px] flex  items-center">
                  <p className="flex w-[200px] px-[20px] items-center font-light pr-2">
                    <a className="text-black hover:text-black hover:opacity-[0.6] text-[1.2rem]">
                      View More
                    </a>
                    <RightOutlined className="pl-2 " />
                  </p>
                </li>
              </ol>
              <div
                className={`${styles.fade} absolute  ${
                  fade ? "visible" : "invisible"
                }`}
              />
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}

export default Media;
