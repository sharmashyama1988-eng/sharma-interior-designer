import { PRICEBASE_CATALOG, formatPriceBaseRupees } from '@/lib/pricebase';

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
    id: PRICEBASE_CATALOG.maharaja_sofa.id,
    name: PRICEBASE_CATALOG.maharaja_sofa.name,
    category: "living",
    price: PRICEBASE_CATALOG.maharaja_sofa.basePrice,
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
    id: PRICEBASE_CATALOG.emperor_dining.id,
    name: PRICEBASE_CATALOG.emperor_dining.name,
    category: "dining",
    price: PRICEBASE_CATALOG.emperor_dining.basePrice,
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
    id: PRICEBASE_CATALOG.victoria_bed.id,
    name: PRICEBASE_CATALOG.victoria_bed.name,
    category: "bedroom",
    price: PRICEBASE_CATALOG.victoria_bed.basePrice,
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
    id: PRICEBASE_CATALOG.executive_desk.id,
    name: PRICEBASE_CATALOG.executive_desk.name,
    category: "study",
    price: PRICEBASE_CATALOG.executive_desk.basePrice,
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
    id: PRICEBASE_CATALOG.baroque_console.id,
    name: PRICEBASE_CATALOG.baroque_console.name,
    category: "accents",
    price: PRICEBASE_CATALOG.baroque_console.basePrice,
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
    id: PRICEBASE_CATALOG.chesterfield_armchair.id,
    name: PRICEBASE_CATALOG.chesterfield_armchair.name,
    category: "living",
    price: PRICEBASE_CATALOG.chesterfield_armchair.basePrice,
    originalPrice: 98000,
    rating: 4.9,
    woodType: "Solid Burma Teak Frame & Italian Full-Grain Leather",
    finish: "Vintage Cognac Tan Leather",
    dimensions: "44\" W x 38\" D x 34\" H",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    description: "Deep button-tufted classic Chesterfield lounge chair built on a kiln-dried hardwood structure with hand-hammered brass stud detailing.",
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
