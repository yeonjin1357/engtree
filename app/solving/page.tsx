"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

import Modal from "../helper/Modal";
import Backdrop from "../helper/Backdrop";
import QuizSentence from "../helper/QuizSentence";
import KoreanSentence from "../helper/KoreanSentence";
import { getRandomQuizzes } from "@/utils/data/quiz";
import classes from "../styles/solving.module.css";

type Quiz = {
  id: number;
  english: string;
  korean: string;
  correctAnswers: string[];
  partialAnswers: { answer: string; reason: string }[];
  difficulty: number;
};

const Solving = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 창 상태
  const [isBackdropOpen, setIsBackdropOpen] = useState(false); // 모달 창 상태
  const [result, setResult] = useState({
    correct: 0,
    pass: 0,
  });

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setQuizzes(getRandomQuizzes());
  }, []);

  const handleAnswerSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const currentQuiz = quizzes[currentQuizIndex];

    // 완벽한 정답 체크
    if (currentQuiz.correctAnswers.includes(userAnswer.trim().toLowerCase())) {
      setResult((prev) => ({ ...prev, correct: prev.correct + 1 }));
      setFeedback("정답입니다!");
      setIsModalOpen(true); // 모달 창 열기
      setIsBackdropOpen(true); // 백드롭 열기
    } else {
      const partialAnswer = currentQuiz.partialAnswers.find((pa) => pa.answer === userAnswer.trim().toLowerCase());
      // 애매한 답변 체크
      if (partialAnswer) {
        setFeedback(`${partialAnswer.reason}`);
      } else {
        setFeedback("틀렸습니다. 다시 시도해보세요.");
      }
      setIsModalOpen(true); // 모달 창 열기
      setIsBackdropOpen(true); // 백드롭 열기
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 창 닫기
    setIsBackdropOpen(false); // 백드롭 닫기
    if (feedback === "정답입니다!") {
      moveToNextQuiz(); // 정답인 경우에만 다음 문제로 이동
    }
  };

  const moveToNextQuiz = () => {
    if (currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setUserAnswer("");
      setFeedback("");
    } else {
      router.push(`/result?correct=${result.correct}&pass=${result.pass}`);
    }
  };

  const handlePassQuiz = () => {
    if (currentQuizIndex === quizzes.length - 1) {
      // 마지막 문제에서 "문제 넘어가기" 버튼을 누른 경우
      setResult((prev) => ({ ...prev, pass: prev.pass + 1 }));
      router.push(`/result?correct=${result.correct}&pass=${result.pass + 1}`); // pass를 여기서 1 증가시킨 값을 사용
    } else {
      setResult((prev) => ({ ...prev, pass: prev.pass + 1 }));
      moveToNextQuiz();
    }
  };

  if (quizzes.length === 0) return <div>Loading...</div>;

  const currentQuiz = quizzes[currentQuizIndex];
  console.log(result);

  return (
    <div className={classes.container}>
      <div className={classes.difficulty}>
        <p>난이도 {currentQuiz.difficulty}</p>
      </div>
      <div className={classes.remaining_quiz}>
        <p>문제 {currentQuizIndex + 1} / 10</p>
      </div>
      <div className={classes.korean_box}>
        <KoreanSentence sentence={currentQuiz.korean} />
      </div>
      <div className={classes.english_box}>
        <QuizSentence sentence={currentQuiz.english} />
      </div>
      <article className={classes.form_wrap}>
        <form onSubmit={handleAnswerSubmit}>
          <input type="text" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
          <button className={classes.submit_btn} type="submit">
            제출
          </button>
        </form>
        <button className={classes.pass_btn} onClick={handlePassQuiz}>
          문제 넘어가기
        </button>
      </article>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>{userAnswer}</h2>
        <p>{feedback}</p>
      </Modal>
      <Backdrop isOpen={isBackdropOpen}></Backdrop>
    </div>
  );
};

export default Solving;
