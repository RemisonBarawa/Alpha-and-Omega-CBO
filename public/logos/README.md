# Logos Directory

This directory contains all logo variations and branding assets for Big Ship C.B.O.

## Logo Files

### Primary Logo
- **big-ship-logo.png** (1024x1024px)
  - Format: PNG with transparency
  - Purpose: Main logo for general use
  - Recommended Use: Header, footers, large displays
  - Fallback: Use SVG version if scaling is needed

- **big-ship-logo.svg**
  - Format: Scalable Vector Graphics
  - Purpose: Scalable logo for any size requirement
  - Recommended Use: Icons, favicons, responsive displays
  - Advantage: No quality loss at any size

### Logo Variations

- **big-ship-logo-horizontal.png**
  - Format: PNG with transparency
  - Aspect Ratio: Landscape (wider than tall)
  - Recommended Use: Social media headers, banner ads, wide displays
  - Purpose: Horizontal layout contexts where vertical logo doesn't fit well

- **big-ship-logo-icon.png**
  - Format: PNG
  - Size: 512x512px
  - Recommended Use: Favicon, app icon, very small displays
  - Purpose: Icon version for compact spaces

### Logo Animation

- **big-ship-logo-animation.mp4**
  - Format: MP4 video
  - Duration: 3-5 seconds
  - Purpose: Animated logo emergence for intro, header, or splash screen
  - Status: Optional - if unavailable, static logo with CSS animation fallback

---

## Logo Usage Guidelines

### Standard Logo (Header, Footer)
- Use: `big-ship-logo.png` or `big-ship-logo.svg`
- Size: 48-64px height in headers/footers
- Background: Works on white, light, and brand-colored backgrounds
- Spacing: Maintain clear space around logo per brand guidelines

### Horizontal Logo (Social Headers, Banners)
- Use: `big-ship-logo-horizontal.png`
- Size: Variable width, maintaining aspect ratio
- Common dimensions: 1200x300px for Twitter headers, 1200x628px for Facebook
- Purpose: Contexts where vertical logo is too narrow

### Icon/Favicon
- Use: `big-ship-logo-icon.png` or `big-ship-logo.svg`
- Size: 16x16px, 32x32px, 64x64px (multiple sizes)
- Format: ICO format for favicon.ico

### Animation Logo
- Use: `big-ship-logo-animation.mp4`
- Context: Intro splash, header animation, loading states
- Autoplay: Triggers when scrolled into view (IntersectionObserver)
- Fallback: If video unavailable, use static PNG with CSS pulse animation

---

## Implementation Details

### Logo in Header Component
```typescript
import logo from '/logos/big-ship-logo.svg';

export function Header() {
  return (
    <header className="header">
      <img 
        src={logo}
        alt="Big Ship C.B.O. Logo"
        className="logo"
        width={64}
        height={64}
      />
    </header>
  );
}
```

### Logo Video with Fallback
```typescript
function LogoVideoCard() {
  const hasVideo = checkAssetExists('/logos/big-ship-logo-animation.mp4');
  
  if (hasVideo) {
    return (
      <video
        src="/logos/big-ship-logo-animation.mp4"
        poster="/logos/big-ship-logo.png"
        autoPlay
        loop
        muted
        className="logo-video"
      />
    );
  }
  
  // Fallback: static logo with animation
  return (
    <div className="logo-static animate-gentle-pulse">
      <img 
        src="/logos/big-ship-logo.png"
        alt="Big Ship C.B.O. Logo"
      />
    </div>
  );
}
```

### Favicon Implementation
```html
<link rel="icon" href="/logos/big-ship-logo-icon.png" />
<link rel="apple-touch-icon" href="/logos/big-ship-logo-icon.png" />
```

---

## File Specifications

| Logo Variant | Format | Dimensions | Purpose |
|-------------|--------|-----------|---------|
| Primary Logo | PNG + SVG | 1024x1024px | General use |
| Horizontal Logo | PNG | Landscape ratio | Social headers |
| Icon Logo | PNG | 512x512px | Favicons, small displays |
| Animation | MP4 | Variable | Intro/animated contexts |

---

## Color & Transparency

All PNG logos should:
- [ ] Include full transparency (alpha channel)
- [ ] Have no background color (transparent background)
- [ ] Display correctly on both light and dark backgrounds
- [ ] Maintain color vibrancy and contrast

---

## Brand Guidelines Compliance

All logos must:
- [ ] Follow Big Ship C.B.O. brand guidelines
- [ ] Maintain consistent color usage
- [ ] Preserve logo proportions and spacing
- [ ] Include minimum clear space around logo
- [ ] Use approved font/text treatments if applicable

---

## Fallback Strategy

If main logo video is unavailable:
1. Use high-resolution PNG (`big-ship-logo.png`)
2. Apply CSS animation `@keyframes gentle-pulse` for subtle motion
3. Animation provides visual interest while maintaining brand consistency
4. Fallback remains performant and accessible

CSS Fallback Animation:
```css
@keyframes gentle-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}

.animate-gentle-pulse {
  animation: gentle-pulse 4s ease-in-out infinite;
}
```

---

## Asset Attribution

- **Source:** [Document where logo originated]
- **License:** [Owned by Big Ship C.B.O.]
- **Rights:** Approved for all web and marketing use
- **Design Credit:** [Designer/organization if applicable]

---

## Usage Statistics

- [ ] Header Logo: Main branding in site header
- [ ] Footer Logo: Branding in site footer
- [ ] Social Media: Profile pictures, share images, headers
- [ ] Favicon: Browser tab identification
- [ ] Email: Organization signature, email headers
- [ ] Print/Documents: Letterhead, reports, materials
- [ ] Animation: Intro splash, welcome sequence

---

## Accessibility Notes

All logos should:
- [ ] Include proper alt text when used as images
- [ ] Have sufficient contrast for readability (WCAG AA)
- [ ] Work correctly with screen readers
- [ ] Not rely solely on color to convey information

Example:
```tsx
<img 
  src="/logos/big-ship-logo.svg"
  alt="Big Ship C.B.O. - Community-based environmental conservation organization"
  className="logo"
/>
```

---

## Related Files

- See `/public/ASSET_CHECKLIST.md` for complete asset requirements
- See `/public/programs/README.md` for program image guidelines
- See `/public/impact/README.md` for impact story images
- See `/public/fallback/README.md` for fallback strategy

---

## Notes

- Keep SVG logos for responsive/scalable use
- PNG variants provide raster fallbacks for older browsers
- All logos optimize for web performance
- Video logo provides premium brand experience if available
- Fallback static logo ensures graceful degradation

