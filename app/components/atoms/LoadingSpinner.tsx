// app/components/atoms/QuizSentence.tsx
"use client";

import React from "react";
import ReactDOM from "react-dom";

import classes from "@/app/styles/LoadingSpinner.module.css";

const LoadingSpinner: React.FC = () => {
  return ReactDOM.createPortal(
    <div>
      <div className={classes.spinner}></div>
    </div>,
    document.getElementById("loading")!
  );
};

export default LoadingSpinner;
