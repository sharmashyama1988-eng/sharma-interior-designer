'use client';

import { useState } from 'react';
import { Layers, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '@/data/furnitureData';

const MATERIALS = [
  {
    id: 'teak',
    name: 'Seasoned Burma Teakwood',
    type: 'Hardwood Timber',
    desc: 'Dense, natural oil-rich timber offering lifetime immunity to termites, moisture warping, and rot. Perfect for intricately hand-carved classical motifs.',
    image: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=800&auto=format&fit=crop',
    specs: ['Kiln-Dried 12% Moisture', 'Grade-A Natural Oils', '100 Year Structural Lifespan']
  },
  {
    id: 'sheesham',
    name: 'Solid Rosewood (Sheesham)',
    type: 'Hardwood Timber',
    desc: 'Renowned for its dark contrasting wood grains and deep reddish-brown warmth. Highly valued for four-poster beds and heavy executive writing desks.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop',
    specs: ['Deep Natural Grain', 'High Tensile Strength', 'Rich Lacquer Absorption']
  },
  {
    id: 'marble',
    name: 'Italian Carrara & Gold Marble',
    type: 'Natural Stone Inlay',
    desc: 'Polished white and gold-veined Italian marble tops for dining tables, sideboards, and luxury bathroom vanity units.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    specs: ['High-Gloss Mirror Finish', 'Sealed Anti-Stain Layer', 'Hand-Chamfered Edges']
  },
  {
    id: 'brass',
    name: 'Solid Antique Brass & Gold Leaf',
    type: 'Accent Detailing',
    desc: 'Pure brass hardware, hand-hammered studs, drawer pulls, and 24K gold leaf foil Gilding applied to carved crown pediments.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    specs: ['Hand-Hammered Texture', 'Anti-Tarnish Lacquer Coating', 'Genuine 24K Gold Leafing']
  }
];

export default function MaterialCraftsmanship() {
  const [activeMaterial, setActiveMaterial] = useState(MATERIALS[0]);

  return (
    <section id="materials" className="py-24 bg-classical-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-classical-gold font-semibold">
            <Layers className="w-4 h-4 text-classical-gold" />
            <span>TIMBER & MATERIAL LABORATORY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-classical-cream">
            Authentic <span className="gold-text-gradient italic">Materials & Woodcraft</span>
          </h2>
          <p className="text-classical-creamMuted text-sm sm:text-base font-light">
            We source only Grade-A seasoned timber and authentic Italian marble to guarantee structural longevity across generations.
          </p>
        </div>

        {/* Material Selection Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-classical-card p-6 sm:p-8 rounded-xl border border-classical-border shadow-classical-deep">
          {/* Tabs List */}
          <div className="lg:col-span-5 space-y-3">
            {MATERIALS.map((mat) => (
              <button
                key={mat.id}
                onClick={() => setActiveMaterial(mat)}
                className={`w-full p-4 rounded-lg text-left transition-all flex items-center justify-between border ${
                  activeMaterial.id === mat.id
                    ? 'border-classical-gold bg-classical-mahogany/90 text-classical-gold shadow-gold-sm'
                    : 'border-classical-border bg-classical-bg text-classical-creamMuted hover:border-classical-gold/40'
                }`}
              >
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-classical-gold block font-semibold">
                    {mat.type}
                  </span>
                  <span className="font-serif text-base font-bold text-classical-cream">
                    {mat.name}
                  </span>
                </div>
                <Sparkles className={`w-4 h-4 ${activeMaterial.id === mat.id ? 'text-classical-gold' : 'opacity-0'}`} />
              </button>
            ))}
          </div>

          {/* Active Material Showcase */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden border border-classical-gold/40">
              <img
                src={activeMaterial.image}
                alt={activeMaterial.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs uppercase tracking-widest text-classical-gold font-bold block mb-1">
                  {activeMaterial.type}
                </span>
                <h3 className="font-serif text-2xl font-bold text-classical-cream">
                  {activeMaterial.name}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-classical-creamMuted leading-relaxed font-light">
              {activeMaterial.desc}
            </p>

            {/* Material Specs Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {activeMaterial.specs.map((spec, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center gap-2 px-3 py-1.5 rounded bg-classical-bg border border-classical-gold/30 text-xs text-classical-gold font-medium"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            {/* Direct Inquiry CTA */}
            <div className="pt-4 border-t border-classical-border/50">
              <a
                href={getWhatsAppLink(`Hello Sharma Interior Designer, I want to learn more about your timber sourcing and material quality for '${activeMaterial.name}'.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-sm hover:opacity-95 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-black" />
                <span>Inquire Timber Samples on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
