import { ChatOpenAI } from "@langchain/openai";
import { AgentExecutor, createOpenAIFunctionsAgent } from "langchain/agents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { AgentFinish, AgentAction } from "@langchain/core/agents";
import { BaseMessageChunk } from "@langchain/core/messages";
import { SearchApi } from "@langchain/community/tools/searchapi";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
import { pull } from "langchain/hub";

export async function GET(req: Request) {
  // const model = new ChatGoogleGenerativeAI({
  //     apiKey: " AIzaSyAHAHgWkZJmzBv8ug2wlTIqPKGUGG7Xm0g",
  //     modelName: "gemini-pro",
  //     maxOutputTokens: 2048,
  //     safetySettings: [
  //       {
  //         category: HarmCategory.HARM_CATEGORY_HARASSMENT,
  //         threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  //       },
  //     ],
  //   });

  //   const model = new ChatOpenAI({
  //     openAIApiKey: "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",

  //     temperature: 0,
  //   });

  //   const tools = [
  //     new SearchApi("cTz9HjezDGnfKSRoYrCP9BhL", {
  //         "q": "india news today",
  //   "location": "New York,United States",

  //       engine: "google_news",

  //     }),
  //   ];
  // //   const prefix = ChatPromptTemplate.fromMessages(

  // //     ["human", "{input}"]);

  // const prefix = ChatPromptTemplate.fromMessages([
  //     [
  //       "ai",
  //       "Answer the following questions as best you can. In your final answer, use a bulleted list markdown format.",
  //     ],
  //     ["human", "{input}"],
  //   ]);

  //   // Replace this with your actual output parser.
  //   const customOutputParser = (
  //     input: BaseMessageChunk
  //   ): AgentAction | AgentFinish => ({
  //     log: "test",
  //     returnValues: {
  //       output: input,
  //     },
  //   });
  //   // Replace this placeholder agent with your actual implementation.
  //   const agent = RunnableSequence.from([prefix, model, customOutputParser]);
  //   const executor = AgentExecutor.fromAgentAndTools({
  //     agent,
  //     tools,
  //   });

  // //   const ress = await model.invoke([
  // //     [
  // //       "human",
  // //       "hello?",
  // //     ],
  // //   ]);

  //   const res = await executor.invoke({
  //     input: "india today news 2024?",
  //   });
  //  console.log('====================================');
  //  console.log(res);
  //  console.log('====================================');

  const tools = [
    new TavilySearchResults({
      apiKey: "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",
      maxResults: 1,
    }),
  ];

  // Get the prompt to use - you can modify this!
  // If you want to see the prompt in full, you can at:
  // https://smith.langchain.com/hub/hwchase17/openai-functions-agent
  const prompt = await pull<ChatPromptTemplate>(
    "hwchase17/openai-functions-agent",
  );

  const llms = new ChatOpenAI({
    openAIApiKey: "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",
    modelName: "gpt-3.5-turbo-1106",

    temperature: 0,
  });

  const llm = new ChatGoogleGenerativeAI({
    apiKey: " AIzaSyAHAHgWkZJmzBv8ug2wlTIqPKGUGG7Xm0g",
    modelName: "gemini-pro",
    maxOutputTokens: 2048,
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
      },
    ],
  });

  const agent = await createOpenAIFunctionsAgent({
    llm,
    tools,
    prompt,
  });

  const agentExecutor = new AgentExecutor({
    agent,
    tools,
  });

  const result = await agentExecutor.invoke({
    input: ` read this article: https://www.ndtv.com/india-news/border-forces-recover-china-made-drone-near-indo-pak-border-in-punjab-5037100,`,
  });

  console.log(result);

  return new Response(JSON.stringify({ result }));
}
