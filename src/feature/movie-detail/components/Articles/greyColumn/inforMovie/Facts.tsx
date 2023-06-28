import { social } from "~/assets/movie detail/inforMovies/social";

type Iprops = {
  original_title: string;
  status: string;
  original_language: string;
  revenue: number;
  budget: number;
};
function Facts(props: Iprops) {
  return (
    <div className=" mb-[20px]">
      <div className="flex mb-[30px]">
        <img className="w-[40px] h-[40px] pr-2" src={social.facebook} />
        <img className="w-[40px] h-[40px] pr-2" src={social.twitter} />
        <img className="w-[40px] h-[40px] pr-2" src={social.instagram} />
      </div>
      <p className="mb-[20px] text-[1em] flex flex-col">
        <strong className="font-[600]">Original Title</strong>
        {props.original_title}
      </p>
      <p className="mb-[20px] text-[1em] flex flex-col">
        <strong className="font-[600]">Status</strong>
        {props.status}
      </p>
      <p className="mb-[20px] text-[1em] flex flex-col">
        <strong className="font-[600]">Original Language</strong>
        {props.original_language}
      </p>
      <p className="mb-[20px] text-[1em] flex flex-col">
        <strong className="font-[600]">Budget</strong>
        {props.budget != 0 ? "$" + props.budget : "-"}
      </p>
      <p className=" text-[1em] flex flex-col">
        <strong className="font-[600]">Revenue</strong>
        {props.revenue != 0 ? "$" + props.revenue : "-"}
      </p>
    </div>
  );
}

export default Facts;
