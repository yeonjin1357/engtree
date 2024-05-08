// app/result/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useQuizStore } from "../store/quiz/store";
import classes from "../styles/result.module.css";

const Result = () => {
  const router = useRouter();

  const solvedQuizzes = useQuizStore((state) => state.solvedQuizzes);
  const passedQuizzes = useQuizStore((state) => state.passedQuizzes);
  const resetQuizState = useQuizStore((state) => state.resetQuizState);

  useEffect(() => {
    if (solvedQuizzes.length === 0 && passedQuizzes.length === 0) {
      router.push("/");
    }
  }, []);

  const handleRestart = () => {
    resetQuizState();
    router.push("/solving");
  };

  return (
    <div>
      <h1>결과</h1>
      <div>
        <h2>맞춘 문제</h2>
        {solvedQuizzes.map((quiz) => (
          <div key={quiz.id}>
            <p>문제: {quiz.english}</p>
            <p>정답: {quiz.correctAnswers.join(", ")}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>틀린 문제</h2>
        {passedQuizzes.map((quiz) => (
          <div key={quiz.id}>
            <p>문제: {quiz.english}</p>
            <p>정답: {quiz.correctAnswers.join(", ")}</p>
          </div>
        ))}
      </div>
      <button onClick={handleRestart}>다시 풀기</button>
    </div>
  );
};

export default Result;
