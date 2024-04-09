"use client";

import React, { useState, useEffect } from "react";
import { getRandomQuizzes } from "@/utils/data/quiz";

type Quiz = {
  id: number;
  english: string;
  korean: string;
  correctAnswers: string[];
  partialAnswers: { answer: string; reason: string }[];
};

const Solving = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    setQuizzes(getRandomQuizzes());
  }, []);

  const handleAnswerSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const currentQuiz = quizzes[currentQuizIndex];

    // 완벽한 정답 체크
    if (currentQuiz.correctAnswers.includes(userAnswer.trim().toLowerCase())) {
      setFeedback("정답입니다!");
      moveToNextQuiz();
    } else {
      const partialAnswer = currentQuiz.partialAnswers.find((pa) => pa.answer === userAnswer.trim().toLowerCase());
      // 애매한 답변 체크
      if (partialAnswer) {
        setFeedback(`애매한 답변입니다: ${partialAnswer.reason}`);
      } else {
        setFeedback("틀렸습니다. 다시 시도해보세요.");
      }
    }
  };

  const moveToNextQuiz = () => {
    if (currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setUserAnswer("");
      setFeedback("");
    } else {
      // 여기에서 결과 페이지로 리디렉션
      window.location.href = "/result";
    }
  };

  if (quizzes.length === 0) return <div>Loading...</div>;

  const currentQuiz = quizzes[currentQuizIndex];

  return (
    <div>
      <p>{currentQuiz.english}</p>
      <p>{currentQuiz.korean}</p>
      <form onSubmit={handleAnswerSubmit}>
        <input type="text" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
        <button type="submit">제출</button>
      </form>
      {feedback && <p>{feedback}</p>}
      <button onClick={moveToNextQuiz}>문제 넘어가기</button>
    </div>
  );
};

export default Solving;
