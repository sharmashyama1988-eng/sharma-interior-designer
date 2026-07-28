'use client';

import { BookOpen, ArrowRight, MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '@/data/furnitureData';

const ARTICLES = [
  {
    title: 'The Art of Identifying Authentic Burma Teakwood vs Inferior Timber',
    category: 'Timber Guide',
    date: 'July 2026',
    readTime: '4 min read',
    desc: 'Learn how to inspect wood grain density, natural oil content, and kiln-drying certificates to ensure your furniture lasts a century.',
    image: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Classical vs Neo-Classical Interiors: How to Choose for Your Villa',
    category: 'Style Guide',
    date: 'June 2026',
    readTime: '6 min read',
    desc: 'A comprehensive guide on balancing heavy hand-carved furniture with modern ambient lighting and soft velvet textures.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Preserving Gold Leaf Gilt Polish & Hardwood Furniture Lifespan',
    category: 'Maintenance',
    date: 'May 2026',
    readTime: '3 min read',
    desc: 'Essential care tips from our master polish craftsmen on maintaining royal shine without stripping natural wood oils.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=600&auto=format&fit=crop'
  }
];

export default function JournalSection() {
  return (
    <section id="journal" className="py-24 bg-classical-card/40 relative border-t border-classical-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-classical-gold font-semibold">
            <BookOpen className="w-4 h-4 text-classical-gold" />
            <span>DESIGN JOURNAL & GUIDES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-classical-cream">
            Classical Woodcraft & <span className="gold-text-gradient italic">Design Journal</span>
          </h2>
          <p className="text-classical-creamMuted text-sm sm:text-base font-light">
            Insights, timber selection guides, and architectural trends curated by our chief wood architects.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((art, idx) => (
            <article
              key={idx}
              className="bg-classical-card rounded-xl border border-classical-border hover:border-classical-gold/60 overflow-hidden transition-all duration-300 shadow-classical-deep flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-classical-card via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-2.5 py-1 text-[10px] uppercase font-bold tracking-widest bg-classical-bg/90 text-classical-gold border border-classical-gold/30 rounded">
                    {art.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-classical-creamMuted">
                    <span>{art.date}</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-classical-cream group-hover:text-classical-gold transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-classical-creamMuted leading-relaxed font-light">
                    {art.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={getWhatsAppLink(`Hello Sharma Interior Designer, I read your article '${art.title}' and would like to ask some questions.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-classical-gold hover:text-white transition-colors"
                >
                  <span>Discuss Guide on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
