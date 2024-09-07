import { MathExamplesRepository } from "./MathExamplesRepository";

export class MathExamplesRepositoryImpl implements MathExamplesRepository {
  checkAnswer(userAnswer: number, correctAnswer: number): boolean {
    return userAnswer === correctAnswer;
  }

  calculateExample(nIndividualNumber: number, miltiplier: number): number {
    const correctAnswer = nIndividualNumber * miltiplier;
    return correctAnswer;
  }
}
