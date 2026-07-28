'use client';

import { MessageSquare, Compass, Hammer, ShieldCheck, Truck } from 'lucide-react';
import { getWhatsAppLink } from '@/data/furnitureData';

const STEPS = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Consultation & Site Inspection',
    desc: 'Connect with our interior architects via WhatsApp (9801197102) or phone to discuss your vision, space measurements, and budget requirements.'
  },
  {
    step: '02',
    icon: Compass,
    title: '3D Blueprint & Material Selection',
    desc: 'We generate high-definition 3D room renders and provide physical timber polish & fabric swatches for your approval.'
  },
  {
    step: '03',
    icon: Hammer,
    title: 'Artisan Hardwood Crafting',
    desc: 'Our master woodsmiths hand-carve seasoned Burma Teakwood in our dedicated workshops using time-honored joinery.'
  },
  {
    step: '04',
    icon: ShieldCheck,
    title: 'Quality Audit & Anti-Termite Lacquer',
    desc: 'Every piece undergoes multi-stage sanding, anti-termite treatment, and gold leaf gilt polish finishing under strict inspection.'
  },
  {
    step: '05',
    icon: Truck,
    title: 'White-Glove Delivery & Installation',
    desc: 'Our specialized team handles safe transport, white-glove placement, wall panelling mounting, and final room styling.'
  }
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-24 bg-classical-bg relative border-t border-classical-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-classical-gold font-semibold">
            <Compass className="w-4 h-4 text-classical-gold" />
            <span>5-STEP MASTERCLASS JOURNEY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-classical-cream">
            Our Turnkey <span className="gold-text-gradient italic">Crafting Process</span>
          </h2>
          <p className="text-classical-creamMuted text-sm sm:text-base font-light">
            From initial WhatsApp consultation to final white-glove installation, experience seamless execution backed by 28+ years of expertise.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {STEPS.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div
                key={idx}
                className="bg-classical-card p-6 rounded-xl border border-classical-border hover:border-classical-gold/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-gold-glow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-bold text-classical-gold/40 group-hover:text-classical-gold transition-colors">
                      {s.step}
                    </span>
                    <div className="p-2.5 rounded-lg bg-classical-bg border border-classical-border text-classical-gold">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-classical-cream mb-2 group-hover:text-classical-gold transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs text-classical-creamMuted leading-relaxed font-light">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <a
            href={getWhatsAppLink("Hello Sharma Interior Designer, I want to initiate Step 1 and schedule a consultation for my space.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-glow hover:scale-105 transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-black" />
            <span>Start Step 1: Inquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
