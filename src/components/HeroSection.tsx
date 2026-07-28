'use client';

import { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { PHONE_NUMBER, getWhatsAppLink } from '@/data/furnitureData';

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop',
    subtitle: 'BESPOKE ROYAL LIVING',
    title: 'Handcrafted Teakwood Elegance & Classical Interiors',
    desc: 'Transforming luxury residences with 28+ years of artisan woodcraft, royal carved sofas, and bespoke architectural interior design.'
  },
  {
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1600&auto=format&fit=crop',
    subtitle: 'THE EMPEROR DINING SUITE',
    title: 'Opulent Dining Halls Carved in Seasoned Timber',
    desc: 'Custom 8-seater dining suites with gold gilt highlights, Italian marble table tops, and velvet upholstered high-back chairs.'
  },
  {
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
    subtitle: 'HERITAGE BEDROOM SUITES',
    title: 'Four-Poster Master Beds & Palace Wardrobes',
    desc: 'Sleep like royalty in solid Rosewood four-poster beds accompanied by hand-engraved nightstands and walk-in dressing suites.'
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-classical-bg">
      {/* Background Image Carousel with Warm Overlay */}
      {HERO_SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-85 scale-105 transition-transform duration-[7000ms]' : 'opacity-0 scale-100'
          }`}
          style={{
            backgroundImage: `url(${s.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Classical Radial & Gradient Overlays for Sunlight Luxury Look */}
      <div className="absolute inset-0 bg-gradient-to-r from-classical-bg via-classical-bg/85 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-classical-bg via-transparent to-white/40 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-classical-gold/60 shadow-md backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-classical-gold animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-classical-mahogany">
              {slide.subtitle}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-classical-mahogany leading-[1.15] mb-6">
            {slide.title.split('&')[0]} &{' '}
            <span className="gold-text-gradient block italic font-normal">
              {slide.title.split('&')[1] || ''}
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-classical-textMuted font-normal leading-relaxed mb-8 max-w-2xl">
            {slide.desc}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            {/* WhatsApp Inquire CTA */}
            <a
              href={getWhatsAppLink(`Hello Sharma Interior Designer, I would like to inquire about ${slide.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 text-xs font-extrabold uppercase tracking-wider text-white bg-classical-mahogany hover:bg-classical-mahoganyLight rounded shadow-gold-glow hover:scale-105 transition-all transform"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Inquire on WhatsApp</span>
            </a>

            {/* Direct Call Link */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-3 px-6 py-4 text-xs font-bold text-classical-mahogany bg-white border border-classical-border hover:border-classical-gold rounded hover:bg-classical-card shadow-sm transition-all"
            >
              <Phone className="w-4 h-4 text-classical-gold" />
              <span>Call {PHONE_NUMBER}</span>
            </a>

            {/* Explore Catalog Link */}
            <a
              href="#catalog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-classical-gold hover:text-classical-mahogany transition-colors underline underline-offset-8 decoration-classical-gold px-2"
            >
              <span>Explore Designs</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Key Stat Badges */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-classical-border max-w-xl">
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-classical-mahogany">28+</span>
              <span className="text-xs text-classical-textMuted font-bold uppercase tracking-wider mt-1">Years Legacy</span>
            </div>
            <div className="flex flex-col border-l border-classical-border pl-4">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-classical-mahogany">500+</span>
              <span className="text-xs text-classical-textMuted font-bold uppercase tracking-wider mt-1">Villas & Homes</span>
            </div>
            <div className="flex flex-col border-l border-classical-border pl-4">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-classical-mahogany">100%</span>
              <span className="text-xs text-classical-textMuted font-bold uppercase tracking-wider mt-1">Solid Burma Teak</span>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 right-8 z-30 flex items-center gap-3">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentSlide ? 'w-8 bg-classical-gold' : 'w-2 bg-classical-border'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
