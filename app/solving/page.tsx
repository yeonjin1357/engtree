// app/solving/page.tsx
"use client";

import SolvingTemplate from "../components/templates/SolvingTemplate";
import useQuiz from "../hooks/useQuiz";

const Solving = () => {
  const { isModalOpen, isBackdropOpen, isLoading, modalTitle, modalMessage, quizzes, currentQuizIndex, userAnswer, handleAnswerSubmit, closeModal, handlePassQuiz } = useQuiz();

  if (quizzes.length === 0) return <div>Loading...</div>;

  const currentQuiz = quizzes[currentQuizIndex];

  return <SolvingTemplate isLoading={isLoading} isModalOpen={isModalOpen} isBackdropOpen={isBackdropOpen} modalTitle={modalTitle} modalMessage={modalMessage} currentQuiz={currentQuiz} currentQuizIndex={currentQuizIndex} userAnswer={userAnswer} handleAnswerSubmit={handleAnswerSubmit} handlePassQuiz={handlePassQuiz} closeModal={closeModal} />;
};

export default Solving;
