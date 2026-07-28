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
    name: "The Royal Teakwood Maharaja Sofa Set",
    category: "living",
    price: 145000,
    originalPrice: 165000,
    rating: 4.9,
    woodType: "Grade-A Seasoned Teak",
    finish: "Classical Gold Leaf & Dark Walnut Lacquer",
    dimensions: "84\" W x 38\" D x 42\" H (3-Seater)",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
    description: "Hand-carved classical sofa set with intricate floral motifs, upholstered in premium velvet with antique brass nailhead accents.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "f2",
    name: "Emperor Hand-Carved Dining Suite",
    category: "dining",
    price: 185000,
    originalPrice: 210000,
    rating: 5.0,
    woodType: "Solid Burma Teakwood",
    finish: "Antique Polish with Champagne Gold Trim",
    dimensions: "96\" L x 44\" W x 30\" H (8-Seater Table)",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200&auto=format&fit=crop",
    description: "Grand classical dining table featuring hand-engraved pedestal legs, accompanied by 8 opulent high-back carved dining chairs.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "f3",
    name: "Victoria Four-Poster Master Bed",
    category: "bedroom",
    price: 165000,
    originalPrice: 190000,
    rating: 4.9,
    woodType: "Solid Rosewood (Sheesham)",
    finish: "Deep Mahogany Stain & Satin Varnish",
    dimensions: "King Size (78\" x 84\" x 88\" Height)",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    description: "Architectural 4-poster royal bed frame with turned columns, carved crown header, and tufted genuine leather headboard.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "f4",
    name: "Executive Grand Consul Writing Desk",
    category: "study",
    price: 98000,
    originalPrice: 115000,
    rating: 4.8,
    woodType: "Pure Teak with Italian Marble Top",
    finish: "Rich Espresso Polish",
    dimensions: "72\" W x 36\" D x 31\" H",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop",
    description: "Commanding executive desk featuring brass drawer handles, cable management ports, and plush leather inset desk pad.",
    isCustomizable: true,
    featured: false
  },
  {
    id: "f5",
    name: "Baroque Hand-Sculpted Console & Mirror",
    category: "accents",
    price: 68000,
    originalPrice: 78000,
    rating: 4.9,
    woodType: "Teakwood & Beveled Glass",
    finish: "Antiqued Gold Gilt Finish",
    dimensions: "60\" W x 18\" D x 34\" H",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop",
    description: "Statement hallway console table with sweeping carved scrollwork legs and a matching ornamental crown arch mirror.",
    isCustomizable: true,
    featured: true
  },
  {
    id: "f6",
    name: "Heritage Chesterfield Tufted Armchair",
    category: "living",
    price: 52000,
    originalPrice: 60000,
    rating: 4.9,
    woodType: "Solid Teak Frame & Italian Leather",
    finish: "Vintage Cognac Tan Leather",
    dimensions: "42\" W x 36\" D x 32\" H",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    description: "Deep button-tufted classic Chesterfield chair built on a kiln-dried hardwood structure with hand-hammered brass stud detailing.",
    isCustomizable: true,
    featured: false
  },
  {
    id: "f7",
    name: "Renaissance Carved Glass Crockery Cabinet",
    category: "dining",
    price: 135000,
    originalPrice: 150000,
    rating: 5.0,
    woodType: "Teakwood with Tempered Glass",
    finish: "Classic Warm Amber Gloss",
    dimensions: "72\" W x 20\" D x 84\" H",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1200&auto=format&fit=crop",
    description: "Display showcase featuring soft-touch interior LED lighting, velvet-lined cutlery drawers, and hand-carved pediment crown.",
    isCustomizable: true,
    featured: false
  },
  {
    id: "f8",
    name: "Palace Nightstand & Wardrobe Duo",
    category: "bedroom",
    price: 210000,
    originalPrice: 240000,
    rating: 4.9,
    woodType: "Burma Teak & Brass Inlays",
    finish: "Satin Dark Chestnut",
    dimensions: "Wardrobe: 96\" W x 24\" D x 90\" H",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    description: "Grand classical 4-door wardrobe with full-length mirrors, secret brass-locked safe drawers, and pair of carved nightstands.",
    isCustomizable: true,
    featured: false
  }
];

export const PROJECTS_GALLERY: ProjectItem[] = [
  {
    id: "p1",
    title: "Royal Heritage Villa Interior & Custom Woodwork",
    category: "villas",
    location: "Patna / NCR",
    area: "6,500 sq. ft.",
    completionYear: "2025",
    imageBefore: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    description: "Complete interior overhaul featuring hand-carved teak coffered ceilings, wall panelling, custom royal dining suite, and chandelier lighting.",
    highlights: ["Custom Teak Ceiling", "Italian Marble Flooring Integration", "Full Classical Villa Styling"]
  },
  {
    id: "p2",
    title: "Luxury Penthouse Living Room & Private Bar",
    category: "residential",
    location: "Kankarbagh",
    area: "3,800 sq. ft.",
    completionYear: "2024",
    imageBefore: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    description: "Neo-classical open plan design with velvet Chesterfield seating, brass accent wall trims, and custom teakwood bar lounge.",
    highlights: ["Custom Wine Bar", "Tufted Velvet Walls", "Smart Ambient Warm Lighting"]
  },
  {
    id: "p3",
    title: "Executive Corporate Boardroom & Chambers",
    category: "commercial",
    location: "Boring Road",
    area: "4,200 sq. ft.",
    completionYear: "2025",
    imageBefore: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
    description: "High-end corporate office interior featuring 18-seater teak conference table, leather recliner chairs, and acoustic timber panelling.",
    highlights: ["18-Seater Conference Suite", "Acoustic Wood Panelling", "Integrated AV Systems"]
  },
  {
    id: "p4",
    title: "Heritage Mansion Bedroom & Dressing Suite",
    category: "restoration",
    location: "Baily Road",
    area: "2,500 sq. ft.",
    completionYear: "2024",
    imageBefore: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
    description: "Restoration of a 70-year-old family estate master suite, combining classic brass scrollwork, four-poster bed, and custom walk-in closet.",
    highlights: ["Four-Poster Bed Restoration", "Walk-in Closet", "Vintage Brass Inlays"]
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
