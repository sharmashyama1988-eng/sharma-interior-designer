'use client';

import Image from 'next/image';
import { Award, Compass, MessageSquare, Phone, CheckCircle2 } from 'lucide-react';
import { PHONE_NUMBER, getWhatsAppLink } from '@/data/furnitureData';

export default function ArchitectBio() {
  const specializations = [
    {
      title: 'Solid Burma Teakwood Architecture',
      desc: 'Precision mortise-and-tenon joinery and 24K gold leaf guilding crafted for multi-generational durability.'
    },
    {
      title: 'High-Tech Modular Kitchens',
      desc: 'German Blum servo-drive motorized hardware, waterproof marine ply, and Italian quartz countertops.'
    },
    {
      title: 'Bespoke Palace Almirahs & Walk-In Closets',
      desc: 'Fluted glass sliding systems, velvet jewelry vaults, and concealed biometrics.'
    },
    {
      title: 'Turnkey Luxury Villa Architecture',
      desc: 'End-to-end space planning, 3D architectural rendering, false ceiling design, and white-glove installation.'
    }
  ];

  return (
    <section id="architect" className="py-24 scroll-mt-28 bg-classical-bg relative overflow-hidden border-t border-classical-border/40">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-classical-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-classical-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-2xl overflow-hidden border border-classical-gold/40 shadow-classical-deep group bg-classical-card">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                <Image
                  src="/satya-narayan-sharma.jpg"
                  alt="Principal Architect Satya Narayan Sharma - Lead Interior Designer and Master Craftsman"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Experience Tag */}
                <div className="absolute top-4 left-4 bg-gold-gradient text-black px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1 z-10">
                  <Award className="w-3.5 h-3.5 fill-black" />
                  <span>28+ Years Legacy</span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-black/80 backdrop-blur-md border border-classical-gold/30 shadow-lg z-10">
                  <div className="text-[10px] uppercase tracking-widest text-classical-gold font-bold">Principal Architect & Founder</div>
                  <h3 className="font-serif text-xl font-bold text-white leading-tight mt-0.5">Satya Narayan Sharma</h3>
                  <p className="text-[11px] text-gray-300 font-light">Lead Architectural Designer | Master Woodcraft Visionary</p>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 mt-4 max-w-md mx-auto">
              <div className="bg-classical-card p-3 rounded-lg border border-classical-border text-center">
                <span className="font-serif text-xl font-bold text-classical-gold block">500+</span>
                <span className="text-[10px] uppercase tracking-wider text-classical-creamMuted">Villas & Homes</span>
              </div>
              <div className="bg-classical-card p-3 rounded-lg border border-classical-border text-center">
                <span className="font-serif text-xl font-bold text-classical-gold block">100%</span>
                <span className="text-[10px] uppercase tracking-wider text-classical-creamMuted">Burma Teak</span>
              </div>
              <div className="bg-classical-card p-3 rounded-lg border border-classical-border text-center">
                <span className="font-serif text-xl font-bold text-classical-gold block">10 Yrs</span>
                <span className="text-[10px] uppercase tracking-wider text-classical-creamMuted">Warranty</span>
              </div>
            </div>
          </div>

          {/* Biography Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-classical-gold font-semibold">
              <Compass className="w-4 h-4 text-classical-gold" />
              <span>THE ARCHITECTURAL VISIONARY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-classical-cream leading-tight">
              Crafted Under the Vision of <br />
              <span className="gold-text-gradient italic">Satya Narayan Sharma</span>
            </h2>

            {/* Philosophy Quote */}
            <blockquote className="p-4 border-l-2 border-classical-gold bg-classical-card/60 rounded-r-lg italic text-classical-cream text-sm sm:text-base font-serif leading-relaxed">
              &ldquo;Interior architecture is not merely about styling walls; it is about sculpting timeless spaces that honor durability, generational heritage, and uncompromised royal elegance.&rdquo;
            </blockquote>

            <p className="text-classical-creamMuted text-sm sm:text-base leading-relaxed font-light">
              As the founder and Principal Architect of <strong className="text-classical-cream">Sharma Interior Designers</strong>, <strong>Satya Narayan Sharma</strong> has spent over 28 years mastering classical hardwood sculpting, luxury modular kitchen engineering, and comprehensive villa architecture. Every blueprint and bespoke woodwork unit is personally conceptualized and curated to meet the highest standards of architectural excellence.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {specializations.map((spec, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3.5 rounded bg-classical-card border border-classical-border hover:border-classical-gold/50 transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-classical-gold flex-shrink-0" />
                    <h4 className="font-serif text-xs font-bold text-classical-cream uppercase tracking-wide">
                      {spec.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-classical-creamMuted leading-normal font-light pl-6">
                    {spec.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Architect CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-classical-border/50">
              <a
                href={getWhatsAppLink("Hello Architect Satya Narayan Sharma, I would like to book a luxury interior design consultation for my property.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-glow hover:opacity-95 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Consult Architect on WhatsApp</span>
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-classical-cream bg-classical-card border border-classical-border hover:border-classical-gold rounded transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-classical-gold" />
                <span>Direct Line: +91 {PHONE_NUMBER}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
