import GreyColumn from "./greyColumn";
import WhiteColumn from "./whiteColums";

type Iprops = {
  original_title: string;
  status: string;
  original_language: string;
  revenue: number;
  budget: number;
  dataImg: any;
  handleShowModalVideo: Function;
  dataCast: [
    {
      name: string;
      character: string;
      profile_path: string;
    }
  ];
};
function Articles(props: Iprops) {
  return (
    <div className="h-full flex justify-center ">
      <div className="flex px-[40px] py-[30px] items-start content-start w-[1400px]">
        <WhiteColumn
          dataImg={props.dataImg}
          dataCast={props.dataCast}
          handleShowModalVideo={props.handleShowModalVideo}
        />
        <GreyColumn
          original_title={props.original_title}
          status={props.status}
          original_language={props.original_language}
          revenue={props.revenue}
          budget={props.budget}
        />
      </div>
    </div>
  );
}

export default Articles;
