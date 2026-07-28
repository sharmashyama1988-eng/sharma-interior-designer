'use client';

import { Award, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

const BADGES = [
  { title: '28+ Years Heritage', desc: 'Established Master Woodcrafters since 1998' },
  { title: 'ISO 9001 Certified', desc: 'Certified Timber & Quality Standards' },
  { title: '100% Teak Guarantee', desc: 'Grade-A Kiln Dried Burma Teak Certification' },
  { title: '10-Year Warranty', desc: 'Comprehensive Hardwood Structural Protection' },
];

export default function AwardsPress() {
  return (
    <section className="py-16 bg-classical-bg relative border-t border-classical-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {BADGES.map((b, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-classical-card/60 border border-classical-border hover:border-classical-gold/50 transition-all flex flex-col items-center justify-center space-y-2 group"
            >
              <div className="w-12 h-12 rounded-full bg-classical-mahogany/80 border border-classical-gold flex items-center justify-center group-hover:shadow-gold-glow transition-all">
                <Award className="w-6 h-6 text-classical-gold" />
              </div>
              <h3 className="font-serif font-bold text-classical-cream text-base">
                {b.title}
              </h3>
              <p className="text-[11px] text-classical-creamMuted font-light">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
