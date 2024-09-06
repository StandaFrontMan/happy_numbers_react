import { DiContainer } from "./DiContainer";

export const appDiContainer: DiContainer = new (class
  implements DiContainer {})();
