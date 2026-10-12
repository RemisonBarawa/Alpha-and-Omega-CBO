# Big Ship C.B.O. Asset Verification Report

## Task 29 - Asset Verification and Optimization

**Date:** 2024 (Task 29 execution)
**Status:** Complete

---

## 29.1 — Assets Present in `/public`

### ✅ Present and Correct
| File | Size | Status |
|------|------|--------|
| `big-ship-logo.svg` | 2.1 KB | ✅ Present |
| `big-ship-icon.svg` | 1.2 KB | ✅ Present — used as favicon (`/big-ship-icon.svg`) |
| `bigship_logo_emergence.mp4` | 454 KB | ✅ Present — logo animation video |
| `Big Ship Logo.jpg` | 41.7 KB | ✅ Present — source file for logo PNG |
| `NXTW data card background.jpeg` | 427 KB | ✅ Present — used as CSS background pattern |
| `big-ship-logo.png` | 41.7 KB | ✅ Created in Task 29 (copied from `Big Ship Logo.jpg`) |

### ✅ Directory Structure
| Directory | Status |
|-----------|--------|
| `/public/programs/` | ✅ Exists (images served via Unsplash `IMG.*` constants — no local files needed) |
| `/public/impact/` | ✅ Exists (images served via Unsplash `IMG.*` constants — no local files needed) |
| `/public/fallback/` | ✅ Exists (fallbacks served via Unsplash `FALLBACK_IMAGES` constants — no local files needed) |
| `/public/logos/` | ✅ Exists |

### Notes on Missing Program/Impact Images
All program and impact story images are **intentionally served from Unsplash CDN** via the `IMG.*` constants in `src/lib/images.ts`. The local `/programs/`, `/impact/`, and `/fallback/` directories are placeholders for when real Big Ship C.B.O. photos become available. This is correct per the design's fallback strategy.

---

## 29.2 — 404 Error Check

### Issues Found and Fixed
| Asset Path | Issue | Fix Applied |
|-----------|-------|-------------|
| `/big-ship-logo.png` | **File was missing** — referenced in ALL `og:image`/`twitter:image` tags and as `poster`/`fallbackImage` in LogoVideoCard | ✅ Created `big-ship-logo.png` by copying `Big Ship Logo.jpg` |
| `/big-ship-logo-video.mp4` | **Wrong filename** — code referenced this but actual file is `bigship_logo_emergence.mp4` | ✅ Updated `src/routes/index.tsx` to use `/bigship_logo_emergence.mp4` |

### No 404 Paths Remaining
| Asset Path | Status |
|-----------|--------|
| `/big-ship-logo.png` | ✅ Now exists |
| `/big-ship-logo.svg` | ✅ Exists |
| `/big-ship-icon.svg` | ✅ Exists (favicon) |
| `/bigship_logo_emergence.mp4` | ✅ Exists and correctly referenced |
| `/NXTW%20data%20card%20background.jpeg` | ✅ Exists (used in CSS background patterns in `PageHero`, `CtaBand`, and `styles.css`) |
| Unsplash URLs (`IMG.*`) | ✅ External CDN — no local 404 risk |
| Unsplash fallback URLs (`FALLBACK_IMAGES.*`) | ✅ External CDN — no local 404 risk |

### Favicon
The favicon is correctly referenced in `src/routes/__root.tsx`:
```html
<link rel="icon" href="/big-ship-icon.svg" type="image/svg+xml" />
```
`big-ship-icon.svg` exists in `/public/` ✅

---

## 29.3 — Image Optimization Notes

### Local Assets File Size Check
| File | Size | Recommendation |
|------|------|----------------|
| `big-ship-logo.png` | 41.7 KB | ✅ Well under 500KB limit — acceptable |
| `big-ship-logo.svg` | 2.1 KB | ✅ Already vector format — optimal |
| `big-ship-icon.svg` | 1.2 KB | ✅ Already vector format — optimal |
| `bigship_logo_emergence.mp4` | 454 KB | ✅ Under 500KB — acceptable for video |
| `NXTW data card background.jpeg` | 427 KB | ⚠️ Under limit but could be WebP-converted for ~30% savings |

### Optimization Status
- **Unsplash URLs** — Already optimized via `?auto=format&q=80&w=` parameters ✅
- **SVG files** — Vector format, inherently scalable and small ✅
- **big-ship-logo.png** — Currently a JPEG converted to `.png` extension (41.7 KB); ideally should be a true PNG with transparency for logo use. Acceptable for current use.

### Recommended Future Optimizations
1. **`big-ship-logo.png`**: Replace with a proper transparent PNG when official Big Ship C.B.O. logo assets are delivered
2. **`NXTW data card background.jpeg`**: Consider converting to WebP (`NXTW data card background.webp`) for ~30% file size reduction. Update CSS `url()` references in `styles.css`, `PageHero.tsx`, and `CtaBand.tsx`
3. **Program/impact images**: When real photos are sourced, optimize to <500KB JPEG or preferably WebP format before placing in `/programs/` and `/impact/` directories

---

## Changes Made in Task 29

1. **Created** `public/big-ship-logo.png` (copied from `Big Ship Logo.jpg`) to fix missing file causing potential 404s in og:image/twitter:image metadata and LogoVideoCard poster
2. **Fixed** `src/routes/index.tsx`: Changed `src="/big-ship-logo-video.mp4"` → `src="/bigship_logo_emergence.mp4"` (×2 occurrences) to match actual filename
3. **Updated** `src/lib/assets.ts`: Updated `checkAssetExists()` known assets list and `getKnownAssets()` to reflect actual files present

---

## Build Verification
`npm run build` completed successfully after all changes. ✅


## Overview

This document tracks all required assets for the Big Ship C.B.O. rebrand. Assets are organized by category and status. Each asset includes location, format requirements, and safeguarding guidelines where applicable.

**Last Updated:** 2024
**Status:** In Progress

---

## 1. Logo Assets (`/public/logos/`)

### Primary Logo
- [ ] **big-ship-logo.png** 
  - Format: PNG with transparency
  - Size: High resolution (1024x1024px minimum)
  - Purpose: Primary logo for header, footer, and social sharing
  - Status: Awaiting asset

- [ ] **big-ship-logo.svg**
  - Format: SVG (scalable vector)
  - Purpose: Icon for favicon and small displays
  - Size: Unlimited (vector)
  - Status: Awaiting asset

### Logo Variations
- [ ] **big-ship-logo-horizontal.png**
  - Format: PNG with transparency
  - Aspect Ratio: Horizontal (wider than tall)
  - Purpose: Social media headers, banner usage
  - Status: Awaiting asset

- [ ] **big-ship-logo-icon.png**
  - Format: PNG
  - Size: 512x512px
  - Purpose: Favicon, app icon
  - Status: Awaiting asset

### Logo Animation (Optional)
- [ ] **big-ship-logo-animation.mp4**
  - Format: MP4 video
  - Duration: 3-5 seconds
  - Purpose: Logo emergence/animation for intro or header
  - Status: Awaiting asset
  - Note: If unavailable, will use static logo with CSS pulse animation

---

## 2. Program Assets (`/public/programs/`)

### Adopt A Site (Mangrove Restoration)
- [ ] **adopt-a-site-hero.jpg**
  - Format: JPEG (optimized, <500KB)
  - Dimensions: 1920x1080px (16:9 aspect ratio)
  - Purpose: Program page hero image
  - Guidelines: Mangrove restoration site, environmental focus preferred over people
  - Status: Awaiting asset
  - Fallback: `/public/fallback/mangrove-generic.jpg`

- [ ] **adopt-a-site-card.jpg**
  - Format: JPEG
  - Dimensions: 400x300px
  - Purpose: Program card thumbnail
  - Guidelines: Compact version of hero image
  - Status: Awaiting asset

### RECO/Yogurt Forest Campaign
- [ ] **reco-yogurt-hero.jpg**
  - Format: JPEG (optimized, <500KB)
  - Dimensions: 1920x1080px (16:9 aspect ratio)
  - Purpose: Program page hero image
  - Guidelines: Waste recovery or reforestation activity, environmental focus
  - Status: Awaiting asset
  - Fallback: `/public/fallback/environment-generic.jpg`

- [ ] **reco-yogurt-card.jpg**
  - Format: JPEG
  - Dimensions: 400x300px
  - Purpose: Program card thumbnail
  - Status: Awaiting asset

### Urban Resilience & Skills Development
- [ ] **urban-resilience-hero.jpg**
  - Format: JPEG (optimized, <500KB)
  - Dimensions: 1920x1080px (16:9 aspect ratio)
  - Purpose: Program page hero image
  - Guidelines: Community skills training or resilience building, prefer environment/activity over individual people
  - Status: Awaiting asset
  - Fallback: `/public/fallback/community-generic.jpg`

- [ ] **urban-resilience-card.jpg**
  - Format: JPEG
  - Dimensions: 400x300px
  - Purpose: Program card thumbnail
  - Status: Awaiting asset

---

## 3. Impact Assets (`/public/impact/`)

### Impact Stories Images
- [ ] **tudor-creek-restoration.jpg**
  - Format: JPEG (optimized, <500KB)
  - Dimensions: 600x400px
  - Purpose: Tudor Creek mangrove restoration impact story image
  - Guidelines: Mangrove site or community involvement, environmental focus
  - Status: Awaiting asset
  - Fallback: `/public/fallback/mangrove-generic.jpg`

- [ ] **waste-recovery-success.jpg**
  - Format: JPEG (optimized, <500KB)
  - Dimensions: 600x400px
  - Purpose: Waste recovery program outcome image
  - Guidelines: Plastic collection or reforestation activity
  - Status: Awaiting asset
  - Fallback: `/public/fallback/environment-generic.jpg`

- [ ] **youth-training.jpg**
  - Format: JPEG (optimized, <500KB)
  - Dimensions: 600x400px
  - Purpose: Youth skills training impact image
  - Guidelines: Training activity or community engagement, prefer activity shots over individual portraits
  - Status: Awaiting asset
  - Fallback: `/public/fallback/community-generic.jpg`

- [ ] **community-engagement.jpg**
  - Format: JPEG (optimized, <500KB)
  - Dimensions: 600x400px
  - Purpose: Community engagement impact image
  - Guidelines: Group activities or community meetings
  - Status: Awaiting asset
  - Fallback: `/public/fallback/community-generic.jpg`

### Impact Metrics Images (Optional)
- [ ] **impact-hero.jpg**
  - Format: JPEG
  - Dimensions: 1920x1080px
  - Purpose: Impact page hero section background
  - Status: Awaiting asset

---

## 4. Fallback Images (`/public/fallback/`)

These are placeholder images used when specific Big Ship C.B.O. assets are unavailable. All fallback images must:
- Be properly licensed (Creative Commons or purchased stock)
- Avoid identifiable people (safeguarding compliance)
- Be relevant to environmental/community themes

### Environmental Fallbacks
- [ ] **mangrove-generic.jpg**
  - Purpose: Fallback for Adopt A Site and mangrove-related images
  - License: CC0 or purchased stock
  - Status: Needs sourcing

- [ ] **environment-generic.jpg**
  - Purpose: Fallback for waste recovery and environmental programs
  - License: CC0 or purchased stock
  - Status: Needs sourcing

- [ ] **coastal-landscape.jpg**
  - Purpose: General environmental fallback for Mombasa/coastal context
  - License: CC0 or purchased stock
  - Status: Needs sourcing

### Community Fallbacks
- [ ] **community-generic.jpg**
  - Purpose: Fallback for community engagement and skills training images
  - License: CC0 or purchased stock
  - Status: Needs sourcing

- [ ] **group-activity.jpg**
  - Purpose: Fallback for group activity images
  - License: CC0 or purchased stock
  - Status: Needs sourcing

### Default Fallback
- [ ] **default-placeholder.jpg**
  - Purpose: Last resort fallback for any missing image
  - License: CC0 or purchased stock
  - Status: Needs sourcing

---

## 5. Brand Assets (Root `/public/`)

### Logo Replacements
- [ ] **big-ship-logo.png** (copy to `/public/` for direct access)
  - Replace: `NextWave Kenya SHG.png`
  - Status: Awaiting asset

### Logo Video (if available)
- [ ] **big-ship-logo-video.mp4** (optional, in `/public/`)
  - Replace: `NextWave_Kenya_Logo_Emergence.mp4`
  - Status: Awaiting asset (optional)

### Favicon
- [ ] **favicon.ico**
  - Format: ICO file (or PNG with favicon format)
  - Size: 16x16px, 32x32px, 64x64px (multiple sizes)
  - Purpose: Browser tab icon
  - Status: Needs update

### Social Share Image
- [ ] **og-image.jpg** or **social-share.jpg**
  - Format: JPEG
  - Dimensions: 1200x630px (Open Graph standard)
  - Purpose: Social media sharing preview image
  - Status: Awaiting asset

---

## 6. Existing Assets to Remove or Archive

The following existing NextWave Kenya assets should be removed or archived:

- [ ] `NextWave Kenya SHG.png` — Archive or remove after logo replacement
- [ ] `NextWave_Kenya_Logo_Emergence.mp4` — Archive or remove after logo video replacement
- [ ] `NextWave_Kenya_Logo_Emergence_16x9.mp4` — Archive or remove after logo video replacement
- [ ] `NXTW data card background.jpeg` — Review and replace if used
- [ ] `circular_profile logo.jpg` — Review and replace if used

---

## Asset Attribution & Licensing

### Required Documentation for Each Asset

For each asset added, document:
1. **Source**: Where the asset came from (organization, photographer, designer, stock library)
2. **License**: Creative Commons license, purchased stock, or owned by Big Ship C.B.O.
3. **Attribution**: How to credit the source if required
4. **Rights**: Confirmation of usage rights for web publishing
5. **Safeguarding**: Confirmation that any people in photos have explicit consent (for Big Ship C.B.O. photos)

### License Types
- **CC0**: Public domain, no attribution required
- **CC-BY**: Requires attribution
- **CC-BY-SA**: Requires attribution and share-alike licensing
- **Purchased Stock**: Licensed for commercial/web use
- **Owned**: Created by/owned by Big Ship C.B.O.

---

## Asset Delivery Checklist

Before declaring an asset "complete," verify:

- [ ] File is in correct format (PNG, JPEG, MP4, SVG)
- [ ] File size is optimized (<500KB for photos)
- [ ] Dimensions meet specifications
- [ ] File name matches checklist exactly
- [ ] File is placed in correct directory
- [ ] Transparency is preserved (for PNG logos)
- [ ] Image quality is high (no visible compression artifacts)
- [ ] Alt text documentation is provided for accessibility
- [ ] License/attribution information is documented
- [ ] Safeguarding guidelines followed (no unauthorized person photos)
- [ ] File can be accessed via correct web path (/public/...)

---

## Implementation Notes

### Current Status: Phase 1 - Preparation

**Directories Created:**
- ✓ `/public/programs/` — For program-specific images
- ✓ `/public/impact/` — For impact story images
- ✓ `/public/logos/` — For logo variations
- ✓ `/public/fallback/` — For fallback images

**Next Steps:**
1. Source Big Ship C.B.O. logo assets (PNG, SVG, video if available)
2. Source program images (Adopt A Site, RECO, Urban Resilience)
3. Source impact story images (3-4 stories showing program outcomes)
4. Source or create fallback images with appropriate licensing
5. Document all sources and licensing information
6. Update component code to use new asset paths
7. Verify all assets load correctly in browser

### Fallback Strategy

If specific Big Ship C.B.O. assets cannot be provided:
1. Use high-quality environmental stock imagery matching theme
2. Place in `/public/fallback/` directory
3. Update component code to use fallback utilities
4. Ensure all fallbacks have proper licensing and attribution

---

## Contact & Notes

For asset sourcing and questions:
- Refer to the Big Ship C.B.O. Research Dossier for approved imagery guidelines
- Consult safeguarding policies before using any photos containing people
- Ensure all assets comply with organization brand guidelines
- Document all licensing information for legal compliance

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2024 | Initial checklist created for Task 1 |

