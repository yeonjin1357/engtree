export const quizzes = [
  // 문제 1
  {
    id: 1,
    english: "He always ___ his teeth before going to bed.",
    korean: "그는 잠자리에 들기 전에 항상 이를 닦습니다.",
    correctAnswers: ["brushes", "cleans"],
    partialAnswers: [
      { answer: "rinses", reason: "입을 헹군다는 것도 중요하지만, 이 과정은 닦는 것만큼 깊은 청결을 제공하지 않습니다." },
      { answer: "scrubs", reason: "보다 강한 단어이지만, 일반적으로 이를 위한 용어는 아닙니다." },
      { answer: "polishes", reason: "매끄럽게 하는 것을 의미하지만, 일상적인 용어는 아닙니다." },
    ],
    difficulty: 2,
  },
  // 문제 2
  {
    id: 2,
    english: "I ___ to the new cafe downtown yesterday.",
    korean: "나는 어제 시내의 새 카페에 갔습니다.",
    correctAnswers: ["went", "visited"],
    partialAnswers: [
      { answer: "headed", reason: "목적지에 도달했는지 명확하지 않습니다." },
      { answer: "walked", reason: "걸어갔다는 것을 나타내지만, 실제 도착 여부는 불분명합니다." },
      { answer: "moved", reason: "이동했다는 일반적인 의미이지만, 구체적인 방문을 지칭하지는 않습니다." },
    ],
    difficulty: 1,
  },

  // 문제 3
  {
    id: 3,
    english: "It's important to ___ a good first impression.",
    korean: "좋은 첫인상을 남기는 것이 중요합니다.",
    correctAnswers: ["make"],
    partialAnswers: [
      { answer: "give", reason: "비슷한 의미이지만, 표준적인 사용에서는 약간의 차이가 있습니다." },
      { answer: "have", reason: "소유한다는 의미로 해석될 수 있으며, 직접적인 생성 의미와는 거리가 있습니다." },
      { answer: "create", reason: "첫인상을 '만든다'는 표현은 일반적이지 않습니다." },
    ],
    difficulty: 2,
  },

  // 문제 4
  {
    id: 4,
    english: "She ___ her hand when she was cooking dinner.",
    korean: "그녀는 저녁 식사를 준비하다가 손을 다쳤습니다.",
    correctAnswers: ["burned", "cut"],
    partialAnswers: [
      { answer: "scalded", reason: "뜨거운 물에 의한 화상을 의미하지만, 일반적인 상해보다는 더 구체적입니다." },
      { answer: "bruised", reason: "멍이 들었다는 의미로, 일반적인 요리 중 발생할 상해와는 다릅니다." },
      { answer: "injured", reason: "넓은 의미의 상해를 나타내지만, 어떻게 다쳤는지는 명확히 하지 않습니다." },
    ],
    difficulty: 3,
  },

  // 문제 5
  {
    id: 5,
    english: "Could you ___ me a favor?",
    korean: "나에게 부탁 하나만 들어줄 수 있나요?",
    correctAnswers: ["do"],
    partialAnswers: [
      { answer: "perform", reason: "일반적으로 '부탁을 수행하다'라는 맥락에서는 사용되지 않습니다." },
      { answer: "give", reason: "'부탁을 주다'라는 표현은 적절하지 않습니다." },
      { answer: "provide", reason: "'제공하다'는 넓은 의미이지만, 이 맥락에서는 일반적으로 사용되지 않습니다." },
    ],
    difficulty: 1,
  },

  // 문제 6
  {
    id: 6,
    english: "They ___ the game despite having two fewer players.",
    korean: "그들은 선수 두 명이 부족함에도 불구하고 경기에서 이겼습니다.",
    correctAnswers: ["won", "secured"],
    partialAnswers: [
      { answer: "played", reason: "참여했다는 의미이지만, 승리를 직접적으로 나타내지는 않습니다." },
      { answer: "completed", reason: "경기를 마쳤다는 의미이지만, 결과에 대해서는 언급하지 않습니다." },
      { answer: "achieved", reason: "성취했다는 일반적인 의미이지만, 승리에 직접 연결되지는 않습니다." },
    ],
    difficulty: 3,
  },

  // 문제 7
  {
    id: 7,
    english: "The teacher asked the students to ___ on the project.",
    korean: "선생님은 학생들에게 프로젝트에 집중할 것을 요청했습니다.",
    correctAnswers: ["work", "collaborate"],
    partialAnswers: [
      { answer: "focus", reason: "집중하는 것을 의미하지만, 실제 작업을 나타내는 것은 아닙니다." },
      { answer: "concentrate", reason: "'집중하다'는 의미이지만, 구체적인 활동을 나타내지 않습니다." },
      { answer: "participate", reason: "참여한다는 의미이지만, 적극적인 기여를 명시적으로 나타내지 않습니다." },
    ],
    difficulty: 2,
  },

  // 문제 8
  {
    id: 8,
    english: "He found it difficult to ___ his opinion in the meeting.",
    korean: "그는 회의에서 자신의 의견을 표현하기 어려워했습니다.",
    correctAnswers: ["express", "voice"],
    partialAnswers: [
      { answer: "state", reason: "명시하는 것을 의미하지만, 개인적인 견해의 발표를 더 강력하게 암시하는 단어들이 있습니다." },
      { answer: "share", reason: "공유한다는 의미이지만, 공식적인 회의 상황에서의 의견 표현보다는 더 일반적인 표현입니다." },
      { answer: "declare", reason: "선언한다는 것을 의미하지만, 개인적인 의검을 나타내는 데는 다소 공식적인 단어입니다." },
    ],
    difficulty: 4,
  },

  // 문제 9
  {
    id: 9,
    english: "I ___ to contact you earlier, but I was too busy.",
    korean: "나는 더 일찍 연락하려고 했지만 너무 바빴어요.",
    correctAnswers: ["tried", "attempted"],
    partialAnswers: [
      { answer: "planned", reason: "계획했다는 의미이지만, 실제 시도까지는 이르지 않았음을 시사합니다." },
      { answer: "wished", reason: "원했다는 의미이지만, 구체적인 행동으로 이어지지 않았을 수 있습니다." },
      { answer: "thought", reason: "생각했다는 의미이지만, 실제 행동으로의 전환을 명확히 하지 않습니다." },
    ],
    difficulty: 2,
  },

  // 문제 10
  {
    id: 10,
    english: "The museum is ___ for renovations until next month.",
    korean: "박물관은 다음 달까지 보수 작업으로 인해 개방되지 않습니다.",
    correctAnswers: ["closed", "shut"],
    partialAnswers: [
      { answer: "locked", reason: "실제로 잠겨 있을 수 있지만, 일반적인 상황 설명에는 적합하지 않습니다." },
      { answer: "sealed", reason: "물리적으로 밀봉됨을 나타내지만, 임시 폐쇄의 의미를 전달하기에는 너무 구체적입니다." },
      { answer: "barred", reason: "접근이 금지됨을 나타내지만, 일시적인 폐쇄를 설명하는 데는 일반적으로 사용되지 않습니다." },
    ],
    difficulty: 1,
  },

  // 문제 11
  {
    id: 11,
    english: "The novel ___ a lot of attention from young readers.",
    korean: "이 소설은 젊은 독자들로부터 많은 주목을 받았습니다.",
    correctAnswers: ["received", "attracted"],
    partialAnswers: [
      { answer: "gained", reason: "주목을 얻는다는 의미이지만, 'received'나 'attracted'에 비해 덜 직접적입니다." },
      { answer: "captured", reason: "관심을 '잡아끈다'는 강한 표현이지만, 주목을 받는 것보다는 적극적인 행위를 더 시사합니다." },
      { answer: "earned", reason: "노력을 통해 얻었다는 뉘앙스를 주지만, 자연스러운 관심을 의미하는 단어는 아닙니다." },
    ],
    difficulty: 3,
  },

  // 문제 12
  {
    id: 12,
    english: "You ___ better check the information before submitting it.",
    korean: "제출하기 전에 정보를 확인하는 것이 좋겠습니다.",
    correctAnswers: ["had"],
    partialAnswers: [
      { answer: "should", reason: "권장사항을 나타내지만, 'had better'의 경고 또는 강한 권고보다는 약합니다." },
      { answer: "would", reason: "가정적인 상황에 사용되며, 이 문맥에서 권고의 의미를 직접적으로 전달하지는 않습니다." },
      { answer: "must", reason: "필수적인 조치를 나타내지만, 여기서는 'had better'처럼 강한 권고의 느낌이 덜합니다." },
    ],
    difficulty: 4,
  },

  // 문제 13
  {
    id: 13,
    english: "His performance ___ greatly improved over the last year.",
    korean: "그의 성능은 지난 해에 크게 향상되었습니다.",
    correctAnswers: ["has"],
    partialAnswers: [
      { answer: "was", reason: "과거 시제이지만, 성능의 지속적인 개선을 나타내는 'has improved'와는 맥락이 다릅니다." },
      { answer: "had", reason: "과거완료 시제로, 특정 과거 시점 이전의 개선을 나타내지만, 여기서는 현재 진행형의 의미와 더 부합합니다." },
      { answer: "is", reason: "현재 시제이지만, 지속적인 개선을 나타내는 'has improved'의 완료형과는 맞지 않습니다." },
    ],
    difficulty: 2,
  },

  // 문제 14
  {
    id: 14,
    english: "I can't believe she ___ the entire cake by herself.",
    korean: "그녀가 혼자서 그 전체 케이크를 먹었다는 것이 믿기지 않습니다.",
    correctAnswers: ["ate", "devoured"],
    partialAnswers: [
      { answer: "consumed", reason: "먹었다는 넓은 의미를 가지지만, 여기서는 'ate'나 'devoured'의 구체성에 미치지 못합니다." },
      { answer: "finished", reason: "완전히 먹어치웠다는 의미이지만, 식사의 행위 자체보다 결과에 초점을 맞춥니다." },
      { answer: "enjoyed", reason: "즐겼다는 의미로, 실제로 먹었다는 행위보다는 그 경험에 대한 만족을 나타냅니다." },
    ],
    difficulty: 2,
  },

  // 문제 15
  {
    id: 15,
    english: "The company ___ to expand its operations into Asia next year.",
    korean: "그 회사는 내년에 아시아로 운영을 확장할 계획입니다.",
    correctAnswers: ["plans", "intends"],
    partialAnswers: [
      { answer: "aims", reason: "목표를 설정한다는 의미이지만, 'plans'나 'intends'의 구체적인 계획 수립보다는 덜 명확합니다." },
      { answer: "hopes", reason: "희망한다는 더 일반적인 의미로, 구체적인 계획보다는 바람에 가깝습니다." },
      { answer: "wishes", reason: "'wishes'는 간절히 바라는 것을 의미하지만, 실제 계획의 수립과 실행을 나타내지는 않습니다." },
    ],
    difficulty: 3,
  },

  // 문제 16
  {
    id: 16,
    english: "It ___ raining before we reached home.",
    korean: "우리가 집에 도착하기 전에 비가 오기 시작했습니다.",
    correctAnswers: ["started", "began"],
    partialAnswers: [
      { answer: "was", reason: "비가 오고 있었다는 상태를 나타내지만, 시작 시점을 구체적으로 표현하지는 않습니다." },
      { answer: "kept", reason: "계속되었다는 의미를 가지지만, 시작을 직접적으로 나타내지 않습니다." },
      { answer: "poured", reason: "강하게 내리기 시작했다는 의미로 해석될 수 있으나, 비의 시작을 나타내는 데는 덜 명확합니다." },
    ],
    difficulty: 2,
  },

  // 문제 17
  {
    id: 17,
    english: "The children ___ excited to see the clown at the party.",
    korean: "아이들은 파티에서 광대를 보고 신나했습니다.",
    correctAnswers: ["were", "became"],
    partialAnswers: [
      { answer: "felt", reason: "감정을 느꼈다는 것을 나타내지만, 상태의 변화를 명확하게 표현하는 단어는 아닙니다." },
      { answer: "appeared", reason: "외적으로 표현되었다는 의미로 해석될 수 있지만, 내부적인 감정 변화를 직접적으로는 나타내지 않습니다." },
      { answer: "looked", reason: "관찰자의 관점에서 아이들의 상태를 묘사하지만, 실제로 아이들이 느끼는 감정 변화와는 거리가 있습니다." },
    ],
    difficulty: 1,
  },

  // 문제 18
  {
    id: 18,
    english: "This soup needs ___ salt.",
    korean: "이 스프에는 소금이 더 필요합니다.",
    correctAnswers: ["more"],
    partialAnswers: [
      { answer: "extra", reason: "추가적인 것을 나타내지만 'more'에 비해 사용 빈도가 낮습니다." },
      { answer: "additional", reason: "더 필요하다는 것을 나타내지만, 일반적으로 'more'라는 표현이 더 자연스럽습니다." },
      { answer: "some", reason: "일부를 의미하지만, 정확한 양을 나타내는 데에는 'more'가 더 적절합니다." },
    ],
    difficulty: 1,
  },

  // 문제 19
  {
    id: 19,
    english: "They ___ surprised by the sudden change of plans.",
    korean: "그들은 갑작스러운 계획 변경에 놀랐습니다.",
    correctAnswers: ["were", "seemed"],
    partialAnswers: [
      { answer: "looked", reason: "외적인 모습으로 놀란 것처럼 보일 수 있지만, 실제 놀람의 감정을 직접적으로 나타내지는 않습니다." },
      { answer: "felt", reason: "놀람을 느꼈다는 내면적인 감정을 나타내지만, 외부에서 관찰될 수 있는 상태는 아닙니다." },
      { answer: "became", reason: "상태의 변화를 나타내지만, 'surprised'라는 구체적인 감정 상태를 직접적으로 표현하는 데는 사용되지 않습니다." },
    ],
    difficulty: 2,
  },

  // 문제 20
  {
    id: 20,
    english: "She ___ her best to finish the task on time.",
    korean: "그녀는 시간 내에 과제를 마치기 위해 최선을 다했습니다.",
    correctAnswers: ["did", "gave"],
    partialAnswers: [
      { answer: "made", reason: "노력을 '만든다'는 표현은 이 문맥에서 일반적이지 않습니다." },
      { answer: "tried", reason: "노력했다는 의미로 적절할 수 있으나, 'did her best'의 완성도를 완벽히 나타내지는 않습니다." },
      { answer: "attempted", reason: "시도했다는 의미로 'tried'와 유사하지만, 최선을 다했다는 'did her best'만큼의 노력을 표현하지는 않습니다." },
    ],
    difficulty: 2,
  },

  // 문제 21
  {
    id: 21,
    english: "To stay healthy, he ___ exercise regularly.",
    korean: "건강을 유지하기 위해, 그는 정기적으로 운동해야 합니다.",
    correctAnswers: ["must", "needs to"],
    partialAnswers: [
      { answer: "should", reason: "권장되지만, 'must'나 'needs to'만큼 강한 필요성을 표현하지 않습니다." },
      { answer: "has to", reason: "필수적인 요소를 나타내지만, 이 맥락에서는 'needs to'와 거의 유사합니다." },
      { answer: "could", reason: "가능성을 나타내지만, 필수적인 행위를 지시하는 데에는 적합하지 않습니다." },
    ],
    difficulty: 2,
  },

  // 문제 22
  {
    id: 22,
    english: "She ___ many challenges to achieve her goals.",
    korean: "그녀는 자신의 목표를 달성하기 위해 많은 도전에 직면했습니다.",
    correctAnswers: ["faced", "overcame"],
    partialAnswers: [
      { answer: "encountered", reason: "도전을 만났다는 의미이지만, 'overcame'처럼 극복했다는 강한 뉘앙스는 없습니다." },
      { answer: "met", reason: "만났다는 의미로 사용될 수 있지만, 도전을 극복했다는 의미를 직접적으로 전달하지는 않습니다." },
      { answer: "saw", reason: "경험했다는 의미이지만, 도전에 적극적으로 대처했다는 느낌을 주지 않습니다." },
    ],
    difficulty: 3,
  },

  // 문제 23
  {
    id: 23,
    english: "The room was ___ with laughter after the joke was told.",
    korean: "농담을 한 후에 방은 웃음으로 가득 찼습니다.",
    correctAnswers: ["filled", "brimming"],
    partialAnswers: [
      { answer: "echoing", reason: "웃음이 울려 퍼졌다는 의미이지만, 'filled'나 'brimming'처럼 가득 찼다는 묘사는 아닙니다." },
      { answer: "resounding", reason: "큰 소리로 울려 퍼진다는 의미이지만, 내용을 가득 채웠다는 직접적인 묘사는 아닙니다." },
      { answer: "loud", reason: "소리가 크다는 표현이지만, 웃음으로 가득 찼다는 느낌을 직접적으로 전달하지는 않습니다." },
    ],
    difficulty: 2,
  },

  // 문제 24
  {
    id: 24,
    english: "After the long journey, they ___ at their destination just before sunset.",
    korean: "장거리 여행 후, 그들은 해질 무렵에 목적지에 도착했습니다.",
    correctAnswers: ["arrived", "reached"],
    partialAnswers: [
      { answer: "got", reason: "일상적으로 사용되지만, 'arrived'나 'reached'처럼 공식적인 도착을 나타내는 데에는 적합하지 않습니다." },
      { answer: "landed", reason: "비행기 여행에 주로 사용되며, 일반적인 여행의 도착을 나타내는 데는 한정적입니다." },
      { answer: "entered", reason: "어떤 장소에 들어갔다는 의미이지만, 목적지에 '도착했다'는 느낌을 주는 데는 덜 구체적입니다." },
    ],
    difficulty: 2,
  },

  // 문제 25
  {
    id: 25,
    english: "The artist ___ his inspiration from nature.",
    korean: "그 예술가는 자연에서 영감을 얻습니다.",
    correctAnswers: ["draws", "derives"],
    partialAnswers: [
      { answer: "gains", reason: "얻는다는 의미이지만, 영감을 '끌어당긴다'는 느낌을 주는 'draws'나 'derives'만큼 직접적이지 않습니다." },
      { answer: "receives", reason: "받는다는 일반적인 의미이지만, 영감을 적극적으로 찾아가는 과정을 나타내지는 않습니다." },
      { answer: "extracts", reason: "추출한다는 의미이지만, 영감을 얻는 과정에서는 보통 사용되지 않는 표현입니다." },
    ],
    difficulty: 3,
  },

  {
    id: 26,
    english: "Everyone was ___ by the magician's trick.",
    korean: "모두가 마술사의 마술에 매료되었습니다.",
    correctAnswers: ["amazed", "astonished"],
    partialAnswers: [
      { answer: "surprised", reason: "‘surprised’는 놀란 상태를 나타내지만, ‘amazed’나 ‘astonished’는 강한 놀라움을 더 잘 전달합니다." },
      { answer: "impressed", reason: "‘impressed’는 인상 깊었다는 의미를 가지지만, 마술사의 트릭에 대한 놀라움의 정도를 ‘amazed’나 ‘astonished’가 더 강하게 표현합니다." },
    ],
    difficulty: 2,
  },
  {
    id: 27,
    english: "Only after the verdict was announced, ___ the defendant start to show any emotion.",
    korean: "판결이 발표된 후에야 피고인이 감정을 드러내기 시작했습니다.",
    correctAnswers: ["did"],
    partialAnswers: [
      { answer: "has", reason: "‘has’는 현재완료를 나타내지만, 이 문장에서는 과거의 특정 사건에 대한 반전 구조를 나타내기 위해 ‘did’가 필요합니다." },
      { answer: "was", reason: "‘was’는 'to be' 동사의 과거형이지만, 이 구조에서는 도우미 동사 ‘did’를 사용하여 강조 구문을 만듭니다." },
    ],
    difficulty: 3,
  },
  {
    id: 28,
    english: "She ___ her fear and spoke in front of the large audience.",
    korean: "그녀는 자신의 두려움을 극복하고 대규모 관객 앞에서 말했습니다.",
    correctAnswers: ["overcame", "conquered"],
    partialAnswers: [
      { answer: "fought", reason: "‘fought’는 두려움과 싸웠다는 의미이지만, ‘overcame’나 ‘conquered’가 두려움을 극복했다는 의미를 더 잘 전달합니다." },
      { answer: "faced", reason: "‘faced’는 직면했다는 의미로, 두려움을 극복하는 과정의 시작을 나타낼 수 있으나, 완전히 극복했다는 ‘overcame’나 ‘conquered’보다는 약합니다." },
    ],
    difficulty: 3,
  },
  {
    id: 29,
    english: "The lecture was ___ that I could hardly stay awake.",
    korean: "강의가 너무 지루해서 거의 깨어 있을 수 없었습니다.",
    correctAnswers: ["so boring", "so tedious"],
    partialAnswers: [{ answer: "very long", reason: "‘very long’은 강의의 길이를 나타내지만, 지루함의 정도를 ‘so boring’이나 ‘so tedious’가 더 잘 표현합니다." }],
    difficulty: 1,
  },
  {
    id: 30,
    english: "The novel ends with a ___ twist that surprises everyone.",
    korean: "소설은 모두를 놀라게 하는 예상치 못한 반전으로 끝납니다.",
    correctAnswers: ["shocking", "unexpected"],
    partialAnswers: [
      { answer: "strange", reason: "‘strange’는 이상하다는 의미이지만, 반전의 충격이나 예상치 못함을 ‘shocking’이나 ‘unexpected’가 더 강하게 전달합니다." },
      { answer: "sudden", reason: "‘sudden’은 갑작스럽다는 의미이지만, 이 문맥에서는 ‘unexpected’가 더욱 적합합니다." },
    ],
    difficulty: 2,
  },
];

// 문제를 무작위로 섞고 앞에서부터 10개를 선택하는 함수
export const getRandomQuizzes = (num = 10) => {
  const shuffled = quizzes.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};
