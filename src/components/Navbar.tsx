'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Sparkles } from 'lucide-react';
import { PHONE_NUMBER, getWhatsAppLink } from '@/data/furnitureData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#catalog' },
    { name: '3D Customizer', href: '#customizer' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Cost Calculator', href: '#estimator' },
    { name: 'Our Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md py-3 border-b border-classical-border/80 shadow-classical-deep'
          : 'bg-gradient-to-b from-white/90 via-white/50 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full border-2 border-classical-gold overflow-hidden bg-classical-card flex-shrink-0 shadow-md group-hover:shadow-gold-glow transition-all">
            <img
              src="/logo.jpg"
              alt="Sharma Interior Designer Logo"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-classical-mahogany block leading-none">
              SHARMA
            </span>
            <span className="text-[10px] tracking-[0.25em] text-classical-gold font-bold uppercase block mt-1">
              Interior & Fine Furniture
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-classical-mahogany hover:text-classical-gold transition-colors font-bold hover:scale-105 transform"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Contact CTA & WhatsApp Button */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Direct Phone Link */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-classical-mahogany bg-white border border-classical-border hover:border-classical-gold rounded shadow-sm hover:text-classical-gold transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-classical-gold" />
            <span>{PHONE_NUMBER}</span>
          </a>

          {/* WhatsApp Inquire Button */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white bg-classical-mahogany hover:bg-classical-mahoganyLight rounded shadow-md hover:shadow-gold-glow transition-all transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Inquire Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-classical-mahogany hover:text-classical-gold focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-classical-border/80 px-4 pt-4 pb-6 mt-2 backdrop-blur-xl animate-fadeIn shadow-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-wider uppercase font-bold text-classical-mahogany py-2 border-b border-classical-border/40 hover:text-classical-gold"
              >
                {link.name}
              </a>
            ))}

            <div className="flex flex-col gap-3 mt-4 pt-2">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-classical-mahogany bg-classical-bg border border-classical-border rounded"
              >
                <Phone className="w-4 h-4 text-classical-gold" />
                <span>Call Us: {PHONE_NUMBER}</span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 text-sm font-bold uppercase tracking-wider text-white bg-classical-mahogany rounded shadow-lg"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
