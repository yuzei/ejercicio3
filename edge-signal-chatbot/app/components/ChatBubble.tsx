'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';
import { useChat } from './hooks/useChat';

export default function ChatBubble() {
  const { messages, sendMessage, loading } = useChat();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  //mantener el scroll en el último mensaje
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);
  const hasGreeted = useRef(false); 

  const suggested = [
    '¿Cuál es el clima hoy?',
    'Cuéntame un dato curioso',
    'Explica qué es Next.js',
    'Hazme un resumen del día',
  ];

  // Control apertura del chat
  function toggleOpen() {
    setOpen((prev) => {
      const newOpen = !prev;
      if (newOpen && !hasGreeted.current) {
        hasGreeted.current = true;
      }
      return newOpen;
    });
  }

  function handleSend(text?: string) {
    const msg = (text ?? input).trim();
    if (!msg) return;
    sendMessage(msg);
    setInput('');
  }

  //Hacer scroll automático al final cuando haya nuevos mensajes
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            className="mr-4 w-[360px] max-w-[calc(100vw-48px)] md:w-[380px] bg-white rounded-2xl shadow-2xl border"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <MessageSquare size={18} />
                <div className="font-semibold">🤖 Edgar AI</div>
              </div>
              <button
                aria-label="close chat"
                onClick={toggleOpen}
                className="p-2 rounded-md hover:bg-slate-100"
              >
                <X size={16} />
              </button>
            </div>

            {/* Mensajes */}
            <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${
                    m.from === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`inline-block max-w-[78%] px-3 py-2 rounded-lg text-sm ${
                      m.from === 'user'
                        ? 'bg-indigo-600 text-white'
                        : m.from === 'bot'
                        ? 'bg-slate-100 text-slate-900'
                        : 'bg-amber-100 text-slate-900'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="text-xs text-slate-400 text-center">
                  Generando respuesta...
                </div>
              )}

              {/*mantener el scroll abajo */}
              <div ref={endOfMessagesRef} />
            </div>

            {/* Input y sugerencias */}
            <div className="p-3 border-t">
              <div className="mb-2 text-xs text-slate-500">
                Preguntas sugeridas
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {suggested.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    className="whitespace-nowrap rounded-full border px-3 py-1 text-xs text-slate-700 hover:bg-slate-50"
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div className="mt-3 flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Escribe un mensaje..."
                  className="flex-1 rounded-full border px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
                />
                <button
                  onClick={() => handleSend()}
                  className="rounded-full bg-indigo-600 p-3 text-white shadow"
                >
                  <Send size={16} />
                </button>
              </div>

              <div className="mt-3 text-xs text-slate-500">
                ⚠️ El contenido generado por IA puede ser inexacto.
              </div>
              <div className=" ml-5 text-xs text-slate-500">
                Verifica la información en fuentes confiables.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante */}
      <button
        onClick={toggleOpen}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 p-3 shadow-2xl ring-4 ring-white"
      >
        {!open ? (
          <MessageSquare size={22} className="text-white" />
        ) : (
          <X size={20} className="text-white" />
        )}
      </button>
    </div>
  );
}
