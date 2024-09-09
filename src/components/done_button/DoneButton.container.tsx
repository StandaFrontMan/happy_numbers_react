import { useHandleCheckAnswer } from "../../core/hooks/useCommitAnswer";
import { DoneButtonView } from "./DoneButton.view";

type Props = {
  buttonState: "default" | "right" | "wrong";
};

export function DoneButtonContainer({ buttonState }: Props) {
  const { handleCheckAnswer } = useHandleCheckAnswer();

  return (
    <DoneButtonView
      buttonState={buttonState}
      handleCheckAnswer={handleCheckAnswer}
    />
  );
}
