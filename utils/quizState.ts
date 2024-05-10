// utils/quizState.ts
import { getRandomQuizzes } from "@/utils/data/quiz";
import { useQuizStore } from "../app/store/quiz/store";

export const loadQuizState = () => {
  const { setQuizzes, setCurrentQuizIndex, setSolvedQuizzes, setPassedQuizzes } = useQuizStore.getState();

  const storedQuizzes = JSON.parse(localStorage.getItem("quizzes") || "null") || getRandomQuizzes();
  const storedIndex = parseInt(localStorage.getItem("currentQuizIndex") || "0", 10);
  const storedSolvedQuizzes = JSON.parse(localStorage.getItem("solvedQuizzes") || "[]");
  const storedPassedQuizzes = JSON.parse(localStorage.getItem("passedQuizzes") || "[]");

  setQuizzes(storedQuizzes);
  setCurrentQuizIndex(storedIndex);
  setSolvedQuizzes(storedSolvedQuizzes);
  setPassedQuizzes(storedPassedQuizzes);
};

export const saveQuizState = () => {
  const { currentQuizIndex, solvedQuizzes, passedQuizzes } = useQuizStore.getState();
  localStorage.setItem("currentQuizIndex", currentQuizIndex.toString());
  localStorage.setItem("solvedQuizzes", JSON.stringify(solvedQuizzes));
  localStorage.setItem("passedQuizzes", JSON.stringify(passedQuizzes));
};

export const resetQuizState = () => {
  localStorage.removeItem("quizzes");
  localStorage.removeItem("currentQuizIndex");
  localStorage.removeItem("passedQuizzes");
  localStorage.removeItem("solvedQuizzes");
};
