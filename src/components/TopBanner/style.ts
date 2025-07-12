import type { CSSProperties } from "react";

export const TopBannerStyle: CSSProperties = {
  backgroundColor: "white",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
};

export const TopBannerItem: CSSProperties = {
  marginTop: "10px",
  marginLeft: "15px",
};

export const TopBannerContainer: CSSProperties = {
  background: "white",
};

export const HelpButtonContainer: CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  padding: "0px 10px",
};

export const HelpButton: CSSProperties = {
  backgroundColor: "#F2F5F7",
  borderRadius: "30px",
  fontSize: "10px",
  margin: "5px",
  border: "none",
  padding: "5px",
};
