import { CONTRIBUTOR } from "~/util/data/dataDetail/dataDetails";

function LeaderBoard() {
  return (
    <div className="w-full mb-[30px]">
      <h4 className="font-[600] text-[1.1em] mb-[10px]">Top Contributors</h4>
      <div>
        {CONTRIBUTOR.map((item) => {
          return (
            <li
              key={item.name}
              className="w-full h-[45px] flex items-center mb-[20px]"
            >
              <img
                className="w-[45px] h-[45px] rounded-full "
                src={item.avatar}
              />
              <div className="ml-3  pt-3">
                <p className="flex flex-col font-[600]">
                  {item.score}
                  <a className="font-[300] text-[16px] text-black hover:text-black">
                    {item.name}
                  </a>
                </p>
              </div>
            </li>
          );
        })}
        <p> View Edit History</p>
      </div>
    </div>
  );
}

export default LeaderBoard;
