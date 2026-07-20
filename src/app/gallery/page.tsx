"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  galleryData,
  heroData,
  introData,
  spotlightData,
  ctaData
} from "@/data/galleryData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GalleryPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);

  const spotlightSectionRef = useRef<HTMLDivElement>(null);
  const spotlightImageWrapperRef = useRef<HTMLDivElement>(null);
  const spotlightImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text reveals
      const revealElements = document.querySelectorAll(".gt-reveal");
      revealElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      // 1b. Fast Gallery Cards Reveal (No delay)
      const cardElements = document.querySelectorAll(".gallery-card-reveal");
      gsap.fromTo(
        cardElements,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#gallery-grid",
            start: "top 92%",
            toggleActions: "play none none none"
          }
        }
      );

      // 2. Hero Background Image Parallax
      const heroSection = heroSectionRef.current;
      const heroImage = heroImageRef.current;
      if (heroSection && heroImage) {
        gsap.fromTo(
          heroImage,
          { yPercent: 0, scale: 1.05 },
          {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: heroSection,
              start: "top top",
              end: "bottom top",
              scrub: true
            }
          }
        );
      }

      // 3. Spotlight Image Clip-Path reveal
      const spotlightSection = spotlightSectionRef.current;
      const spotlightImageWrapper = spotlightImageWrapperRef.current;
      const spotlightImage = spotlightImageRef.current;

      if (spotlightSection && spotlightImageWrapper && spotlightImage) {
        gsap.timeline({
          scrollTrigger: {
            trigger: spotlightSection,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        })
        .fromTo(
          spotlightImageWrapper,
          { clipPath: "inset(0% 100% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "power4.inOut" }
        )
        .fromTo(
          spotlightImage,
          { scale: 1.12 },
          { scale: 1.0, duration: 1.8, ease: "power3.out" },
          "-=1.2"
        );
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pageRef}
      className="bg-brand-cream text-brand-charcoal selection:bg-brand-gold/30 selection:text-brand-black antialiased overflow-x-hidden"
    >
      <Navbar />

      {/* =========================================================================
          HERO — High-Impact Architectural Photography & Editorial Copy
          ========================================================================= */}
      <section
        ref={heroSectionRef}
        className="relative min-h-[550px] sm:min-h-[600px] lg:min-h-[680px] w-full flex flex-col justify-between pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 border-b border-brand-gold/15 overflow-hidden"
      >
        {/* Full-screen Background Photography */}
        <Image
          ref={heroImageRef}
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600"
          alt="Curated Luxury Real Estate Architecture in Abu Dhabi"
          fill
          className="object-cover object-center pointer-events-none z-0 scale-[1.05]"
          priority
        />
        {/* Dark Editorial Overlay */}
        <div className="absolute inset-0 bg-brand-black/88 backdrop-blur-[2px] z-10" />

        {/* Top-Left Breadcrumb */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-2 sm:pt-4">
          <Breadcrumb items={[{ label: "Gallery" }]} />
        </div>

        {/* Hero Copy */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 my-auto py-6 sm:py-10 lg:py-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="gt-reveal text-[9px] sm:text-xs font-sans font-bold tracking-[0.2em] sm:tracking-[0.3em] text-brand-gold uppercase mb-3 sm:mb-6 block">
              {heroData.eyebrow}
            </span>

            <h1 className="gt-reveal font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-white mb-3 sm:mb-4 lg:mb-6 leading-[1.15] sm:leading-[1.1]">
              {heroData.titleLine1} <br className="hidden sm:inline" />
              <span className="text-brand-gold italic">{heroData.titleHighlight}</span>
            </h1>

            <p className="gt-reveal text-brand-cream/80 text-xs sm:text-base lg:text-xl font-sans font-light leading-relaxed max-w-2xl mb-6 sm:mb-10 mx-auto">
              {heroData.description}
            </p>

            <div className="gt-reveal flex flex-wrap items-center justify-center gap-4">
              <a
                href="#gallery-grid"
                className="inline-flex items-center gap-2.5 sm:gap-3 px-5 py-3 sm:px-8 sm:py-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-black text-[10px] sm:text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 shadow-xl group"
              >
                <span>{heroData.ctaText}</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EDITORIAL INTRODUCTION — Quote & Narrative
          ========================================================================= */}
      <section className="py-8 sm:py-12 lg:py-16 bg-brand-cream border-b border-brand-gold/15">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <span className="gt-reveal text-[9px] sm:text-xs font-sans font-bold tracking-[0.2em] sm:tracking-[0.25em] text-brand-gold uppercase mb-4 sm:mb-6 block">
              {introData.eyebrow}
            </span>

            <h2 className="gt-reveal font-serif text-xl sm:text-2xl lg:text-3xl font-normal tracking-tight text-brand-black leading-snug mb-3 sm:mb-5">
              {introData.quote}
            </h2>

            <p className="gt-reveal text-brand-charcoal-light text-xs sm:text-base lg:text-lg font-sans font-light leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-10">
              {introData.description}
            </p>

            <div className="gt-reveal h-px w-full max-w-xs sm:max-w-md bg-brand-gold/30 mx-auto" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          EDITORIAL GALLERY GRID — Clean Unfiltered Portfolio Showcase
          ========================================================================= */}
      <section id="gallery-grid" className="py-8 sm:py-14 lg:py-18 bg-brand-beige border-b border-brand-gold/15">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {galleryData.map((prop) => (
              <div
                key={prop.id}
                className="gallery-card-reveal group flex flex-col bg-brand-cream border border-brand-gold/20 shadow-sm hover:shadow-xl transition-all duration-500 rounded-tr-[20px] sm:rounded-tr-[28px] overflow-hidden"
              >
                {/* Image container with top-right curve */}
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-brand-beige border-b border-brand-gold/20">
                  <Image
                    src={prop.image}
                    alt={prop.name}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-brand-black/85 backdrop-blur-xs text-brand-gold text-[8px] sm:text-[9px] font-sans font-bold tracking-widest uppercase px-2.5 py-1 sm:px-3 sm:py-1.5 border border-brand-gold/30 shadow-md">
                    {prop.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col grow justify-between">
                  <div>
                    <span className="text-[8px] sm:text-[9px] font-sans font-bold tracking-[0.15em] sm:tracking-[0.2em] text-brand-gold uppercase block mb-1 sm:mb-1.5">
                      {prop.location}
                    </span>

                    <h3 className="font-serif text-base sm:text-lg lg:text-xl font-medium text-brand-black mb-1.5 sm:mb-2 group-hover:text-brand-gold transition-colors duration-300">
                      {prop.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-sans font-light text-brand-charcoal-light leading-relaxed mb-4 sm:mb-6">
                      {prop.description}
                    </p>
                  </div>

                  {/* Feature micro-specs */}
                  <div className="pt-3 sm:pt-4 border-t border-brand-gold/15 flex flex-wrap gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] font-sans text-brand-charcoal font-medium">
                    {prop.specs.map((spec) => (
                      <span
                        key={spec}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-brand-beige/80 border border-brand-gold/20 text-brand-charcoal"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SIGNATURE SPOTLIGHT SECTION — Large Architectural Feature
          ========================================================================= */}
      <section ref={spotlightSectionRef} className="py-10 sm:py-16 lg:py-20 bg-brand-cream border-b border-brand-gold/15 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image with clipPath reveal */}
            <div className="lg:col-span-6">
              <div
                ref={spotlightImageWrapperRef}
                className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden border border-brand-gold/30 shadow-2xl rounded-tr-[24px] sm:rounded-tr-[32px]"
                style={{ clipPath: "inset(0% 100% 0% 0%)" }}
              >
                <Image
                  ref={spotlightImageRef}
                  src={spotlightData.image}
                  alt="Luxury Villa Architectural Detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right Column: Editorial Spotlight Content */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <span className="gt-reveal text-[9px] sm:text-[10px] font-sans font-bold tracking-[0.2em] sm:tracking-[0.25em] text-brand-gold uppercase block">
                {spotlightData.eyebrow}
              </span>

              <h2 className="gt-reveal font-serif text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-brand-black leading-tight">
                {spotlightData.titleLine1} <br />
                <span className="text-brand-gold italic">{spotlightData.titleHighlight}</span>
              </h2>

              <p className="gt-reveal text-brand-charcoal-light text-xs sm:text-base font-sans font-light leading-relaxed">
                {spotlightData.description}
              </p>

              <div className="gt-reveal pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2.5 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-brand-gold hover:bg-brand-black hover:text-brand-cream text-brand-black text-[10px] sm:text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 shadow-md group"
                >
                  <span>{spotlightData.buttonText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          CINEMATIC CLOSING CTA — Matching About Us & Services Page
          ========================================================================= */}
      <section className="relative z-50 bg-brand-black text-brand-cream py-12 sm:py-16 lg:py-24 border-t border-brand-gold/15 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 text-center relative z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <span className="gt-reveal text-[9px] sm:text-xs font-sans font-bold tracking-[0.2em] sm:tracking-[0.3em] text-brand-gold uppercase mb-3 sm:mb-6 block">
              {ctaData.eyebrow}
            </span>

            <h2 className="gt-reveal font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-white mb-3 sm:mb-5 leading-tight">
              {ctaData.titlePrefix} <span className="text-brand-gold italic">{ctaData.titleHighlight}</span>
            </h2>

            <p className="gt-reveal text-brand-cream/75 text-xs sm:text-base lg:text-lg font-sans font-light leading-relaxed mb-6 sm:mb-10 lg:mb-12 max-w-xl">
              {ctaData.description}
            </p>

            <div className="gt-reveal">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-10 py-3.5 sm:py-5 bg-brand-gold hover:bg-brand-gold-dark text-brand-black text-[10px] sm:text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 shadow-2xl group"
              >
                <span>{ctaData.buttonText}</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
