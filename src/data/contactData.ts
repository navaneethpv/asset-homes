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
  eyebrow: "Client Intake & Advisory",
  titleLine1: "Connect With Our",
  titleHighlight: "Management Desk",
  description:
    "Direct communication channels for property owners and tenants seeking property oversight, maintenance coordination, and portfolio management across Abu Dhabi and Al Ain.",
  ctaText: "Send An Inquiry",
};

export const officeLocations: OfficeLocation[] = [
  {
    city: "Asset Homes Headquarters",
    area: "Central District, Al Ain",
<<<<<<< HEAD
    address: "137th Street, Plot Number 263, Central District, Al Kuwaitat, Al Ain, Abu Dhabi, UAE",
    coordinates: "24.2194° N, 55.7600° E",
    lat: 24.2194,
    lng: 55.7600,
    phone: "037636611 / +971 507 308064",
=======
    address: "Building Number 34, Floor M 1, 101, Al Kuwaitat, Al Ain, Abu Dhabi, UAE",
    coordinates: "24.2194° N, 55.7600° E",
    lat: 24.2194,
    lng: 55.7600,
    phone: "03 763 6611 / +971 50 730 8064 / +971 54 426 3739",
>>>>>>> origin/feat
    email: "assethomesalain@gmail.com",
    hours: "Saturday – Thursday: 08:00 – 18:00 GST",
  },
];

export const contactInfoItems: ContactInfoItem[] = [
  {
    id: "phone",
    title: "Telephone Desk",
    subtitle: "Direct Lines",
<<<<<<< HEAD
    value: "037636611 / +971 507 308064",
=======
    value: "03 763 6611 / +971 50 730 8064 / +971 54 426 3739",
>>>>>>> origin/feat
    detail: "Immediate support and property management inquiries",
    iconName: "Phone",
  },
  {
    id: "email",
    title: "Email Communication",
    subtitle: "Inquiries & Operations",
    value: "assethomesalain@gmail.com",
    detail: "Official portal: assethomesuae.com",
    iconName: "Mail",
  },
  {
    id: "address",
    title: "Main Office Location",
    subtitle: "Al Kuwaitat, Al Ain",
<<<<<<< HEAD
    value: "137th Street, Plot No. 263",
    detail: "Central District, Al Ain, Abu Dhabi, UAE",
=======
    value: "Building Number 34, Floor M 1, 101",
    detail: "Al Kuwaitat, Al Ain, Abu Dhabi, UAE",
>>>>>>> origin/feat
    iconName: "MapPin",
  },
  {
    id: "hours",
    title: "Operational Desk",
    subtitle: "Working Hours",
    value: "Saturday – Thursday",
    detail: "Dedicated support for owners and tenants",
    iconName: "Clock",
  },
];

export const inquiryOptions: InquiryOption[] = [
  { label: "Select Inquiry Subject", value: "" },
  { label: "Property Management Services", value: "management" },
  { label: "Infrastructure & Facility Protection", value: "infrastructure" },
  { label: "Tenant Relations & Support", value: "tenants" },
  { label: "Leasing & Contract Coordination", value: "leasing" },
  { label: "General Inquiries", value: "general" },
];
