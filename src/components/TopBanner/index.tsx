import {
  TopBannerItem,
  TopBannerStyle,
  TopBannerContainer,
  HelpButtonContainer,
  HelpButton,
} from "./style";
import StockIndex from "./ StockIndex";
import { StockIndexData } from "../../mock/StockIndexData";

function TopBanner() {
  return (
    <div style={TopBannerContainer}>
      <div style={TopBannerStyle}>
        {StockIndexData.map((item, index) => (
          <div key={index} style={TopBannerItem}>
            <StockIndex item={item} />
          </div>
        ))}
        <div style={{ justifyItems: "center" }}></div>
      </div>
      <div style={HelpButtonContainer}>
        <button style={HelpButton}>도움말</button>
      </div>
    </div>
  );
}

export default TopBanner;
