import styles from "./style.module.scss";
import YouTube from "react-youtube";
import { close } from "~/assets/movie detail/banner/banner";
interface Iprops {
  keyVideo: string;
  setVisibleModalVideo: Function;
}
function ModalVideo(props: Iprops) {
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      cc_load_policy: 0,
      fs: 0,
      iv_load_policy: 0,
      modestbranding: 0,
      rel: 0,
      showinfo: 0,

      origin: "http://localhost:5173",
    },

    height: "677",
    width: "1200",
  };

  const handleClickModal = () => {
    let theMovieDetial: HTMLElement = document.getElementById(
      "movie-detail"
    ) as HTMLElement;
    theMovieDetial.style.filter = "grayscale(0)";
    let nav: HTMLElement = document.getElementById("nav") as HTMLElement;
    nav.style.filter = "grayscale(0)";
    props.setVisibleModalVideo(false);
  };

  const keyId = props.keyVideo;
  return (
    <div className="z-[100000000]  top-[4%] 2xl:left-[16%]  xl:left-[8%] fixed">
      <div className="w-full h-[63px] bg-black flex justify-between items-center px-6">
        <span className="text-white text-[1.1rem]">Play Trailer</span>
        <div onClick={handleClickModal}>
          <img className={`${styles.close} w-[1em] h-[1em] `} src={close} />
        </div>
      </div>

      <YouTube
        videoId={keyId}
        opts={videoOptions}
        // onReady={videoOnReady}
        // onPlay={this.videoOnPlay}
        // onStateChange={this.videoStateChange}
      />
    </div>
  );
}

export default ModalVideo;
