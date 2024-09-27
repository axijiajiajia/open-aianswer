import { NextResponse } from 'next/server';

const API_KEY = process.env.OPENROUTER_API_KEY;

export async function POST(request: Request) {
  console.log('API_KEY:', API_KEY ? 'Set' : 'Not set');
  if (!API_KEY) {
    console.error('OPENROUTER_API_KEY is not set');
    return NextResponse.json({ error: 'API key is not configured' }, { status: 500 });
  }

  try {
    const { question } = await request.json();
    console.log('Received question:', question);
    
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "meta-llama/llama-3.2-11b-vision-instruct",
        "messages": [{
          "role": "user",
          "content": question
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('OpenRouter API response:', data);
    const answer = data.choices[0].message.content;

    return NextResponse.json({ answer });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}