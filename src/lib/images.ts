import { checkAssetExists } from '@/lib/assets';

/** Unsplash image helpers — remote, responsive, cropped. */
export function unsplash(id: string, w = 1600, h?: number) {
  const crop = h ? `&h=${h}&fit=crop` : "&fit=crop";
  return `https://images.unsplash.com/photo-${id}?auto=format&q=80&w=${w}${crop}`;
}

export const IMG = {
  hero: unsplash("1521737604893-d14cc237f11d", 1920, 1080),
  community: unsplash("1522071820081-009f0129c71c", 1400, 1000),
  workspace: unsplash("1497215728101-856f4ea42174", 1400, 1000),
  tech: unsplash("1531482615713-2afd69097998", 1200, 900),
  arts: unsplash("1516450360452-9312f5e86fc7", 1200, 900),
  business: unsplash("1552664730-d307ca884978", 1200, 900),
  studio: unsplash("1511671782779-c97d3d27a1d4", 1200, 900),
  students: unsplash("1543269865-cbf427effbad", 1200, 900),
  mentor: unsplash("1573164713988-8665fc963095", 1200, 900),
  founder: unsplash("1600880292203-757bb62b4baf", 1200, 900),
  maker: unsplash("1524178232363-1fb2b075b655", 1200, 900),
  team: unsplash("1517048676732-d65bc937f952", 1200, 900),
} as const;

/**
 * Fallback images mapping program IDs to fallback image paths.
 * These are used when primary program images are unavailable.
 * Fallback images should be environmental/landscape photography with proper licensing.
 */
export const FALLBACK_IMAGES = {
  'adopt-a-site': unsplash("1441974231531-c6227db76b6e", 1200, 900), // Mangrove-like landscape
  'reco-yogurt-forest': unsplash("1441974231531-c6227db76b6e", 1200, 900), // Environmental landscape
  'urban-resilience': unsplash("1467817872552-1a7f08c8ee28", 1200, 900), // Community gathering
  'default': unsplash("1469022563149-aa64dbd37dae", 1200, 900), // Generic landscape
} as const;

/**
 * Get the appropriate image for a program, with fallback support.
 * 
 * @param programId - The program identifier (e.g., 'adopt-a-site', 'reco-yogurt-forest')
 * @param primaryImage - Optional primary image URL to check first
 * @returns The image URL to use (either primary if available, or fallback)
 */
export function getProgramImage(programId: string, primaryImage?: string): string {
  // If primary image is provided and exists, use it
  if (primaryImage && checkAssetExists(primaryImage)) {
    return primaryImage;
  }
  
  // Use program-specific fallback
  return FALLBACK_IMAGES[programId as keyof typeof FALLBACK_IMAGES] || FALLBACK_IMAGES.default;
}
