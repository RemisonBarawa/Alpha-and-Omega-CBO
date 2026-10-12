# Big Ship C.B.O. Asset Directory Structure

## Overview

This document describes the organized directory structure for Big Ship C.B.O. rebrand assets in the `/public` directory. The structure is designed to support content management, fallback strategies, and maintainability throughout the rebrand implementation.

**Created:** 2024 (Task 1 - Preparation Phase)
**Status:** Directory structure complete, awaiting asset delivery

---

## Directory Hierarchy

```
public/
├── logos/                          # Logo variations and branding
│   ├── big-ship-logo.png          # Primary logo (1024x1024px)
│   ├── big-ship-logo.svg          # Scalable vector logo
│   ├── big-ship-logo-horizontal.png # Landscape variant
│   ├── big-ship-logo-icon.png     # Icon version (512x512px)
│   ├── big-ship-logo-animation.mp4 # Animated logo (optional)
│   └── README.md                  # Logo guidelines
│
├── programs/                       # Program-specific imagery
│   ├── adopt-a-site-hero.jpg      # Mangrove restoration hero
│   ├── adopt-a-site-card.jpg      # Program card thumbnail
│   ├── reco-yogurt-hero.jpg       # Waste recovery hero
│   ├── reco-yogurt-card.jpg       # Program card thumbnail
│   ├── urban-resilience-hero.jpg  # Urban resilience hero
│   ├── urban-resilience-card.jpg  # Program card thumbnail
│   └── README.md                  # Program imagery guidelines
│
├── impact/                         # Impact story imagery
│   ├── tudor-creek-restoration.jpg     # Mangrove restoration impact
│   ├── waste-recovery-success.jpg      # Waste recovery outcome
│   ├── youth-training.jpg              # Youth skills training
│   ├── community-engagement.jpg        # Community participation
│   └── README.md                       # Impact imagery guidelines
│
├── fallback/                       # Fallback/placeholder images
│   ├── mangrove-generic.jpg       # Environmental fallback
│   ├── environment-generic.jpg    # General environmental fallback
│   ├── coastal-landscape.jpg      # Coastal context fallback
│   ├── community-generic.jpg      # Community activity fallback
│   ├── group-activity.jpg         # Group engagement fallback
│   ├── default-placeholder.jpg    # Emergency fallback
│   └── README.md                  # Fallback strategy guide
│
├── ASSET_CHECKLIST.md             # Complete asset requirements
├── ASSET_DIRECTORY_STRUCTURE.md   # This file
├── robots.txt                     # SEO directives (existing)
├── favicon.ico                    # (To be updated)
└── [NextWave logo files]          # Legacy assets (to be removed)

```

---

## Directory Purposes

### `/public/logos/`
**Purpose:** All Big Ship C.B.O. logo variations and branding assets

**Contains:**
- Primary logo (PNG + SVG for flexibility)
- Horizontal variant for social media
- Icon version for favicon/small displays
- Optional animated logo for intro/splash screens

**Usage:** Header, footer, social sharing, branding

**Key File:** `README.md` — Logo guidelines and implementation examples

---

### `/public/programs/`
**Purpose:** Images for Big Ship C.B.O.'s three core programs

**Programs Covered:**
1. **Adopt A Site** — Mangrove restoration (Tudor Creek, Mikindani, Ganahola)
2. **RECO/Yogurt Forest** — Waste recovery and circular economy
3. **Urban Resilience** — Youth livelihoods and community skills

**File Naming Convention:**
- `{program-id}-hero.jpg` — Full-width hero images (1920x1080px)
- `{program-id}-card.jpg` — Program card thumbnails (400x300px)

**Usage:** Program pages, program cards, navigation

**Key File:** `README.md` — Program imagery guidelines and safeguarding requirements

---

### `/public/impact/`
**Purpose:** Images for Big Ship C.B.O. impact stories

**Stories Covered:**
- Tudor Creek ecosystem recovery
- Waste recovery program success
- Youth livelihoods and training
- Community engagement outcomes

**File Naming Convention:**
- `{story-id}.jpg` — Impact story images (600x400px)

**Usage:** Impact page, success stories, testimonials

**Key File:** `README.md` — Impact imagery guidelines and source attribution

---

### `/public/fallback/`
**Purpose:** Graceful degradation when primary assets unavailable

**Fallback Categories:**
- Environmental (mangrove, general environment, coastal landscape)
- Community (community activity, group engagement)
- Default (emergency placeholder)

**Usage Strategy:**
- Fills in when Big Ship C.B.O. primary images not yet sourced
- Maintains site functionality during asset delivery delay
- Accessed via `getProgramImage()` utility function
- Transparent to end users (automatic fallback logic)

**Key File:** `README.md` — Fallback strategy and implementation

---

## Asset Specifications Summary

### Image Dimensions

| Type | Dimensions | Format | Max Size |
|------|-----------|--------|----------|
| Logo (Primary) | 1024x1024px | PNG/SVG | N/A |
| Logo (Horizontal) | Landscape | PNG | N/A |
| Logo (Icon) | 512x512px | PNG | N/A |
| Program Hero | 1920x1080px | JPEG | 500KB |
| Program Card | 400x300px | JPEG | 500KB |
| Impact Story | 600x400px | JPEG | 500KB |
| Fallback | Varies | JPEG | 500KB |

### Format Guidelines

- **PNG:** Used for logos (with transparency), icons, graphics
- **JPEG:** Used for photographs and hero images
- **SVG:** Used for scalable logos and icons
- **MP4:** Used for optional animated logos

### Optimization Requirements

- All JPEG images: <500KB file size
- All PNG images: Optimized with transparency
- Responsive loading via web browser caching
- Lazy-loading where supported

---

## Directory Access Paths

All assets are accessible via these web paths:

```
Logo Assets:
https://website.com/logos/big-ship-logo.png
https://website.com/logos/big-ship-logo.svg
https://website.com/logos/big-ship-logo-icon.png

Program Images:
https://website.com/programs/adopt-a-site-hero.jpg
https://website.com/programs/reco-yogurt-hero.jpg
https://website.com/programs/urban-resilience-hero.jpg

Impact Images:
https://website.com/impact/tudor-creek-restoration.jpg
https://website.com/impact/waste-recovery-success.jpg

Fallback Images:
https://website.com/fallback/mangrove-generic.jpg
https://website.com/fallback/community-generic.jpg
```

---

## Implementation Timeline

### Phase 1: ✓ Structure Preparation (Complete)
- [x] Create directory hierarchy
- [x] Add README guides for each directory
- [x] Create asset checklist
- [x] Document fallback strategy

### Phase 2: Asset Sourcing (In Progress)
- [ ] Source Big Ship C.B.O. logo assets
- [ ] Source program images (3 programs × 2 images = 6 images)
- [ ] Source impact story images (4 stories = 4 images)
- [ ] Source or create fallback images (6-7 images)
- [ ] Verify all licensing and safeguarding compliance

### Phase 3: Asset Delivery
- [ ] Copy all primary assets to appropriate directories
- [ ] Copy fallback images to `/public/fallback/`
- [ ] Verify all assets accessible via web paths
- [ ] Test fallback logic in components

### Phase 4: Component Integration
- [ ] Update component code to use new asset paths
- [ ] Implement fallback logic utilities
- [ ] Test image loading and rendering
- [ ] Verify animations and effects work with new assets

### Phase 5: Verification
- [ ] Visual QA across all pages
- [ ] Responsive design testing
- [ ] Accessibility compliance (alt text, color contrast)
- [ ] Cross-browser testing

---

## Safeguarding Guidelines

All images in this directory structure must comply with Big Ship C.B.O. safeguarding policies:

### Key Requirements:

1. **No Unauthorized People Photos**
   - Obtain explicit written consent before using community member photos
   - Maintain consent documentation
   - Prefer environmental/activity shots over portraits

2. **No Children Photography Without Consent**
   - Extra caution with any imagery potentially showing minors
   - Explicit guardian consent required

3. **Proper Licensing**
   - Confirm usage rights for web publishing
   - Document license type (CC0, CC-BY, purchased, owned)
   - Ensure commercial/organizational use permitted

4. **Attribution**
   - Credit photographers and sources where required
   - Include attribution in image metadata or documentation
   - Follow license requirements for attribution

---

## Asset Attribution Documentation

Each asset should be documented with:

```markdown
**File:** [filename]
**Source:** [Where the asset came from]
**License:** [CC0 / CC-BY / Purchased / Owned]
**License URL:** [Link to license]
**Attribution:** [How to credit if required]
**Usage Rights:** [Confirm web/commercial use approved]
**Safeguarding:** [Yes/No - people photos include consent]
```

All documentation is centralized in `/public/ASSET_CHECKLIST.md`

---

## Fallback Logic Implementation

### How Fallbacks Work:

1. **Component Requests Image**
   ```typescript
   src={getProgramImage('adopt-a-site', '/programs/adopt-a-site-hero.jpg')}
   ```

2. **Utility Checks Primary**
   - Is primary image accessible?
   - Return primary if yes

3. **Falls Back to Category Fallback**
   - If primary unavailable, use category-specific fallback
   - Adopt A Site → `/fallback/mangrove-generic.jpg`
   - RECO → `/fallback/environment-generic.jpg`
   - Urban Resilience → `/fallback/community-generic.jpg`

4. **Default Fallback**
   - If category fallback unavailable, use `/fallback/default-placeholder.jpg`
   - Ensures no broken images

### Implementation Files:
- `src/lib/images.ts` — Fallback logic utility functions
- `src/lib/utils.ts` — Alt text generation utilities

---

## File Naming Conventions

### Logos
- `big-ship-logo.png` — Primary
- `big-ship-logo.svg` — Vector
- `big-ship-logo-horizontal.png` — Landscape
- `big-ship-logo-icon.png` — Icon
- `big-ship-logo-animation.mp4` — Video

### Programs
- `{program-id}-hero.jpg` — Large hero image
- `{program-id}-card.jpg` — Small card image
- Program IDs: `adopt-a-site`, `reco-yogurt-forest`, `urban-resilience`

### Impact
- `{story-id}.jpg` — Story image
- Story IDs: `tudor-creek-restoration`, `waste-recovery-success`, `youth-training`, `community-engagement`

### Fallback
- Descriptive names: `mangrove-generic.jpg`, `environment-generic.jpg`, etc.

---

## README Files Quick Reference

Each directory includes a README.md with specific guidance:

| Directory | README Contents |
|-----------|-----------------|
| `/logos/` | Logo specifications, usage guidelines, implementation examples |
| `/programs/` | Program descriptions, image requirements, safeguarding notes |
| `/impact/` | Impact story context, metrics, attribution requirements |
| `/fallback/` | Fallback strategy, sourcing recommendations, implementation logic |

---

## Next Steps

1. **Review Asset Checklist** — See `/public/ASSET_CHECKLIST.md`
2. **Source Primary Assets** — Gather Big Ship C.B.O. logos and images
3. **Source Fallback Assets** — Find CC0 or licensed fallback images
4. **Document Attribution** — Record all sources and licensing
5. **Verify Safeguarding** — Confirm consent for all people photos
6. **Implement Component Code** — Update image paths in components
7. **Test Rendering** — Verify all images load and display correctly
8. **Cross-browser Testing** — Ensure consistent rendering everywhere

---

## Support & Questions

- **Asset Questions:** Refer to specific directory README.md files
- **Complete Checklist:** See `/public/ASSET_CHECKLIST.md`
- **Implementation:** Refer to component code and utility functions
- **Safeguarding:** Check Big Ship C.B.O. Research Dossier and safeguarding policies

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2024 | Initial directory structure and documentation created (Task 1) |

