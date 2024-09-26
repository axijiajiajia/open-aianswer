import { NextRequest, NextResponse } from 'next/server';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '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';

export async function POST(request: NextRequest) {
  const { question } = await request.json();

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "google/gemini-flash-8b-1.5-exp",
        "messages": [
          {"role": "user", "content": question},
        ],
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const answer = data.choices[0].message.content;

    return NextResponse.json({ answer });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to generate answer' }, { status: 500 });
  }
}