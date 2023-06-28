import { useMatch } from "react-router-dom";
import { useGetDetailsWithTypeQuery } from "~/API/_apiMovies";

interface Key {
  id: number;
  name: string;
}
function KeywordsMovie() {
  const match = useMatch("/movie/:movieId");
  const movieId = match?.params.movieId;
  const { data, isSuccess } = useGetDetailsWithTypeQuery({
    id: movieId,
    type: "keywords",
  });
  return (
    <>
      {isSuccess && (
        <div className="">
          <h4 className="font-[600] text-[1.1em] mb-[10px]">Keywords</h4>
          <ul className="flex flex-wrap w-full list-none">
            {data.keywords.map((items: Key) => {
              return (
                <li
                  key={items.id}
                  className="cursor-pointer mr-[5px] mb-[10px] border border-solid border-[#D7D7D7] p-1 rounded-md bg-[#E5E5E5] "
                >
                  {items.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default KeywordsMovie;
