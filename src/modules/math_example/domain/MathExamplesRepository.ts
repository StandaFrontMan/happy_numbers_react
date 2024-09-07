export interface MathExamplesRepository {
  checkAnswer(userAnswer: number, correctAnswer: number): boolean;

  calculateExample(nIndividualNumber: number, miltiplier: number): number;
}
