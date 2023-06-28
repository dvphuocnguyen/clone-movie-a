import { Button, List } from "antd";
import { useEffect, useRef, useState } from "react";
import { useGetListMutation } from "~/API/_apiMovies";
import { PropMovie } from "~/util/typesMovie";
import Movie from "../Card";
import styles from "./style.module.scss";

function ListMovies() {
  const [loading, setLoading] = useState(false);
  const [initLoading, setInitLoading] = useState(false);
  const [datas, setDatas] = useState([]);
  const [page, setPage] = useState(1);
  const [getList, { data }] = useGetListMutation();
  const [loadingInfinity, setLoadingInfinity] = useState(false);
  const pageEnd = useRef<HTMLDivElement>(null);
  let num = 1;

  useEffect(() => {
    getList(page);
  }, [page]);

  useEffect(() => {
    if (data) {
      const newData = datas.concat(data.results);
      setDatas(newData);
      setLoadingInfinity(!loadingInfinity);
    }
  }, [data]);

  useEffect(() => {
    let timer = setTimeout(() => setInitLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [initLoading]);

  const onLoadMore = () => {
    setPage(page + 1);
    setLoading(true);
    setInitLoading(true);
    window.dispatchEvent(new Event("resize"));
  };

  const loadMore = (
    <div className=" text-center my-2 ml-[30px]  ">
      <Button
        className="min-w-full rounded-lg bg-[#05B4E4] h-[50px] text-white focus:bg-[#05B4E4] focus:text-white hover:bg-[#05B4E4] hover:text-black duration-75"
        onClick={onLoadMore}
      >
        <a className="font-bold  text-2xl "> Load more</a>
      </Button>
    </div>
  );

  const loadRender = initLoading ? (
    <div className={`${styles["progress"]}  w-screen`}>
      <div className={`${styles["progress-value"]} `}></div>
    </div>
  ) : null;

  const loadData = () => {
    setPage((prev) => prev + 1);
  };
  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && initLoading) {
            num++;
            loadData();
            if (num >= 100) {
              if (!pageEnd.current) return;
              observer.unobserve(pageEnd.current);
            }
          }
        },
        { threshold: 1 }
      );
      if (!pageEnd.current) return;
      observer.observe(pageEnd.current);
    }
  }, [loadingInfinity, num]);

  return (
    <div>
      <div className=" grid auto-rows-auto grid-flow-row ">
        {loadRender}
        <div>
          <List
            className="grid items-stretch "
            itemLayout="horizontal"
            grid={{
              column: 5,
              xs: 2,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 5,
              xxl: 5,
            }}
            dataSource={datas}
            renderItem={(movie: PropMovie) => (
              <List.Item className="grid items-stretch ">
                <Movie
                  movieId={movie.id}
                  title={movie.title}
                  poster_path={movie.poster_path}
                  release_date={movie.release_date}
                  vote_average={movie.vote_average}
                />
              </List.Item>
            )}
          />
        </div>
        <div ref={pageEnd}></div>
      </div>
      {loadMore}
    </div>
  );
}

export default ListMovies;
