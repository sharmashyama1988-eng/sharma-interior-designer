import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Armchair, ChefHat, Palette, Sliders, Home, MessageSquare, Phone, Compass } from 'lucide-react';
import FurnitureCatalog from '@/components/FurnitureCatalog';
import ModularKitchenAlmirah from '@/components/ModularKitchenAlmirah';
import MicaDesignSelector from '@/components/MicaDesignSelector';
import InteractiveCustomizer from '@/components/InteractiveCustomizer';
import { PHONE_NUMBER, getWhatsAppLink } from '@/data/furnitureData';

export const metadata: Metadata = {
  title: 'Complete Furniture & Interior Catalog | Sharma Interior Designers',
  description: 'Explore the full digital catalog of handcrafted Burma teakwood furniture, modular kitchens, custom almirahs, designer mica swatches, and 3D customizer by Principal Architect Satya Narayan Sharma.',
  alternates: {
    canonical: 'https://sharma-interior-designer.vercel.app/catloug',
  },
  openGraph: {
    title: 'Sharma Interior Designers - Complete Furniture & Architectural Catalog',
    description: 'Bespoke Burma teakwood furniture, palace almirahs, and modern modular kitchens by Satya Narayan Sharma.',
    url: 'https://sharma-interior-designer.vercel.app/catloug',
  },
};

export default function CatlougPage() {
  return (
    <div className="bg-classical-bg min-h-screen pt-24 pb-20">
      {/* Top Breadcrumb & Return Bar */}
      <div className="bg-classical-card/90 border-b border-classical-gold/30 sticky top-[68px] sm:top-[72px] z-40 backdrop-blur-xl shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-classical-gold hover:text-white bg-classical-bg px-4 py-2 rounded border border-classical-gold/50 hover:border-classical-gold transition-all group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>← Back to Main Website</span>
          </Link>

          {/* Quick Anchor Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <a
              href="#catalog"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-semibold uppercase tracking-wider text-classical-cream bg-classical-bg/80 border border-classical-border hover:border-classical-gold hover:text-classical-gold transition-all whitespace-nowrap"
            >
              <Armchair className="w-3.5 h-3.5 text-classical-gold" />
              <span>Furniture</span>
            </a>
            <a
              href="#kitchen-almirah"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-semibold uppercase tracking-wider text-classical-cream bg-classical-bg/80 border border-classical-border hover:border-classical-gold hover:text-classical-gold transition-all whitespace-nowrap"
            >
              <ChefHat className="w-3.5 h-3.5 text-classical-gold" />
              <span>Kitchen &amp; Almirah</span>
            </a>
            <a
              href="#mica-selector"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-semibold uppercase tracking-wider text-classical-cream bg-classical-bg/80 border border-classical-border hover:border-classical-gold hover:text-classical-gold transition-all whitespace-nowrap"
            >
              <Palette className="w-3.5 h-3.5 text-classical-gold" />
              <span>Mica &amp; Doors</span>
            </a>
            <a
              href="#customizer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-semibold uppercase tracking-wider text-classical-cream bg-classical-bg/80 border border-classical-border hover:border-classical-gold hover:text-classical-gold transition-all whitespace-nowrap"
            >
              <Sliders className="w-3.5 h-3.5 text-classical-gold" />
              <span>3D Customizer</span>
            </a>
          </div>
        </div>
      </div>

      {/* Catalog Hero Banner */}
      <section className="relative py-16 bg-gradient-to-b from-classical-card/90 via-classical-bg to-classical-bg border-b border-classical-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-classical-card border border-classical-gold/50 text-classical-gold text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-classical-gold" />
            <span>EXCLUSIVE ARCHITECTURAL CATALOG</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-classical-cream leading-tight mb-4">
            Sharma Fine Furniture &amp; <br />
            <span className="gold-text-gradient italic">Interior Architecture Catalog</span>
          </h1>
          <p className="text-classical-creamMuted text-sm sm:text-base font-light leading-relaxed mb-8">
            Curated catalogue of solid Burma teakwood suites, emperor dining tables, 4-poster beds, high-pressure mica laminates, modular kitchens, and custom wardrobe engineering.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={getWhatsAppLink('Hello Sharma Interior Designer, I am browsing your /catloug page and would like to receive the complete PDF catalog and pricing list.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-glow hover:scale-105 transition-all transform"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>Download PDF / Inquire on WhatsApp</span>
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-classical-cream bg-classical-card border border-classical-border hover:border-classical-gold rounded transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-classical-gold" />
              <span>Call +91 {PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Catalog Modules */}
      <div className="space-y-4">
        {/* Module 1: Furniture Catalog */}
        <div id="catalog">
          <FurnitureCatalog />
        </div>

        {/* Module 2: Modular Kitchens & Almirahs */}
        <div id="kitchen-almirah">
          <ModularKitchenAlmirah />
        </div>

        {/* Module 3: Mica & Door Designs */}
        <div id="mica-selector">
          <MicaDesignSelector />
        </div>

        {/* Module 4: 3D Customizer */}
        <div id="customizer">
          <InteractiveCustomizer />
        </div>
      </div>

      {/* Bottom Back-to-Main Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="p-8 sm:p-12 rounded-2xl bg-classical-card border border-classical-gold/50 shadow-classical-deep flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-classical-gold font-bold">
              <Compass className="w-4 h-4" />
              <span>TURNKEY VILLA ARCHITECTURE &amp; INTERIORS</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-classical-cream">
              Looking for Full Interior Architecture &amp; Execution?
            </h3>
            <p className="text-xs sm:text-sm text-classical-creamMuted font-light">
              Visit our main website to explore completed projects, client testimonials, 3D space planning, and our principal architect profile.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-glow hover:scale-105 transition-all transform"
            >
              <Home className="w-4 h-4" />
              <span>Return to Main Website</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
