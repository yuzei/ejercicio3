'use client';
import { useState } from 'react';

type Message = {
  id: number;
  from: 'user' | 'bot';
  text: string;
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, from: 'bot', text: '¡Hola! Soy Edgar, tu asistente virtual 😄 ¿En qué puedo ayudarte hoy?' },
  ]);
  const [loading, setLoading] = useState(false);

  async function sendMessage(text: string) {
    setMessages((prev) => [...prev, { id: Date.now(), from: 'user', text }]);
    setLoading(true);

    // Simulamos un retardo como si fuera una API real
    setTimeout(() => {
      const simulatedResponses = [
        `Interesante pregunta sobre "${text}". Déjame explicarte un poco.`,
        `Buena consulta 😄. Puedo decirte que "${text}" tiene varias interpretaciones.`,
        `Hmm... "${text}" parece importante. Aquí tienes una respuesta generada localmente.`,
        `Claro, respecto a "${text}", te puedo decir que todo depende del contexto.`,
      ];
      const randomResponse =
        simulatedResponses[Math.floor(Math.random() * simulatedResponses.length)];

      setMessages((prev) => [...prev, { id: Date.now(), from: 'bot', text: randomResponse }]);
      setLoading(false);
    }, 1000 + Math.random() * 1000);
  }

  return { messages, sendMessage, loading };
}