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
  servicesData,
  heroData,
  introData,
  ctaData
} from "@/data/servicesData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stackWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text reveals for Hero and Intro
      const revealElements = document.querySelectorAll(".st-reveal");
      revealElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      // 2. Responsive GSAP MatchMedia for Desktop Pinned Stack vs Mobile Scroll Flow
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".service-card");

        cards.forEach((card, index) => {
          // Pin each card on desktop viewports
          if (index < cards.length - 1) {
            ScrollTrigger.create({
              trigger: card,
              start: "top top",
              endTrigger: cards[cards.length - 1],
              end: "top top",
              pin: true,
              pinSpacing: false,
              scrub: true
            });

            // Depth scaling animation on previous pinned card
            const nextCard = cards[index + 1];
            const innerContent = card.querySelector(".service-inner-wrapper");

            if (innerContent) {
              gsap.to(innerContent, {
                scale: 0.93,
                opacity: 0.3,
                transformOrigin: "center top",
                ease: "none",
                scrollTrigger: {
                  trigger: nextCard,
                  start: "top bottom",
                  end: "top top",
                  scrub: true
                }
              });
            }
          }

          // Image scale parallax
          const bgImg = card.querySelector(".service-feature-img");
          if (bgImg) {
            gsap.fromTo(
              bgImg,
              { scale: 1.1 },
              {
                scale: 1.0,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true
                }
              }
            );
          }

          // Staggered text entrance
          const textElements = card.querySelectorAll(".service-text-item");
          if (textElements.length > 0) {
            gsap.fromTo(
              textElements,
              { opacity: 0, y: 35 },
              {
                opacity: 1,
                y: 0,
                duration: 1.0,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 65%",
                  toggleActions: "play none none none"
                }
              }
            );
          }
        });
      });

      // Mobile / Tablet reveal triggers
      mm.add("(max-width: 1023px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".service-card");
        cards.forEach((card) => {
          const textElements = card.querySelectorAll(".service-text-item");
          if (textElements.length > 0) {
            gsap.fromTo(
              textElements,
              { opacity: 0, y: 25 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 80%",
                  toggleActions: "play none none none"
                }
              }
            );
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-brand-cream text-brand-charcoal selection:bg-brand-gold/30 selection:text-brand-black antialiased overflow-x-hidden"
    >
      <Navbar />

      {/* =========================================================================
          HERO — Responsive Hero with fixed mobile navbar clearance
          ========================================================================= */}
      <section className="relative min-h-[90vh] lg:h-screen w-full flex flex-col justify-between pt-28 pb-12 sm:pb-16 lg:pt-28 lg:pb-20 border-b border-brand-gold/15 overflow-hidden">
        {/* Full-screen Background Photography */}
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury architectural property managed by Asset Homes"
          fill
          className="object-cover object-center pointer-events-none z-0 scale-[1.05]"
          priority
        />
        {/* Dark Editorial Overlay */}
        <div className="absolute inset-0 bg-brand-black/85 backdrop-blur-[1px] z-10" />

        {/* Top-Left Breadcrumb */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-2 sm:pt-4">
          <Breadcrumb items={[{ label: "Services" }]} />
        </div>

        {/* Hero Copy */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 my-auto py-8 sm:py-12">
          <div className="max-w-4xl">
            <span className="st-reveal text-[10px] sm:text-xs font-sans font-bold tracking-[0.25em] sm:tracking-[0.3em] text-brand-gold uppercase mb-4 sm:mb-6 block">
              {heroData.eyebrow}
            </span>

            <h1 className="st-reveal font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white mb-6 sm:mb-8 leading-[1.1]">
              {heroData.titleLine1} <br className="hidden sm:inline" />
              <span className="text-brand-gold italic">{heroData.titleHighlight}</span>
            </h1>

            <p className="st-reveal text-brand-cream/80 text-sm sm:text-lg lg:text-xl font-sans font-light leading-relaxed max-w-xl mb-8 sm:mb-10">
              {heroData.description}
            </p>

            <div className="st-reveal">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-black text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 shadow-xl group"
              >
                <span>{heroData.ctaText}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EDITORIAL INTRODUCTION — Responsive typography & spacing
          ========================================================================= */}
      <section className="py-20 sm:py-32 lg:py-48 bg-brand-cream border-b border-brand-gold/15">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto text-left">
            <span className="st-reveal text-[10px] sm:text-xs font-sans font-bold tracking-[0.2em] sm:tracking-[0.25em] text-brand-gold uppercase mb-6 block">
              {introData.eyebrow}
            </span>

            <h2 className="st-reveal font-serif text-2xl sm:text-4xl lg:text-6xl font-normal tracking-tight text-brand-black leading-tight sm:leading-snug mb-8 sm:mb-10">
              {introData.quote}
            </h2>

            <p className="st-reveal text-brand-charcoal-light text-xs sm:text-base lg:text-lg font-sans font-light leading-relaxed max-w-2xl mb-8 sm:mb-12">
              {introData.description}
            </p>

            <div className="st-reveal h-px w-full max-w-xl bg-brand-gold/25" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          GSAP SCROLLTRIGGER STACKED SERVICE SPREADS (RESPONSIVE FOR MOBILE & DESKTOP)
          ========================================================================= */}
      <div ref={stackWrapperRef} className="relative w-full">
        {servicesData.map((service, idx) => {
          const isEven = idx % 2 === 0;
          const bgThemeClass = isEven ? "bg-brand-cream" : "bg-brand-beige";

          return (
            <div
              key={service.id}
              id={service.id}
              className={`service-card relative min-h-screen lg:h-screen w-full overflow-hidden ${bgThemeClass} border-t border-brand-gold/25 shadow-2xl flex flex-col justify-between`}
              style={{ zIndex: idx + 1 }}
            >
              {/* Inner wrapper for responsive height and GSAP scaling */}
              <div className={`service-inner-wrapper min-h-full w-full flex flex-col justify-between relative ${bgThemeClass} text-brand-black p-4 sm:p-8 lg:p-14`}>
                
                {/* Top Label & Progress Header */}
                <div className="relative z-20 w-full flex justify-between items-center border-b border-brand-gold/25 pb-3 sm:pb-4 mb-4 sm:mb-6 lg:mb-0">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-xs sm:text-sm font-serif font-bold text-brand-gold">
                      {service.number}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-sans font-bold tracking-[0.2em] sm:tracking-[0.3em] text-brand-gold uppercase">
                      Portfolio Stewardship &bull; {service.number}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-sans text-brand-charcoal-light tracking-widest uppercase hidden sm:inline">
                    Asset Homes LLC
                  </span>
                </div>

                {/* Main Split-Screen Service Spread Container */}
                <div className="relative z-20 w-full my-auto py-2 sm:py-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center">
                    
                    {/* Architectural Feature Image Container */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden border border-brand-gold/30 shadow-xl group">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="service-feature-img object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 45vw"
                        />
                      </div>
                    </div>

                    {/* Editorial Content Column */}
                    <div
                      className={`lg:col-span-6 space-y-4 sm:space-y-6 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div>
                        <span className="service-text-item text-[9px] sm:text-[10px] font-sans font-bold tracking-[0.2em] sm:tracking-[0.25em] text-brand-gold uppercase block mb-2 sm:mb-3">
                          {service.subtitle}
                        </span>

                        <h2 className="service-text-item font-serif text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-black leading-tight mb-3 sm:mb-4">
                          {service.title}
                        </h2>
                      </div>

                      <p className="service-text-item text-brand-charcoal-light text-xs sm:text-sm font-sans font-light leading-relaxed">
                        {service.description}
                      </p>

                      {/* Clean Minimal Bullet Details */}
                      <div className="service-text-item grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 py-3 sm:py-4 border-y border-brand-gold/20">
                        {service.details.map((detail) => (
                          <div key={detail} className="flex items-start gap-2 text-[11px] sm:text-xs font-sans text-brand-charcoal leading-snug">
                            <span className="text-brand-gold font-bold">&mdash;</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>

                      <div className="service-text-item pt-1 sm:pt-2">
                        <Link
                          href="/#contact"
                          className="inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-gold hover:bg-brand-black hover:text-brand-cream text-brand-black text-[11px] sm:text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 shadow-md group"
                        >
                          <span>Enquire About Service</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Bottom Footer Bar within Viewport */}
                <div className="relative z-20 w-full flex justify-between items-center text-[9px] sm:text-[10px] font-sans text-brand-charcoal-light tracking-widest uppercase border-t border-brand-gold/20 pt-3 sm:pt-4 mt-4 sm:mt-6 lg:mt-0">
                  <span>
                    {service.number} / {String(servicesData.length).padStart(2, "0")}
                  </span>
                  <span>Scroll for next offering</span>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* =========================================================================
          FINAL CTA — Responsive dark cinematic ending section
          ========================================================================= */}
      <section className="relative z-50 bg-brand-black text-brand-cream py-20 sm:py-32 lg:py-44 border-t border-brand-gold/15 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 text-center relative z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <span className="st-reveal text-[10px] sm:text-xs font-sans font-bold tracking-[0.25em] sm:tracking-[0.3em] text-brand-gold uppercase mb-4 sm:mb-6 block">
              {ctaData.eyebrow}
            </span>

            <h2 className="st-reveal font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6 sm:mb-8 leading-tight">
              {ctaData.titlePrefix} <span className="text-brand-gold italic">{ctaData.titleHighlight}</span>?
            </h2>

            <p className="st-reveal text-brand-cream/75 text-xs sm:text-base lg:text-lg font-sans font-light leading-relaxed mb-8 sm:mb-12 max-w-xl">
              {ctaData.description}
            </p>

            <div className="st-reveal">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-10 py-4 sm:py-5 bg-brand-gold hover:bg-brand-gold-dark text-brand-black text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 shadow-2xl group"
              >
                <span>{ctaData.buttonText}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
