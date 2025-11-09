'use client';
import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-md bg-gradient-to-r from-indigo-600 to-cyan-500 p-2 text-white font-bold">
            EDGE SIGNAL
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-slate-600">
            <span className="hover:text-slate-900 cursor-pointer">Products</span>
            <span className="hover:text-slate-900 cursor-pointer">Enterprises</span>
            <span className="hover:text-slate-900 cursor-pointer">Resources</span>
            <span className="hover:text-slate-900 cursor-pointer">Company</span>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-block rounded-md border px-3 py-1 text-sm">
            Log in
          </button>
          <button className="rounded-md bg-indigo-600 text-white px-4 py-1 text-sm shadow">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
