'use client';

import { Award, Compass, ShieldCheck, Hammer, MessageSquare, Phone } from 'lucide-react';
import { PHONE_NUMBER, getWhatsAppLink } from '@/data/furnitureData';

export default function HeritageAbout() {
  const highlights = [
    {
      icon: Hammer,
      title: 'Master Woodcraft Artisanry',
      desc: 'Every sofa, bed, and dining chair is hand-carved by master woodsmiths using traditional mortise-and-tenon joinery.'
    },
    {
      icon: Compass,
      title: 'Turnkey Architectural Design',
      desc: 'From initial 3D space planning to custom false ceilings, marble floor layings, and wall panelling.'
    },
    {
      icon: ShieldCheck,
      title: '100% Kiln-Dried Timber',
      desc: 'We strictly use seasoned Burma Teakwood & Rosewood with anti-termite treatment for lifelong durability.'
    },
    {
      icon: Award,
      title: '28+ Years Excellence',
      desc: 'Trusted by over 500+ homeowners, luxury villa owners, and corporate leaders across Bihar & NCR.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-classical-bg relative overflow-hidden border-t border-classical-border/40">
      {/* Background Decorative Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-classical-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden border border-classical-gold/30 shadow-classical-deep group">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop"
                  alt="Classical Hand Carved Teak Sofa"
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-serif text-classical-gold italic">
                  Royal Living Room Suite
                </span>
              </div>
              <div className="bg-classical-card p-6 rounded-lg border border-classical-border text-center">
                <span className="font-serif text-4xl font-bold text-classical-gold block mb-1">28+</span>
                <span className="text-xs uppercase tracking-widest text-classical-creamMuted">Years of Heritage</span>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="bg-classical-card p-6 rounded-lg border border-classical-border text-center">
                <span className="font-serif text-4xl font-bold text-classical-gold block mb-1">500+</span>
                <span className="text-xs uppercase tracking-widest text-classical-creamMuted">Bespoke Projects</span>
              </div>
              <div className="relative rounded-lg overflow-hidden border border-classical-gold/30 shadow-classical-deep group">
                <img
                  src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop"
                  alt="Classical Dining Suite Craftsmanship"
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-serif text-classical-gold italic">
                  Emperor Carved Dining Table
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Features */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-classical-gold font-semibold">
              <span className="w-8 h-[1px] bg-classical-gold" />
              <span>THE SHARMA LEGACY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-classical-cream leading-tight">
              28+ Years of Crafting <span className="gold-text-gradient italic">Royal Living Spaces</span>
            </h2>

            <p className="text-classical-creamMuted leading-relaxed text-sm sm:text-base font-light">
              Founded with a passion for timeless woodwork and architectural grandiosity, <strong className="text-classical-cream">Sharma Interior Designer</strong> has grown into Bihar&apos;s premier luxury furniture house and interior design studio. We specialize in classical, royal, and neo-classical designs that honor traditional hand-carving while blending seamless modern comfort.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded bg-classical-card border border-classical-border hover:border-classical-gold/60 transition-all"
                  >
                    <IconComp className="w-6 h-6 text-classical-gold mb-2" />
                    <h3 className="font-serif font-semibold text-classical-cream text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-classical-creamMuted leading-normal font-light">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-classical-border/50">
              <a
                href={getWhatsAppLink("Hello Sharma Interior Designer, I would like to schedule an interior design consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-glow hover:opacity-95 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Consult on WhatsApp</span>
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-classical-cream bg-classical-card border border-classical-border hover:border-classical-gold rounded"
              >
                <Phone className="w-3.5 h-3.5 text-classical-gold" />
                <span>Call {PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
