'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare, Phone } from 'lucide-react';
import { FAQS, getWhatsAppLink, PHONE_NUMBER } from '@/data/furnitureData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-classical-card/40 relative border-t border-classical-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-classical-gold font-semibold">
            <HelpCircle className="w-4 h-4 text-classical-gold" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-classical-cream">
            Got Questions? <span className="gold-text-gradient italic">We Have Answers</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-classical-card rounded-lg border border-classical-border overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base font-bold text-classical-cream hover:text-classical-gold transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-classical-gold transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 text-xs text-classical-creamMuted leading-relaxed border-t border-classical-border/40 pt-3 font-light animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center p-6 bg-classical-card rounded-lg border border-classical-gold/30">
          <p className="text-xs text-classical-creamMuted mb-3">Have a specific custom design question or need a physical site inspection?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={getWhatsAppLink("Hello Sharma Interior Designer, I have a question regarding custom furniture manufacturing.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-sm"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-classical-cream bg-classical-bg border border-classical-border rounded"
            >
              <Phone className="w-3.5 h-3.5 text-classical-gold" />
              <span>Call {PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
