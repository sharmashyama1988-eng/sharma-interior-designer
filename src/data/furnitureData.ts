import { PRICEBASE_EXTENDED_CATALOG, formatPriceBaseRupees } from '@/lib/pricebase';

export interface FurnitureItem {
  id: string;
  name: string;
  category: 
    | 'living' 
    | 'dining' 
    | 'bedroom' 
    | 'study' 
    | 'accents' 
    | 'kitchen' 
    | 'almirah' 
    | 'doors'
    | 'office' 
    | 'master_office' 
    | 'wall_panelling' 
    | 'tv_panel' 
    | 'showroom' 
    | 'luxury_office' 
    | 'shop_almirah';
  price: number;
  originalPrice?: number;
  rating: number;
  woodType: string;
  finish: string;
  dimensions: string;
  image: string;
  description: string;
  isCustomizable: boolean;
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'villas' | 'restoration';
  location: string;
  area: string;
  completionYear: string;
  imageBefore?: string;
  imageAfter: string;
  description: string;
  highlights: string[];
}

export const PHONE_NUMBER = "9801197102";
export const WHATSAPP_NUMBER = "919801197102";

export const getWhatsAppLink = (message?: string) => {
  const encodedMsg = encodeURIComponent(
    message || "Hello Sharma Interior Designer, I would like to inquire about your catalog items."
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
};

export const CATALOG_CATEGORIES = [
  { id: 'all', label: 'All Collections' },
  { id: 'living', label: 'Living Room' },
  { id: 'bedroom', label: 'Bedroom Suites' },
  { id: 'dining', label: 'Dining & Bar' },
  { id: 'study', label: 'Home Office & Utility' },
  { id: 'kitchen', label: 'Modular Kitchens' },
  { id: 'almirah', label: 'Almirah & Wardrobes' },
  { id: 'doors', label: 'Teak & Royal Doors' },
  { id: 'accents', label: 'Accents & Swings' },
  { id: 'tv_panel', label: 'LED TV Panel Units' },
  { id: 'wall_panelling', label: 'Wall Panelling' },
  { id: 'office', label: 'Office Furniture' },
  { id: 'master_office', label: 'Master Office & Chairman' },
  { id: 'showroom', label: 'Showroom Interiors' },
  { id: 'luxury_office', label: 'Luxury Office Chambers' },
  { id: 'shop_almirah', label: 'Shop Furniture Almirah' },
];

export const FURNITURE_CATALOG: FurnitureItem[] = [
  // ==========================================
  // 1. LIVING ROOM FURNITURE (2026 LUXURY TRENDS)
  // ==========================================
  {
    id: "LR-MOD-01",
    name: "Aura Modular Sectional Sofa in Ivory Bouclé",
    category: "living",
    price: 185000,
    originalPrice: 210000,
    rating: 5.0,
    woodType: "Solid Burma Teak Internal Frame",
    finish: "Textured Cream Bouclé & Brushed Brass Plinth",
    dimensions: "128\" W x 68\" D x 32\" H (5-Piece Configurable)",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
    description: "Ultra-luxurious 5-module sectional sofa upholstered in premium anti-stain ivory bouclé fabric, built upon a kiln-seasoned Burma teak hardwood chassis with magnetic locking fasteners.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "LR-CRV-02",
    name: "Serpentine Curved Luxury Sofa in Royal Emerald Velvet",
    category: "living",
    price: 215000,
    originalPrice: 245000,
    rating: 4.9,
    woodType: "Curved Steam-Bent Teak & Birch",
    finish: "Deep Emerald Velvet & Brushed Brass Shadow Base",
    dimensions: "102\" W x 42\" D x 33\" H",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    description: "Flowing biomorphic curved silhouette sofa featuring multi-density ergonomic foam, hand-stitched velvet upholstery, and a floating gold brass shadow line plinth.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "LR-CLD-03",
    name: "Olympus Deep Cloud Low-Profile Lounge Sofa (4-Seater)",
    category: "living",
    price: 195000,
    originalPrice: 225000,
    rating: 5.0,
    woodType: "Solid Hardwood Frame & Sinuous Springs",
    finish: "Italian Washed Linen & Feather-Down Blend",
    dimensions: "114\" W x 44\" D x 28\" H",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop",
    description: "Sink-in cloud seating experience featuring dual-layer goose feather cushioning, ultra-deep 44-inch lounge seats, removable covers, and solid teak hidden feet.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "LR-ACC-04",
    name: "Monarch Velvet Fluted Statement Accent Chair",
    category: "living",
    price: 48000,
    originalPrice: 55000,
    rating: 4.9,
    woodType: "Solid Burma Teak Legs with Brass Ferrules",
    finish: "Channel-Tufted Golden Amber Velvet",
    dimensions: "34\" W x 32\" D x 36\" H",
    image: "https://images.unsplash.com/photo-1580481072645-022f9a6d8310?q=80&w=1200&auto=format&fit=crop",
    description: "Showstopping statement armchair with vertical channel fluting, barrel curved backrest, plush 40-density foam seat, and solid teak tapered legs capped in gold brass.",
    isCustomizable: true,
    featured: false
  },
  {
    id: "LR-CFT-05",
    name: "Burma Teak Natural Live-Edge Slab Center Coffee Table",
    category: "living",
    price: 62000,
    originalPrice: 72000,
    rating: 5.0,
    woodType: "100% Solid Natural Live-Edge Burma Teak Slab",
    finish: "Matte Polyurethane Clear Coat & Matte Black Metal Legs",
    dimensions: "54\" L x 30\" W x 18\" H (4-Inch Slab)",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=1200&auto=format&fit=crop",
    description: "Preserved natural tree perimeter organic live-edge teak slab with resin butterfly joints, smooth satin polish, and architectural spider-leg steel support.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "LR-TVU-06",
    name: "Aethelgard Ribbed Fluted Teak & Brass Floating TV Unit",
    category: "living",
    price: 85000,
    originalPrice: 98000,
    rating: 4.9,
    woodType: "Solid Burma Teak & HDHMR Core",
    finish: "CNC Fluted Slats & Brushed Brass Lip Trim",
    dimensions: "96\" W x 18\" D x 20\" H (Wall Mounted)",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1200&auto=format&fit=crop",
    description: "Modern minimalist wall-mounted TV credenza with continuous 3D fluted vertical timber slats, soft-close acoustic drop-down doors, and hidden cable channels.",
    isCustomizable: true,
    featured: false
  },
  {
    id: "LR-OTM-07",
    name: "Chesterfield Deep-Tufted Storage Ottoman & Coffee Bench",
    category: "living",
    price: 38000,
    originalPrice: 45000,
    rating: 4.8,
    woodType: "Teakwood Base & Plywood Storage Box",
    finish: "Vintage Cognac Leather & Brass Studs",
    dimensions: "48\" W x 26\" D x 18\" H",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    description: "Multi-functional coffee table bench with deep button-tufted top that opens smoothly via German gas struts to reveal cavernous storage for throws and cushions.",
    isCustomizable: true,
    featured: false
  },
  {
    id: "LR-CNS-08",
    name: "Sleek Teakwood & Champagne Brass Inlay Entryway Console",
    category: "living",
    price: 42000,
    originalPrice: 50000,
    rating: 4.9,
    woodType: "Grade-A Burma Teak",
    finish: "Smoked Walnut Stain & Solid Brass T-Profile Inlays",
    dimensions: "56\" W x 14\" D x 32\" H",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    description: "Architectural slim console table designed for luxury foyers and behind-sofa placement, featuring waterfall mitered corners and brushed gold inlay bands.",
    isCustomizable: true,
    featured: false
  },
  {
    id: "LR-RCL-09",
    name: "Grand Regent Motorized Italian Full-Grain Leather Recliner",
    category: "living",
    price: 88000,
    originalPrice: 105000,
    rating: 5.0,
    woodType: "Reinforced Teak & Heavy Gauge Steel Mechanism",
    finish: "Italian Nappa Leather & Dual Motor Control",
    dimensions: "38\" W x 36\" D x 42\" H (Reclines to 68\")",
    image: "https://images.unsplash.com/photo-1580481072645-022f9a6d8310?q=80&w=1200&auto=format&fit=crop",
    description: "Whisper-quiet dual-motor power recliner with independent back and footrest controls, integrated USB fast-charging port, and breathable perforated full-grain leather.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "f1",
    name: "The Royal Teakwood Maharaja Sofa Set (3+2+1)",
    category: "living",
    price: 265000,
    originalPrice: 295000,
    rating: 4.9,
    woodType: "Grade-A Seasoned Burma Teak",
    finish: "24K Gold Leaf Gilt & Dark Walnut",
    dimensions: "88\" W x 38\" D x 44\" H (3-Seater) + 2 Armchairs",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
    description: "Masterpiece hand-carved sofa suite sculpted from solid Burma teakwood, upholstered in plush royal crimson velvet with brass nailhead trim.",
    isCustomizable: true,
    featured: true
  },

  // ==========================================
  // 2. BEDROOM FURNITURE (2026 LUXURY SUITES)
  // ==========================================
  {
    id: "BD-CNP-01",
    name: "Royal Heritage Burma Teak 4-Poster Canopy King Bed",
    category: "bedroom",
    price: 235000,
    originalPrice: 265000,
    rating: 5.0,
    woodType: "100% Solid Seasoned Burma Teakwood",
    finish: "Hand-Polished Amber Lacquer & Gold Highlights",
    dimensions: "King Size (84\" W x 90\" L x 92\" Column Height)",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    description: "Regal 4-poster canopy bed with hand-turned fluted architectural pillars, acanthus leaf crown carvings, and reinforced cross-braced timber base designed for zero creak.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "BD-UPH-02",
    name: "Kingston Italian Leather Padded Upholstered Master Bed",
    category: "bedroom",
    price: 165000,
    originalPrice: 190000,
    rating: 4.9,
    woodType: "Solid Teak Frame & High-Density Polyurethane",
    finish: "Cognac Tan Italian Leather & Matte Walnut Frame",
    dimensions: "King Size (78\" W x 86\" L x 54\" Headboard Height)",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    description: "Contemporary master bed featuring a grand 54-inch geometric quilted Italian leather headboard with integrated warm LED edge backlighting and floating teak plinth.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "BD-STR-03",
    name: "Zenith Hydraulic Lift Solid Wood King Storage Bed",
    category: "bedroom",
    price: 145000,
    originalPrice: 170000,
    rating: 5.0,
    woodType: "Seasoned Teakwood & Marine Plywood Base",
    finish: "Satin Polyurethane Polish & Velvet Headboard",
    dimensions: "King Size (76\" W x 84\" L x 48\" Headboard Height)",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
    description: "Effortless one-touch hydraulic lift storage bed utilizing heavy-duty German gas pistons, giving access to 1,200 liters of dust-sealed storage space under the mattress.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "BD-HBD-04",
    name: "Imperial Hand-Carved Teakwood Statement Wall Headboard",
    category: "bedroom",
    price: 78000,
    originalPrice: 92000,
    rating: 4.9,
    woodType: "Single-Slab Seasoned Burma Teak",
    finish: "Antique Espresso & 24K Gold Leaf Inlay",
    dimensions: "82\" W x 64\" H x 3.5\" Deep Relief",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    description: "Artisan-carved full-wall statement headboard with deep baroque floral medallions, upholstered velvet center panel, and flush wall mounting cleat hardware.",
    isCustomizable: true,
    featured: false
  },
  {
    id: "BD-NST-05",
    name: "Aura Smart Nightstand with Wireless Charging & Touch LED",
    category: "bedroom",
    price: 28000,
    originalPrice: 34000,
    rating: 4.8,
    woodType: "Grade-A Burma Teak & Sintered Stone Top",
    finish: "Dark Walnut & Soft-Close Blum Runners",
    dimensions: "22\" W x 18\" D x 22\" H (2-Drawer Set)",
    image: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef7?q=80&w=1200&auto=format&fit=crop",
    description: "Modern smart bedside table featuring top-embedded Qi wireless phone charging, touch sensor LED floor pathway light, and velvet-lined jewelry drawers.",
    isCustomizable: true,
    featured: false
  },
  {
    id: "BD-VNT-06",
    name: "Elegance Vanity Dressing Table with Halo LED Touch Mirror",
    category: "bedroom",
    price: 68000,
    originalPrice: 80000,
    rating: 4.9,
    woodType: "Burma Teakwood & Toughened Glass",
    finish: "Champagne Gold PU & Brushed Brass Accents",
    dimensions: "48\" W x 20\" D x 58\" Total Height",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1200&auto=format&fit=crop",
    description: "Luxury grooming vanity console complete with 3-color dimmable circular halo LED touch mirror, glass top jewelry display section, and matching cushioned stool.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "BD-WDR-07",
    name: "Palazzo 4-Door Matte Super-Lacquer & Teak Wardrobe",
    category: "bedroom",
    price: 185000,
    originalPrice: 215000,
    rating: 5.0,
    woodType: "HDHMR Marine Core & Burma Teak Framework",
    finish: "Anti-Fingerprint Cashmere Grey Matte & Long Teak Handles",
    dimensions: "80\" W x 24\" D x 96\" H (Floor to Ceiling)",
    image: "/almirah3.jpg",
    description: "Contemporary 4-door wardrobe with anti-fingerprint nanotech super-matte shutters, full-length solid teak fluted edge pull handles, and integrated warm LED interior sensor lights.",
    isCustomizable: true,
    featured: false
  },
  {
    id: "BD-DRW-08",
    name: "Artisan 6-Drawer Solid Teakwood Tallboy Chest",
    category: "bedroom",
    price: 58000,
    originalPrice: 68000,
    rating: 4.9,
    woodType: "100% Solid Burma Teakwood",
    finish: "Natural Wood Grain Satin & Antique Brass Pulls",
    dimensions: "36\" W x 20\" D x 52\" H",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1200&auto=format&fit=crop",
    description: "Vertical tallboy chest handcrafted with traditional dovetail joinery, smooth ball-bearing undermount slides, and deep cedar-lined clothing compartments.",
    isCustomizable: true,
    featured: false
  },
  {
    id: "f3",
    name: "Victoria Four-Poster Master Bed Suite",
    category: "bedroom",
    price: 245000,
    originalPrice: 280000,
    rating: 4.9,
    woodType: "Solid Rosewood & Italian Leather",
    finish: "Deep Royal Mahogany & Satin Varnish",
    dimensions: "King Size (80\" x 88\" x 90\" Column Height)",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    description: "Architectural 4-poster royal bed frame with turned columns, carved crown header, tufted leather headboard, and pair of matching nightstands.",
    isCustomizable: true,
    featured: true
  },

  // ==========================================
  // 3. DINING & KITCHEN FURNITURE (2026 TRENDS)
  // ==========================================
  {
    id: "DN-LVE-01",
    name: "Solid Suar & Burma Teak 8-Seater Live-Edge Dining Table",
    category: "dining",
    price: 195000,
    originalPrice: 225000,
    rating: 5.0,
    woodType: "Natural Organic Live-Edge Single Slab Timber",
    finish: "Matte Polyurethane & Cast Brass Trapezoid Pedestals",
    dimensions: "96\" L x 42\" W x 30\" H (8-Seater)",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200&auto=format&fit=crop",
    description: "Magnificent 8-foot dining table preserving the natural undulating perimeter edge of seasoned timber, treated with stain-resistant nanocoat and dual cast brass pedestals.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "DN-EXT-02",
    name: "Transforma Teak Butterfly Extendable Dining Suite (6-10 Seater)",
    category: "dining",
    price: 165000,
    originalPrice: 190000,
    rating: 4.9,
    woodType: "Solid Burma Teakwood Mechanism",
    finish: "Warm Honey Walnut Lacquer",
    dimensions: "72\" to 104\" L x 40\" W x 30\" H (Includes 6 Chairs)",
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1200&auto=format&fit=crop",
    description: "Space-saving architectural butterfly extension table that expands from 6-seater (72 inches) to 10-seater (104 inches) in seconds via smooth internal cog mechanisms.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "DN-SNT-03",
    name: "Statuario Sintered Stone & Champagne Gold Dining Table",
    category: "dining",
    price: 175000,
    originalPrice: 205000,
    rating: 5.0,
    woodType: "12mm Italian Sintered Stone & Teak Core",
    finish: "Polished Statuario White & Brushed Gold Metal Base",
    dimensions: "84\" L x 40\" W x 30\" H (8-Seater)",
    image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=1200&auto=format&fit=crop",
    description: "100% heat-proof, scratch-proof, and non-porous 12mm sintered stone tabletop with bookmatched grey veining, supported by a geometric sculpted champagne brass base.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "DN-CHR-04",
    name: "Nordic Teak & Velvet Curved Dining Chairs (Set of 6)",
    category: "dining",
    price: 72000,
    originalPrice: 84000,
    rating: 4.8,
    woodType: "Solid Steam-Bent Burma Teak",
    finish: "Natural Matte Teak & Stain-Resistant Grey Velvet",
    dimensions: "22\" W x 22\" D x 33\" H (Set of 6 Chairs)",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    description: "Curved ergonomic backrest dining chairs steam-bent from continuous solid teakwood with high-resilience foam seats wrapped in water-repellent luxury velvet.",
    isCustomizable: true,
    featured: false
  },
  {
    id: "DN-BUF-05",
    name: "Carved Teakwood & Fluted Glass Buffet Sideboard Credenza",
    category: "dining",
    price: 95000,
    originalPrice: 112000,
    rating: 4.9,
    woodType: "Solid Burma Teak & Fluted Tempered Glass",
    finish: "Espresso Brown & Warm Interior Showcase LED",
    dimensions: "72\" W x 19\" D x 34\" H",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop",
    description: "Sophisticated 4-door buffet sideboard featuring ribbed fluted glass display doors, cutlery organizer drawers with velvet lining, and integrated warm interior lighting.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "DN-BAR-06",
    name: "High-Life 360° Swivel Luxury Bar Stools (Pair)",
    category: "dining",
    price: 36000,
    originalPrice: 42000,
    rating: 4.9,
    woodType: "Solid Teak Base & Heavy Duty Swivel Plate",
    finish: "Saddle Tan Italian Leather & Antique Brass Ring",
    dimensions: "18\" W x 18\" D x 38\" H (Seat Height: 30\")",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop",
    description: "Counter-height luxury bar stools featuring smooth 360-degree rotation, supportive contoured bucket backrest in full-grain leather, and solid brass footrest ring.",
    isCustomizable: true,
    featured: false
  },
  {
    id: "f2",
    name: "Emperor Hand-Carved Dining Suite (8-Seater + Marble Top)",
    category: "dining",
    price: 325000,
    originalPrice: 360000,
    rating: 5.0,
    woodType: "Solid Burma Teakwood & Italian Marble",
    finish: "Antique Amber Polish & Gold Trim",
    dimensions: "108\" L x 48\" W x 30\" H",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200&auto=format&fit=crop",
    description: "Grand classical dining table featuring hand-engraved twin pedestal legs, accompanied by 8 opulent high-back carved dining chairs.",
    isCustomizable: true,
    featured: true
  },

  // ==========================================
  // 4. HOME OFFICE & UTILITY (2026 TRENDS)
  // ==========================================
  {
    id: "HO-FLT-01",
    name: "Aero Minimalist Floating Teak Wall-Mounted Study Desk",
    category: "study",
    price: 32000,
    originalPrice: 38000,
    rating: 4.9,
    woodType: "Grade-A Burma Teak & HDHMR Core",
    finish: "Natural Teak Satin Polyurethane",
    dimensions: "48\" W x 20\" D x 10\" H",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop",
    description: "Clean floating study desk anchored securely to walls with reinforced steel brackets, featuring 2 concealed soft-close drawers and integrated wire raceway.",
    isCustomizable: true,
    featured: false
  },
  {
    id: "HO-CHR-02",
    name: "Presidential High-Back Full-Grain Leather Task Chair",
    category: "study",
    price: 46000,
    originalPrice: 55000,
    rating: 5.0,
    woodType: "Teakwood Shell & Polished Aluminum 5-Star Base",
    finish: "Onyx Black Italian Leather & Class-4 Gas Lift",
    dimensions: "26\" W x 26\" D x 48\" H",
    image: "https://images.unsplash.com/photo-1580481072645-022f9a6d8310?q=80&w=1200&auto=format&fit=crop",
    description: "Ergonomic executive chair combining mid-century molded teak veneer outer shell with adjustable lumbar support, 3D armrests, and synchro-tilt mechanism.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "HO-BKS-03",
    name: "Geometric Teakwood & Matte Black Architectural Bookshelf",
    category: "study",
    price: 64000,
    originalPrice: 75000,
    rating: 4.9,
    woodType: "Solid Burma Teak Shelves & Steel Frame",
    finish: "Dark Walnut Stain & Matte Powder-Coated Metal",
    dimensions: "48\" W x 15\" D x 78\" H",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1200&auto=format&fit=crop",
    description: "Open-plan asymmetric display shelving unit perfect for books, artifacts, and lighting, offering robust load-bearing solid teak tier shelves.",
    isCustomizable: true,
    featured: false
  },
  {
    id: "HO-SWG-04",
    name: "Boho Luxury Natural Rattan & Teak Hanging Swing Jhula",
    category: "accents",
    price: 52000,
    originalPrice: 62000,
    rating: 5.0,
    woodType: "Solid Teak Armrests & Eco Rattan Cane Weave",
    finish: "Natural Amber Polish & Solid Brass Hanging Chains",
    dimensions: "44\" W x 30\" D x 50\" H (Carries up to 250 kg)",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    description: "Hand-woven natural wicker rattan cocoon swing suspended by antiqued solid brass chains, fitted with water-resistant plush outdoor/indoor seat cushions.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "HO-SFB-05",
    name: "Convertible Teak Frame Velvet Pullout Sofa-Cum-Bed",
    category: "accents",
    price: 78000,
    originalPrice: 92000,
    rating: 4.9,
    woodType: "Heavy-Duty Seasoned Teak Framework",
    finish: "Navy Blue Velvet & German Easy-Glide Roller System",
    dimensions: "78\" W x 38\" D x 34\" H (Converts to 60\"x75\" Queen Bed)",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
    description: "Dual-utility space transformer that smoothly slides from a 3-seater sofa into a supportive Queen-sized mattress bed in under 5 seconds with zero strain.",
    isCustomizable: true,
    featured: true
  },

  // ==========================================
  // 5. MODULAR KITCHENS
  // ==========================================
  {
    id: "MK-ISL-01",
    name: "Royal Imperial Burma Teak Island Modular Kitchen",
    category: "kitchen",
    price: 345000,
    originalPrice: 380000,
    rating: 5.0,
    woodType: "Grade-A Burma Teak & HDHMR Marine Ply",
    finish: "PU Gloss & Italian Calacatta Gold Quartz Marble",
    dimensions: "Custom Layout (Rate: ₹1,850 / sq. ft.)",
    image: "/kitchen1.jpg",
    description: "Hand-carved Burma Teak fascia island kitchen with 20mm Italian Calacatta Marble waterfall countertop, Blum motion soft-close drawers, and tall pantry pullout towers.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "MK-PAR-02",
    name: "Regency Parallel & L-Shape Glass & Teak Kitchen",
    category: "kitchen",
    price: 285000,
    originalPrice: 320000,
    rating: 4.9,
    woodType: "Solid Sheesham & Toughened Lacquered Glass",
    finish: "Anodized Champagne Brass & Nero Marquina Quartz",
    dimensions: "Custom Layout (Rate: ₹1,650 / sq. ft.)",
    image: "/kitchen2.jpg",
    description: "Sleek parallel layout kitchen with fingerprint-resistant lacquered glass shutters, Nero Marquina black quartz countertop, and integrated breakfast bar.",
    isCustomizable: true,
    featured: false
  },
  {
    id: "MK-ACR-03",
    name: "Handleless Super-Matt Acrylic Modular Kitchen",
    category: "kitchen",
    price: 310000,
    originalPrice: 345000,
    rating: 5.0,
    woodType: "HDHMR Marine Board & Anti-fingerprint Acrylic",
    finish: "Super-Matt Cashmere Grey & Anodized GOLA Channel",
    dimensions: "Custom Layout (Rate: ₹1,750 / sq. ft.)",
    image: "/kitchen3.jpg",
    description: "Ultra-modern handleless modular kitchen featuring anti-fingerprint nanotech super-matt acrylic shutters, seamless GOLA profile handles in anodized black, and quartz countertop.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "MK-SMR-04",
    name: "Smart Sensor Touch Island Kitchen with Cantilevered Bar",
    category: "kitchen",
    price: 395000,
    originalPrice: 435000,
    rating: 5.0,
    woodType: "HDHMR Marine Board & Translucent Patagonia Quartzite",
    finish: "Blum Servo-Drive Motorized Touch & Teak Bar",
    dimensions: "Custom Layout (Rate: ₹2,100 / sq. ft.)",
    image: "/kitchen4.jpg",
    description: "State-of-the-art smart kitchen featuring Blum Servo-Drive motorized automatic touch-to-open cabinets, backlit Patagonia quartzite island with a cantilevered solid Burma teak bar.",
    isCustomizable: true,
    featured: true
  },

  // ==========================================
  // 6. ALMIRAH & WARDROBES
  // ==========================================
  {
    id: "AW-6DR-01",
    name: "Palace 6-Door Carved Burma Teak Heritage Almirah",
    category: "almirah",
    price: 265000,
    originalPrice: 295000,
    rating: 4.9,
    woodType: "100% Solid Seasoned Burma Teakwood",
    finish: "24K Gold Leaf Hand Gilt & Satin Amber Walnut",
    dimensions: "120\" W x 26\" D x 96\" H",
    image: "/almirah1.jpg",
    description: "Master hand-carved floral crown pediment 6-door royal almirah with central beveled mirrors, secret brass-locked jewelry safe, and velvet shoe racks.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "AW-GLS-02",
    name: "Solitaire Walk-In Glass Sliding Wardrobe & Dressing Suite",
    category: "almirah",
    price: 320000,
    originalPrice: 360000,
    rating: 5.0,
    woodType: "Fluted Tinted Toughened Glass & Teak Framework",
    finish: "Gold Anodized Aluminum & Tufted Leatherette Backing",
    dimensions: "144\" W x 30\" D x 96\" H",
    image: "/almirah2.jpg",
    description: "Floor-to-ceiling glass sliding walk-in wardrobe with automatic sensor 3000K LED lighting, velvet watch/jewelry pullout trays, and climate-controlled shoe display.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "AW-FLT-03",
    name: "Architectural Fluted Acrylic & Matte Lacquer Sliding Almirah",
    category: "almirah",
    price: 245000,
    originalPrice: 275000,
    rating: 4.9,
    woodType: "HDHMR Marine Board & Fluted Matte Acrylic",
    finish: "Fluted White Acrylic & Champagne Gold Profile",
    dimensions: "108\" W x 24\" D x 96\" H",
    image: "/almirah3.jpg",
    description: "Contemporary sliding door wardrobe featuring 3D fluted vertical textured acrylic door panels, slim champagne gold aluminum profile borders, and soft-close top-hung sliding mechanism.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "AW-RGM-04",
    name: "Palazzo Rose Gold Mirror & Tufted Leather 4-Door Almirah",
    category: "almirah",
    price: 285000,
    originalPrice: 320000,
    rating: 5.0,
    woodType: "Teak Framework & Toughened Rose Gold Mirror Glass",
    finish: "Rose Gold Tinted Mirror & Nude Leatherette Side Panels",
    dimensions: "96\" W x 24\" D x 96\" H",
    image: "/almirah4.jpg",
    description: "Exquisite 4-door wardrobe featuring bevelled rose gold reflective mirror glass shutters, nude leatherette side panelling, rose gold metal handles, and velvet-lined drawers.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "AW-PTO-05",
    name: "Zenith Minimal Handleless Push-to-Open Master Wardrobe",
    category: "almirah",
    price: 215000,
    originalPrice: 240000,
    rating: 4.8,
    woodType: "HDHMR Marine Board & Teak Veneer Inserts",
    finish: "Super-Matt Ivory Polyurethane & Concealed Push Rebounds",
    dimensions: "120\" W x 24\" D x 96\" H",
    image: "/almirah5.jpg",
    description: "Seamless minimal floor-to-ceiling handleless wardrobe featuring super-matt ivory PU finish, push-to-open spring hinges, hidden shadow-gap joints, and integrated vanity desk module.",
    isCustomizable: true,
    featured: false
  },

  // ==========================================
  // 7. TEAK & ROYAL DOORS
  // ==========================================
  {
    id: "DR-TRK-01",
    name: "Imperial Hand-Carved Burma Teak Royal Entrance Double Door",
    category: "doors",
    price: 185000,
    originalPrice: 210000,
    rating: 5.0,
    woodType: "100% Grade-A Seasoned Solid Burma Teakwood",
    finish: "Satin Amber Walnut & 24K Gold Leaf Details",
    dimensions: "8ft H x 5ft W (Double Door set with Frame)",
    image: "/door1.jpg",
    description: "Grand entrance double door crafted from 3-inch thick solid Burma teakwood, featuring deep relief hand-carved royal motif panels, brass stud embellishments, and solid brass antique handles.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "DR-VNR-02",
    name: "Contemporary Smoked Walnut Flush Veneer Door with Brass Inlays",
    category: "doors",
    price: 65000,
    originalPrice: 75000,
    rating: 4.9,
    woodType: "Solid Core Marine Flush Door with Smoked Walnut Veneer",
    finish: "Natural Matte PU & Vertical Brass T-Strips",
    dimensions: "8ft H x 3.5ft W (Single Door with Frame)",
    image: "/door2.jpg",
    description: "Sleek architectural flush door clad in premium natural smoked walnut timber veneer, inlaid with vertical brushed champagne brass metal profiles and magnetic mortise lock.",
    isCustomizable: true,
    featured: false
  },

  // ==========================================
  // 8. OFFICE & EXECUTIVE FURNITURE
  // ==========================================
  {
    id: "OF-DSK-01",
    name: "Sovereign Burma Teak Executive Desk & Credenza Set",
    category: "office",
    price: 175000,
    originalPrice: 195000,
    rating: 4.8,
    woodType: "Grade-A Burma Teakwood",
    finish: "Dark Espresso Polyurethane Lacquer & Cognac Leather Inlay",
    dimensions: "90\" W x 42\" D x 30\" H (Desk + Return Credenza)",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
    description: "Commanding 7.5ft executive desk with carved modesty panel, wire management raceways, locking file drawers, and Italian full-grain cognac leather top.",
    isCustomizable: true,
    featured: false
  },
  {
    id: "OF-CNF-02",
    name: "Monarch 12-Seater Burma Teak & Marble Conference Table",
    category: "office",
    price: 240000,
    originalPrice: 275000,
    rating: 4.9,
    woodType: "Solid Burma Teak & Bottochino Marble",
    finish: "Hand-polished Walnut & Cast Brass Pedestals",
    dimensions: "168\" L x 54\" W x 30\" H (14ft Boat Shape)",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    description: "Architectural 14-foot conference table with Italian Bottochino marble centerpiece slab, motorized AV access boxes, HDMI/LAN sockets, and heavy twin brass pedestals.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "MO-CHR-01",
    name: "Imperial Chairman Royal Teak Pedestal Desk & Carved Crest",
    category: "master_office",
    price: 310000,
    originalPrice: 350000,
    rating: 5.0,
    woodType: "Grade-A Selected Burma Teakwood",
    finish: "Nero Portoro Black & Gold Marble Slab with 24K Gold Leaf",
    dimensions: "96\" W x 44\" D x 31\" H Desk + 8ft Credenza",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    description: "Exclusive C-Suite presidential desk featuring hand-carved baroque coat-of-arms crest, Italian Nero Portoro Marble top inset, and biometric safe drawer.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "MO-REC-02",
    name: "Grand Regent Italian Tufted Leather Executive Recliner",
    category: "master_office",
    price: 125000,
    originalPrice: 145000,
    rating: 4.9,
    woodType: "Burma Teak Frame & Italian Full-Grain Leather",
    finish: "Vintage Oxblood Patina & German Motorized Recline",
    dimensions: "42\" W x 38\" D x 46\" H",
    image: "https://images.unsplash.com/photo-1580481072645-022f9a6d8310?q=80&w=1200&auto=format&fit=crop",
    description: "Deep button-tufted Chesterfield executive recliner with German electric recline, massage nodes, lumbar heating, and carved Burma teak armrests.",
    isCustomizable: true,
    featured: false
  },

  // ==========================================
  // 9. WALL PANELLING & TV CONSOLES
  // ==========================================
  {
    id: "WP-WNS-01",
    name: "Versailles Teakwood Wainscoting & Fluted Dado Rail Panelling",
    category: "wall_panelling",
    price: 185000,
    originalPrice: 210000,
    rating: 4.9,
    woodType: "Solid Burma Teak Mouldings & Teak Veneer",
    finish: "Satin Touch Antique Mahogany Polyurethane Stain",
    dimensions: "Custom Wall Area (Rate: ₹1,350 / sq. ft.)",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
    description: "French Victorian raised panel wainscoting with hand-turned solid teak dado rail, acoustic timber backing, and scratch-resistant clear lacquer.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "WP-BRS-02",
    name: "Heritage Teak Panel Suite with Geometric Brass Strip Inlays",
    category: "wall_panelling",
    price: 225000,
    originalPrice: 255000,
    rating: 5.0,
    woodType: "Grade-A Burma Teak & Smoked Walnut",
    finish: "10mm Solid Brass T-Profile Inlays & Warm LED Cove",
    dimensions: "Custom Wall Area (Rate: ₹1,650 / sq. ft.)",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1200&auto=format&fit=crop",
    description: "Modern-classical fluted teak slats with mirror-finish brass inlay bands, concealed wall access doors, and back-illuminated LED cove lighting.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "TV-MRB-01",
    name: "Celestial Floating Italian Statuario Marble & Teak TV Console",
    category: "tv_panel",
    price: 155000,
    originalPrice: 175000,
    rating: 4.9,
    woodType: "Italian Statuario Marble & Burma Teak Louvers",
    finish: "Polished Marble Slab & Champagne Gold Inlays",
    dimensions: "108\" W x 84\" H (Fits up to 85\" TV)",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1200&auto=format&fit=crop",
    description: "Book-matched Italian Statuario marble backplate with backlit LED halo glow, handcrafted vertical teak louver wings, and floating media credenza.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "TV-LVR-02",
    name: "Royal Architectural Teak Slat & Backlit Quartz TV Unit",
    category: "tv_panel",
    price: 135000,
    originalPrice: 155000,
    rating: 4.8,
    woodType: "Burma Teak Slats & Patagonia Quartzite",
    finish: "Natural Wood Touch PU & Dimmable Smart LED",
    dimensions: "120\" W x 96\" H Full Height Media Wall",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    description: "Full-height teak slat panelling with translucent Patagonia quartzite centerpiece, soundbar acoustic shelf, and hidden touch-release side storage.",
    isCustomizable: true,
    featured: false
  },

  // ==========================================
  // 10. SHOWROOM & RETAIL
  // ==========================================
  {
    id: "CS-RCK-01",
    name: "Pavilion Luxury Retail Display Rack System & Brass Frame",
    category: "showroom",
    price: 420000,
    originalPrice: 480000,
    rating: 5.0,
    woodType: "Burma Teak Platforms & Brass PVD Framework",
    finish: "Ultra-Clear Glass Shelves & Italian Marble Plinth",
    dimensions: "Custom Showroom Layout (Rate: ₹1,950 / sq. ft.)",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    description: "Bespoke retail display wall with gold brass suspension columns, micro LED spot highlights (CRI 95+), teak storage cabinetry, and marble base plinth.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "CS-CNT-02",
    name: "Empire Monolithic Curved Marble & Teak Reception Counter Top",
    category: "showroom",
    price: 290000,
    originalPrice: 330000,
    rating: 4.9,
    woodType: "Italian Calacatta Marble & Teak CNC Slats",
    finish: "Brushed Antique Brass Base & Undercut LED Glow",
    dimensions: "120\" W x 36\" D x 42\" H Reception Counter",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop",
    description: "Sculptural curved reception counter featuring seamless Italian marble front, undercut LED floating glow, dual workstation interior, and cash drawers.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "LO-SUT-01",
    name: "Presidential Full Turnkey Executive Chamber Suite",
    category: "luxury_office",
    price: 750000,
    originalPrice: 850000,
    rating: 5.0,
    woodType: "Burma Teak Wainscoting & Leather Panelling",
    finish: "Teak Coffered Ceiling & Smart Automated Lighting",
    dimensions: "Full 500 Sq. Ft. Chamber (Rate: ₹2,250 / sq. ft.)",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
    description: "Turnkey C-Suite executive office suite with teak coffered ceiling, acoustic wall lining, presidential desk, Chesterfield leather lounge, and private bar.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "SF-SHW-01",
    name: "Heritage Jeweller Glass Showcase Display Almirah",
    category: "shop_almirah",
    price: 195000,
    originalPrice: 220000,
    rating: 4.9,
    woodType: "Burma Teak Frame & Toughened Belgian Glass",
    finish: "Crimson Velvet Trays & RFID Electronic Lock",
    dimensions: "72\" W x 22\" D x 84\" H Glass Display Unit",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1200&auto=format&fit=crop",
    description: "High-security jewelry display almirah with anti-shatter glass, vertical micro-LED spot channels, velvet ring/watch trays, and reinforced overnight vault storage.",
    isCustomizable: true,
    featured: true
  }
];

export const PROJECTS_GALLERY: ProjectItem[] = [
  {
    id: "p1",
    title: "Royal Heritage Villa Interior & Bespoke Teak Woodwork",
    category: "villas",
    location: "Patna / NCR",
    area: "6,500 sq. ft.",
    completionYear: "2025",
    imageBefore: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    description: "Complete turnkey interior overhaul featuring hand-carved teak coffered ceilings, wall panelling, custom royal dining suite, and chandelier lighting.",
    highlights: ["Teak Coffered Ceiling", "Italian Marble Flooring Integration", "Full Classical Villa Styling"]
  },
  {
    id: "p2",
    title: "Luxury Penthouse Living Room & Private Bar Lounge",
    category: "residential",
    location: "Kankarbagh",
    area: "3,800 sq. ft.",
    completionYear: "2024",
    imageBefore: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    description: "Neo-classical open plan design with velvet Chesterfield seating, brass accent wall trims, and custom teakwood bar lounge.",
    highlights: ["Custom Wine Bar Lounge", "Tufted Velvet Accent Walls", "Smart Ambient Warm Lighting"]
  }
];

export const TESTIMONIALS = [
  {
    name: "Rajeshwar Sharma",
    role: "Villa Owner, Patna",
    comment: "Sharma Interior Designer transformed our bare villa into a breathtaking royal sanctuary. Their 28+ years of expertise shows in every carved detail of our teakwood dining table and sofa set. Highly recommended!",
    rating: 5,
    project: "Grand Villa Interior"
  },
  {
    name: "Dr. Ananya Verma",
    role: "Senior Consultant",
    comment: "The custom furniture quality is unmatched. I inquired via WhatsApp at 9801197102, got a 3D preview and cost estimate within hours, and the installation was flawless.",
    rating: 5,
    project: "Penthouse Master Bedroom"
  }
];

export const FAQS = [
  {
    question: "How can I inquire or place a custom furniture order?",
    answer: "You can click any 'Inquire on WhatsApp' button across the website or call us directly at 9801197102. Our interior design consultants will immediately connect with you, share 3D catalogs, and provide personalized quotes."
  },
  {
    question: "Do you offer complete home interior design packages?",
    answer: "Yes! With 28+ years of excellence, we specialize in turnkey interior solutions — including space planning, 3D architectural renders, custom teakwood furniture manufacturing, false ceiling, lighting, wall panelling, and white-glove installation."
  }
];
