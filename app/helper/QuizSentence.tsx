import React from "react";

type QuizSentenceProps = {
  sentence: string;
};

function QuizSentence({ sentence }: QuizSentenceProps) {
  const formattedSentence = sentence.replace(/___/g, `<span class="blank-box"></span>`);

  return <p dangerouslySetInnerHTML={{ __html: formattedSentence }}></p>;
}

export default QuizSentence;