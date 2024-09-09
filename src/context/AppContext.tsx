// GameContext.tsx
import React, { createContext, useContext, useState } from "react";

// Определение типов для контекста
type GameContextType = {
  nIndividualNumber: number;
  examplesArray: string[];
  multiPlier: number;
  userAnswer: string;
  maximumExamples: number;
  incorrectAnswerError: boolean;
  buttonState: "default" | "right" | "wrong";
  setUserAnswer: (answer: string) => void;
  setExamplesArray: React.Dispatch<React.SetStateAction<string[]>>;
  setMultiPlier: React.Dispatch<React.SetStateAction<number>>;
  setMaximumExamples: React.Dispatch<React.SetStateAction<number>>;
  setIncorrectAnswerError: React.Dispatch<React.SetStateAction<boolean>>;
  setButtonState: React.Dispatch<
    React.SetStateAction<"default" | "right" | "wrong">
  >;
};

// Создание контекста
const GameContext = createContext<GameContextType | undefined>(undefined);

// Хук для использования контекста
export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext должен использоваться внутри GameProvider");
  }
  return context;
};

// Провайдер контекста
export const GameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Состояния
  const [nIndividualNumber] = useState<number>(3);
  const [examplesArray, setExamplesArray] = useState<string[]>([]);
  const [multiPlier, setMultiPlier] = useState<number>(1);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [maximumExamples, setMaximumExamples] = useState<number>(0);
  const [incorrectAnswerError, setIncorrectAnswerError] =
    useState<boolean>(false);
  const [buttonState, setButtonState] = useState<"default" | "right" | "wrong">(
    "default"
  );

  return (
    <GameContext.Provider
      value={{
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
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
