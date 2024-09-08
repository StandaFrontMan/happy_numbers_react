import { DiceView } from "../../../components";

type Props = {
  rows: {
    rowIndex: number;
    colIndex: number;
  }[][];
};

export function DiceRenderView({ rows }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex", flexDirection: "row" }}>
          {row.map(({ rowIndex, colIndex }) => (
            <DiceView key={`${rowIndex}-${colIndex}`} />
          ))}
        </div>
      ))}
    </div>
  );
}
