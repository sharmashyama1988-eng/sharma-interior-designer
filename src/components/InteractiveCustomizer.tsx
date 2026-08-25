'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sliders, Sparkles, MessageSquare, Phone, Check, RefreshCw } from 'lucide-react';
import { getWhatsAppLink, PHONE_NUMBER } from '@/data/furnitureData';

const FURNITURE_TYPES = [
  { id: 'sofa', name: 'Royal Maharaja Sofa (3+2+1)', basePrice: 265000, img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop' },
  { id: 'dining', name: 'Emperor Carved Dining Table (8-Seater)', basePrice: 325000, img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1000&auto=format&fit=crop' },
  { id: 'bed', name: 'Victoria 4-Poster Master Bed', basePrice: 245000, img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000&auto=format&fit=crop' },
  { id: 'desk', name: 'Executive Grand Consul Desk', basePrice: 165000, img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1000&auto=format&fit=crop' },
];

const WOOD_FINISHES = [
  { id: 'teak_walnut', name: 'Burma Teak Dark Walnut', hex: '#2d1810', priceMod: 0 },
  { id: 'mahogany', name: 'Royal Deep Mahogany', hex: '#3b1414', priceMod: 12000 },
  { id: 'amber', name: 'Antique Amber Lacquer', hex: '#633512', priceMod: 8000 },
  { id: 'gold_leaf', name: 'Champagne Gold Leaf Gilt', hex: '#b8860b', priceMod: 25000 },
];

const FABRICS = [
  { id: 'red_velvet', name: 'Royal Crimson Velvet', hex: '#7a1428', type: 'Velvet' },
  { id: 'gold_jacquard', name: 'Antique Gold Jacquard', hex: '#c59b27', type: 'Jacquard' },
  { id: 'tan_leather', name: 'Vintage Cognac Leather', hex: '#8c4e2b', type: 'Italian Leather' },
  { id: 'emerald_velvet', name: 'Midnight Emerald Velvet', hex: '#0f4c3a', type: 'Velvet' },
];

const BRASS_TRIMS = [
  { id: 'studs', name: 'Hand-hammered Brass Studs', mod: 5000 },
  { id: 'gold_gilt', name: 'Hand-Carved Gold Leaf Accents', mod: 15000 },
  { id: 'bronze', name: 'Antiqued Bronze Scrollwork', mod: 8000 },
];

export default function InteractiveCustomizer() {
  const [selectedFurniture, setSelectedFurniture] = useState(FURNITURE_TYPES[0]);
  const [selectedWood, setSelectedWood] = useState(WOOD_FINISHES[0]);
  const [selectedFabric, setSelectedFabric] = useState(FABRICS[0]);
  const [selectedTrim, setSelectedTrim] = useState(BRASS_TRIMS[0]);

  const calculateTotalPrice = () => {
    return selectedFurniture.basePrice + selectedWood.priceMod + selectedTrim.mod;
  };

  const getCustomizedWhatsAppMessage = () => {
    return `Hello Sharma Interior Designer,\n\nI configured a custom design on your website:\n- Item: ${selectedFurniture.name}\n- Wood Finish: ${selectedWood.name}\n- Upholstery/Fabric: ${selectedFabric.name} (${selectedFabric.type})\n- Brass Detailing: ${selectedTrim.name}\n- Estimated Price: ₹${calculateTotalPrice().toLocaleString('en-IN')}\n\nPlease share wood samples and delivery timeline.`;
  };

  return (
    <section id="customizer" className="py-24 bg-classical-card/40 relative border-t border-classical-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-classical-gold font-semibold">
            <Sliders className="w-4 h-4 text-classical-gold" />
            <span>LIVE 3D FURNITURE CONFIGURATOR</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-classical-cream">
            Customize Your <span className="gold-text-gradient italic">Masterpiece</span>
          </h2>
          <p className="text-classical-creamMuted text-sm sm:text-base font-light">
            Select your preferred wood polish, luxurious fabric textures, and brass detailing. Experience real-time visualization and instant WhatsApp quotation.
          </p>
        </div>

        {/* Configurator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-classical-card rounded-xl border border-classical-gold/40 overflow-hidden shadow-classical-deep">
          {/* Left Preview Box */}
          <div className="lg:col-span-7 relative bg-black/60 min-h-[400px] lg:min-h-[550px] flex items-center justify-center p-8 overflow-hidden group">
            {/* Live Visualizer Render Image */}
            <div className="relative w-full h-full min-h-[350px] flex items-center justify-center">
              <Image
                src={selectedFurniture.img}
                alt={`${selectedFurniture.name} - Custom configured architectural design by Satya Narayan Sharma`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover rounded-lg shadow-2xl transition-all duration-700 filter group-hover:brightness-105"
              />

              {/* Tint overlay representing chosen wood finish */}
              <div
                className="absolute inset-0 rounded-lg opacity-30 mix-blend-overlay pointer-events-none transition-colors duration-500"
                style={{ backgroundColor: selectedWood.hex }}
              />

              {/* Fabric color accent badge indicator */}
              <div className="absolute top-4 left-4 backdrop-blur-md bg-black/70 border border-classical-gold/40 p-3 rounded-lg flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full border border-white" style={{ backgroundColor: selectedWood.hex }} />
                  <span className="text-classical-cream font-medium">{selectedWood.name}</span>
                </div>
                <div className="w-[1px] h-4 bg-classical-border" />
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full border border-white" style={{ backgroundColor: selectedFabric.hex }} />
                  <span className="text-classical-gold font-medium">{selectedFabric.name}</span>
                </div>
              </div>
            </div>

            {/* Price Badge */}
            <div className="absolute bottom-4 right-4 bg-classical-card/95 backdrop-blur-md border border-classical-gold p-4 rounded-lg text-right shadow-gold-glow">
              <span className="text-[10px] uppercase tracking-wider text-classical-creamMuted block">Configured Estimate</span>
              <span className="font-serif text-2xl font-bold text-classical-gold">
                ₹{calculateTotalPrice().toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {/* Right Configuration Controls */}
          <div className="lg:col-span-5 p-6 lg:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Step 1: Select Item */}
              <div>
                <label className="text-xs uppercase tracking-wider font-bold text-classical-gold block mb-3">
                  1. Select Furniture Archetype
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {FURNITURE_TYPES.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFurniture(f)}
                      className={`p-2.5 rounded text-left text-xs font-semibold border transition-all ${
                        selectedFurniture.id === f.id
                          ? 'border-classical-gold bg-classical-mahogany/80 text-classical-gold shadow-gold-sm'
                          : 'border-classical-border bg-classical-bg text-classical-creamMuted hover:border-classical-gold/40'
                      }`}
                    >
                      {f.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Wood Polish & Finish */}
              <div>
                <label className="text-xs uppercase tracking-wider font-bold text-classical-gold block mb-3">
                  2. Select Timber Polish & Finish
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {WOOD_FINISHES.map((w) => (
                    <button
                      key={w.id}
                      onClick={() => setSelectedWood(w)}
                      className={`p-2.5 rounded text-left text-xs font-medium border flex items-center justify-between transition-all ${
                        selectedWood.id === w.id
                          ? 'border-classical-gold bg-classical-mahogany/80 text-classical-gold'
                          : 'border-classical-border bg-classical-bg text-classical-creamMuted'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 rounded-full border border-white/40" style={{ backgroundColor: w.hex }} />
                        <span className="truncate">{w.name.split(' ')[2] || w.name}</span>
                      </div>
                      {selectedWood.id === w.id && <Check className="w-3.5 h-3.5 text-classical-gold" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Upholstery Fabric / Leather */}
              <div>
                <label className="text-xs uppercase tracking-wider font-bold text-classical-gold block mb-3">
                  3. Select Upholstery / Fabric
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {FABRICS.map((fb) => (
                    <button
                      key={fb.id}
                      onClick={() => setSelectedFabric(fb)}
                      className={`p-2.5 rounded text-left text-xs font-medium border flex items-center justify-between transition-all ${
                        selectedFabric.id === fb.id
                          ? 'border-classical-gold bg-classical-mahogany/80 text-classical-gold'
                          : 'border-classical-border bg-classical-bg text-classical-creamMuted'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 rounded-full border border-white/40" style={{ backgroundColor: fb.hex }} />
                        <span className="truncate">{fb.name.split(' ')[1]}</span>
                      </div>
                      {selectedFabric.id === fb.id && <Check className="w-3.5 h-3.5 text-classical-gold" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Brass Detailing */}
              <div>
                <label className="text-xs uppercase tracking-wider font-bold text-classical-gold block mb-3">
                  4. Select Brass & Accent Detailing
                </label>
                <div className="space-y-1.5">
                  {BRASS_TRIMS.map((tr) => (
                    <button
                      key={tr.id}
                      onClick={() => setSelectedTrim(tr)}
                      className={`w-full p-2.5 rounded text-left text-xs font-medium border flex items-center justify-between transition-all ${
                        selectedTrim.id === tr.id
                          ? 'border-classical-gold bg-classical-mahogany/80 text-classical-gold'
                          : 'border-classical-border bg-classical-bg text-classical-creamMuted'
                      }`}
                    >
                      <span>{tr.name}</span>
                      {selectedTrim.id === tr.id && <Check className="w-3.5 h-3.5 text-classical-gold" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="pt-4 border-t border-classical-border space-y-3">
              <a
                href={getWhatsAppLink(getCustomizedWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-glow hover:opacity-95 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Inquire Custom Design on WhatsApp</span>
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-classical-cream bg-classical-bg border border-classical-border hover:border-classical-gold rounded"
              >
                <Phone className="w-3.5 h-3.5 text-classical-gold" />
                <span>Call Woodsmith: {PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
