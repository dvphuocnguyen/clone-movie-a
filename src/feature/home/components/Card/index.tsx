import { Progress } from "antd";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalView from "~/components/ModalList";
import { IMAGE_URL } from "~/constant/Urlmovie";
import { useOnClickOutside } from "~/hooks/useHookOutside";
import styles from "./style.module.scss";

interface Iprops {
  title: string;
  poster_path: string;
  release_date: any;
  vote_average: number;
  movieId: number;
}

function Movie(props: Iprops) {
  const [status, setStatus] = useState(false);
  const { title, poster_path, release_date, vote_average } = props;
  let percent = vote_average * 10;
  let navigate = useNavigate();

  const handleOnclick = () => {
    setStatus(!status);
  };
  const ref = useRef(null);

  useOnClickOutside(ref, () => setStatus(false));

  const handleClickDetail = () => {
    navigate(`/movie/${props.movieId}`);
  };

  return (
    <>
      <div ref={ref}>
        <ModalView status={status} />
      </div>
      <div
        className={`${styles.card}  rounded-md mb-7 ml-[30px] relative  shadow-md 
      border-solid  border-[#e3e3e3] hover:border-[#e3e3e3] flex flex-col overflow-hidden`}
      >
        <div
          className={`${styles.coatings} ${status ? "visible" : "hidden"}`}
        />
        <div className="relative ">
          <a onClick={handleClickDetail}>
            <img
              className="rounded-t-md   w-full h-[270px] overflow-hidden relative  "
              alt="example"
              src={IMAGE_URL + poster_path}
            />
          </a>
          <Progress
            className={` absolute bottom-[-20px] z-30 left-2 bg-[#081C22] rounded-full border-solid border-2 `}
            type="circle"
            percent={percent}
            strokeLinecap="square"
            format={(percent) => (
              <div className="text-white font-bold flex pl-[8px] items-center">
                {percent}{" "}
                <span className="w-[1px] h-[1px] pb-[9px] text-[6px]">%</span>
              </div>
            )}
            trailColor={
              percent <= 20 ? "#571435" : percent < 70 ? "#423D0F" : "#204529"
            }
            strokeColor={
              percent <= 20 ? "red" : percent < 70 ? "#D2D530" : "#21D07A"
            }
            width={35}
          />
          <div className="absolute top-2 right-3 fill-[red] rounded-full bg-white w-[20px] h-[20px] opacity-50 flex justify-center align-middle cursor-pointer hover:bg-[#05B4E4] hover:opacity-[100]">
            <span
              onClick={handleOnclick}
              className="text-[20px] leading-[0] pt-[4px] "
            >
              ...
            </span>
          </div>
        </div>

        <div className=" bg-white pt-[26px] pr-[6px]  pl-[10px] rounded-b-md h-[100px]  ">
          <a
            onClick={handleClickDetail}
            className="text-black font-bold hover:text-[#05B4E4] text-[15px] line-clamp-2 "
          >
            {title}
          </a>
          <p className="text-[#666666] ">
            {new Date(release_date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </>
  );
}

export default Movie;
