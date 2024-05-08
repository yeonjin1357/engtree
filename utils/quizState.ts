// utils/quizState.ts
import { getRandomQuizzes } from "@/utils/data/quiz";
import { useQuizStore } from "../app/store/quiz/store";

export const loadQuizState = (setQuizzes: (quizzes: any) => void, setCurrentQuizIndex: (index: number) => void) => {
  const storedQuizzes = JSON.parse(localStorage.getItem("quizzes") || "null") || getRandomQuizzes();
  const storedIndex = parseInt(localStorage.getItem("currentQuizIndex") || "0", 10);
  const storedSolvedQuizzes = JSON.parse(localStorage.getItem("solvedQuizzes") || "[]");
  const storedPassedQuizzes = JSON.parse(localStorage.getItem("passedQuizzes") || "[]");

  setQuizzes(storedQuizzes);
  setCurrentQuizIndex(storedIndex);
  useQuizStore.getState().setSolvedQuizzes(storedSolvedQuizzes);
  useQuizStore.getState().setPassedQuizzes(storedPassedQuizzes);
};

export const saveQuizState = (currentQuizIndex: number) => {
  localStorage.setItem("currentQuizIndex", currentQuizIndex.toString());
};

export const resetQuizState = () => {
  localStorage.removeItem("quizzes");
  localStorage.removeItem("currentQuizIndex");
  localStorage.removeItem("passedQuizzes");
  localStorage.removeItem("solvedQuizzes");
};
