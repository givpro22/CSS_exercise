import {
  headerSearchStyle,
  headerstyle,
  headerLeftStyle,
  headerRightStyle,
  list,
  headerMenuContainer,
} from "./style";
import { IoReorderThree } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";

const menuItems = [
  "MY",
  "국내",
  "해외",
  "공모주",
  "지표",
  "가상자산",
  "투자정보",
];

function Header() {
  return (
    <>
      <div style={headerstyle}>
        <div style={headerLeftStyle}>
          <IoAddCircleOutline size={20} />

          <h3>pay증권</h3>
        </div>
        <div style={headerRightStyle}>
          <div style={headerSearchStyle}>
            <FaMagnifyingGlass />
            <div>종목검색</div>
          </div>
          <div style={{ padding: "6px" }}>
            <IoReorderThree size={30} />
          </div>
        </div>
      </div>

      <div style={headerMenuContainer}>
        <div style={list}>
          {menuItems.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Header;
