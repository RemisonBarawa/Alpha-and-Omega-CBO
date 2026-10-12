# Impact Directory

This directory contains images for Big Ship C.B.O.'s impact stories, demonstrating the real-world outcomes of their environmental conservation and community development programs.

## Impact Stories

### Story 1: Tudor Creek Ecosystem Recovery
**File:** `tudor-creek-restoration.jpg`
**Dimensions:** 600x400px
**Format:** JPEG, optimized

**Story Context:**
- Community-led mangrove planting along Tudor Creek shoreline
- 300+ seedlings established with strong survival rate
- Improved coastal resilience and marine habitat
- Part of Adopt A Site program

**Image Focus:**
- Mangrove restoration progress
- Planted seedlings or restored shoreline
- Community involvement in planting/monitoring
- Environmental ecosystem improvement

---

### Story 2: Waste Recovery Program Success
**File:** `waste-recovery-success.jpg`
**Dimensions:** 600x400px
**Format:** JPEG, optimized

**Story Context:**
- RECO/Yogurt Forest Campaign outcome
- Plastic waste collected and transformed into seedling containers
- Environmental education in schools
- Circular economy demonstration

**Image Focus:**
- Waste collection or transformation process
- Seedling containers made from yoghurt cups
- Environmental education activity
- Reforestation from recovered waste

---

### Story 3: Youth Training & Livelihoods
**File:** `youth-training.jpg`
**Dimensions:** 600x400px
**Format:** JPEG, optimized

**Story Context:**
- Urban Resilience program youth skills training
- Youth livelihoods development
- Economic empowerment outcomes
- Community capacity building

**Image Focus:**
- Training session or skill demonstration
- Group participation in activities
- Youth engagement and learning
- Livelihood skill development

---

### Story 4: Community Engagement
**File:** `community-engagement.jpg`
**Dimensions:** 600x400px
**Format:** JPEG, optimized

**Story Context:**
- Community-wide participation in environmental programs
- Cross-community collaboration
- Inclusive environmental stewardship
- Community organizing outcomes

**Image Focus:**
- Group activities or community meetings
- Diverse community participation
- Collaborative environmental work
- Inclusive leadership development

---

## Image Specifications

| Property | Value |
|----------|-------|
| Dimensions | 600x400px (3:2 aspect ratio) |
| Format | JPEG, optimized for web |
| Max File Size | 500KB per image |
| Quality | Web-optimized, no visible compression artifacts |

---

## Safeguarding Guidelines

**Critical:** All images must follow Big Ship C.B.O. safeguarding policies regarding community member photos.

### Required Checks Before Using Community Photos:
- [ ] Explicit written consent obtained from all identifiable people
- [ ] Consent documentation on file with Big Ship C.B.O.
- [ ] Photo usage aligns with intended use (website, not third-party sharing)
- [ ] No children photo restrictions violated

### Preferred Approach:
- Use environmental/landscape photography (mangroves, coastal areas)
- Use activity/process shots focusing on work, not individual faces
- Use group shots emphasizing community participation
- Avoid portrait-style photography of individuals

---

## Fallback Strategy

If specific Big Ship C.B.O. impact images are unavailable, the system falls back to:
- Environmental fallback: `/public/fallback/environment-generic.jpg`
- Community fallback: `/public/fallback/community-generic.jpg`

Fallback logic is implemented via the `getProgramImage()` utility function.

---

## Usage in Components

### Impact Story Card
```typescript
interface ImpactStory {
  id: string;
  title: string;
  category: string;
  summary: string;
  image: string;           // Path to image in this directory
  outcome: string;
  location?: string;
}

// Example
const story: ImpactStory = {
  id: "tudor-creek-restoration",
  title: "Tudor Creek Ecosystem Recovery",
  category: "Mangrove Restoration",
  summary: "Community-led planting initiative resulted in 300+ mangrove seedlings...",
  image: "/impact/tudor-creek-restoration.jpg",
  outcome: "300+ established seedlings, 75% survival rate",
  location: "Tudor Creek, Mombasa"
};
```

### Rendering Impact Image
```typescript
<img 
  src={story.image}
  alt={getAltText('impact-image', story.title)}
  className="impact-story-image"
/>
```

---

## Attribution & Licensing

All impact story images must include proper attribution:
- **Source:** Document where image originated
- **License:** Specify CC0, CC-BY, purchased stock, or owned
- **Attribution:** How to credit (inline, footer, or separate attribution page)
- **Rights:** Confirm usage rights for web publishing
- **Consent:** For photos with identifiable people, maintain consent documentation

See `/public/ASSET_CHECKLIST.md` for complete attribution requirements.

---

## Impact Metrics & Source Attribution

Impact stories should include verified metrics with source attribution:

```typescript
{
  value: "300+",
  label: "Mangrove seedlings planted",
  source: "Big Ship C.B.O. internal records, 2023",
  verified: true,
  context: "Tudor Creek restoration site"
}
```

**Important:** All numerical claims must include source attribution to maintain credibility and transparency.

---

## Notes

- Images are served from web root via `/public/impact/`
- All images are optimized for web performance (<500KB)
- Images are displayed in a card layout with alternating image position (left/right)
- Images use `object-fit: cover` for consistent aspect ratio
- Reveal animations trigger when stories scroll into view
- Alt text is generated using `getAltText()` utility function

---

## Related Documentation

- See `/public/ASSET_CHECKLIST.md` for complete asset checklist
- See `/public/programs/README.md` for program image guidelines
- See `/public/fallback/README.md` for fallback image strategy
- See Big Ship C.B.O. Research Dossier for safeguarding policies

