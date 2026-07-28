'use client';

import { useState } from 'react';
import { Calculator, MessageSquare, Phone, Sparkles, Check, Layers, Sliders, ShieldCheck, ChevronRight } from 'lucide-react';
import { getWhatsAppLink, PHONE_NUMBER } from '@/data/furnitureData';

const SPACE_TYPES = [
  { id: 'full_villa', name: 'Turnkey Royal Villa Interior', baseRate: 2850, desc: 'Complete 3D design, Burma teakwood furniture, marble flooring, false ceiling & lighting' },
  { id: 'penthouse', name: 'Penthouse & Luxury Apartment', baseRate: 2250, desc: 'Neo-classical interior styling, custom wardrobes, TV panel & living room suite' },
  { id: 'kitchen', name: 'Modular Kitchen (Island/Parallel)', baseRate: 1750, desc: 'HDHMR marine ply, teak shutters, Italian quartz marble countertop & soft-close drawers' },
  { id: 'bedroom', name: 'Master Bedroom & Walk-in Wardrobe', baseRate: 1450, desc: 'Four-poster bed, nightstands, sliding glass wardrobe & tufted wall panelling' },
  { id: 'office', name: 'Executive Office & Boardroom', baseRate: 1950, desc: 'Chairman desk, leather executive chairs, 12-seater conference table & acoustic walls' },
  { id: 'showroom', name: 'Commercial Showroom & Shop Display', baseRate: 1850, desc: 'Brass display racks, marble reception counter, glass showcases & spotlighting' },
];

const TIMBER_GRADES = [
  { id: 'classic_teak', name: 'Grade-A Seasoned Burma Teak', multiplier: 1.0, badge: 'Standard Luxury' },
  { id: 'teak_marble', name: 'Burma Teak + Italian Carrara Marble', multiplier: 1.25, badge: 'Royal Tier' },
  { id: 'imperial_gold', name: '24K Gold Leaf Gilt + Italian Nappa Leather', multiplier: 1.45, badge: 'Imperial Palace Tier' },
];

const ADDON_OPTIONS = [
  { id: 'coffered_ceiling', name: 'Teak Coffered Ceiling / False Ceiling', costPerSqFt: 250, fixedCost: 0, desc: 'Architectural teakwood grid ceiling with chandelier hooks' },
  { id: 'servo_hardware', name: 'Blum German Servo-Drive Motorized Hardware', costPerSqFt: 0, fixedCost: 45000, desc: 'Automatic touch-to-open electronic drawer motors' },
  { id: 'gold_leafing', name: '24K Real Gold Leaf Hand Gilding', costPerSqFt: 0, fixedCost: 35000, desc: 'Genuine gold foil applied by master artisans on carved motifs' },
  { id: 'biometric_safe', name: 'Biometric Safe & Secret Locked Compartments', costPerSqFt: 0, fixedCost: 25000, desc: 'Fingerprint digital safe concealed inside wardrobe/desk' },
  { id: 'smart_lighting', name: 'Smart App-Controlled LED Ambient Cove Package', costPerSqFt: 0, fixedCost: 30000, desc: 'Dimmable warm 3000K LED line lighting with smartphone app' },
  { id: 'wall_panelling', name: 'Teak Wainscoting & Fluted Wall Panelling', costPerSqFt: 180, fixedCost: 0, desc: 'Full-wall teakwood wainscoting with brass strip inlays' },
];

export default function CostEstimator() {
  const [selectedSpace, setSelectedSpace] = useState(SPACE_TYPES[0]);
  const [sqFt, setSqFt] = useState(1500);
  const [selectedGrade, setSelectedGrade] = useState(TIMBER_GRADES[1]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['coffered_ceiling', 'gold_leafing']);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Base Interior Cost
  const baseCost = sqFt * selectedSpace.baseRate;
  
  // Grade Multiplier Adjustment
  const gradeAdjustedCost = Math.round(baseCost * selectedGrade.multiplier);

  // Addon Costs
  const addonsTotal = selectedAddons.reduce((acc, addonId) => {
    const addon = ADDON_OPTIONS.find((a) => a.id === addonId);
    if (!addon) return acc;
    const addonCost = (sqFt * addon.costPerSqFt) + addon.fixedCost;
    return acc + addonCost;
  }, 0);

  const grandTotalEstimate = gradeAdjustedCost + addonsTotal;

  const getWhatsAppQuotationMessage = () => {
    const addonsListStr = selectedAddons
      .map((id) => ADDON_OPTIONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    return `Hello Sharma Interior Designer,\n\nI calculated a detailed custom estimate on your website:\n- Space Type: ${selectedSpace.name}\n- Carpet Area: ${sqFt.toLocaleString()} sq. ft.\n- Timber/Material Grade: ${selectedGrade.name}\n- Add-on Upgrades: ${addonsListStr || 'None'}\n- Calculated Investment: ₹${grandTotalEstimate.toLocaleString('en-IN')}\n\nPlease provide an itemized formal quote and schedule a site inspection.`;
  };

  return (
    <section id="estimator" className="py-24 bg-classical-card/40 relative border-t border-classical-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-classical-gold font-semibold">
            <Calculator className="w-4 h-4 text-classical-gold" />
            <span>INTERACTIVE ADVANCED COST CALCULATOR</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-classical-cream">
            Calculate Your Custom <span className="gold-text-gradient italic">Interior Investment</span>
          </h2>
          <p className="text-classical-creamMuted text-sm sm:text-base font-light">
            Select your space type, area dimensions, timber quality, and luxury add-ons for an instant, transparent itemized estimate.
          </p>
        </div>

        {/* Multi-Step Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Controls (Steps 1 to 4) */}
          <div className="lg:col-span-8 space-y-8 bg-classical-card p-6 sm:p-8 rounded-xl border border-classical-gold/40 shadow-classical-deep">
            {/* Step 1: Select Space Type */}
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-extrabold text-classical-gold mb-4">
                <span className="w-6 h-6 rounded-full bg-classical-mahogany border border-classical-gold flex items-center justify-center text-[10px] text-classical-gold">1</span>
                <span>Select Property / Space Type</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SPACE_TYPES.map((space) => (
                  <button
                    key={space.id}
                    onClick={() => setSelectedSpace(space)}
                    className={`p-4 rounded-lg text-left border transition-all ${
                      selectedSpace.id === space.id
                        ? 'border-classical-gold bg-classical-mahogany/80 text-classical-gold shadow-gold-sm'
                        : 'border-classical-border bg-classical-bg text-classical-creamMuted hover:border-classical-gold/40'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-serif text-base font-bold text-classical-cream block">
                        {space.name}
                      </span>
                      <span className="text-[11px] font-bold text-classical-gold bg-classical-bg px-2 py-0.5 rounded border border-classical-border">
                        ₹{space.baseRate}/sq ft
                      </span>
                    </div>
                    <span className="text-xs text-classical-creamMuted font-light block mt-1 line-clamp-2">
                      {space.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Carpet Area Slider */}
            <div className="space-y-4 bg-classical-bg p-6 rounded-lg border border-classical-border">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-extrabold text-classical-gold">
                  <span className="w-6 h-6 rounded-full bg-classical-mahogany border border-classical-gold flex items-center justify-center text-[10px] text-classical-gold">2</span>
                  <span>Enter Carpet / Space Area (sq. ft.)</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="300"
                    max="15000"
                    value={sqFt}
                    onChange={(e) => setSqFt(Math.max(100, Number(e.target.value)))}
                    className="w-28 px-3 py-1.5 rounded bg-classical-card border border-classical-gold text-classical-gold font-serif font-bold text-base text-right focus:outline-none"
                  />
                  <span className="text-xs text-classical-creamMuted font-bold">sq. ft.</span>
                </div>
              </div>

              <input
                type="range"
                min="300"
                max="10000"
                step="100"
                value={sqFt}
                onChange={(e) => setSqFt(Number(e.target.value))}
                className="w-full h-2.5 bg-classical-border rounded-lg appearance-none cursor-pointer accent-classical-gold"
              />

              <div className="flex justify-between text-[10px] text-classical-creamMuted font-medium uppercase tracking-wider">
                <span>300 sq. ft. (Compact Room)</span>
                <span>2,500 sq. ft. (Penthouse)</span>
                <span>10,000+ sq. ft. (Palace Villa)</span>
              </div>
            </div>

            {/* Step 3: Select Timber & Material Grade */}
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-extrabold text-classical-gold mb-4">
                <span className="w-6 h-6 rounded-full bg-classical-mahogany border border-classical-gold flex items-center justify-center text-[10px] text-classical-gold">3</span>
                <span>Select Craftsmanship & Material Grade</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TIMBER_GRADES.map((grade) => (
                  <button
                    key={grade.id}
                    onClick={() => setSelectedGrade(grade)}
                    className={`p-4 rounded-lg text-left border transition-all ${
                      selectedGrade.id === grade.id
                        ? 'border-classical-gold bg-classical-mahogany/80 text-classical-gold shadow-gold-sm'
                        : 'border-classical-border bg-classical-bg text-classical-creamMuted hover:border-classical-gold/40'
                    }`}
                  >
                    <span className="text-[10px] uppercase font-bold text-classical-gold block">
                      {grade.badge}
                    </span>
                    <span className="font-serif text-sm font-bold text-classical-cream block mt-0.5">
                      {grade.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Add-on Upgrades & Customizations */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-extrabold text-classical-gold">
                  <span className="w-6 h-6 rounded-full bg-classical-mahogany border border-classical-gold flex items-center justify-center text-[10px] text-classical-gold">4</span>
                  <span>Select Luxury Add-ons & Architectural Upgrades</span>
                </div>
                <span className="text-[11px] text-classical-creamMuted font-light">({selectedAddons.length} selected)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADDON_OPTIONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-lg text-left border transition-all flex items-start gap-3 ${
                        isChecked
                          ? 'border-classical-gold bg-classical-mahogany/70 text-classical-gold'
                          : 'border-classical-border bg-classical-bg text-classical-creamMuted hover:border-classical-gold/40'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded flex items-center justify-center mt-0.5 border ${isChecked ? 'bg-gold-gradient border-black text-black' : 'border-classical-border bg-classical-card'}`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-baseline">
                          <span className="font-serif text-xs font-bold text-classical-cream">
                            {addon.name}
                          </span>
                          <span className="text-[10px] font-bold text-classical-gold">
                            {addon.costPerSqFt ? `+₹${addon.costPerSqFt}/sq ft` : `+₹${addon.fixedCost.toLocaleString('en-IN')}`}
                          </span>
                        </div>
                        <span className="text-[10px] text-classical-creamMuted font-light block mt-0.5">
                          {addon.desc}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Live Cost Summary Card */}
          <div className="lg:col-span-4 sticky top-28 bg-classical-card p-6 rounded-xl border border-classical-gold/60 shadow-classical-deep space-y-6">
            <div className="border-b border-classical-border/60 pb-4">
              <span className="text-[10px] uppercase tracking-widest text-classical-gold font-bold block mb-1">
                Calculated Estimate Summary
              </span>
              <h3 className="font-serif text-xl font-bold text-classical-cream">
                {selectedSpace.name}
              </h3>
            </div>

            {/* Breakdown List */}
            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-classical-creamMuted">
                <span>Space Area:</span>
                <span className="text-classical-cream font-bold">{sqFt.toLocaleString()} sq. ft.</span>
              </div>

              <div className="flex justify-between text-classical-creamMuted">
                <span>Base Space Rate:</span>
                <span className="text-classical-cream font-bold">₹{selectedSpace.baseRate} / sq. ft.</span>
              </div>

              <div className="flex justify-between text-classical-creamMuted">
                <span>Timber Grade Tier:</span>
                <span className="text-classical-gold font-bold">{selectedGrade.name}</span>
              </div>

              <div className="flex justify-between text-classical-creamMuted">
                <span>Grade Subtotal:</span>
                <span className="text-classical-cream font-bold">₹{gradeAdjustedCost.toLocaleString('en-IN')}</span>
              </div>

              {selectedAddons.length > 0 && (
                <div className="flex justify-between text-classical-creamMuted pt-2 border-t border-classical-border/40">
                  <span>Luxury Add-ons ({selectedAddons.length}):</span>
                  <span className="text-classical-gold font-bold">+₹{addonsTotal.toLocaleString('en-IN')}</span>
                </div>
              )}
            </div>

            {/* Grand Total */}
            <div className="p-4 rounded-lg bg-classical-bg border border-classical-gold/40 text-center shadow-gold-sm">
              <span className="text-[10px] uppercase tracking-widest text-classical-creamMuted block font-semibold mb-1">
                Estimated Total Investment
              </span>
              <span className="font-serif text-3xl font-bold text-classical-gold block">
                ₹{grandTotalEstimate.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-classical-creamMuted font-light block mt-1">
                *Includes 3D renders, teak timber, manufacturing & white-glove installation
              </span>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              <a
                href={getWhatsAppLink(getWhatsAppQuotationMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-glow hover:opacity-95 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Send Estimate to WhatsApp</span>
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-classical-cream bg-classical-bg border border-classical-border hover:border-classical-gold rounded"
              >
                <Phone className="w-3.5 h-3.5 text-classical-gold" />
                <span>Call Chief Architect: {PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
