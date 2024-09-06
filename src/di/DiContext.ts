import { createContext } from "react";
import { DiContainer } from "./DiContainer";
import { appDiContainer } from "./AppDiContainer";

export const DiContext = createContext<Partial<DiContainer>>(appDiContainer);
