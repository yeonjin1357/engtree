// app/solving/page.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import { getOpenAIFeedback } from "@/utils/answerAI";
import { useQuizStore } from "../store/quiz/store";
import { loadQuizState, saveQuizState } from "../../utils/quizState";
import SolvingTemplate from "../components/templates/SolvingTemplate";

const Solving = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBackdropOpen, setIsBackdropOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null); // 이 레퍼런스를 Modal에 전달

  const router = useRouter();

  const quizzes = useQuizStore((state) => state.quizzes);
  const currentQuizIndex = useQuizStore((state) => state.currentQuizIndex);
  const setCurrentQuizIndex = useQuizStore((state) => state.setCurrentQuizIndex);
  const addSolvedQuiz = useQuizStore((state) => state.addSolvedQuiz);
  const addPassedQuiz = useQuizStore((state) => state.addPassedQuiz);

  useEffect(() => {
    loadQuizState();
  }, []);

  const handleAnswerSubmit = async (userAnswer: string) => {
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
    } else {
      const feedback = await getOpenAIFeedback(currentQuiz.english, userAnswer, currentQuiz.correctAnswers);
      setModalTitle("오답입니다.");
      setModalMessage(feedback);
      openModal();
    }

    setIsLoading(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsBackdropOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsBackdropOpen(false);
    if (inputRef.current) {
      inputRef.current.focus(); // 모달이 닫힐 때 입력 필드에 포커스
    }

    if (modalTitle === "정답입니다!") {
      moveToNextQuiz();
    }
  };

  const moveToNextQuiz = () => {
    if (currentQuizIndex < quizzes.length - 1) {
      const newIndex = currentQuizIndex + 1;
      setCurrentQuizIndex(newIndex);
      saveQuizState();
    } else {
      router.push("/result");
    }
  };

  const handlePassQuiz = () => {
    const currentQuiz = quizzes[currentQuizIndex];
    addPassedQuiz(currentQuiz);
    moveToNextQuiz();
  };

  if (quizzes.length === 0) return <div>Loading...</div>;

  const currentQuiz = quizzes[currentQuizIndex];

  return <SolvingTemplate isLoading={isLoading} isModalOpen={isModalOpen} isBackdropOpen={isBackdropOpen} modalTitle={modalTitle} modalMessage={modalMessage} currentQuiz={currentQuiz} currentQuizIndex={currentQuizIndex} handleAnswerSubmit={handleAnswerSubmit} handlePassQuiz={handlePassQuiz} inputRef={inputRef} closeModal={closeModal} />;
};

export default Solving;
