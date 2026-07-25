"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  role: string;
  image: string;
  rating: number;
}

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "Asset Homes has transformed our portfolio performance. Their level of technical expertise and transparency is unmatched in the UAE. Absolute peace of mind.",
    name: "H.E. Salem Al Mansouri",
    role: "CHAIRMAN, AL MANSOURI INVESTMENTS | ABU DHABI",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Their team brings 21st-century infrastructure management to our commercial holdings. Exceeding tenant expectations and maintaining asset value at every step.",
    name: "Tariq Al Hashimi",
    role: "MANAGING DIRECTOR, CRESCENT REAL ESTATE",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "A premier real estate partner. Their dedication to maintaining quality living environments while protecting long-term capital yields is truly outstanding.",
    name: "Dr. Fatima Al Suwaidi",
    role: "PRIVATE ASSET INVESTOR | AL AIN",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "We have complete confidence in Asset Homes managing our residential developments. Perfect alignment of company and client interests through attentive service.",
    name: "Rashid Al Nuaimi",
    role: "CEO, AL NUAIMI HOLDINGS | ABU DHABI",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "Outstanding property management service. Their structured operational model and attention to detail ensure maximum asset protection for our investments.",
    name: "Sultan Al Qasimi",
    role: "PORTFOLIO OWNER | UAE",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150",
    rating: 5,
  },
  {
    id: 6,
    quote:
      "15 years of UAE experience shows in every single interaction. Asset Homes delivers institutional-grade service with a personal, highly attentive approach.",
    name: "Mariam Al Mazrouei",
    role: "EXECUTIVE DIRECTOR, HORIZON PROPERTIES",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
    rating: 5,
  },
];

export default function Testimonial() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [isPaused, setIsPaused] = useState(false);

  // Swipe gesture tracking
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Update items per page based on viewport size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hasAutoSlide = testimonials.length > 4;
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Automatic slide interval when more than 4 cards exist
  useEffect(() => {
    if (!hasAutoSlide || isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [handleNext, hasAutoSlide, isPaused, currentIndex]);

  // GSAP Entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (section) {
        gsap.fromTo(
          ".testimonial-card-reveal",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    touchStartX.current = clientX;
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    touchEndX.current = clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section
      ref={sectionRef}
      className="bg-brand-cream py-16 sm:py-20 lg:py-24 border-t border-brand-gold/15 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <span className="testimonial-card-reveal text-[10px] sm:text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-3 block">
              Client Endorsements
            </span>
            <h2 className="testimonial-card-reveal font-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-brand-black leading-tight">
              Trusted by <span className="text-brand-gold italic">Leading Investors</span>
            </h2>
          </div>

          {/* Carousel Controls */}
          {hasAutoSlide && (
            <div className="testimonial-card-reveal flex items-center gap-3 self-start md:self-end">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonials"
                className="w-10 h-10 border border-brand-gold/30 hover:border-brand-gold bg-brand-beige/50 hover:bg-brand-gold hover:text-brand-black text-brand-black flex items-center justify-center transition-all duration-300 rounded-full cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-xs font-sans font-semibold tracking-wider text-brand-charcoal px-2">
                0{currentIndex + 1} / 0{maxIndex + 1}
              </span>

              <button
                onClick={handleNext}
                aria-label="Next Testimonials"
                className="w-10 h-10 border border-brand-gold/30 hover:border-brand-gold bg-brand-beige/50 hover:bg-brand-gold hover:text-brand-black text-brand-black flex items-center justify-center transition-all duration-300 rounded-full cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Testimonials Viewport */}
        <div
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
        >
          {/* Slider Track */}
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="shrink-0 px-2 sm:px-3"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                {/* Testimonial Card (matching reference photo) */}
                <div className="testimonial-card-reveal group flex flex-col justify-between bg-[#FAF8F5] p-6 sm:p-7 border border-brand-gold/20 hover:border-brand-gold/50 shadow-xs hover:shadow-md transition-all duration-300 rounded-xl h-full">
                  <div>
                    {/* Top Quote Icon */}
                    <span className="font-serif text-4xl sm:text-5xl text-brand-gold/40 leading-none select-none block mb-1">
                      “
                    </span>

                    {/* 5-Star Rating */}
                    <div className="flex items-center gap-1 mb-4 text-brand-gold">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-brand-gold text-brand-gold"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-brand-charcoal text-xs sm:text-sm font-sans italic leading-relaxed mb-6">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author Footer Block */}
                  <div className="border-t border-brand-gold/15 pt-4 mt-auto flex items-center gap-3.5">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border border-brand-gold/30 shrink-0 bg-brand-beige">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                        className="object-cover pointer-events-none select-none"
                        sizes="50px"
                      />
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <cite className="not-italic font-serif text-sm sm:text-base font-semibold text-brand-black leading-snug truncate">
                        {item.name}
                      </cite>
                      <span className="text-[9px] sm:text-[10px] font-sans font-bold tracking-wider text-brand-gold uppercase truncate mt-0.5">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        {hasAutoSlide && (
          <div className="testimonial-card-reveal flex items-center justify-center gap-2 mt-8 sm:mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? "w-8 bg-brand-gold"
                    : "w-2 bg-brand-gold/30 hover:bg-brand-gold/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
