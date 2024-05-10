// app/result/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuizStore } from "../store/quiz/store";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "react-tabs/style/react-tabs.css";
import classes from "../styles/result.module.css";

// app/result/page.tsx
const Result = () => {
  const router = useRouter();
  const solvedQuizzes = JSON.parse(localStorage.getItem("solvedQuizzes") || "[]");
  const passedQuizzes = JSON.parse(localStorage.getItem("passedQuizzes") || "[]");
  const resetQuizState = useQuizStore((state) => state.resetQuizState);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    if (solvedQuizzes.length === 0 && passedQuizzes.length === 0) {
      router.push("/");
    }
  }, []);

  const handleRestart = () => {
    resetQuizState();
    router.push("/solving");
  };

  const calculateScore = () => {
    const totalQuizzes = solvedQuizzes.length + passedQuizzes.length;
    const score = Math.round((solvedQuizzes.length / totalQuizzes) * 100);
    return score;
  };

  const swiperParams = {
    slidesPerView: 1.5,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>퀴즈 결과</h1>
      <div className={classes.scoreContainer}>
        <h2 className={classes.scoreTitle}>점수</h2>
        <p className={classes.score}>{calculateScore()}점</p>
      </div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>맞춘 문제</Tab>
          <Tab>틀린 문제</Tab>
        </TabList>
        <TabPanel>
          <h3 className={classes.quizNumber}>맞춘 문제 수: {solvedQuizzes.length}</h3>
          <Swiper {...swiperParams}>
            {solvedQuizzes.map((quiz: any) => (
              <SwiperSlide key={quiz.id} className={classes.swiperSlide}>
                <div className={classes.quizItem}>
                  <p className={classes.quizEnglish}>{quiz.english}</p>
                  <p className={classes.quizKorean}>{quiz.korean}</p>
                  <p className={classes.quizAnswer}>정답: {quiz.correctAnswers.join(", ")}</p>
                  <p className={classes.quizIndex}>문제 번호: {quiz.quizIndex}</p>
                </div>
              </SwiperSlide>
            ))}
            <div className={`swiper-pagination ${classes.swiperPagination}`}></div>
          </Swiper>
        </TabPanel>
        <TabPanel>
          <h3 className={classes.quizNumber}>틀린 문제 수: {passedQuizzes.length}</h3>
          <Swiper {...swiperParams}>
            {passedQuizzes.map((quiz: any) => (
              <SwiperSlide key={quiz.id} className={classes.swiperSlide}>
                <div className={classes.quizItem}>
                  <p className={classes.quizEnglish}>{quiz.english}</p>
                  <p className={classes.quizKorean}>{quiz.korean}</p>
                  <p className={classes.quizAnswer}>정답: {quiz.correctAnswers.join(", ")}</p>
                  <p className={classes.quizIndex}>문제 번호: {quiz.quizIndex}</p>
                </div>
              </SwiperSlide>
            ))}
            <div className={`swiper-pagination ${classes.swiperPagination}`}></div>
          </Swiper>
        </TabPanel>
      </Tabs>
      <button className={classes.restartButton} onClick={handleRestart}>
        다시 풀기
      </button>
    </div>
  );
};

export default Result;
