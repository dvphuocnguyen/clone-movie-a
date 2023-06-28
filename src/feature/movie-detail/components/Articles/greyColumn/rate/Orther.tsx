import { arlet, bag, login } from "~/assets/movie detail/inforMovies/login";
import styles from "./style.module.scss";

function Orther() {
  return (
    <div className="mt-[30px]">
      <p className="rounded-3xl bg-[#20200C] h-[36px] w-[60%] flex justify-center items-center text-white ">
        <span>
          <img
            className={`${styles.login} w-[1.5em] h-[1.5em]  `}
            src={login}
          />
          <span className="pl-2 font-bold">Login to edit</span>
        </span>
      </p>

      <div className="mt-[30px]">
        <span>
          <img className="w-[1.5em] h-[1.5em]" src={bag} />
          <span className="pl-2 text-[rgb(128,128,128)]">
            Keyboard Shortcuts
          </span>
        </span>
      </div>
      <div className="mt-[30px]">
        <span>
          <img className="w-[1.5em] h-[1.5em]" src={arlet} />
          <span className="pl-2 ">Login to report an issue</span>
        </span>
      </div>
    </div>
  );
}

export default Orther;
