// app/solving/page.tsx
"use client";

import React, { useRef } from "react";

import SolvingTemplate from "../components/templates/SolvingTemplate";
import useQuiz from "../hooks/useQuiz";

const Solving = () => {
  const { isModalOpen, isBackdropOpen, isLoading, modalTitle, modalMessage, quizzes, currentQuizIndex, handleAnswerSubmit, openModal, closeModal, moveToNextQuiz, handlePassQuiz } = useQuiz();

  const inputRef = useRef<HTMLInputElement>(null);

  if (quizzes.length === 0) return <div>Loading...</div>;

  const currentQuiz = quizzes[currentQuizIndex];

  return <SolvingTemplate isLoading={isLoading} isModalOpen={isModalOpen} isBackdropOpen={isBackdropOpen} modalTitle={modalTitle} modalMessage={modalMessage} currentQuiz={currentQuiz} currentQuizIndex={currentQuizIndex} handleAnswerSubmit={handleAnswerSubmit} handlePassQuiz={handlePassQuiz} inputRef={inputRef} closeModal={closeModal} />;
};

export default Solving;
