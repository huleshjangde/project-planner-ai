const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
export async function POST(req: Request) {
  const body = await req.json();
  // console.log('====================================');
  // console.log(body);
  // console.log('====================================');
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(body.prompt);
  const response = await result.response;
  const text = response.text();
  return new Response(JSON.stringify({ result: text }));
}
