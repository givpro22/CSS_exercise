import { BiChevronRight } from "react-icons/bi";
import { HiMiniMegaphone } from "react-icons/hi2";
import { NoticeStyle } from "./style";

function Notice() {
  return (
    <div style={NoticeStyle}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "42px",
          gap: "8px",
        }}
      >
        <HiMiniMegaphone size={20} />
        <span style={{ fontSize: "13px", fontWeight: 500 }}>
          간편주문으로 증권사 앱 가지 않고 바로 주문!
        </span>
      </div>
      <BiChevronRight size={30} />
    </div>
  );
}

export default Notice;
