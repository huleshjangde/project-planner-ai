import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const { GoogleGenerativeAI } = require("@google/generative-ai");
export const genAI = new GoogleGenerativeAI(process.env.API_KEY);
