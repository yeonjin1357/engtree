// app/components/organisms/QuizSwiper.tsx
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import QuizSentence from "../atoms/QuizSentence";
import classes from "@/app/styles/ResultTemplate.module.css";
import "swiper/css";
import "swiper/css/pagination";

interface QuizSwiperProps {
  quizzes: any[];
}

const QuizSwiper: React.FC<QuizSwiperProps> = ({ quizzes }) => {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      autoHeight
      spaceBetween={10}
      pagination={{ clickable: true }}
      breakpoints={{
        600: {
          slidesPerView: 1.1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
      }}
    >
      {quizzes.map((quiz) => (
        <SwiperSlide key={quiz.id} className={classes.swiperSlide}>
          <div className={classes.quizItem}>
            <QuizSentence sentence={quiz.english} />
            <p className={classes.quizKorean}>{quiz.korean}</p>
            <p className={classes.quizAnswer}>정답: {quiz.correctAnswers.join(", ")}</p>
            <p className={classes.quizIndex}>문제 번호: {quiz.quizIndex}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default QuizSwiper;
