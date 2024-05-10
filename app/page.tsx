// app/page.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import classes from "./styles/main.module.css";
import logo from "@/public/logo.svg";
import bookIcon from "@/public/images/book.png";

export default function Home() {
  useEffect(() => {
    const storedQuizzes = localStorage.getItem("quizzes");
    const storedSolvedQuizzes = localStorage.getItem("solvedQuizzes");
    const storedPassedQuizzes = localStorage.getItem("passedQuizzes");

    if (storedQuizzes || storedSolvedQuizzes || storedPassedQuizzes) {
      localStorage.clear();
    }
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Image src={logo} alt="로고" width={300} height={0}></Image>
      </div>
      <Link href="/solving" className={classes.btn}>
        <div className={classes.icon}>
          <Image src={bookIcon} alt="아이콘" width={50} height={0}></Image>
        </div>
        <h5>학습 시작하기</h5>
      </Link>
    </div>
  );
}
