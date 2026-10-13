/**
 * Alpha & Omega CBO Kenya — Programs Data
 * Community empowerment, mentorship, rights awareness, and civic participation programs
 */

export interface Program {
  id: string;                    // Unique identifier (kebab-case)
  name: string;                  // Display name
  shortDescription: string;       // One-sentence summary
  longDescription: string;        // Detailed description
  icon: string;                  // Icon identifier or path
  image: string;                 // Hero image path
  outcomes: string[];            // Bullet points of outcomes/activities
  locations?: string[];          // Relevant locations
}

export interface ImpactMetric {
  value: string | number;        // Display value
  label: string;                 // Metric description
  source?: string;               // Attribution
  verified: boolean;             // Whether metric is formally verified
  context?: string;              // Additional context or caveats
}

export interface Partner {
  name: string;
  logo?: string;                 // Optional logo image path
  description?: string;          // Relationship description
  url?: string;                  // Partner website
}

export interface ImpactStory {
  id: string;
  title: string;
  category: string;              // Program area
  summary: string;               // One-paragraph description
  image: string;                 // Story image
  outcome: string;               // Measurable result
  quote?: string;                // Optional testimonial
  location?: string;             // Relevant location
}

// Alpha & Omega CBO Kenya Programs
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

// Alpha & Omega CBO Kenya Partners
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

// Alpha & Omega CBO Kenya Impact Metrics — provable figures only
// NOTE: use cautious language when displaying these — see ImpactMetric component.
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

// Alpha & Omega CBO Kenya Impact Stories
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
