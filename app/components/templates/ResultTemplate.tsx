// app/components/templates/ResultTemplate.tsx
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import QuizSwiper from "../organisms/QuizSwiper";
import { Quiz } from "../../store/quiz/store";
import classes from "@/app/styles/ResultTemplate.module.css";
import "react-tabs/style/react-tabs.css";

interface ResultTemplateProps {
  tabIndex: number;
  solvedQuizzes: Quiz[];
  passedQuizzes: Quiz[];
  calculateScore: () => number;
  handleRestart: () => void;
  handleGoToMain: () => void;
  setTabIndex: (index: number) => void;
}

const ResultTemplate: React.FC<ResultTemplateProps> = ({ tabIndex, solvedQuizzes, passedQuizzes, calculateScore, handleRestart, handleGoToMain, setTabIndex }) => {
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

export default ResultTemplate;
