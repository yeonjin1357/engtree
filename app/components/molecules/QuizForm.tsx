// app/components/molecules/QuizForm.tsx
import React, { useState, useRef, RefObject } from "react";

import classes from "@/app/styles/SolvingTemplate.module.css";

interface QuizFormProps {
  handleAnswerSubmit: (userAnswer: string) => void;
  handlePassQuiz: () => void;
  inputRef: RefObject<HTMLInputElement>;
}

const QuizForm: React.FC<QuizFormProps> = ({ handleAnswerSubmit, handlePassQuiz, inputRef }) => {
  const [userAnswer, setUserAnswer] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAnswerSubmit(userAnswer);
    setUserAnswer("");
    // 입력 필드 포커스 해제
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <article className={classes.form_wrap}>
      <form onSubmit={onSubmit}>
        <input type="text" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} ref={inputRef} />
        <button className={classes.submit_btn} type="submit">
          제출
        </button>
      </form>
      <button className={classes.pass_btn} onClick={handlePassQuiz}>
        문제 넘어가기
      </button>
    </article>
  );
};

export default QuizForm;
