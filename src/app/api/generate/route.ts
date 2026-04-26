import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
  try {
    const { input, tone } = await req.json();

    if (typeof input !== "string" || input.trim().length === 0) {
      return NextResponse.json(
        { error: "Input is required." },
        { status: 400 }
      );
    }

    const toneInstructions: Record<string, string> = {
      professional:
        "Use a polished, professional tone that is clear and recruiter-friendly.",
      technical:
        "Use a technical tone that highlights tools, implementation details, and engineering impact.",
      concise:
        "Use a concise tone that keeps the rewrite short, direct, and easy to scan.",
    };

    const selectedTone =
      typeof tone === "string" && toneInstructions[tone]
        ? tone
        : "professional";

    const toneInstruction =
      toneInstructions[selectedTone] || toneInstructions.professional;

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenAI API key is not configured." },
        { status: 500 }
      );
    }

    const client = new OpenAI({
      apiKey,
    });

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: `
Rewrite the following resume or project bullet.
Tone: ${selectedTone}
${toneInstruction}
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
