import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

import { useEffect, useState } from "react";
import logo from "../../assets/tmdb.svg";
import { MENUDATA } from "../../util/data/dataList/dataNav";
import styles from "./style.module.scss";

function Nav() {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [visibleHeader, setVisibleHeader] = useState(57);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;
      console.log(moving, visibleHeader);
      if (moving < 2) {
        setVisibleHeader(57);
      }
      if (moving > 57) {
        setVisibleHeader(moving);
      }
      if (position > moving) {
        setVisible(true);
      }
      if (moving > visibleHeader) {
        setVisible(false);
      }
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const cls = visible ? "opacity-100" : "opacity-0";
  return (
    <nav
      id="nav"
      className={`blue-bg ${styles.nav} active ${cls} top-0 fixed  z-[1000000] w-full transition-opacity duration-500`}
    >
      <div className={`${styles.navigationBar}  py-[20px]  `}>
        <div
          className={`${styles["nav-list-container"]}  flex xl:w-[1400px] lg:w-[1024px] `}
        >
          <ul>
            <a href="/" className={`${styles["nav-logo"]}`}>
              <img src={logo} alt="logo" width="154" height="20" />
            </a>
            {MENUDATA.map((menu) => {
              return (
                <li key={menu.title} className="group relative ">
                  <a href="/" className="font-medium">
                    {menu.title}
                  </a>
                  <ul
                    className=" dropdown-ul absolute  text-sm text-black  opacity-0 invisible shadow-lg rounded py-4
                group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all duration-500 flex flex-col"
                    style={{ width: "163px", background: "white" }}
                  >
                    {menu.children.map((items) => {
                      return (
                        <li
                          key={items}
                          className="hover:bg-gray-100 w-full py-[2px] "
                        >
                          <a
                            href="/"
                            className=" text-gray-700  block font-normal hover:text-gray-700 text-base pl-6"
                          >
                            {items}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>

          <ul>
            <li>
              <a href="/detail" className="align-middle">
                <PlusOutlined className={styles["anticon-plus"]} />
              </a>
            </li>

            <li>
              <a href="/">
                <div className="box-visible hover:text-[black] hover:bg-white ">
                  EN
                </div>
              </a>
            </li>

            <li>
              <a href="/">Login</a>
            </li>

            <li>
              <a href="/">Join TMDb</a>
            </li>

            <li>
              <a href="/">
                <SearchOutlined className={styles["anticon-search"]} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
