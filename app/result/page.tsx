// app/result/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { useQuizStore } from "../store/quiz/store";
import QuizSwiper from "./QuizSwiper";

import classes from "../styles/result.module.css";

const Result = () => {
  const router = useRouter();
  const resetQuizState = useQuizStore((state) => state.resetQuizState);
  const [solvedQuizzes, setSolvedQuizzes] = useState([]);
  const [passedQuizzes, setPassedQuizzes] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const storedSolvedQuizzes = JSON.parse(localStorage.getItem("solvedQuizzes") || "[]");
    const storedPassedQuizzes = JSON.parse(localStorage.getItem("passedQuizzes") || "[]");

    setSolvedQuizzes(storedSolvedQuizzes);
    setPassedQuizzes(storedPassedQuizzes);

    if (storedSolvedQuizzes.length === 0 && storedPassedQuizzes.length === 0) {
      router.push("/");
    }
  }, [router]);

  const handleRestart = () => {
    resetQuizState();
    router.push("/solving");
  };

  const handleGoToMain = () => {
    resetQuizState();
    router.push("/");
  };

  const calculateScore = () => {
    const totalQuizzes = solvedQuizzes.length + passedQuizzes.length;
    const score = Math.round((solvedQuizzes.length / totalQuizzes) * 100);
    return score;
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
          <QuizSwiper quizzes={solvedQuizzes} />
        </TabPanel>
        <TabPanel>
          <h3 className={classes.quizNumber}>틀린 문제 수: {passedQuizzes.length}</h3>
          <QuizSwiper quizzes={passedQuizzes} />
        </TabPanel>
      </Tabs>
      <div className={classes.buttonContainer}>
        <button className={classes.restartButton} onClick={handleRestart}>
          다시 풀기
        </button>
        <button className={classes.mainButton} onClick={handleGoToMain}>
          메인 페이지로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default Result;
