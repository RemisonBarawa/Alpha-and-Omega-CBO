# Design Document — Alpha & Omega CBO Kenya Rebrand

## Overview

This is a **content-only rebrand** of an existing React / TanStack Router / Tailwind website. The site was built for "Big Ship C.B.O." and must be fully rebranded to "Alpha & Omega CBO Kenya". No animations, component architecture, route structure, prop interfaces, or CSS utility classes change. Only text copy, data values, contact details, social links, program data, impact timeline entries, logo alt text, and page metadata are modified.

### What changes

| Layer | Changes |
|---|---|
| `src/lib/contact.ts` | New address, phone, email |
| `src/lib/altText.ts` | New org name, new program IDs |
| `src/data/programs.ts` | Five new programs, four new partners, new impact metrics/stories |
| `src/components/site/Header.tsx` | Logo text, email, phone, social links, program dropdown |
| `src/components/site/Footer.tsx` | Logo text, description, social links, program links, copyright |
| `src/components/site/IntroSplash.tsx` | Session key, heading, description text |
| `src/components/site/Partners.tsx` | Partners array, section heading/description |
| `src/components/site/ImpactStories.tsx` | Four story cards |
| `src/routes/__root.tsx` | Default meta tags, og:url, author, icon path |
| `src/routes/index.tsx` | All copy: hero, marquee, milestones, approach, programs preview, mission/vision, CTA band |
| `src/routes/about.tsx` | PageHero, "Why we exist", values, mission, vision, stat counters |
| `src/routes/impact.tsx` | Stats, outcomes, stories, PageHero |
| `src/routes/board.tsx` | Leadership array, PageHero |
| `src/routes/events.tsx` | Events array, PageHero, CtaBand |
| `src/routes/contact.tsx` | PageHero, contact info cards |
| `src/routes/programs.tsx` | PageHero, programs array, support items |
| Route files — **delete** | `programs.adopt-a-site.tsx`, `programs.reco-yogurt-forest.tsx`, `programs.urban-resilience.tsx` |
| Route files — **create** | Five new program sub-pages |
| `src/routeTree.gen.ts` | Replace three old program routes with five new ones |

### What is frozen (immutable)

- Every CSS utility class in `src/styles.css`
- TSX file names and directory structure in `src/components/site/`
- Prop interfaces of `PageHero`, `CtaBand`, `ImpactMetric`, `ProgramDetail`, `LogoVideoCard`, `Reveal`
- `<Outlet />`, `<IntroSplash />`, `<ScrollProgress />`, `<Header />`, `<Footer />`, `<Toaster />` placements in `__root.tsx`
- TanStack Router file-based route naming convention
- `vite build` must pass without TypeScript errors

---

## Architecture

```
src/
├── lib/
│   ├── contact.ts          ← update values only
│   └── altText.ts          ← update org name + program IDs
├── data/
│   └── programs.ts         ← replace all arrays
├── components/site/        ← NO structural changes; strings/arrays only
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── IntroSplash.tsx
│   ├── Partners.tsx
│   └── ImpactStories.tsx
└── routes/
    ├── __root.tsx           ← meta tags only
    ├── index.tsx            ← content arrays only
    ├── about.tsx            ← content arrays only
    ├── impact.tsx           ← content arrays only
    ├── board.tsx            ← leadership array + PageHero
    ├── events.tsx           ← events array + PageHero
    ├── contact.tsx          ← PageHero + contact cards
    ├── programs.tsx         ← programs array + PageHero
    ├── programs.girl-child-mentorship.tsx   ← CREATE
    ├── programs.womens-empowerment.tsx      ← CREATE
    ├── programs.youth-voice.tsx             ← CREATE
    ├── programs.human-rights.tsx            ← CREATE
    ├── programs.climate-action.tsx          ← CREATE
    ├── programs.adopt-a-site.tsx            ← DELETE
    ├── programs.reco-yogurt-forest.tsx      ← DELETE
    └── programs.urban-resilience.tsx        ← DELETE
```

The route tree is manually updated in `src/routeTree.gen.ts` — TanStack Router's code-gen file — to replace the three legacy program routes with five new ones.

---

## Components and Interfaces

No prop interfaces change. All components are used exactly as before; only the string/array values passed as props change.

### ProgramDetail props pattern (existing interface)

```ts
ProgramDetail({
  eyebrow: string,       // short Swahili/thematic label
  title: string,         // full program name
  body: string,          // one-sentence overview
  image: string,         // IMG.* path
  altText?: string,      // from getProgramAltText()
  tracks: string[][],    // [name, description] pairs — 4 items
  details: string[][],   // [key, value] pairs — 4 items
})
```

### PageHero props pattern (existing interface)

```ts
PageHero({
  eyebrow: string,
  title: string,
  body?: string,
  image?: string,
  stats?: [string, string][],   // [figure, label] — exactly 3 items
})
```

### ImpactMetric props pattern (existing interface)

```ts
ImpactMetric({
  to: number,
  label: string,
  source: string,
  status: "verified" | "documented" | "reported" | "estimated",
  suffix?: string,
  counterClassName?: string,
})
```

---

## Data Models

### 2.1 `src/lib/contact.ts` — updated `getContactInfo()`

```ts
export function getContactInfo(): ContactInfo {
  const address = "Bangladesh Slums, Mikindani Ward, Jomvu Sub-County, Mombasa County, Kenya";
  const phone: string | null = "+254 740 610 899";
  const email: string | null = "alphaandomegacbokenya001@gmail.com";
  const hasAny = address !== null || phone !== null || email !== null;
  return { address, phone, email, hasAny };
}
```

---

### 2.2 `src/lib/altText.ts` — updated strings

Replace every occurrence of `"Big Ship C.B.O."` with `"Alpha & Omega CBO Kenya"` in template strings. Update `getProgramAltText` program ID map to the five new program IDs:

```ts
const programDescriptions: Record<string, string> = {
  'girl-child-mentorship':
    'Girl Child Mentorship & Empowerment program supporting girls in Bangladesh Slums',
  'womens-empowerment':
    "Women's Empowerment & Mentorship program for women in Mikindani Ward",
  'youth-voice':
    'Youth Voice & Civic Participation program engaging young people in Mombasa',
  'human-rights':
    'Human Rights & Socio-economic Rights program in Jomvu Sub-County',
  'climate-action':
    'Climate & Community Action program addressing environmental challenges in Mombasa',
};
```

All other `getAltText` template strings replace `"Big Ship C.B.O."` with `"Alpha & Omega CBO Kenya"`. The `getImpactStoryAltText` and `validateAltText` functions are unchanged.

---

### 2.3 `src/data/programs.ts` — full replacement

#### programs array (5 records)

```ts
export const programs: Program[] = [
  {
    id: "girl-child-mentorship",
    name: "Girl Child Mentorship & Empowerment",
    shortDescription:
      "Mentoring girls in Bangladesh Slums to stay in school, build confidence, and access opportunities.",
    longDescription:
      "The Girl Child Mentorship & Empowerment program addresses the specific barriers facing girls in Bangladesh Slums, Mikindani Ward — including early school dropout, gender-based barriers, and limited access to sanitary products. The program runs mentorship circles, skill sessions, and the Pad Bank, a community-managed menstrual hygiene initiative launched in 2023.",
    icon: "girl-icon",
    image: "/programs/girl-child-mentorship-hero.jpg",
    outcomes: [
      "One-on-one and group mentorship for school-age girls",
      "Pad Bank: free menstrual hygiene product distribution",
      "Life-skills and self-confidence workshops",
      "School retention and transition support",
    ],
    locations: ["Bangladesh Slums", "Mikindani Ward"],
  },
  {
    id: "womens-empowerment",
    name: "Women's Empowerment & Mentorship",
    shortDescription:
      "Building economic independence and leadership capacity for women in Mikindani Ward.",
    longDescription:
      "The Women's Empowerment & Mentorship program publicly featured in 2023, provides women in Bangladesh Slums and Mikindani Ward with structured mentorship, livelihood training, and access to networks. The program centres women's voices in community decision-making and connects participants to economic opportunities.",
    icon: "women-icon",
    image: "/programs/womens-empowerment-hero.jpg",
    outcomes: [
      "Structured mentorship for adult women",
      "Livelihood and income-generation skills training",
      "Leadership and advocacy capacity building",
      "Community network and peer support circles",
    ],
    locations: ["Bangladesh Slums", "Mikindani Ward"],
  },
  {
    id: "youth-voice",
    name: "Youth Voice & Civic Participation",
    shortDescription:
      "Equipping young people in Jomvu Sub-County to engage in civic processes and community decision-making.",
    longDescription:
      "Youth Voice & Civic Participation was spotlighted by Shining Hope for Communities (SHOFCO) in 2024 as a youth-voice partner program. It engages young people in community forums, civic education, and structured dialogue with local authorities, building a generation of informed, active citizens in Jomvu Sub-County.",
    icon: "youth-icon",
    image: "/programs/youth-voice-hero.jpg",
    outcomes: [
      "Civic education and rights awareness workshops",
      "Community dialogue and public participation forums",
      "Youth-led community projects and campaigns",
      "Partnership with Shining Hope for Communities (SHOFCO)",
    ],
    locations: ["Jomvu Sub-County", "Mikindani Ward"],
  },
  {
    id: "human-rights",
    name: "Human Rights & Socio-economic Rights",
    shortDescription:
      "Advancing knowledge and protection of human rights for residents of Bangladesh Slums.",
    longDescription:
      "Identified in 2019 by HURIA Human Rights Lab as a mentee organization, Alpha & Omega CBO Kenya has developed a rights-based approach to community development. This program trains community members to understand, claim, and defend their socio-economic rights — including access to education, health, and decent living conditions.",
    icon: "rights-icon",
    image: "/programs/human-rights-hero.jpg",
    outcomes: [
      "Human rights awareness and legal literacy training",
      "Socio-economic rights documentation and advocacy",
      "Community paralegals and rights defenders network",
      "Partnership with HURIA Human Rights Lab",
    ],
    locations: ["Bangladesh Slums", "Jomvu Sub-County"],
  },
  {
    id: "climate-action",
    name: "Climate & Community Action",
    shortDescription:
      "Mobilising residents of Mikindani Ward to respond to climate risks and build community resilience.",
    longDescription:
      "The Climate & Community Action program engages community members in understanding local climate risks, organizing collective responses, and implementing practical resilience measures. In 2025, Alpha & Omega CBO Kenya formalized its role as a Community Hub through the DARAJA Project MoU with Dream Achievers Youth Organization Kenya (DAYOK).",
    icon: "climate-icon",
    image: "/programs/climate-action-hero.jpg",
    outcomes: [
      "Community climate risk mapping and education",
      "Collective action planning and resilience projects",
      "Green practices and environmental stewardship",
      "DARAJA Project MoU with DAYOK (2025)",
    ],
    locations: ["Mikindani Ward", "Jomvu Sub-County"],
  },
];
```

#### partners array (4 records)

```ts
export const partners: Partner[] = [
  {
    name: "HURIA Human Rights Lab",
    description:
      "Identified Alpha & Omega as a mentee organization in 2019; partnership in socio-economic rights work in Jomvu.",
  },
  {
    name: "Shining Hope for Communities (SHOFCO)",
    description:
      "Spotlighted Alpha & Omega as youth-voice partner in 2024; collaboration on civic participation programs.",
  },
  {
    name: "Dream Achievers Youth Organization Kenya (DAYOK)",
    description:
      "DARAJA Project MoU signed 2025; joint Community Hub initiative in Mikindani Ward.",
  },
  {
    name: "DARAJA Project",
    description:
      "MoU signed 2025 through DAYOK partnership; supports Alpha & Omega's Community Hub role.",
  },
];
```

#### impactMetrics array (provable figures only)

```ts
export const impactMetrics: ImpactMetric[] = [
  {
    value: 5,
    label: "Active programs",
    source: "Alpha & Omega CBO Kenya program register, 2025",
    verified: true,
    context: "Girl Child, Women's Empowerment, Youth Voice, Human Rights, Climate Action",
  },
  {
    value: 4,
    label: "Named partner organizations",
    source: "Partnership agreements and public records, 2019–2025",
    verified: true,
    context: "HURIA, SHOFCO, DAYOK, DARAJA Project",
  },
  {
    value: "2019",
    label: "Year operations began",
    source: "HURIA Human Rights Lab mentee designation, 2019",
    verified: true,
    context: "Recognized by HURIA Human Rights Lab as mentee organization",
  },
];
```

#### impactStories array (4 A&O-aligned stories)

```ts
export const impactStories: ImpactStory[] = [
  {
    id: "huria-mentee-2019",
    title: "HURIA Human Rights Lab Partnership",
    category: "Human Rights",
    summary:
      "In 2019, HURIA Human Rights Lab identified Alpha & Omega CBO Kenya as a mentee organization, recognizing the group's work addressing socio-economic rights in Jomvu Sub-County.",
    image: "/impact/human-rights-community.jpg",
    outcome: "Mentee designation 2019 · Rights-based program framework established",
    quote:
      "[Placeholder — a verified quote from a program participant will be added when available]",
    location: "Jomvu Sub-County, Mombasa",
  },
  {
    id: "pad-bank-2023",
    title: "Pad Bank Launch — Girl Child Program",
    category: "Girl Child Mentorship",
    summary:
      "In 2023, Alpha & Omega CBO Kenya launched the Pad Bank under the Girl Child Mentorship & Empowerment Program, providing free menstrual hygiene products to girls in Bangladesh Slums.",
    image: "/impact/girl-child-mentorship.jpg",
    outcome: "Pad Bank operational 2023 · Girls' school attendance supported",
    quote:
      "[Placeholder — a verified quote from a program participant will be added when available]",
    location: "Bangladesh Slums, Mikindani Ward",
  },
  {
    id: "shofco-youth-voice-2024",
    title: "SHOFCO Youth Voice Partnership",
    category: "Youth Voice",
    summary:
      "Shining Hope for Communities (SHOFCO) spotlighted Alpha & Omega CBO Kenya as a youth-voice partner in 2024, amplifying the organization's civic participation work among young people in Jomvu Sub-County.",
    image: "/impact/youth-civic.jpg",
    outcome: "SHOFCO partner spotlight 2024 · Youth civic reach expanded",
    quote:
      "[Placeholder — a verified quote from a program participant will be added when available]",
    location: "Jomvu Sub-County, Mombasa",
  },
  {
    id: "community-hub-2025",
    title: "DARAJA Project MoU & Community Hub",
    category: "Climate Action",
    summary:
      "In 2025, Alpha & Omega CBO Kenya signed a Memorandum of Understanding with Dream Achievers Youth Organization Kenya (DAYOK) through the DARAJA Project, formalizing its role as a Community Hub in Mikindani Ward.",
    image: "/impact/climate-community.jpg",
    outcome: "Community Hub designation 2025 · DARAJA MoU signed with DAYOK",
    quote:
      "[Placeholder — a verified quote from a program participant will be added when available]",
    location: "Mikindani Ward, Mombasa",
  },
];
```

---

## Component Content Changes

### 3.1 `src/components/site/Header.tsx`

**Logo block** — replace:
```ts
// src: "/big-ship-logo.svg" stays until new asset arrives
// alt: "Alpha & Omega CBO Kenya logo"
// Display text line 1: "Alpha & Omega"
// Display text line 2 (small caps): "CBO Kenya"
```

**Top-bar contact**:
```ts
href="mailto:alphaandomegacbokenya001@gmail.com"   // email link
// display: "alphaandomegacbokenya001@gmail.com"
href="tel:+254740610899"                           // phone link
// display: "+254 740 610 899"
```

**Top-bar social icons** — replace four placeholder icons with:
```ts
[Facebook, "Alpha & Omega CBO Kenya on Facebook", "https://www.facebook.com/alphaandomegacbokenya"],
[X,        "Alpha & Omega CBO Kenya on X",         "https://x.com/and_cbo"],
// Instagram, LinkedIn, YouTube → href="#", aria-label updated to "Alpha & Omega CBO Kenya on [Platform]"
```

Note: import `X` icon from lucide-react in place of the current fourth icon slot, or use the existing `X` import (already used as the mobile close button — use a separate alias or the Twitter icon if available).

**programLinks array**:
```ts
const programLinks = [
  { to: "/programs",                       label: "All Programs" },
  { to: "/programs/girl-child-mentorship", label: "Girl Child Mentorship" },
  { to: "/programs/womens-empowerment",    label: "Women's Empowerment" },
  { to: "/programs/youth-voice",           label: "Youth Voice" },
  { to: "/programs/human-rights",          label: "Human Rights" },
  { to: "/programs/climate-action",        label: "Climate Action" },
];
```

---

### 3.2 `src/components/site/Footer.tsx`

**Logo block**:
```ts
// src: "/big-ship-logo.svg" (unchanged until new asset)
// alt: "Alpha & Omega CBO Kenya logo"
// span text: "Alpha & Omega CBO Kenya"
```

**Org description**:
```
"Youth-led community-based organization supporting women, girls, and young people through mentorship, rights awareness, civic participation, and community action in Mombasa, Kenya."
```

**Social icons** — replace four existing social links:
```ts
[Facebook, "Alpha & Omega CBO Kenya on Facebook", "https://www.facebook.com/alphaandomegacbokenya"],
[X,        "Alpha & Omega CBO Kenya on X",         "https://x.com/and_cbo"],
// Instagram → href="#", aria-label: "Alpha & Omega CBO Kenya on Instagram"
// LinkedIn  → href="#", aria-label: "Alpha & Omega CBO Kenya on LinkedIn"
// Remove YouTube or set href="#", aria-label: "Alpha & Omega CBO Kenya on YouTube"
```

**columns array** — Community column program links:
```ts
{
  title: "Community",
  links: [
    { to: "/events",                           label: "Events" },
    { to: "/programs/girl-child-mentorship",   label: "Girl Child Mentorship" },
    { to: "/programs/womens-empowerment",      label: "Women's Empowerment" },
    { to: "/programs/youth-voice",             label: "Youth Voice" },
    { to: "/programs/human-rights",            label: "Human Rights" },
    { to: "/programs/climate-action",          label: "Climate Action" },
  ],
},
```

**Copyright line**:
```
© {year} Alpha & Omega CBO Kenya. All rights reserved.
```

**Footer tagline**:
```
Empower | Educate | Transforming Lives.
```

---

### 3.3 `src/components/site/IntroSplash.tsx`

**Session storage key**: `"alpha-omega-intro-seen"` (was `"bigship-intro-seen"`)

**Heading**:
```
Welcome to <span className="text-gradient">Alpha & Omega CBO Kenya</span>
```

**Description**:
```
Youth-led community organization rooted in Bangladesh Slums, Mikindani Ward, Mombasa.
We support women, girls, and young people through mentorship, rights awareness,
civic participation, and community action.
```

---

### 3.4 `src/components/site/Partners.tsx`

**partners array**:
```ts
const partners = [
  "HURIA Human Rights Lab",
  "Shining Hope for Communities (SHOFCO)",
  "Dream Achievers Youth Organization Kenya (DAYOK)",
  "DARAJA Project",
];
```

**Section heading**:
```
Working together for community empowerment
```

**Section description**:
```
We partner with organizations committed to human rights, youth empowerment, and community development in Mombasa and across Kenya.
```

---

### 3.5 `src/components/site/ImpactStories.tsx`

**Section heading/description**:
```
eyebrow: "Real Communities. Real Change."
h2: "Stories of community impact"
description: "Behind every program is a community working together to build better lives. Here are stories from Alpha & Omega CBO Kenya's work."
```

**stories array** (4 cards):

```ts
const stories = [
  {
    image: IMG.workspace,
    tag: "Human Rights",
    name: "HURIA Human Rights Lab Partnership",
    meta: "Jomvu Sub-County, Mombasa · 2019",
    quote:
      "[Placeholder — a verified testimonial will be added when available]",
    body: "In 2019, HURIA Human Rights Lab identified Alpha & Omega CBO Kenya as a mentee organization working on socio-economic rights in Jomvu Sub-County. This partnership established the rights-based framework that underpins all of Alpha & Omega's programs today.",
    stat: "Mentee designation 2019 · Rights-based framework established",
    statNote: "Source: HURIA Human Rights Lab public records, 2019",
  },
  {
    image: IMG.community,
    tag: "Girl Child Mentorship",
    name: "Pad Bank Launch",
    meta: "Bangladesh Slums, Mikindani Ward · 2023",
    quote:
      "[Placeholder — a verified testimonial will be added when available]",
    body: "In 2023, the Pad Bank was launched under the Girl Child Mentorship & Empowerment Program, providing free menstrual hygiene products to girls in Bangladesh Slums. The initiative directly supports school attendance and dignity for girls in the community.",
    stat: "Pad Bank operational 2023 · Girls' school attendance supported",
    statNote: "Source: Alpha & Omega CBO Kenya program records, 2023",
  },
  {
    image: IMG.students,
    tag: "Youth Voice",
    name: "SHOFCO Youth Voice Partnership",
    meta: "Jomvu Sub-County, Mombasa · 2024",
    quote:
      "[Placeholder — a verified testimonial will be added when available]",
    body: "Shining Hope for Communities (SHOFCO) spotlighted Alpha & Omega CBO Kenya as a youth-voice partner in 2024, recognizing the organization's work engaging young people in civic participation and community decision-making in Jomvu Sub-County.",
    stat: "SHOFCO partner spotlight 2024 · Youth civic reach expanded",
    statNote: "Source: SHOFCO public communications, 2024",
  },
  {
    image: IMG.tech,
    tag: "Climate Action",
    name: "DARAJA Project MoU & Community Hub",
    meta: "Mikindani Ward, Mombasa · 2025",
    quote:
      "[Placeholder — a verified testimonial will be added when available]",
    body: "In 2025, Alpha & Omega CBO Kenya signed a Memorandum of Understanding with Dream Achievers Youth Organization Kenya (DAYOK) through the DARAJA Project, formalizing the organization's role as a Community Hub in Mikindani Ward.",
    stat: "Community Hub 2025 · DARAJA MoU signed with DAYOK",
    statNote: "Source: DARAJA Project MoU documentation, 2025",
  },
];
```

**Bottom link text**: `"Explore all impact stories"` (link to `/impact`)

---

## Route File Changes

### 4.1 `src/routes/__root.tsx`

Replace all `head()` meta values:

```ts
{ title: "Alpha & Omega CBO Kenya" },
{ name: "description", content: "Youth-led community organization in Bangladesh Slums, Mikindani Ward, Mombasa — supporting women, girls, and young people through mentorship, rights awareness, civic participation, and community action." },
{ name: "author", content: "Alpha & Omega CBO Kenya" },
{ property: "og:title", content: "Alpha & Omega CBO Kenya | Empower · Educate · Transform" },
{ property: "og:description", content: "Youth-led CBO in Mombasa supporting women, girls, and young people through mentorship, rights, civic participation, and community action." },
{ property: "og:type", content: "website" },
{ property: "og:url", content: "https://alphaandomegacbokenya.netlify.app" },
{ property: "og:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
// og:image:width, og:image:height, og:image:type — unchanged
{ name: "twitter:card", content: "summary_large_image" },
{ name: "twitter:title", content: "Alpha & Omega CBO Kenya | Empower · Educate · Transform" },
{ name: "twitter:description", content: "Youth-led CBO in Mombasa supporting women, girls, and young people." },
{ name: "twitter:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
```

**Icon link** — update `href` when new icon asset is available. Until then retain `/big-ship-icon.svg`.

---

### 4.2 `src/routes/index.tsx`

#### head()
```ts
{ title: "Home | Alpha & Omega CBO Kenya" },
{ name: "description", content: "Alpha & Omega CBO Kenya — youth-led organization in Bangladesh Slums, Mikindani Ward, Mombasa, supporting women, girls, and young people." },
{ property: "og:title", content: "Alpha & Omega CBO Kenya | Empower · Educate · Transform" },
{ property: "og:description", content: "Youth-led CBO in Mombasa supporting women, girls, and young people through mentorship, rights awareness, civic participation, and community action." },
{ property: "og:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
// twitter:* mirrors og:*
```

#### Hero section

**Badge text**: `"Youth-Led · Community-Rooted"`

**h1**:
```
Empowering young people.
Educating communities.
<span className="text-shine">Transforming lives.</span>
```

**Hero sub-paragraph**:
```
Alpha & Omega CBO Kenya is a youth-led community organization rooted in Bangladesh Slums, Mikindani Ward, Mombasa County. We support women, girls, and young people through mentorship, rights awareness, civic participation, and community action.
```

**CTA buttons**:
```ts
{ to: "/contact", label: "Partner with us" }      // primary
{ to: "/programs", label: "Support a program" }   // secondary
{ to: "/contact", label: "Get involved" }         // third (add if layout permits; else keep two)
```

**LogoVideoCard footer text**:
```
Est. 2019 · Bangladesh Slums, Mombasa   /   Alpha & Omega CBO Kenya
```

**Hero image alt**: `"Community members at Alpha & Omega CBO Kenya in Bangladesh Slums, Mombasa"`

#### Mission / Vision cards

```ts
// Mission card
"To empower women, girls, and young people in Bangladesh Slums through mentorship, rights awareness, civic participation, and community action."

// Vision card
"Empowered youth, resilient communities."
```

#### marquee array
```ts
const marquee = [
  "Alpha & Omega CBO Kenya",
  "Bangladesh Slums · Mombasa",
  "Empower | Educate | Transforming Lives",
  "Founded 2019",
  "Mentorship · Rights · Civic Action",
  "Mikindani Ward · Jomvu Sub-County",
];
```

#### milestones array (5 cards)
```ts
const milestones = [
  {
    year: "2019",
    label: "HURIA Partnership",
    body: "HURIA Human Rights Lab identified Alpha & Omega as a mentee organization addressing socio-economic rights in Jomvu Sub-County.",
  },
  {
    year: "2023",
    label: "Women's Empowerment Featured",
    body: "Women's Empowerment and Mentorship program publicly featured; Pad Bank launched under Girl Child Mentorship program.",
  },
  {
    year: "2024",
    label: "SHOFCO Spotlight",
    body: "Shining Hope for Communities spotlighted Alpha & Omega as youth-voice partner; Victor Nando Odongo featured in leadership profile.",
  },
  {
    year: "2025",
    label: "Community Hub",
    body: "DARAJA Project MoU signed with Dream Achievers Youth Organization Kenya; Alpha & Omega became a Community Hub.",
  },
];
```

Note: The milestones section currently renders a 5-column grid (`md:grid-cols-5`). With 4 entries, change to `md:grid-cols-4` or keep 5 and leave the last slot empty. Recommended: `md:grid-cols-2 lg:grid-cols-4` for clean layout.

#### approach array (4 steps)
```ts
const approach = [
  {
    n: "01",
    icon: Compass,
    title: "Engage",
    body: "We listen to and learn from the community — understanding the challenges facing women, girls, and young people in Bangladesh Slums.",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "Mentor",
    body: "Structured mentorship circles, workshops, and one-on-one support equip participants with skills, confidence, and knowledge.",
  },
  {
    n: "03",
    icon: HeartHandshake,
    title: "Mobilize",
    body: "We organize community members to advocate for their rights, participate in civic processes, and act on shared challenges.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Sustain",
    body: "Partnerships with HURIA, SHOFCO, DAYOK, and the DARAJA Project ensure long-term support and community-led ownership.",
  },
];
```

#### "Why it works" section (blockquote + bullets)

Replace Jane Mwangi blockquote with a clearly labelled placeholder:
```ts
// blockquote
quote: "[Placeholder — a verified testimonial will be added when available]"
footer: "Community participant · Alpha & Omega CBO Kenya"
initials: "AO"

// "Why it works" bullets
["Youth-led", "Young people from the community guide priorities, lead programs, and own outcomes."],
["Gender responsive", "Programs specifically address the needs of women and girls alongside young men."],
["Rights-based", "All work is grounded in human rights principles, informed by HURIA Human Rights Lab partnership."],
```

#### programs preview array (5 cards)
```ts
const programs = [
  {
    img: IMG.tech,
    tag: "Mentorship",
    kicker: "GIRL CHILD · ONGOING",
    title: "Girl Child Mentorship & Empowerment",
    body: "Mentoring girls in Bangladesh Slums to stay in school, build confidence, and access the Pad Bank.",
    to: "/programs/girl-child-mentorship" as const,
  },
  {
    img: IMG.arts,
    tag: "Empowerment",
    kicker: "WOMEN · ONGOING",
    title: "Women's Empowerment & Mentorship",
    body: "Structured mentorship and livelihood training for women in Mikindani Ward.",
    to: "/programs/womens-empowerment" as const,
  },
  {
    img: IMG.business,
    tag: "Civic",
    kicker: "YOUTH VOICE · ONGOING",
    title: "Youth Voice & Civic Participation",
    body: "Engaging young people in civic forums and community decision-making with SHOFCO.",
    to: "/programs/youth-voice" as const,
  },
  {
    img: IMG.community,
    tag: "Rights",
    kicker: "HUMAN RIGHTS · ONGOING",
    title: "Human Rights & Socio-economic Rights",
    body: "Rights awareness and socio-economic advocacy in partnership with HURIA Human Rights Lab.",
    to: "/programs/human-rights" as const,
  },
  {
    img: IMG.hero,
    tag: "Climate",
    kicker: "COMMUNITY ACTION · ONGOING",
    title: "Climate & Community Action",
    body: "Community resilience and climate action as a DARAJA Project Community Hub.",
    to: "/programs/climate-action" as const,
  },
];
```

Note: programs preview grid currently uses `md:grid-cols-3`. With 5 programs, `sm:grid-cols-2 lg:grid-cols-3` works; the fifth card wraps naturally. No CSS class changes required.

#### Programs section description
```
Alpha & Omega CBO Kenya delivers five integrated programs for community empowerment, rights awareness, and civic participation.
```

#### Home page "By The Numbers" impact metrics
```ts
[
  { to: 5,    label: "Active programs",         source: "Alpha & Omega CBO Kenya program register, 2025", status: "verified", suffix: "" },
  { to: 4,    label: "Named partner organizations", source: "Partnership agreements 2019–2025", status: "documented", suffix: "" },
  { to: 2019, label: "Year founded",            source: "HURIA Human Rights Lab records, 2019", status: "verified", suffix: "" },
]
```

#### CTA band (bottom of page)
```ts
h2: "Ready to join the Alpha & Omega CBO Kenya community?"
p:  "Partner with us, support a program, or get involved in Bangladesh Slums, Mombasa."
// Buttons:
{ to: "/contact", label: "Partner with us" }
{ to: "/events",  label: "Upcoming events" }
```

---

### 4.3 `src/routes/about.tsx`

#### head()
```ts
{ title: "About Us | Alpha & Omega CBO Kenya" },
{ name: "description", content: "Alpha & Omega CBO Kenya's story: a youth-led CBO rooted in Bangladesh Slums, Mikindani Ward, Mombasa, founded in 2019." },
{ property: "og:title", content: "About Alpha & Omega CBO Kenya" },
// og:image, twitter:* → updated to alphaandomegacbokenya.netlify.app
```

#### PageHero
```ts
eyebrow: "Our Story"
title:   "Youth-led community action in Bangladesh Slums since 2019"
body:    "Alpha & Omega CBO Kenya was founded to support women, girls, and young people in Bangladesh Slums, Mikindani Ward, Jomvu Sub-County. Today our work spans five programs in mentorship, rights, civic participation, and community action."
stats: [
  ["2019",    "Year founded"],
  ["5",       "Active programs"],
  ["Mombasa", "Bangladesh Slums, Jomvu"],
]
```

#### Hero image alt
```
"Community members engaged in Alpha & Omega CBO Kenya programs in Bangladesh Slums, Mombasa"
```

#### "Why we exist" section
```ts
h2: "Why we exist"

p1: "Bangladesh Slums in Mikindani Ward, Jomvu Sub-County, is home to a vibrant community facing significant challenges — limited access to education, persistent gender inequality, restricted economic opportunity, and the compounding effects of climate vulnerability."

p2: "Alpha & Omega CBO Kenya was founded to address these challenges directly, by and for the community. By centering youth leadership, responding to the needs of women and girls, grounding work in human rights principles, and building civic agency, we believe community-rooted action creates lasting change."
```

#### Stat counters (3 cards)
```ts
[
  { to: 5,    label: "Active programs" },
  { to: 4,    label: "Named partner organizations" },
  { to: 2019, label: "Year founded" },
]
```

#### Values grid (4 cards)
```ts
const values = [
  ["Youth-Led",        "Young people from the community guide priorities, lead programs, and own outcomes."],
  ["Gender Responsive","Programs specifically address the needs of women and girls alongside young men and boys."],
  ["Rights-Based",     "All work is grounded in human rights principles, informed by our partnership with HURIA Human Rights Lab."],
  ["Community-Rooted", "We are from Bangladesh Slums — our decisions are made with and by the community we serve."],
];
```

#### Mission card
```
"To empower women, girls, and young people in Bangladesh Slums through mentorship, rights awareness, civic participation, and community action."
```

#### Vision card
```
"Empowered youth, resilient communities."
```

#### CtaBand
```ts
title: "Partner with Alpha & Omega CBO Kenya"
body:  "We welcome partners, supporters, and volunteers committed to community empowerment in Mombasa."
primary:   { to: "/contact", label: "Get in touch" }
secondary: { to: "/programs", label: "See our programs" }
```

---

### 4.4 `src/routes/impact.tsx`

#### head()
```ts
{ title: "Impact | Alpha & Omega CBO Kenya" },
{ name: "description", content: "Alpha & Omega CBO Kenya's community impact: partnerships, milestones, and program outcomes from 2019 to 2025." },
{ property: "og:title", content: "Impact | Alpha & Omega CBO Kenya" },
// og:image → alphaandomegacbokenya.netlify.app
```

#### PageHero
```ts
eyebrow: "Our Impact"
title:   "Community milestones from 2019 to 2025"
body:    "Alpha & Omega CBO Kenya tracks its progress through verified partnerships and documented milestones. Figures shown are drawn from partnership records and public sources; where independent verification is unavailable, cautious language is used."
stats: [
  ["5",    "Active programs"],
  ["4",    "Named partner organizations"],
  ["2019", "Year operations began"],
]
```

#### stats array (replace all)
```ts
const stats = [
  {
    to: 5,
    label: "Active programs",
    source: "Alpha & Omega CBO Kenya program register, 2025",
    status: "verified" as const,
    suffix: "",
  },
  {
    to: 4,
    label: "Named partner organizations",
    source: "Partnership agreements and public records, 2019–2025",
    status: "documented" as const,
    suffix: "",
  },
  {
    to: 2019,
    label: "Year operations began — recognized by HURIA Human Rights Lab",
    source: "HURIA Human Rights Lab public records, 2019",
    status: "verified" as const,
    suffix: "",
  },
  {
    to: 1,
    label: "MoU signed — DARAJA Project with DAYOK",
    source: "DARAJA Project MoU documentation, 2025",
    status: "documented" as const,
    suffix: "",
  },
];
```

#### outcomes array (replace all)
```ts
const outcomes = [
  {
    figure: "2019",
    label: "HURIA Human Rights Lab mentee designation — rights-based framework established",
    source: "HURIA Human Rights Lab public records, 2019",
    status: "verified" as const,
  },
  {
    figure: "2023",
    label: "Women's Empowerment program publicly featured; Pad Bank launched",
    source: "Alpha & Omega CBO Kenya program records, 2023",
    status: "documented" as const,
  },
  {
    figure: "2025",
    label: "Community Hub role formalized via DARAJA Project MoU with DAYOK",
    source: "DARAJA Project MoU, 2025",
    status: "documented" as const,
  },
];
```

#### stories array (Voices section — 3 placeholder voices)
```ts
const stories = [
  {
    initials: "GP",
    name: "Girl Child Program Participant",
    role: "Bangladesh Slums · Mikindani Ward",
    quote:
      "[Placeholder — a verified testimonial will be added when available]",
  },
  {
    initials: "WE",
    name: "Women's Empowerment Participant",
    role: "Mikindani Ward · 2023",
    quote:
      "[Placeholder — a verified testimonial will be added when available]",
  },
  {
    initials: "YV",
    name: "Youth Voice Participant",
    role: "Jomvu Sub-County · 2024",
    quote:
      "[Placeholder — a verified testimonial will be added when available]",
  },
];
```

#### CtaBand
```ts
title: "Support community empowerment in Mombasa"
body:  "Partners, funders, and volunteers make our work possible. We're always looking to grow our reach."
primary:   { to: "/contact", label: "Get involved" }
secondary: { to: "/about",   label: "Our story" }
```

---

### 4.5 `src/routes/board.tsx`

#### head()
```ts
{ title: "Board Members | Alpha & Omega CBO Kenya" },
{ name: "description", content: "Meet the leadership of Alpha & Omega CBO Kenya, founded by Victor Nando Odongo in Bangladesh Slums, Mombasa." },
{ property: "og:title", content: "Board Members | Alpha & Omega CBO Kenya" },
```

#### PageHero
```ts
eyebrow: "Leadership"
title:   "The team behind Alpha & Omega CBO Kenya"
body:    "Alpha & Omega CBO Kenya is led by its founder and community champions from Bangladesh Slums, Mikindani Ward."
stats: [
  ["2019",    "Founded"],
  ["Mombasa", "Bangladesh Slums, Jomvu"],
  ["5",       "Programs"],
]
```

#### leadership array (replace all 5 Big Ship members)
```ts
const leadership = [
  {
    initials: "VO",
    name: "Victor Nando Odongo",
    role: "Chairman / Founder",
    bio: "Victor Nando Odongo founded Alpha & Omega CBO Kenya in Bangladesh Slums, Mikindani Ward, Jomvu Sub-County. Under his leadership the organization was recognized by HURIA Human Rights Lab in 2019, spotlighted by SHOFCO in 2024, and became a Community Hub through the DARAJA Project in 2025. Victor was featured in an independent leadership profile in 2024.",
    tags: ["Community Leadership", "Human Rights", "Youth Empowerment"],
  },
  {
    initials: "TBA",
    name: "To be announced",
    role: "Board Member",
    bio: "Additional board and team member details will be published when confirmed.",
    tags: [],
  },
  {
    initials: "TBA",
    name: "To be announced",
    role: "Board Member",
    bio: "Additional board and team member details will be published when confirmed.",
    tags: [],
  },
];
```

#### CtaBand
```ts
title: "Partner with Alpha & Omega CBO Kenya"
body:  "We welcome partners, funders, and community collaborators committed to empowerment in Mombasa."
primary:   { to: "/contact", label: "Let's talk" }
secondary: { to: "/impact",  label: "See our impact" }
```

---

### 4.6 `src/routes/events.tsx`

#### head()
```ts
{ title: "Events | Alpha & Omega CBO Kenya" },
{ name: "description", content: "Upcoming events at Alpha & Omega CBO Kenya: mentorship sessions, women's workshops, youth dialogues, and community action days in Bangladesh Slums, Mombasa." },
{ property: "og:title", content: "Events | Alpha & Omega CBO Kenya" },
```

#### PageHero
```ts
eyebrow: "Community"
title:   "Alpha & Omega CBO Kenya events and workshops"
body:    "Join us for mentorship sessions, women's empowerment workshops, youth civic dialogues, human rights training, and community action days in Bangladesh Slums and Mikindani Ward."
stats: [
  ["Regular",  "Community activities"],
  ["Free",     "Entry to every session"],
  ["All",      "Community members welcome"],
]
```

#### events array (5 events replacing 4 Big Ship events)
```ts
const events = [
  {
    date: "10 Jan",
    title: "Girl Child Mentorship Session",
    tag: "Girl Child",
    time: "9:00 AM – 12:00 PM",
    place: "Bangladesh Slums, Mikindani Ward",
    body: "Monthly mentorship circle for school-age girls. Sessions cover confidence building, education support, and Pad Bank access.",
  },
  {
    date: "24 Jan",
    title: "Women's Empowerment Workshop",
    tag: "Women's Empowerment",
    time: "10:00 AM – 2:00 PM",
    place: "Mikindani Ward Community Centre",
    body: "Structured workshop on livelihood skills, income generation, and community networking for women in Mikindani Ward.",
  },
  {
    date: "07 Feb",
    title: "Youth Civic Dialogue",
    tag: "Youth Voice",
    time: "2:00 PM – 5:00 PM",
    place: "Jomvu Sub-County",
    body: "Open civic forum where young people engage with community leaders on local issues and civic rights in partnership with SHOFCO.",
  },
  {
    date: "21 Feb",
    title: "Human Rights Awareness Session",
    tag: "Human Rights",
    time: "9:00 AM – 12:00 PM",
    place: "Bangladesh Slums",
    body: "Community training on socio-economic rights, legal literacy, and community advocacy — part of our HURIA Human Rights Lab programme.",
  },
  {
    date: "08 Mar",
    title: "Climate & Community Action Day",
    tag: "Climate Action",
    time: "8:00 AM – 1:00 PM",
    place: "Mikindani Ward",
    body: "International Women's Day community action: climate risk mapping, green practices, and collective resilience planning as part of the DARAJA Community Hub.",
  },
];
```

#### CtaBand
```ts
eyebrow: "Partner"
title:   "Host an event or workshop"
body:    "Our community networks are available for rights education, mentorship sessions, and civic engagement workshops."
primary:   { to: "/contact", label: "Host with us" }
secondary: { to: "/programs", label: "See programs" }
```

---

### 4.7 `src/routes/contact.tsx`

#### head()
```ts
{ title: "Contact | Alpha & Omega CBO Kenya" },
{ name: "description", content: "Get in touch with Alpha & Omega CBO Kenya in Bangladesh Slums, Mikindani Ward, Mombasa. Partnerships, programs, and community engagement." },
{ property: "og:title", content: "Contact | Alpha & Omega CBO Kenya" },
```

#### PageHero
```ts
eyebrow: "Say Hello"
title:   "Connect with Alpha & Omega CBO Kenya"
body:    "Questions about our programs, partnership opportunities, or community participation? We'd love to hear from you."
stats: [
  ["Mon – Fri", "9:00 AM – 5:00 PM"],
  ["Mombasa",   "Bangladesh Slums, Jomvu"],
  ["< 48 hrs",  "Typical response time"],
]
```

#### Contact info cards
```ts
[
  { icon: MapPin, title: "Visit",  body: "Bangladesh Slums, Mikindani Ward, Jomvu Sub-County, Mombasa County, Kenya" },
  { icon: Phone,  title: "Call",   body: "+254 740 610 899" },
  { icon: Mail,   title: "Email",  body: "alphaandomegacbokenya001@gmail.com" },
]
```

---

### 4.8 `src/routes/programs.tsx`

#### head()
```ts
{ title: "Programs | Alpha & Omega CBO Kenya" },
{ name: "description", content: "Alpha & Omega CBO Kenya's five programs: Girl Child Mentorship, Women's Empowerment, Youth Voice, Human Rights, and Climate Action in Mombasa." },
{ property: "og:title", content: "Programs | Alpha & Omega CBO Kenya" },
```

#### PageHero
```ts
eyebrow: "What We Do"
title:   "Five programs for community empowerment in Mombasa"
body:    "Five integrated programs combining mentorship, rights awareness, civic participation, and community action for women, girls, and young people in Bangladesh Slums and Mikindani Ward."
stats: [
  ["5",    "Community programs"],
  ["Free", "Community participation"],
  ["2019", "Operating since"],
]
```

#### programs array
Same 5-card array as defined in §4.2, using `to` values as const.

#### support array (replace 4 Big Ship items)
```ts
const support = [
  ["Mentorship Networks",   "One-on-one and group mentorship for girls, women, and young people through all five programs."],
  ["Rights & Advocacy",     "Legal literacy training, rights documentation, and community advocacy in partnership with HURIA Human Rights Lab."],
  ["Civic Participation",   "Structured forums and youth dialogues engaging community members in local governance and civic processes."],
  ["Community Action",      "Collective resilience projects, climate risk mapping, and partnership activities as a DARAJA Project Community Hub."],
];
```

#### CtaBand
```ts
eyebrow: "Participate"
title:   "Join our community programs"
body:    "Whether through volunteering, partnering, or community participation, there's a way to support our work in Mombasa."
primary:   { to: "/contact", label: "Get involved" }
secondary: { to: "/events",  label: "Upcoming events" }
```

---

## New Program Sub-Page Design

Each new program file follows the exact pattern of the existing `programs.adopt-a-site.tsx`. All five files share the same structure: `createFileRoute` → `head()` → `component: () => <ProgramDetail ... />`.

### 5.1 `src/routes/programs.girl-child-mentorship.tsx`

```ts
Route path: "/programs/girl-child-mentorship"

head():
  title: "Girl Child Mentorship & Empowerment | Alpha & Omega CBO Kenya"
  description: "Mentoring girls in Bangladesh Slums, Mikindani Ward, to stay in school, build confidence, and access the Pad Bank menstrual hygiene program."
  og:title: "Girl Child Mentorship & Empowerment | Alpha & Omega CBO Kenya"
  og:image: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"

ProgramDetail props:
  eyebrow: "Msichana"
  title:   "Girl Child Mentorship & Empowerment"
  body:    "Mentoring girls in Bangladesh Slums to stay in school, build confidence, and access menstrual hygiene support through the Pad Bank."
  image:   IMG.tech
  altText: getProgramAltText('girl-child-mentorship', 'Bangladesh Slums')
  tracks: [
    ["Mentorship Circles",    "Group and one-on-one mentorship sessions for school-age girls covering confidence, goals, and challenges."],
    ["Pad Bank",              "Free menstrual hygiene product distribution to support girls' school attendance and dignity."],
    ["Life Skills Workshops", "Practical sessions on self-confidence, goal setting, and navigating barriers to education."],
    ["School Retention",      "Targeted support for girls at risk of dropping out, linking them with community resources and advocates."],
  ]
  details: [
    ["Duration",   "Ongoing program"],
    ["Location",   "Bangladesh Slums, Mikindani Ward"],
    ["Cost",       "Free community participation"],
    ["Format",     "In-person group sessions and one-on-one mentorship"],
  ]
```

---

### 5.2 `src/routes/programs.womens-empowerment.tsx`

```ts
Route path: "/programs/womens-empowerment"

head():
  title: "Women's Empowerment & Mentorship | Alpha & Omega CBO Kenya"
  description: "Structured mentorship and livelihood training for women in Mikindani Ward, Mombasa — building economic independence and community leadership."

ProgramDetail props:
  eyebrow: "Nguvu"
  title:   "Women's Empowerment & Mentorship"
  body:    "Structured mentorship, livelihood training, and community networking for women in Bangladesh Slums and Mikindani Ward."
  image:   IMG.arts
  altText: getProgramAltText('womens-empowerment', 'Mikindani Ward')
  tracks: [
    ["Mentorship Programme",   "Structured mentorship pairing women with peer mentors for guidance, skills sharing, and mutual support."],
    ["Livelihood Training",    "Income-generation skills, financial literacy, and entrepreneurship training for economic independence."],
    ["Leadership Development", "Capacity building for women to take active roles in community governance and decision-making."],
    ["Peer Support Circles",   "Safe spaces for women to share experiences, access resources, and build community networks."],
  ]
  details: [
    ["Duration",   "Year-round program"],
    ["Location",   "Bangladesh Slums, Mikindani Ward"],
    ["Cost",       "Free community participation"],
    ["Format",     "Group workshops and structured mentorship sessions"],
  ]
```

---

### 5.3 `src/routes/programs.youth-voice.tsx`

```ts
Route path: "/programs/youth-voice"

head():
  title: "Youth Voice & Civic Participation | Alpha & Omega CBO Kenya"
  description: "Engaging young people in Jomvu Sub-County in civic processes, community forums, and decision-making in partnership with SHOFCO."

ProgramDetail props:
  eyebrow: "Sauti"
  title:   "Youth Voice & Civic Participation"
  body:    "Equipping young people in Jomvu Sub-County to engage in civic processes and community decision-making, in partnership with Shining Hope for Communities."
  image:   IMG.business
  altText: getProgramAltText('youth-voice', 'Jomvu Sub-County')
  tracks: [
    ["Civic Education",         "Workshops on rights, governance, and civic responsibilities for young people in Jomvu Sub-County."],
    ["Community Forums",        "Structured dialogue sessions between youth and community leaders on local issues and priorities."],
    ["Youth-Led Projects",      "Support for young people to design and implement their own community improvement initiatives."],
    ["SHOFCO Partnership",      "Collaboration with Shining Hope for Communities to expand youth voice reach and resources."],
  ]
  details: [
    ["Duration",   "Ongoing program"],
    ["Location",   "Jomvu Sub-County, Mikindani Ward"],
    ["Cost",       "Free community participation"],
    ["Format",     "Forums, workshops, and community dialogue sessions"],
  ]
```

---

### 5.4 `src/routes/programs.human-rights.tsx`

```ts
Route path: "/programs/human-rights"

head():
  title: "Human Rights & Socio-economic Rights | Alpha & Omega CBO Kenya"
  description: "Rights awareness, legal literacy, and socio-economic advocacy for residents of Bangladesh Slums, in partnership with HURIA Human Rights Lab."

ProgramDetail props:
  eyebrow: "Haki"
  title:   "Human Rights & Socio-economic Rights"
  body:    "Training community members in Bangladesh Slums to understand, claim, and defend their socio-economic rights, in partnership with HURIA Human Rights Lab."
  image:   IMG.community
  altText: getProgramAltText('human-rights', 'Bangladesh Slums')
  tracks: [
    ["Rights Awareness",         "Community training on human rights frameworks, socio-economic rights, and legal literacy."],
    ["Documentation & Advocacy", "Supporting community members to document rights violations and advocate for solutions."],
    ["Community Paralegals",     "Training local rights defenders and paralegals to support their neighbours."],
    ["HURIA Partnership",        "Ongoing collaboration with HURIA Human Rights Lab — the organization that designated Alpha & Omega as a mentee in 2019."],
  ]
  details: [
    ["Duration",   "Ongoing program"],
    ["Location",   "Bangladesh Slums, Jomvu Sub-County"],
    ["Cost",       "Free community participation"],
    ["Format",     "Workshops, training sessions, and community clinics"],
  ]
```

---

### 5.5 `src/routes/programs.climate-action.tsx`

```ts
Route path: "/programs/climate-action"

head():
  title: "Climate & Community Action | Alpha & Omega CBO Kenya"
  description: "Mobilising residents of Mikindani Ward to respond to climate risks and build community resilience as a DARAJA Project Community Hub."

ProgramDetail props:
  eyebrow: "Mazingira"
  title:   "Climate & Community Action"
  body:    "Mobilising community members in Mikindani Ward to understand climate risks, organize collective responses, and build resilience as a DARAJA Project Community Hub."
  image:   IMG.hero
  altText: getProgramAltText('climate-action', 'Mikindani Ward')
  tracks: [
    ["Climate Risk Mapping",  "Community-led identification and documentation of local climate risks and vulnerabilities."],
    ["Collective Action",     "Organizing community members to plan and implement practical resilience measures together."],
    ["Green Practices",       "Promoting sustainable environmental practices and stewardship in Bangladesh Slums and Mikindani Ward."],
    ["DARAJA Community Hub",  "Alpha & Omega's formalized role as a Community Hub through the DARAJA Project MoU with DAYOK (2025)."],
  ]
  details: [
    ["Duration",   "Ongoing program"],
    ["Location",   "Mikindani Ward, Jomvu Sub-County"],
    ["Cost",       "Free community participation"],
    ["Format",     "Community action days, risk mapping workshops, collective planning sessions"],
  ]
```

---

## routeTree.gen.ts Update Strategy

`src/routeTree.gen.ts` is auto-generated by TanStack Router but must be **manually updated** for this rebrand because the router's code-gen tooling is not run as part of the content-only change workflow.

### Step-by-step changes

**1. Replace the three legacy import lines:**

```ts
// DELETE these three imports:
import { Route as ProgramsAdoptASiteRouteImport } from './routes/programs.adopt-a-site'
import { Route as ProgramsRecoYogurtForestRouteImport } from './routes/programs.reco-yogurt-forest'
import { Route as ProgramsUrbanResilienceRouteImport } from './routes/programs.urban-resilience'

// ADD these five imports:
import { Route as ProgramsGirlChildMentorshipRouteImport } from './routes/programs.girl-child-mentorship'
import { Route as ProgramsWomensEmpowermentRouteImport } from './routes/programs.womens-empowerment'
import { Route as ProgramsYouthVoiceRouteImport } from './routes/programs.youth-voice'
import { Route as ProgramsHumanRightsRouteImport } from './routes/programs.human-rights'
import { Route as ProgramsClimateActionRouteImport } from './routes/programs.climate-action'
```

**2. Replace the three `.update()` blocks for the old routes with five new blocks:**

```ts
const ProgramsGirlChildMentorshipRoute = ProgramsGirlChildMentorshipRouteImport.update({
  id: '/girl-child-mentorship',
  path: '/girl-child-mentorship',
  getParentRoute: () => ProgramsRoute,
} as any)

const ProgramsWomensEmpowermentRoute = ProgramsWomensEmpowermentRouteImport.update({
  id: '/womens-empowerment',
  path: '/womens-empowerment',
  getParentRoute: () => ProgramsRoute,
} as any)

const ProgramsYouthVoiceRoute = ProgramsYouthVoiceRouteImport.update({
  id: '/youth-voice',
  path: '/youth-voice',
  getParentRoute: () => ProgramsRoute,
} as any)

const ProgramsHumanRightsRoute = ProgramsHumanRightsRouteImport.update({
  id: '/human-rights',
  path: '/human-rights',
  getParentRoute: () => ProgramsRoute,
} as any)

const ProgramsClimateActionRoute = ProgramsClimateActionRouteImport.update({
  id: '/climate-action',
  path: '/climate-action',
  getParentRoute: () => ProgramsRoute,
} as any)
```

**3. Update all three interface blocks** (`FileRoutesByFullPath`, `FileRoutesByTo`, `FileRoutesById`) replacing three old paths with five new paths, e.g.:

```ts
'/programs/girl-child-mentorship': typeof ProgramsGirlChildMentorshipRoute
'/programs/womens-empowerment':    typeof ProgramsWomensEmpowermentRoute
'/programs/youth-voice':           typeof ProgramsYouthVoiceRoute
'/programs/human-rights':          typeof ProgramsHumanRightsRoute
'/programs/climate-action':        typeof ProgramsClimateActionRoute
```

**4. Update `FileRouteTypes`** — `fullPaths`, `to`, `id` union types to replace three old strings with five new strings.

**5. Update `ProgramsRouteChildren` interface and object literal** to replace three old routes with five new routes.

**6. Update `FileRoutesByPath`** `declare module` block to remove three old path entries and add five new ones.

**7. Update `ProgramsRouteWithChildren`** call:

```ts
const ProgramsRouteChildren: ProgramsRouteChildren = {
  ProgramsGirlChildMentorshipRoute,
  ProgramsWomensEmpowermentRoute,
  ProgramsYouthVoiceRoute,
  ProgramsHumanRightsRoute,
  ProgramsClimateActionRoute,
}
const ProgramsRouteWithChildren = ProgramsRoute._addFileChildren(ProgramsRouteChildren)
```

---

## Deletion Plan for Legacy Route Files

The following three files must be deleted as part of the implementation:

| File | Action | Reason |
|---|---|---|
| `src/routes/programs.adopt-a-site.tsx` | DELETE | Route replaced by `programs.girl-child-mentorship.tsx` et al. |
| `src/routes/programs.reco-yogurt-forest.tsx` | DELETE | Route replaced by new program routes |
| `src/routes/programs.urban-resilience.tsx` | DELETE | Route replaced by new program routes |

Deleting these files before updating `routeTree.gen.ts` will cause a TypeScript build error (import not found). The correct order is:

1. Create all five new program route files
2. Delete the three legacy route files
3. Update `routeTree.gen.ts`
4. Run `vite build` to verify

The existing `NotFoundComponent` in `__root.tsx` handles any visitor navigating to old URLs (`/programs/adopt-a-site`, etc.) — they receive a 404 page automatically, satisfying Requirement 4.7.

---

## Correctness Properties


*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

This feature is primarily a data and string replacement task. The correctness properties below focus on the **data layer** (pure functions and data arrays) where property-based testing is most cost-effective. UI rendering properties and build-time checks are handled as example-based unit tests and smoke tests respectively.

### Prework analysis and property reflection

After reviewing all acceptance criteria:

- Requirements 1.1, 2.6, 3.2, 4.1–4.4, 5.7, 7.1, 7.3, 8.2, 11.1, 12.1, 12.2 yield universal properties.
- Requirements 1.2, 1.3, 1.4, 2.1–2.5, 3.1, 3.3, 3.4, 5.1, 8.1, 4.6 are concrete example checks.
- Requirements 1.5, 4.5, 4.7, 14.6 are smoke/build checks.

**Redundancy review:**

- "Programs array has exactly 5 items" (4.1) and "for every program a route exists" (4.2) and "programLinks mirrors programs array" (4.3) and "ProgramDetail title matches program name" (4.4) can be combined into one comprehensive data-consistency property covering the programs data layer.
- "Impact page metrics don't reference Big Ship records" (7.1) and "unverified metrics have correct status" (7.3) test different aspects of the metrics array — keep separate as they verify orthogonal invariants.
- "Partners array has correct names" (11.1) is straightforward; combine the positive check (contains 4 A&O partners) and the negative check (does not contain old partners) into one property.
- "Story tags are from A&O program areas" (12.1) and "unverified quotes use placeholder" (12.2) are orthogonal — keep separate.
- Social link symmetry (3.2) and no-old-names (1.1) are orthogonal — keep separate.
- Board member exclusion (8.2) is clean on its own.

After reflection: 8 distinct properties remain, each providing unique validation value.

---

### Property 1: getContactInfo returns only Alpha & Omega CBO Kenya data

*For any* call to `getContactInfo()`, the returned `ContactInfo` object SHALL have its `address`, `phone`, and `email` fields set to the Alpha & Omega CBO Kenya values and SHALL NOT contain any string from the set `{"Big Ship", "bigshipcbo", "big-ship-org", "722 000000"}`.

**Validates: Requirements 2.1, 2.2, 2.3, 1.1**

---

### Property 2: Alt text functions produce no Big Ship references

*For any* call to `getAltText(imageType, context)` or `getProgramAltText(programId, location)` with any string inputs, the returned alt text string SHALL NOT contain the substrings `"Big Ship"`, `"Big Ship C.B.O."`, or `"bigshipcbo"`.

**Validates: Requirements 1.1, 1.4**

---

### Property 3: Programs array data integrity

*For any* programs array exported from `src/data/programs.ts`, ALL of the following SHALL hold:
- `programs.length === 5`
- Every program has a non-empty `id`, `name`, `shortDescription`, and `outcomes` array with at least one item
- The set of program ids is exactly `{"girl-child-mentorship", "womens-empowerment", "youth-voice", "human-rights", "climate-action"}`
- No program `name` or `shortDescription` contains `"Big Ship"`, `"Adopt A Site"`, `"RECO"`, `"Yogurt"`, or `"Urban Resilience"`

**Validates: Requirements 4.1, 4.2, 1.1**

---

### Property 4: programLinks navigation arrays mirror the programs data

*For any* programs array and any navigation links array (Header `programLinks`, Footer Community column links), every program `id` in the programs array SHALL have a corresponding entry with `to === "/programs/{id}"` in the navigation links arrays.

**Validates: Requirements 4.3, 4.4**

---

### Property 5: Impact timeline completeness

*For any* milestones array rendered on the home page or impact page, the set of year values in the array SHALL be a superset of `{"2019", "2023", "2024", "2025"}` — every verified Impact_Timeline year must be represented.

**Validates: Requirements 5.7, 7.4**

---

### Property 6: Impact metrics contain no Big Ship data and unverified metrics are properly labelled

*For any* metric object in the `stats` or `outcomes` arrays in `src/routes/impact.tsx` and `src/data/programs.ts` `impactMetrics`:
- The `label` and `source` strings SHALL NOT contain `"Tudor Creek"`, `"mangrove seedling"`, `"yoghurt cup"`, `"Big Ship"`, or `"Mikoko Watch"`
- For any metric where `verified === false` or `status` is not `"verified"`, the `source` field SHALL be a non-empty string and `status` SHALL be one of `"reported"` or `"estimated"` (not `"verified"` or `"documented"` for unverified items)

**Validates: Requirements 7.1, 7.3**

---

### Property 7: Partners array contains only Alpha & Omega CBO Kenya partners

*For any* partners array (in `src/data/programs.ts` and `src/components/site/Partners.tsx`), the set of partner names SHALL include all four verified Alpha & Omega CBO Kenya partners (`"HURIA Human Rights Lab"`, `"Shining Hope for Communities (SHOFCO)"`, `"Dream Achievers Youth Organization Kenya (DAYOK)"`, `"DARAJA Project"`) and SHALL NOT include any of the old Big Ship partners (`"Kenya Forest Service"`, `"University of Nairobi"`, `"WWF-Kenya"`, `"Innovate Resource Agency"`).

**Validates: Requirements 11.1, 11.2**

---

### Property 8: ImpactStories and Board story content integrity

*For any* story in the `ImpactStories` stories array: the `tag` field SHALL be one of the five Alpha & Omega program area tags (`"Human Rights"`, `"Girl Child Mentorship"`, `"Youth Voice"`, `"Women's Empowerment"`, `"Climate Action"`); and any story without a verified attributed quote SHALL have a `quote` field that begins with `"[Placeholder"`.

*For any* member in the Board `leadership` array: the member's `name` SHALL NOT be in `{"Bosco Juma", "Lucian Adhiambo", "Daniel Mulandi", "Jimmy Mwaita", "Agatha Nafula"}`.

**Validates: Requirements 12.1, 12.2, 8.2**

---

## Error Handling

### Build-time errors

- **TypeScript errors from deleted routes**: Prevented by the implementation order — create new routes first, then delete legacy routes, then update `routeTree.gen.ts`. This ensures no dangling imports exist at any build checkpoint.
- **Missing `as const` on route `to` props**: New program route paths must be added to the `to` type union in `routeTree.gen.ts`. If omitted, TypeScript will reject the `to` prop value in `<Link>` components. The manual `routeTree.gen.ts` update in §6 covers this.
- **`X` icon import conflict**: `lucide-react` exports an `X` icon that is also used as the mobile menu close button in `Header.tsx`. The social icon X (Twitter) can use `import { Twitter as X }` or a renamed import to avoid the collision — or use the same `X` icon (which visually serves both purposes). The implementation task must resolve this import alias.

### Runtime / data errors

- **Missing image assets**: New program images at `/programs/girl-child-mentorship-hero.jpg` etc. will 404 until assets are added. The `IMG.*` fallback images from `src/assets/` are used in the route files to prevent visible broken images. The design specifies `IMG.tech`, `IMG.arts`, etc. as fallbacks exactly as the old routes did.
- **sessionStorage blocked**: `IntroSplash` already handles `sessionStorage` access in a try/catch — the key rename to `"alpha-omega-intro-seen"` does not affect this defensive pattern.
- **ContactInfo `hasAny` flag**: All three fields are non-null in the new `getContactInfo()`, so `hasAny` is always `true`. No conditional rendering paths change.

### 404 handling

Legacy program URLs (`/programs/adopt-a-site`, `/programs/reco-yogurt-forest`, `/programs/urban-resilience`) resolve to the existing `NotFoundComponent` once their route files are deleted and `routeTree.gen.ts` is updated. No additional redirect logic is needed.

---

## Testing Strategy

### Unit tests (example-based)

Unit tests verify specific known values for the pure data functions and configuration arrays:

| Test | Assertion |
|---|---|
| `getContactInfo()` returns correct address | `address === "Bangladesh Slums, Mikindani Ward, Jomvu Sub-County, Mombasa County, Kenya"` |
| `getContactInfo()` returns correct phone | `phone === "+254 740 610 899"` |
| `getContactInfo()` returns correct email | `email === "alphaandomegacbokenya001@gmail.com"` |
| `getContactInfo()` `hasAny` is `true` | `hasAny === true` |
| `validateAltText()` on new org name alt text | returns `{ isValid: true }` |
| Leader at index 0 is Victor Nando Odongo | `leadership[0].name === "Victor Nando Odongo"` |
| Programs page head title | contains `"Alpha & Omega CBO Kenya"` |
| Facebook href | `=== "https://www.facebook.com/alphaandomegacbokenya"` |
| X href | `=== "https://x.com/and_cbo"` |

### Property-based tests

Property-based tests use a PBT library (recommended: **fast-check** for TypeScript) and run at minimum **100 iterations** per property. Each test is tagged with its design property.

Recommended library: `fast-check` (`npm install --save-dev fast-check`)

Test configuration:
- Minimum 100 runs per property (fast-check default is 100)
- Each test file tagged: `// Feature: alpha-omega-cbo-rebrand, Property N: <text>`

The eight correctness properties map to the following property-based tests:

```
Property 1 → test that getContactInfo() output never contains forbidden strings
             (fast-check: fc.assert with fc.property(fc.constant(getContactInfo()), ...))

Property 2 → test that getAltText(imageType, context) and getProgramAltText(programId, location)
             never return strings containing "Big Ship"
             (fast-check: fc.string() generators for imageType, context, programId, location)

Property 3 → test programs array structural invariants
             (fast-check: fc.constant(programs) — pure data, single iteration sufficient but run 100 for consistency)

Property 4 → test programLinks mirrors programs
             (fast-check: fc.constant([programs, programLinks]) — verify correspondence)

Property 5 → test milestones array contains required years
             (fast-check: fc.constant(milestones) — check superset)

Property 6 → test impact metrics contain no Big Ship references and unverified items are properly labelled
             (fast-check: fc.constantFrom(...stats, ...outcomes) — check each item)

Property 7 → test partners arrays contain exactly the right names
             (fast-check: fc.constant(partners) — verify set membership)

Property 8 → test story tags and quote placeholders; board member exclusion
             (fast-check: fc.constantFrom(...stories) and fc.constantFrom(...leadership))
```

Note: Properties 3–8 test static data arrays. `fast-check`'s `fc.constant` wraps them for consistent test infrastructure, and the property framework ensures the assertions run in the same harness as any future dynamic data.

### Smoke tests

Run after all changes are applied:

1. `vite build` exits with code 0 (no TypeScript errors)
2. Five new program route files exist at expected paths
3. Three legacy route files do not exist
4. `routeTree.gen.ts` contains the five new route path strings and none of the three legacy strings
5. Legacy paths (`/programs/adopt-a-site`, etc.) are absent from the route tree

### Integration tests

Not required for this content-only rebrand. All logic under test is pure data and string functions. The build smoke test serves as the integration verification.
