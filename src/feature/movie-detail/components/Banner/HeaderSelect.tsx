import { CaretDownOutlined, CaretRightOutlined } from "@ant-design/icons";
import { MENU } from "~/util/data/dataDetail/dataDetails";
import styles from "./style.module.scss";

function HeaderSelect() {
  return (
    <div className=" flex  h-[108px]  justify-center items-end">
      <div className="">
        <ul className="flex list-none mb-0 relative">
          {MENU.map((items) => {
            return (
              <li key={items.title} className=" group relative px-6">
                <div>
                  <button className="bg-transparent h-[36px] text-black font-light text-center  border-none inline-flex items-center">
                    <span className="mr-1 text-[15px]  ">{items.title}</span>
                    <CaretDownOutlined />
                  </button>
                  {items.index == 1 ? (
                    <div className="w-full bg-[#00B4E4] h-1" />
                  ) : null}
                  <ul
                    className="absolute z-[10000] bg-white w-[180px]  text-sm text-black  opacity-0 invisible shadow-lg rounded py-4 border-solid border border-[#E3E3E3]
                group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all duration-500 flex flex-col top-[25px] list-none"
                  >
                    {items?.children.map((itemLi) => {
                      return (
                        <li
                          key={itemLi.title}
                          className={`hover:bg-gray-100 w-full ${
                            itemLi.dropdown.length > 1
                              ? `${styles["sub-dropdown"]} hover:bg-[#00b4e4]`
                              : ""
                          } `}
                        >
                          <div className="flex items-center justify-between w-full ">
                            <a
                              className={`flex rounded-b text-black w-full py-1  hover:text-black text-base pl-6`}
                              href="#"
                            >
                              {itemLi.title}
                            </a>
                            <span className="font-[300] pr-8">
                              {itemLi.count ? `${itemLi.count}` : null}
                              {itemLi.dropdown.length > 1 ? (
                                <CaretRightOutlined />
                              ) : null}
                            </span>
                          </div>
                          <ul
                            className={`${styles["sub-dropdown-content"]} absolute left-full top-[94px]   opacity-0 invisible list-none transition-all duration-500 z-[10000] bg-white w-[200px] text-sm text-black  shadow-lg rounded py-4 border-solid border border-[#E3E3E3]
              flex flex-col `}
                          >
                            {itemLi.dropdown.map((item, index) => {
                              return (
                                <li
                                  key={index}
                                  className="hover:bg-gray-100 w-full "
                                >
                                  <a
                                    href=""
                                    className=" text-black py-1 block font-normal hover:text-black text-base pl-6"
                                  >
                                    {item?.title}
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default HeaderSelect;
