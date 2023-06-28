import InforMovie from "./inforMovie/InforMovie";
import ColumnRate from "./rate/ColumnRate";
import Orther from "./rate/Orther";

type Iprops = {
  original_title: string;
  status: string;
  original_language: string;
  revenue: number;
  budget: number;
};
function GreyColumn(props: Iprops) {
  return (
    <div className="w-[260px] h-[1100px] ml-10">
      <InforMovie
        original_title={props.original_title}
        status={props.status}
        original_language={props.original_language}
        revenue={props.revenue}
        budget={props.budget}
      />
      <div className="w-full border-solid border border-b-[#D7D7D7] border-t-white border-x-white mt-[25px] mb-[30px] " />
      <ColumnRate />
      <Orther />
    </div>
  );
}

export default GreyColumn;
