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
  eyebrow: "Institutional Stewardship",
  titleLine1: "Institutional-Grade",
  titleHighlight: "Services",
  description:
    "Uncompromising operational oversight designed to preserve structural integrity, elevate tenant experiences, and maximize yield across Abu Dhabi.",
  ctaText: "Consult an Advisor",
};

export const introData: ServicesIntroData = {
  eyebrow: "Operational Scope",
  quote:
    "“We protect investments with the discipline of engineering and the care of hospitality.”",
  description:
    "We do not believe in reactive maintenance or standardized checklists. Every asset entrusted to Asset Homes Property Management LLC receives a customized operational framework engineered around its physical architecture, tenant profile, and financial objectives.",
};

export const servicesData: ServiceItem[] = [
  {
    id: "service-01",
    number: "01",
    title: "Property Operations & Leasing",
    subtitle: "TENANCY LIFECYCLE & OCCUPANCY STEWARDSHIP",
    description:
      "Comprehensive end-to-end operational oversight for residential and commercial properties designed to maximize occupancy and secure premium lease terms.",
    details: [
      "Tenancy contract lifecycle execution & renewals",
      "Rigorous tenant background screening & vetting",
      "Ejari registration & municipal compliance",
      "Bespoke marketing & vacant asset positioning",
    ],
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "service-02",
    number: "02",
    title: "Tenant Relationship Management",
    subtitle: "HOSPITALITY-GRADE RESIDENT & TENANT VETTING",
    description:
      "Professional tenant screening, onboarding, and relationship management ensuring high tenant retention and seamless communication.",
    details: [
      "Dedicated multi-lingual tenant advisory staff",
      "Tenant background checks & financial vetting",
      "Seamless move-in & move-out coordination",
      "Resident portal integration & support",
    ],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "service-03",
    number: "03",
    title: "Technical & MEP Maintenance",
    subtitle: "24/7 PREVENTATIVE & CORRECTIVE CARE",
    description:
      "Preventative and emergency building services executed by certified engineering specialists to keep properties in pristine operational condition.",
    details: [
      "24/7 emergency response engineering dispatch",
      "Comprehensive HVAC, chiller plant & MEP servicing",
      "Energy audits & consumption optimization",
      "Estidama green building rating compliance",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "service-04",
    number: "04",
    title: "Infrastructure Management",
    subtitle: "BUILDING SYSTEMS & FACILITY PRESERVATION",
    description:
      "Complete facility and structural infrastructure management ensuring long-term asset value preservation and structural integrity.",
    details: [
      "Structural inspections & facade maintenance",
      "Life safety & fire suppression system audits",
      "Common area & elevator maintenance control",
      "Vendor SLA management & contractor oversight",
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
      "Efficient lease administration, legal documentation, rent index adjustments, and lease renewal negotiations.",
    details: [
      "Lease agreement drafting & legal review",
      "RERA rent index analysis & price adjustment",
      "Timely lease renewal notices & execution",
      "Tenant security deposit escrow management",
    ],
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "service-06",
    number: "06",
    title: "Financial Stewardship & Yields",
    subtitle: "AUDIT-READY LEDGERS & ESCROW TRANSPARENCY",
    description:
      "Meticulous accounting structures engineered to track, protect, and optimize your asset's financial performance with full transparency.",
    details: [
      "Rent collection & escrow account management",
      "Real-time owner dashboard & ledger tracking",
      "Detailed operating budget & CapEx forecasts",
      "Utility bill audit & VAT tax compliance",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "service-07",
    number: "07",
    title: "Compliance & Regulatory Oversight",
    subtitle: "MUNICIPAL & GOVERNMENTAL ALIGNMENT",
    description:
      "Ensuring complete regulatory compliance, municipal licensing, health and safety standards, and operational excellence across Abu Dhabi.",
    details: [
      "Municipal permit renewals & documentation",
      "Health, safety & environmental safety audits",
      "Civil Defense compliance certifications",
      "Third-party insurance & liability management",
    ],
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "service-08",
    number: "08",
    title: "24/7 Bespoke Client Support",
    subtitle: "ALWAYS-ON ADVISORY & CONCIERGE DESK",
    description:
      "Dedicated client assistance and concierge support whenever property owners and high-net-worth investors need operational guidance.",
    details: [
      "Dedicated single point-of-contact advisor",
      "24/7 emergency owner hotline & helpdesk",
      "Quarterly executive portfolio review sessions",
      "Custom reporting & investor advisory services",
    ],
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=2000",
  },
];

export const ctaData: ServicesCtaData = {
  eyebrow: "Bespoke Portfolio Consultation",
  titlePrefix: "Ready to Secure Your Portfolio's",
  titleHighlight: "Legacy",
  description:
    "Engage Abu Dhabi's premier boutique real estate stewardship team. Receive a customized operational plan tailored to your property portfolio.",
  buttonText: "Consult an Advisory Partner",
};
