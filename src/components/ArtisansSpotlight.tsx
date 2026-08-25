'use client';

import Image from 'next/image';
import { Award, Hammer, Users, Sparkles } from 'lucide-react';

const ARTISANS = [
  {
    name: 'Satya Narayan Sharma',
    role: 'Principal Architect & Founder',
    experience: '28+ Years Experience',
    bio: 'Pioneer of classical teakwood carving, modular kitchen engineering, and luxury interior architecture in Bihar & NCR. Oversees all custom bespoke projects.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Shankar Vishwakarma',
    role: 'Head Carving Craftsman',
    experience: '22 Years Experience',
    bio: 'Specialist in Baroque scrollwork, floral motifs, and 24K gold leaf gilt application for high-end dining table pedestals.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Priya Sharma',
    role: 'Senior Interior Architect',
    experience: '12 Years Experience',
    bio: 'Expert in 3D spatial planning, architectural lighting integration, and luxury villa color palette harmonies.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop'
  }
];

export default function ArtisansSpotlight() {
  return (
    <section className="py-24 bg-classical-card/40 relative border-t border-classical-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-classical-gold font-semibold">
            <Users className="w-4 h-4 text-classical-gold" />
            <span>THE MASTER CRAFTSMEN</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-classical-cream">
            Meet the Artisans Behind <span className="gold-text-gradient italic">The Legacy</span>
          </h2>
          <p className="text-classical-creamMuted text-sm sm:text-base font-light">
            Our team of seasoned woodsmiths, interior architects, and polish masters bring decades of dedicated mastery to your home.
          </p>
        </div>

        {/* Artisans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTISANS.map((art, idx) => (
            <div
              key={idx}
              className="bg-classical-card rounded-xl border border-classical-border hover:border-classical-gold/60 overflow-hidden transition-all duration-300 hover:shadow-gold-glow flex flex-col justify-between"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={art.image}
                  alt={`${art.name} - ${art.role} at Sharma Interior Designers`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-classical-card via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 text-[10px] uppercase font-bold tracking-widest bg-gold-gradient text-black rounded">
                  {art.experience}
                </span>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="font-serif text-xl font-bold text-classical-cream">
                  {art.name}
                </h3>
                <span className="text-xs uppercase tracking-wider text-classical-gold font-semibold block">
                  {art.role}
                </span>
                <p className="text-xs text-classical-creamMuted leading-relaxed font-light pt-2">
                  {art.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
