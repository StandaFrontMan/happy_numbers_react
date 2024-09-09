import { useHandleCheckAnswer } from "../../core/hooks/useCommitAnswer";

type Props = {
  buttonState: "default" | "right" | "wrong";
};

export function DoneButtonView({ buttonState }: Props) {
  const { handleCheckAnswer } = useHandleCheckAnswer();

  return (
    <button
      className={`done_button ${buttonState}`}
      onClick={() => handleCheckAnswer()}
    >
      Done
    </button>
  );
}
