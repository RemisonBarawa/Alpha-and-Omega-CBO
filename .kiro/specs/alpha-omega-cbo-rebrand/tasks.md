# Implementation Plan: Alpha & Omega CBO Kenya Rebrand

## Overview

Content-only rebrand of the existing React / TanStack Router / Tailwind site from "Big Ship C.B.O." to "Alpha & Omega CBO Kenya". No component architecture, animations, CSS classes, or prop interfaces change. Tasks are ordered to prevent TypeScript build errors: new program route files are created before legacy ones are deleted, and `routeTree.gen.ts` is updated only after both steps are complete.

## Tasks

- [x] 1. Update data and library layer
  - [x] 1.1 Update `src/lib/contact.ts` — replace all contact values
    - Set `address` to `"Bangladesh Slums, Mikindani Ward, Jomvu Sub-County, Mombasa County, Kenya"`
    - Set `phone` to `"+254 740 610 899"`
    - Set `email` to `"alphaandomegacbokenya001@gmail.com"`
    - Update the JSDoc comment to reference Alpha & Omega CBO Kenya
    - _Requirements: 2.1, 2.2, 2.3_

  - [x] 1.2 Update `src/lib/altText.ts` — replace all Big Ship references
    - Replace every `"Big Ship C.B.O."` occurrence in template strings with `"Alpha & Omega CBO Kenya"`
    - Replace the `programDescriptions` record with the five new program IDs and descriptions from the design doc (§2.2)
    - Update the `default` template to reference `"Alpha & Omega CBO Kenya environmental conservation work"`
    - Leave `getImpactStoryAltText` and `validateAltText` function bodies unchanged
    - _Requirements: 1.1, 1.4, 1.5_

  - [x] 1.3 Replace `src/data/programs.ts` — full data replacement
    - Replace the `programs` array with the five Alpha & Omega CBO Kenya program records (§2.3 of design)
    - Replace the `partners` array with the four verified partner records (HURIA, SHOFCO, DAYOK, DARAJA Project)
    - Replace the `impactMetrics` array with the three provable-figures-only records (5 programs, 4 partners, 2019 founding)
    - Replace the `impactStories` array with the four A&O-aligned story records (HURIA 2019, Pad Bank 2023, SHOFCO 2024, Community Hub 2025)
    - Keep all TypeScript interface definitions (`Program`, `ImpactMetric`, `Partner`, `ImpactStory`) unchanged
    - _Requirements: 4.1, 4.2, 7.1, 11.1, 11.3, 12.1_

- [x] 2. Update shared component content
  - [x] 2.1 Update `src/components/site/Header.tsx` — logo, contact, social icons, program dropdown
    - Logo `alt`: `"Alpha & Omega CBO Kenya logo"`; display text line 1: `"Alpha & Omega"`; line 2 small-caps: `"CBO Kenya"`
    - Top-bar email: `alphaandomegacbokenya001@gmail.com` (href and display text)
    - Top-bar phone: `+254 740 610 899` (href `tel:+254740610899` and display text)
    - Top-bar social icons: Facebook → `https://www.facebook.com/alphaandomegacbokenya`; X/Twitter → `https://x.com/and_cbo`; Instagram, LinkedIn, YouTube → `href="#"` with `aria-label` updated to `"Alpha & Omega CBO Kenya on [Platform]"`
    - Resolve `X` icon import conflict: the `X` icon is already imported from lucide-react as the mobile close button; use `Twitter` from lucide-react for the social icon slot (import as `{ Twitter }`) or a named alias so the mobile close `X` is unaffected
    - Replace `programLinks` array with the six entries from design §3.1 (All Programs + five new slugs)
    - _Requirements: 1.2, 2.4, 3.1, 3.3, 3.4, 4.3_

  - [x] 2.2 Update `src/components/site/Footer.tsx` — logo, description, social icons, program links, copyright
    - Logo `alt`: `"Alpha & Omega CBO Kenya logo"`; span text: `"Alpha & Omega CBO Kenya"`
    - Org description paragraph: use the text from design §3.2
    - Social icons: same Facebook + X hrefs as Header; Instagram, LinkedIn → `href="#"` with updated aria-labels; remove or set YouTube to `href="#"` with updated aria-label
    - Replace the Community column `links` array with the six entries from design §3.2 (Events + five new program slugs)
    - Copyright line: `© {year} Alpha & Omega CBO Kenya. All rights reserved.`
    - Footer tagline: `Empower | Educate | Transforming Lives.`
    - `ContactSection` renders via `getContactInfo()` — no hardcoded values; verify the component still compiles with the updated `contact.ts`
    - _Requirements: 1.2, 1.3, 2.6, 3.2, 4.3_

  - [x] 2.3 Update `src/components/site/IntroSplash.tsx` — session key, heading, description
    - Session key: `"alpha-omega-intro-seen"` (was `"bigship-intro-seen"`)
    - `<h1>` inner span text: `Alpha & Omega CBO Kenya`
    - Description paragraph: use the text from design §3.3
    - _Requirements: 1.2_

  - [x] 2.4 Update `src/components/site/Partners.tsx` — partners array and section copy
    - Replace `partners` array with the four verified partner names from design §3.4
    - Section heading: `"Working together for community empowerment"`
    - Section description: use the text from design §3.4
    - _Requirements: 11.1, 11.2_

  - [x] 2.5 Update `src/components/site/ImpactStories.tsx` — section copy and all four story cards
    - Replace `stories` array with the four A&O-aligned story objects from design §3.5
    - Section `eyebrow`: `"Real Communities. Real Change."`
    - `<h2>`: `"Stories of community impact"`
    - Description paragraph: use the text from design §3.5
    - Bottom link text: `"Explore all impact stories"`
    - _Requirements: 12.1, 12.2, 12.3_

- [x] 3. Update `src/routes/__root.tsx` — default meta tags
  - Replace all `head()` meta values with Alpha & Omega CBO Kenya equivalents from design §4.1
  - `og:url`: `https://alphaandomegacbokenya.netlify.app`
  - `author`: `"Alpha & Omega CBO Kenya"`
  - `og:image` / `twitter:image`: `https://alphaandomegacbokenya.netlify.app/big-ship-logo.png`
  - Leave all structural code (`RootShell`, `RootComponent`, `NotFoundComponent`, `ErrorComponent`, `<Outlet />`, etc.) completely unchanged
  - _Requirements: 13.1, 13.4, 13.5_

- [x] 4. Update home page — `src/routes/index.tsx`
  - [x] 4.1 Update `head()` meta tags
    - `title`: `"Home | Alpha & Omega CBO Kenya"`
    - All og/twitter values: use equivalents from design §4.2
    - _Requirements: 13.1, 13.2_

  - [x] 4.2 Update hero section copy
    - Badge text: `"Youth-Led · Community-Rooted"`
    - `<h1>`: `"Empowering young people. Educating communities."` + `<span className="text-shine">Transforming lives.</span>`
    - Hero sub-paragraph: use the text from design §4.2
    - CTA primary button: `"Partner with us"` → `/contact`; secondary: `"Support a program"` → `/programs`
    - `LogoVideoCard` footer text: `Est. 2019 · Bangladesh Slums, Mombasa / Alpha & Omega CBO Kenya`
    - Hero `<img>` alt: `"Community members at Alpha & Omega CBO Kenya in Bangladesh Slums, Mombasa"`
    - _Requirements: 5.1, 5.2, 5.3_

  - [x] 4.3 Update Mission / Vision cards
    - Mission: `"To empower women, girls, and young people in Bangladesh Slums through mentorship, rights awareness, civic participation, and community action."`
    - Vision: `"Empowered youth, resilient communities."`
    - _Requirements: 5.5, 5.6_

  - [x] 4.4 Update marquee array
    - Replace with the six items from design §4.2 (`"Alpha & Omega CBO Kenya"`, `"Bangladesh Slums · Mombasa"`, etc.)
    - _Requirements: 5.4_

  - [x] 4.5 Update milestones array (four verified entries, 2019–2025)
    - Replace existing five Big Ship milestones with the four A&O milestones from design §4.2
    - Update milestone grid class from `md:grid-cols-5` to `md:grid-cols-2 lg:grid-cols-4`
    - Section eyebrow: update to reflect four milestones, not five
    - _Requirements: 5.7_

  - [x] 4.6 Update approach steps array (Engage / Mentor / Mobilize / Sustain)
    - Replace four Big Ship steps with the four A&O steps from design §4.2 (icons: `Compass`, `Sparkles`, `HeartHandshake`, `Rocket` — already imported)
    - Replace `blockquote` with the clearly labelled placeholder from design §4.2
    - Replace "Why it works" bullets with the three A&O-aligned bullets from design §4.2
    - _Requirements: 5.8_

  - [x] 4.7 Update programs preview array (five A&O programs)
    - Replace three Big Ship program cards with the five A&O program cards from design §4.2
    - Update each card's `to` path to the new program slugs (e.g. `/programs/girl-child-mentorship`)
    - Update `getProgramAltText` calls to use the new program IDs
    - Update programs section description: use text from design §4.2
    - _Requirements: 5.9, 4.2_

  - [x] 4.8 Update "By The Numbers" impact metrics (three provable figures)
    - Replace mangrove/community/sites metrics with: 5 programs (verified), 4 partners (documented), 2019 founded (verified)
    - All three use `suffix: ""`
    - _Requirements: 5.9, 7.2_

  - [x] 4.9 Update bottom CTA band
    - `<h2>`: `"Ready to join the Alpha & Omega CBO Kenya community?"`
    - `<p>`: `"Partner with us, support a program, or get involved in Bangladesh Slums, Mombasa."`
    - Buttons: `"Partner with us"` → `/contact`; `"Upcoming events"` → `/events`
    - _Requirements: 5.10_

- [x] 5. Update About page — `src/routes/about.tsx`
  - Update `head()` meta tags (title: `"About Us | Alpha & Omega CBO Kenya"`, all og/twitter from design §4.3)
  - `PageHero`: eyebrow `"Our Story"`, title and body from design §4.3, stats: `[["2019","Year founded"],["5","Active programs"],["Mombasa","Bangladesh Slums, Jomvu"]]`
  - Community section `<img>` alt: use the text from design §4.3
  - "Why we exist" `<h2>`, `<p>` paragraphs: use the text from design §4.3
  - Replace three stat counters: `{ to: 5, label: "Active programs" }`, `{ to: 4, label: "Named partner organizations" }`, `{ to: 2019, label: "Year founded" }`
  - Replace `values` array with the four A&O values from design §4.3 (Youth-Led, Gender Responsive, Rights-Based, Community-Rooted)
  - Mission card: use mission text from design §4.3
  - Vision card: `"Empowered youth, resilient communities."`
  - `CtaBand`: title `"Partner with Alpha & Omega CBO Kenya"`, body and buttons from design §4.3
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_

- [x] 6. Update Impact page — `src/routes/impact.tsx`
  - Update `head()` meta tags from design §4.4
  - `PageHero`: eyebrow `"Our Impact"`, title, body, and stats from design §4.4
  - Replace `stats` array: four entries (5 programs, 4 partners, 2019 founded, 1 MoU) — all free of Big Ship references
  - Replace `outcomes` array: three milestone-year entries (2019, 2023, 2025)
  - Replace `stories` (Voices section) array: three placeholder voice cards from design §4.4
  - Update legend/provenance note paragraph to reference A&O CBO Kenya (not Big Ship C.B.O.)
  - `CtaBand`: title `"Support community empowerment in Mombasa"`, body and buttons from design §4.4
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [x] 7. Update Board page — `src/routes/board.tsx`
  - Update `head()` meta tags from design §4.5
  - `PageHero`: eyebrow `"Leadership"`, title, body, stats `[["2019","Founded"],["Mombasa","Bangladesh Slums, Jomvu"],["5","Programs"]]`
  - Replace `leadership` array: Victor Nando Odongo (Chairman/Founder) + two "To be announced" placeholder cards — remove all five Big Ship members
  - `CtaBand`: title `"Partner with Alpha & Omega CBO Kenya"`, body and buttons from design §4.5
  - _Requirements: 8.1, 8.2, 8.3, 8.4_

- [x] 8. Update Events page — `src/routes/events.tsx`
  - Update `head()` meta tags from design §4.6
  - `PageHero`: eyebrow `"Community"`, title `"Alpha & Omega CBO Kenya events and workshops"`, body and stats from design §4.6
  - Replace `events` array: five A&O events (Girl Child session, Women's workshop, Youth Civic Dialogue, Human Rights session, Climate Action Day) — remove four Big Ship events
  - `CtaBand`: update eyebrow, body to reference `"rights education, mentorship sessions, and civic engagement workshops"` from design §4.6
  - _Requirements: 9.1, 9.2, 9.3_

- [x] 9. Update Contact page — `src/routes/contact.tsx`
  - Update `head()` meta tags from design §4.7
  - `PageHero`: title `"Connect with Alpha & Omega CBO Kenya"`, body and stats from design §4.7
  - Contact info cards: Visit → `"Bangladesh Slums, Mikindani Ward, Jomvu Sub-County, Mombasa County, Kenya"`; Call → `"+254 740 610 899"`; Email → `"alphaandomegacbokenya001@gmail.com"`
  - Opening hours block: retain `"Monday – Friday, 9:00 AM to 5:00 PM"` text; update the supplementary sentence to remove mangrove/restoration references
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

- [x] 10. Update Programs listing page — `src/routes/programs.tsx`
  - Update `head()` meta tags from design §4.8
  - `PageHero`: eyebrow `"What We Do"`, title, body, stats from design §4.8
  - Replace `programs` array with the five A&O cards (same five objects as home page §4.2, with `to` as const paths)
  - Replace `support` array with the four A&O support items from design §4.8 (Mentorship Networks, Rights & Advocacy, Civic Participation, Community Action)
  - `CtaBand`: eyebrow `"Participate"`, title `"Join our community programs"`, body and buttons from design §4.8
  - _Requirements: 4.2, 4.3, 5.9_

- [x] 11. Create five new program sub-page route files
  - [x] 11.1 Create `src/routes/programs.girl-child-mentorship.tsx`
    - Use `createFileRoute("/programs/girl-child-mentorship")` with `head()` and `ProgramDetail` props exactly as specified in design §5.1
    - `eyebrow`: `"Msichana"`; `altText`: `getProgramAltText('girl-child-mentorship', 'Bangladesh Slums')`
    - `image`: `IMG.tech`
    - _Requirements: 4.1, 4.4, 4.5, 13.2_

  - [x] 11.2 Create `src/routes/programs.womens-empowerment.tsx`
    - Use `createFileRoute("/programs/womens-empowerment")` with `head()` and `ProgramDetail` props from design §5.2
    - `eyebrow`: `"Nguvu"`; `altText`: `getProgramAltText('womens-empowerment', 'Mikindani Ward')`
    - `image`: `IMG.arts`
    - _Requirements: 4.1, 4.4, 4.5, 13.2_

  - [x] 11.3 Create `src/routes/programs.youth-voice.tsx`
    - Use `createFileRoute("/programs/youth-voice")` with `head()` and `ProgramDetail` props from design §5.3
    - `eyebrow`: `"Sauti"`; `altText`: `getProgramAltText('youth-voice', 'Jomvu Sub-County')`
    - `image`: `IMG.business`
    - _Requirements: 4.1, 4.4, 4.5, 13.2_

  - [x] 11.4 Create `src/routes/programs.human-rights.tsx`
    - Use `createFileRoute("/programs/human-rights")` with `head()` and `ProgramDetail` props from design §5.4
    - `eyebrow`: `"Haki"`; `altText`: `getProgramAltText('human-rights', 'Bangladesh Slums')`
    - `image`: `IMG.community`
    - _Requirements: 4.1, 4.4, 4.5, 13.2_

  - [x] 11.5 Create `src/routes/programs.climate-action.tsx`
    - Use `createFileRoute("/programs/climate-action")` with `head()` and `ProgramDetail` props from design §5.5
    - `eyebrow`: `"Mazingira"`; `altText`: `getProgramAltText('climate-action', 'Mikindani Ward')`
    - `image`: `IMG.hero`
    - _Requirements: 4.1, 4.4, 4.5, 13.2_

- [x] 12. Delete three legacy program route files
  - Delete `src/routes/programs.adopt-a-site.tsx`
  - Delete `src/routes/programs.reco-yogurt-forest.tsx`
  - Delete `src/routes/programs.urban-resilience.tsx`
  - These files MUST be deleted only after all five new route files from task 11 exist; deleting before task 11 causes TypeScript build errors
  - _Requirements: 4.5, 4.7_

- [x] 13. Update `src/routeTree.gen.ts` — replace legacy routes with five new routes
  - Replace the three legacy import lines (`ProgramsAdoptASiteRouteImport`, `ProgramsRecoYogurtForestRouteImport`, `ProgramsUrbanResilienceRouteImport`) with five new import lines for the new program files
  - Replace the three `.update()` blocks with five new `.update()` blocks (paths: `/girl-child-mentorship`, `/womens-empowerment`, `/youth-voice`, `/human-rights`, `/climate-action`)
  - Update `FileRoutesByFullPath`, `FileRoutesByTo`, `FileRoutesById` interface blocks: remove three old path entries, add five new ones
  - Update `FileRouteTypes` `fullPaths`, `to`, and `id` union type strings
  - Update `ProgramsRouteChildren` interface and object literal
  - Update `declare module '@tanstack/react-router'` `FileRoutesByPath` block
  - Update `ProgramsRouteWithChildren` assignment
  - This task MUST be done after tasks 11 and 12; updating the tree before new files exist causes import errors
  - _Requirements: 4.5, 4.6, 14.4_

- [x] 14. Checkpoint — verify TypeScript build passes
  - Run `vite build` and confirm it exits with code 0
  - Confirm no TypeScript errors related to route paths, `to` prop types, or missing imports
  - Confirm five new program route files exist and three legacy files are absent
  - Confirm `routeTree.gen.ts` contains the five new route path strings and none of the three legacy strings
  - Ensure all tests pass, ask the user if questions arise.

- [x] 15. Write property-based tests using fast-check
  - Install `fast-check` as a dev dependency if not already present: `npm install --save-dev fast-check`
  - Create the test file at `src/__tests__/rebrand.property.test.ts`

  - [x] 15.1 Write property test for Property 1 — getContactInfo returns only Alpha & Omega data
    - Import `getContactInfo` from `@/lib/contact`
    - Use `fc.assert(fc.property(fc.constant(getContactInfo()), (info) => { ... }))` to assert `info.address`, `info.phone`, and `info.email` do not contain `"Big Ship"`, `"bigshipcbo"`, `"big-ship-org"`, or `"722 000000"`
    - Also assert the three fields equal the exact Alpha & Omega CBO Kenya values
    - **Property 1: getContactInfo returns only Alpha & Omega CBO Kenya data**
    - **Validates: Requirements 2.1, 2.2, 2.3, 1.1**

  - [x] 15.2 Write property test for Property 2 — alt text functions produce no Big Ship references
    - Import `getAltText` and `getProgramAltText` from `@/lib/altText`
    - Use `fc.string()` generators for `imageType` and `context` in `fc.property`; assert returned string does not contain `"Big Ship"`, `"Big Ship C.B.O."`, or `"bigshipcbo"`
    - Repeat for `getProgramAltText` with `fc.string()` generators for `programId` and `location`
    - **Property 2: Alt text functions produce no Big Ship references**
    - **Validates: Requirements 1.1, 1.4**

  - [x] 15.3 Write property test for Property 3 — programs array data integrity
    - Import `programs` from `@/data/programs`
    - Use `fc.assert(fc.property(fc.constant(programs), (progs) => { ... }))` to assert: `progs.length === 5`; every program has non-empty `id`, `name`, `shortDescription`, and at least one `outcomes` item; the set of ids equals `{"girl-child-mentorship","womens-empowerment","youth-voice","human-rights","climate-action"}`; no program `name` or `shortDescription` contains `"Big Ship"`, `"Adopt A Site"`, `"RECO"`, `"Yogurt"`, or `"Urban Resilience"`
    - **Property 3: Programs array data integrity**
    - **Validates: Requirements 4.1, 4.2, 1.1**

  - [x] 15.4 Write property test for Property 4 — programLinks mirrors programs array
    - Import `programs` from `@/data/programs`; define or import the `programLinks` arrays from `Header.tsx` and Footer's Community column (extract them into a shared constant if needed, or inline the expected values)
    - Use `fc.assert(fc.property(fc.constant(programs), (progs) => { ... }))` to assert every program `id` has a corresponding `to: "/programs/{id}"` entry in each navigation array
    - **Property 4: programLinks navigation arrays mirror the programs data**
    - **Validates: Requirements 4.3, 4.4**

  - [x] 15.5 Write property test for Property 5 — impact timeline completeness
    - Import or inline the `milestones` array from `src/routes/index.tsx`
    - Use `fc.assert(fc.property(fc.constant(milestones), (ms) => { ... }))` to assert the set of `year` values is a superset of `{"2019","2023","2024","2025"}`
    - **Property 5: Impact timeline completeness**
    - **Validates: Requirements 5.7, 7.4**

  - [x] 15.6 Write property test for Property 6 — impact metrics contain no Big Ship data
    - Import the `stats` and `outcomes` arrays from `src/routes/impact.tsx` and `impactMetrics` from `src/data/programs`
    - Use `fc.assert(fc.property(fc.constantFrom(...stats, ...outcomes, ...impactMetrics), (metric) => { ... }))` to assert `label` and `source` strings do not contain `"Tudor Creek"`, `"mangrove seedling"`, `"yoghurt cup"`, `"Big Ship"`, or `"Mikoko Watch"`; and that unverified metrics (`verified === false` or `status !== "verified"`) have a non-empty `source` and a `status` of `"reported"` or `"estimated"`
    - **Property 6: Impact metrics contain no Big Ship data and unverified metrics are properly labelled**
    - **Validates: Requirements 7.1, 7.3**

  - [x] 15.7 Write property test for Property 7 — partners array contains only Alpha & Omega partners
    - Import `partners` from `@/data/programs`; define the `partners` array from `Partners.tsx` inline (as a constant)
    - Use `fc.assert(fc.property(fc.constant(partners), (ps) => { ... }))` to assert the name set includes all four A&O partners and excludes all four Big Ship partners
    - Repeat the same assertion for the `Partners.tsx` array
    - **Property 7: Partners array contains only Alpha & Omega CBO Kenya partners**
    - **Validates: Requirements 11.1, 11.2**

  - [x] 15.8 Write property test for Property 8 — ImpactStories and Board content integrity
    - Import or inline the `stories` array from `ImpactStories.tsx` and the `leadership` array from `board.tsx`
    - Use `fc.assert(fc.property(fc.constantFrom(...stories), (s) => { ... }))` to assert `tag` is one of the five A&O program area tags; and that stories without verified quotes have `quote` starting with `"[Placeholder"`
    - Use `fc.assert(fc.property(fc.constantFrom(...leadership), (m) => { ... }))` to assert no `name` is in `{"Bosco Juma","Lucian Adhiambo","Daniel Mulandi","Jimmy Mwaita","Agatha Nafula"}`
    - **Property 8: ImpactStories and Board story content integrity**
    - **Validates: Requirements 12.1, 12.2, 8.2**

- [x] 16. Final checkpoint — full build verification
  - Run `vite build` one final time to confirm a clean TypeScript build with exit code 0
  - Confirm no references to `"big-ship-org.netlify.app"` remain in any route or component file
  - Confirm no references to the old session key `"bigship-intro-seen"` remain
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Tasks 11 (create) → 12 (delete) → 13 (routeTree) must execute in strict order to avoid TypeScript import errors
- Property tests use `fast-check`; each property maps to the numbered property in the design document's "Correctness Properties" section
- New program route files use `IMG.*` fallback images — program-specific hero images at `/programs/*.jpg` will 404 until assets are added; this is expected and tracked separately in `public/programs/README.md`
- The `X` icon import conflict in `Header.tsx` (mobile close button vs. X/Twitter social icon) must be resolved by importing `Twitter` from lucide-react for the social icon slot
