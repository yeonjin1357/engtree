// app/components/organisms/Modal.tsx
import React from "react";
import ReactDOM from "react-dom";

import classes from "@/app/styles/Modal.module.css";
import CorrectAnswer from "../atoms/CorrectAnswer";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  userAnswer: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message, userAnswer }) => {
  if (!isOpen) return null;

  const isCorrect = title === "정답입니다!";

  return ReactDOM.createPortal(
    <div className={classes.feedback}>
      <h2 className={isCorrect ? classes.correct : classes.incorrect}>
        {isCorrect ? <span className={classes.icon}>✅</span> : <span className={classes.icon}>⛔</span>}
        {title}
      </h2>
      {isCorrect ? <CorrectAnswer sentence={message} userAnswer={userAnswer} /> : <p>{message}</p>}
      <button onClick={onClose}>확인</button>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
