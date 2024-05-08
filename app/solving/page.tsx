// app/solving/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Modal from "../helper/Modal";
import Backdrop from "../helper/Backdrop";
import QuizSentence from "../helper/QuizSentence";
import KoreanSentence from "../helper/KoreanSentence";

import { useQuizStore } from "../store/quiz/store";
import { loadQuizState, saveQuizState, resetQuizState } from "../../utils/quizState";
import { getOpenAIFeedback } from "@/utils/answerAI";
import QuizForm from "./QuizForm";
import QuizInfo from "./QuizInfo";
import classes from "../styles/solving.module.css";

const Solving = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBackdropOpen, setIsBackdropOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  const router = useRouter();

  const quizzes = useQuizStore((state) => state.quizzes);
  const currentQuizIndex = useQuizStore((state) => state.currentQuizIndex);
  const setQuizzes = useQuizStore((state) => state.setQuizzes);
  const setCurrentQuizIndex = useQuizStore((state) => state.setCurrentQuizIndex);
  const addSolvedQuiz = useQuizStore((state) => state.addSolvedQuiz);
  const addPassedQuiz = useQuizStore((state) => state.addPassedQuiz);

  useEffect(() => {
    loadQuizState(setQuizzes, setCurrentQuizIndex);
  }, []);

  const handleAnswerSubmit = async (userAnswer: string) => {
    const currentQuiz = quizzes[currentQuizIndex];

    if (currentQuiz.correctAnswers.includes(userAnswer.trim().toLowerCase())) {
      addSolvedQuiz(currentQuiz);
      setFeedback("정답입니다!");
      openModal();
    } else {
      const feedback = await getOpenAIFeedback(currentQuiz.english, userAnswer);
      setFeedback(feedback);
      openModal();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsBackdropOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsBackdropOpen(false);
    if (feedback === "정답입니다!") {
      moveToNextQuiz();
    }
  };

  const moveToNextQuiz = () => {
    if (currentQuizIndex < quizzes.length - 1) {
      const newIndex = currentQuizIndex + 1;
      setCurrentQuizIndex(newIndex);
      saveQuizState(newIndex);
    } else {
      resetQuizState();
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

  return (
    <div className={classes.container}>
      <QuizInfo currentQuiz={currentQuiz} currentQuizIndex={currentQuizIndex} />
      <div className={classes.korean_box}>
        <KoreanSentence sentence={currentQuiz.korean} />
      </div>
      <div className={classes.english_box}>
        <QuizSentence sentence={currentQuiz.english} />
      </div>
      <QuizForm handleAnswerSubmit={handleAnswerSubmit} handlePassQuiz={handlePassQuiz} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>{feedback}</p>
      </Modal>
      <Backdrop isOpen={isBackdropOpen} />
    </div>
  );
};

export default Solving;
