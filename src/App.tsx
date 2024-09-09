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
  } = useGameContext();

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
        <DoneButtonContainer buttonState={buttonState} />
      </div>
    </div>
  );
}

export default App;
