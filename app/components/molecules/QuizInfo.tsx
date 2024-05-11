// app/components/molecules/QuizInfo.tsx
import { Quiz } from "../../store/quiz/store";
import classes from "@/app/styles/SolvingTemplate.module.css";
interface QuizInfoProps {
  currentQuiz: Quiz;
  currentQuizIndex: number;
}

const QuizInfo: React.FC<QuizInfoProps> = ({ currentQuiz, currentQuizIndex }) => {
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
