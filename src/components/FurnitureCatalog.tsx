'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, Star, Eye, MessageSquare, Phone, X, CheckCircle, Sparkles } from 'lucide-react';
import { CATALOG_CATEGORIES, FURNITURE_CATALOG, FurnitureItem, getWhatsAppLink, PHONE_NUMBER } from '@/data/furnitureData';

export default function FurnitureCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<FurnitureItem | null>(null);

  const categories = CATALOG_CATEGORIES;

  const filteredItems = FURNITURE_CATALOG.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.woodType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalog" className="py-24 bg-classical-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-classical-gold font-semibold mb-2">
              <Sparkles className="w-4 h-4 text-classical-gold" />
              <span>HANDCRAFTED FURNITURE GALLERY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-classical-cream">
              Classical Furniture <span className="gold-text-gradient italic">Collection</span>
            </h2>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search teak, dining, bed..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded bg-classical-card border border-classical-border text-classical-cream text-xs focus:outline-none focus:border-classical-gold transition-colors placeholder:text-classical-creamMuted/50"
            />
            <Search className="absolute left-3 top-3 w-4 h-4 text-classical-gold" />
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded text-xs uppercase tracking-wider font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-gold-gradient text-black shadow-gold-sm'
                  : 'bg-classical-card text-classical-creamMuted border border-classical-border hover:border-classical-gold/60 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
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

                    <p className="text-xs text-classical-creamMuted line-clamp-2 font-light">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Price & WhatsApp Action */}
                <div className="p-5 pt-0 space-y-3">
                  <div className="flex items-baseline justify-between pt-3 border-t border-classical-border/40">
                    <div>
                      <span className="text-xs text-classical-creamMuted block text-[10px]">Estimated Price</span>
                      <span className="font-serif text-lg font-bold text-classical-cream">
                        ₹{item.price.toLocaleString('en-IN')}
                      </span>
                      {item.originalPrice && (
                        <span className="text-xs text-classical-creamMuted/60 line-through ml-2">
                          ₹{item.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedItem(item)}
                      className="text-xs text-classical-gold underline hover:text-white"
                    >
                      Details
                    </button>
                  </div>

                  <a
                    href={getWhatsAppLink(`Hello Sharma Interior Designer, I want to inquire about '${item.name}' (Price: ₹${item.price.toLocaleString('en-IN')}). Please share customization details.`)}
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-3xl bg-classical-card border border-classical-gold/60 rounded-xl overflow-hidden shadow-classical-deep">
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-classical-gold hover:text-white border border-classical-gold/40"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto min-h-[300px] relative bg-black">
                  <Image
                    src={selectedItem.image}
                    alt={`${selectedItem.name} - Detailed architectural furniture view by Satya Narayan Sharma`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-classical-card via-transparent to-transparent md:hidden pointer-events-none" />
                </div>

                <div className="p-6 md:p-8 space-y-5 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-xs uppercase tracking-widest text-classical-gold font-bold">
                      {selectedItem.woodType}
                    </span>

                    <h3 className="font-serif text-2xl font-bold text-classical-cream">
                      {selectedItem.name}
                    </h3>

                    <p className="text-xs text-classical-creamMuted leading-relaxed font-light">
                      {selectedItem.description}
                    </p>

                    {/* Detailed Specifications */}
                    <div className="space-y-2 pt-2 border-t border-classical-border/60 text-xs">
                      <div className="flex justify-between">
                        <span className="text-classical-creamMuted">Dimensions:</span>
                        <span className="text-classical-cream font-medium">{selectedItem.dimensions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-classical-creamMuted">Finish & Polish:</span>
                        <span className="text-classical-gold font-medium">{selectedItem.finish}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-classical-creamMuted">Customization:</span>
                        <span className="text-emerald-400 font-medium flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> Available
                        </span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <span className="text-xs text-classical-creamMuted block">Indicative Price</span>
                      <span className="font-serif text-2xl font-bold text-classical-gold">
                        ₹{selectedItem.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3 pt-4 border-t border-classical-border/60">
                    <a
                      href={getWhatsAppLink(`Hello Sharma Interior Designer, I am interested in customizing '${selectedItem.name}' (Dimensions: ${selectedItem.dimensions}, Wood: ${selectedItem.woodType}). Please send me the complete catalog.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient rounded shadow-gold-glow"
                    >
                      <MessageSquare className="w-4 h-4 fill-black" />
                      <span>Inquire Now on WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-classical-cream bg-classical-bg border border-classical-border hover:border-classical-gold rounded"
                    >
                      <Phone className="w-3.5 h-3.5 text-classical-gold" />
                      <span>Call {PHONE_NUMBER}</span>
                    </a>
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
