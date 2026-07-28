export interface FurnitureItem {
  id: string;
  name: string;
  category: 'living' | 'dining' | 'bedroom' | 'study' | 'accents';
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
    message || "Hello Sharma Interior Designer, I would like to inquire about your classical furniture designs and interior services."
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
};

export const FURNITURE_CATALOG: FurnitureItem[] = [
  {
    id: "f1",
    name: "The Royal Teakwood Maharaja Sofa Set (3+2+1 + Table)",
    category: "living",
    price: 265000,
    originalPrice: 295000,
    rating: 4.9,
    woodType: "Grade-A Seasoned Burma Teak",
    finish: "24K Gold Leaf Gilt & Dark Walnut Lacquer",
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
    woodType: "Solid Burma Teakwood & Italian Carrara Marble",
    finish: "Antique Amber Polish with Champagne Gold Trim",
    dimensions: "108\" L x 48\" W x 30\" H (8-Seater Table)",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200&auto=format&fit=crop",
    description: "Grand classical dining table featuring hand-engraved twin pedestal legs, accompanied by 8 opulent high-back carved dining chairs.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "f3",
    name: "Victoria Four-Poster Master Bed Suite (King Bed + 2 Nightstands)",
    category: "bedroom",
    price: 245000,
    originalPrice: 280000,
    rating: 4.9,
    woodType: "Solid Rosewood (Sheesham) & Italian Leather",
    finish: "Deep Royal Mahogany Stain & Satin Varnish",
    dimensions: "King Size (80\" x 88\" x 90\" Column Height)",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    description: "Architectural 4-poster royal bed frame with turned columns, carved crown header, tufted leather headboard, and pair of matching nightstands.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "f4",
    name: "Executive Grand Consul Writing Desk & Leather Chair",
    category: "study",
    price: 165000,
    originalPrice: 185000,
    rating: 4.8,
    woodType: "Burma Teak with Italian Gold Marble Top",
    finish: "Rich Espresso Polish & Brass Inlays",
    dimensions: "78\" W x 38\" D x 31\" H",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop",
    description: "Commanding executive desk featuring hand-carved drawer handles, integrated cable channels, and matching tufted leather executive chair.",
    isCustomizable: true,
    featured: false
  },
  {
    id: "f5",
    name: "Baroque Hand-Sculpted Hallway Console & Crown Arch Mirror",
    category: "accents",
    price: 115000,
    originalPrice: 130000,
    rating: 4.9,
    woodType: "Burma Teakwood & Beveled Belgian Glass",
    finish: "24K Gold Leaf Gilt Finish",
    dimensions: "66\" W x 20\" D x 36\" H Console + 50\" Arch Mirror",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop",
    description: "Statement entryway console table with sweeping carved scrollwork legs and a matching ornate baroque crown arch mirror.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "f6",
    name: "Heritage Chesterfield Tufted Armchair (Italian Leather)",
    category: "living",
    price: 88000,
    originalPrice: 98000,
    rating: 4.9,
    woodType: "Solid Burma Teak Frame & Italian Full-Grain Leather",
    finish: "Vintage Cognac Tan Leather",
    dimensions: "44\" W x 38\" D x 34\" H",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    description: "Deep button-tufted classic Chesterfield lounge chair built on a kiln-dried hardwood structure with hand-hammered brass stud detailing.",
    isCustomizable: true,
    featured: false
  },
  {
    id: "f7",
    name: "Renaissance Carved Glass Crockery Showcase Cabinet",
    category: "dining",
    price: 215000,
    originalPrice: 240000,
    rating: 5.0,
    woodType: "Teakwood with Tempered Beveled Glass",
    finish: "Classic Warm Amber Gloss & Gold Trim",
    dimensions: "78\" W x 22\" D x 90\" H",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1200&auto=format&fit=crop",
    description: "Display showcase featuring warm interior LED spotlighting, velvet-lined silverware drawers, and hand-carved pediment crown.",
    isCustomizable: true,
    featured: false
  },
  {
    id: "f8",
    name: "Palace 6-Door Wardrobe & Dressing Suite",
    category: "bedroom",
    price: 345000,
    originalPrice: 385000,
    rating: 4.9,
    woodType: "Burma Teak & Antique Brass Hardware",
    finish: "Satin Dark Chestnut & Gold Leaf Pediments",
    dimensions: "120\" W x 26\" D x 96\" H",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    description: "Grand classical 6-door wardrobe with full-length vanity mirrors, secret brass-locked jewelry safes, and velvet shoe racks.",
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
    imageAfter: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    description: "Neo-classical open plan design with velvet Chesterfield seating, brass accent wall trims, and custom teakwood bar lounge.",
    highlights: ["Custom Wine Bar Lounge", "Tufted Velvet Accent Walls", "Smart Ambient Warm Lighting"]
  },
  {
    id: "p3",
    title: "Executive Corporate Boardroom & Chairman Chambers",
    category: "commercial",
    location: "Boring Road",
    area: "4,200 sq. ft.",
    completionYear: "2025",
    imageBefore: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
    description: "High-status corporate office interior featuring 20-seater teak conference table, leather recliner chairs, and acoustic timber panelling.",
    highlights: ["20-Seater Conference Suite", "Acoustic Wood Panelling", "Integrated AV Systems"]
  },
  {
    id: "p4",
    title: "Heritage Mansion Master Bedroom & Dressing Suite",
    category: "restoration",
    location: "Baily Road",
    area: "2,500 sq. ft.",
    completionYear: "2024",
    imageBefore: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop",
    description: "Restoration of a family estate master suite, combining classic brass scrollwork, four-poster bed, and custom walk-in closet.",
    highlights: ["Four-Poster Bed Restoration", "Walk-in Dressing Suite", "Vintage Brass Inlays"]
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
  },
  {
    name: "Vikramaditya Singh",
    role: "Managing Director, Singh Group",
    comment: "We commissioned Sharma Interior Designer for our corporate headquarters boardrooms. The classical mahogany finish and craftsmanship are world-class. Prompt response and super easy to work with.",
    rating: 5,
    project: "Corporate Office & Boardroom"
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
    question: "What wood types do you use for handcrafted furniture?",
    answer: "We use 100% seasoned Grade-A Burma Teakwood, Sheesham (Rosewood), Mahogany, and Steam-cured Walnut. All our timber undergoes anti-termite treatment and kiln-drying for lifelong structural durability."
  },
  {
    question: "Can I customize the dimensions, polish finish, and upholstery fabric?",
    answer: "Absolutely! Every piece of furniture can be customized down to the millimeter, choice of wood polish (Gold leaf, Dark Walnut, Antique Amber, Natural Gloss), and fabric (Velvet, Italian Leather, Jacquard)."
  },
  {
    question: "What is your warranty policy?",
    answer: "We offer a 10-Year Structural Warranty on all solid hardwood furniture and a 5-Year On-Site Service Warranty for complete interior projects."
  }
];
