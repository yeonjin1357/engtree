// utils/data/quiz.ts
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
    english: "The novel's protagonist struggled to find a balance between ambition and ___.",
    korean: "소설의 주인공은 야망과 [도덕성] 사이의 균형을 찾기 위해 고군분투했다.",
    correctAnswers: ["morality", "ethics", "integrity"],
    partialAnswers: [
      { answer: "conscience", reason: `양심은 개인의 도덕적 판단과 관련이 있지만, 넓은 맥락에서의 "도덕성"이나 "윤리"와는 조금 다른 개념입니다.` },
      { answer: "principles", reason: `원칙들은 도덕성의 기반이 되지만, 개인이나 상황에 따라 다양하게 해석될 수 있어 정확한 "도덕성"의 대체제로는 봐야 합니다.` },
      { answer: "values", reason: `"가치관"은 개인의 도덕성을 형성하는 데 중요하지만, 이는 행동 지침보다는 더 광범위하고 추상적인 개념입니다.` },
      { answer: "judgment", reason: `판단은 도덕적 결정을 내리는 과정에 관여하지만, "도덕성"이나 "윤리" 자체를 의미하는 것은 아닙니다.` },
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
  {
    id: 15,
    english: "It was a day of ___ and love",
    korean: "[기쁨]과 사랑으로 가득 찬 날이었다.",
    correctAnswers: ["joy"],
    partialAnswers: [
      { answer: "happiness", reason: `여기선 happiness(행복/기쁨)를 써도 뜻은 통하지만, 더 큰 만족감과 즐거움이 느껴지는 단어는 뭘까요?` },
      { answer: "delight", reason: `"좀 더 큰 기쁨과 환희인 delight는 뜻도 살짝 다르고, "어떤 날"을 묘사할 때 쓰기엔 어색해요.` },
      { answer: "fun", reason: `fun(재미/즐거움)말고, 만족감과 행복감을 느끼는 상태인 "기쁨"은 뭘까요?` },
    ],
    difficulty: 1,
  },
  {
    id: 16,
    english: "Whatever you decide, I'll ___ your choice",
    korean: "네가 어떤 결정을 내리든 난 네 선택을 [존중할]게.",
    correctAnswers: ["respect"],
    partialAnswers: [
      { answer: "accept", reason: `"받아들이다"는 뜻의 accept는 의미가 다를 수 있어요. "존중하더라도" 받아들이지는 않을 수 있으니까요.` },
      { answer: "admire", reason: `admire는 훌륭함을 존경한다는 뜻이어서 빈칸에 들어가기 적절치 않습니다.` },
    ],
    difficulty: 1,
  },
  {
    id: 17,
    english: "She respects your ___",
    korean: "그녀는 너의 [의견]을 존중해 줘.",
    correctAnswers: ["opinion"],
    partialAnswers: [
      { answer: "idea", reason: `idea는 하나의 생각이나 아이디어를 말하는 것 같아서 살짝 어색해요.` },
      { answer: "take", reason: `"의견"을 뜻하는 속어인 take도 괜찮지만, 격식 있는 표현인 "respect"와 더 잘 어울리는 단어는 뭘까요?` },
      { answer: "decision", reason: `decision(결정) 말고, "의견"은 어떻게 표현할까요?` },
      { answer: "thought", reason: `thought는 "생각"이에요. "의견"은 뭘까요?` },
      { answer: "choice", reason: `choice(선택/선택하는 행위) 말고, "의견/견해"는 어떻게 표현할까요?` },
    ],
    difficulty: 1,
  },
  {
    id: 18,
    english: "The documentary provides a comprehensive ___ into the effects of climate change.",
    korean: "그 다큐멘터리는 기후 변화의 영향에 대한 종합적인 [통찰]을 제공해.",
    correctAnswers: ["insight"],
    partialAnswers: [
      { answer: "overview", reason: `overview는 전반적인 개요나 개관을 의미해요. 하지만 깊이 있는 "통찰"을 나타내기에는 조금 얕을 수 있어요.` },
      { answer: "look", reason: `"look"은 보다 일반적인 검토나 봄을 의미하지만, "통찰"과 같은 깊은 이해나 분석을 전달하는 데는 충분히 구체적이지 않습니다.` },
      { answer: "analysis", reason: `analysis는 분석을 뜻하지만, 개인적인 깊은 이해보다는 더 일반적이고 기술적인 연구나 조사에 가까운 의미를 가지고 있어요.` },
      { answer: "examination", reason: `"examination"은 조사나 검토를 의미하지만, "통찰"이 주는 깊은 이해나 통찰력의 뉘앙스와는 약간 다릅니다.` },
    ],
    difficulty: 5,
  },
  {
    id: 19,
    english: "To fully understand the poem, one must analyze its ___ imagery.",
    korean: "시를 완전히 이해하기 위해서는 그것의 [상징적인] 이미지를 분석해야 해.",
    correctAnswers: ["symbolic", "metaphorical"],
    partialAnswers: [
      { answer: "literal", reason: `"literal"은 문자 그대로의, 혹은 실제의 의미를 나타내며, "상징적인"이나 "비유적인"의 반대 개념입니다.` },
      { answer: "visual", reason: `"visual"은 보이는, 시각적인을 의미하지만, 여기서 필요한 것은 이미지의 심오한 또는 비유적 의미입니다.` },
      { answer: "figurative", reason: `"figurative"는 비유적인을 의미하며 정답에 가까우나, "상징적인"이라는 뜻과 더 잘 어울리는 표현이 있습니다.` },
      { answer: "descriptive", reason: `"descriptive"는 묘사적인을 의미하지만, 이는 시의 상징적 혹은 비유적 이미지를 분석하는 것과는 다른 차원의 해석을 제공합니다.` },
    ],
    difficulty: 4,
  },
  {
    id: 20,
    english: "He managed to ___ the crowd with his impressive speech.",
    korean: "그는 인상적인 연설로 군중을 [매료시켰다].",
    correctAnswers: ["captivate", "mesmerize", "engage"],
    partialAnswers: [
      { answer: "interest", reason: `이 단어는 관심을 끌 수는 있지만, 강한 매력이나 깊은 관심을 유발하는 것처럼 강한 느낌을 전달하지는 못합니다.` },
      { answer: "please", reason: `군중을 기쁘게 하긴 하지만, 여기서 요구하는 것처럼 그들의 주의를 완전히 사로잡는다는 의미는 아닙니다.` },
      { answer: "attract", reason: `이 단어는 군중의 관심을 끌 수 있지만, "매료시키다"의 강한 감정적 영향력을 완벽하게 포착하지는 못합니다.` },
      { answer: "amuse", reason: `즐겁게 하다는 의미이지만, 여기서는 군중을 깊이 있게 매료시키는 것에 비해 너무 가볍게 느껴질 수 있습니다.` },
    ],
    difficulty: 3,
  },
  {
    id: 21,
    english: "During the hike, they found a place to ___ by the river.",
    korean: "하이킹 도중에, 그들은 강가에서 [쉴] 수 있는 장소를 찾았어.",
    correctAnswers: ["rest", "relax"],
    partialAnswers: [
      { answer: "sit", reason: `이 단어는 앉는 행위를 의미하지만, 여기서는 휴식을 취하는 것보다 구체적인 행동을 나타냅니다.` },
      { answer: "stop", reason: `정지하는 것을 의미하지만, 휴식이나 이완의 느낌을 전달하기에는 충분히 구체적이지 않습니다.` },
      { answer: "pause", reason: `일시적으로 멈추는 것을 의미하지만, "쉬다"와 같은 의도적인 휴식의 느낌을 전달하지는 못합니다.` },
      { answer: "stay", reason: `머무르다는 의미이지만, 여기서 필요한 것처럼 휴식을 취한다는 구체적인 의미를 내포하고 있지 않습니다.` },
    ],
    difficulty: 2,
  },
  {
    id: 22,
    english: "Please turn off the lights when you ___ the room.",
    korean: "방을 [나갈 때] 불을 꺼주세요.",
    correctAnswers: ["leave", "exit"],
    partialAnswers: [
      { answer: "depart", reason: `depart는 보통 여행 출발 같은 큰 맥락에서 사용되며, 일상적인 '나가다'와는 조금 거리가 있어요.` },
      { answer: "vacate", reason: `vacate는 주로 공식적인 상황이나 건물, 집 등을 비우는 경우에 사용되며, 일상적인 방 나가기에는 다소 공식적인 표현입니다.` },
      { answer: "abandon", reason: `abandon은 완전히 버리거나 포기하는 의미로, 간단히 방을 나가는 행위와는 의미가 너무 강합니다.` },
    ],
    difficulty: 1,
  },
  {
    id: 23,
    english: "The detective could not ___ the mystery despite all the clues.",
    korean: "모든 단서에도 불구하고, 탐정은 그 미스터리를 [풀지 못했다].",
    correctAnswers: ["solve", "unravel", "crack"],
    partialAnswers: [
      { answer: "understand", reason: `이 단어는 일반적인 이해를 나타내지만, 복잡한 문제나 미스터리를 구체적으로 해결하는 데 필요한 행위와는 조금 거리가 있습니다.` },
      { answer: "explain", reason: `설명한다는 의미는 있지만, 여기서는 문제의 해결보다는 이해를 돕는 데 초점을 맞춥니다.` },
      { answer: "discover", reason: `발견한다는 의미는 있으나, 미스터리를 "풀다"라는 구체적인 해결 과정을 직접적으로 나타내지는 않습니다.` },
      { answer: "see", reason: `보다라는 의미로는 너무 추상적이며, 문제 해결의 구체적인 행동을 나타내지 못합니다.` },
    ],
    difficulty: 5,
  },
  {
    id: 24,
    english: "After the argument, they sought to ___ their friendship.",
    korean: "싸움 후에, 그들은 그들의 우정을 [회복하려고] 노력했다.",
    correctAnswers: ["rebuild", "restore", "mend", "recover"],
    partialAnswers: [
      { answer: "continue", reason: `계속하다는 의미이지만, 여기서는 우정이 손상된 후 다시 회복하는 과정에 초점을 맞춘 표현이 필요합니다.` },
      { answer: "keep", reason: `유지하다는 의미로는 적절하지만, "회복"이라는 느낌을 전달하기에는 구체성이 부족합니다.` },
      { answer: "fix", reason: `고치다는 의미로 사용될 수 있으나, 우정과 같은 추상적인 개념을 "회복"하는 데 사용하기에는 일반적으로 너무 구체적인 행위를 지칭합니다.` },
      { answer: "improve", reason: `개선하다는 의미이지만, 이는 기존의 상태를 좋게 만드는 것이지, 손상된 관계를 "회복"하는 정확한 느낌을 전달하지는 않습니다.` },
    ],
    difficulty: 4,
  },
  {
    id: 25,
    english: "The chef added a pinch of salt to enhance the ___ of the dish.",
    korean: "셰프는 요리의 [맛]을 높이기 위해 소금을 조금 추가했다.",
    correctAnswers: ["flavor", "taste"],
    partialAnswers: [
      { answer: "scent", reason: `이 단어는 냄새나 향을 나타내며, 직접적인 '맛'과는 다른 감각을 지칭합니다.` },
      { answer: "spice", reason: `매운맛이나 특정 향신료를 나타낼 수 있지만, 요리 전체의 '맛'을 표현하는 데에는 더 포괄적인 단어가 필요합니다.` },
      { answer: "texture", reason: `이 단어는 음식의 질감을 나타내지만, '맛'과는 구분되는 또 다른 요소입니다.` },
      { answer: "quality", reason: `질이나 특성을 나타내지만, 요리의 '맛'을 구체적으로 지칭하기에는 너무 광범위합니다.` },
    ],
    difficulty: 3,
  },
];

// 문제를 무작위로 섞고 앞에서부터 10개를 선택하는 함수
export const getRandomQuizzes = (num = 10) => {
  // localStorage에서 값을 가져오되, null일 경우 빈 배열로 처리
  let storedQuizzes = JSON.parse(localStorage.getItem("quizzes") || "[]");

  // 저장된 퀴즈가 없으면 새로 섞어 저장
  if (storedQuizzes.length === 0) {
    const shuffled = quizzes.sort(() => 0.5 - Math.random());
    storedQuizzes = shuffled.slice(0, num);
    localStorage.setItem("quizzes", JSON.stringify(storedQuizzes));
  }

  return storedQuizzes;
};
