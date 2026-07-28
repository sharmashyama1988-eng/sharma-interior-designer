'use client';

import { useState } from 'react';
import { ChefHat, DoorClosed, Sparkles, CheckCircle2, MessageSquare, Phone, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink, PHONE_NUMBER } from '@/data/furnitureData';

const KITCHEN_ALMIRAH_WORKS = [
  {
    id: 'k1',
    title: 'Royal Burma Teak Island Modular Kitchen',
    category: 'kitchen',
    rate: '₹1,850 / sq. ft.',
    finish: 'PU Gloss & Quartz Countertop',
    hardware: 'Blum Soft-Close Motion (German Technology)',
    image: '/kitchen1.jpg',
    features: [
      '100% Water-proof & Termite-proof Marine Ply + Teak Finish',
      'Italian Calacatta Quartz Countertop with Waterfall Edge',
      'In-built Spice Pull-outs, Carousel Units & Tall Pantry Storage',
      'Integrated Warm LED Ambient Cabinet Lighting'
    ]
  },
  {
    id: 'k2',
    title: 'Heritage Hardwood Parallel Kitchen with Breakfast Bar',
    category: 'kitchen',
    rate: '₹1,650 / sq. ft.',
    finish: 'Champagne Gold & Dark Walnut Lacquer',
    hardware: 'Hettich Soft-Close Hardware',
    image: '/kitchen2.jpg',
    features: [
      'Solid Teak Shaker Style Shutter Doors',
      'Stain-resistant Granite / Italian Marble Countertops',
      'Built-in Oven, Microwave & Chimney Housing Unit',
      'Dual-tone Gloss & Matte Finish Combination'
    ]
  },
  {
    id: 'a1',
    title: 'Palace 6-Door Carved Teakwood Almirah & Wardrobe Suite',
    category: 'almirah',
    rate: '₹1,450 / sq. ft.',
    finish: '24K Gold Leaf Gilt & Satin Chestnut',
    hardware: 'Antique Brass Lock Handles & Heavy Concealed Hinges',
    image: '/almirah1.jpg',
    features: [
      'Solid Teak Frame with Crown Pediment Carving',
      'Full-Length Beveled Mirror Center Shutters',
      'Secret Brass-Locked Safe & Code Lock Storage Drawer',
      'Velvet-lined Watch, Jewelry & Tie Trays'
    ]
  },
  {
    id: 'a2',
    title: 'Modern Classical Sliding Glass Walk-In Wardrobe',
    category: 'almirah',
    rate: '₹1,750 / sq. ft.',
    finish: 'Tinted Toughened Glass & Gold Anodized Aluminum Profile',
    hardware: 'Top-Hung Heavy Duty Sliding Tracks',
    image: '/almirah2.jpg',
    features: [
      'Automatic Sensor Warm LED Bar Lighting on Opening',
      'Custom Trouser Racks, Shoe Organizers & Blazer Hangers',
      'Dust-seal Rubber Gaskets & Soft Dampened Closing',
      'Bespoke Dressing Vanity Mirror Inset'
    ]
  }
];

export default function ModularKitchenAlmirah() {
  const [activeTab, setActiveTab] = useState<'all' | 'kitchen' | 'almirah'>('all');

  const filteredItems = KITCHEN_ALMIRAH_WORKS.filter(
    (item) => activeTab === 'all' || item.category === activeTab
  );

  return (
    <section id="kitchen-almirah" className="py-24 bg-classical-bg relative border-t border-classical-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-classical-gold font-semibold">
            <ChefHat className="w-4 h-4 text-classical-gold" />
            <span>MODULAR KITCHEN & PALACE ALMIRAH WORKS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-classical-cream">
            Hardwood Modular Kitchens & <span className="gold-text-gradient italic">Palace Almirahs</span>
          </h2>
          <p className="text-classical-creamMuted text-sm sm:text-base font-light">
            Engineered with 100% waterproof timber, German Blum soft-close hardware, 24K gold leafing, and customized velvet-lined storage solutions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2.5 rounded text-xs uppercase tracking-wider font-bold transition-all ${
              activeTab === 'all'
                ? 'bg-gold-gradient text-black shadow-gold-sm'
                : 'bg-classical-card text-classical-creamMuted border border-classical-border hover:border-classical-gold/40'
            }`}
          >
            All Works
          </button>
          <button
            onClick={() => setActiveTab('kitchen')}
            className={`px-6 py-2.5 rounded text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2 ${
              activeTab === 'kitchen'
                ? 'bg-gold-gradient text-black shadow-gold-sm'
                : 'bg-classical-card text-classical-creamMuted border border-classical-border hover:border-classical-gold/40'
            }`}
          >
            <ChefHat className="w-4 h-4" />
            <span>Modular Kitchens</span>
          </button>
          <button
            onClick={() => setActiveTab('almirah')}
            className={`px-6 py-2.5 rounded text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2 ${
              activeTab === 'almirah'
                ? 'bg-gold-gradient text-black shadow-gold-sm'
                : 'bg-classical-card text-classical-creamMuted border border-classical-border hover:border-classical-gold/40'
            }`}
          >
            <DoorClosed className="w-4 h-4" />
            <span>Palace Almirahs & Wardrobes</span>
          </button>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((work) => (
            <div
              key={work.id}
              className="bg-classical-card rounded-xl border border-classical-border hover:border-classical-gold/70 overflow-hidden transition-all duration-300 shadow-classical-deep flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-black">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-classical-card via-transparent to-black/40" />

                  {/* Rate Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 text-xs uppercase font-extrabold tracking-wider bg-gold-gradient text-black rounded shadow-gold-sm">
                      {work.rate}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <h3 className="font-serif text-xl font-bold text-classical-cream group-hover:text-classical-gold transition-colors">
                    {work.title}
                  </h3>

                  <div className="grid grid-cols-2 gap-2 text-xs text-classical-creamMuted border-y border-classical-border/40 py-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-classical-gold block font-bold">Finish</span>
                      <span className="text-classical-cream font-medium">{work.finish}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-classical-gold block font-bold">Hardware</span>
                      <span className="text-classical-cream font-medium">{work.hardware}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 pt-1">
                    {work.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-classical-creamMuted font-light">
                        <CheckCircle2 className="w-4 h-4 text-classical-gold flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-0 space-y-3">
                <a
                  href={getWhatsAppLink(`Hello Sharma Interior Designer, I want to inquire about '${work.title}' (${work.rate}). Please send me your kitchen & wardrobe catalog.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-glow hover:opacity-95 transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  <span>Inquire Work on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 p-6 rounded-xl bg-classical-card border border-classical-gold/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-classical-mahogany border border-classical-gold text-classical-gold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-classical-cream">
                10-Year Water & Termite Warranty
              </h4>
              <p className="text-xs text-classical-creamMuted font-light">
                All our Modular Kitchen shutters & Almirahs use 100% Seasoned Marine Plywood & Solid Burma Teak.
              </p>
            </div>
          </div>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-classical-cream bg-classical-bg border border-classical-border hover:border-classical-gold rounded"
          >
            <Phone className="w-3.5 h-3.5 text-classical-gold" />
            <span>Call {PHONE_NUMBER}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
