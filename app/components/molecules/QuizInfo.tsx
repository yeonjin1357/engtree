// app/components/molecules/QuizInfo.tsx
import React from "react";

import classes from "@/app/styles/SolvingTemplate.module.css";

const QuizInfo = ({ currentQuiz, currentQuizIndex }: { currentQuiz: any; currentQuizIndex: number }) => {
  return (
    <>
      <div className={classes.difficulty}>
        <p>난이도 {currentQuiz.difficulty}</p>
      </div>
      <div className={classes.remaining_quiz}>
        <p>문제 {currentQuizIndex + 1} / 10</p>
      </div>
    </>
  );
};

export default QuizInfo;
