# Requirements Document

## Introduction

The existing website (React / TanStack Router / Tailwind) was built for a previous organization called "Big Ship C.B.O." and must be rebranded to **Alpha & Omega CBO Kenya** — a youth-led community-based organization operating in Bangladesh Slums, Mikindani Ward, Jomvu Sub-County, Mombasa County, Kenya.

The rebrand is strictly content-and-brand-identity work. All animations, component architecture, page routes, layout structure, and CSS utility classes remain untouched. Only text copy, organization-specific data, contact details, social links, program data, impact timeline entries, logo/image references, and page metadata are updated.

The site retains its existing pages: Home, About, Programs (with five sub-pages), Impact, Events, Contact, and Board.

---

## Glossary

- **Site**: The React/TanStack Router web application being rebranded.
- **Brand_Content**: All visible text, data, and metadata that identifies the organization by name, program, or contact detail.
- **Component_Architecture**: The TSX component tree, animation utilities, layout structure, and Tailwind class usage — these MUST NOT change.
- **Program_Data**: The five Alpha & Omega CBO Kenya programs and their associated descriptions, tracks, and detail tables.
- **Impact_Timeline**: The documented milestone events drawn from the organization's verified history (2019–2025).
- **Contact_Info**: Phone number, email address, physical location, and social media handles for Alpha & Omega CBO Kenya.
- **Logo_Asset**: The organization logo file(s) referenced in the Header, Footer, and IntroSplash components.
- **Meta_Tag**: HTML `<title>`, `<meta name="description">`, Open Graph, and Twitter Card tags generated per route.
- **IntroSplash**: The session-once overlay component at `src/components/site/IntroSplash.tsx`.
- **AltText_Utility**: The `src/lib/altText.ts` utility that generates WCAG-compliant image alt text.
- **Partners_Component**: The `src/components/site/Partners.tsx` scrolling marquee that lists partner organization names.
- **ImpactStories_Component**: The `src/components/site/ImpactStories.tsx` alternating story cards on the home page.
- **ImpactMetric_Component**: The `src/components/site/ImpactMetric.tsx` animated counter component used on the Impact and Home pages.
- **ProgramDetail_Component**: The `src/components/site/ProgramDetail.tsx` reusable template used for each program sub-page.

---

## Requirements

### Requirement 1: Organization Identity Replacement

**User Story:** As a site visitor, I want to see Alpha & Omega CBO Kenya's name, tagline, and identity everywhere the old organization name appeared, so that the site accurately represents the correct organization.

#### Acceptance Criteria

1. THE Site SHALL replace every instance of "Big Ship C.B.O.", "Big Ship CBO", "bigshipcbo.org", and "big-ship-org.netlify.app" with the correct Alpha & Omega CBO Kenya equivalents across all route files, component files, and library files.
2. THE Site SHALL display the organization name "Alpha & Omega CBO Kenya" in the Header logo text, Footer logo text, IntroSplash heading, and all page `<title>` meta tags.
3. THE Site SHALL display the tagline "Empower | Educate | Transforming Lives" in the IntroSplash component and Footer description text.
4. THE Site SHALL set the `alt` attribute of every logo `<img>` element to "Alpha & Omega CBO Kenya logo".
5. WHEN a Logo_Asset file for Alpha & Omega CBO Kenya is not yet available, THE Site SHALL retain the existing logo file path references so the build does not break, and the AltText_Utility SHALL be updated to reflect the new organization name.

---

### Requirement 2: Contact Information Update

**User Story:** As a site visitor, I want accurate contact details for Alpha & Omega CBO Kenya, so that I can reach the organization.

#### Acceptance Criteria

1. THE `getContactInfo` function in `src/lib/contact.ts` SHALL return the address "Bangladesh Slums, Mikindani Ward, Jomvu Sub-County, Mombasa County, Kenya".
2. THE `getContactInfo` function SHALL return the phone number "+254 740 610 899".
3. THE `getContactInfo` function SHALL return the email address "alphaandomegacbokenya001@gmail.com".
4. THE Header top-bar SHALL display "+254 740 610 899" as the phone link and "alphaandomegacbokenya001@gmail.com" as the email link.
5. THE Contact page SHALL display the address "Bangladesh Slums, Mikindani Ward, Jomvu Sub-County, Mombasa County, Kenya", phone "+254 740 610 899", and email "alphaandomegacbokenya001@gmail.com" in its contact info cards.
6. THE Footer ContactSection SHALL render the phone, email, and address fields sourced from `getContactInfo` without any hardcoded placeholder values.

---

### Requirement 3: Social Media Links Update

**User Story:** As a site visitor, I want to find Alpha & Omega CBO Kenya on social media, so that I can follow and engage with the organization.

#### Acceptance Criteria

1. THE Header top-bar social icon links SHALL include a Facebook link pointing to the Alpha & Omega CBO Kenya Facebook page and an X (Twitter) link pointing to the @and_cbo handle; Instagram, LinkedIn, and YouTube icon slots SHALL be removed or set to `href="#"` with updated `aria-label` values reflecting the new organization name.
2. THE Footer social icon links SHALL mirror the Header: Facebook and X links SHALL be present with correct `href` values; any platform without a confirmed Alpha & Omega CBO Kenya presence SHALL have `href="#"` and an `aria-label` of "Alpha & Omega CBO Kenya on [Platform]".
3. WHEN the Facebook `href` is rendered, THE Site SHALL use the URL for the "Alpha and Omega CBO Kenya" Facebook page.
4. WHEN the X (Twitter) `href` is rendered, THE Site SHALL use the URL "https://x.com/and_cbo".

---

### Requirement 4: Programs Data Replacement — Five Programs

**User Story:** As a site visitor, I want to browse Alpha & Omega CBO Kenya's five programs, so that I can understand what the organization does.

#### Acceptance Criteria

1. THE `src/data/programs.ts` file SHALL define exactly five program records corresponding to: Girl Child Mentorship & Empowerment, Women's Empowerment & Mentorship, Youth Voice & Civic Participation, Human Rights & Socio-economic Rights, and Climate & Community Action.
2. THE Programs listing page (`src/routes/programs.tsx`) SHALL render cards for all five Alpha & Omega CBO Kenya programs and SHALL NOT render cards for the former Big Ship C.B.O. programs (Adopt A Site, RECO/Yogurt Forest, Urban Resilience).
3. THE Header and Footer program sub-menus SHALL list the five new program names with their corresponding route paths.
4. WHEN a visitor navigates to a program sub-page, THE ProgramDetail_Component SHALL display the correct title, body, tracks, and details for the selected Alpha & Omega CBO Kenya program.
5. THE program route files SHALL be renamed or replaced to use kebab-case slugs that reflect the five new programs (e.g. `/programs/girl-child-mentorship`, `/programs/womens-empowerment`, `/programs/youth-voice`, `/programs/human-rights`, `/programs/climate-action`); the three legacy route files (`programs.adopt-a-site.tsx`, `programs.reco-yogurt-forest.tsx`, `programs.urban-resilience.tsx`) SHALL be removed.
6. THE `routeTree.gen.ts` file SHALL be regenerated (or updated manually) to include the five new program routes after the route files are updated.
7. IF a visitor navigates to a legacy Big Ship C.B.O. program URL, THEN THE Site SHALL serve a 404 page via the existing `NotFoundComponent`.

---

### Requirement 5: Home Page Content Update

**User Story:** As a site visitor landing on the home page, I want to see Alpha & Omega CBO Kenya's messaging, so that I immediately understand the organization's identity and mission.

#### Acceptance Criteria

1. THE home page hero heading SHALL read "Empowering young people. Educating communities. Transforming lives."
2. THE home page hero sub-heading SHALL read "Alpha & Omega CBO Kenya is a youth-led community organization rooted in Bangladesh Slums, Mikindani Ward, Mombasa County. We support women, girls, and young people through mentorship, rights awareness, civic participation, and community action."
3. THE home page hero CTA buttons SHALL be labelled "Partner with us", "Support a program", and "Get involved", linking to `/contact`, `/programs`, and `/contact` respectively.
4. THE marquee ticker SHALL display items relevant to Alpha & Omega CBO Kenya, including the organization name, location, tagline, and program areas.
5. THE Mission card SHALL describe Alpha & Omega CBO Kenya's mission in mentorship, rights awareness, civic participation, and community action.
6. THE Vision card SHALL display "Empowered youth, resilient communities."
7. THE home page milestones section SHALL display the five verified Impact_Timeline entries: 2019 (HURIA Human Rights Lab mentee), 2023 (Women's Empowerment featured; Pad Bank launched), 2024 (Shining Hope for Communities partner spotlight; Victor Nando Odongo leadership profile), and 2025 (DARAJA Project MoU; Community Hub role).
8. THE home page "How We Work" / approach section SHALL replace the four Big Ship C.B.O. steps with four steps that reflect Alpha & Omega CBO Kenya's approach (Engage, Mentor, Mobilize, Sustain, or equivalent community-rooted framing).
9. THE home page programs preview SHALL render cards for the five Alpha & Omega CBO Kenya programs.
10. THE home page bottom CTA band SHALL invite visitors to "Partner with us", "Support a program", and "Get involved" in alignment with the three hero CTAs.

---

### Requirement 6: About Page Content Update

**User Story:** As a site visitor, I want to read about Alpha & Omega CBO Kenya's story and values, so that I understand why the organization exists.

#### Acceptance Criteria

1. THE About page PageHero eyebrow, title, and body SHALL describe Alpha & Omega CBO Kenya's origin in Bangladesh Slums and its youth-led focus.
2. THE About page "Why we exist" section SHALL explain the challenges facing young people, women, and girls in Bangladesh Slums, Mikindani Ward, and why the organization was founded.
3. THE About page values grid SHALL replace the four Big Ship C.B.O. values with values that reflect Alpha & Omega CBO Kenya (e.g. Youth-Led, Gender Responsive, Rights-Based, Community-Rooted).
4. THE About page Mission card SHALL state Alpha & Omega CBO Kenya's mission without referencing mangroves, waste recovery, or the old organization.
5. THE About page Vision card SHALL state "Empowered youth, resilient communities."
6. THE About page stat counters MAY show a small number of programs (5), years active (since 2019), or similar provable figures; THE Site SHALL NOT invent unverified numeric impact claims.

---

### Requirement 7: Impact Page Content Update

**User Story:** As a site visitor, I want to see honest, sourced impact data for Alpha & Omega CBO Kenya, so that I can assess the organization's reach.

#### Acceptance Criteria

1. THE Impact page SHALL NOT display any impact metric derived from Big Ship C.B.O. records (mangrove seedlings, Tudor Creek, yoghurt cups, etc.).
2. THE Impact page headline metrics SHALL only include figures drawn from the Alpha & Omega CBO Kenya research brief (e.g. number of programs: 5, milestone years: 2019–2025, named partner organizations).
3. WHEN a metric cannot be independently verified, THE ImpactMetric_Component SHALL render it with status "reported" or "estimated" and include a source attribution string.
4. THE Impact page timeline/milestones section SHALL reflect the verified Impact_Timeline entries for 2019, 2023, 2024, and 2025.
5. THE Impact page voices/stories section SHALL replace Big Ship C.B.O. testimonials with placeholder voices aligned to Alpha & Omega CBO Kenya's program areas (Girl Child, Women's Empowerment, Youth Voice, Human Rights, Climate Action).

---

### Requirement 8: Board / Leadership Page Content Update

**User Story:** As a site visitor, I want to see the leadership of Alpha & Omega CBO Kenya, so that I know who is responsible for the organization.

#### Acceptance Criteria

1. THE Board page SHALL display Victor Nando Odongo as Chairman/Founder with a bio reflecting his role in founding and leading Alpha & Omega CBO Kenya.
2. THE Board page SHALL NOT display the five Big Ship C.B.O. team members (Bosco Juma, Lucian Adhiambo, Daniel Mulandi, Jimmy Mwaita, Agatha Nafula).
3. WHERE additional board or team members beyond Victor Nando Odongo are not confirmed, THE Site SHALL render a placeholder card with the label "To be announced" rather than inventing names or roles.
4. THE Board page PageHero stats SHALL reflect provable figures (e.g. "Founded: 2019", "Location: Mombasa", "Programs: 5").

---

### Requirement 9: Events Page Content Update

**User Story:** As a site visitor, I want to see events relevant to Alpha & Omega CBO Kenya, so that I know how to get involved.

#### Acceptance Criteria

1. THE Events page PageHero SHALL describe community events and workshops in Bangladesh Slums and Mikindani Ward, replacing references to Tudor Creek, Ganahola, and coastal mangrove activities.
2. THE events list SHALL replace the four Big Ship C.B.O. events (Mangrove Planting Workshop, Waste Recovery Discussion, Community Skills Training, Ecosystem Monitoring Session) with events relevant to Alpha & Omega CBO Kenya's program areas (e.g. Girl Child mentorship session, Women's empowerment workshop, Youth civic dialogue, Human rights awareness session, Climate action day).
3. THE Events CtaBand SHALL invite visitors to "Partner with us" or "Support a program" with links to `/contact` and `/programs`.

---

### Requirement 10: Contact Page Content Update

**User Story:** As a site visitor, I want accurate contact information and framing for Alpha & Omega CBO Kenya, so that I can reach out to the right organization.

#### Acceptance Criteria

1. THE Contact page PageHero title SHALL read "Connect with Alpha & Omega CBO Kenya" replacing "Connect with Big Ship C.B.O."
2. THE Contact page address card SHALL display "Bangladesh Slums, Mikindani Ward, Jomvu Sub-County, Mombasa County, Kenya".
3. THE Contact page phone card SHALL display "+254 740 610 899".
4. THE Contact page email card SHALL display "alphaandomegacbokenya001@gmail.com".
5. THE Contact page opening hours block MAY retain Monday–Friday 9:00 AM–5:00 PM text or be updated to reflect actual availability if known.

---

### Requirement 11: Partners Section Update

**User Story:** As a site visitor, I want to see organizations that partner with Alpha & Omega CBO Kenya, so that I can assess the organization's credibility.

#### Acceptance Criteria

1. THE Partners_Component SHALL display the verified partner and network names for Alpha & Omega CBO Kenya: HURIA Human Rights Lab, Shining Hope for Communities (SHOFCO), Dream Achievers Youth Organization Kenya (DAYOK), and DARAJA Project.
2. THE Partners_Component SHALL NOT display the Big Ship C.B.O. partners (Kenya Forest Service, University of Nairobi, WWF-Kenya, Innovate Resource Agency).
3. THE `src/data/programs.ts` partners array SHALL be updated to reflect the four verified Alpha & Omega CBO Kenya partner organizations with their relationship descriptions.

---

### Requirement 12: ImpactStories Component Update

**User Story:** As a site visitor on the home page, I want to read impact stories relevant to Alpha & Omega CBO Kenya, so that I can see the human face of the work.

#### Acceptance Criteria

1. THE ImpactStories_Component SHALL replace the four Big Ship C.B.O. story cards (Tudor Creek, Yogurt Cup, Youth Livelihoods, Mikoko Watch) with story cards drawn from Alpha & Omega CBO Kenya's program areas.
2. WHEN a real testimonial quote from Alpha & Omega CBO Kenya is unavailable, THE story card SHALL use a clearly labelled placeholder quote (e.g. italicized copy with a note that a real testimonial will be added) rather than inventing attributed quotes with fictional names and roles.
3. THE story stat lines SHALL only display figures from the research brief or clearly labelled "TBD" values.

---

### Requirement 13: Page Metadata (SEO / OG / Twitter) Update

**User Story:** As a search engine or social media platform, I want accurate metadata for every Alpha & Omega CBO Kenya page, so that links and search results display correct information.

#### Acceptance Criteria

1. THE `head()` function in `src/routes/__root.tsx` SHALL set the default `<title>` to "Alpha & Omega CBO Kenya" and the default meta description to a sentence describing the organization's mission.
2. WHEN any route defines its own `head()`, THE `<title>` SHALL follow the pattern "[Page Name] | Alpha & Omega CBO Kenya".
3. THE `og:image` and `twitter:image` meta values SHALL reference a logo or hero image path for Alpha & Omega CBO Kenya (the existing `/big-ship-logo.png` path SHALL be replaced once a new asset is available; until then, the path SHALL be updated to a placeholder that resolves without a 404).
4. THE `og:url` meta value in `__root.tsx` SHALL be updated to the correct deployment URL for the Alpha & Omega CBO Kenya site.
5. THE `author` meta tag SHALL read "Alpha & Omega CBO Kenya".

---

### Requirement 14: Immutable Structure Constraint

**User Story:** As a developer maintaining the codebase, I want the component architecture, animation utilities, and layout structure to remain intact, so that the site's visual quality and performance are not degraded.

#### Acceptance Criteria

1. THE Site SHALL NOT modify, remove, or rename any CSS utility class defined in `src/styles.css` (including `ken-burns`, `reveal`, `marquee-track`, `card-lift`, `pattern-card`, `brand-gradient`, `ribbon-stripes`, `ribbon-sheen`, `text-shine`, `float-slow`, `scroll-cue`, `intro-gate`, `section`, `eyebrow`, `hero-overlay`, etc.).
2. THE Site SHALL NOT restructure or rename the TSX component files in `src/components/site/` (except for AltText_Utility string values inside those files).
3. THE Site SHALL NOT change the prop interfaces of `PageHero`, `CtaBand`, `ImpactMetric`, `ProgramDetail`, `LogoVideoCard`, or `Reveal`.
4. THE Site SHALL NOT alter the TanStack Router file-based route naming convention; new program route files SHALL follow the existing `programs.[slug].tsx` pattern.
5. THE Site SHALL NOT remove or alter the `<Outlet />` in `__root.tsx`, the `<IntroSplash />`, `<ScrollProgress />`, `<Header />`, `<Footer />`, or `<Toaster />` component placements.
6. WHILE the rebrand is applied, THE Site SHALL remain buildable with `vite build` without TypeScript errors introduced by the content changes.
