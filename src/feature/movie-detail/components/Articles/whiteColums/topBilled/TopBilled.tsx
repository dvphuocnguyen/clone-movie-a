import { RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import CardBilled from "./CardBilled";
import styles from "./style.module.scss";

interface Iprops {
  dataCast: [
    {
      name: string;
      character: string;
      profile_path: string;
    }
  ];
}
function TopBilled(props: Iprops) {
  const [fade, setFade] = useState(true);

  const handleScroll = () => {
    const scrollDemo = document.querySelector("#scrollDemo");

    let scroll = scrollDemo!.scrollLeft;

    if (scroll >= 56) {
      setFade(false);
    }
    if (scroll === 0) {
      setFade(true);
    }
  };

  return (
    <div>
      <h3 className="font-[600] text-[1.6em] mb-[16px] ">Top Billed Cast</h3>
      <div className="list-topBilled relative top-0 left-0 flex">
        <ol
          id="scrollDemo"
          className={`${styles["scroll-inner"]} overflow-y-hidden overflow-x-auto snap-x flex list-none mb-0 `}
          onScroll={handleScroll}
        >
          {props.dataCast.slice(0, 9).map((item) => {
            return (
              <li key={item.name} className="mb-[20px]">
                <CardBilled
                  name={item.name}
                  shortName={item.character}
                  img={item.profile_path}
                />
              </li>
            );
          })}
          <li className="   my-[10px]  mb-[30px] flex  items-center">
            <p className="flex w-[138px] px-[20px] items-center font-bold">
              <a className="text-black hover:text-black hover:opacity-[0.6]">
                View More
              </a>
              <RightOutlined className="pl-2 " />
            </p>
          </li>
        </ol>
        <div className={`${styles.fade} ${fade ? "visible" : "invisible"}`} />
      </div>
      <p className="my-[20px]">
        <a className="font-[500] text-[16px] text-black hover:text-[#DBDBDB]  ">
          Full Cast & Crew
        </a>
      </p>
    </div>
  );
}

export default TopBilled;
