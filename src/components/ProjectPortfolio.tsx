'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Compass, MapPin, Calendar, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { PROJECTS_GALLERY, ProjectItem, getWhatsAppLink } from '@/data/furnitureData';

export default function ProjectPortfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showBefore, setShowBefore] = useState<{ [key: string]: boolean }>({});

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'villas', label: 'Luxury Villas' },
    { id: 'residential', label: 'Penthouses & Apartments' },
    { id: 'commercial', label: 'Corporate Boardrooms' },
    { id: 'restoration', label: 'Heritage Restoration' },
  ];

  const filteredProjects = PROJECTS_GALLERY.filter(
    (p) => activeCategory === 'all' || p.category === activeCategory
  );

  const toggleBeforeAfter = (id: string) => {
    setShowBefore((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="portfolio" className="py-24 bg-classical-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-classical-gold font-semibold mb-2">
              <Compass className="w-4 h-4 text-classical-gold" />
              <span>COMPLETED DESIGN SHOWCASE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-classical-cream">
              Signature Architectural <span className="gold-text-gradient italic">Portfolio</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gold-gradient text-black shadow-gold-sm'
                    : 'bg-classical-card text-classical-creamMuted border border-classical-border hover:border-classical-gold/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isShowingBefore = showBefore[project.id];
            const currentImg = isShowingBefore && project.imageBefore ? project.imageBefore : project.imageAfter;

            return (
              <div
                key={project.id}
                className="bg-classical-card rounded-xl border border-classical-border hover:border-classical-gold/70 overflow-hidden transition-all duration-300 shadow-classical-deep flex flex-col justify-between"
              >
                <div>
                  {/* Image Showcase with Before/After Toggle */}
                  <div className="relative h-72 sm:h-80 overflow-hidden bg-black">
                    <Image
                      src={currentImg}
                      alt={`${project.title} - Architectural Interior Project by Principal Architect Satya Narayan Sharma in ${project.location}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-classical-card via-transparent to-black/40 pointer-events-none" />

                    {/* Category & Location Badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 text-[10px] uppercase tracking-widest font-bold bg-classical-bg/90 border border-classical-gold/40 text-classical-gold rounded">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-1 text-[10px] uppercase tracking-widest font-medium bg-black/60 text-classical-cream rounded flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-classical-gold" />
                        {project.location}
                      </span>
                    </div>

                    {/* Interactive Before / After Toggle Button */}
                    {project.imageBefore && (
                      <button
                        onClick={() => toggleBeforeAfter(project.id)}
                        className="absolute bottom-4 right-4 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-glow hover:scale-105 transition-all"
                      >
                        {isShowingBefore ? 'View After Transformation' : 'Compare Before Site'}
                      </button>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-xs text-classical-creamMuted border-b border-classical-border/40 pb-3">
                      <span>Area: <strong className="text-classical-cream">{project.area}</strong></span>
                      <span>Completed: <strong className="text-classical-gold">{project.completionYear}</strong></span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-classical-cream">
                      {project.title}
                    </h3>

                    <p className="text-xs text-classical-creamMuted leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.highlights.map((h, hIdx) => (
                        <span
                          key={hIdx}
                          className="text-[10px] font-medium text-classical-gold bg-classical-bg px-2.5 py-1 rounded border border-classical-border"
                        >
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* WhatsApp Inquiry CTA */}
                <div className="p-6 pt-0">
                  <a
                    href={getWhatsAppLink(`Hello Sharma Interior Designer, I loved your project '${project.title}' (${project.location}). I would like to inquire about similar interior design work for my space.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-sm hover:opacity-95 transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-black" />
                    <span>Inquire Similar Project on WhatsApp</span>
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
