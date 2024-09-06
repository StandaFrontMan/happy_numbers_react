import { useContext } from "react";
import { DiContainer } from "../../di/DiContainer";
import { DiContext } from "../../di/DiContext";

export const useInjection = (): DiContainer => {
  return useContext(DiContext) as DiContainer;
};
