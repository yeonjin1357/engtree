import { create } from "zustand";

export type Quiz = {
  id: number;
  english: string;
  korean: string;
  correctAnswers: string[];
  partialAnswers: { answer: string; reason: string }[];
  difficulty: number;
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

export const useQuizStore = create<QuizState>((set) => ({
  quizzes: [],
  currentQuizIndex: 0,
  solvedQuizzes: [],
  passedQuizzes: [],
  setQuizzes: (quizzes) => set({ quizzes }),
  setCurrentQuizIndex: (index) => set({ currentQuizIndex: index }),
  setSolvedQuizzes: (solvedQuizzes) => set({ solvedQuizzes }),
  setPassedQuizzes: (passedQuizzes) => set({ passedQuizzes }),
  addSolvedQuiz: (quiz) =>
    set((state) => {
      const updatedSolvedQuizzes = [...state.solvedQuizzes, quiz];
      localStorage.setItem("solvedQuizzes", JSON.stringify(updatedSolvedQuizzes));
      return { solvedQuizzes: updatedSolvedQuizzes };
    }),

  addPassedQuiz: (quiz) =>
    set((state) => {
      const updatedPassedQuizzes = [...state.passedQuizzes, quiz];
      localStorage.setItem("passedQuizzes", JSON.stringify(updatedPassedQuizzes));
      return { passedQuizzes: updatedPassedQuizzes };
    }),

  resetQuizState: () =>
    set({
      quizzes: [],
      currentQuizIndex: 0,
      solvedQuizzes: [],
      passedQuizzes: [],
    }),
}));
