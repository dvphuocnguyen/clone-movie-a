import { useState } from "react";
import { useMatch } from "react-router-dom";
import { useGetDetailsWithTypeQuery } from "~/API/_apiMovies";
import { calendar } from "~/assets/movie detail/inforMovies/recomand";
import { IMAGE_ORIGINAL_SIZE } from "~/constant/Urlmovie";
import styles from "./style.module.scss";

interface Card {
  backdrop_path: string;
  title: string;
  vote_average: number;
  id: number;
  release_date: string;
}

function Recommen() {
  const match = useMatch("/movie/:movieId");
  const [fade, setFade] = useState(true);
  const movieId = match?.params.movieId;
  const { data, isSuccess } = useGetDetailsWithTypeQuery({
    id: movieId,
    type: "recommendations",
  });
  const handleScroll = () => {
    const scrollSide = document.querySelector("#scrollSide");
    let scroll = scrollSide!.scrollLeft;
    if (scroll >= 56) {
      setFade(false);
    }
    if (scroll === 0) {
      setFade(true);
    }
  };

  return (
    <>
      {isSuccess && (
        <div className="pt-[30px] w-full h-full">
          <div>
            <h3 className="mb-[20px] text-[1.4em] font-[600]">
              Recommendations
            </h3>
            {data.results.length == 0 ? (
              <p className="">
                We don't have enough data to suggest any movies based on
                Fullmetal Alchemist: The Revenge of Scar. You can help by rating
                movies you've seen.
              </p>
            ) : null}

            <div className="relative">
              <ol
                id="scrollSide"
                onScroll={handleScroll}
                className={`${styles["scroll-inner"]} relative flex overflow-y-hidden   rounded-lg list-none
                 overflow-x-auto snap-x `}
              >
                {data.results.map((items: Card) => {
                  return (
                    <li key={items.id}>
                      <div className="mr-[15px] w-[250px] ">
                        <div className="rounded-lg group">
                          <img
                            className="w-[250px] h-[141px] relative rounded-lg"
                            src={IMAGE_ORIGINAL_SIZE + items.backdrop_path}
                          />
                          <div className="rounded-b-lg h-[40px] flex px-[10px] items-center group-hover:opacity-100 opacity-0 w-full bg-[rgba(255,255,255,0.9)] absolute bottom-[40px] transition-all duration-300">
                            <span className="flex items-center">
                              <img
                                className="w-[1em] h-[1em] mr-[4px]"
                                src={calendar}
                              />
                              {items.release_date}
                            </span>
                          </div>
                        </div>
                        <p className="flex justify-between mt-[4px]">
                          <a className="font-[300] text-[1em] text-black hover:text-black line-clamp-1">
                            {items.title}
                          </a>
                          <span className="">
                            {Math.abs(items.vote_average * 10).toFixed()}%
                          </span>
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
              <div
                className={`${styles.fade} absolute  ${
                  fade ? "visible" : "invisible"
                }`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Recommen;
