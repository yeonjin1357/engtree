"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

import classes from "../styles/result.module.css";

const Result = () => {
  const searchParams = useSearchParams();
  const correct = searchParams.get("correct");
  const pass = searchParams.get("pass");

  return (
    <div>
      <h1>결과</h1>
      <p>정답: {correct}</p>
      <p>패스: {pass}</p>
      <Link href="/solving">다시 풀기</Link>
    </div>
  );
};

export default Result;
