import Media from "./media";
import Recommen from "./recommen";
import SocialPanel from "./review";
import TopBilled from "./topBilled/TopBilled";

interface Iprops {
  handleShowModalVideo: Function;
  dataImg: any;
  dataCast: [
    {
      name: string;
      character: string;
      profile_path: string;
    }
  ];
}
function WhiteColumn(props: Iprops) {
  return (
    <div className="w-[1000px]">
      <TopBilled dataCast={props.dataCast} />
      <div className="w-full border-solid border border-b-[#D7D7D7] border-t-white border-x-white mt-[25px] ml-3 " />
      <SocialPanel />
      <div className="w-full border-solid border border-b-[#D7D7D7] border-t-white border-x-white mt-[25px] ml-3 " />
      <Media
        dataImg={props.dataImg}
        handleShowModalVideo={props.handleShowModalVideo}
      />
      <div className="w-full border-solid border border-b-[#D7D7D7] border-t-white border-x-white mt-[25px] ml-3 " />
      <Recommen />
    </div>
  );
}

export default WhiteColumn;
