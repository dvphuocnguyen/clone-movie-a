import ContentScore from "./ContentScore";
import LeaderBoard from "./LeaderBoard";
import PopularityTrend from "./PopularityTrend";

function ColumnRate() {
  return (
    <div>
      <ContentScore />
      <LeaderBoard />
      <PopularityTrend />
    </div>
  );
}

export default ColumnRate;
