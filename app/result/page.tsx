"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import classes from "../styles/result.module.css";

// Result 컴포넌트를 정의합니다. 이 컴포넌트는 클라이언트 사이드에서만 실행됩니다.
const ResultContent = () => {
  const searchParams = useSearchParams();
  const correct = searchParams.get("correct");
  const pass = searchParams.get("pass");

  console.log(searchParams);

  return (
    <div>
      <h1>결과</h1>
      <p>정답: {correct}</p>
      <p>패스: {pass}</p>
      <Link href="/solving">다시 풀기</Link>
    </div>
  );
};

// Result 컴포넌트를 Suspense로 감싸고 fallback으로 로딩 상태를 보여줍니다.
const Result = () => {
  return (
    <Suspense fallback={<p>결과를 불러오는 중...</p>}>
      <ResultContent />
    </Suspense>
  );
};

export default Result;
