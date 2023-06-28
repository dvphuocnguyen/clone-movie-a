import { RightOutlined } from "@ant-design/icons";
import styles from "./style.module.scss";

interface Iprops {
  status: boolean;
}
function ModalView(props: Iprops) {
  return (
    <div
      className={`${
        props.status ? "visible" : "hidden"
      } w-[268px]  absolute bg-white z-[1000] top-[40px] 
      left-[12px] border-solid border border-[#e3e3e3] rounded`}
    >
      <div className="h-[75px]  py-[10px] text-[13px] font-semibold">
        <p className="tracking-tight pl-[15px]">
          Want to rate or add this item to a list?
        </p>

        <div
          className={`${styles["content-modal"]} cursor-pointer text-[#666666]  pl-[15px] py-1 hover:bg-[#042541] hover:text-white w-full `}
        >
          Login
          <RightOutlined
            className={`${styles["anticon-right"]} text-[12px] pl-1  `}
          />
        </div>
      </div>

      <div className="w-full bg-[#DEDEDF] h-[1px]" />

      <div className="h-[75px]  py-[10px] text-[13px] font-semibold">
        <p className="tracking-tight pl-[15px]">Not a member?</p>

        <div
          className={`${styles["content-modal"]} cursor-pointer text-[#666666]  pl-[15px] py-1 hover:bg-[#042541] hover:text-white w-full  `}
        >
          Sign up and join the community
          <RightOutlined
            className={`${styles["anticon-right"]} text-[12px] pl-1 text-white`}
          />
        </div>
      </div>
    </div>
  );
}

export default ModalView;
