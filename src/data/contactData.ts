export interface ContactInfoItem {
  id: string;
  title: string;
  subtitle: string;
  value: string;
  detail: string;
  iconName: string;
}

export interface OfficeLocation {
  city: string;
  area: string;
  address: string;
  coordinates: string;
  lat: number;
  lng: number;
  phone: string;
  email: string;
  hours: string;
}

export interface InquiryOption {
  label: string;
  value: string;
}

export const heroData = {
  eyebrow: "Stewardship Advisory Intake",
  titleLine1: "Connect With Our",
  titleHighlight: "Senior Team",
  description:
    "Direct channels for property owners, institutional developers, and investors seeking bespoke property management and operational audits across Abu Dhabi.",
  ctaText: "Send An Inquiry",
};

export const officeLocations: OfficeLocation[] = [
  {
    city: "Abu Dhabi Headquarters",
    area: "Al Maryah Island",
    address: "Al Maryah Tower, Suite 2401, Al Maryah Island, Abu Dhabi, UAE",
    coordinates: "24.4988° N, 54.3895° E",
    lat: 24.4988,
    lng: 54.3895,
    phone: "+971 (0)2 800 ASSET",
    email: "advisory@assethomes.ae",
    hours: "Mon – Fri: 08:30 – 18:00 GST",
  },
  {
    city: "Marina Operations Hub",
    area: "Yas Island",
    address: "Yas Marina Gate Building 3, Level 2, Yas Island, Abu Dhabi, UAE",
    coordinates: "24.4672° N, 54.6080° E",
    lat: 24.4672,
    lng: 54.6080,
    phone: "+971 (0)2 645 8899",
    email: "operations@assethomes.ae",
    hours: "24/7 Technical Dispatch",
  },
];

export const contactInfoItems: ContactInfoItem[] = [
  {
    id: "phone",
    title: "Telephone Advisory",
    subtitle: "Direct Lines & Concierge",
    value: "+971 (0)2 800 27738",
    detail: "Available Monday through Friday, 08:30 – 18:00 GST",
    iconName: "Phone",
  },
  {
    id: "email",
    title: "Email Correspondence",
    subtitle: "Inquiries & Proposals",
    value: "info@assethomes.ae",
    detail: "Guaranteed response within 24 business hours",
    iconName: "Mail",
  },
  {
    id: "address",
    title: "Executive Office",
    subtitle: "Abu Dhabi Financial Center",
    value: "Al Maryah Tower, Suite 2401",
    detail: "Al Maryah Island, Abu Dhabi, United Arab Emirates",
    iconName: "MapPin",
  },
  {
    id: "hours",
    title: "Technical Support",
    subtitle: "Emergency Maintenance",
    value: "24/7 Dispatch Center",
    detail: "Rapid MEP response unit for emergency calls",
    iconName: "Clock",
  },
];

export const inquiryOptions: InquiryOption[] = [
  { label: "Select Inquiry Subject", value: "" },
  { label: "Property Management Onboarding", value: "management" },
  { label: "Operations & Compliance Audit", value: "audit" },
  { label: "Estidama & Sustainability Upgrade", value: "sustainability" },
  { label: "MEP & Technical Servicing", value: "mep" },
  { label: "Tenant & Escrow Accounting", value: "escrow" },
  { label: "General Investor Advisory", value: "general" },
];
