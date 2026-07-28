/**
 * @module PriceBase
 * @description Single source of truth for luxury furniture & architectural interior design pricing algorithms,
 * market benchmarks, material multipliers, and WhatsApp quote generation for Sharma Interior Designer.
 */

export interface PriceBaseItem {
  id: string;
  name: string;
  category: 'living' | 'dining' | 'bedroom' | 'study' | 'accents';
  basePrice: number;
  woodGrade: 'Burma Teak' | 'Rosewood (Sheesham)' | 'Steam Walnut' | 'Teak & Marble';
  defaultFinish: string;
}

export interface MaterialMultiplier {
  id: string;
  label: string;
  multiplier: number;
  description: string;
}

// Core Luxury Furniture Base Price Registry (2026 Benchmarks)
export const PRICEBASE_CATALOG: Record<string, PriceBaseItem> = {
  maharaja_sofa: {
    id: 'f1',
    name: 'Royal Teakwood Maharaja Sofa Set (3+2+1)',
    category: 'living',
    basePrice: 265000,
    woodGrade: 'Burma Teak',
    defaultFinish: '24K Gold Leaf Gilt & Dark Walnut'
  },
  emperor_dining: {
    id: 'f2',
    name: 'Emperor Carved Dining Suite (8-Seater + Italian Marble)',
    category: 'dining',
    basePrice: 325000,
    woodGrade: 'Teak & Marble',
    defaultFinish: 'Antique Amber Polish & Champagne Gold'
  },
  victoria_bed: {
    id: 'f3',
    name: 'Victoria Four-Poster Master Bed Suite',
    category: 'bedroom',
    basePrice: 245000,
    woodGrade: 'Rosewood (Sheesham)',
    defaultFinish: 'Deep Royal Mahogany & Italian Leather'
  },
  executive_desk: {
    id: 'f4',
    name: 'Executive Grand Consul Writing Desk',
    category: 'study',
    basePrice: 165000,
    woodGrade: 'Burma Teak',
    defaultFinish: 'Espresso Polish & Italian Gold Marble'
  },
  baroque_console: {
    id: 'f5',
    name: 'Baroque Hand-Sculpted Console & Mirror',
    category: 'accents',
    basePrice: 115000,
    woodGrade: 'Burma Teak',
    defaultFinish: '24K Gold Leaf Gilt'
  },
  chesterfield_armchair: {
    id: 'f6',
    name: 'Heritage Chesterfield Tufted Armchair',
    category: 'living',
    basePrice: 88000,
    woodGrade: 'Burma Teak',
    defaultFinish: 'Vintage Cognac Italian Leather'
  }
};

// Turnkey Interior Rate per Sq. Ft. (PriceBase Rates)
export const PRICEBASE_INTERIOR_RATES = {
  royal_living_sqft: 1250,
  emperor_dining_sqft: 1450,
  master_bedroom_sqft: 1350,
  turnkey_royal_villa_sqft: 2850,
};

// Wood & Finish PriceBase Multipliers
export const PRICEBASE_TIMBER_TIERS: Record<string, MaterialMultiplier> = {
  classic_teak: {
    id: 'classic_teak',
    label: 'Grade-A Seasoned Burma Teak',
    multiplier: 1.0,
    description: '100% Seasoned Burma Teak with anti-termite treatment'
  },
  teak_marble: {
    id: 'teak_marble',
    label: 'Burma Teak & Italian Carrara Marble',
    multiplier: 1.25,
    description: 'Burma Teakwood frame paired with 20mm Italian Carrara Marble top'
  },
  gold_leaf_royal: {
    id: 'gold_leaf_royal',
    label: '24K Gold Leaf Gilt & Italian Leather',
    multiplier: 1.45,
    description: 'Genuine 24K Gold foil gilding & imported Italian full-grain leather'
  }
};

/**
 * Calculate custom furniture price based on PriceBase rules
 */
export function calculatePriceBaseCustomItem(
  basePrice: number,
  tierId: string,
  extraTrimMod: number = 0
): number {
  const tier = PRICEBASE_TIMBER_TIERS[tierId] || PRICEBASE_TIMBER_TIERS.classic_teak;
  const calculated = Math.round(basePrice * tier.multiplier + extraTrimMod);
  return calculated;
}

/**
 * Calculate turnkey interior cost based on PriceBase rate per sq. ft.
 */
export function calculatePriceBaseTurnkeyVilla(
  sqFtArea: number,
  ratePerSqFt: number = PRICEBASE_INTERIOR_RATES.turnkey_royal_villa_sqft,
  tierId: string = 'teak_marble'
): number {
  const tier = PRICEBASE_TIMBER_TIERS[tierId] || PRICEBASE_TIMBER_TIERS.teak_marble;
  return Math.round(sqFtArea * ratePerSqFt * tier.multiplier);
}

/**
 * Format currency amount into Indian Rupee format (e.g. ₹2,65,000)
 */
export function formatPriceBaseRupees(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}
