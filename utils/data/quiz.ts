export const quizzes = [
  {
    id: 1,
    english: "Making sure my students get good grades is my ___ as a teacher",
    korean: "학생들이 좋은 성적을 받을 수 있도록 하는 것이 선생으로서 저의 [책임]이에요.",
    correctAnswers: ["responsibility", "obligation", "duty"],
    partialAnswers: [
      { answer: "charge", reason: `charge도 "책임"이라는 뜻이 있지만, 너무 격이 높고 요즘에는 이런 맥락으로 잘 사용하지 않아요.` },
      { answer: "call", reason: `현대 영어에서는 call을 "소명"의 의미로 쓰지 않아요. 본문에 맞지 않아요.` },
      { answer: "role", reason: `role은 "역할"이라는 뜻입니다. "책임"은 뭐라고 할까요?` },
      { answer: "responsible", reason: `responsible은 "책임 있는"이라는 뜻의 형용사여서 문법에 어긋납니다. "책임"을 뜻하는 명사는 뭘까요?` },
    ],
    difficulty: 2,
  },
  {
    id: 2,
    english: "Could you help me ___ a flight?",
    korean: "비행기 [예약하]는 거 좀 도와줄래요?",
    correctAnswers: ["book"],
    partialAnswers: [
      { answer: "reserve", reason: `reserve는 주로 식당이나 공연 등의 자리를 예약할 때 써요. 항공편을 "예약하다"는 뭘까요?` },
      { answer: "purchase", reason: `"구매하다"는 뜻의 purchase를 쓰려면, purchase a flight ticket이라고 해야 자연스러워요.` },
      { answer: "buy", reason: `buy는 산다는 뜻입니다. 예약하는 건 뭘까요?` },
      { answer: "get", reason: `get은 적당한 항공편을 찾아낸다는 뜻이지 예약을 한다는 뜻은 되지 않습니다.` },
    ],
    difficulty: 2,
  },
  {
    id: 3,
    english: "The bus comes ___ five minutes",
    korean: "버스는 5분[마다] 와.",
    correctAnswers: ["every"],
    partialAnswers: [
      { answer: "for", reason: `for five minutes는 "5분 동안"이에요. "5분마다"는 어떻게 표현할까요?` },
      { answer: "by", reason: `by(~까지)를 쓰려면 "by 5 pm(5시까지)"처럼 뒤에 특정 "시점"이 나와야 말이 됩니다.` },
      { answer: "in", reason: `in을 쓰면, 버스가 5분쯤 "후에" 도착한다는 뜻이 됩니다. 5분"마다"는 어떻게 표현할까요?` },
    ],
    difficulty: 1,
  },
  {
    id: 4,
    english: "It's hard to ___ in a new city without friends.",
    korean: "친구 없이 새 도시에서 [살아가기]가 힘들어.",
    correctAnswers: ["live", "get by", "survive"],
    partialAnswers: [
      { answer: "exist", reason: "`exist`는 단순히 '존재하다'의 의미로, 여기서 필요한 '살아가다'라는 느낌을 전달하기에는 부족해요." },
      { answer: "reside", reason: "`reside`는 주로 법률적이나 공식적인 문맥에서 '거주하다'라는 뜻으로 쓰여, 이 문장의 감정적인 뉘앙스를 잘 담아내지 못해요." },
      { answer: "dwell", reason: "`dwell`은 보통 더 문학적이거나 고전적인 맥락에서 사용되며, 현대적인 생활 양식을 나타내는 데는 잘 맞지 않아요." },
      { answer: "stay", reason: "`stay`는 일시적인 체류를 의미할 때 주로 사용되며, 여기서의 '살아가기'보다는 덜 포괄적입니다." },
    ],
    difficulty: 1,
  },
  {
    id: 5,
    english: "She can ___ three languages fluently.",
    korean: "그녀는 세 개의 언어를 유창하게 [구사할] 수 있어.",
    correctAnswers: ["speak", "talk", "communicate in"],
    partialAnswers: [
      { answer: "converse", reason: "`converse`는 대화하다는 의미로, 여러 언어를 유창하게 '구사한다'는 개념보다는 좀 더 특정 상황에 한정된 느낌을 줍니다." },
      { answer: "express", reason: "`express`는 주로 생각이나 감정을 '표현한다'는 데 쓰이며, 언어 능력을 나타내는 데는 넓은 범위를 제공하지 않아요." },
      { answer: "use", reason: "`use`는 너무 광범위하고, 특정 언어를 '유창하게 사용한다'는 뉘앙스를 정확히 전달하지 못합니다." },
      { answer: "know", reason: "`know`는 언어를 안다는 사실을 나타내지만, '유창하게 구사한다'는 능력까지는 표현하지 못합니다." },
    ],
    difficulty: 1,
  },
  {
    id: 6,
    english: "The chef uses a very unique method to ___ the chicken.",
    korean: "셰프는 닭을 [양념하]는 데 아주 독특한 방법을 사용해요.",
    correctAnswers: ["season", "marinate", "flavor"],
    partialAnswers: [
      { answer: "prepare", reason: `prepare는 "준비하다"는 넓은 의미를 가지고 있어, 여기서의 "양념하다"라는 구체적인 동작을 충분히 설명하지 못해요.` },
      { answer: "cook", reason: `cook는 일반적으로 음식을 가열하는 행위를 의미해요. "양념하다"는 좀 더 특별한 방법을 나타내죠.` },
      { answer: "dress", reason: `dress는 주로 샐러드에 양념을 하는 행위를 말해요. 여기서 말하는 닭을 "양념하다"와는 조금 다른 맥락이에요.` },
      { answer: "cover", reason: `cover는 "덮다"라는 뜻으로, 양념을 "덮는다"고 해도 양념하는 방법의 구체성을 제대로 전달하지 못합니다.` },
    ],
    difficulty: 5,
  },
  {
    id: 7,
    english: "He decided to ___ his career and start a new business.",
    korean: "그는 자신의 경력을 [바꾸기로] 결정하고 새로운 사업을 시작했어요.",
    correctAnswers: ["change", "switch", "transition"],
    partialAnswers: [
      { answer: "modify", reason: `modify는 "수정하다"라는 의미로, 경력의 전환보다는 미세 조정이나 변경을 나타내는 데 더 적합해요.` },
      { answer: "alter", reason: `alter도 변경을 의미하지만, 경력을 완전히 다른 분야로 바꾼다는 강한 뉘앙스를 전달하기에는 약간 부족해요.` },
      { answer: "transform", reason: `transform은 근본적으로 변화시키다는 의미로, 경력 변경을 나타내기에는 너무 큰 변화를 시사할 수 있어요.` },
      { answer: "convert", reason: `convert는 하나의 상태나 형태를 완전히 다른 것으로 바꾸는 것을 의미하지만, 일반적으로 경력의 변경을 설명하는 데 사용되지는 않아요.` },
    ],
    difficulty: 4,
  },
  {
    id: 8,
    english: "After the storm, the community worked together to ___ the park.",
    korean: "폭풍 후에, 지역 사회가 함께 공원을 [복구하기] 위해 노력했어요.",
    correctAnswers: ["restore", "rebuild", "repair"],
    partialAnswers: [
      { answer: "renew", reason: `renew는 보통 '갱신하다'의 의미로 사용되며, 공원과 같은 물리적 공간의 '복구' 작업에는 정확히 맞지 않아요.` },
      { answer: "fix", reason: `fix는 일반적으로 더 작은 규모의 수리를 의미하며, 큰 규모의 공원 '복구' 작업을 완전히 포괄하지는 않습니다.` },
      { answer: "refurbish", reason: `refurbish는 '새로 단장하다'는 의미로, 공원과 같은 큰 공간에 대한 '복구'보다는 내부 공간이나 가구 등을 개선하는 데 더 자주 사용됩니다.` },
      { answer: "recondition", reason: `recondition은 주로 기계나 장비를 '다시 좋은 상태로 만든다'는 데 쓰이며, 공원 '복구'와는 조금 거리가 있어요.` },
    ],
    difficulty: 3,
  },
  {
    id: 9,
    english: "The novel was so compelling that I read it ___ one day.",
    korean: "그 소설은 너무 매력적이어서 하루 [만에] 읽었어요.",
    correctAnswers: ["in", "within"],
    partialAnswers: [
      { answer: "throughout", reason: `throughout는 '동안 내내'라는 의미로, 시작과 끝이 명확한 행동에는 잘 맞지 않습니다.` },
      { answer: "over", reason: `over는 보통 기간을 거쳐서라는 의미로 사용되며, 이 경우 '하루 만에'라는 빠른 완료를 나타내지 못합니다.` },
      { answer: "for", reason: `for는 일정 기간 동안 지속되는 행위를 나타내지만, 여기서는 '하루 만에 끝냈다'는 의미를 전달하기에 부적절합니다.` },
    ],
    difficulty: 3,
  },
  {
    id: 10,
    english: "To stay healthy, it's important to ___ regularly.",
    korean: "건강을 유지하기 위해, 정기적으로 [운동하는 것]이 중요해요.",
    correctAnswers: ["exercise", "work out", "train"],
    partialAnswers: [
      { answer: "move", reason: `move는 '움직이다'의 일반적인 의미를 가지며, '운동하다'라는 구체적인 행위를 명확히 나타내지 않아요.` },
      { answer: "stretch", reason: `stretch는 '스트레칭하다'라는 더 구체적인 운동 방법을 의미하지만, 여기서는 더 넓은 범위의 정기적인 운동을 나타내는 단어가 필요해요.` },
      { answer: "do physical activities", reason: `do physical activities는 정확한 의미를 전달하지만, 일반적으로 더 간단하고 널리 사용되는 표현을 찾고 있어요.` },
    ],
    difficulty: 3,
  },
  {
    id: 11,
    english: "I need to ___ my phone before we leave.",
    korean: "우리가 떠나기 전에 제 핸드폰을 [충전해야] 해요.",
    correctAnswers: ["charge", "recharge"],
    partialAnswers: [
      { answer: "power up", reason: `"power up"은 전자기기에 전원을 공급하거나 켜는 행위를 의미하지만, 특히 '충전하다'와는 다소 거리가 있어요.` },
      { answer: "energize", reason: `"energize"는 무언가에 에너지를 주다는 의미이지만, 일상적인 맥락에서 핸드폰을 '충전하다'라는 표현으로는 자연스럽지 않아요.` },
      { answer: "fill up", reason: `"fill up"은 주로 액체를 가득 채우는 행위에 사용되며, 전기를 '충전'하는 행위에는 적합하지 않습니다.` },
    ],
    difficulty: 3,
  },
  {
    id: 12,
    english: "In the meeting, we need to ___ the issue of rising costs.",
    korean: "회의에서, 우리는 상승하는 비용의 문제를 [논의해야] 해요.",
    correctAnswers: ["discuss", "address", "talk about"],
    partialAnswers: [
      { answer: "mention", reason: `"mention"은 언급하다는 의미이지만, 문제를 심도 있게 '논의하다'는 의미를 전달하기에는 충분히 구체적이지 않아요.` },
      { answer: "debate", reason: `"debate"는 대립되는 견해 간의 공식적인 토론을 의미하며, 여기서 필요한 넓은 범위의 '논의'보다는 더 제한적인 상황을 가리킵니다.` },
      { answer: "review", reason: `"review"는 검토하다는 의미로, 비용 문제와 같은 특정 주제에 대한 포괄적인 논의보다는 보다 세부적인 정보나 문서 등을 살펴보는 데 사용됩니다.` },
    ],
    difficulty: 3,
  },
  {
    id: 13,
    english: "To improve your mood, try to ___ positive thoughts.",
    korean: "기분을 개선하기 위해, 긍정적인 생각을 [하려고 노력하세요].",
    correctAnswers: ["cultivate", "foster", "harbor"],
    partialAnswers: [
      { answer: "think", reason: `"think"는 '생각하다'의 가장 일반적인 표현이지만, 여기서는 긍정적인 생각을 적극적으로 발전시키려는 노력을 의미하는 더 구체적인 동사가 필요합니다.` },
      { answer: "hold", reason: `"hold"는 생각을 '가지다'는 의미로 사용될 수 있으나, 이 문장에서 요구하는 '긍정적인 생각을 적극적으로 발전시키려는 행위'를 충분히 나타내지 못합니다.` },
      { answer: "maintain", reason: `"maintain"은 '유지하다'라는 의미를 가지며, 이는 이미 가지고 있는 상태를 계속해서 가진다는 뉘앙스이지, 새롭게 긍정적인 생각을 발전시키는 과정을 의미하지는 않습니다.` },
    ],
    difficulty: 5,
  },
  {
    id: 14,
    english: "She always ___ to classical music while studying.",
    korean: "그녀는 공부할 때 항상 클래식 음악을 [들으며] 합니다.",
    correctAnswers: ["listens"],
    partialAnswers: [
      { answer: "hears", reason: `"hears"는 듣다의 뜻이 있지만, 이 경우는 의도적으로 클래식 음악을 듣는 행위를 나타내는 'listens'가 더 적합합니다.` },
      { answer: "plays", reason: `"plays"는 음악을 연주하거나 재생한다는 의미이지만, 여기서는 음악을 직접 듣는 행위를 묘사하는 데는 정확하지 않습니다.` },
      { answer: "enjoys", reason: `"enjoys"는 즐긴다는 의미이지만, 이는 음악을 듣는 행위보다 느낌이나 경험에 중점을 둔 표현으로, 구체적인 행위를 나타내는 데는 적합하지 않습니다.` },
      { answer: "listen", reason: `문장에서 주어인 "She"를 생각해보고 문법적으로 올바르게 수정해봅시다.` },
    ],
    difficulty: 2,
  },
];

// 문제를 무작위로 섞고 앞에서부터 10개를 선택하는 함수
export const getRandomQuizzes = (num = 10) => {
  const shuffled = quizzes.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};
