// app/components/templates/SolvingTemplate.tsx
import React from "react";

import QuizInfo from "../molecules/QuizInfo";
import KoreanSentence from "../atoms/KoreanSentence";
import QuizSentence from "../atoms/QuizSentence";
import QuizForm from "../molecules/QuizForm";
import Modal from "../organisms/Modal";
import Backdrop from "../organisms/Backdrop";
import LoadingSpinner from "../atoms/LoadingSpinner";
import classes from "@/app/styles/SolvingTemplate.module.css";

interface SolvingTemplateProps {
  isLoading: boolean;
  isModalOpen: boolean;
  isBackdropOpen: boolean;
  modalTitle: string;
  modalMessage: string;
  currentQuiz: any;
  currentQuizIndex: number;
  handleAnswerSubmit: (userAnswer: string) => Promise<void>;
  handlePassQuiz: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
  closeModal: () => void;
}

const SolvingTemplate: React.FC<SolvingTemplateProps> = ({ isLoading, isModalOpen, isBackdropOpen, modalTitle, modalMessage, currentQuiz, currentQuizIndex, handleAnswerSubmit, handlePassQuiz, inputRef, closeModal }) => {
  return (
    <div className={classes.container}>
      {isLoading && <LoadingSpinner />}
      <QuizInfo currentQuiz={currentQuiz} currentQuizIndex={currentQuizIndex} />
      <div className={classes.korean_box}>
        <KoreanSentence sentence={currentQuiz.korean} />
      </div>
      <div className={classes.english_box}>
        <QuizSentence sentence={currentQuiz.english} />
      </div>
      <QuizForm handleAnswerSubmit={handleAnswerSubmit} handlePassQuiz={handlePassQuiz} inputRef={inputRef} />
      <Modal isOpen={isModalOpen} onClose={closeModal} title={modalTitle} message={modalMessage} />
      <Backdrop isOpen={isBackdropOpen} />
    </div>
  );
};

export default SolvingTemplate;
