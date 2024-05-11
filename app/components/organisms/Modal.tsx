// app/components/organisms/Modal.tsx
import React from "react";
import ReactDOM from "react-dom";

import classes from "@/app/styles/Modal.module.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  const isCorrect = title === "정답입니다!";

  return ReactDOM.createPortal(
    <div className={classes.feedback}>
      <h2 className={isCorrect ? classes.correct : classes.incorrect}>
        {isCorrect ? <span className={classes.icon}>✅</span> : <span className={classes.icon}>⛔</span>}
        {title}
      </h2>
      <p>{message}</p>
      <button onClick={onClose}>확인</button>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
