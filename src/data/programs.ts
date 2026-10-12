/**
 * Big Ship C.B.O. Programs Data
 * Environmental conservation and community development programs
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

// Big Ship C.B.O. Programs
export const programs: Program[] = [
  {
    id: "adopt-a-site",
    name: "Adopt A Site",
    shortDescription: "Community-led mangrove restoration around Tudor Creek, Mikindani, and Ganahola",
    longDescription: "Our flagship environmental program engaging community members in mangrove planting, monitoring, and ecosystem restoration. Through the Mikoko Watch initiative, we combine conservation with community empowerment.",
    icon: "tree-icon",
    image: "/programs/adopt-a-site-hero.jpg",
    outcomes: [
      "Mangrove seedling planting and monitoring",
      "Community-based ecosystem monitoring (Mikoko Watch)",
      "Environmental education and awareness",
      "Coastal resilience building"
    ],
    locations: ["Tudor Creek", "Mikindani", "Ganahola"]
  },
  {
    id: "reco-yogurt-forest",
    name: "RECO/Yogurt Forest Campaign",
    shortDescription: "Innovative waste recovery program using collected yoghurt cups as seedling containers",
    longDescription: "A creative solution to plastic waste that supports reforestation. We collect discarded yoghurt cups from schools and communities, transform them into seedling containers, and use them in our tree-planting initiatives.",
    icon: "recycle-icon",
    image: "/programs/reco-yogurt-hero.jpg",
    outcomes: [
      "Plastic waste collection and repurposing",
      "Seedling container production",
      "Environmental awareness campaigns in schools",
      "Circular economy demonstration"
    ]
  },
  {
    id: "urban-resilience",
    name: "Urban Resilience & Skills Development",
    shortDescription: "Building livelihoods and community capacity in Mombasa's coastal neighborhoods",
    longDescription: "Integrated program combining environmental awareness with youth livelihoods training, women's empowerment, and community resilience building in urban coastal settlements.",
    icon: "skills-icon",
    image: "/programs/urban-resilience-hero.jpg",
    outcomes: [
      "Youth livelihoods training",
      "Women's economic empowerment",
      "Community organizing and leadership",
      "Climate resilience education"
    ]
  }
];

// Big Ship C.B.O. Partners
export const partners: Partner[] = [
  {
    name: "Kenya Forest Service",
    description: "Technical partnership for mangrove restoration"
  },
  {
    name: "University of Nairobi",
    description: "Research collaboration on coastal ecosystems"
  },
  {
    name: "WWF-Kenya",
    description: "Conservation program support and monitoring"
  },
  {
    name: "Innovate Resource Agency (IRA)",
    description: "Capacity building and community development"
  }
];

// Big Ship C.B.O. Impact Metrics
// NOTE: use cautious language when displaying these — see ImpactMetric component.
// Requirements 4.1–4.6: verified, documented, reported, and estimated figures distinguished.
export const impactMetrics: ImpactMetric[] = [
  {
    value: "500+",
    label: "Mangrove seedlings planted (documented)",
    source: "Big Ship C.B.O. internal records, 2018–2024",
    verified: true,
    context: "Tudor Creek, Mikindani, and Ganahola restoration sites",
  },
  {
    value: "150+",
    label: "Community members reportedly engaged in programs",
    source: "Program participant logs; self-reported, not independently audited",
    verified: false,
    context: "Figure reflects self-reported attendance across all programs",
  },
  {
    value: 3,
    label: "Primary restoration sites (verified)",
    source: "Big Ship C.B.O. site records, 2024",
    verified: true,
    context: "Tudor Creek, Mikindani, Ganahola",
  },
];

// Big Ship C.B.O. Impact Stories
export const impactStories: ImpactStory[] = [
  {
    id: "tudor-creek-restoration",
    title: "Tudor Creek Ecosystem Recovery",
    category: "Mangrove Restoration",
    summary: "Community-led planting initiative resulted in 300+ mangrove seedlings establishing along Tudor Creek shoreline, improving coastal resilience and providing habitat for marine life.",
    image: "/impact/tudor-creek-mangroves.jpg",
    outcome: "300+ established seedlings, 75% survival rate",
    location: "Tudor Creek, Mombasa"
  },
  {
    id: "yogurt-cup-waste-recovery",
    title: "Plastic to Seedlings: RECO Campaign Success",
    category: "Waste Recovery",
    summary: "Schools and communities partnered with us to collect over 5,000 discarded yoghurt cups, which were transformed into seedling containers and used in our reforestation efforts.",
    image: "/impact/yogurt-cup-containers.jpg",
    outcome: "5,000+ cups repurposed, 2,000+ seedlings planted",
    location: "Mombasa schools and communities"
  },
  {
    id: "youth-livelihoods-training",
    title: "Skills for Coastal Resilience",
    category: "Skills Development",
    summary: "Urban Resilience program provided livelihoods training to 120+ youth and women in coastal neighborhoods, equipping them with skills for sustainable income generation.",
    image: "/impact/youth-training.jpg",
    outcome: "120+ trained, 65% employment/self-employment rate",
    location: "Mombasa coastal settlements"
  }
];
