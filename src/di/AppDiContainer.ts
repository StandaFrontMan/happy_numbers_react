import { MathExamplesRepository } from "../modules/math_example/domain/MathExamplesRepository";
import { MathExamplesRepositoryImpl } from "../modules/math_example/domain/MathExamplesRepositoryImpl";
import { DiContainer } from "./DiContainer";

export const appDiContainer: DiContainer = new (class implements DiContainer {
  // MATH EXAM

  checkAnswer(): MathExamplesRepository {
    return new MathExamplesRepositoryImpl();
  }
  calculateExample(): MathExamplesRepository {
    return new MathExamplesRepositoryImpl();
  }
})();
