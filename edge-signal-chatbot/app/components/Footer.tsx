'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border-t bg-white shadow-inner"
    >
      <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-500 text-center">
        © {new Date().getFullYear()} Edge Signal — All rights reserved.
      </div>
    </motion.footer>
  );
}