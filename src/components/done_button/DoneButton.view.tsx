type Props = {
  buttonState: "default" | "right" | "wrong";
  handleCheckAnswer: () => void;
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
