import { IMAGE_ORIGINAL_SIZE } from "~/constant/Urlmovie";

interface Iprops {
  name: string;
  shortName: string;
  img: string;
}
function CardBilled(props: Iprops) {
  const { name, shortName, img } = props;
  return (
    <div
      className="w-[138px]  my-[10px] mr-[10px]   rounded-lg  shadow-md 
    border-solid border border-[#e3e3e3] hover:border-[#e3e3e3] flex flex-col"
    >
      <img
        className="w-[136px] h-[175px] rounded-t-md "
        src={IMAGE_ORIGINAL_SIZE + img}
      />
      <div className="pt-[10px] px-2 h-[80px]">
        <a className="font-bold text-black hover:opacity-[0.6] hover:text-black  ">
          {name}
        </a>
        <p className="text-[0.9em] opacity-[0.8] line-clamp-1">{shortName}</p>
      </div>
    </div>
  );
}

export default CardBilled;
