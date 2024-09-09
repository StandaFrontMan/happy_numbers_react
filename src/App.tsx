import "./App.css";
import { useInjection } from "./core/hooks/useInjection";
import { DiceRenderContainer } from "./modules";
import { DoneButtonContainer } from "./components";
import { useGameContext } from "./context/AppContext";

function App() {
  const {
    nIndividualNumber,
    examplesArray,
    multiPlier,
    userAnswer,
    maximumExamples,
    incorrectAnswerError,
    buttonState,
    setUserAnswer,
    setExamplesArray,
    setMultiPlier,
    setMaximumExamples,
    setIncorrectAnswerError,
    setButtonState,
  } = useGameContext();

  //repositories

  const { calculateExample, checkAnswer } = useInjection();

  const calculateExampleRepo = calculateExample();
  const checkAnswerRepo = checkAnswer();

  // logic

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
