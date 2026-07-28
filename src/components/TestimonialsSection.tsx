'use client';

import { Star, Quote, MessageSquare } from 'lucide-react';
import { TESTIMONIALS, getWhatsAppLink } from '@/data/furnitureData';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-classical-bg relative border-t border-classical-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-classical-gold font-semibold">
            <Quote className="w-4 h-4 text-classical-gold" />
            <span>CLIENT REVIEWS & CASE STUDIES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-classical-cream">
            Words of Praise from <span className="gold-text-gradient italic">Distinguished Clients</span>
          </h2>
          <p className="text-classical-creamMuted text-sm sm:text-base font-light">
            Discover why 500+ luxury villa owners and business executives trust Sharma Interior Designer for their homes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-classical-card p-8 rounded-xl border border-classical-border hover:border-classical-gold/60 transition-all duration-300 shadow-classical-deep flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Star Ratings */}
                <div className="flex items-center gap-1 text-classical-gold">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-classical-gold" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-classical-creamMuted leading-relaxed font-light italic">
                  &quot;{t.comment}&quot;
                </p>
              </div>

              <div className="pt-6 border-t border-classical-border/40 mt-6">
                <h4 className="font-serif font-bold text-base text-classical-cream">
                  {t.name}
                </h4>
                <span className="text-xs text-classical-gold block font-medium">
                  {t.role}
                </span>
                <span className="text-[10px] text-classical-creamMuted block mt-0.5">
                  Project: {t.project}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={getWhatsAppLink("Hello Sharma Interior Designer, I would like to inquire about starting a project for my home.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-glow hover:scale-105 transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-black" />
            <span>Join Our Satisfied Clients — Inquire Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
