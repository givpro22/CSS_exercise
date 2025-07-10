import { IconStyle, NavbarStyle } from "./style";
import { FaFolderOpen } from "react-icons/fa";
import { TbCoin } from "react-icons/tb"; // 동전
import { PiCurrencyCircleDollar } from "react-icons/pi"; // 통화 심볼 원형
import { RiBillLine } from "react-icons/ri"; // 영수증 모양
import { HiOutlineHome } from "react-icons/hi";

function Navbar() {
  return (
    <div style={NavbarStyle}>
      <div style={IconStyle}>
        <FaFolderOpen size={24} />
        <span>금융</span>
      </div>
      <div style={IconStyle}>
        <TbCoin size={24} />
        <span>포인트</span>
      </div>
      <div style={IconStyle}>
        <RiBillLine size={24} />
        <span>결제</span>
      </div>
      <div style={IconStyle}>
        <PiCurrencyCircleDollar size={24} />
        <span>증권</span>
      </div>
      <div style={IconStyle}>
        <HiOutlineHome size={24} />
        <span>부동산</span>
      </div>
    </div>
  );
}

export default Navbar;
