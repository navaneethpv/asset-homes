"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", isHash: false },
    { name: "About Us", href: "/about", isHash: false },
    { name: "Vision", href: "/vision", isHash: false },
    { name: "Services", href: "/services", isHash: false },
    { name: "Gallery", href: "/gallery", isHash: false },
    { name: "Contact", href: "/contact", isHash: false },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isHash: boolean = true) => {
    if (isHash && pathname === "/") {
      e.preventDefault();
      const targetId = href.startsWith("/") ? href.substring(1) : href;
      lenis?.scrollTo(targetId, {
        offset: -80,
        duration: 1.2,
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = headerRef.current;
      const logo = logoRef.current;
      const cta = ctaRef.current;
      const progress = progressRef.current;

      // Scroll Progress bar
      if (progress) {
        gsap.fromTo(
          progress,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: "body",
              start: "top top",
              end: "bottom bottom",
              scrub: 0.3,
            }
          }
        );
      }

      if (header && logo && cta) {
        gsap.timeline({
          scrollTrigger: {
            trigger: "body",
            start: "top -30",
            end: "top -120",
            scrub: 0.5,
          }
        })
        .to(header, {
          backgroundColor: "rgba(11, 12, 14, 0.92)", // Dark velvet onyx header
          borderColor: "rgba(197, 160, 89, 0.25)", // Brand gold border
          backdropFilter: "blur(12px)",
          height: "72px",
          duration: 0.5,
        })
        .to(logo, {
          scale: 0.85,
          duration: 0.5,
        }, 0)
        .to(cta, {
          backgroundColor: "#C59E4E", // Brand Gold
          color: "#0B0C0E", // Brand Black
          duration: 0.5,
        }, 0);
      }
    });

    return () => ctx.revert();
  }, []);

  // Contrast link color logic for luxury dark navbar
  const getLinkColorClass = (isActive: boolean) => {
    if (isActive) return "text-brand-gold font-semibold";
    return "text-brand-cream/90 hover:text-brand-gold";
  };

  const logoFilterClass = "brightness-0 invert";
  const mobileBtnColorClass = "text-brand-cream hover:text-brand-gold";

  return (
    <header 
      ref={headerRef} 
      className="fixed top-0 left-0 right-0 z-[100] w-full border-b border-transparent bg-transparent h-20 md:h-24 transition-all duration-300 flex items-center"
    >
      {/* Scroll Progress Indicator */}
      <div 
        ref={progressRef}
        className="absolute top-0 left-0 right-0 h-[2.5px] bg-brand-gold origin-left z-[100] pointer-events-none"
        style={{ transform: "scaleX(0)" }}
      />

      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Brand Logo Wrapper */}
        <div ref={logoRef} className="origin-left">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Asset Homes Property Management Logo"
              width={180}
              height={100}
              className={`h-14 md:h-18 w-auto object-contain transition-all duration-300 ${logoFilterClass}`}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 lg:space-x-6 xl:space-x-10">
          {navLinks.map((link) => {
            const isActive = !link.isHash && pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href, link.isHash)}
                className={`relative text-sm font-sans font-medium tracking-wide transition-colors duration-300 group py-2 ${getLinkColorClass(isActive)}`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-brand-gold transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Link
            ref={ctaRef}
            href="/contact"
            onClick={(e) => handleScrollTo(e, "/contact", false)}
            className="inline-flex items-center text-black/90  gap-1.5 px-5 py-2.5 bg-brand-gold hover:bg-brand-gold hover:text-brand-black text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-300"
          >
            Schedule Consultation
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden flex items-center justify-center p-2 focus:outline-none transition-colors duration-300 ${mobileBtnColorClass}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile & Tablet Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full border-b border-brand-gold/20 bg-brand-cream shadow-2xl overflow-hidden z-50"
          >
            <div className="flex flex-col space-y-4 px-6 py-6 sm:px-8">
              {navLinks.map((link) => {
                const isActive = !link.isHash && pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      setIsOpen(false);
                      handleScrollTo(e, link.href, link.isHash);
                    }}
                    className={`text-base font-sans font-medium tracking-wide transition-colors duration-300 ${
                      isActive ? "text-brand-gold font-semibold" : "text-brand-charcoal hover:text-brand-gold"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-brand-gold/10">
                <Link
                  href="/contact"
                  onClick={(e) => {
                    setIsOpen(false);
                    handleScrollTo(e, "/contact", false);
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-brand-black text-brand-cream hover:bg-brand-gold hover:text-brand-black text-sm font-sans font-semibold tracking-wider uppercase transition-all duration-300"
                >
                  Schedule Consultation
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
