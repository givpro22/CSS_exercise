import type { CSSProperties } from "react";

const flexColumnCenter: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const NavbarStyle: CSSProperties = {
  backgroundColor: "white",
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  padding: "8px 0",
};

export const IconStyle: CSSProperties = {
  ...flexColumnCenter,
  gap: "5px",
  margin: "5px",
  cursor: "pointer",
};
