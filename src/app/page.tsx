import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustLegacy from "@/components/TrustLegacy";
import ServicesGrid from "@/components/ServicesGrid";
import InstitutionalGrade from "@/components/InstitutionalGrade";
import AssetShowcase from "@/components/AssetShowcase";
import OperationalRoadmap from "@/components/OperationalRoadmap";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-cream text-brand-charcoal selection:bg-brand-gold/30 selection:text-brand-black antialiased overflow-x-hidden">
      {/* 0. Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Legacy of Trust */}
        <TrustLegacy />

        {/* 3. Services Capabilities Grid */}
        <ServicesGrid />

        {/* 4. Institutional-Grade Management */}
        <InstitutionalGrade />

        {/* 5. Assets Showcase */}
        <AssetShowcase />

        {/* 6. Operational Roadmap & Methodology */}
        <OperationalRoadmap />

        {/* 7. Client Testimonial */}
        <Testimonial />
      </main>

      {/* 8. Footer & CTA Block */}
      <Footer />
    </div>
  );
}
