type Props = {
  handleCheckAnswer: () => void;
  buttonState: "default" | "right" | "wrong";
};

export function DoneButtonView({ buttonState, handleCheckAnswer }: Props) {
  return (
    <button
      className={`done_button ${buttonState}`}
      onClick={() => handleCheckAnswer()}
    >
      Done
    </button>
  );
}
