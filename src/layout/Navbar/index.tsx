import { FaFolderOpen } from "react-icons/fa";
import { TbCoin } from "react-icons/tb"; // 동전
import { PiCurrencyCircleDollar } from "react-icons/pi"; // 통화 심볼 원형
import { RiBillLine } from "react-icons/ri"; // 영수증 모양
import { HiOutlineHome } from "react-icons/hi";
import { IconStyle, NavbarStyle } from "./style";

const navItems = [
  { icon: <FaFolderOpen size={24} />, label: "금융" },
  { icon: <TbCoin size={24} />, label: "포인트" },
  { icon: <RiBillLine size={24} />, label: "결제" },
  { icon: <PiCurrencyCircleDollar size={24} />, label: "증권" },
  { icon: <HiOutlineHome size={24} />, label: "부동산" },
];

function Navbar() {
  return (
    <div style={NavbarStyle}>
      {navItems.map((item, index) => (
        <div key={index} style={IconStyle}>
          {item.icon}
          <span style={{ fontSize: "13px" }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default Navbar;
