'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Palette, Layers, Check, Sparkles, MessageSquare, Phone, ShieldCheck, Eye, Download, Info } from 'lucide-react';
import { getWhatsAppLink, PHONE_NUMBER } from '@/data/furnitureData';

export interface MicaDesignItem {
  code: string;
  name: string;
  category: 'gloss' | 'woodgrain' | 'metallic' | 'matte' | 'inlay' | 'door_design';
  thickness: string;
  texture: string;
  colorHex: string;
  previewImg: string;
  suitableFor: string;
  description: string;
  features: string[];
}

const MICA_DESIGNS: MicaDesignItem[] = [
  // 1. Italian Marble & Gloss Micas
  {
    code: 'MC-8091',
    name: 'Statuario Gold Italian Marble Gloss Mica',
    category: 'gloss',
    thickness: '1.5mm High-Gloss Acrylic',
    texture: 'Mirror Gloss Veined Marble',
    colorHex: '#f5f0eb',
    previewImg: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    suitableFor: 'Modular Kitchen Shutters & TV Backdrops',
    description: 'Ultra-clear mirror high-gloss laminate with golden-grey Statuario marble veining. 100% boiling water resistant and scratch-shield coated.',
    features: ['Zero Scratch Shield', '99.9% High Gloss Index', 'Boiling Water Proof']
  },
  {
    code: 'MC-5088',
    name: 'Nero Marquina Black Gold Vein Quartz Mica',
    category: 'gloss',
    thickness: '1.5mm High-Gloss',
    texture: 'Black Gold Vein Mirror Gloss',
    colorHex: '#121110',
    previewImg: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200&auto=format&fit=crop',
    suitableFor: 'Bar Counters & Luxury Kitchen Islands',
    description: 'Deep obsidian black marble texture with delicate shimmering gold veins. Perfect for high-status luxury bar counters and island fascias.',
    features: ['Deep Obsidian Contrast', 'UV Color Fastness', 'Seamless Joint Look']
  },
  {
    code: 'MC-4012',
    name: 'Calacatta Borghini Bookmatched Feather Mica',
    category: 'gloss',
    thickness: '1.2mm Gloss Finish',
    texture: 'Bookmatched Natural Marble',
    colorHex: '#e8e4df',
    previewImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    suitableFor: 'Master Vanity Units & Dining Wall Accents',
    description: 'Symmetrical bookmatched marble grain pattern creating a continuous luxury centerpiece slab aesthetic on full-height walls.',
    features: ['Continuous Symmetry', 'Stain Resistance', 'Easy Wipe Clean']
  },

  // 2. Teak, Walnut & Rosewood Woodgrains
  {
    code: 'MC-9042',
    name: 'Smoked Burma Teak Natural Synchronized Grain Mica',
    category: 'woodgrain',
    thickness: '1.2mm Synchronized Pore',
    texture: 'Deep Embossed Timber Grain',
    colorHex: '#3b2518',
    previewImg: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1200&auto=format&fit=crop',
    suitableFor: 'Wardrobe Shutters & Study Room Panelling',
    description: 'Synchronized tactile wood grain finish matching the authentic texture of seasoned smoked Burma teakwood logs.',
    features: ['Synchronized Touch Pore', 'Termite Proof Marine Core', 'Fade Resistant']
  },
  {
    code: 'MC-3040',
    name: 'Vintage Royal Rosewood Suede Finish Mica',
    category: 'woodgrain',
    thickness: '1.5mm Natural Suede',
    texture: 'Deep Reddish-Brown Rosewood',
    colorHex: '#4a1515',
    previewImg: '/almirah1.jpg',
    suitableFor: 'Palace Almirahs & Classical Bed Backings',
    description: 'Rich royal rosewood timbre texture with deep chocolate-burgundy striations, designed to pair with hand-carved classical furniture.',
    features: ['High-Depth Color', 'Matte Suede Feel', 'Impact Resistant']
  },
  {
    code: 'MC-1055',
    name: 'Quarter-Cut Crown Walnut Architectural Veneer Mica',
    category: 'woodgrain',
    thickness: '1.2mm Natural Touch',
    texture: 'Linear Crown Walnut',
    colorHex: '#2e1c12',
    previewImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    suitableFor: 'Executive Desks & Modern Sliding Wardrobes',
    description: 'Straight-grain crown architectural walnut finish offering a serene, executive Scandinavian aesthetic.',
    features: ['Linear Symmetry', 'Resistant to Moisture', 'Eco-Certified Resin']
  },

  // 3. 3D Gold, Louver & Metallic
  {
    code: 'MC-7015',
    name: 'Champagne Gold Metallic 3D Fluted Louver Mica',
    category: 'metallic',
    thickness: '2.0mm 3D Fluted Profile',
    texture: 'Convex 3D Metallic Flute',
    colorHex: '#c59b27',
    previewImg: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    suitableFor: 'Accent TV Wall Panelling & Sliding Wardrobe Center Panels',
    description: 'Architectural 3D vertical louver flutes coated with genuine champagne gold metallic shimmer that reflects ambient warm lighting.',
    features: ['3D Shadow Depth', 'Metallic PVD Sheen', 'Acoustic Sound Dampening']
  },
  {
    code: 'MC-2099',
    name: 'Rose Gold Brushed Aluminum High-Pressure Mica',
    category: 'metallic',
    thickness: '1.5mm Anodized Metal Foil',
    texture: 'Linear Hairline Brushed Metal',
    colorHex: '#b76e79',
    previewImg: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1200&auto=format&fit=crop',
    suitableFor: 'Wardrobe Edge Profiles & Display Showcases',
    description: 'Genuine anodized aluminum brushed foil bonded to high-pressure phenolic backing for supreme edge impact resistance.',
    features: ['True Metallic Cool Touch', 'Anti-Tarnish Coating', 'Fire Retardant Class 1']
  },
  {
    code: 'MC-3310',
    name: 'Brushed Brass Horizon Wave 3D Textured Mica',
    category: 'metallic',
    thickness: '1.8mm Embossed Metal',
    texture: 'Horizontal Wave Brass',
    colorHex: '#d4af37',
    previewImg: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1200&auto=format&fit=crop',
    suitableFor: 'Foyer Entrance Backdrops & Bar Counters',
    description: 'Horizontal undulating wave pattern in rich brushed brass gold, providing dynamic light reflection throughout the day.',
    features: ['Dynamic Refraction', 'Heavy Duty Thickness', 'Luxury Statement']
  },

  // 4. Super-Matt Anti-Fingerprint Suede
  {
    code: 'MC-6028',
    name: 'Royal Charcoal Suede Anti-Fingerprint Super-Matt Mica',
    category: 'matte',
    thickness: '1.5mm Nanotech Matte',
    texture: 'Zero-Reflection Silk Touch',
    colorHex: '#22201e',
    previewImg: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1200&auto=format&fit=crop',
    suitableFor: 'Handleless Modular Kitchens & Executive Chambers',
    description: 'Nanotechnology super-matte surface with thermal micro-scratch self-healing ability and 100% anti-fingerprint resistance.',
    features: ['Anti-Fingerprint Nano Layer', 'Silky Warm Touch', 'Zero Glare Reflection']
  },
  {
    code: 'MC-8822',
    name: 'Industrial Concrete Oxide Raw Suede Mica',
    category: 'matte',
    thickness: '1.5mm Textured Matte',
    texture: 'Raw Cast Concrete Touch',
    colorHex: '#52504d',
    previewImg: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop',
    suitableFor: 'Loft Style Kitchens & Architectural Media Consoles',
    description: 'Raw mineral cement oxide texture delivering brutalist contemporary luxury with zero maintenance.',
    features: ['Mineral Oxide Texture', 'Heavy Abrasion Resistance', 'Waterproof']
  },

  // 5. Inlay & Decorative Specials
  {
    code: 'MC-7740',
    name: 'Mother of Pearl Floral Brass Inlay Luxury Mica',
    category: 'inlay',
    thickness: '2.0mm High-Pressure Inlay',
    texture: 'Opalescent Pearl & Polished Brass',
    colorHex: '#e6ded3',
    previewImg: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
    suitableFor: 'Pooja Mandir Units, Royal Buffets & Master Dressers',
    description: 'Handcrafted floral motifs with authentic opalescent iridescent shell inlays bordered by solid micro brass wires.',
    features: ['Authentic Pearl Luster', 'Handmade Artisan Finish', 'Royal Heirloom Class']
  },

  // 6. Royal Teak & Designer Door Patterns
  {
    code: 'DR-101',
    name: 'Imperial Burma Teak Royal Arch Hand-Carved Entrance Door',
    category: 'door_design',
    thickness: '3.0 Inch Solid Teakwood',
    texture: 'Hand-Carved Floral Relief',
    colorHex: '#4a2c1b',
    previewImg: '/door1.jpg',
    suitableFor: 'Main Villa Grand Entrance',
    description: 'Masterpiece 3-inch solid Burma teak main double door with deep baroque floral arch carving, brass studding, and mortise safe locks.',
    features: ['100% Solid Seasoned Teak', 'Anti-Sag Heavy Hinges', 'Lifetime Structural Warranty']
  },
  {
    code: 'DR-202',
    name: 'Smoked Walnut Flush Door with Vertical Brass Inlay',
    category: 'door_design',
    thickness: '38mm Solid Marine Flush Core',
    texture: 'Veneer with 10mm Solid Brass Strips',
    colorHex: '#2b1b14',
    previewImg: '/door2.jpg',
    suitableFor: 'Master Bedroom & Executive Office Doors',
    description: 'Architectural flush door clad in natural smoked walnut veneer, inlaid with solid brushed champagne gold T-profiles.',
    features: ['Acoustic Sound Insulation', 'Magnetic Silent Lock', 'Concealed 3D Hinges']
  },
  {
    code: 'DR-303',
    name: 'Regal Pivot Door with Fluted Tinted Glass & Teak Frame',
    category: 'door_design',
    thickness: '50mm Heavy Pivot Core',
    texture: 'Fluted Glass & Teakwood Stile',
    colorHex: '#352115',
    previewImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    suitableFor: 'Penthouse Foyer & Drawing Hall Partition',
    description: 'Floor-to-ceiling 360-degree rotating pivot door featuring fluted toughened safety glass and heavy-gauge hydraulic German pivot floor spring.',
    features: ['Hydraulic Pivot Motion', '100% Daylight Diffusion', 'Grand Architectural Scale']
  },
  {
    code: 'DR-404',
    name: 'Asymmetric CNC Grooved Teak Geometric Bedroom Door',
    category: 'door_design',
    thickness: '35mm Solid HDHMR Core',
    texture: 'CNC V-Groove Teak Veneer',
    colorHex: '#3f281b',
    previewImg: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1200&auto=format&fit=crop',
    suitableFor: 'Modern Villa Bedrooms & Private Suites',
    description: 'Precision CNC cut V-grooves forming asymmetric modern geometric patterns on rich teak veneer with polyurethane matte clear coat.',
    features: ['V-Groove CNC Precision', 'Termite & Borer Proof', 'Matching Frame Architrave']
  }
];

export default function MicaDesignSelector() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDesign, setSelectedDesign] = useState<MicaDesignItem>(MICA_DESIGNS[0]);

  const categories = [
    { id: 'all', label: 'All Mica & Doors (16)' },
    { id: 'door_design', label: 'Door Designs (4)' },
    { id: 'gloss', label: 'Italian Marble Gloss' },
    { id: 'woodgrain', label: 'Teak & Walnut Woodgrains' },
    { id: 'metallic', label: '3D Gold & Metallic Louvers' },
    { id: 'matte', label: 'Super-Matt Anti-Fingerprint' },
    { id: 'inlay', label: 'Mother of Pearl & Inlay' },
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
            <span>INTERACTIVE MICA &amp; DOOR DESIGN STUDIO</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-classical-cream">
            Explore Mica Colors &amp; <span className="gold-text-gradient italic">Door Designs</span>
          </h2>
          <p className="text-classical-creamMuted text-sm sm:text-base font-light">
            Select high-gloss marble laminates, natural woodgrain veneers, metallic 3D louvers, or hand-carved teak door patterns. Preview live swatches and request direct physical samples on WhatsApp.
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
                  ? 'bg-gold-gradient text-black shadow-gold-sm scale-105'
                  : 'bg-classical-card text-classical-creamMuted border border-classical-border hover:border-classical-gold/40 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Interactive Studio Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-classical-card p-6 sm:p-8 rounded-2xl border border-classical-gold/40 shadow-classical-deep items-start">
          {/* Left Live Surface Previewer */}
          <div className="lg:col-span-6 space-y-5 lg:sticky lg:top-28">
            <div className="relative h-80 sm:h-[420px] rounded-xl overflow-hidden border-2 border-classical-gold/60 bg-black group shadow-2xl">
              <Image
                src={selectedDesign.previewImg}
                alt={`${selectedDesign.name} (${selectedDesign.code}) - Decorative architectural finish by Satya Narayan Sharma`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

              {/* Code Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded bg-gold-gradient text-black font-extrabold text-xs tracking-wider shadow-gold-sm">
                  Design Code: {selectedDesign.code}
                </span>
                <span className="px-2.5 py-1.5 rounded bg-black/70 border border-classical-gold/40 text-classical-gold text-[10px] uppercase tracking-wider font-semibold backdrop-blur-md">
                  {selectedDesign.texture.split(' ')[0]}
                </span>
              </div>

              {/* Bottom Specs Overlay */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-classical-gold font-bold block">
                  {selectedDesign.texture}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-classical-cream leading-snug">
                  {selectedDesign.name}
                </h3>
              </div>
            </div>

            {/* Design Spec Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs bg-classical-bg p-4 rounded-xl border border-classical-border">
              <div>
                <span className="text-[10px] uppercase text-classical-gold block font-bold">Thickness / Build</span>
                <span className="text-classical-cream font-medium">{selectedDesign.thickness}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-classical-gold block font-bold">Recommended Application</span>
                <span className="text-classical-cream font-medium">{selectedDesign.suitableFor}</span>
              </div>
            </div>

            {/* Description & Features */}
            <div className="p-4 rounded-xl bg-classical-bg/60 border border-classical-border/60 space-y-2">
              <p className="text-xs text-classical-creamMuted font-light leading-relaxed">
                {selectedDesign.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {selectedDesign.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[10px] text-classical-gold bg-classical-card px-2.5 py-1 rounded border border-classical-gold/30 font-medium"
                  >
                    <Check className="w-3 h-3 text-classical-gold" />
                    <span>{feat}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Actions for Selected Code */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={getWhatsAppLink(`Hello Sharma Interior Designer, I selected Mica / Door Design Code '${selectedDesign.code}' (${selectedDesign.name}). Please send me sample swatches, catalog PDF, and quotation.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-glow hover:opacity-95 transition-all transform hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Inquire Code {selectedDesign.code}</span>
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-semibold text-classical-cream bg-classical-bg border border-classical-border hover:border-classical-gold rounded transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-classical-gold" />
                <span>Call for Swatches</span>
              </a>
            </div>
          </div>

          {/* Right Design Swatches Grid */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-classical-border/40">
              <h4 className="font-serif text-lg font-bold text-classical-cream">
                Select a Swatch or Door Design Below:
              </h4>
              <span className="text-xs text-classical-gold font-semibold">
                Showing {filteredDesigns.length} of {MICA_DESIGNS.length}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[620px] overflow-y-auto pr-2 scrollbar-thin">
              {filteredDesigns.map((design) => {
                const isSelected = selectedDesign.code === design.code;
                return (
                  <button
                    key={design.code}
                    onClick={() => setSelectedDesign(design)}
                    className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between h-40 group cursor-pointer ${
                      isSelected
                        ? 'border-classical-gold bg-classical-mahogany/95 shadow-gold-glow scale-[1.02]'
                        : 'border-classical-border bg-classical-bg hover:border-classical-gold/60 hover:bg-classical-card'
                    }`}
                  >
                    <div>
                      {/* Swatch Color Indicator & Selection Check */}
                      <div className="flex justify-between items-center mb-2">
                        <div
                          className="w-6 h-6 rounded-full border-2 border-white/80 shadow-md transform group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: design.colorHex }}
                        />
                        {isSelected ? (
                          <div className="w-5 h-5 rounded-full bg-classical-gold text-black flex items-center justify-center shadow-sm">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        ) : (
                          <span className="text-[9px] uppercase tracking-wider text-classical-creamMuted/60 font-semibold">
                            {design.category.replace('_', ' ')}
                          </span>
                        )}
                      </div>

                      <span className="text-[10px] font-extrabold text-classical-gold block tracking-wider">
                        {design.code}
                      </span>
                      <span className="font-serif text-xs font-bold text-classical-cream line-clamp-2 mt-0.5 leading-snug group-hover:text-classical-gold transition-colors">
                        {design.name}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-classical-border/40 flex items-center justify-between">
                      <span className="text-[9px] uppercase tracking-wider text-classical-creamMuted block">
                        {design.thickness.split(' ')[0]}
                      </span>
                      <span className="text-[9px] text-classical-gold font-semibold underline opacity-0 group-hover:opacity-100 transition-opacity">
                        Preview →
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Swatch Box Banner */}
            <div className="p-4 rounded-xl bg-classical-bg border border-classical-gold/30 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-classical-card border border-classical-gold/40 text-classical-gold flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <h5 className="font-serif font-bold text-classical-cream">
                  Free Architect Swatch Sample Kit
                </h5>
                <p className="text-classical-creamMuted font-light mt-0.5">
                  Order physical 4x4 inch mica swatches or timber finish samples delivered directly to your doorstep in Patna &amp; Bihar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
