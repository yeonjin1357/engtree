// app/components/atoms/CorrectAnswer.tsx
import React from "react";

type CorrectAnswerProps = {
  sentence: string;
  userAnswer: string;
};

function CorrectAnswer({ sentence, userAnswer }: CorrectAnswerProps) {
  const parts = sentence.split("___");
  const formattedSentence = parts.map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < parts.length - 1 && <strong style={{ color: "#49bd78" }}>{userAnswer}</strong>}
    </React.Fragment>
  ));

  return <p>{formattedSentence}</p>;
}

export default CorrectAnswer;
