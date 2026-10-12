# Big Ship C.B.O. — Rebrand Handoff Document

## Overview

This document summarises all changes made during the rebrand of the NextWave Kenya / Swahilipot Hub Foundation website to **Big Ship C.B.O.** It covers every file touched, placeholder content that needs replacing with real data, deployment commands, and guidance for future updates.

---

## Build & Deployment Commands

```bash
# Install dependencies (first time only)
npm install
# or if bun is available:
bun install

# Start development server (hot reload)
npm run dev
# or:
bun run dev

# Production build (outputs to .output/)
npm run build
# or:
bun run build

# Preview the production build locally
npx vite preview

# Deploy to Cloudflare Workers (after build)
npx nitro deploy --prebuilt
```

The project targets **Cloudflare Workers** (preset: `cloudflare-module`). The built worker is at `.output/server/index.mjs`. Static assets land in `.output/public/`.

---

## Summary of All Rebrand Changes

### Organisational Identity

| What Changed | Before | After |
|---|---|---|
| Organisation name | NextWave Kenya | Big Ship C.B.O. |
| Sub-organisation | Swahilipot Hub Foundation | (removed) |
| Founding year | 2016 | 2018 |
| Session storage key | `sph-intro-seen` | `bigship-intro-seen` |
| Copyright line | NextWave Kenya | Big Ship C.B.O. |

### Files Modified — Components

| File | Changes |
|---|---|
| `src/components/site/Header.tsx` | Organisation name, programme navigation links (Adopt A Site, RECO/Yogurt Forest, Urban Resilience), placeholder email/phone in top bar |
| `src/components/site/Footer.tsx` | Organisation name, copyright, programme links, conditional contact rendering via `getContactInfo()` |
| `src/components/site/IntroSplash.tsx` | Welcome message, title, body text, session storage key |
| `src/components/site/Partners.tsx` | Partners list replaced with Kenya Forest Service, University of Nairobi, WWF-Kenya, Innovate Resource Agency (IRA) |
| `src/components/site/ImpactStories.tsx` | All four impact stories replaced with Big Ship C.B.O. stories, source attribution added to every stat |
| `src/components/site/ImpactMetric.tsx` | Added source attribution display and verification-status badge |

### Files Modified — Routes

| File | Changes |
|---|---|
| `src/routes/__root.tsx` | Page title, meta description, Open Graph tags, Twitter Card tags, favicon reference, default head metadata |
| `src/routes/index.tsx` | Hero content, programme cards, milestone timeline, impact metric counters with source attribution, logo video path |
| `src/routes/about.tsx` | Origin story, mission/vision statements, values, timeline |
| `src/routes/programs.tsx` | Programme overview page — titles, descriptions, all three programme cards |
| `src/routes/programs.adopt-a-site.tsx` | New route — Adopt A Site programme detail |
| `src/routes/programs.reco-yogurt-forest.tsx` | New route — RECO/Yogurt Forest programme detail |
| `src/routes/programs.urban-resilience.tsx` | New route — Urban Resilience & Skills programme detail |
| `src/routes/impact.tsx` | Impact metrics with source attribution and verification status, impact stories, testimonials |
| `src/routes/contact.tsx` | Contact details, form context, page metadata |
| `src/routes/events.tsx` | Page title, descriptions, organisation name references |
| `src/routes/board.tsx` | Page title, descriptions, organisation name references |

### Files Created — Data & Utilities

| File | Purpose |
|---|---|
| `src/data/programs.ts` | Centralised data structures for programmes, impact metrics, partners, and impact stories |
| `src/lib/contact.ts` | `getContactInfo()` utility — single source of truth for contact details; returns `null` for unconfirmed fields so components degrade gracefully |
| `src/lib/assets.ts` | `checkAssetExists()` — validates local asset paths against a known-assets list |
| `src/lib/altText.ts` | `getAltText()` and `getProgramAltText()` — WCAG-compliant alt text generation |
| `src/lib/images.ts` | `IMG` constants (Unsplash CDN), `FALLBACK_IMAGES`, `getProgramImage()` fallback utility |

### Route Paths Changed

Old programme routes were renamed to match Big Ship C.B.O. programme slugs:

| Old Path | New Path |
|---|---|
| `/programs/technology` | `/programs/adopt-a-site` |
| `/programs/creatives` | `/programs/reco-yogurt-forest` |
| `/programs/enterprise` | `/programs/urban-resilience` |

---

## Known Limitations & Placeholder Content

### Contact Information (Placeholders)

Both values below are **placeholders** and must be replaced with confirmed details:

| Field | Current Placeholder | File to Update |
|---|---|---|
| Phone | `+254 722 000000` | `src/lib/contact.ts` → `phone` field, also `src/components/site/Header.tsx` top bar `href="tel:"` |
| Email | `info@bigshipcbo.org` | `src/lib/contact.ts` → `email` field, also `src/components/site/Header.tsx` top bar `href="mailto:"` and `src/routes/contact.tsx` displayed email |

Setting either field to `null` in `src/lib/contact.ts` will hide it from the footer gracefully.

### Images (Unsplash CDN Placeholders)

All programme, impact story, and hero images currently come from **Unsplash** (remote CDN). They are generic stock photos, not Big Ship C.B.O. photography. These are intentional placeholders; see the section below on how to replace them.

The relevant constants are in `src/lib/images.ts`:

```typescript
export const IMG = {
  hero: unsplash("1521737604893-d14cc237f11d", 1920, 1080),  // Homepage hero
  community: unsplash("1522071820081-009f0129c71c", ...),     // Contact page hero
  workspace: unsplash("1497215728101-856f4ea42174", ...),     // Programs overview hero
  tech: unsplash("1531482615713-2afd69097998", ...),          // Adopt A Site images
  arts: unsplash("1516450360452-9312f5e86fc7", ...),          // RECO images
  business: unsplash("1552664730-d307ca884978", ...),         // Urban Resilience images
  // ...
};
```

### Logo (`big-ship-logo.png`)

The current `public/big-ship-logo.png` is a **JPEG image renamed to `.png`** — it does not have transparency. This means:
- It will appear with a white/coloured background in OG image previews on social media
- It is acceptable for current use but not ideal for a proper logo

**Replacement needed:** a true PNG file with a transparent background exported from the official logo files.

### Social Media Links

All social media icon buttons in the Header and Footer currently link to `href="#"` (dead links). Update these with real profile URLs when Big Ship C.B.O. social accounts are confirmed.

### "LIVE FM" Banner in Header

The top header bar shows a pulsing `LIVE FM` badge. This was carried over from the original site. If Big Ship C.B.O. does not have a live radio stream, remove the badge from `src/components/site/Header.tsx` (the `<span>` element containing `<Radio className="... animate-pulse" /> LIVE FM`).

---

## Guidance for Future Content Updates

### Replacing Placeholder Images with Real Photos

1. Optimise photos to under 500 KB (JPEG) or use WebP for better compression.
2. Place files in the appropriate `/public` subdirectory:
   - Programme hero images → `/public/programs/`
   - Impact story images → `/public/impact/`
3. Update the `IMG` constants in `src/lib/images.ts` to point to the local paths instead of Unsplash URLs. For example:
   ```typescript
   // Before (Unsplash)
   tech: unsplash("1531482615713-2afd69097998", 1200, 900),

   // After (local file)
   tech: "/programs/adopt-a-site-hero.jpg",
   ```
4. Follow the safeguarding guidelines: prefer environmental/landscape photos over individual portraits unless explicit written consent is on file.

### Updating Contact Information

Edit **`src/lib/contact.ts`** — this is the single source of truth for the footer and contact page:

```typescript
const phone: string | null = "+254 7XX XXXXXX";  // Replace with real number
const email: string | null = "hello@bigshipcbo.org";  // Replace with real email
const address = "Off Mama Ngina Drive, Mombasa, Kenya";  // Update if needed
```

The header's top bar email/phone links are hardcoded separately in `src/components/site/Header.tsx` around line 44–55 — update those to match.

### Updating Impact Metrics

Impact metrics are defined in two places:
- **Homepage counters**: `src/routes/index.tsx` — look for the `counters` array
- **Impact page**: `src/routes/impact.tsx` — look for the metrics and `highlights` arrays
- **Data file**: `src/data/programs.ts` — the `impactMetrics` export

Each metric object has a `source` field for attribution and a `status` field (`"documented"`, `"reported"`, `"verified"`, or `"estimated"`). Always fill in the source when updating.

### Adding Programme Content

Each programme page is a standalone route file:
- `src/routes/programs.adopt-a-site.tsx`
- `src/routes/programs.reco-yogurt-forest.tsx`
- `src/routes/programs.urban-resilience.tsx`

Programmes use the `<ProgramDetail>` component which accepts `tracks` (activity/description pairs) and `details` (longer paragraphs). Update these props directly in each route file.

### Updating Partner Logos

Partners currently display as text chips (initials avatar). To add real logo images:
1. Place logo files in `/public/logos/`
2. Update `src/components/site/Partners.tsx` — the `partners` array currently holds plain strings; extend it to objects with `name` and `logo` fields, then update the rendering logic to show `<img>` when a logo is available.

---

## Outstanding Items

| Item | Priority | Notes |
|---|---|---|
| Replace `big-ship-logo.png` with transparent PNG | High | Current file is JPEG renamed to .png — no transparency. Affects OG image previews. |
| Confirm and update phone number | High | Placeholder `+254 722 000000` used throughout |
| Confirm and update email address | High | Placeholder `info@bigshipcbo.org` used throughout |
| Replace Unsplash images with real Big Ship C.B.O. photos | Medium | Following safeguarding guidelines; see `/public/ASSET_CHECKLIST.md` for full spec |
| Add real social media profile URLs | Medium | All social icons link to `#` in Header and Footer |
| Remove or connect "LIVE FM" badge in header | Low | Only relevant if Big Ship C.B.O. has a live stream |
| Convert `NXTW data card background.jpeg` to WebP | Low | ~30% file size saving; update CSS `url()` in `src/index.css`, `PageHero.tsx`, `CtaBand.tsx` |
| Source and add partner logos | Low | `/public/logos/` directory is ready; Partners component uses text chips as fallback |

---

## Asset Directory Reference

```
public/
├── big-ship-logo.png          # OG image / LogoVideoCard poster (replace with transparent PNG)
├── big-ship-logo.svg          # SVG version of logo
├── big-ship-icon.svg          # Favicon (referenced in <head>)
├── bigship_logo_emergence.mp4 # Logo animation video (used in LogoVideoCard)
├── Big Ship Logo.jpg          # Original source logo file
├── NXTW data card background.jpeg  # Background texture used in PageHero / CtaBand
├── programs/                  # Place programme hero images here
├── impact/                    # Place impact story images here
├── logos/                     # Place partner logo images here
└── fallback/                  # Fallback images (currently empty — Unsplash used instead)
```

---

## Tech Stack Reference

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Router | TanStack Router (file-based routes) |
| Build tool | Vite 8 |
| Runtime | TanStack Start (SSR) |
| Deployment | Cloudflare Workers (nitro preset) |
| UI components | Shadcn UI (Radix UI primitives) |
| Animations | Framer Motion |
| Styling | Tailwind CSS v4 |
| Package manager | Bun (npm also works) |

---

*Document created as part of the Big Ship C.B.O. website rebrand. For questions, refer to the spec at `.kiro/specs/big-ship-rebrand/`.*
