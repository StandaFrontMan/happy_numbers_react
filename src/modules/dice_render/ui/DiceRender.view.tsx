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
        <div key={rowIndex} className="cube_container">
          {row.map(({ rowIndex, colIndex }) => (
            <DiceView key={`${rowIndex}-${colIndex}`} />
          ))}
        </div>
      ))}
    </div>
  );
}
