'use client';

import { useState } from 'react';
import { Palette, Layers, Check, Sparkles, MessageSquare, Phone, ShieldCheck, Eye } from 'lucide-react';
import { getWhatsAppLink, PHONE_NUMBER } from '@/data/furnitureData';

const MICA_DESIGNS = [
  {
    code: 'MC-8091',
    name: 'Statuario Gold Italian Marble Mica',
    category: 'gloss',
    thickness: '1.5mm High-Gloss',
    texture: 'Mirror Gloss Marble',
    colorHex: '#f5f0eb',
    previewImg: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    suitableFor: 'Modular Kitchen Shutters & TV Backdrops'
  },
  {
    code: 'MC-9042',
    name: 'Smoked Teakwood Natural Grain Veneer Mica',
    category: 'woodgrain',
    thickness: '1.2mm Natural Touch',
    texture: 'Deep Wood Grain',
    colorHex: '#3b2518',
    previewImg: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=800&auto=format&fit=crop',
    suitableFor: 'Main Entrance Doors & Almirah Shutters'
  },
  {
    code: 'MC-7015',
    name: 'Champagne Gold Metallic Fluted Louver Mica',
    category: 'metallic',
    thickness: '2.0mm 3D Fluted',
    texture: '3D Metallic Louver',
    colorHex: '#c59b27',
    previewImg: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
    suitableFor: 'Accent Wall Panelling & Sliding Wardrobes'
  },
  {
    code: 'MC-6028',
    name: 'Royal Charcoal Suede Matte Mica',
    category: 'matte',
    thickness: '1.5mm Super-Matt',
    texture: 'Anti-Fingerprint Matte',
    colorHex: '#22201e',
    previewImg: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop',
    suitableFor: 'Handleless Kitchen & Executive Desks'
  },
  {
    code: 'DR-101',
    name: 'Heritage Royal Burma Teak Double Carved Door Design',
    category: 'door_design',
    thickness: '3.0 Inch Solid Teak',
    texture: 'Hand-Carved Floral Arch',
    colorHex: '#4a2c1b',
    previewImg: '/door1.jpg',
    suitableFor: 'Main Villa Entrance Door'
  },
  {
    code: 'DR-202',
    name: 'Smoked Walnut Flush Door with Brass Inlay Mica Design',
    category: 'door_design',
    thickness: '38mm Marine Flush Core',
    texture: 'Veneer & Gold Brass Strip',
    colorHex: '#2b1b14',
    previewImg: '/door2.jpg',
    suitableFor: 'Master Bedroom & Office Interior Doors'
  },
  {
    code: 'MC-5088',
    name: 'Nero Marquina Black Gold Quartz Mica',
    category: 'gloss',
    thickness: '1.5mm High-Gloss',
    texture: 'Black Gold Vein Gloss',
    colorHex: '#121110',
    previewImg: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop',
    suitableFor: 'Bar Counters & Crockery Cabinets'
  },
  {
    code: 'MC-3040',
    name: 'Vintage Rosewood Grain Premium Mica',
    category: 'woodgrain',
    thickness: '1.5mm Suede Finish',
    texture: 'Rosewood Timber Texture',
    colorHex: '#4a1515',
    previewImg: '/almirah1.jpg',
    suitableFor: 'Palace Almirahs & Bed Backing'
  }
];

export default function MicaDesignSelector() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDesign, setSelectedDesign] = useState(MICA_DESIGNS[0]);

  const categories = [
    { id: 'all', label: 'All Designs' },
    { id: 'door_design', label: 'Door Designs' },
    { id: 'woodgrain', label: 'Teak & Walnut Woodgrains' },
    { id: 'gloss', label: 'Marble Gloss Mica' },
    { id: 'metallic', label: '3D Gold & Metallic' },
    { id: 'matte', label: 'Super-Matt Suede' },
  ];

  const filteredDesigns = MICA_DESIGNS.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <section id="mica-selector" className="py-24 bg-classical-bg relative border-t border-classical-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-classical-gold font-semibold">
            <Palette className="w-4 h-4 text-classical-gold" />
            <span>INTERACTIVE MICA & DOOR DESIGN STUDIO</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-classical-cream">
            Explore Mica Colors & <span className="gold-text-gradient italic">Door Designs</span>
          </h2>
          <p className="text-classical-creamMuted text-sm sm:text-base font-light">
            Select high-gloss marble laminates, natural woodgrain veneers, metallic 3D louvers, or hand-carved teak door patterns. Preview live and order samples directly on WhatsApp.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded text-xs uppercase tracking-wider font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-gold-gradient text-black shadow-gold-sm'
                  : 'bg-classical-card text-classical-creamMuted border border-classical-border hover:border-classical-gold/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Interactive Studio Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-classical-card p-6 sm:p-8 rounded-xl border border-classical-gold/40 shadow-classical-deep items-center">
          {/* Left Live Surface Previewer */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative h-72 sm:h-96 rounded-lg overflow-hidden border-2 border-classical-gold/60 bg-black group">
              <img
                src={selectedDesign.previewImg}
                alt={selectedDesign.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Code Badge */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded bg-gold-gradient text-black font-extrabold text-xs tracking-wider shadow-gold-sm">
                Design Code: {selectedDesign.code}
              </div>

              {/* Specs Badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase tracking-widest text-classical-gold font-bold block mb-1">
                  {selectedDesign.texture}
                </span>
                <h3 className="font-serif text-2xl font-bold text-classical-cream">
                  {selectedDesign.name}
                </h3>
              </div>
            </div>

            {/* Design Spec Highlights */}
            <div className="grid grid-cols-2 gap-3 text-xs bg-classical-bg p-4 rounded-lg border border-classical-border">
              <div>
                <span className="text-[10px] uppercase text-classical-gold block font-bold">Thickness / Build</span>
                <span className="text-classical-cream font-medium">{selectedDesign.thickness}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-classical-gold block font-bold">Recommended Application</span>
                <span className="text-classical-cream font-medium">{selectedDesign.suitableFor}</span>
              </div>
            </div>

            {/* WhatsApp Inquiry for Selected Code */}
            <a
              href={getWhatsAppLink(`Hello Sharma Interior Designer, I selected Mica / Door Design Code '${selectedDesign.code}' (${selectedDesign.name}). Please send me sample swatches and pricing.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-glow hover:opacity-95 transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>Inquire Swatch Code {selectedDesign.code} on WhatsApp</span>
            </a>
          </div>

          {/* Right Design Swatches Grid */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="font-serif text-lg font-bold text-classical-cream">
              Select a Swatch or Door Design Below:
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-h-[460px] overflow-y-auto pr-2 scrollbar-thin">
              {filteredDesigns.map((design) => {
                const isSelected = selectedDesign.code === design.code;
                return (
                  <button
                    key={design.code}
                    onClick={() => setSelectedDesign(design)}
                    className={`p-3 rounded-lg text-left border transition-all flex flex-col justify-between h-36 ${
                      isSelected
                        ? 'border-classical-gold bg-classical-mahogany/90 shadow-gold-glow'
                        : 'border-classical-border bg-classical-bg hover:border-classical-gold/50'
                    }`}
                  >
                    <div>
                      {/* Swatch Color Indicator */}
                      <div className="flex justify-between items-center mb-2">
                        <div
                          className="w-6 h-6 rounded-full border border-white/60 shadow-sm"
                          style={{ backgroundColor: design.colorHex }}
                        />
                        {isSelected && <Check className="w-4 h-4 text-classical-gold stroke-[3]" />}
                      </div>

                      <span className="text-[10px] font-extrabold text-classical-gold block">
                        {design.code}
                      </span>
                      <span className="font-serif text-xs font-bold text-classical-cream line-clamp-2 mt-0.5 leading-snug">
                        {design.name}
                      </span>
                    </div>

                    <span className="text-[9px] uppercase tracking-wider text-classical-creamMuted block">
                      {design.texture.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
