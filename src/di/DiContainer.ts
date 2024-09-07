import { MathExamplesRepository } from "../modules/math_example/domain/MathExamplesRepository";

export interface DiContainer {
  // MATH EXAM
  checkAnswer(): MathExamplesRepository;
  calculateExample(): MathExamplesRepository;
}
