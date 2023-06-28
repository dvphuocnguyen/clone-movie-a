import { useState } from "react";
import { startReview } from "~/assets/movie detail/inforMovies/review";
import { DISCUSSIONS, REVIEWS } from "~/util/data/dataDetail/dataDetails";
import styles from "./style.module.scss";

function SocialPanel() {
  const [active, setActive] = useState(1);

  const handleClickReview = () => {
    setActive(1);
  };
  const handleClickDiscussions = () => {
    setActive(2);
  };
  return (
    <div className="my-[30px] ">
      <section>
        <div className="flex items-baseline">
          <h3 className="font-[600] text-[1.4em] mr-[50px]">Social</h3>
          <ul className="list-none flex">
            <li
              className={`${
                active === 1 ? styles.underSelecter : null
              } mr-[30px] pb-[5px] text-[1.1em]`}
              onClick={handleClickReview}
            >
              <a className="font-[600] text-black hover:text-black">
                Reviews
                <span className="opacity-[0.6] pl-1">4</span>
              </a>
            </li>
            <li
              className={`${active === 2 ? styles.underSelecter : null}
               mr-[24px] pb-[5px] text-[1.1em]`}
              onClick={handleClickDiscussions}
            >
              <a className="font-[600] text-black hover:text-black">
                Discussions
                <span className="opacity-[0.6] pl-1">4</span>
              </a>
            </li>
          </ul>
        </div>

        <>
          {active === 1 ? (
            <div>
              {REVIEWS.map((items) => {
                return (
                  <div
                    key={items.name}
                    className="rounded-md shadow-lg w-full h-full border border-solid border-[#ECECEC]"
                  >
                    <div className="p-[20px]">
                      <div className="flex items-center content-between">
                        <img
                          src={items.img}
                          className="w-[64px] h-[64px] mr-[20px] rounded-full "
                        />
                        <>
                          <div>
                            <div className="flex justify-start items-baseline flex-wrap">
                              <h3 className="font-[700] text-[1.3em] hover:opacity-[0.6] cursor-pointer ">
                                A review by {items.name}
                              </h3>
                              <div className="flex justify-center items-center content-center ml-[14px] bg-black text-white py-[1] px-[8px] rounded-md">
                                <img
                                  src={startReview}
                                  className={`${styles.icon} w-[1em] h-[1em] mr-[2px] `}
                                />
                                {items.rating}
                              </div>
                            </div>
                            <h3 className="font-[300] text-[0.9em]">
                              Written by
                              <a className="text-black hover:text-black font-normal px-[3px]">
                                {items.name}
                              </a>
                              {items.date}
                            </h3>
                          </div>
                        </>
                      </div>

                      <>
                        <div className="pl-[84px] pt-[20px]">
                          <p className="mb-[16px] text-[1em] line-clamp-5">
                            {items.content}
                          </p>
                        </div>
                      </>
                    </div>
                  </div>
                );
              })}
              <p className="mt-[20px] ">
                <a className="text-[1.1em] font-[600] text-black hover:text-black hover:opacity-[0.6]">
                  Read All Reviews
                </a>
              </p>
            </div>
          ) : null}
        </>
        <>
          {active === 2 ? (
            <>
              <div className=" ">
                {DISCUSSIONS.map((item) => {
                  return (
                    <div
                      key={item.name}
                      className="flex rounded-md shadow-lg w-full h-[66px] border border-solid border-[#ECECEC] mb-[10px] px-[20px] py-[12px]"
                    >
                      <div className="w-[60%] text-[1em] flex">
                        <div className="mr-[10px] ">
                          <img
                            src={item.avatar}
                            className="w-[32px] h-[32px] rounded-full "
                          />
                        </div>

                        <div className="flex items-center min-h-[32px]">
                          <a className="text-[1em] font-normal text-black hover:text-black hover:opacity-[0.6]">
                            {item.content}
                          </a>
                        </div>
                      </div>

                      <div className="text-[0.9em] font-[200] text-right pt-1.5">
                        <p className="pr-[40px]">{item.status}</p>
                      </div>

                      <div className="text-[0.9em] font-[200] text-right pt-1.5">
                        <p className="pr-[40px]">{item.rating}</p>
                      </div>

                      <div className="w-[230px] pl-[20px] text-right ">
                        <p className="text-[0.9em] font-[200]">
                          {item.time}
                          <br />
                          by
                          <a className="pl-1 text-[1em] font-normal text-black hover:text-black">
                            {item.name}
                          </a>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-[20px] ">
                <a className="text-[1.1em] font-[600] text-black hover:text-black hover:opacity-[0.6]">
                  Go to Discussions
                </a>
              </p>
            </>
          ) : null}
        </>
      </section>
    </div>
  );
}

export default SocialPanel;
