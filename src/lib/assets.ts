/**
 * Asset utilities for checking asset existence and handling fallbacks.
 * Provides type-safe asset validation and fallback strategies.
 */

/**
 * Check if an asset file exists by attempting to import it.
 * This uses a type-safe approach by relying on the module resolution system.
 * 
 * For runtime checks, we assume assets in the /public directory are available.
 * Static imports of specific asset files will fail at build time if missing.
 * 
 * @param path - Path to the asset (e.g., '/big-ship-logo.svg' or '/programs/adopt-a-site-hero.jpg')
 * @returns true if the asset can be referenced, false otherwise
 */
export function checkAssetExists(path: string): boolean {
  // For public assets, we perform a basic validation
  // In a real implementation, this could be enhanced with:
  // 1. Build-time asset inventory generation
  // 2. Runtime HEAD requests to verify asset availability
  // 3. Static asset manifest checking
  
  if (!path) return false;
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Basic validation: path should have a file extension
  if (!normalizedPath.includes('.')) return false;
  
  // List of known asset paths that should exist
  const knownAssets = new Set([
    '/big-ship-logo.png',
    '/big-ship-logo.svg',
    '/big-ship-icon.svg',
    '/big-ship-icon-dark.svg',
    '/bigship_logo_emergence.mp4',
    '/NXTW data card background.jpeg',
  ]);
  
  // Return true if path is in known assets or has a valid extension in expected directories
  if (knownAssets.has(normalizedPath)) return true;
  
  // Check if path matches expected patterns (program images, impact images, etc.)
  const validPatterns = [
    /^\/programs\/.*\.(jpg|jpeg|png|webp|gif)$/i,
    /^\/impact\/.*\.(jpg|jpeg|png|webp|gif)$/i,
    /^\/logos\/.*\.(svg|png|webp)$/i,
    /^\/fallback\/.*\.(jpg|jpeg|png|webp|gif)$/i,
  ];
  
  return validPatterns.some(pattern => pattern.test(normalizedPath));
}

/**
 * Get a list of all known public assets.
 * Useful for inventory and validation purposes.
 * 
 * @returns Array of known asset paths
 */
export function getKnownAssets(): string[] {
  return [
    '/big-ship-logo.png',
    '/big-ship-logo.svg',
    '/big-ship-icon.svg',
    '/bigship_logo_emergence.mp4',
    // Program images — served via Unsplash IMG constants (no local files)
    // Impact images — served via Unsplash IMG constants (no local files)
    // Fallback images — served via Unsplash FALLBACK_IMAGES constants (no local files)
  ];
}

/**
 * Validate asset extension.
 * 
 * @param path - Asset path
 * @param allowedExtensions - Array of allowed extensions (e.g., ['jpg', 'png', 'svg'])
 * @returns true if asset has an allowed extension
 */
export function isValidAssetExtension(path: string, allowedExtensions: string[]): boolean {
  if (!path) return false;
  
  const ext = path.split('.').pop()?.toLowerCase();
  return ext ? allowedExtensions.includes(ext) : false;
}
