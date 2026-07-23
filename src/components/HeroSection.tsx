"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const stats = [
    { value: "15+", label: "Years of Experience" },
    { value: "100%", label: "Asset Protection Alignment" },
    { value: "UAE", label: "Abu Dhabi & Al Ain Presence" },
    { value: "21st Century", label: "Property & Infrastructure Management" },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. ENTRANCE ANIMATIONS
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".hero-eyebrow",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
      .to(".hero-word", {
        y: "0%",
        duration: 1,
        stagger: 0.03,
        ease: "power4.out"
      }, "-=0.6")
      .fromTo(paragraphRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.7"
      )
      .fromTo(buttonContainerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.7"
      )
      .fromTo(".stat-item",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        "-=0.8"
      );

      // 2. SCROLL TRIGGER PARALLAX (Desktop)
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        if (imageRef.current && sectionRef.current) {
          gsap.to(imageRef.current, {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            }
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[680px] sm:min-h-[720px] lg:min-h-[820px] w-full flex flex-col justify-between pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 border-b border-brand-gold/20 overflow-hidden bg-brand-black"
    >
      {/* Background Photography */}
      <Image
        ref={imageRef}
        src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=2000"
        alt="Abu Dhabi luxury architecture and skyline"
        fill
        priority
        className="object-cover object-center pointer-events-none z-0 scale-[1.05]"
        sizes="100vw"
      />

      {/* Dark Base Overlay */}
      <div className="absolute inset-0 bg-brand-black/85 backdrop-blur-[1.5px] z-10" />

      {/* Yellow / Gold Warm Tint Accent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-brand-gold/25 to-brand-black/95 z-10 pointer-events-none" />

      {/* Main Centered Content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 my-auto text-center flex flex-col items-center">
        <span className="hero-eyebrow text-xs sm:text-sm font-sans font-bold tracking-[0.3em] text-brand-gold uppercase mb-4 opacity-0 block">
          Asset Homes Property Management LLC
        </span>

        <h1
          ref={headlineRef}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.12] mb-6 max-w-4xl"
        >
          {splitText("Your Premier Real Estate Professional")}
        </h1>

        <p
          ref={paragraphRef}
          className="text-brand-cream/85 text-sm sm:text-base lg:text-lg font-sans font-light leading-relaxed max-w-2xl mb-8 mx-auto opacity-0"
        >
          Our mission is to bring property and infrastructure management into the 21st Century by aligning the interests of company and client through attentive service, asset protection, and maximizing property value.
        </p>

        <div
          ref={buttonContainerRef}
          className="flex flex-wrap items-center justify-center gap-4 mb-12 opacity-0"
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-black hover:bg-brand-gold-dark text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 shadow-xl"
          >
            Our Services
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-brand-cream/40 text-brand-cream hover:border-brand-gold hover:text-brand-gold text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 group/btn"
          >
            <span>Explore Portfolio</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>

        {/* Centered Stats Strip */}
        <div className="w-full border-t border-brand-gold/25 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="stat-item flex flex-col items-center opacity-0 px-2"
              >
                <span className="font-serif text-2xl sm:text-4xl font-semibold text-brand-gold tracking-tight mb-1">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-wider text-brand-cream/70 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple text split utility
const splitText = (text: string) => {
  return text.split(" ").map((word, i) => (
    <span key={i} className="inline-block overflow-hidden py-0.5 mr-2 sm:mr-3">
      <span className="hero-word inline-block transform translate-y-[110%] font-serif">
        {word}
      </span>
    </span>
  ));
};
