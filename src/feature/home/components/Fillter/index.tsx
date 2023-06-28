import {
  CaretDownOutlined,
  DownOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { SORT_RESULTS } from "~/util/data/dataFillterSort/dataSort";
import styles from "./style.module.scss";

function Fillter() {
  const [value, setValue] = useState("Popularity Descending");
  const [visbleSort, setVisbleSort] = useState(true);
  const [visbleFillter, setVisbleFillter] = useState(false);
  const [visbleWatch, setVisbleWatch] = useState(false);
  const [visbileSelect, setVisblieSelect] = useState(false);

  const handleClickSort = () => {
    setVisbleSort(!visbleSort);
  };
  const handleClickFillters = () => {
    setVisbleFillter(!visbleFillter);
  };
  const handleClickWatch = () => {
    setVisbleWatch(!visbleWatch);
  };

  const handleClickSelect = () => {
    setVisblieSelect(!visbileSelect);
  };

  const handleClickValue = (e: any) => {
    setValue(e.target.getAttribute("data-test-id"));
    setVisblieSelect(false);
  };

  return (
    <div>
      <h2 className="text-[1.5rem]  pb-2">Popular Movies</h2>

      <div className="pb-5">
        <div className="w-[258px]  shadow-lg  rounded-md border-solid border border-[#E3E3E3] mb-3 ">
          <div
            onClick={handleClickSort}
            className="flex h-[54px]  justify-between align-middle border-b-black cursor-pointer "
          >
            <h2 className="text-black font-semibold text-[16px] self-center pl-5 pt-2 ">
              Sort
            </h2>
            <RightOutlined
              className={`${
                styles["anticon-right"]
              } icon self-center p-5  text-[11px] ${
                visbleSort ? "hidden" : "visible"
              }`}
            />
            <DownOutlined
              className={`${
                styles["anticon-down"]
              } icon self-center p-5  text-[11px] ${
                !visbleSort ? "hidden" : "visible"
              }`}
            />
          </div>
          {visbleSort ? (
            <div className="  border-solid border border-t-[#E3E3E3] border-b-white border-x-white" />
          ) : null}

          {visbleSort ? (
            <div
              className={`h-[92px] ${visbleSort} flex align-middle flex-col`}
            >
              <div className="px-5 py-3">
                <h3 className="  w-full font-thin text-[0.92rem] text-black ">
                  Sort Results By
                </h3>
                <div className="flex-none ">
                  <button
                    onClick={handleClickSelect}
                    className="flex flex-row justify-between w-full h-[35px] font-light text-[13px] text-black px-2 py-2  border-none cursor-pointer  bg-[#E4E7EB]  rounded hover:bg-[#C7CDD5] focus:bg-[#C7CDD5]"
                  >
                    <span className=" ">{value}</span>

                    <CaretDownOutlined className="w-6 h-6 stroke-current p-1 " />
                  </button>
                  <div
                    className={`absolute z-1000 w-[216px] py-3  bg-white rounded border-solid border border-[#E3E3E3] ${
                      visbileSelect ? "visible" : "hidden"
                    }`}
                  >
                    {SORT_RESULTS.map((sort) => {
                      return (
                        <div
                          data-test-id={sort}
                          onClick={(e) => handleClickValue(e)}
                          key={sort}
                          className={
                            value === sort
                              ? "block px-4 py-[2px] bg-gray-100 text-black font-[500] hover:bg-[#05B3E4] hover:text-white cursor-pointer"
                              : "cursor-pointer block px-4 py-[2px] text-gray-800 font-light hover:bg-gray-100 hover:text-black"
                          }
                        >
                          {sort}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div
          onClick={handleClickFillters}
          className="w-[258px] h-[54px] shadow-lg  cursor-pointer  rounded-md border-solid border border-[#E3E3E3] mb-3 z-0"
        >
          <div className="flex   justify-between align-middle">
            <h2 className="text-black font-semibold text-[16px] self-center pl-5 pt-3 ">
              Filters
            </h2>
            <RightOutlined
              className={`${
                styles["anticon-right"]
              } icon self-center p-5  text-[11px] ${
                visbleFillter ? "hidden" : "visible"
              }`}
            />
            <DownOutlined
              className={`${
                styles["anticon-down"]
              } icon self-center p-5  text-[11px] ${
                !visbleFillter ? "hidden" : "visible"
              }`}
            />
          </div>
        </div>

        <div
          onClick={handleClickWatch}
          className="rounded-md border-solid border border-[#E3E3E3] cursor-pointer  w-[258px] h-[54px] shadow-lg  "
        >
          <div className="flex   justify-between align-middle">
            <h2 className="text-black font-semibold text-[16px] self-center pl-5 pt-3 ">
              Where To Watch
            </h2>
            <RightOutlined
              className={`${
                styles["anticon-right"]
              } icon self-center p-5  text-[11px] ${
                visbleWatch ? "hidden" : "visible"
              }`}
            />
            <DownOutlined
              className={`${
                styles["anticon-down"]
              } icon self-center p-5  text-[11px] ${
                !visbleWatch ? "hidden" : "visible"
              }`}
            />
          </div>
        </div>

        <div
          className="mt-5 z-   flex justify-center align-bottom focus:bg-gray-900 focus:text-white bg-[#05B4E4] hover:bg-gray-900 hover:text-white
        rounded-full w-[254px] h-[44px] border-none"
        >
          <a className="align-middle pt-2 text-white text-[1.1rem] font-semibold hover:text-white">
            Search
          </a>
        </div>
      </div>
    </div>
  );
}

export default Fillter;
