import { DoneButtonView } from "./DoneButton.view";

type Props = {
  handleCheckAnswer: () => void;
  buttonState: "default" | "right" | "wrong";
};

export function DoneButtonContainer({ buttonState, handleCheckAnswer }: Props) {
  return (
    <DoneButtonView
      buttonState={buttonState}
      handleCheckAnswer={handleCheckAnswer}
    />
  );
}
