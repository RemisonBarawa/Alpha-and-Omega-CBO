# Programs Directory

This directory contains all images and media assets for Big Ship C.B.O.'s three core programs:

## Programs

### 1. Adopt A Site (Mangrove Restoration)
**Files:**
- `adopt-a-site-hero.jpg` — Full-width hero image (1920x1080px)
- `adopt-a-site-card.jpg` — Program card thumbnail (400x300px)

**Content Focus:**
- Mangrove restoration activities
- Community involvement in planting and monitoring
- Locations: Tudor Creek, Mikindani, Ganahola
- Mikoko Watch community monitoring initiative

**Safeguarding Guidelines:**
- Prefer environmental shots (mangrove forest, coastal landscape)
- If people are included, ensure explicit consent documentation exists
- Focus on activity/process, not individual portraits

---

### 2. RECO/Yogurt Forest Campaign (Waste Recovery)
**Files:**
- `reco-yogurt-hero.jpg` — Full-width hero image (1920x1080px)
- `reco-yogurt-card.jpg` — Program card thumbnail (400x300px)

**Content Focus:**
- Yoghurt cup collection and transformation
- Seedling container production
- School education campaigns
- Reforestation outcomes
- Circular economy demonstration

**Safeguarding Guidelines:**
- Show waste collection and transformation process
- Environmental/activity focus preferred
- Avoid identifiable individual portraits

---

### 3. Urban Resilience & Skills Development
**Files:**
- `urban-resilience-hero.jpg` — Full-width hero image (1920x1080px)
- `urban-resilience-card.jpg` — Program card thumbnail (400x300px)

**Content Focus:**
- Youth livelihoods training
- Women's economic empowerment
- Community organizing and leadership
- Climate resilience education
- Skills training sessions

**Safeguarding Guidelines:**
- Show training activities and group engagement
- Prefer group shots or activity focus over individual portraits
- Obtain explicit consent for any community member photos

---

## Image Specifications

| Property | Value |
|----------|-------|
| Hero Images | 1920x1080px (16:9) |
| Card Thumbnails | 400x300px (4:3) |
| Format | JPEG, optimized |
| Max File Size | 500KB |
| Compression | Optimized for web, <500KB |

---

## Fallback Strategy

If specific Big Ship C.B.O. program images are unavailable:
- Hero images fall back to: `/public/fallback/environment-generic.jpg`
- Card images fall back to: `/public/fallback/community-generic.jpg`

Fallback logic is implemented in components via the `getProgramImage()` utility function.

---

## Usage in Components

### Program Hero Image
```typescript
<img 
  src={getProgramImage('adopt-a-site', '/programs/adopt-a-site-hero.jpg')}
  alt="Adopt A Site mangrove restoration program at Tudor Creek"
  className="hero-image"
/>
```

### Program Card
```typescript
<img 
  src={getProgramImage('adopt-a-site', '/programs/adopt-a-site-card.jpg')}
  alt="Adopt A Site program card"
  className="program-card-image"
/>
```

---

## Asset Attribution

All program images must include proper attribution:
- Document the source (Big Ship C.B.O., photographer, stock library)
- Confirm usage rights for web publishing
- For photos with identifiable people, confirm explicit consent exists
- Include license type (CC0, CC-BY, purchased stock, owned)

See `/public/ASSET_CHECKLIST.md` for complete attribution documentation.

---

## Notes

- All images are served from the web root via `/public/`
- Images are optimized for web loading (compressed, appropriate dimensions)
- Responsive images are handled in component CSS via `object-fit: cover`
- Ken Burns effect (parallax zoom) is applied via CSS animations
- Alt text is generated dynamically using the `getAltText()` utility

