export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  image: string;
}

export interface ServicesHeroData {
  eyebrow: string;
  titleLine1: string;
  titleHighlight: string;
  description: string;
  ctaText: string;
}

export interface ServicesIntroData {
  eyebrow: string;
  quote: string;
  description: string;
}

export interface ServicesCtaData {
  eyebrow: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
}

export const heroData: ServicesHeroData = {
  eyebrow: "Property & Infrastructure Care",
  titleLine1: "Services & Asset",
  titleHighlight: "Protection",
  description:
    "Bringing property and infrastructure management into the 21st Century by aligning the interests of company and client through attentive service and asset protection.",
  ctaText: "Consult Our Team",
};

export const introData: ServicesIntroData = {
  eyebrow: "Operational Scope",
  quote:
    "“We focus on managing, protecting, and maximizing the potential of property assets.”",
  description:
    "With 15 years of experience in the real estate market, Asset Homes Property Management LLC provides comprehensive management strategies designed to exceed tenant expectations and preserve property value over time.",
};

export const servicesData: ServiceItem[] = [
  {
    id: "service-01",
    number: "01",
    title: "Property Operations & Leasing",
    subtitle: "TENANCY LIFECYCLE & OCCUPANCY CARE",
    description:
      "End-to-end operational oversight for residential and commercial properties, focused on maintaining stable occupancy and structured tenancy contracts.",
    details: [
      "Tenancy contract execution & timely renewals",
      "Tenant screening & background verification",
      "Municipal registration & regulatory alignment",
      "Property presentation & vacancy management",
    ],
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "service-02",
    number: "02",
    title: "Tenant Relationship Management",
    subtitle: "RESIDENT SATISFACTION & COMMUNICATION",
    description:
      "Professional tenant onboarding, relationship management, and communication channels ensuring resident satisfaction and quality living.",
    details: [
      "Dedicated multi-lingual support staff",
      "Structured tenant onboarding & move-in process",
      "Coordination of resident inquiries & requests",
      "Regular communication & feedback management",
    ],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "service-03",
    number: "03",
    title: "Technical & Maintenance Care",
    subtitle: "PREVENTATIVE & CORRECTIVE MAINTENANCE",
    description:
      "Scheduled and emergency maintenance services executed by qualified technicians to keep building systems operating smoothly.",
    details: [
      "24/7 emergency response for technical issues",
      "HVAC, electrical & plumbing system servicing",
      "Routine building condition audits",
      "Energy & utility performance checks",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "service-04",
    number: "04",
    title: "Infrastructure Management",
    subtitle: "BUILDING SYSTEMS & FACILITY PROTECTION",
    description:
      "Comprehensive facility and infrastructure protection to ensure long-term structural integrity and sustained asset performance.",
    details: [
      "Structural inspections & exterior maintenance",
      "Fire safety & safety system inspections",
      "Common area maintenance & cleanliness oversight",
      "Vendor SLA management & contractor supervision",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "service-05",
    number: "05",
    title: "Lease Management & Renewals",
    subtitle: "CONTRACT ADMINISTRATION & COMPLIANCE",
    description:
      "Lease administration, contract documentation, and renewal management aligned with municipal requirements and market standards.",
    details: [
      "Lease agreement drafting & contract oversight",
      "Market-aligned rental valuation reviews",
      "Timely lease renewal notifications",
      "Tenant deposit administration",
    ],
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "service-06",
    number: "06",
    title: "Financial Management & Reporting",
    subtitle: "TRANSPARENT LEDGERS & ACCOUNTING",
    description:
      "Clear financial accounting and reporting structures engineered to track income, manage expenses, and protect property yield.",
    details: [
      "Rent collection & account oversight",
      "Clear owner financial reporting & ledgers",
      "Operating budget management & record keeping",
      "Utility payment processing & tax compliance",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "service-07",
    number: "07",
    title: "Compliance & Regulatory Oversight",
    subtitle: "MUNICIPAL & LEGAL ALIGNMENT",
    description:
      "Ensuring property operations adhere to municipal standards, licensing regulations, and health and safety requirements across the UAE.",
    details: [
      "Municipal permit renewals & documentation",
      "Health, safety & environmental standard checks",
      "Civil defense compliance certifications",
      "Insurance policy & liability management",
    ],
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "service-08",
    number: "08",
    title: "Dedicated Client Support",
    subtitle: "DIRECT ADVISORY & DESK SUPPORT",
    description:
      "Dedicated client communication and property desk support whenever property owners require assistance or operational reporting.",
    details: [
      "Dedicated management desk point of contact",
      "Emergency contact channel for property owners",
      "Regular property performance reviews",
      "Clear operational reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=2000",
  },
];

export const ctaData: ServicesCtaData = {
  eyebrow: "Property Management Inquiry",
  titlePrefix: "Ready to Discuss Your Property's",
  titleHighlight: "Future",
  description:
    "Connect with Asset Homes Property Management LLC in Abu Dhabi and Al Ain. Learn how our 15 years of experience can protect and optimize your property assets.",
  buttonText: "Schedule a Consultation",
};
