'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MessageSquare, Menu, X, Sparkles, ArrowLeft, Layers } from 'lucide-react';
import { PHONE_NUMBER, getWhatsAppLink } from '@/data/furnitureData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isCatalogPage = pathname?.startsWith('/catloug') || 
                        pathname?.startsWith('/catalog') || 
                        pathname?.startsWith('/catloge') || 
                        pathname?.startsWith('/catalogue');

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

  const homeNavLinks = [
    { name: 'Collections / Catalog', href: '/catloug', isCatalogHighlight: true },
    { name: 'Architect', href: '/#architect', isCatalogHighlight: false },
    { name: 'Services', href: '/#services', isCatalogHighlight: false },
    { name: 'Portfolio', href: '/#portfolio', isCatalogHighlight: false },
    { name: 'Cost Calculator', href: '/#estimator', isCatalogHighlight: false },
    { name: 'Reviews', href: '/#testimonials', isCatalogHighlight: false },
    { name: 'Contact', href: '/#contact', isCatalogHighlight: false },
  ];

  const catalogNavLinks = [
    { name: '← Back to Main Site', href: '/', isBackLink: true },
    { name: 'Furniture Gallery', href: '#catalog', isBackLink: false },
    { name: 'Kitchen & Almirah', href: '#kitchen-almirah', isBackLink: false },
    { name: 'Mica & Doors', href: '#mica-selector', isBackLink: false },
    { name: '3D Customizer', href: '#customizer', isBackLink: false },
    { name: 'Architect', href: '/#architect', isBackLink: false },
    { name: 'Contact', href: '/#contact', isBackLink: false },
  ];

  const activeNavLinks = isCatalogPage ? catalogNavLinks : homeNavLinks;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-classical-bg/95 backdrop-blur-md py-3 border-b border-classical-gold/30 shadow-classical-deep'
          : 'bg-gradient-to-b from-black/85 via-black/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full border border-classical-gold overflow-hidden bg-classical-mahogany/80 group-hover:shadow-gold-glow transition-all flex-shrink-0 relative">
            <Image
              src="/logo.jpg"
              alt="Sharma Interior Designers Logo - Lead Architect Satya Narayan Sharma"
              fill
              sizes="44px"
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              priority
            />
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-classical-cream block leading-none">
              SHARMA
            </span>
            <span className="text-[10px] tracking-[0.25em] text-classical-gold uppercase block mt-1">
              Interior &amp; Fine Furniture
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 flex-shrink-0">
          {activeNavLinks.map((link) => {
            if ('isCatalogHighlight' in link && link.isCatalogHighlight) {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 rounded-full bg-classical-card border border-classical-gold/70 text-classical-gold hover:bg-gold-gradient hover:text-black text-[11px] 2xl:text-xs uppercase tracking-wider font-bold shadow-gold-sm transition-all transform hover:scale-105 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{link.name}</span>
                </Link>
              );
            }

            if ('isBackLink' in link && link.isBackLink) {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded bg-classical-card/90 border border-classical-gold text-classical-gold hover:bg-classical-gold hover:text-black text-[11px] 2xl:text-xs uppercase tracking-widest font-bold transition-all transform hover:scale-105 flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Main Website</span>
                </Link>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] 2xl:text-xs uppercase tracking-wider transition-colors font-medium hover:scale-105 transform whitespace-nowrap ${
                  link.name === 'Architect'
                    ? 'text-classical-gold font-bold border-b border-classical-gold/60 pb-0.5'
                    : 'text-classical-creamMuted hover:text-classical-gold'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Contact CTA & WhatsApp Button */}
        <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
          {/* Direct Phone Link */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-semibold text-classical-cream bg-classical-card border border-classical-border hover:border-classical-gold rounded shadow-sm hover:text-classical-gold transition-all whitespace-nowrap"
          >
            <Phone className="w-3 h-3 text-classical-gold" />
            <span>{PHONE_NUMBER}</span>
          </a>

          {/* WhatsApp Inquire Button */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-black bg-gold-gradient hover:opacity-95 rounded shadow-gold-sm hover:shadow-gold-glow transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-black" />
            <span>Inquire Now</span>
          </a>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 text-classical-gold hover:text-white focus:outline-none flex-shrink-0"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-classical-card/98 border-b border-classical-gold/30 px-4 pt-4 pb-6 mt-2 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            {activeNavLinks.map((link) => {
              if ('isCatalogHighlight' in link && link.isCatalogHighlight) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded bg-gold-gradient text-black font-bold uppercase text-xs tracking-wider shadow-gold-sm"
                  >
                    <span>{link.name}</span>
                    <Sparkles className="w-4 h-4" />
                  </Link>
                );
              }

              if ('isBackLink' in link && link.isBackLink) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-3 py-2.5 rounded bg-classical-bg border border-classical-gold text-classical-gold font-bold uppercase text-xs tracking-wider"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm tracking-wider uppercase text-classical-cream py-2 border-b border-classical-border/40 hover:text-classical-gold"
                >
                  {link.name}
                </a>
              );
            })}

            <div className="flex flex-col gap-3 mt-4 pt-2">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-classical-cream bg-classical-bg border border-classical-border rounded"
              >
                <Phone className="w-4 h-4 text-classical-gold" />
                <span>Call Us: {PHONE_NUMBER}</span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 text-sm font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-glow"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
