import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { HiMiniMegaphone } from "react-icons/hi2";

import { NoticeStyle } from "./style";

function Notice() {
  return (
    <div style={NoticeStyle}>
      <HiMiniMegaphone size={20} />
      <div>간편주문으로 증권사 앱 가지 않고 바로 주문!</div>
      <BiChevronRight size={30} />
    </div>
  );
}

export default Notice;
