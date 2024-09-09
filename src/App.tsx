import { useState } from "react";
import "./App.css";
// import { MathExamplesContainer } from "./modules";
import { useInjection } from "./core/hooks/useInjection";
import { DiceRenderContainer } from "./modules";
import { DoneButtonContainer } from "./components";

function App() {
  //states
  const [nIndividualNumber, setNIndividualNumber] = useState<number>(3);

  const [examplesArray, setExamplesArray] = useState<string[]>([]);

  const [multiPlier, setmultiPlier] = useState<number>(1);

  const [userAnswer, setUserAnswer] = useState<string>("");

  const [maximumExamples, setMaximumExamples] = useState<number>(0);

  // style states

  const [incorrectAnswerError, setIncorrectAnswerError] =
    useState<boolean>(false);

  const [buttonState, setButtonState] = useState<"default" | "right" | "wrong">(
    "default"
  );

  //repositories

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

      setmultiPlier((prev) => prev + 1);

      setUserAnswer("");

      setMaximumExamples((prev) => prev + 1);

      setButtonState("right");
      setTimeout(() => setButtonState("default"), 1000);
    } else {
      setIncorrectAnswerError(true);
      setTimeout(() => setIncorrectAnswerError(false), 1000);

      setButtonState("wrong");

      setTimeout(() => {
        setIncorrectAnswerError(false);
        setButtonState("default");
      }, 1000);
    }
  };

  return (
    <div className="app_container">
      <div className="content">
        <div>
          {examplesArray && (
            <div>
              {examplesArray.map((example, index) => (
                <div key={index}>{example}</div>
              ))}
            </div>
          )}

          {maximumExamples < 10 && (
            <div>
              <span className="done_example">
                {nIndividualNumber} * {multiPlier} ={" "}
              </span>

              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className={`inpit_element ${
                  incorrectAnswerError ? "input-error" : ""
                }`}
              />
            </div>
          )}
        </div>

        <div>
          <DiceRenderContainer
            nIndividualNumber={nIndividualNumber}
            examplesArray={examplesArray}
          />
        </div>
      </div>

      <div className="footer">
        <DoneButtonContainer
          buttonState={buttonState}
          handleCheckAnswer={handleCheckAnswer}
        />
      </div>
    </div>
  );
}

export default App;
