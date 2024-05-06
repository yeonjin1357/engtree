// app/solving/QuizForm.tsx
import React, { useState } from "react";
import classes from "../styles/solving.module.css";

const QuizForm = ({ handleAnswerSubmit, handlePassQuiz }: { handleAnswerSubmit: (userAnswer: string) => void; handlePassQuiz: () => void }) => {
  const [userAnswer, setUserAnswer] = useState("");

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleAnswerSubmit(userAnswer);
    setUserAnswer("");
  };

  return (
    <article className={classes.form_wrap}>
      <form onSubmit={onSubmit}>
        <input type="text" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
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
