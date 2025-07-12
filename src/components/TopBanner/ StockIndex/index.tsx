import * as S from "./style";
import Line from "../../../commons/Line";

type StockItem = {
  name: string;
  value: string;
  diff: string;
  rate: string;
  color: string;
  date: string;
  status: string;
};

interface Props {
  item: StockItem;
}

function StockIndex({ item }: Props) {
  return (
    <>
      <div style={S.Name}>{item.name}</div>
      <div style={S.Value}>{item.value}</div>
      <div style={{ ...S.Change, color: item.color }}>
        <span>{item.diff}</span>
        <span style={S.Rate}>{item.rate}</span>
      </div>
      <div style={S.DateRow}>
        <span>{item.date}</span>
        <span style={S.Dot}>●</span>
        <span>{item.status}</span>
      </div>
      <Line height="0.1rem" />
    </>
  );
}

export default StockIndex;
