// app/hooks/use-quiz.ts
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useQuizStore } from "../store/quiz/store";
import { getOpenAIFeedback } from "../../utils/answerAI";
import { loadQuizState, saveQuizState } from "../../utils/quizState";

const useQuiz = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBackdropOpen, setIsBackdropOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const router = useRouter();

  const quizzes = useQuizStore((state) => state.quizzes);
  const currentQuizIndex = useQuizStore((state) => state.currentQuizIndex);
  const setCurrentQuizIndex = useQuizStore((state) => state.setCurrentQuizIndex);
  const addSolvedQuiz = useQuizStore((state) => state.addSolvedQuiz);
  const addPassedQuiz = useQuizStore((state) => state.addPassedQuiz);

  useEffect(() => {
    loadQuizState();
  }, []);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
    setIsBackdropOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setIsBackdropOpen(false);
  }, []);

  const moveToNextQuiz = useCallback(() => {
    if (currentQuizIndex < quizzes.length - 1) {
      const newIndex = currentQuizIndex + 1;
      setCurrentQuizIndex(newIndex);
      saveQuizState();
    } else {
      router.push("/result");
    }
  }, [currentQuizIndex, quizzes, setCurrentQuizIndex, router]);

  const handleAnswerSubmit = useCallback(
    async (userAnswer: string) => {
      const currentQuiz = quizzes[currentQuizIndex];
      setIsLoading(true);

      if (userAnswer.trim() === "") {
        setModalTitle("빈칸입니다.");
        setModalMessage("확인 후 다시 제출 부탁드립니다!");
        openModal();
      } else if (currentQuiz.correctAnswers.includes(userAnswer.trim().toLowerCase())) {
        setModalTitle("정답입니다!");
        setModalMessage(currentQuiz.english);
        addSolvedQuiz(currentQuiz);
        openModal();
        moveToNextQuiz();
      } else {
        const feedback = await getOpenAIFeedback(currentQuiz.english, userAnswer, currentQuiz.correctAnswers);
        setModalTitle("오답입니다.");
        setModalMessage(feedback);
        openModal();
      }

      setIsLoading(false);
    },
    [currentQuizIndex, quizzes, openModal, addSolvedQuiz, moveToNextQuiz]
  );

  const handlePassQuiz = useCallback(() => {
    const currentQuiz = quizzes[currentQuizIndex];
    addPassedQuiz(currentQuiz);
    moveToNextQuiz();
  }, [currentQuizIndex, quizzes, addPassedQuiz, moveToNextQuiz]);

  return {
    isModalOpen,
    isBackdropOpen,
    isLoading,
    modalTitle,
    modalMessage,
    quizzes,
    currentQuizIndex,
    handleAnswerSubmit,
    openModal,
    closeModal,
    moveToNextQuiz,
    handlePassQuiz,
  };
};

export default useQuiz;
