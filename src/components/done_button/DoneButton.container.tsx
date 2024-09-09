import { DoneButtonView } from "./DoneButton.view";

type Props = {
  buttonState: "default" | "right" | "wrong";
};

export function DoneButtonContainer({ buttonState }: Props) {
  return <DoneButtonView buttonState={buttonState} />;
}
