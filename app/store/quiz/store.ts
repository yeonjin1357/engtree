// app/store/quiz/store.ts
import { create } from "zustand";

export type Quiz = {
  id: number;
  english: string;
  korean: string;
  correctAnswers: string[];
  partialAnswers: { answer: string; reason: string }[];
  difficulty: number;
  quizIndex: number;
};

type QuizState = {
  quizzes: Quiz[];
  currentQuizIndex: number;
  solvedQuizzes: Quiz[];
  passedQuizzes: Quiz[];
  setQuizzes: (quizzes: Quiz[]) => void;
  setCurrentQuizIndex: (index: number) => void;
  setSolvedQuizzes: (solvedQuizzes: Quiz[]) => void;
  setPassedQuizzes: (passedQuizzes: Quiz[]) => void;
  addSolvedQuiz: (quiz: Quiz) => void;
  addPassedQuiz: (quiz: Quiz) => void;
  resetQuizState: () => void;
};

export const useQuizStore = create<QuizState>((set, get) => ({
  quizzes: [],
  currentQuizIndex: 0,
  solvedQuizzes: [],
  passedQuizzes: [],
  setQuizzes: (quizzes) => set({ quizzes }),
  setCurrentQuizIndex: (index) => set({ currentQuizIndex: index }),
  setSolvedQuizzes: (solvedQuizzes) => set({ solvedQuizzes }),
  setPassedQuizzes: (passedQuizzes) => set({ passedQuizzes }),
  addSolvedQuiz: (quiz) => {
    const updatedSolvedQuizzes = [...get().solvedQuizzes, quiz];
    set({ solvedQuizzes: updatedSolvedQuizzes });
    localStorage.setItem("solvedQuizzes", JSON.stringify(updatedSolvedQuizzes));
  },
  addPassedQuiz: (quiz) => {
    const updatedPassedQuizzes = [...get().passedQuizzes, quiz];
    set({ passedQuizzes: updatedPassedQuizzes });
    localStorage.setItem("passedQuizzes", JSON.stringify(updatedPassedQuizzes));
  },
  resetQuizState: () => {
    localStorage.clear();
    set({ quizzes: [], currentQuizIndex: 0, solvedQuizzes: [], passedQuizzes: [] });
  },
}));
