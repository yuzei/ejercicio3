'use client';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBubble from './components/ChatBubble';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      <Header />

      {/* Contenido central que empuja el footer hacia abajo */}
      <section className="flex-grow mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="text-sm font-semibold uppercase text-indigo-600">Testimonials</h2>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight">
          What others are saying...
        </h1>
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

      <Footer />
      <ChatBubble />
    </main>
  );
}