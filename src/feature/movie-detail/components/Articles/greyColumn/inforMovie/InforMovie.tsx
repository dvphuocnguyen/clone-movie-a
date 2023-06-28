import Facts from "./Facts";
import KeywordsMovie from "./KeywordsMovie";
type Iprops = {
  original_title: string;
  status: string;
  original_language: string;
  revenue: number;
  budget: number;
};
function InforMovie(props: Iprops) {
  return (
    <div className="mb-[30px]">
      <Facts
        original_title={props.original_title}
        status={props.status}
        original_language={props.original_language}
        revenue={props.revenue}
        budget={props.budget}
      />
      <KeywordsMovie />
    </div>
  );
}

export default InforMovie;
