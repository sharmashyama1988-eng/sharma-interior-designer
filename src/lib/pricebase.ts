/**
 * @module PriceBase
 * @description Single source of truth for 9-Category Luxury Pricing Algorithms,
 * market benchmarks, material multipliers, and WhatsApp quote generation for Sharma Interior Designer.
 */

export interface PriceBaseItem {
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
    | 'office' 
    | 'master_office' 
    | 'wall_panelling' 
    | 'tv_panel' 
    | 'showroom' 
    | 'luxury_office' 
    | 'shop_almirah';
  basePrice: number;
  woodGrade: 'Burma Teak' | 'Rosewood (Sheesham)' | 'Steam Walnut' | 'Teak & Marble' | 'Marine Ply & Glass';
  defaultFinish: string;
  ratePerSqFt?: number;
}

// 9-Category Master Catalog Price Registry
export const PRICEBASE_EXTENDED_CATALOG: Record<string, PriceBaseItem> = {
  // 1. Modular Kitchen
  kitchen_island: {
    id: 'k1',
    name: 'Royal Burma Teak Island Modular Kitchen',
    category: 'kitchen',
    basePrice: 285000,
    woodGrade: 'Marine Ply & Glass',
    defaultFinish: 'PU Gloss & Italian Quartz Countertop',
    ratePerSqFt: 1850
  },
  // 2. Almirah / Wardrobe Systems
  almirah_6door: {
    id: 'a1',
    name: 'Palace 6-Door Carved Teakwood Almirah & Wardrobe',
    category: 'almirah',
    basePrice: 245000,
    woodGrade: 'Burma Teak',
    defaultFinish: '24K Gold Leaf Gilt & Satin Chestnut',
    ratePerSqFt: 1450
  },
  // 3. Office Furniture
  office_desk: {
    id: 'off1',
    name: 'Executive Teak Conference & Office Desk',
    category: 'office',
    basePrice: 125000,
    woodGrade: 'Burma Teak',
    defaultFinish: 'Dark Walnut Polish & Cable Channels'
  },
  // 4. Master Office / Chairman Chambers
  master_office_suite: {
    id: 'mo1',
    name: 'Chairman Royal Teak Master Office Desk Suite',
    category: 'master_office',
    basePrice: 285000,
    woodGrade: 'Burma Teak',
    defaultFinish: 'Espresso Lacquer & Italian Gold Marble Top'
  },
  // 5. Wall Panelling
  wall_panelling_classic: {
    id: 'wp1',
    name: 'Heritage Teakwood Wainscoting & Wall Panelling',
    category: 'wall_panelling',
    basePrice: 135000,
    woodGrade: 'Burma Teak',
    defaultFinish: 'Dado Rail & Brass Inlay Trim',
    ratePerSqFt: 1350
  },
  // 6. Wall Mount LED TV Panel Units
  tv_panel_unit: {
    id: 'tv1',
    name: 'Royal Floating Marble & Teak Louvered TV Panel',
    category: 'tv_panel',
    basePrice: 145000,
    woodGrade: 'Teak & Marble',
    defaultFinish: 'Italian Statuario Marble & Ambient LED Strip'
  },
  // 7. Showroom Interiors
  showroom_interior: {
    id: 'sh1',
    name: 'Luxury Retail Showroom Interior & Counter System',
    category: 'showroom',
    basePrice: 380000,
    woodGrade: 'Marine Ply & Glass',
    defaultFinish: 'High-Gloss Acrylic & Spotlight Display Racks',
    ratePerSqFt: 1950
  },
  // 8. Luxury Executive Office
  luxury_office_suite: {
    id: 'lo1',
    name: 'Turnkey Luxury Executive Office Chamber Suite',
    category: 'luxury_office',
    basePrice: 450000,
    woodGrade: 'Burma Teak',
    defaultFinish: 'Acoustic Wood Panelling & Leather Lounge'
  },
  // 9. Shop Furniture & Retail Display Almirahs
  shop_display_almirah: {
    id: 'sa1',
    name: 'Glass Counter Display Almirah & Retail Racks',
    category: 'shop_almirah',
    basePrice: 165000,
    woodGrade: 'Teak & Marble',
    defaultFinish: 'Tempered Glass & Velvet-lined Jewelry Showcase'
  }
};

/**
 * Format currency amount into Indian Rupee format (e.g. ₹2,65,000)
 */
export function formatPriceBaseRupees(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}
