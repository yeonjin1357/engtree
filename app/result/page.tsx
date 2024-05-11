// app/result/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useQuizStore } from "../store/quiz/store";
import ResultTemplate from "../components/templates/ResultTemplate";

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

  return <ResultTemplate tabIndex={tabIndex} solvedQuizzes={solvedQuizzes} passedQuizzes={passedQuizzes} calculateScore={calculateScore} handleRestart={handleRestart} handleGoToMain={handleGoToMain} setTabIndex={setTabIndex} />;
};

export default Result;
