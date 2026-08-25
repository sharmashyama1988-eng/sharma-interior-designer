'use client';

import Image from 'next/image';
import { Armchair, Compass, Home, Building2, RefreshCw, Box, ArrowRight, MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '@/data/furnitureData';

const SERVICES = [
  {
    icon: Home,
    title: 'Complete Villa & Residential Interiors',
    desc: 'End-to-end luxury home transformation including space design, false ceiling, marble layings, wall panelling, and customized lighting.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop',
    tags: ['Villa Architecture', 'Luxury Living', 'Classical Theme']
  },
  {
    icon: Armchair,
    title: 'Bespoke Handcrafted Furniture',
    desc: 'Custom teakwood sofas, 8-seater carved dining sets, royal 4-poster beds, and executive desks made to your exact dimensions and polish.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop',
    tags: ['Burma Teak', 'Gold Leaf Gilt', 'Custom Dimensions']
  },
  {
    icon: Building2,
    title: 'Commercial & Executive Offices',
    desc: 'High-status boardroom interiors, executive chambers, acoustic wood panelling, and plush leather seating solutions for corporate hubs.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600&auto=format&fit=crop',
    tags: ['Boardrooms', 'Executive Desks', 'Acoustic Panelling']
  },
  {
    icon: RefreshCw,
    title: 'Heritage Estate Restoration',
    desc: 'Restoring antique hardwood furniture, revitalizing classical heritage woodwork, and replacing old polish with rich amber lacquer.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=600&auto=format&fit=crop',
    tags: ['Antiques', 'Wood Restoration', 'Lacquer Polish']
  },
  {
    icon: Compass,
    title: '3D Architectural & Lighting Renders',
    desc: 'Photorealistic 3D interior renders and architectural lighting layout before a single piece of wood is cut or painted.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop',
    tags: ['3D Walkthrough', 'Lighting Design', 'Space Planning']
  },
  {
    icon: Box,
    title: 'Modular Kitchen & Palace Wardrobes',
    desc: 'Solid hardwood modular kitchens with soft-close Blum hardware, secret brass safes, and velvet-lined luxury drawers.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop',
    tags: ['Hardwood Modular', 'Soft-close', 'Velvet Storage']
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-classical-card/60 relative border-t border-classical-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-classical-gold font-semibold">
            <span className="w-8 h-[1px] bg-classical-gold" />
            <span>OUR ARCHITECTURAL EXPERTISE</span>
            <span className="w-8 h-[1px] bg-classical-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-classical-cream">
            Signature Interior Services & <span className="gold-text-gradient italic">Craftsmanship</span>
          </h2>
          <p className="text-classical-creamMuted text-sm sm:text-base font-light">
            Whether you require a single hand-carved mahogany sofa or a full turnkey villa design, Sharma Interior Designer brings 28+ years of uncompromised mastery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <div
                key={idx}
                className="group rounded-lg bg-classical-card border border-classical-border hover:border-classical-gold/70 overflow-hidden transition-all duration-300 hover:shadow-gold-glow flex flex-col justify-between"
              >
                <div>
                  {/* Service Image with Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={srv.image}
                      alt={`${srv.title} - Interior Architecture Service by Satya Narayan Sharma`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-classical-card via-black/40 to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4 p-2.5 rounded-md bg-classical-bg/90 border border-classical-gold/40 text-classical-gold z-10">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="p-6 space-y-3">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {srv.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-classical-bg text-classical-gold border border-classical-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-serif text-xl font-bold text-classical-cream group-hover:text-classical-gold transition-colors">
                      {srv.title}
                    </h3>

                    <p className="text-xs text-classical-creamMuted leading-relaxed font-light">
                      {srv.desc}
                    </p>
                  </div>
                </div>

                {/* Inquiry CTA */}
                <div className="px-6 pb-6 pt-2">
                  <a
                    href={getWhatsAppLink(`Hello Sharma Interior Designer, I would like to inquire about your ${srv.title} service.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-classical-cream bg-classical-bg border border-classical-border group-hover:border-classical-gold group-hover:text-classical-gold rounded transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-classical-gold" />
                    <span>Inquire About Service</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
