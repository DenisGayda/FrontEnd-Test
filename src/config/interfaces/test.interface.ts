export interface TestInterface {
  id: string;
  title: string;
  questions: Question[];
  neededRightAnswers: number;
}

export interface Question {
  text: string;
  answers: Answer[];
}

export interface Answer {
  text: string;
  isRight: boolean;
}
