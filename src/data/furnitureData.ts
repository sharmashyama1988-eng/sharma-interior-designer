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
  { id: 'kitchen', label: 'Modular Kitchens' },
  { id: 'almirah', label: 'Almirah & Wardrobes' },
  { id: 'doors', label: 'Teak & Royal Doors' },
  { id: 'office', label: 'Office Furniture' },
  { id: 'master_office', label: 'Master Office & Chairman' },
  { id: 'wall_panelling', label: 'Wall Panelling' },
  { id: 'tv_panel', label: 'LED TV Panel Units' },
  { id: 'showroom', label: 'Showroom Interiors' },
  { id: 'luxury_office', label: 'Luxury Office Chambers' },
  { id: 'shop_almirah', label: 'Shop Furniture Almirah' },
  { id: 'living', label: 'Living Room' },
  { id: 'dining', label: 'Dining Suites' },
  { id: 'bedroom', label: 'Bedroom Suites' },
];

export const FURNITURE_CATALOG: FurnitureItem[] = [
  // 1. Modular Kitchens (Classical & Modern)
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

  // 2. Almirah & Wardrobe Systems (Heritage & Modern)
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

  // 3. Teak & Royal Doors
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

  // 4. Office Furniture
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
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
    description: "Architectural 14-foot conference table with Italian Bottochino marble centerpiece slab, motorized AV access boxes, HDMI/LAN sockets, and heavy twin brass pedestals.",
    isCustomizable: true,
    featured: true
  },

  // 5. Master Office & Chairman Chambers
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
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
    description: "Exclusive C-Suite presidential desk featuring hand-carved baroque coat-of-arms crest, Italian Nero Portoro Marble top inset, and biometric safe drawer.",
    isCustomizable: true,
    featured: true
  },

  // 6. Wall Panelling
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
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    description: "French Victorian raised panel wainscoting with hand-turned solid teak dado rail, acoustic timber backing, and scratch-resistant clear lacquer.",
    isCustomizable: true,
    featured: true
  },

  // 7. Wall Mount LED TV Panel Units
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
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    description: "Book-matched Italian Statuario marble backplate with backlit LED halo glow, handcrafted vertical teak louver wings, and floating media credenza.",
    isCustomizable: true,
    featured: true
  },

  // 8. Commercial Showroom Interiors
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
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop",
    description: "Bespoke retail display wall with gold brass suspension columns, micro LED spot highlights (CRI 95+), teak storage cabinetry, and marble base plinth.",
    isCustomizable: true,
    featured: true
  },

  // 9. Luxury Executive Office Suites
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
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    description: "Turnkey C-Suite executive office suite with teak coffered ceiling, acoustic wall lining, presidential desk, Chesterfield leather lounge, and private bar.",
    isCustomizable: true,
    featured: true
  },

  // 10. Shop Furniture & Retail Display Almirahs
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
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1200&auto=format&fit=crop",
    description: "High-security jewelry display almirah with anti-shatter glass, vertical micro-LED spot channels, velvet ring/watch trays, and reinforced overnight vault storage.",
    isCustomizable: true,
    featured: true
  },

  // Classical Living, Dining & Bedroom Suites
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
  }
];

export const PROJECTS_GALLERY = [
  {
    id: "p1",
    title: "Royal Heritage Villa Interior & Bespoke Teak Woodwork",
    category: "villas",
    location: "Patna / NCR",
    area: "6,500 sq. ft.",
    completionYear: "2025",
    imageBefore: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
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
