import { useGameContext } from "../../context/AppContext";
import { useInjection } from "./useInjection";

export const useHandleCheckAnswer = () => {
  const {
    nIndividualNumber,
    multiPlier,
    userAnswer,
    setExamplesArray,
    setMultiPlier,
    setUserAnswer,
    setMaximumExamples,
    setIncorrectAnswerError,
    setButtonState,
  } = useGameContext();

  const { calculateExample, checkAnswer } = useInjection();

  const calculateExampleRepo = calculateExample();
  const checkAnswerRepo = checkAnswer();

  const handleCheckAnswer = () => {
    const correctAnswer = calculateExampleRepo.calculateExample(
      nIndividualNumber,
      multiPlier
    );

    if (checkAnswerRepo.checkAnswer(parseInt(userAnswer, 10), correctAnswer)) {
      setExamplesArray((prev) => [
        ...prev,
        `${nIndividualNumber} * ${multiPlier} = ${correctAnswer}`,
      ]);

      setMultiPlier((prev) => prev + 1);
      setUserAnswer("");
      setMaximumExamples((prev) => prev + 1);
      setButtonState("right");

      setTimeout(() => setButtonState("default"), 1000);
    } else {
      setIncorrectAnswerError(true);
      setButtonState("wrong");

      setTimeout(() => {
        setIncorrectAnswerError(false);
        setButtonState("default");
      }, 1000);
    }
  };

  return { handleCheckAnswer };
};
