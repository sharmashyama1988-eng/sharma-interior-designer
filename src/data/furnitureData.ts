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
    | 'tv_panel';
  price: number;
  originalPrice: number;
  rating: number;
  woodType: string;
  finish: string;
  dimensions: string;
  configuration: string;
  seatingCapacity?: string;
  warranty: string;
  leadTime: string;
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
  { id: 'dining', label: 'Dining & Chairs' },
  { id: 'tv_panel', label: 'LED TV Units' },
  { id: 'study', label: 'Home Office & Study' },
  { id: 'kitchen', label: 'Modular Kitchens' },
  { id: 'almirah', label: 'Almirah & Wardrobes' },
  { id: 'doors', label: 'Teak & Royal Doors' },
  { id: 'accents', label: 'Jhula & Accents' },
  { id: 'office', label: 'Executive Office' },
];

export const FURNITURE_CATALOG: FurnitureItem[] = [
  // ==========================================
  // 1. LIVING ROOM FURNITURE
  // ==========================================
  {
    id: "LR-MAH-01",
    name: "The Royal Teakwood Maharaja Sofa Set (3+2+1)",
    category: "living",
    price: 145000,
    originalPrice: 175000,
    rating: 5.0,
    woodType: "Grade-A Solid Seasoned Burma Teak",
    finish: "24K Gold Leaf Gilt & Dark Walnut Polish",
    dimensions: "88\" W x 38\" D x 44\" H (224 cm x 96 cm x 112 cm) + Armchairs",
    configuration: "Complete 6-Seater Royal Suite (3-Seater + 2 Armchairs + Center Table)",
    seatingCapacity: "5 to 6 Persons",
    warranty: "20-Year Hand-Carved Teakwood Guarantee",
    leadTime: "12-15 Business Days",
    image: "/maharaja_sofa.jpg",
    description: "Masterpiece hand-carved sofa suite sculpted from solid Burma teakwood, upholstered in plush royal crimson velvet with lion motif armrests and 24K gold foil gilding.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "LR-MOD-02",
    name: "Aura Modular Sectional Sofa in Ivory Bouclé",
    category: "living",
    price: 118000,
    originalPrice: 142000,
    rating: 4.9,
    woodType: "Solid Burma Teak Internal Frame",
    finish: "Textured Cream Bouclé & Brushed Brass Plinth",
    dimensions: "128\" W x 68\" D x 32\" H (325 cm x 172 cm x 81 cm)",
    configuration: "5-Piece Configurable Modular Sectional (L-Shape Layout)",
    seatingCapacity: "5 to 6 Persons",
    warranty: "10-Year Solid Teak Chassis Guarantee",
    leadTime: "10-12 Business Days",
    image: "/modular_boucle_sofa.jpg",
    description: "Ultra-luxurious 5-module sectional sofa upholstered in premium anti-stain ivory bouclé fabric, built upon a kiln-seasoned Burma teak hardwood chassis with magnetic locking fasteners.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "LR-CRV-03",
    name: "Serpentine Curved Luxury Sofa in Royal Emerald Velvet",
    category: "living",
    price: 88000,
    originalPrice: 105000,
    rating: 4.9,
    woodType: "Curved Steam-Bent Teak & Birch",
    finish: "Deep Emerald Velvet & Brushed Brass Shadow Base",
    dimensions: "102\" W x 42\" D x 33\" H (259 cm x 107 cm x 84 cm)",
    configuration: "3-Seater Curved Biomorphic Sofa + 3 Matching Throw Cushions",
    seatingCapacity: "3 to 4 Persons",
    warranty: "10-Year Anti-Sag Cushion & Timber Guarantee",
    leadTime: "10-14 Business Days",
    image: "/curved_emerald_sofa.jpg",
    description: "Flowing biomorphic curved silhouette sofa featuring multi-density ergonomic foam, hand-stitched emerald velvet upholstery, and a floating gold brass shadow line base.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "LR-CLD-04",
    name: "Olympus Deep Cloud Low-Profile Lounge Sofa (4-Seater)",
    category: "living",
    price: 78000,
    originalPrice: 92000,
    rating: 5.0,
    woodType: "Solid Hardwood Frame & Sinuous Springs",
    finish: "Italian Washed Linen & Dual Feather-Down Cushioning",
    dimensions: "114\" W x 44\" D x 28\" H (290 cm x 112 cm x 71 cm)",
    configuration: "4-Seater Ultra-Deep Lounge Sofa + Removable Machine-Washable Covers",
    seatingCapacity: "4 to 5 Persons",
    warranty: "10-Year Frame & Cushion Guarantee",
    leadTime: "10-12 Business Days",
    image: "/cloud_lounge_sofa.jpg",
    description: "Sink-in cloud seating experience featuring dual-layer goose feather cushioning, ultra-deep 44-inch lounge seats, removable covers, and solid teak hidden feet.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "LR-ACC-05",
    name: "Monarch Velvet Fluted Statement Accent Armchair",
    category: "living",
    price: 22000,
    originalPrice: 27000,
    rating: 4.9,
    woodType: "Solid Burma Teak Legs with Brass Ferrules",
    finish: "Channel-Tufted Golden Amber Velvet",
    dimensions: "34\" W x 32\" D x 36\" H (86 cm x 81 cm x 91 cm)",
    configuration: "Single Accent Armchair + 40-Density Molded Ergonomic Cushion",
    seatingCapacity: "1 Person",
    warranty: "5-Year Structural Guarantee",
    leadTime: "7-10 Business Days",
    image: "/monarch_accent_chair.jpg",
    description: "Showstopping statement armchair with vertical channel fluting, barrel curved backrest, plush 40-density foam seat, and solid teak tapered legs capped in gold brass.",
    isCustomizable: true,
    featured: false
  },
  {
    id: "LR-CFT-06",
    name: "Burma Teak Natural Live-Edge Slab Center Coffee Table",
    category: "living",
    price: 24000,
    originalPrice: 29000,
    rating: 5.0,
    woodType: "100% Solid Natural Live-Edge Burma Teak Slab (4-Inch)",
    finish: "Matte Polyurethane Clear Coat & Matte Black Metal Legs",
    dimensions: "54\" L x 30\" W x 18\" H (137 cm x 76 cm x 46 cm)",
    configuration: "Solid Natural Tree Perimeter Single Slab Coffee Table",
    warranty: "Lifetime Solid Teak Integrity Guarantee",
    leadTime: "7-10 Business Days",
    image: "/teak_coffee_table.jpg",
    description: "Preserved natural tree perimeter organic live-edge teak slab with resin butterfly joints, smooth satin polish, and architectural spider-leg steel support.",
    isCustomizable: true,
    featured: true
  },

  // ==========================================
  // 2. BEDROOM SUITES (2026 LUXURY TRENDS)
  // ==========================================
  {
    id: "BD-JAP-01",
    name: "Aura Japandi Floating King Platform Bed with Slatted Headboard",
    category: "bedroom",
    price: 58000,
    originalPrice: 70000,
    rating: 5.0,
    woodType: "Grade-A Natural Burma Teakwood",
    finish: "Natural Satin Wood Touch & Warm Under-Bed LED Glow",
    dimensions: "King Size: 78\" W x 84\" L x 46\" H (198 cm x 213 cm x 117 cm)",
    configuration: "Floating Platform King Bed + 2 Integrated Floating Bedside Ledges",
    seatingCapacity: "King Size (2-3 Adults)",
    warranty: "15-Year Zero-Creak Structural Guarantee",
    leadTime: "10-12 Business Days",
    image: "/japandi_bed.jpg",
    description: "2026 signature Japandi floating platform king bed with vertical architectural teak slats, cantilevered floating bedside tables, and integrated warm LED floor glow.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "BD-CNP-02",
    name: "Royal Heritage Burma Teak 4-Poster Canopy King Bed",
    category: "bedroom",
    price: 85000,
    originalPrice: 102000,
    rating: 5.0,
    woodType: "100% Solid Seasoned Burma Teakwood",
    finish: "Hand-Polished Amber Lacquer & Gold Highlights",
    dimensions: "King Size: 84\" W x 90\" L x 92\" Column Height (213 cm x 228 cm x 234 cm)",
    configuration: "Regal 4-Poster Canopy Bed Frame with Fluted Architectural Columns",
    seatingCapacity: "King Size (2-3 Adults)",
    warranty: "25-Year Solid Burma Teak Guarantee",
    leadTime: "14-18 Business Days",
    image: "/canopy_poster_bed.jpg",
    description: "Regal 4-poster canopy bed with hand-turned fluted architectural pillars, acanthus leaf crown carvings, and reinforced cross-braced timber base designed for zero creak.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "BD-UPH-03",
    name: "Kingston Italian Leather Padded Upholstered Master Bed",
    category: "bedroom",
    price: 68000,
    originalPrice: 82000,
    rating: 4.9,
    woodType: "Solid Teak Frame & High-Density Polyurethane",
    finish: "Cognac Tan Italian Leather & Matte Walnut Frame",
    dimensions: "King Size: 78\" W x 86\" L x 54\" Headboard Height (198 cm x 218 cm x 137 cm)",
    configuration: "King Master Bed + 54\" Geometric Quilted Full-Grain Leather Headboard",
    seatingCapacity: "King Size",
    warranty: "10-Year Comprehensive Warranty",
    leadTime: "10-14 Business Days",
    image: "/leather_master_bed.jpg",
    description: "Contemporary master bed featuring a grand 54-inch geometric quilted Italian leather headboard with integrated warm LED edge backlighting and floating teak plinth.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "BD-STR-04",
    name: "Zenith Hydraulic Lift Solid Wood King Storage Bed",
    category: "bedroom",
    price: 54000,
    originalPrice: 65000,
    rating: 5.0,
    woodType: "Seasoned Teakwood & Marine Plywood Base",
    finish: "Satin Polyurethane Polish & Taupe Velvet Padded Headboard",
    dimensions: "King Size: 76\" W x 84\" L x 48\" Headboard Height (193 cm x 213 cm x 122 cm)",
    configuration: "King Bed with German Hydraulic Lift (1,200 Litres Dust-Sealed Storage)",
    seatingCapacity: "King Size",
    warranty: "10-Year Piston & Hydraulic Mechanism Guarantee",
    leadTime: "10-12 Business Days",
    image: "/hydraulic_storage_bed.jpg",
    description: "Effortless one-touch hydraulic lift storage bed utilizing heavy-duty German gas pistons, giving access to 1,200 liters of dust-sealed storage space under the mattress.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "BD-VNT-05",
    name: "Elegance Vanity Dressing Table with Halo LED Touch Mirror",
    category: "bedroom",
    price: 34000,
    originalPrice: 42000,
    rating: 4.9,
    woodType: "Burma Teakwood & Toughened Glass Top",
    finish: "Natural Teak & Champagne Gold Brass Trims",
    dimensions: "48\" W x 20\" D x 58\" Total Height (122 cm x 51 cm x 147 cm)",
    configuration: "Dressing Console Table + 3-Color Dimmable Halo LED Mirror + Cushioned Stool",
    warranty: "5-Year Electrical & Polish Warranty",
    leadTime: "7-10 Business Days",
    image: "/vanity_table.jpg",
    description: "Luxury grooming vanity console complete with 3-color dimmable circular halo LED touch mirror, glass top jewelry display section, and matching cushioned stool.",
    isCustomizable: true,
    featured: true
  },

  // ==========================================
  // 3. DINING & CHAIRS
  // ==========================================
  {
    id: "DN-CHR-01",
    name: "Nordic Teak & Velvet Curved Dining Chairs (Set of 6)",
    category: "dining",
    price: 32000,
    originalPrice: 38000,
    rating: 5.0,
    woodType: "Solid Steam-Bent Burma Teakwood",
    finish: "Natural Matte Teak & Stain-Resistant Beige Velvet",
    dimensions: "22\" W x 22\" D x 33\" H per chair (56 cm x 56 cm x 84 cm)",
    configuration: "Complete Set of 6 Ergonomic Steam-Bent Teak Chairs with Armrests",
    seatingCapacity: "Set of 6 Dining Chairs",
    warranty: "5-Year Frame & Joint Warranty",
    leadTime: "7-10 Business Days",
    image: "/dining_chairs_set.jpg",
    description: "Curved ergonomic backrest dining chairs steam-bent from continuous solid teakwood with high-resilience foam seats wrapped in water-repellent luxury velvet. Includes complete set of 6 chairs.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "DN-LVE-02",
    name: "Solid Suar & Burma Teak 8-Seater Live-Edge Dining Table",
    category: "dining",
    price: 88000,
    originalPrice: 105000,
    rating: 5.0,
    woodType: "Natural Organic Live-Edge Single Slab Timber",
    finish: "Matte Polyurethane & Cast Brass Trapezoid Pedestals",
    dimensions: "96\" L x 42\" W x 30\" H (244 cm x 107 cm x 76 cm) - 8-Seater",
    configuration: "8-Foot Solid Timber Dining Table (Custom Chairs Available)",
    seatingCapacity: "8 to 10 Persons",
    warranty: "15-Year Solid Wood Warranty",
    leadTime: "12-15 Business Days",
    image: "/live_edge_dining.jpg",
    description: "Magnificent 8-foot dining table preserving the natural undulating perimeter edge of seasoned timber, treated with stain-resistant nanocoat and dual cast brass pedestals.",
    isCustomizable: true,
    featured: true
  },

  // ==========================================
  // 4. LED TV UNITS & WALL CONSOLES
  // ==========================================
  {
    id: "TV-MRB-01",
    name: "Celestial Floating Italian Marble & Fluted Teak TV Console",
    category: "tv_panel",
    price: 48000,
    originalPrice: 58000,
    rating: 5.0,
    woodType: "Italian Calacatta Marble & Burma Teak Louvers",
    finish: "Polished Marble Slab, Natural Fluted Slats & Warm LED Halo",
    dimensions: "108\" W x 84\" H x 16\" D (274 cm x 213 cm x 41 cm) - Fits up to 85\" TV",
    configuration: "Backlit Marble Panel + Fluted Acoustic Wings + 3-Drawer Floating Media Credenza",
    warranty: "10-Year Timber & LED System Warranty",
    leadTime: "10-12 Business Days",
    image: "/modern_tv_panel.jpg",
    description: "Book-matched Italian marble backplate with backlit LED halo glow, handcrafted vertical teak louver wings, hidden wire channels, and floating 3-drawer media credenza.",
    isCustomizable: true,
    featured: true
  },

  // ==========================================
  // 5. HOME OFFICE & STUDY
  // ==========================================
  {
    id: "HO-FLT-01",
    name: "Aero Minimalist Floating Teak Wall-Mounted Study Desk",
    category: "study",
    price: 22000,
    originalPrice: 27000,
    rating: 4.9,
    woodType: "Grade-A Burma Teak & HDHMR Marine Core",
    finish: "Natural Teak Satin Polyurethane with Brass Trim",
    dimensions: "60\" W x 22\" D x 12\" H (152 cm x 56 cm x 30 cm)",
    configuration: "Floating Wall Study Workstation + Integrated Wire Management & Dual Drawers",
    warranty: "10-Year Structural Wall Cleat Warranty",
    leadTime: "7-10 Business Days",
    image: "/modern_study_desk.jpg",
    description: "Clean floating study desk anchored securely to walls with reinforced steel brackets, featuring 2 concealed soft-close drawers and integrated wire raceway.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "HO-BKS-02",
    name: "Geometric Teakwood & Matte Black Architectural Bookshelf",
    category: "study",
    price: 36000,
    originalPrice: 44000,
    rating: 4.9,
    woodType: "Solid Burma Teak Shelves & Heavy Steel Frame",
    finish: "Dark Walnut Stain & Matte Powder-Coated Metal",
    dimensions: "48\" W x 15\" D x 78\" H (122 cm x 38 cm x 198 cm)",
    configuration: "5-Tier Asymmetrical Display & Heavy Load-Bearing Bookshelf",
    warranty: "10-Year Load-Bearing Warranty",
    leadTime: "8-10 Business Days",
    image: "/geometric_bookshelf.jpg",
    description: "Open-plan asymmetric display shelving unit perfect for books, artifacts, and lighting, offering robust load-bearing solid teak tier shelves.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "OF-DSK-01",
    name: "Sovereign Burma Teak Executive Desk & Credenza Set",
    category: "office",
    price: 64000,
    originalPrice: 78000,
    rating: 5.0,
    woodType: "Grade-A Burma Teakwood",
    finish: "Dark Espresso Polyurethane Lacquer & Cognac Leather Inlay",
    dimensions: "90\" W x 42\" D x 30\" H (228 cm x 107 cm x 76 cm) + 6ft Return Credenza",
    configuration: "Executive Desk + Return Side Credenza + Locking File Drawers",
    warranty: "15-Year Solid Teakwood Warranty",
    leadTime: "12-15 Business Days",
    image: "/executive_desk.jpg",
    description: "Commanding 7.5ft executive desk with carved modesty panel, wire management raceways, locking file drawers, and Italian full-grain cognac leather top.",
    isCustomizable: true,
    featured: true
  },

  // ==========================================
  // 6. ACCENTS & JHULA SWINGS
  // ==========================================
  {
    id: "HO-SWG-01",
    name: "Boho Luxury Natural Rattan & Teak Hanging Swing Jhula",
    category: "accents",
    price: 28000,
    originalPrice: 35000,
    rating: 5.0,
    woodType: "Solid Teak Armrests & Eco Rattan Cane Weave",
    finish: "Natural Amber Polish & Solid Antiqued Brass Hanging Chains",
    dimensions: "56\" W x 30\" D x 24\" H (142 cm x 76 cm x 61 cm) - Carries up to 300 kg",
    configuration: "Solid Teak Jhula Swing + Brass Hanging Chains + Velvet Cushions & Bolsters",
    seatingCapacity: "2 to 3 Persons",
    warranty: "10-Year Brass Link & Wood Warranty",
    leadTime: "7-10 Business Days",
    image: "/teak_jhula.jpg",
    description: "Hand-woven natural wicker rattan cocoon swing suspended by antiqued solid brass chains, fitted with water-resistant plush seat cushions and bolster pillows.",
    isCustomizable: true,
    featured: true
  },

  // ==========================================
  // 7. MODULAR KITCHENS
  // ==========================================
  {
    id: "MK-ISL-01",
    name: "Royal Imperial Burma Teak Island Modular Kitchen",
    category: "kitchen",
    price: 185000,
    originalPrice: 220000,
    rating: 5.0,
    woodType: "Grade-A Burma Teak & HDHMR Marine Ply",
    finish: "PU Gloss & Italian Calacatta Gold Quartz Marble",
    dimensions: "Custom 10ft x 10ft Layout (Rate: ₹1,450 / sq. ft.)",
    configuration: "Island Countertop + Base & Wall Cabinets + Tall Pantry Tower",
    warranty: "15-Year Marine Ply & Blum Hardware Warranty",
    leadTime: "15-20 Business Days",
    image: "/kitchen1.jpg",
    description: "Hand-carved Burma Teak fascia island kitchen with 20mm Italian Calacatta Marble waterfall countertop, Blum motion soft-close drawers, and tall pantry pullout towers.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "MK-PAR-02",
    name: "Regency Parallel & L-Shape Glass & Teak Kitchen",
    category: "kitchen",
    price: 145000,
    originalPrice: 175000,
    rating: 4.9,
    woodType: "Solid Sheesham & Toughened Lacquered Glass",
    finish: "Anodized Champagne Brass & Nero Marquina Quartz",
    dimensions: "Custom Parallel Layout (Rate: ₹1,250 / sq. ft.)",
    configuration: "Parallel Cooking & Prep Counters + Breakfast Bar + Tandem Drawers",
    warranty: "15-Year 100% Waterproof Warranty",
    leadTime: "14-18 Business Days",
    image: "/kitchen2.jpg",
    description: "Sleek parallel layout kitchen with fingerprint-resistant lacquered glass shutters, Nero Marquina black quartz countertop, and integrated breakfast bar.",
    isCustomizable: true,
    featured: false
  },
  {
    id: "MK-ACR-03",
    name: "Handleless Super-Matt Acrylic Modular Kitchen",
    category: "kitchen",
    price: 165000,
    originalPrice: 195000,
    rating: 5.0,
    woodType: "HDHMR Marine Board & Anti-fingerprint Acrylic",
    finish: "Super-Matt Cashmere Grey & Anodized GOLA Channel",
    dimensions: "Custom Kitchen Layout (Rate: ₹1,350 / sq. ft.)",
    configuration: "Anti-Fingerprint Nanotech Acrylic Shutters + Seamless GOLA Profile Handles",
    warranty: "15-Year Scratch & Moisture Warranty",
    leadTime: "14-18 Business Days",
    image: "/kitchen3.jpg",
    description: "Ultra-modern handleless modular kitchen featuring anti-fingerprint nanotech super-matt acrylic shutters, seamless GOLA profile handles in anodized black, and quartz countertop.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "MK-SMR-04",
    name: "Smart Sensor Touch Island Kitchen with Cantilevered Bar",
    category: "kitchen",
    price: 215000,
    originalPrice: 255000,
    rating: 5.0,
    woodType: "HDHMR Marine Board & Translucent Patagonia Quartzite",
    finish: "Blum Servo-Drive Motorized Touch & Teak Bar",
    dimensions: "Custom Luxury Layout (Rate: ₹1,650 / sq. ft.)",
    configuration: "Motorized Blum Touch-to-Open Cabinets + Backlit Quartzite Island + Bar Counter",
    warranty: "20-Year Comprehensive Warranty",
    leadTime: "18-22 Business Days",
    image: "/kitchen4.jpg",
    description: "State-of-the-art smart kitchen featuring Blum Servo-Drive motorized automatic touch-to-open cabinets, backlit Patagonia quartzite island with a cantilevered solid Burma teak bar.",
    isCustomizable: true,
    featured: true
  },

  // ==========================================
  // 8. ALMIRAH & WARDROBES
  // ==========================================
  {
    id: "AW-6DR-01",
    name: "Palace 6-Door Carved Burma Teak Heritage Almirah",
    category: "almirah",
    price: 125000,
    originalPrice: 150000,
    rating: 4.9,
    woodType: "100% Solid Seasoned Burma Teakwood",
    finish: "24K Gold Leaf Hand Gilt & Satin Amber Walnut",
    dimensions: "120\" W x 26\" D x 96\" H (305 cm x 66 cm x 244 cm - 10ft x 8ft)",
    configuration: "6-Door Heritage Wardrobe + Center Beveled Mirrors + Concealed Safe + Velvet Trays",
    warranty: "25-Year Solid Teakwood Warranty",
    leadTime: "15-20 Business Days",
    image: "/almirah1.jpg",
    description: "Master hand-carved floral crown pediment 6-door royal almirah with central beveled mirrors, secret brass-locked jewelry safe, and velvet shoe racks.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "AW-GLS-02",
    name: "Solitaire Walk-In Glass Sliding Wardrobe & Dressing Suite",
    category: "almirah",
    price: 145000,
    originalPrice: 175000,
    rating: 5.0,
    woodType: "Fluted Tinted Toughened Glass & Teak Framework",
    finish: "Gold Anodized Aluminum & Tufted Leatherette Backing",
    dimensions: "144\" W x 30\" D x 96\" H (366 cm x 76 cm x 244 cm - 12ft x 8ft)",
    configuration: "Floor-to-Ceiling Tinted Glass Sliding Wardrobe + Sensor LED Bars + Accessory Organizers",
    warranty: "15-Year Track & Glass Guarantee",
    leadTime: "14-18 Business Days",
    image: "/almirah2.jpg",
    description: "Floor-to-ceiling glass sliding walk-in wardrobe with automatic sensor 3000K LED lighting, velvet watch/jewelry pullout trays, and climate-controlled shoe display.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "AW-FLT-03",
    name: "Architectural Fluted Acrylic & Matte Lacquer Sliding Almirah",
    category: "almirah",
    price: 110000,
    originalPrice: 132000,
    rating: 4.9,
    woodType: "HDHMR Marine Board & Fluted Matte Acrylic",
    finish: "Fluted White Acrylic & Champagne Gold Profile",
    dimensions: "108\" W x 24\" D x 96\" H (274 cm x 61 cm x 244 cm - 9ft x 8ft)",
    configuration: "3-Door Top-Hung Sliding Wardrobe + Vertical Fluted Acrylic Panels",
    warranty: "15-Year Smooth Glide Track Warranty",
    leadTime: "12-15 Business Days",
    image: "/almirah3.jpg",
    description: "Contemporary sliding door wardrobe featuring 3D fluted vertical textured acrylic door panels, slim champagne gold aluminum profile borders, and soft-close top-hung sliding mechanism.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "AW-RGM-04",
    name: "Palazzo Rose Gold Mirror & Tufted Leather 4-Door Almirah",
    category: "almirah",
    price: 118000,
    originalPrice: 140000,
    rating: 5.0,
    woodType: "Teak Framework & Toughened Rose Gold Mirror Glass",
    finish: "Rose Gold Tinted Mirror & Nude Leatherette Side Panels",
    dimensions: "96\" W x 24\" D x 96\" H (244 cm x 61 cm x 244 cm - 8ft x 8ft)",
    configuration: "4-Door Wardrobe + Beveled Rose Gold Mirror Glass + Leatherette Panelling",
    warranty: "15-Year Comprehensive Warranty",
    leadTime: "12-15 Business Days",
    image: "/almirah4.jpg",
    description: "Exquisite 4-door wardrobe featuring bevelled rose gold reflective mirror glass shutters, nude leatherette side panelling, rose gold metal handles, and velvet-lined drawers.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "AW-PTO-05",
    name: "Zenith Minimal Handleless Push-to-Open Master Wardrobe",
    category: "almirah",
    price: 92000,
    originalPrice: 110000,
    rating: 4.8,
    woodType: "HDHMR Marine Board & Teak Veneer Inserts",
    finish: "Super-Matt Ivory Polyurethane & Concealed Push Rebounds",
    dimensions: "120\" W x 24\" D x 96\" H (305 cm x 61 cm x 244 cm - 10ft x 8ft)",
    configuration: "Seamless Floor-to-Ceiling Push Rebound Wardrobe + Integrated Vanity Desk Niche",
    warranty: "15-Year Push Mechanism Warranty",
    leadTime: "10-14 Business Days",
    image: "/almirah5.jpg",
    description: "Seamless minimal floor-to-ceiling handleless wardrobe featuring super-matt ivory PU finish, push-to-open spring hinges, hidden shadow-gap joints, and integrated vanity desk module.",
    isCustomizable: true,
    featured: false
  },

  // ==========================================
  // 9. TEAK & ROYAL DOORS
  // ==========================================
  {
    id: "DR-TRK-01",
    name: "Imperial Hand-Carved Burma Teak Royal Entrance Double Door",
    category: "doors",
    price: 68000,
    originalPrice: 82000,
    rating: 5.0,
    woodType: "100% Grade-A Seasoned Solid Burma Teakwood (3-Inch Thick)",
    finish: "Satin Amber Walnut & 24K Gold Leaf Details",
    dimensions: "8ft H x 5ft W x 3\" Thick (244 cm x 152 cm with Teak Frame)",
    configuration: "Heavy Double Door Set + Matching Teak Frame + Carved Royal Crest + Brass Pulls",
    warranty: "25-Year Termite & Weather Resistance Warranty",
    leadTime: "14-18 Business Days",
    image: "/door1.jpg",
    description: "Grand entrance double door crafted from 3-inch thick solid Burma teakwood, featuring deep relief hand-carved royal motif panels, brass stud embellishments, and solid brass antique handles.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "DR-VNR-02",
    name: "Contemporary Smoked Walnut Flush Veneer Door with Brass Inlays",
    category: "doors",
    price: 24000,
    originalPrice: 29000,
    rating: 4.9,
    woodType: "Solid Core Marine Flush Door with Smoked Walnut Veneer",
    finish: "Natural Matte PU & Vertical Brass T-Strips",
    dimensions: "8ft H x 3.5ft W (244 cm x 107 cm with Frame & Magnetic Lock)",
    configuration: "Single Flush Door + Solid Teak Frame + Mortise Lock + Vertical Brass Inlays",
    warranty: "15-Year Anti-Warping Warranty",
    leadTime: "7-10 Business Days",
    image: "/door2.jpg",
    description: "Sleek architectural flush door clad in premium natural smoked walnut timber veneer, inlaid with vertical brushed champagne brass metal profiles and magnetic mortise lock.",
    isCustomizable: true,
    featured: false
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
    imageAfter: "/maharaja_sofa.jpg",
    description: "Complete turnkey interior overhaul featuring hand-carved teak coffered ceilings, wall panelling, custom royal dining suite, and chandelier lighting.",
    highlights: ["Teak Coffered Ceiling", "Italian Marble Flooring Integration", "Full Classical Villa Styling"]
  },
  {
    id: "p2",
    title: "Luxury Penthouse Living Room & Private Bar Lounge",
    category: "residential",
    location: "Kankarbagh, Patna",
    area: "3,800 sq. ft.",
    completionYear: "2024",
    imageAfter: "/modular_boucle_sofa.jpg",
    description: "Neo-classical open plan design with velvet Chesterfield seating, brass accent wall trims, and custom teakwood bar lounge.",
    highlights: ["Custom Wine Bar Lounge", "Tufted Velvet Accent Walls", "Smart Ambient Warm Lighting"]
  },
  {
    id: "p3",
    title: "Master Suite & Japandi Floating Bedroom Architecture",
    category: "residential",
    location: "Bailey Road, Patna",
    area: "2,400 sq. ft.",
    completionYear: "2025",
    imageAfter: "/japandi_bed.jpg",
    description: "Modern minimalist master bedroom renovation featuring floating teak platform bed, slatted acoustic wall panelling, and walk-in wardrobe.",
    highlights: ["Floating Japandi Bed", "Acoustic Slat Panelling", "Integrated Halo Lighting"]
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
    role: "Senior Consultant, Patna",
    comment: "The custom furniture quality is unmatched. I inquired via WhatsApp at 9801197102, got a 3D preview and cost estimate within hours, and the installation was flawless.",
    rating: 5,
    project: "Penthouse Master Bedroom"
  },
  {
    name: "Vikramaditya Roy",
    role: "Real Estate Developer",
    comment: "Superb modular kitchen and wardrobe craftsmanship. Delivered right on schedule with top-grade Burma teak and Blum soft-close fittings.",
    rating: 5,
    project: "Turnkey Luxury Apartment"
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
  },
  {
    question: "Can I customize the dimensions and finish of any catalog item?",
    answer: "Absolutely! Every item is manufactured at our own woodworking facility. You can customize dimensions (inches/cm), wood grade (Burma Teak, Sheesham, Walnut), polish finish (Matt, High-Gloss PU, Natural Oil), and fabric colors."
  }
];
