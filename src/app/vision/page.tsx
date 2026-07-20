"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Cpu, Sparkles, Shield, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  heroData,
  manifestoData,
  visionPillars,
  horizonGoals,
  spotlightData,
  ctaData
} from "@/data/visionData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap = {
  Cpu,
  Sparkles,
  Shield,
  TrendingUp,
};

export default function VisionPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);

  const manifestoImageWrapperRef = useRef<HTMLDivElement>(null);
  const manifestoImageRef = useRef<HTMLImageElement>(null);

  const spotlightSectionRef = useRef<HTMLDivElement>(null);
  const spotlightImageWrapperRef = useRef<HTMLDivElement>(null);
  const spotlightImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text reveals
      const revealElements = document.querySelectorAll(".v-reveal");
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

      // 2. Hero Image Parallax
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

      // 3. Manifesto Image clipPath reveal
      const manifestoImageWrapper = manifestoImageWrapperRef.current;
      const manifestoImage = manifestoImageRef.current;
      if (manifestoImageWrapper && manifestoImage) {
        gsap.timeline({
          scrollTrigger: {
            trigger: manifestoImageWrapper,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        })
        .fromTo(
          manifestoImageWrapper,
          { clipPath: "inset(0% 100% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "power4.inOut" }
        )
        .fromTo(
          manifestoImage,
          { scale: 1.12 },
          { scale: 1.0, duration: 1.8, ease: "power3.out" },
          "-=1.2"
        );
      }

      // 4. Spotlight Image clipPath reveal
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
          HERO SECTION — Strategic Vision & Horizon Photography
          ========================================================================= */}
      <section
        ref={heroSectionRef}
        className="relative min-h-[50vh] sm:min-h-[60vh] lg:h-[65vh] w-full flex flex-col justify-between pt-20 pb-6 sm:pt-24 sm:pb-10 lg:pt-24 lg:pb-14 border-b border-brand-gold/15 overflow-hidden"
      >
        {/* Background Photography */}
        <Image
          ref={heroImageRef}
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1600"
          alt="Future Skyline Architecture Vision"
          fill
          className="object-cover object-center pointer-events-none z-0 scale-[1.05]"
          priority
        />
        {/* Dark Editorial Overlay */}
        <div className="absolute inset-0 bg-brand-black/88 backdrop-blur-[2px] z-10" />

        {/* Top-Left Breadcrumb */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-2 sm:pt-4">
          <Breadcrumb items={[{ label: "Vision" }]} />
        </div>

        {/* Hero Copy */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 my-auto py-6 sm:py-10 lg:py-12">
          <div className="max-w-4xl text-center md:text-left">
            <span className="v-reveal text-[9px] sm:text-xs font-sans font-bold tracking-[0.2em] sm:tracking-[0.3em] text-brand-gold uppercase mb-3 sm:mb-6 block">
              {heroData.eyebrow}
            </span>

            <h1 className="v-reveal font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-white mb-3 sm:mb-4 lg:mb-6 leading-[1.15] sm:leading-[1.1]">
              {heroData.titleLine1} <br className="hidden sm:inline" />
              <span className="text-brand-gold italic">{heroData.titleHighlight}</span>
            </h1>

            <p className="v-reveal text-brand-cream/80 text-xs sm:text-sm lg:text-base font-sans font-light leading-relaxed max-w-xl mb-4 sm:mb-6 mx-auto md:mx-0">
              {heroData.description}
            </p>

            <div className="v-reveal flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a
                href="#manifesto"
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
          MANIFESTO — Purpose & Core Philosophy
          ========================================================================= */}
      <section id="manifesto" className="py-10 sm:py-16 lg:py-20 bg-brand-cream border-b border-brand-gold/15 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Manifesto Narrative */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6 order-2 lg:order-1">
              <span className="v-reveal text-[9px] sm:text-xs font-sans font-bold tracking-[0.2em] sm:tracking-[0.25em] text-brand-gold uppercase block">
                {manifestoData.eyebrow}
              </span>

              <h2 className="v-reveal font-serif text-xl sm:text-2xl lg:text-3xl font-normal tracking-tight text-brand-black leading-snug">
                {manifestoData.title}
              </h2>

              <div className="v-reveal border-l-2 border-brand-gold/40 pl-4 sm:pl-6 py-1 my-4 sm:my-6">
                <p className="font-serif italic text-sm sm:text-lg text-brand-gold">
                  {manifestoData.quote}
                </p>
              </div>

              <div className="v-reveal space-y-3 sm:space-y-4 text-brand-charcoal-light text-xs sm:text-base font-sans font-light leading-relaxed">
                {manifestoData.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Right Column: Architectural Photography */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div
                ref={manifestoImageWrapperRef}
                className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden border border-brand-gold/30 shadow-2xl rounded-tr-[24px] sm:rounded-tr-[32px]"
                style={{ clipPath: "inset(0% 100% 0% 0%)" }}
              >
                <Image
                  ref={manifestoImageRef}
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200"
                  alt="Modern Architectural Engineering"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          STRATEGIC PILLARS — 4 Core Pillars of Vision
          ========================================================================= */}
      <section className="py-10 sm:py-16 lg:py-20 bg-brand-beige border-b border-brand-gold/15">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="max-w-3xl mb-8 sm:mb-12">
            <span className="v-reveal text-[9px] sm:text-xs font-sans font-bold tracking-[0.2em] sm:tracking-[0.25em] text-brand-gold uppercase mb-2 sm:mb-3 block">
              Operational Tenets
            </span>
            <h2 className="v-reveal font-serif text-xl sm:text-2xl lg:text-3xl font-normal tracking-tight text-brand-black leading-tight">
              The Four Pillars of <span className="text-brand-gold italic">Future Stewardship</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {visionPillars.map((pillar) => {
              const IconComponent = iconMap[pillar.iconName as keyof typeof iconMap] || Cpu;
              return (
                <div
                  key={pillar.id}
                  className="v-reveal relative group bg-brand-cream p-5 sm:p-6 border border-brand-gold/20 hover:border-brand-gold/40 shadow-sm hover:shadow-xl transition-all duration-500 rounded-tr-[16px] sm:rounded-tr-[20px] overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute top-2 right-4 font-serif text-4xl sm:text-5xl font-bold text-brand-gold/10 pointer-events-none select-none">
                    {pillar.number}
                  </div>
                  <div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-gold/15 border border-brand-gold/30 text-brand-gold flex items-center justify-center mb-4">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[8px] sm:text-[9px] font-sans font-bold tracking-[0.2em] text-brand-gold uppercase block mb-1">
                      {pillar.subtitle}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-medium text-brand-black mb-2 group-hover:text-brand-gold transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-sans font-light text-brand-charcoal-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          HORIZON 2030 ROADMAP — Milestones to 2030
          ========================================================================= */}
      <section className="py-10 sm:py-16 lg:py-20 bg-brand-cream border-b border-brand-gold/15">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="max-w-3xl mb-8 sm:mb-12">
            <span className="v-reveal text-[9px] sm:text-xs font-sans font-bold tracking-[0.2em] sm:tracking-[0.25em] text-brand-gold uppercase mb-2 sm:mb-3 block">
              Strategic Timeline
            </span>
            <h2 className="v-reveal font-serif text-xl sm:text-2xl lg:text-3xl font-normal tracking-tight text-brand-black leading-tight">
              Horizon <span className="text-brand-gold italic">2030 Milestones</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {horizonGoals.map((goal) => (
              <div
                key={goal.year}
                className="v-reveal bg-brand-beige/70 p-6 sm:p-8 border-t-2 border-brand-gold flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl sm:text-4xl font-light text-brand-gold">
                      {goal.year}
                    </span>
                    <span className="text-[8px] sm:text-[9px] font-sans font-bold tracking-widest uppercase bg-brand-gold/15 text-brand-gold px-2.5 py-1 border border-brand-gold/30">
                      {goal.target}
                    </span>
                  </div>

                  <h3 className="font-serif text-base sm:text-xl font-medium text-brand-black mb-2">
                    {goal.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-sans font-light text-brand-charcoal-light leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SIGNATURE SPOTLIGHT SECTION — Architectural Foresight
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
                  alt={spotlightData.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right Column: Editorial Spotlight Content */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <span className="v-reveal text-[9px] sm:text-[10px] font-sans font-bold tracking-[0.2em] sm:tracking-[0.25em] text-brand-gold uppercase block">
                {spotlightData.eyebrow}
              </span>

              <h2 className="v-reveal font-serif text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-brand-black leading-tight">
                {spotlightData.titleLine1} <br />
                <span className="text-brand-gold italic">{spotlightData.titleHighlight}</span>
              </h2>

              <p className="v-reveal text-brand-charcoal-light text-xs sm:text-base font-sans font-light leading-relaxed">
                {spotlightData.description}
              </p>

              <div className="v-reveal pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2.5 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-brand-gold hover:bg-brand-black hover:text-brand-cream text-brand-black text-[10px] sm:text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 shadow-md group"
                >
                  <span>Explore Operational Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          CINEMATIC CLOSING CTA — Matching Other Pages
          ========================================================================= */}
      <section className="relative z-50 bg-brand-black text-brand-cream py-12 sm:py-16 lg:py-24 border-t border-brand-gold/15 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 text-center relative z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <span className="v-reveal text-[9px] sm:text-xs font-sans font-bold tracking-[0.2em] sm:tracking-[0.3em] text-brand-gold uppercase mb-3 sm:mb-6 block">
              {ctaData.eyebrow}
            </span>

            <h2 className="v-reveal font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-white mb-3 sm:mb-5 leading-tight">
              {ctaData.titlePrefix} <span className="text-brand-gold italic">{ctaData.titleHighlight}</span>
            </h2>

            <p className="v-reveal text-brand-cream/75 text-xs sm:text-base lg:text-lg font-sans font-light leading-relaxed mb-6 sm:mb-10 lg:mb-12 max-w-xl">
              {ctaData.description}
            </p>

            <div className="v-reveal">
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
