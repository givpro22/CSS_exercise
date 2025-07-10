import { headerstyle, headerstyle2 } from "./style";
import { IoReorderThree } from "react-icons/io5";

function Header() {
  return (
    <>
      <div style={headerstyle}>
        <h3>pay증권</h3>
        <div style={headerstyle2}>
          <div>종목검색</div>
          <IoReorderThree size={30} />
        </div>
      </div>
      <div style={headerstyle}>
        <div>MY</div>
        <div>국내</div>
        <div>해외</div>
        <div>공모주</div>
        <div>지표</div>
        <div>가상자산</div>
        <div>투자정보</div>
      </div>
    </>
  );
}

export default Header;
