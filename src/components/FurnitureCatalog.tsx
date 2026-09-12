'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Search, Star, Eye, MessageSquare, Phone, X, Sparkles, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { CATALOG_CATEGORIES, FURNITURE_CATALOG, FurnitureItem, getWhatsAppLink, PHONE_NUMBER } from '@/data/furnitureData';

export default function FurnitureCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<FurnitureItem | null>(null);
  const [sortOption, setSortOption] = useState<'featured' | 'price_asc' | 'price_desc' | 'rating'>('featured');

  const categories = CATALOG_CATEGORIES;

  // Filter items
  const filteredItems = FURNITURE_CATALOG.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.woodType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortOption === 'price_asc') return a.price - b.price;
    if (sortOption === 'price_desc') return b.price - a.price;
    if (sortOption === 'rating') return b.rating - a.rating;
    // default 'featured':
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  // Modal navigation
  const currentIndex = selectedItem ? filteredItems.findIndex((item) => item.id === selectedItem.id) : -1;

  const showPrevItem = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1]);
    } else if (filteredItems.length > 0) {
      setSelectedItem(filteredItems[filteredItems.length - 1]);
    }
  }, [currentIndex, filteredItems]);

  const showNextItem = useCallback(() => {
    if (currentIndex >= 0 && currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1]);
    } else if (filteredItems.length > 0) {
      setSelectedItem(filteredItems[0]);
    }
  }, [currentIndex, filteredItems]);

  // Handle escape key and body scroll lock
  useEffect(() => {
    if (!selectedItem) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
      if (e.key === 'ArrowLeft') showPrevItem();
      if (e.key === 'ArrowRight') showNextItem();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedItem, showPrevItem, showNextItem]);

  return (
    <section id="catalog" className="py-24 bg-classical-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-classical-gold font-semibold mb-2">
              <Sparkles className="w-4 h-4 text-classical-gold" />
              <span>HANDCRAFTED FURNITURE GALLERY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-classical-cream">
              Classical Furniture <span className="gold-text-gradient italic">Collection</span>
            </h2>
          </div>

          {/* Search Bar & Sort Dropdown */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search teak, dining, bed..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded bg-classical-card border border-classical-border text-classical-cream text-xs focus:outline-none focus:border-classical-gold transition-colors placeholder:text-classical-creamMuted/50"
              />
              <Search className="absolute left-3 top-3 w-4 h-4 text-classical-gold" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-xs text-classical-creamMuted hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Select */}
            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as any)}
                aria-label="Sort collection by"
                className="w-full sm:w-auto appearance-none bg-classical-card border border-classical-border text-classical-cream text-xs px-4 py-2.5 pr-8 rounded focus:outline-none focus:border-classical-gold cursor-pointer"
              >
                <option value="featured">Featured / Signature</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <SlidersHorizontal className="absolute right-2.5 top-3 w-3.5 h-3.5 text-classical-gold pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Category Navigation Pills & Result Count */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-gold-gradient text-black shadow-gold-sm'
                    : 'bg-classical-card text-classical-creamMuted border border-classical-border hover:border-classical-gold/60 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-classical-creamMuted font-light whitespace-nowrap self-start sm:self-auto">
            Showing <strong className="text-classical-gold font-semibold">{filteredItems.length}</strong> masterworks
          </span>
        </div>

        {/* Catalog Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-classical-card rounded-lg border border-classical-border p-8">
            <p className="text-classical-creamMuted font-light">No furniture designs matched your search &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-classical-gold underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-classical-card rounded-lg border border-classical-border hover:border-classical-gold/80 overflow-hidden transition-all duration-300 hover:shadow-gold-glow flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-black/40">
                    <Image
                      src={item.image}
                      alt={`${item.name} - Handcrafted furniture design by Principal Architect Satya Narayan Sharma`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-classical-card via-transparent to-transparent pointer-events-none" />

                    {/* Featured / Customizable Badge */}
                    {item.featured && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase font-bold tracking-widest bg-gold-gradient text-black rounded">
                        Signature Piece
                      </span>
                    )}

                    {/* Quick View Button Overlay */}
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-black/70 border border-classical-gold text-classical-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110 shadow-gold-glow"
                      aria-label={`Quick view ${item.name}`}
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Item Specs */}
                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-classical-gold uppercase tracking-wider">
                        {item.woodType}
                      </span>
                      <div className="flex items-center gap-1 text-classical-gold text-xs">
                        <Star className="w-3.5 h-3.5 fill-classical-gold" />
                        <span>{item.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    <h3 className="font-serif font-bold text-base text-classical-cream line-clamp-1 group-hover:text-classical-gold transition-colors">
                      {item.name}
                    </h3>

                    {/* Dimensions & Config Badge */}
                    <div className="bg-classical-bg/80 border border-classical-border/60 rounded px-2.5 py-1.5 text-[11px] text-classical-creamMuted flex flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-classical-cream">Size:</span>
                        <span className="text-classical-gold truncate max-w-[170px]">{item.dimensions}</span>
                      </div>
                      {item.configuration && (
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-classical-creamMuted/80">Set:</span>
                          <span className="truncate max-w-[170px] text-classical-creamMuted">{item.configuration}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-classical-creamMuted line-clamp-2 font-light">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Price & WhatsApp Action */}
                <div className="p-5 pt-0 space-y-3">
                  <div className="flex items-baseline justify-between pt-3 border-t border-classical-border/40">
                    <div>
                      <span className="text-xs text-classical-creamMuted block text-[10px]">Factory-Direct Price</span>
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-lg font-bold text-classical-cream">
                          ₹{item.price.toLocaleString('en-IN')}
                        </span>
                        {item.originalPrice && (
                          <span className="text-xs text-classical-creamMuted/60 line-through">
                            ₹{item.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedItem(item)}
                      className="text-xs text-classical-gold underline hover:text-white"
                    >
                      Full Specs
                    </button>
                  </div>

                  <a
                    href={getWhatsAppLink(`Hello Sharma Interior Designer, I want to inquire about '${item.name}' (Size: ${item.dimensions}, Price: ₹${item.price.toLocaleString('en-IN')}). Please share customization details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-sm hover:opacity-95 transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-black" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick View Modal */}
        {selectedItem && (
          <div 
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedItem(null);
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0c0b0a]/90 backdrop-blur-md animate-fadeIn overflow-y-auto"
          >
            {/* Modal Previous Arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); showPrevItem(); }}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-classical-card/90 text-classical-gold hover:bg-gold-gradient hover:text-black border border-classical-gold/50 shadow-gold-glow transition-all"
              aria-label="Previous Furniture Item"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Modal Next Arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); showNextItem(); }}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-classical-card/90 text-classical-gold hover:bg-gold-gradient hover:text-black border border-classical-gold/50 shadow-gold-glow transition-all"
              aria-label="Next Furniture Item"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="relative w-full max-w-3xl bg-classical-card border border-classical-gold/60 rounded-2xl overflow-hidden shadow-classical-deep my-8">
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#121110]/80 text-classical-gold hover:text-white border border-classical-gold/40 transition-colors shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image side */}
                <div className="h-72 md:h-auto min-h-[360px] relative bg-classical-bgAlt">
                  <Image
                    src={selectedItem.image}
                    alt={`${selectedItem.name} - Detailed architectural furniture view by Satya Narayan Sharma`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-classical-card via-transparent to-transparent md:hidden pointer-events-none" />

                  {/* Item index pill */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#121110]/80 border border-classical-gold/40 text-[11px] text-classical-gold font-bold backdrop-blur-md">
                    Item {currentIndex + 1} of {filteredItems.length}
                  </div>
                </div>

                {/* Specs side */}
                <div className="p-6 md:p-8 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] uppercase tracking-widest text-classical-gold font-bold bg-classical-bg/80 px-2.5 py-1 rounded border border-classical-gold/30">
                        {selectedItem.woodType}
                      </span>
                      {selectedItem.featured && (
                        <span className="text-[10px] uppercase tracking-wider text-black font-bold bg-gold-gradient px-2 py-0.5 rounded">
                          Signature Piece
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-classical-cream leading-snug">
                      {selectedItem.name}
                    </h3>

                    <p className="text-xs text-classical-creamMuted leading-relaxed font-light">
                      {selectedItem.description}
                    </p>

                    {/* Detailed Specifications Box */}
                    <div className="space-y-2 pt-3 border-t border-classical-border/60 text-xs bg-classical-bg/50 p-3 rounded-lg border border-classical-border/40">
                      <div className="flex justify-between gap-2">
                        <span className="text-classical-creamMuted font-medium">Exact Dimensions:</span>
                        <span className="text-classical-gold font-bold text-right">{selectedItem.dimensions}</span>
                      </div>
                      {selectedItem.configuration && (
                        <div className="flex justify-between gap-2">
                          <span className="text-classical-creamMuted font-medium">Configuration:</span>
                          <span className="text-classical-cream font-medium text-right">{selectedItem.configuration}</span>
                        </div>
                      )}
                      {selectedItem.seatingCapacity && (
                        <div className="flex justify-between gap-2">
                          <span className="text-classical-creamMuted font-medium">Capacity:</span>
                          <span className="text-classical-cream font-medium text-right">{selectedItem.seatingCapacity}</span>
                        </div>
                      )}
                      <div className="flex justify-between gap-2">
                        <span className="text-classical-creamMuted font-medium">Finish &amp; Polish:</span>
                        <span className="text-classical-gold font-medium text-right">{selectedItem.finish}</span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span className="text-classical-creamMuted font-medium">Warranty:</span>
                        <span className="text-emerald-400 font-medium text-right">{selectedItem.warranty}</span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span className="text-classical-creamMuted font-medium">Delivery Timeline:</span>
                        <span className="text-classical-cream font-medium text-right">{selectedItem.leadTime}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-classical-creamMuted block">Indicative Factory Price</span>
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-2xl font-bold text-classical-gold">
                            ₹{selectedItem.price.toLocaleString('en-IN')}
                          </span>
                          {selectedItem.originalPrice && (
                            <span className="text-xs text-classical-creamMuted/60 line-through">
                              ₹{selectedItem.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-500/40 px-2 py-1 rounded">
                        Factory-Direct Pricing
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-3 border-t border-classical-border/60">
                    <a
                      href={getWhatsAppLink(`Hello Sharma Interior Designer, I am interested in customizing '${selectedItem.name}' (Dimensions: ${selectedItem.dimensions}, Configuration: ${selectedItem.configuration}, Wood: ${selectedItem.woodType}, Price: ₹${selectedItem.price.toLocaleString('en-IN')}). Please share the catalog and quote.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-glow hover:opacity-95 transition-all"
                    >
                      <MessageSquare className="w-4 h-4 fill-black" />
                      <span>Inquire Now on WhatsApp</span>
                    </a>

                    <div className="flex gap-2">
                      <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold text-classical-cream bg-classical-bg border border-classical-border hover:border-classical-gold rounded transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-classical-gold" />
                        <span>Call {PHONE_NUMBER}</span>
                      </a>

                      {/* Mobile prev/next buttons */}
                      <div className="flex md:hidden gap-1">
                        <button
                          onClick={showPrevItem}
                          className="px-3 py-2 rounded bg-classical-bg border border-classical-border text-classical-gold"
                          aria-label="Previous"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={showNextItem}
                          className="px-3 py-2 rounded bg-classical-bg border border-classical-border text-classical-gold"
                          aria-label="Next"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
