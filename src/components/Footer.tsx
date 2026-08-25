'use client';

import Image from 'next/image';
import { Sparkles, Phone, MessageSquare, MapPin, ArrowUp } from 'lucide-react';
import { PHONE_NUMBER, getWhatsAppLink } from '@/data/furnitureData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-classical-cream border-t border-classical-gold/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border border-classical-gold overflow-hidden bg-classical-mahogany flex-shrink-0 relative">
                <Image
                  src="/logo.jpg"
                  alt="Sharma Interior Designers Logo - Lead Architect Satya Narayan Sharma"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-classical-cream">
                SHARMA
              </span>
            </div>
            <p className="text-xs text-classical-creamMuted font-light leading-relaxed">
              Led by Principal Architect <strong>Satya Narayan Sharma</strong> with 28+ Years of excellence in classical teakwood furniture manufacturing, luxury modular kitchens, and turnkey villa architecture.
            </p>
            <div className="pt-2">
              <span className="text-[10px] text-classical-gold uppercase tracking-widest block font-semibold">
                Direct Contact Phone
              </span>
              <a href={`tel:${PHONE_NUMBER}`} className="font-serif text-lg font-bold text-classical-cream hover:text-classical-gold transition-colors">
                +91 {PHONE_NUMBER}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-classical-gold mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-classical-creamMuted">
              <li><a href="#architect" className="hover:text-classical-gold transition-colors text-classical-gold font-medium">Principal Architect</a></li>
              <li><a href="#catalog" className="hover:text-classical-gold transition-colors">Furniture Catalog</a></li>
              <li><a href="#kitchen-almirah" className="hover:text-classical-gold transition-colors">Kitchen & Almirahs</a></li>
              <li><a href="#customizer" className="hover:text-classical-gold transition-colors">3D Customizer</a></li>
              <li><a href="#services" className="hover:text-classical-gold transition-colors">Interior Services</a></li>
              <li><a href="#portfolio" className="hover:text-classical-gold transition-colors">Project Portfolio</a></li>
              <li><a href="#estimator" className="hover:text-classical-gold transition-colors">Budget Calculator</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-classical-gold mb-4">
              Furniture Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-classical-creamMuted">
              <li><a href="#catalog" className="hover:text-classical-gold transition-colors">Maharaja Sofa Sets</a></li>
              <li><a href="#catalog" className="hover:text-classical-gold transition-colors">Emperor Dining Suites</a></li>
              <li><a href="#catalog" className="hover:text-classical-gold transition-colors">Victoria 4-Poster Beds</a></li>
              <li><a href="#catalog" className="hover:text-classical-gold transition-colors">Executive Writing Desks</a></li>
              <li><a href="#catalog" className="hover:text-classical-gold transition-colors">Hand-Carved Accents</a></li>
            </ul>
          </div>

          {/* WhatsApp Direct Action */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-classical-gold mb-4">
              WhatsApp Support
            </h4>
            <p className="text-xs text-classical-creamMuted font-light">
              Get instant 3D catalogs and custom pricing directly on WhatsApp:
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-glow"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright & Scroll to Top */}
        <div className="mt-16 pt-8 border-t border-classical-border/40 flex flex-col sm:flex-row items-center justify-between text-xs text-classical-creamMuted/70 gap-4">
          <p>© {new Date().getFullYear()} Sharma Interior Designer & Fine Furniture Studio. All rights reserved. Direct Phone: {PHONE_NUMBER}.</p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-classical-card border border-classical-border text-classical-gold hover:border-classical-gold hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
