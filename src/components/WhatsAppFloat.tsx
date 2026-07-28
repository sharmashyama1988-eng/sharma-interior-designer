'use client';

import { MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '@/data/furnitureData';

export default function WhatsAppFloat() {
  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-6 right-6 z-50">
      <a
        href={getWhatsAppLink("Hello Sharma Interior Designer, I would like to inquire about your classical furniture designs and interior services.")}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-white/80"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-5 h-5 fill-black" />
        <span className="hidden sm:inline text-xs uppercase tracking-wider font-extrabold">
          Inquire on WhatsApp
        </span>
      </a>
    </aside>
  );
}
