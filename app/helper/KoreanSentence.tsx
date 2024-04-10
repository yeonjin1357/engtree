import React from "react";

type KoreanSentenceProps = {
  sentence: string;
};

function KoreanSentence({ sentence }: KoreanSentenceProps) {
  // 정규 표현식을 사용하여 [ ] 안의 텍스트를 찾습니다.
  const parts = sentence.split(/(\[[^\]]+\])/).map((part, index) => {
    // [ ] 안의 텍스트에 대해 특별한 스타일을 적용합니다.
    if (part.startsWith("[") && part.endsWith("]")) {
      return (
        <span key={index} style={{ color: "#49bd78", fontWeight: "bold" }}>
          {part.substring(1, part.length - 1)}
        </span>
      );
    }
    // 나머지 텍스트는 그대로 렌더링합니다.
    return part;
  });

  return <p>{parts}</p>;
}

export default KoreanSentence;
