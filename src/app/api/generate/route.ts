import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { input } = await req.json();

    if (!input || input.trim().length === 0) {
      return NextResponse.json(
        { error: "Input is required." },
        { status: 400 }
      );
    }

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: `
Rewrite the following resume or project bullet to sound more professional, concise, and recruiter-friendly.
Keep it truthful. Do not invent metrics.

Text:
${input}
      `,
    });

    return NextResponse.json({
      result: response.output_text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to generate response." },
      { status: 500 }
    );
  }
}