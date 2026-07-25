"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      // Show button once user scrolls past hero threshold (~400px or ~60% viewport height)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 p-3 sm:p-3.5 bg-brand-black/90 backdrop-blur-md text-brand-cream border border-brand-gold/40 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-500 shadow-2xl group flex items-center gap-2 rounded-full cursor-pointer ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
          : "opacity-0 translate-y-6 pointer-events-none scale-90"
      }`}
    >
      <ArrowUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 group-hover:-translate-y-1" />
      <span className="hidden sm:inline text-[10px] font-sans font-bold tracking-widest uppercase pr-1">
        TOP
      </span>
    </button>
  );
}
