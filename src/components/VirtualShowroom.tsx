'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Eye, Sparkles, MessageSquare, Plus, Info, X } from 'lucide-react';
import { getWhatsAppLink } from '@/data/furnitureData';

const ROOM_PRESETS = [
  {
    id: 'royal_living',
    name: 'Royal Heritage Living Room',
    image: '/maharaja_sofa.jpg',
    hotspots: [
      { id: 'h1', title: 'Teak Maharaja Sofa (3+2+1)', price: '₹1,45,000', x: '40%', y: '65%' },
      { id: 'h2', title: 'Solid Teak Live-Edge Center Table', price: '₹24,000', x: '55%', y: '75%' },
      { id: 'h3', title: 'Architectural Teak Wainscoting', price: '₹650 / sq. ft.', x: '25%', y: '35%' },
    ]
  },
  {
    id: 'emperor_dining',
    name: 'Luxury Live-Edge Dining Hall',
    image: '/live_edge_dining.jpg',
    hotspots: [
      { id: 'h4', title: '8-Seater Solid Burma Teak Dining Table', price: '₹88,000', x: '45%', y: '60%' },
      { id: 'h5', title: 'Curved Teak & Velvet Dining Chairs (Set of 6)', price: '₹32,000', x: '65%', y: '68%' },
    ]
  },
  {
    id: 'palace_bedroom',
    name: 'Palace Master Bedroom Suite',
    image: '/canopy_poster_bed.jpg',
    hotspots: [
      { id: 'h7', title: 'Royal Heritage 4-Poster Teak Bed', price: '₹85,000', x: '48%', y: '55%' },
      { id: 'h8', title: 'Floating Japandi Platform King Bed', price: '₹58,000', x: '25%', y: '40%' },
    ]
  }
];

export default function VirtualShowroom() {
  const [activeRoom, setActiveRoom] = useState(ROOM_PRESETS[0]);
  const [selectedHotspot, setSelectedHotspot] = useState<any | null>(null);

  return (
    <section id="showroom" className="py-24 bg-classical-card/40 relative border-t border-classical-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-classical-gold font-semibold">
            <Eye className="w-4 h-4 text-classical-gold" />
            <span>VIRTUAL SHOWROOM WALKTHROUGH</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-classical-cream">
            Interactive 360° <span className="gold-text-gradient italic">Room Showcase</span>
          </h2>
          <p className="text-classical-creamMuted text-sm sm:text-base font-light">
            Click on interactive hotspots inside our classical virtual room set to discover itemized prices and instant WhatsApp inquiry links.
          </p>
        </div>

        {/* Room Switcher Pills */}
        <div className="flex justify-center gap-3 mb-8 overflow-x-auto pb-2">
          {ROOM_PRESETS.map((room) => (
            <button
              key={room.id}
              onClick={() => { setActiveRoom(room); setSelectedHotspot(null); }}
              className={`px-5 py-2.5 rounded text-xs uppercase tracking-wider font-semibold transition-all whitespace-nowrap ${
                activeRoom.id === room.id
                  ? 'bg-gold-gradient text-black shadow-gold-sm'
                  : 'bg-classical-card text-classical-creamMuted border border-classical-border hover:border-classical-gold/40'
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        {/* Interactive Canvas Container */}
        <div className="relative h-[450px] sm:h-[550px] rounded-2xl overflow-hidden border border-classical-gold/40 shadow-classical-deep group">
          <Image
            src={activeRoom.image}
            alt={`${activeRoom.name} - 3D Virtual Showroom Designed by Architect Satya Narayan Sharma`}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover transition-transform duration-1000 group-hover:scale-105 transform-gpu"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a]/80 via-transparent to-[#0c0b0a]/40 pointer-events-none" />

          {/* Interactive Hotspots */}
          {activeRoom.hotspots.map((spot) => (
            <div
              key={spot.id}
              className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: spot.x, top: spot.y }}
            >
              <div className="relative">
                {/* Radar Ripple */}
                <span className="absolute -inset-2 rounded-full bg-classical-gold/40 animate-ping pointer-events-none" />

                <button
                  onClick={() => setSelectedHotspot(selectedHotspot?.id === spot.id ? null : spot)}
                  className="relative w-8 h-8 rounded-full bg-gold-gradient border-2 border-white text-black flex items-center justify-center shadow-gold-glow hover:scale-125 transition-transform"
                  aria-label={`Hotspot for ${spot.title}`}
                >
                  <Plus className="w-4 h-4 text-black font-extrabold" />
                </button>
              </div>

              {/* Hotspot Info Popup Card */}
              {selectedHotspot?.id === spot.id && (
                <div className="absolute left-10 top-0 z-30 w-60 p-4 rounded-xl bg-classical-card/95 backdrop-blur-xl border border-classical-gold text-left shadow-classical-deep animate-fadeIn">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1 text-[10px] uppercase text-classical-gold font-bold">
                      <Info className="w-3 h-3" />
                      <span>Featured Piece</span>
                    </div>
                    <button
                      onClick={() => setSelectedHotspot(null)}
                      className="text-classical-creamMuted hover:text-white"
                      aria-label="Close"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <h4 className="font-serif text-sm font-bold text-classical-cream">
                    {spot.title}
                  </h4>
                  <span className="font-serif text-base font-bold text-classical-gold block my-1">
                    {spot.price}
                  </span>
                  <a
                    href={getWhatsAppLink(`Hello Sharma Interior Designer, I found '${spot.title}' (${spot.price}) on your Virtual Showroom. Please share catalog details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-2.5 flex items-center justify-center gap-1.5 py-2 text-[10px] font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-sm hover:opacity-95 transition-all"
                  >
                    <MessageSquare className="w-3 h-3 fill-black" />
                    <span>Inquire Item</span>
                  </a>
                </div>
              )}
            </div>
          ))}

          {/* Room Label Overlay */}
          <div className="absolute bottom-6 left-6 z-10 bg-classical-card/90 backdrop-blur-md p-4 rounded-xl border border-classical-gold/30 shadow-lg">
            <span className="text-[10px] uppercase tracking-widest text-classical-gold font-bold block">
              Virtual Room View
            </span>
            <span className="font-serif text-lg font-bold text-classical-cream">
              {activeRoom.name}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
