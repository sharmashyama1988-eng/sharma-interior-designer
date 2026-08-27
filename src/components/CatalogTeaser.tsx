'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, Armchair, ChefHat, Palette, Sliders, ExternalLink, ShieldCheck } from 'lucide-react';

const COLLECTIONS_OVERVIEW = [
  {
    id: 'furniture',
    title: 'Handcrafted Furniture Gallery',
    subtitle: 'Maharaja Sofas, Emperor Dining, 4-Poster Beds',
    count: '24+ Masterpieces',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    icon: Armchair,
    href: '/catloug#catalog',
    tag: 'Solid Burma Teak'
  },
  {
    id: 'kitchens',
    title: 'Modular Kitchens & Wardrobes',
    subtitle: 'Blum Soft-Close, Marine Ply, 24K Leafing',
    count: '100% Waterproof',
    image: '/kitchen1.jpg',
    icon: ChefHat,
    href: '/catloug#kitchen-almirah',
    tag: '10-Yr Warranty'
  },
  {
    id: 'mica',
    title: 'Mica Finishes & Door Patterns',
    subtitle: 'Statuario Marble, Smoked Teak, 3D Louvers',
    count: '50+ Swatches',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    icon: Palette,
    href: '/catloug#mica-selector',
    tag: 'Live Swatches'
  },
  {
    id: 'customizer',
    title: 'Live 3D Design Configurator',
    subtitle: 'Select timber polish, velvet & brass studs in real time',
    count: 'Instant Estimate',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop',
    icon: Sliders,
    href: '/catloug#customizer',
    tag: 'Interactive Tool'
  }
];

export default function CatalogTeaser() {
  return (
    <section id="collections-overview" className="py-24 bg-classical-bg relative overflow-hidden border-t border-classical-border/40">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-classical-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6 border-b border-classical-border/40 pb-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-classical-card border border-classical-gold/40 text-classical-gold text-xs uppercase tracking-[0.2em] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DIGITAL CATALOG &amp; COLLECTIONS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-classical-cream leading-tight">
              Curated Architectural <br className="hidden sm:inline" />
              <span className="gold-text-gradient italic">Furniture &amp; Interior Catalog</span>
            </h2>
            <p className="text-classical-creamMuted text-sm sm:text-base font-light leading-relaxed">
              Explore our complete digital catalog featuring solid Burma teakwood collections, modular kitchens, custom palace wardrobes, and luxury mica finishes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="/catloug"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-black bg-gold-gradient rounded shadow-gold-glow hover:scale-105 transition-all transform whitespace-nowrap"
            >
              <span>Open Complete Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Collection Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {COLLECTIONS_OVERVIEW.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href}
                className="group relative bg-classical-card rounded-xl border border-classical-border hover:border-classical-gold/80 overflow-hidden transition-all duration-300 hover:shadow-gold-glow flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-black">
                    <Image
                      src={item.image}
                      alt={`${item.title} - Sharma Interior Designer`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-classical-card via-black/30 to-transparent pointer-events-none" />

                    {/* Tag badge */}
                    <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider bg-black/80 backdrop-blur-md border border-classical-gold/60 text-classical-gold rounded">
                      {item.tag}
                    </span>

                    {/* Icon floating */}
                    <div className="absolute bottom-3 left-3 p-2 rounded-lg bg-classical-card/90 border border-classical-gold/40 text-classical-gold">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-classical-gold font-bold block">
                      {item.count}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-classical-cream group-hover:text-classical-gold transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-classical-creamMuted font-light line-clamp-2">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 pt-0">
                  <div className="flex items-center justify-between pt-3 border-t border-classical-border/40 text-xs font-semibold text-classical-gold group-hover:text-white transition-colors">
                    <span>View Category</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Feature highlight banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-classical-card/80 border border-classical-gold/30 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 shadow-classical-deep">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-xl bg-classical-mahogany border border-classical-gold/60 text-classical-gold flex-shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-classical-cream">
                Direct Catalog Access via <code className="text-classical-gold text-sm bg-black/50 px-2 py-0.5 rounded font-mono">/catloug</code>
              </h4>
              <p className="text-xs sm:text-sm text-classical-creamMuted font-light mt-1">
                Browse detailed pricing, wood specifications, dimensions, and instant WhatsApp quotation for any design.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <Link
              href="/catloug"
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-sm hover:opacity-95 transition-all"
            >
              <span>Explore /catloug</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
