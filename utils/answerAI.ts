// utils/answerAI.ts
import OpenAI from "openai";
import { assistants } from "@/utils/data/assistants";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_SECRET_KEY,
  dangerouslyAllowBrowser: true,
  defaultHeaders: { "OpenAI-Beta": "assistants=v2" }, // v2 API 버전 사용
});

export const getOpenAIFeedback = async (question: string, userAnswer: string, correctAnswers: string[]) => {
  const thread = await openai.beta.threads.create();
  const threadID = thread.id;

  const prompt = `
    다음은 영어 문제와 사용자의 오답입니다.
    문제: ${question}
    사용자 답변: ${userAnswer}
    정답: ${correctAnswers.join(", ")}
    
    이 답변이 왜 오답인지 한글로 간단히 설명해주세요.
    대신 정답에 대해서는 말하면 안 됩니다.
    간단한 힌트 정도는 괜찮습니다.
  `;

  await openai.beta.threads.messages.create(threadID, {
    role: "user",
    content: prompt,
  });

  const creationResponse = await openai.beta.threads.runs.create(threadID, {
    assistant_id: assistants.id,
  });

  const runID = creationResponse.id;
  let retrievalResponse = await openai.beta.threads.runs.retrieve(threadID, runID);
  console.log(retrievalResponse);

  while (retrievalResponse.status !== "completed") {
    if (["failed", "cancelled"].includes(retrievalResponse.status)) {
      throw new Error(`답변 생성 작업 ${retrievalResponse.status}`);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    retrievalResponse = await openai.beta.threads.runs.retrieve(threadID, runID);
  }

  const messages = await openai.beta.threads.messages.list(threadID);
  const assistantMessage = messages.data.find((message: any) => message.role === "assistant");

  if (assistantMessage) {
    const content = assistantMessage.content[0];
    if ("text" in content) {
      return content.text.value;
    } else {
      return "틀렸습니다. 다시 시도해보세요.";
    }
  } else {
    return "틀렸습니다. 다시 시도해보세요.";
  }
};
