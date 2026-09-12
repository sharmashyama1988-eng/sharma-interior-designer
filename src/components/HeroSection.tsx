'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageSquare, Phone, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { PHONE_NUMBER, getWhatsAppLink } from '@/data/furnitureData';

const HERO_SLIDES = [
  {
    image: '/maharaja_sofa.jpg',
    subtitle: 'BESPOKE ROYAL LIVING',
    title: 'Handcrafted Teakwood Elegance & Classical Interiors',
    desc: 'Transforming luxury residences with 28+ years of artisan woodcraft, royal carved sofas, and bespoke architectural interior design.'
  },
  {
    image: '/live_edge_dining.jpg',
    subtitle: 'THE EMPEROR DINING SUITE',
    title: 'Opulent Dining Halls Carved in Seasoned Timber',
    desc: 'Custom 8-seater dining suites with gold gilt highlights, solid live-edge table tops, and velvet upholstered high-back chairs.'
  },
  {
    image: '/canopy_poster_bed.jpg',
    subtitle: 'HERITAGE BEDROOM SUITES',
    title: 'Four-Poster Master Beds & Palace Wardrobes',
    desc: 'Sleep like royalty in solid teak four-poster beds accompanied by hand-engraved nightstands and walk-in dressing suites.'
  }
];

const QUICK_CHIPS = [
  { label: 'Royal Sofas', href: '/catloug#catalog' },
  { label: 'Emperor Dining', href: '/catloug#catalog' },
  { label: 'Canopy Beds', href: '/catloug#catalog' },
  { label: 'Modular Kitchens', href: '/catloug#kitchen-almirah' },
  { label: 'Cost Estimator', href: '/#estimator' },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section 
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-classical-bg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Carousel with Next.js Image Optimization */}
      {HERO_SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform-gpu will-change-transform ${
            idx === currentSlide 
              ? 'opacity-45 scale-105 transition-transform duration-[7000ms]' 
              : 'opacity-0 scale-100'
          }`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            priority={idx === 0}
            loading={idx === 0 ? 'eager' : 'lazy'}
            sizes="100vw"
            quality={85}
            className="object-cover object-center transform-gpu"
          />
        </div>
      ))}

      {/* Cinematic Overlays (Obsidian / Slate / Gradient) */}
      <div className="absolute inset-0 bg-gradient-to-r from-classical-bg via-classical-bg/90 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-classical-bg via-transparent to-[#0c0b0a]/70 z-10" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-classical-card/90 border border-classical-gold/50 backdrop-blur-md mb-6 shadow-gold-sm">
            <Sparkles className="w-4 h-4 text-classical-gold animate-pulse" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold text-classical-gold">
              {slide.subtitle}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-classical-cream leading-[1.12] mb-6">
            {slide.title.split('&')[0]} &{' '}
            <span className="gold-text-gradient block italic font-normal">
              {slide.title.split('&')[1] || ''}
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-lg text-classical-creamMuted font-light leading-relaxed mb-8 max-w-2xl">
            {slide.desc}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            {/* WhatsApp Inquire CTA */}
            <a
              href={getWhatsAppLink(`Hello Sharma Interior Designer, I would like to inquire about ${slide.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-glow hover:scale-105 transition-all transform"
            >
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 fill-black" />
              <span>Inquire on WhatsApp</span>
            </a>

            {/* Direct Call Link */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-classical-cream bg-classical-card/90 border border-classical-border hover:border-classical-gold rounded hover:bg-classical-card transition-all"
            >
              <Phone className="w-4 h-4 text-classical-gold" />
              <span>Call {PHONE_NUMBER}</span>
            </a>

            {/* Explore Catalog Link */}
            <Link
              href="/catloug"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-classical-gold hover:text-white transition-colors underline underline-offset-8 decoration-classical-gold/50 hover:decoration-classical-gold px-2"
            >
              <span>Explore Full Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Archetype Exploration Chips */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            <span className="text-[10px] uppercase tracking-widest text-classical-gold/70 font-semibold mr-1">
              Quick Jump:
            </span>
            {QUICK_CHIPS.map((chip) => (
              <Link
                key={chip.label}
                href={chip.href}
                className="px-2.5 py-1 text-[11px] rounded-full bg-classical-card/70 border border-classical-border/70 text-classical-creamMuted hover:border-classical-gold hover:text-classical-gold transition-colors backdrop-blur-sm"
              >
                {chip.label}
              </Link>
            ))}
          </div>

          {/* Key Stat Badges */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-classical-border/50 max-w-xl">
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-classical-gold">28+</span>
              <span className="text-[10px] sm:text-xs text-classical-creamMuted uppercase tracking-wider mt-1">Years Legacy</span>
            </div>
            <div className="flex flex-col border-l border-classical-border/50 pl-3 sm:pl-4">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-classical-gold">500+</span>
              <span className="text-[10px] sm:text-xs text-classical-creamMuted uppercase tracking-wider mt-1">Villas & Homes</span>
            </div>
            <div className="flex flex-col border-l border-classical-border/50 pl-3 sm:pl-4">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-classical-gold">100%</span>
              <span className="text-[10px] sm:text-xs text-classical-creamMuted uppercase tracking-wider mt-1">Burma Teak</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls & Indicators */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-30 flex items-center gap-3 bg-classical-card/85 backdrop-blur-md p-2 rounded-full border border-classical-gold/40 shadow-classical-deep">
        <button
          onClick={prevSlide}
          className="p-1.5 rounded-full text-classical-gold hover:bg-classical-mahogany transition-colors"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1.5 px-1">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'w-6 bg-classical-gold shadow-gold-sm' : 'w-2 bg-classical-border hover:bg-classical-gold/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-1.5 rounded-full text-classical-gold hover:bg-classical-mahogany transition-colors"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
