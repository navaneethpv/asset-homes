"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const leaders: TeamMember[] = [
  {
    name: "Abdul Salam Mundodan Muhammed Koya",
    role: "Managing Director",
    image: "/teams/abdul-salam-mundodan.png",
  },
  {
    name: "Midlaj",
    role: "Office Manager",
    image: "/teams/midlaj.png",
  },
  {
    name: "Haneefa Mundodan",
    role: "Administrative Manager",
    image: "/teams/haneefa.png",
  },
  {
    name: "Abdul Rasak",
    role: "HR Manager",
    image: "/teams/abdul-rasak.png",
  },
  {
    name: "Muhammed Abdul Rahman Sadak",
    role: "Accounts manager",
    image: "/teams/muhammed-abdul-rahman-sadak.png",
  },
  {
    name: "Fayis Thekkumpurathu",
    role: "Supervisor",
    image: "/teams/fayis.png",
  },
];

export default function TeamCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselTrackRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Touch / Drag swipe variables
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Update items per page based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, leaders.length - itemsPerPage);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto slide interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [handleNext, isPaused]);

  // GSAP scroll entrance trigger
  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (section) {
        gsap.fromTo(
          ".team-carousel-reveal",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Swipe handling
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
      className="py-16 sm:py-20 lg:py-24 bg-brand-cream border-t border-brand-gold/15 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <span className="team-carousel-reveal text-[10px] sm:text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-3 block">
              Leadership &amp; Execution
            </span>
            <h2 className="team-carousel-reveal font-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-brand-black leading-tight">
              The People Behind{" "}
              <span className="text-brand-gold italic">Asset Homes</span>
            </h2>
          </div>

          {/* Controls */}
          <div className="team-carousel-reveal flex items-center gap-3 self-start md:self-end">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-11 h-11 border border-brand-gold/30 hover:border-brand-gold bg-brand-beige/50 hover:bg-brand-gold hover:text-brand-black text-brand-black flex items-center justify-center transition-all duration-300 rounded-full cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-sans font-semibold tracking-wider text-brand-charcoal px-2">
              0{currentIndex + 1} / 0{maxIndex + 1}
            </span>

            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="w-11 h-11 border border-brand-gold/30 hover:border-brand-gold bg-brand-beige/50 hover:bg-brand-gold hover:text-brand-black text-brand-black flex items-center justify-center transition-all duration-300 rounded-full cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div
          className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
        >
          {/* Slider Track */}
          <div
            ref={carouselTrackRef}
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {leaders.map((member) => (
              <div
                key={member.name}
                className="shrink-0 px-2.5 sm:px-3"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <div className="group flex flex-col items-start bg-brand-beige/40 p-4 sm:p-5 border border-brand-gold/20 hover:border-brand-gold/50 transition-all duration-500 rounded-tr-[16px] h-full shadow-xs hover:shadow-lg">
                  {/* Portrait Container */}
                  <div className="relative aspect-4/5 w-full overflow-hidden bg-brand-beige mb-4 rounded-tr-[12px] border border-brand-gold/30 group-hover:border-brand-gold transition-colors duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                      className="object-cover object-top rounded-tr-[12px] transition-transform duration-700 ease-out group-hover:scale-104 select-none pointer-events-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Details */}
                  <div className="mt-auto w-full">
                    <h3 className="font-serif text-base sm:text-lg font-medium text-brand-black leading-snug group-hover:text-brand-gold transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-[9px] sm:text-[10px] font-sans font-bold tracking-widest text-brand-gold uppercase mt-1">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="team-carousel-reveal flex items-center justify-center gap-2 mt-8">
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
      </div>
    </section>
  );
}
