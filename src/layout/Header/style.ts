import type { CSSProperties } from "react";

const flexRowCenter: CSSProperties = {
  display: "flex",
  alignItems: "center",
};

export const headerstyle: CSSProperties = {
  ...flexRowCenter,
  backgroundColor: "white",
  justifyContent: "space-between",
  height: "3rem",
  padding: "0 16px",
};

export const headerLeftStyle: CSSProperties = {
  ...flexRowCenter,
  gap: "5px",
};

export const headerRightStyle: CSSProperties = {
  ...flexRowCenter,
  gap: "12px",
};

export const headerSearchStyle: CSSProperties = {
  ...flexRowCenter,
  padding: "7px 7px 8px 10px",
  borderRadius: "17px",
  backgroundColor: "#F2F5F7",
  gap: "10px",
  fontSize: "14px",
  color: "#555",
  cursor: "pointer",
};

export const list: CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  gap: "5px",
  margin: "5px 20px",
};

export const headerMenuContainer: CSSProperties = {
  backgroundColor: "white",
};
