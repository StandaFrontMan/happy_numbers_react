import { DiceRenderView } from "./DiceRender.view";

type Props = {
  nIndividualNumber: number;
  examplesArray: string[];
};

export function DiceRenderContainer({
  examplesArray,
  nIndividualNumber,
}: Props) {
  const rows = examplesArray.map((_, rowIndex) =>
    Array.from({ length: nIndividualNumber }, (_, colIndex) => ({
      rowIndex,
      colIndex,
    }))
  );

  return <DiceRenderView rows={rows} />;
}
