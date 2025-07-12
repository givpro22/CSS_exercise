import { HorizontalSpacing } from "./style";

interface LineProps {
  color?: string;
  height?: string;
}
function Line({ color = "#F5F8FA", height = "0.3rem" }: LineProps) {
  return (
    <div
      style={{
        ...HorizontalSpacing,
        backgroundColor: color,
        height,
      }}
    />
  );
}

export default Line;
