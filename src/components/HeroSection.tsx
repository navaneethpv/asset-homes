"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroSlide {
  id: number;
  eyebrow: string;
  headline: string;
<<<<<<< HEAD
=======
  since?: string;
>>>>>>> origin/feat
  description: string;
  image: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    eyebrow: "Asset Homes Property Management LLC",
    headline: "Your Premier Real Estate Professional",
<<<<<<< HEAD
    description: "Our mission is to bring property and infrastructure management into the 21st Century by aligning the interests of company and client through attentive service, asset protection, and maximizing property value.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=2000",
=======
    since: "since 2010",
    description:
      "Our mission is to bring property and infrastructure management into the 21st Century by aligning the interests of company and client through attentive service, asset protection, and maximizing property value.",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=2000",
>>>>>>> origin/feat
    primaryCtaText: "Our Services",
    primaryCtaHref: "/services",
    secondaryCtaText: "Explore Portfolio",
    secondaryCtaHref: "/gallery",
  },
  {
    id: 2,
    eyebrow: "15 Years of Proven Excellence",
    headline: "Protecting & Maximizing Property Value",
<<<<<<< HEAD
    description: "Delivering exceptional service and exceeding tenant expectations at every step of the transaction to preserve asset value across Abu Dhabi and Al Ain.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000",
=======
    description:
      "Delivering exceptional service and exceeding tenant expectations at every step of the transaction to preserve asset value across Abu Dhabi and Al Ain.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000",
>>>>>>> origin/feat
    primaryCtaText: "About Company",
    primaryCtaHref: "/about",
    secondaryCtaText: "Contact Us",
    secondaryCtaHref: "/contact",
  },
  {
    id: 3,
    eyebrow: "21st Century Infrastructure Care",
    headline: "Institutional-Grade Property Management",
<<<<<<< HEAD
    description: "Creating a positive impact in the real estate market while working collaboratively with industry professionals to provide quality living from a team that cares.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000",
=======
    description:
      "Creating a positive impact in the real estate market while working collaboratively with industry professionals to provide quality living from a team that cares.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000",
>>>>>>> origin/feat
    primaryCtaText: "Our Vision",
    primaryCtaHref: "/vision",
    secondaryCtaText: "Schedule Consultation",
    secondaryCtaHref: "/contact",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto 3-second slide timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [handleNext, isPaused, currentIndex]);

  const activeSlide = slides[currentIndex];

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[700px] sm:min-h-[740px] lg:min-h-[840px] w-full flex flex-col justify-between pt-28 pb-10 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16 border-b border-brand-gold/20 overflow-hidden bg-brand-black select-none"
    >
      {/* Background Photography Slider with Crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.02 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={activeSlide.image}
            alt={activeSlide.headline}
            fill
            priority
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className="object-cover object-center pointer-events-none select-none"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Light Shaded Base Overlay */}
      <div className="absolute inset-0 bg-brand-black/45 z-10 pointer-events-none" />

      {/* Warm Gold Vignette Accent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-gold/15 to-brand-black/75 z-10 pointer-events-none" />

      {/* Main Centered Content Slider */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 my-auto text-center flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col items-center w-full"
          >
            <span className="text-xs sm:text-sm font-sans font-bold tracking-[0.3em] text-brand-gold uppercase mb-4 block">
              {activeSlide.eyebrow}
            </span>
<<<<<<< HEAD
=======
            {activeSlide.since ? (
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 backdrop-blur-sm text-xs font-sans font-semibold tracking-[0.25em] text-white uppercase mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white " />
                {activeSlide.since}
              </span>
            ) : null}
>>>>>>> origin/feat

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.12] mb-6 max-w-4xl">
              {activeSlide.headline}
            </h1>

            <p className="text-brand-cream/85 text-sm sm:text-base lg:text-lg font-sans font-light leading-relaxed max-w-2xl mb-8 mx-auto">
              {activeSlide.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Link
                href={activeSlide.primaryCtaHref}
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-black hover:bg-brand-gold-dark text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 shadow-xl"
              >
                {activeSlide.primaryCtaText}
              </Link>
              <Link
                href={activeSlide.secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-brand-cream/40 text-brand-cream hover:border-brand-gold hover:text-brand-gold text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 group/btn"
              >
                <span>{activeSlide.secondaryCtaText}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Controls & 3-Second Progress Bar */}
        <div className="flex items-center justify-center gap-4 my-6 z-30">
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="w-9 h-9 rounded-full border border-brand-gold/30 hover:border-brand-gold bg-brand-black/40 hover:bg-brand-gold hover:text-brand-black text-brand-cream flex items-center justify-center transition-all duration-300 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Progress Bars for each slide */}
          <div className="flex items-center gap-2 px-2">
            {slides.map((slide, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="relative h-1.5 w-12 sm:w-16 rounded-full overflow-hidden bg-brand-cream/20 cursor-pointer"
                >
                  {isActive && (
                    <motion.div
                      key={`progress-${idx}-${isPaused}`}
                      initial={{ width: "0%" }}
                      animate={{ width: isPaused ? "100%" : "100%" }}
                      transition={{
                        duration: isPaused ? 0 : 3.0,
                        ease: "linear",
                      }}
                      className="h-full bg-brand-gold rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="w-9 h-9 rounded-full border border-brand-gold/30 hover:border-brand-gold bg-brand-black/40 hover:bg-brand-gold hover:text-brand-black text-brand-cream flex items-center justify-center transition-all duration-300 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
<<<<<<< HEAD

=======
>>>>>>> origin/feat
