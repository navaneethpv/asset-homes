export interface GalleryProperty {
  id: string;
  name: string;
  category: string;
  location: string;
  image: string;
  description: string;
  specs: string[];
}

export interface GalleryHeroData {
  eyebrow: string;
  titleLine1: string;
  titleHighlight: string;
  description: string;
  ctaText: string;
}

export interface GalleryIntroData {
  eyebrow: string;
  quote: string;
  description: string;
}

export interface GallerySpotlightData {
  eyebrow: string;
  titleLine1: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  image: string;
}

export interface GalleryCtaData {
  eyebrow: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
}

export const heroData: GalleryHeroData = {
  eyebrow: "Stewardship Portfolio",
  titleLine1: "Curated Assets",
  titleHighlight: "Gallery",
  description:
    "An editorial showcase of signature residential, commercial, and waterfront landmarks under active Asset Homes operational management across Abu Dhabi.",
  ctaText: "Explore Portfolio",
};

export const introData: GalleryIntroData = {
  eyebrow: "Architectural Standard",
  quote:
    "“Every structure tells a story of vision, engineering, and precision stewardship.”",
  description:
    "From iconic coastal towers in Al Bateen to sovereign business hubs on Al Maryah Island, our managed assets represent the pinnacle of Gulf real estate excellence.",
};

export const spotlightData: GallerySpotlightData = {
  eyebrow: "Portfolio Benchmark",
  titleLine1: "Architectural Preservation",
  titleHighlight: "& Asset Optimization",
  description:
    "We believe exceptional real estate architecture deserves an equally exceptional operational framework. Our portfolio management extends far beyond routine checklists—protecting aesthetic elegance and technical longevity.",
  buttonText: "Explore Operational Services",
<<<<<<< HEAD
  image:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600",
=======
  image: "/gallery/image.png",
>>>>>>> origin/feat
};

export const ctaData: GalleryCtaData = {
  eyebrow: "Investment Review",
  titlePrefix: "Maximize Your Property’s",
  titleHighlight: "Valuation",
  description:
    "Submit your property address or developer prospectus to receive a comprehensive operational audit and yield optimization forecast from our senior advisory team.",
  buttonText: "Request Operations Audit",
};

export const galleryData: GalleryProperty[] = [
  {
    id: "corniche",
<<<<<<< HEAD
    name: "The Corniche Tower",
    category: "Waterfront",
    location: "Al Bateen, Abu Dhabi",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800",
=======
    name: "Al Ain Muwaiji",
    category: "Waterfront",
    location: "Al Bateen, Abu Dhabi",
    image: "/gallery/image1.jpeg",
>>>>>>> origin/feat
    description:
      "A landmark 65-story skyscraper with bespoke glass cladding and five-star waterfront facilities.",
    specs: ["65 Storeys", "Bespoke Glass Facade", "Estidama Pearl 3"],
  },
  {
    id: "yas-marina",
<<<<<<< HEAD
    name: "Yas Marina Residences",
    category: "Waterfront",
    location: "Yas Island, Abu Dhabi",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
=======
    name: "Al Ain Sanayya",
    category: "Waterfront",
    location: "Al Ain, Abu Dhabi",
    image: "/gallery/image2.jpeg",
>>>>>>> origin/feat
    description:
      "Luxury marina-front living spaces with automated operations and premium preventative upkeep.",
    specs: ["Private Berth Access", "Smart HVAC Systems", "24/7 Concierge"],
  },
  {
    id: "saadiyat-villas",
<<<<<<< HEAD
    name: "Saadiyat Beach Estates",
    category: "Residential",
    location: "Saadiyat Island, Abu Dhabi",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
=======
    name: "Al Ain Muwaiji",
    category: "Residential",
    location: "Saadiyat Island, Abu Dhabi",
    image: "/gallery/image3.jpeg",
>>>>>>> origin/feat
    description:
      "Ultra-exclusive private beachfront residences managed with strict architectural audit routines.",
    specs: ["Beachfront Villas", "Solar Micro-Grids", "Private Security"],
  },
  {
    id: "capital-plaza",
<<<<<<< HEAD
    name: "Capital Plaza Commercial",
    category: "Commercial",
    location: "Downtown, Abu Dhabi",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
=======
    name: "Al Ain Khabeesi",
    category: "Commercial",
    location: "Al Ain, Abu Dhabi",
    image: "/gallery/image4.png",
>>>>>>> origin/feat
    description:
      "High-volume institutional corporate spaces supported by MEP operations and predictive servicing.",
    specs: ["Grade-A Offices", "Predictive MEP", "Full Ledger Sync"],
  },
  {
    id: "reem-island",
<<<<<<< HEAD
    name: "Al Reem Heights",
    category: "Residential",
    location: "Al Reem Island, Abu Dhabi",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
=======
    name: "Al Ain Khabeesi",
    category: "Residential",
    location: "Al Ain, Abu Dhabi",
    image: "/gallery/image5.png",
>>>>>>> origin/feat
    description:
      "Premium high-rise residential apartments operating on full-ledger accounting integrations.",
    specs: ["Sky Gardens", "Audit Escrow", "Hospitality Desk"],
  },
  {
    id: "gate-district",
<<<<<<< HEAD
    name: "The Gate Business Hub",
    category: "Commercial",
    location: "Al Maryah Island, Abu Dhabi",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
=======
    name: "Al Ain Khabeesi",
    category: "Commercial",
    location: "Al Maryah Island, Abu Dhabi",
    image: "/gallery/image6.png",
>>>>>>> origin/feat
    description:
      "Sophisticated corporate business suites featuring smart energy tracking and Estidama certifications.",
    specs: ["Financial District", "Estidama Certified", "MEP Automation"],
  },
];
