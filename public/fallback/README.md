# Fallback Images Directory

This directory contains placeholder and fallback images used when specific Big Ship C.B.O. assets are unavailable. Fallback images ensure graceful degradation and prevent broken layouts when primary assets are missing.

## Fallback Image Strategy

Fallback images serve as graceful degradation when:
1. Big Ship C.B.O. primary images haven't been sourced yet
2. Specific program or impact story images are unavailable
3. A third-party image source is temporarily unreachable
4. Development/testing needs generic placeholder content

**Importance:** Fallback images maintain site functionality and user experience even with incomplete asset delivery.

---

## Fallback Image Categories

### Environmental Fallbacks

#### mangrove-generic.jpg
- **Purpose:** Fallback for Adopt A Site and mangrove-related imagery
- **Dimensions:** 1920x1080px (hero) or 600x400px (card)
- **Content:** Mangrove forest, coastal restoration, or mangrove ecosystem
- **License:** Creative Commons CC0 or purchased stock
- **Usage Context:** Mangrove restoration program, tree planting imagery
- **Status:** Needs sourcing

#### environment-generic.jpg
- **Purpose:** Fallback for waste recovery and general environmental programs
- **Dimensions:** 1920x1080px (hero) or 600x400px (card)
- **Content:** Environmental landscape, coastal area, or conservation activity
- **License:** Creative Commons CC0 or purchased stock
- **Usage Context:** RECO program, environmental programs, general impact stories
- **Status:** Needs sourcing

#### coastal-landscape.jpg
- **Purpose:** General environmental fallback for Mombasa coastal context
- **Dimensions:** 1920x1080px
- **Content:** Mombasa/East African coastal landscape
- **License:** Creative Commons CC0 or purchased stock
- **Usage Context:** General hero background, environmental page sections
- **Status:** Needs sourcing

### Community Fallbacks

#### community-generic.jpg
- **Purpose:** Fallback for community engagement and skills training images
- **Dimensions:** 1920x1080px (hero) or 600x400px (card)
- **Content:** Community activity, group engagement, or skills training
- **License:** Creative Commons CC0 or purchased stock
- **Usage Context:** Urban Resilience program, community impact stories
- **Safeguarding:** No identifiable individuals without consent
- **Status:** Needs sourcing

#### group-activity.jpg
- **Purpose:** Fallback for group activity and collaborative work imagery
- **Dimensions:** 600x400px
- **Content:** Group collaboration, community work, or team activity
- **License:** Creative Commons CC0 or purchased stock
- **Usage Context:** Community impact stories, engagement-focused content
- **Safeguarding:** Generic group shots preferred over individual portraits
- **Status:** Needs sourcing

### Default Fallback

#### default-placeholder.jpg
- **Purpose:** Last resort fallback for any missing image
- **Dimensions:** 600x400px
- **Content:** Generic placeholder or branding pattern
- **License:** Internal or purchased
- **Usage Context:** Emergency fallback when category-specific fallback unavailable
- **Status:** Needs sourcing

---

## Safeguarding Guidelines for Fallback Images

**Critical Requirement:** Fallback images must comply with Big Ship C.B.O. safeguarding policies.

### Required Criteria:

1. **No Unauthorized People Photos**
   - Do not use photos of identifiable individuals without explicit consent
   - Preferred: Landscape, environmental, or activity-focused images
   - Acceptable: Group shots where faces are not clearly identifiable
   - Avoid: Portraits or close-ups of any individual

2. **No Children Photography**
   - Extra caution with any imagery potentially showing minors
   - Do not use children photos without explicit guardian consent
   - Preferred: Adult-focused or child-free environmental imagery

3. **Environmental Focus**
   - Use landscape and environmental photography
   - Show mangroves, coastal areas, forests, water features
   - Focus on natural environment and program activities

4. **Licensed for Web Use**
   - All images must have explicit license for web publishing
   - Document Creative Commons license type or stock photo license
   - Ensure commercial/organizational use is permitted

---

## Image Sourcing Recommendations

### Free/Licensed Image Sources (CC0):
- **Unsplash** — High-quality photos, CC0 license
- **Pexels** — Free stock photos with generous licensing
- **Pixabay** — Thousands of royalty-free images
- **Wikimedia Commons** — Community-contributed media
- **Open Street Map** — Geographic and landscape imagery

### Stock Photo Services (Paid):
- **Shutterstock** — Extensive stock library
- **Getty Images** — Premium quality
- **Adobe Stock** — Integrated with Creative Suite
- **iStock** — Affordable stock photography

### Search Terms for Fallback Images:
- "Mangrove forest" (CC0) → mangrove-generic.jpg
- "Coastal landscape Kenya" (CC0) → coastal-landscape.jpg
- "Environmental conservation" (CC0) → environment-generic.jpg
- "Community group activity" (CC0) → group-activity.jpg
- "Skills training workshop" (CC0) → community-generic.jpg

---

## Implementation: Fallback Logic

### Utility Function: getProgramImage()

```typescript
// src/lib/images.ts

const FALLBACK_IMAGES: Record<string, string> = {
  'adopt-a-site': '/fallback/mangrove-generic.jpg',
  'reco-yogurt-forest': '/fallback/environment-generic.jpg',
  'urban-resilience': '/fallback/community-generic.jpg',
};

export function getProgramImage(
  programId: string,
  primaryImage?: string
): string {
  // Return primary image if it exists and is accessible
  if (primaryImage && checkAssetExists(primaryImage)) {
    return primaryImage;
  }
  
  // Return category-specific fallback
  if (FALLBACK_IMAGES[programId]) {
    return FALLBACK_IMAGES[programId];
  }
  
  // Return default fallback
  return '/fallback/default-placeholder.jpg';
}

// Usage in components
<img 
  src={getProgramImage('adopt-a-site', '/programs/adopt-a-site-hero.jpg')}
  alt="Adopt A Site program"
/>
```

### Utility Function: checkAssetExists()

```typescript
// src/lib/images.ts

export function checkAssetExists(path: string): boolean {
  // Type-safe asset checking using import map or file existence check
  // In development: check file system
  // In production: check against known asset manifest
  
  // For now: return true if path looks valid (can be enhanced later)
  return path && path.length > 0;
}
```

---

## Fallback Asset Delivery Checklist

Before declaring fallback images complete:

- [ ] Image sourced from CC0 or properly licensed source
- [ ] License type documented (CC0, CC-BY, etc.)
- [ ] Image attribution documented
- [ ] File size optimized (<500KB)
- [ ] Dimensions correct (1920x1080 or 600x400)
- [ ] Format correct (JPEG for photos)
- [ ] No identifiable people (or consent documented)
- [ ] Content appropriate for environmental/community theme
- [ ] File placed in `/public/fallback/` directory
- [ ] File name matches checklist exactly
- [ ] Image accessible via `/fallback/[filename]` URL path
- [ ] Tested in component with fallback logic

---

## Usage Examples

### Program Card with Fallback
```typescript
function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="program-card">
      <img 
        src={getProgramImage(program.id, program.image)}
        alt={getAltText('program-hero', program.name)}
        className="program-image"
      />
      <h3>{program.name}</h3>
      <p>{program.shortDescription}</p>
    </div>
  );
}
```

### Impact Story with Fallback
```typescript
function ImpactStory({ story }: { story: ImpactStory }) {
  return (
    <article className="impact-story">
      <img 
        src={story.image || '/fallback/default-placeholder.jpg'}
        alt={getAltText('impact-image', story.title)}
        className="impact-image"
      />
      <h3>{story.title}</h3>
      <p>{story.summary}</p>
    </article>
  );
}
```

---

## Performance Considerations

- All fallback images optimized for web (<500KB)
- JPEG format for photographs
- Appropriate dimensions for target contexts
- Cached by browser and CDN
- Lazy-loaded where possible to improve page load

---

## Testing Fallback Logic

### Test Scenarios:

1. **Primary Image Available**
   - Verify primary image displays
   - Fallback not used

2. **Primary Image Missing**
   - Verify fallback image displays
   - No broken image indicators

3. **Program Category Fallback**
   - Verify correct fallback for program type
   - Mangrove → mangrove-generic.jpg
   - Waste recovery → environment-generic.jpg
   - Community → community-generic.jpg

4. **Default Fallback**
   - Verify default placeholder displays
   - When category-specific fallback unavailable

---

## Attribution & Documentation

For each fallback image, document:

```markdown
**File:** mangrove-generic.jpg
**Source:** Unsplash
**Photographer:** [Name if known]
**License:** CC0 (Public Domain)
**License URL:** https://creativecommons.org/publicdomain/zero/1.0/
**Attribution:** Not required, but photographer credit appreciated
**Usage:** Website program imagery fallback
**Rights:** Approved for all commercial/organizational web use
```

---

## Related Documentation

- See `/public/ASSET_CHECKLIST.md` for complete asset requirements
- See `/public/programs/README.md` for program image specifications
- See `/public/impact/README.md` for impact story image guidelines
- See `/public/logos/README.md` for logo assets

---

## Migration to Primary Assets

When Big Ship C.B.O. primary assets become available:

1. **Source Primary Image**
   - Obtain actual Big Ship C.B.O. program/impact image

2. **Verify Asset Quality**
   - Correct dimensions (1920x1080 or 600x400)
   - File size optimized (<500KB)
   - Content appropriate and high quality

3. **Update Component Props**
   - Change component image prop to primary image path
   - Keep fallback logic active for safety

4. **Test Rendering**
   - Verify primary image displays correctly
   - Confirm fallback still works if primary unavailable

5. **Archive Fallback** (Optional)
   - Optionally move fallback to archive folder
   - Keep fallback logic active as safety net

---

## Notes

- Fallback images are **temporary** — they enable development while awaiting primary assets
- Always prioritize primary Big Ship C.B.O. images when available
- Fallback logic prevents site breakage during asset transition
- Good safeguarding compliance of fallbacks ensures organizational safety
- Attribution required based on license type

