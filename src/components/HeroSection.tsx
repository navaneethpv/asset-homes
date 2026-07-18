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
    { value: "AED 5B+", label: "Assets Under Management" },
    { value: "98%", label: "Client Retention Rate" },
    { value: "15k+", label: "Premium Units Managed" },
    { value: "24/7", label: "Dedicated Concierge Support" },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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
      .fromTo(imageWrapperRef.current,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
        "-=1.2"
      )
      .fromTo(".stat-item",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        "-=1"
      );

      // 2. SCROLL TRIGGER PARALLAX (Only on desktop)
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        // Headline Parallax (0.02 speed -> yPercent: 4)
        gsap.to(headlineRef.current, {
          yPercent: 4,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          }
        });

        // Paragraph Parallax
        gsap.to(paragraphRef.current, {
          yPercent: 3,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          }
        });

        // Buttons Parallax (0.01 speed -> yPercent: 2)
        gsap.to(buttonContainerRef.current, {
          yPercent: 2,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          }
        });

        // Background Parallax (0.08 speed -> yPercent: 12)
        gsap.to(bgRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          }
        });

        // Foreground Image Parallax (0.15 speed -> yPercent: 20)
        gsap.to(imageWrapperRef.current, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          }
        });

        // Floating Decorative Elements (0.05 speed -> yPercent: 10)
        gsap.to(decorRef.current, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="relative bg-brand-cream pt-10 pb-20 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-32 overflow-hidden">
      {/* Background Parallax Layer */}
      <div ref={bgRef} className="absolute inset-0 bg-[#F6F2E8]/40 pointer-events-none z-0" />
      
      {/* Floating Decorative Elements */}
      <div ref={decorRef} className="absolute top-[20%] right-[10%] w-[100px] h-[100px] border border-brand-gold/15 rounded-full pointer-events-none z-0 hidden lg:block" />

      <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32 relative z-10">
        
        {/* Main Grid: Left content, Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Text & CTAs) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="hero-eyebrow text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 opacity-0 block">
              Property Management Services
            </span>
            
            <h1 ref={headlineRef} className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-black leading-[1.1] mb-6 flex flex-wrap gap-x-2 gap-y-1">
              {splitText("Professional Property Management for Exceptional Investments")}
            </h1>
            
            <p ref={paragraphRef} className="text-brand-charcoal-light text-base sm:text-lg font-sans font-normal leading-relaxed max-w-xl mb-8 opacity-0">
              Asset Homes offers bespoke management strategies for luxury residential and premium commercial portfolios in Abu Dhabi. We bridge institutional rigor with personalized care to optimize yields and maintain architectural integrity.
            </p>
            
            <div ref={buttonContainerRef} className="flex flex-wrap gap-4 opacity-0">
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-brand-black text-brand-cream hover:bg-brand-gold hover:text-brand-black text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm"
              >
                Our Services
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center gap-1.5 px-7 py-3.5 border border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-cream text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-300 group/btn"
              >
                <span>Explore Portfolio</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </Link>
            </div>
          </div>

          {/* Right Column (Hero Image) */}
          <div className="lg:col-span-5 relative w-full h-[450px] sm:h-[550px] lg:h-[600px]">
            <div
              ref={imageWrapperRef}
              className="relative w-full h-full overflow-hidden shadow-2xl opacity-0"
            >
              <Image
                ref={imageRef}
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1200"
                alt="Abu Dhabi skyline dusk architecture"
                fill
                priority
                className="object-cover transform hover:scale-103 transition-transform duration-2000 ease-out will-change-transform"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Stats strip */}
        <div className="mt-20 lg:mt-24 border-t border-brand-gold/15 pt-8 sm:pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="stat-item flex flex-col border-l border-brand-gold/20 pl-4 sm:pl-6 opacity-0"
              >
                <span className="font-serif text-3xl sm:text-4xl font-semibold text-brand-gold tracking-tight mb-1">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-wider text-brand-charcoal-light uppercase">
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
    <span key={i} className="inline-block overflow-hidden py-0.5">
      <span className="hero-word inline-block transform translate-y-[110%] font-serif">
        {word}
      </span>
    </span>
  ));
};
