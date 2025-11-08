// app/page.tsx (Next.js 14+ con TypeScript y Tailwind)
// Página principal con diseño base + burbuja de chatbot integrada.

'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

export default function HomePage(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{
    id: number;
    from: 'user' | 'bot' | 'system';
    text: string;
  }[]>([{ id: 0, from: 'bot', text: 'Hello, ask me anything!' }]);
  const [input, setInput] = useState('');

  const suggested = [
    'Please do my staff planning with maximum 5, minimum 2 staff working in a shift',
    'Bring me the anomalies of this Location compared to last months',
    'Compare monthly On Time openings and closings for the last 6 months',
    'Give me the Mystery Shopper Score and show calculation',
  ];

  function toggleOpen() {
    setOpen((s) => !s);
  }

  function pushMessage(from: 'user' | 'bot' | 'system', text: string) {
    setMessages((m) => [...m, { id: Date.now(), from, text }]);
  }

  function send(text?: string) {
    const trimmed = (text ?? input).trim();
    if (!trimmed) return;
    pushMessage('user', trimmed);
    setInput('');

    pushMessage('system', 'Procesando...');
    setTimeout(() => {
      setMessages((prev) => prev.filter((m) => m.from !== 'system'));
      const reply = `Respuesta simulada para: \"${trimmed}\"`;
      pushMessage('bot', reply);
    }, 1000 + Math.random() * 1000);
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-md bg-gradient-to-r from-indigo-600 to-cyan-500 p-2 text-white font-bold">EDGE SIGNAL</div>
            <nav className="hidden md:flex gap-6 text-sm text-slate-600">
              <span className="hover:text-slate-900 cursor-pointer">Products</span>
              <span className="hover:text-slate-900 cursor-pointer">Enterprises</span>
              <span className="hover:text-slate-900 cursor-pointer">Resources</span>
              <span className="hover:text-slate-900 cursor-pointer">Company</span>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden md:inline-block rounded-md border px-3 py-1 text-sm">Log in</button>
            <button className="rounded-md bg-indigo-600 text-white px-4 py-1 text-sm shadow">Contact Us</button>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="text-sm font-semibold uppercase text-indigo-600">Testimonials</h2>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight">What others are saying...</h1>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Learn how to use Edge Signal to your advantage. Short description that
          showcases why customers love the product.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="font-semibold">Fernando Pérez Suárez</p>
            <p className="mt-2 text-sm text-slate-600">
              "As a longstanding partner of Edge Signal, we have successfully
              worked together on multiple projects across various industries..."
            </p>
          </article>

          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="font-semibold">Marcus Pozzan</p>
            <p className="mt-2 text-sm text-slate-600">
              "Edge Signal makes building edge infrastructure seamless, scalable,
              and secure by design..."
            </p>
          </article>

          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="font-semibold">Cliente Ejemplo</p>
            <p className="mt-2 text-sm text-slate-600">
              "Great platform, easy to roll out new edge projects quickly."
            </p>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Edge Signal — All rights reserved.
        </div>
      </footer>

      {/* Chat bubble */}
      <div className="fixed bottom-6 right-6 z-50 flex items-end">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              className="mr-4 w-[360px] max-w-[calc(100vw-48px)] md:w-[380px] bg-white rounded-2xl shadow-2xl border"
            >
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                  <MessageSquare size={18} />
                  <div className="font-semibold">Edgar</div>
                </div>
                <button
                  aria-label="close chat"
                  onClick={toggleOpen}
                  className="p-2 rounded-md hover:bg-slate-100"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
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
              </div>

              <div className="p-3 border-t">
                <div className="mb-2 text-xs text-slate-500">Preguntas sugeridas</div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {suggested.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
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
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') send();
                    }}
                    placeholder="Type your message..."
                    className="flex-1 rounded-full border px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
                    aria-label="Type your message"
                  />
                  <button
                    onClick={() => send()}
                    aria-label="Send message"
                    className="rounded-full bg-indigo-600 p-3 text-white shadow"
                  >
                    <Send size={16} />
                  </button>
                </div>
                <div className="mt-2 text-[11px] text-slate-400">
                  AI-generated content may be inaccurate. Terms and Conditions.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={toggleOpen}
          aria-expanded={open}
          aria-label={open ? 'Cerrar chat' : 'Abrir chat'}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 p-3 shadow-2xl ring-4 ring-white"
        >
          {!open ? (
            <MessageSquare size={22} className="text-white" />
          ) : (
            <X size={20} className="text-white" />
          )}
        </button>
      </div>
    </main>
  );
}
