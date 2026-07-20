"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustLegacy from "@/components/TrustLegacy";
import ServicesGrid from "@/components/ServicesGrid";
import AssetShowcase from "@/components/AssetShowcase";
import OperationalRoadmap from "@/components/OperationalRoadmap";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const whyChooseSectionRef = useRef<HTMLDivElement>(null);
  const whyChooseImageWrapperRef = useRef<HTMLDivElement>(null);
  const whyChooseImageRef = useRef<HTMLImageElement>(null);
  const whyChooseContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Why Choose Us Hook Animations
      const section = whyChooseSectionRef.current;
      const imageWrapper = whyChooseImageWrapperRef.current;
      const image = whyChooseImageRef.current;
      const content = whyChooseContentRef.current;

      if (section && imageWrapper && image && content) {
        // Clip-path image reveal + scale zoom
        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        })
        .fromTo(imageWrapper,
          { clipPath: "inset(0% 100% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.6, ease: "power4.inOut" }
        )
        .fromTo(image,
          { scale: 1.15 },
          { scale: 1.0, duration: 2.0, ease: "power3.out" },
          "-=1.4"
        );

        // Staggered reveal of text elements
        const elements = content.querySelectorAll(".why-reveal");
        gsap.fromTo(elements,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: content,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );

        // Scroll Parallax on image
        gsap.fromTo(image,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      }
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

        {/* 4. Why Choose Asset Homes Hook */}
        <section ref={whyChooseSectionRef} className="py-24 sm:py-32 bg-brand-beige text-brand-charcoal border-t border-brand-gold/15 relative overflow-hidden">
          <div className="w-full max-w-none px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Architectural Image */}
              <div className="lg:col-span-6 relative">
                <div 
                  ref={whyChooseImageWrapperRef} 
                  className="relative aspect-4/3 w-full overflow-hidden bg-brand-cream rounded-tr-[32px] border border-brand-gold/25 shadow-xl group"
                >
                  <Image
                    ref={whyChooseImageRef}
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                    alt="Luxury architectural property managed by Asset Homes"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Subtle gold decorative accent line */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r border-b border-brand-gold/40 pointer-events-none hidden sm:block" />
              </div>

              {/* Right Column: Hook Content & CTA */}
              <div ref={whyChooseContentRef} className="lg:col-span-6 flex flex-col justify-center space-y-6">
                <span className="why-reveal text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase block">
                  Our Advantage
                </span>
                
                <h2 className="why-reveal font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-black leading-tight">
                  Why Leading Property Owners <span className="text-brand-gold italic">Choose Us</span>
                </h2>
                
                <p className="why-reveal text-brand-charcoal-light text-sm sm:text-base font-sans font-light leading-relaxed">
                  From engineering-grade asset preservation to 100% financial transparency, discover the distinct operational philosophy that protects and optimizes ultra-high-net-worth real estate portfolios across Abu Dhabi.
                </p>

                {/* Key feature micro-bullets */}
                <div className="why-reveal grid grid-cols-1 sm:grid-cols-2 gap-4 py-3 border-y border-brand-gold/20 text-xs font-sans text-brand-charcoal font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                    <span>Engineering-Grade Oversight</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                    <span>100% Financial Transparency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                    <span>Estidama Green Compliance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                    <span>Dedicated Portfolio Advisory</span>
                  </div>
                </div>

                <div className="why-reveal pt-2">
                  <Link
                    href="/why-choose-us"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-black text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 shadow-sm group"
                  >
                    <span>Explore Why Choose Us</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

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
