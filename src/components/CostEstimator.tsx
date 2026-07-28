'use client';

import { useState } from 'react';
import { Calculator, MessageSquare, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { getWhatsAppLink, PHONE_NUMBER } from '@/data/furnitureData';

const ROOM_TYPES = [
  { id: 'living', name: 'Royal Living Room Suite', basePerSqFt: 1250, desc: 'Includes Teak sofa set, coffee table, TV console & wall panelling' },
  { id: 'dining', name: 'Emperor Dining & Bar Suite', basePerSqFt: 1450, desc: 'Includes 8-seater carved dining table, crockery unit & ceiling' },
  { id: 'bedroom', name: 'Master Bed & Dressing Suite', basePerSqFt: 1350, desc: 'Includes 4-poster bed, nightstands, wardrobe & tufted wall' },
  { id: 'full_villa', name: 'Turnkey Royal Villa Interior', basePerSqFt: 2450, desc: 'Complete 3D design, Burma teakwood furniture, flooring, ceiling & lighting' },
];

const MATERIAL_TIERS = [
  { id: 'standard', name: 'Classic Grade Seasoned Teak', multiplier: 1.0 },
  { id: 'premium', name: 'Burma Teak & Italian Marble', multiplier: 1.25 },
  { id: 'royal', name: 'Royal Gold Leaf & Italian Leather', multiplier: 1.5 },
];

export default function CostEstimator() {
  const [selectedRoom, setSelectedRoom] = useState(ROOM_TYPES[0]);
  const [sqFt, setSqFt] = useState(1200);
  const [selectedTier, setSelectedTier] = useState(MATERIAL_TIERS[1]);

  const estimatedCost = Math.round(sqFt * selectedRoom.basePerSqFt * selectedTier.multiplier);

  const getWhatsAppEstimateMessage = () => {
    return `Hello Sharma Interior Designer,\n\nI calculated an estimated interior budget on your website:\n- Project Type: ${selectedRoom.name}\n- Space Area: ${sqFt} sq. ft.\n- Material Quality: ${selectedTier.name}\n- Estimated Cost: ₹${estimatedCost.toLocaleString('en-IN')}\n\nPlease share detailed itemized breakdown and site visit availability.`;
  };

  return (
    <section id="estimator" className="py-24 bg-classical-card/40 relative border-t border-classical-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-classical-gold font-semibold">
            <Calculator className="w-4 h-4 text-classical-gold" />
            <span>INTERACTIVE BUDGET CALCULATOR</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-classical-cream">
            Calculate Your Interior <span className="gold-text-gradient italic">Investment</span>
          </h2>
          <p className="text-classical-creamMuted text-sm sm:text-base font-light">
            Get an instant transparent cost estimate based on your space area and preferred timber quality. Send directly to WhatsApp for an itemized quotation.
          </p>
        </div>

        {/* Estimator Box */}
        <div className="max-w-4xl mx-auto bg-classical-card rounded-xl border border-classical-gold/40 p-6 sm:p-10 shadow-classical-deep space-y-8">
          {/* Step 1: Select Room Type */}
          <div>
            <label className="text-xs uppercase tracking-wider font-bold text-classical-gold block mb-3">
              1. Choose Project Scope
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ROOM_TYPES.map((room) => (
                <button
                  key={room.id}
                  onClick={() => setSelectedRoom(room)}
                  className={`p-4 rounded-lg text-left border transition-all ${
                    selectedRoom.id === room.id
                      ? 'border-classical-gold bg-classical-mahogany/80 text-classical-gold shadow-gold-sm'
                      : 'border-classical-border bg-classical-bg text-classical-creamMuted hover:border-classical-gold/40'
                  }`}
                >
                  <span className="font-serif text-base font-bold text-classical-cream block">
                    {room.name}
                  </span>
                  <span className="text-xs text-classical-creamMuted/80 font-light block mt-1">
                    {room.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Area Slider */}
          <div className="space-y-3 bg-classical-bg p-6 rounded-lg border border-classical-border">
            <div className="flex justify-between items-center">
              <label className="text-xs uppercase tracking-wider font-bold text-classical-gold">
                2. Enter Carpet Area (sq. ft.)
              </label>
              <span className="font-serif text-xl font-bold text-classical-gold">
                {sqFt.toLocaleString()} sq. ft.
              </span>
            </div>
            <input
              type="range"
              min="300"
              max="8000"
              step="100"
              value={sqFt}
              onChange={(e) => setSqFt(Number(e.target.value))}
              className="w-full h-2 bg-classical-border rounded-lg appearance-none cursor-pointer accent-classical-gold"
            />
            <div className="flex justify-between text-[10px] text-classical-creamMuted uppercase tracking-wider">
              <span>300 sq. ft. (Compact Room)</span>
              <span>2,500 sq. ft. (Penthouse)</span>
              <span>8,000+ sq. ft. (Grand Villa)</span>
            </div>
          </div>

          {/* Step 3: Material Quality Tier */}
          <div>
            <label className="text-xs uppercase tracking-wider font-bold text-classical-gold block mb-3">
              3. Select Craftsmanship & Timber Grade
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {MATERIAL_TIERS.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTier(tier)}
                  className={`p-3.5 rounded-lg text-center text-xs font-semibold border transition-all ${
                    selectedTier.id === tier.id
                      ? 'border-classical-gold bg-classical-mahogany/80 text-classical-gold shadow-gold-sm'
                      : 'border-classical-border bg-classical-bg text-classical-creamMuted hover:border-classical-gold/40'
                  }`}
                >
                  {tier.name}
                </button>
              ))}
            </div>
          </div>

          {/* Result Output & WhatsApp CTA */}
          <div className="pt-6 border-t border-classical-border flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-classical-card/90 p-6 rounded-lg border border-classical-gold/30">
            <div>
              <span className="text-xs uppercase tracking-widest text-classical-creamMuted block">
                Estimated Investment Range
              </span>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-classical-gold">
                ₹{estimatedCost.toLocaleString('en-IN')}
              </span>
              <span className="text-[11px] text-classical-creamMuted font-light block mt-1">
                *Includes 3D architectural rendering, materials, manufacturing & installation
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={getWhatsAppLink(getWhatsAppEstimateMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-glow hover:opacity-95 transition-all whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Send Estimate to WhatsApp</span>
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="text-center text-xs text-classical-creamMuted hover:text-classical-gold transition-colors py-1"
              >
                Or Call Us directly: <strong className="text-classical-gold">{PHONE_NUMBER}</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
