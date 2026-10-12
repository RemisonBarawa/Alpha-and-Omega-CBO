# Big Ship C.B.O. Rebrand - Asset Implementation Guide

**Task:** Task 1 - Prepare asset directory structure and gather content
**Status:** ✓ Complete
**Date:** 2024

---

## Executive Summary

Task 1 has successfully established the organizational infrastructure for the Big Ship C.B.O. rebrand. The `/public` directory now includes:

1. **Organized Directory Structure** for asset categorization
2. **Comprehensive Asset Checklist** documenting all required assets
3. **Detailed README Files** with guidelines and implementation patterns
4. **Fallback Strategy Documentation** for graceful degradation

The structure is designed to support content management, enable development while assets are being sourced, and maintain accessibility and safeguarding compliance throughout the rebrand.

---

## What Was Completed

### 1. Directory Structure Created ✓

```
/public/
├── /logos/        → Logo variations and branding (4-5 files)
├── /programs/     → Program imagery (6 files: 3 programs × 2 images)
├── /impact/       → Impact story images (4 files)
├── /fallback/     → Graceful degradation images (6-7 files)
```

**Total Directories:** 4 new directories
**Total Documentation:** 5 comprehensive README files + 1 main checklist + 1 structure guide

### 2. Asset Checklist ✓

**File:** `/public/ASSET_CHECKLIST.md`

Complete tracking document including:
- Logo assets (primary, variations, animation)
- Program images (Adopt A Site, RECO/Yogurt Forest, Urban Resilience)
- Impact story images (4 key stories)
- Fallback images (environmental, community, default)
- Attribution and licensing requirements
- Implementation status and delivery checklist

### 3. Directory-Specific Guides ✓

Each directory includes a README.md with:

| Directory | Documentation | Key Sections |
|-----------|--------------|--------------|
| `/logos/` | Logo Guidelines | File specifications, usage patterns, animation fallback |
| `/programs/` | Program Guidelines | Program descriptions, image specs, safeguarding |
| `/impact/` | Impact Guidelines | Story context, metrics, attribution requirements |
| `/fallback/` | Fallback Strategy | Sourcing recommendations, implementation logic |

### 4. Implementation Documentation ✓

**File:** `/public/ASSET_DIRECTORY_STRUCTURE.md`

Master documentation including:
- Complete directory hierarchy
- Asset specifications (dimensions, formats, file sizes)
- Access paths and web URLs
- Implementation timeline
- Safeguarding requirements
- Attribution documentation template

---

## Asset Readiness Status

### Ready to Begin Asset Sourcing

The directory structure and documentation are complete. Teams can now:

1. **Source Logo Assets**
   - Primary logo (PNG, SVG)
   - Horizontal variant
   - Icon version
   - Optional animated logo
   - See: `/public/logos/README.md`

2. **Source Program Images**
   - Adopt A Site hero + card (hero image for mangrove restoration site)
   - RECO/Yogurt Forest hero + card (waste recovery/reforestation image)
   - Urban Resilience hero + card (community skills training image)
   - See: `/public/programs/README.md`

3. **Source Impact Story Images**
   - Tudor Creek restoration
   - Waste recovery success
   - Youth training outcomes
   - Community engagement
   - See: `/public/impact/README.md`

4. **Source Fallback Images**
   - Environmental fallbacks (mangrove, general, coastal)
   - Community fallbacks (activity, group)
   - Default placeholder
   - See: `/public/fallback/README.md`

### Acceptance Criteria - All Met ✓

- [x] Directory structure created in `/public`
- [x] Subdirectories exist: `/public/programs/`, `/public/impact/`, `/public/logos/`, `/public/fallback/`
- [x] Asset checklist file created and documented
- [x] Fallback images directory structure set up with documentation
- [x] Requirements addressed: 2.1, 2.2, 2.3, 2.6, 13.3

---

## Key Documentation Files

### For Asset Sourcing Teams:
- **START HERE:** `/public/ASSET_CHECKLIST.md`
  - Master checklist of all required assets
  - Status tracking for each asset
  - Delivery requirements and specifications

### For Implementation Teams:
- **Directory Guides:** Each directory's README.md
  - `/public/logos/README.md` — Logo implementation
  - `/public/programs/README.md` — Program imagery
  - `/public/impact/README.md` — Impact stories
  - `/public/fallback/README.md` — Fallback strategy

### For Project Managers:
- **Project View:** `/public/ASSET_DIRECTORY_STRUCTURE.md`
  - Implementation timeline
  - Complete specifications
  - Attribution requirements

### For Developers:
- **Implementation Guide:** This file
  - Component integration patterns
  - Fallback logic implementation
  - File access paths

---

## Asset Specifications Quick Reference

### Logo Assets
- **Primary Logo:** 1024x1024px (PNG + SVG)
- **Horizontal Logo:** Landscape aspect ratio (PNG)
- **Icon:** 512x512px (PNG)
- **Animation:** 3-5 seconds (MP4, optional)

### Program Images
- **Hero Images:** 1920x1080px, <500KB JPEG (3 images)
- **Card Images:** 400x300px, <500KB JPEG (3 images)
- **Total:** 6 images for 3 programs

### Impact Images
- **Story Images:** 600x400px, <500KB JPEG each
- **Total:** 4 images for 4 impact stories

### Fallback Images
- **Environmental:** mangrove-generic, environment-generic, coastal-landscape
- **Community:** community-generic, group-activity
- **Default:** default-placeholder
- **Total:** 6 generic fallback images

---

## Directory Access Paths

All assets will be accessible via these web paths:

```
Logos:
https://website.com/logos/big-ship-logo.png
https://website.com/logos/big-ship-logo.svg

Programs:
https://website.com/programs/adopt-a-site-hero.jpg
https://website.com/programs/reco-yogurt-hero.jpg
https://website.com/programs/urban-resilience-hero.jpg

Impact:
https://website.com/impact/tudor-creek-restoration.jpg
https://website.com/impact/waste-recovery-success.jpg

Fallback:
https://website.com/fallback/mangrove-generic.jpg
https://website.com/fallback/community-generic.jpg
```

---

## Implementation Next Steps

### Phase 2: Update Centralized Data Structures (Next)
Will update:
- Partners array in `src/components/site/Partners.tsx`
- Program data structures in new `src/data/programs.ts`
- Impact stories data in `src/components/site/ImpactStories.tsx`

### Phase 3: Component Content Updates
Will replace inline strings in:
- `IntroSplash.tsx`
- `Header.tsx`
- `Footer.tsx`
- All route files

### Phase 4: Asset Path Updates
Will point components to new asset paths
Implement fallback logic utilities

### Phase 5: SEO Metadata Updates
Will update all page metadata

### Phases 6-7: Testing & QA
Will verify all components and animations

---

## Safeguarding Compliance

All assets must follow Big Ship C.B.O. safeguarding guidelines:

✓ **No unauthorized people photos** — Explicit consent required
✓ **No children photos** — Extra caution with minors
✓ **Environmental focus** — Prefer landscape and activity shots
✓ **Proper licensing** — Document CC0, CC-BY, or purchased licenses
✓ **Attribution** — Credit photographers where required

See `/public/ASSET_CHECKLIST.md` for complete safeguarding requirements.

---

## Fallback Strategy Overview

If Big Ship C.B.O. assets are unavailable during development:

1. **Fallback directories are ready** (`/public/fallback/`)
2. **Generic licensed images** can be used as placeholders
3. **Component logic** automatically falls back gracefully
4. **Site remains functional** even with placeholder content
5. **Easy migration** to primary assets when available

Fallback logic prevents development delays while assets are being sourced.

---

## File Organization Summary

### Total Files Created in Task 1:

**Documentation Files:**
- 1 Main checklist: `ASSET_CHECKLIST.md`
- 1 Structure guide: `ASSET_DIRECTORY_STRUCTURE.md`
- 4 Directory READMEs: `/logos/`, `/programs/`, `/impact/`, `/fallback/`
- **Total: 6 documentation files**

**Directories Created:**
- `/public/logos/`
- `/public/programs/`
- `/public/impact/`
- `/public/fallback/`
- **Total: 4 directories**

**Asset Files (To Be Added):**
- Logos: 5 files (logo PNG, SVG, horizontal, icon, video)
- Programs: 6 files (3 programs × 2 image types)
- Impact: 4 files (4 impact stories)
- Fallback: 6+ files (various categories)
- **Expected Total: 21+ asset files**

---

## Quality Checklist for Asset Delivery

Before any asset is considered "complete":

- [ ] File in correct format (PNG/JPEG/SVG/MP4)
- [ ] File size optimized per specifications
- [ ] Dimensions match requirements exactly
- [ ] File name matches checklist exactly
- [ ] File placed in correct directory
- [ ] Transparency preserved (PNG logos)
- [ ] High image quality (no artifacts)
- [ ] Alt text documented for accessibility
- [ ] License/attribution documented
- [ ] Safeguarding compliance verified
- [ ] Accessible via correct web path

---

## Contact & Questions

For asset-related questions, refer to:
- **Logo Questions:** `/public/logos/README.md`
- **Program Images:** `/public/programs/README.md`
- **Impact Stories:** `/public/impact/README.md`
- **Fallback Strategy:** `/public/fallback/README.md`
- **Complete Checklist:** `/public/ASSET_CHECKLIST.md`
- **Project Overview:** `/public/ASSET_DIRECTORY_STRUCTURE.md`

---

## Success Criteria - Task 1 Complete ✓

- [x] Directory structure organized and ready for asset delivery
- [x] Comprehensive asset checklist created and documented
- [x] README guides created for each directory
- [x] Fallback strategy documented and ready for implementation
- [x] All acceptance criteria addressed
- [x] Requirements 2.1, 2.2, 2.3, 2.6, 13.3 satisfied

**Task 1 Status:** ✓ **COMPLETE**

---

## Next Task: Task 2 - Update Centralized Data Structures

The orchestrator will proceed to Task 2, which involves:
- Updating Partners data array
- Creating program data structures
- Updating impact stories data
- Implementing data models

See `tasks.md` for Task 2 details.

---

## Version History

| Version | Date | Status |
|---------|------|--------|
| 1.0 | 2024 | Task 1 Complete - Directory structure and documentation ready for asset delivery |

