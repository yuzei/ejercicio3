import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // 🔑 asegúrate de tener tu clave en .env.local -> OPENAI_API_KEY=sk-...
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Falta la API Key de OpenAI' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error OpenAI:', errorText);
      return NextResponse.json(
        { error: 'Error al generar respuesta desde OpenAI' },
        { status: response.status }
      );
    }

    const data = await response.json();

    // 💬 aseguramos que siempre devolvemos algo legible
    const reply =
      data?.choices?.[0]?.message?.content ||
      'No se pudo generar una respuesta.';

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Error general:', error);
    return NextResponse.json(
      { error: 'Ocurrió un error en el servidor.' },
      { status: 500 }
    );
  }
}
