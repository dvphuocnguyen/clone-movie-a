import { CaretDownOutlined } from "@ant-design/icons";
import { useState } from "react";
import {
  arrow,
  arrowback,
  circleremove,
  close,
  lock,
  plus,
} from "~/assets/movie detail/banner/banner";
import { IMAGE_ORIGINAL_SIZE } from "~/constant/Urlmovie";

interface Iprops {
  setVisbleModalFilm: Function;
  posters: [{ file_path: string }];
}

function ModalFilm(props: Iprops) {
  const [poster, setPoster] = useState(0);
  const handleClickModal = () => {
    let theMovieDetial: HTMLElement = document.getElementById(
      "movie-detail"
    ) as HTMLElement;
    theMovieDetial.style.filter = "grayscale(0)";
    let nav: HTMLElement = document.getElementById("nav") as HTMLElement;
    nav.style.filter = "grayscale(0)";
    props.setVisbleModalFilm(false);
    setPoster(0);
  };

  const handleClickNext = () => {
    setPoster(poster + 1);
  };
  const handleClickBack = () => {
    setPoster(poster - 1);
  };
  return (
    <div className=" bg-white flex  z-[100000000]  top-[10%] left-[25%] fixed border-[0.1px] border-solid border-black">
      <img
        className="w-[421px] h-[631px] "
        src={IMAGE_ORIGINAL_SIZE + props.posters[poster].file_path}
      />
      <div className="w-[360px]">
        <img
          className="w-[1.2em] h-[1.2em]  cursor-pointer  float-right mt-[20px] mr-[20px]"
          src={close}
          onClick={handleClickModal}
        />
        <div className="absolute bottom-[20px] w-[360px]">
          <h3 className="flex justify-between w-full items-center pb-[14px] mb-[7px] text-[1em] font-[400] whitespace-normal px-[20px]">
            <span>Infor</span>
            <img src={lock} className="w-[1.2em] h-[1.2em]  cursor-pointer  " />
          </h3>
          <div className="w-full mb-2 border-solid border border-b-[#D7D7D7] border-t-white border-x-white  " />

          <form className="px-[20px]">
            <label className="flex items-center text-[0.8em] font-light mb-[16px]">
              Primary?
              <img className="w-[1em] h-[1em] ml-[4px]" src={circleremove} />
            </label>
            <label className=" text-[0.8em] font-light">Added By</label>
            <p className="mb-[16px] text-[1em]">Gus</p>
            <label className="mt-[16px] text-[0.8em] font-light">Size</label>
            <p className="mb-[16px] text-[1em]">2000x3000 </p>
            <label className="mt-[16px] text-[0.8em] font-light">
              Language
            </label>
            <button
              disabled
              className="flex flex-row justify-between w-full h-[35px] font-light text-[13px] text-black px-2 py-2  border-none cursor-pointer  bg-[#E4E7EB]  rounded "
            >
              <span className="text-[1em] font-extralight ">English</span>

              <CaretDownOutlined className="w-6 h-6 stroke-current p-1 " />
            </button>
          </form>
          <div className="my-[40px]">
            <h3 className="flex justify-between w-full items-center pb-[14px] mb-[7px] text-[1em] font-[400] whitespace-normal px-[20px]">
              <span>Tagged People</span>
              <img src={plus} className="w-[1em] h-[1em]  cursor-pointer  " />
            </h3>
            <div className="w-full mb-2 border-solid border border-b-[#D7D7D7] border-t-white border-x-white  " />
            <p className="ml-[20px]">No records have been added.</p>
          </div>
          <div className="px-[20px] pt-[20px]">
            <img
              onClick={handleClickNext}
              className="w-[25px] h-[25px]  float-right "
              src={arrow}
            />
            <img
              onClick={handleClickBack}
              className={`${
                poster == 0 ? "hidden" : "visible"
              } w-[25px] h-[25px]  float-left `}
              src={arrowback}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalFilm;
