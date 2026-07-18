"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustLegacy from "@/components/TrustLegacy";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import AssetShowcase from "@/components/AssetShowcase";
import OperationalRoadmap from "@/components/OperationalRoadmap";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Global Section Transitions: focus fading on scroll
      const sections = gsap.utils.toArray("section, footer");
      sections.forEach((sec: any) => {
        // Subtle focus loss when leaving the viewport (100% -> 92% opacity)
        gsap.to(sec, {
          opacity: 0.92,
          scrollTrigger: {
            trigger: sec,
            start: "bottom 85%",
            end: "bottom top",
            scrub: true,
          }
        });

        // Subtle focus gain when entering the viewport
        gsap.fromTo(sec,
          { opacity: 0.92 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: sec,
              start: "top 95%",
              end: "top 75%",
              scrub: true,
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-brand-cream text-brand-charcoal selection:bg-brand-gold/30 selection:text-brand-black antialiased overflow-x-hidden">
      {/* 0. Navbar */}
      <Navbar />

      <main className="grow">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Legacy of Trust */}
        <TrustLegacy />

        {/* 3. Services Capabilities Grid */}
        <ServicesGrid />

        {/* 4. Why Choose Asset Homes */}
        <WhyChooseUs />

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
