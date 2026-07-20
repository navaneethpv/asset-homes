export interface VisionHeroData {
  eyebrow: string;
  titleLine1: string;
  titleHighlight: string;
  description: string;
  ctaText: string;
}

export interface VisionManifestoData {
  eyebrow: string;
  title: string;
  quote: string;
  paragraphs: string[];
}

export interface VisionPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface HorizonGoal {
  year: string;
  target: string;
  title: string;
  description: string;
}

export interface VisionSpotlightData {
  eyebrow: string;
  titleLine1: string;
  titleHighlight: string;
  description: string;
  image: string;
  caption: string;
}

export interface VisionCtaData {
  eyebrow: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
}

export const heroData: VisionHeroData = {
  eyebrow: "Strategic Horizon 2030",
  titleLine1: "Pioneering the Future of",
  titleHighlight: "Real Estate Stewardship",
  description:
    "Architecting sustainable, tech-enabled, and institutional-grade property management standards across Abu Dhabi and the wider GCC region.",
  ctaText: "Explore Our Manifesto",
};

export const manifestoData: VisionManifestoData = {
  eyebrow: "Our Purpose",
  title: "Redefining Asset Longevity Through Precision Operations",
  quote:
    "“We do not merely maintain properties—we safeguard legacy investments, optimize environmental efficiency, and build enduring value for generations.”",
  paragraphs: [
    "At Asset Homes, our vision is grounded in the belief that Gulf real estate demands a new operational paradigm. As urbanization accelerates across Abu Dhabi and Dubai, property management must evolve beyond reactive repairs toward predictive asset stewardship.",
    "By fusing AI-assisted building analytics, Estidama green building practices, and transparent escrow accounting, we empower property owners and developers to maximize yield while preserving architectural integrity.",
  ],
};

export const visionPillars: VisionPillar[] = [
  {
    id: "predictive-mep",
    number: "01",
    title: "Autonomous & Predictive Engineering",
    subtitle: "AI-Driven Diagnostics",
    description:
      "Integrating IoT sensors and machine-learning diagnostics into building MEP systems to eliminate unscheduled downtime and extend equipment lifespans by up to 35%.",
    iconName: "Cpu",
  },
  {
    id: "sustainability",
    number: "02",
    title: "Net-Zero & Estidama Leadership",
    subtitle: "Sustainable Optimization",
    description:
      "Championing Pearl-4 Estidama rating standards across all residential and commercial portfolios, reducing carbon footprints and utility costs for institutional investors.",
    iconName: "Sparkles",
  },
  {
    id: "escrow-governance",
    number: "03",
    title: "Absolute Escrow & Financial Clarity",
    subtitle: "Transparent Governance",
    description:
      "Providing real-time audit dashboards, ledger integrations, and municipal compliance reporting for complete capital transparency.",
    iconName: "Shield",
  },
  {
    id: "value-accretion",
    number: "04",
    title: "Long-Term Capital Appreciation",
    subtitle: "Yield Maximization Strategy",
    description:
      "Transforming property management into an active wealth generator by elevating tenant retention, boosting property valuations, and maintaining premier market positioning.",
    iconName: "TrendingUp",
  },
];

export const horizonGoals: HorizonGoal[] = [
  {
    year: "2026",
    target: "100% IoT Integration",
    title: "Smart Building Operations",
    description:
      "Deploying central telemetry systems across 100% of managed high-rise assets in Al Bateen and Yas Island.",
  },
  {
    year: "2028",
    target: "Net-Zero Carbon Offset",
    title: "Sustainable Certification",
    description:
      "Transitioning all commercial developments to renewable energy procurement and Estidama Pearl-3 ratings.",
  },
  {
    year: "2030",
    target: "AED 5B+ Assets Managed",
    title: "GCC Stewardship Leadership",
    description:
      "Expanding institutional asset management operations to landmark luxury developments across Abu Dhabi and Dubai.",
  },
];

export const spotlightData: VisionSpotlightData = {
  eyebrow: "Architectural Foresight",
  titleLine1: "Engineering Tomorrow’s",
  titleHighlight: "Living Environments",
  description:
    "Our commitment to architectural stewardship ensures that every villa, tower, and commercial complex under our care retains its prestige, functionality, and financial performance through decades of changing market dynamics.",
  image:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
  caption: "The Gate Business Hub & Sovereign Towers — Abu Dhabi",
};

export const ctaData: VisionCtaData = {
  eyebrow: "Partner With Asset Homes",
  titlePrefix: "Shape the Future of Your",
  titleHighlight: "Property Portfolio",
  description:
    "Schedule a confidential strategy session with our senior stewardship executive team to discuss your development’s operational roadmap and 2030 sustainability targets.",
  buttonText: "Schedule Strategic Consultation",
};
