"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const lenis = useLenis();
  const pathname = usePathname();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isHash: boolean = false) => {
    if (isHash && href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.substring(2);
      lenis?.scrollTo(targetId, {
        offset: -80,
        duration: 1.2,
      });
    }
  };

  const quickLinks = [
    { name: "Home", href: "/", isHash: false },
    { name: "About Us", href: "/about", isHash: false },
    { name: "Vision", href: "/vision", isHash: false },
    { name: "Services", href: "/services", isHash: false },
    { name: "Gallery", href: "/gallery", isHash: false },
    { name: "Contact", href: "/contact", isHash: false },
  ];

  const ctaBannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const banner = ctaBannerRef.current;
      if (banner) {
        gsap.fromTo(banner,
          { scale: 0.94, opacity: 0, borderRadius: "16px" },
          {
            scale: 1,
            opacity: 1,
            borderRadius: "0px",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: banner,
              start: "top 92%",
              end: "top 65%",
              scrub: 0.5,
            }
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" className="bg-brand-black text-brand-cream border-t border-brand-gold/10 overflow-hidden">
      
      {/* Top CTA Banner with Background Image */}
      <div 
        ref={ctaBannerRef}
        className="relative w-full max-w-none py-24 sm:py-32 overflow-hidden border-b border-brand-cream/10 group origin-center opacity-0"
      >
        {/* Background Image */}
        <Image
          src="/cta_bg.png"
          alt="Luxury property heritage background"
          fill
          className="object-cover object-center transform group-hover:scale-105 transition-transform duration-10000 ease-out"
          priority
        />
        {/* Dark Cinematic Overlay */}
        <div className="absolute inset-0 bg-brand-black/85 backdrop-blur-[2px] z-10" />

        {/* Content Container (Grid layout prevents baseline clipping and guarantees correct spacing) */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-8">
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
              ADVISORY & INTAKE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
              Let’s Protect Your <span className="text-brand-gold italic">Investment</span>
            </h2>
            <p className="text-brand-cream/80 text-sm sm:text-base font-sans font-light leading-relaxed">
              Connect with our property advisors in Abu Dhabi to schedule a comprehensive portfolio review or discuss custom management plans.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-black hover:bg-brand-gold hover:text-brand-black text-[10px] font-sans font-bold tracking-widest uppercase transition-all duration-300 border border-white hover:border-brand-gold shadow-none"
            >
              Schedule Consultation
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info Grid */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Column 1: Branding */}
          <div className="flex flex-col">
            <Image
              src="/logo.png"
              alt="Asset Homes Property Management Logo"
              width={160}
              height={90}
              className="h-16 md:h-25 w-auto object-contain mb-6"
              priority
            />         
            <p className="text-xs sm:text-sm font-sans text-center font-light text-brand-cream/60 leading-relaxed">
              Property and infrastructure management across Abu Dhabi and Al Ain. Protecting asset value and delivering quality service for 15 years.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:border-l lg:border-brand-gold/20 lg:pl-5 xl:pl-8">
            <h3 className="text-xs font-sans font-bold tracking-widest text-brand-gold uppercase mb-6">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href, link.isHash)}
                    className="text-xs sm:text-sm font-sans font-normal text-brand-cream/70 hover:text-brand-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:border-l lg:border-brand-gold/20 lg:pl-5 xl:pl-8">
            <h3 className="text-xs font-sans font-bold tracking-widest text-brand-gold uppercase mb-6">
              Main Office
            </h3>
            <ul className="space-y-4 text-brand-cream/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-sans font-light leading-relaxed">
                  137th St, Plot No. 263, Central District,<br />
                  Al Kuwaitat, Al Ain, Abu Dhabi, UAE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href="tel:037636611"
                  className="text-xs sm:text-sm font-sans font-light hover:text-brand-gold transition-colors duration-300"
                >
                  037636611 / +971 507 308064
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href="mailto:assethomesalain@gmail.com"
                  className="text-xs sm:text-sm font-sans font-light hover:text-brand-gold transition-colors duration-300"
                >
                  assethomesalain@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Standards */}
          <div className="lg:border-l lg:border-brand-gold/20 lg:pl-5 xl:pl-8">
            <h3 className="text-xs font-sans font-bold tracking-widest text-brand-gold uppercase mb-6">
              Special Features
            </h3>
            <ul className="space-y-4 text-brand-cream/70 text-xs sm:text-sm">
              <li className="flex flex-col border-l border-brand-gold/20 pl-3">
                <span className="font-semibold text-brand-cream">15 Years of Experience</span>
                <span className="text-[10px] text-brand-cream/50 font-sans tracking-wide">Proven Track Record in UAE Real Estate</span>
              </li>
              <li className="flex flex-col border-l border-brand-gold/20 pl-3">
                <span className="font-semibold text-brand-cream">Exceptional Service</span>
                <span className="text-[10px] text-brand-cream/50 font-sans tracking-wide">Dedicated Property & Infrastructure Care</span>
              </li>
              <li className="flex flex-col border-l border-brand-gold/20 pl-3">
                <span className="font-semibold text-brand-cream">Industry Collaboration</span>
                <span className="text-[10px] text-brand-cream/50 font-sans tracking-wide">Working with Real Estate Professionals</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-brand-cream/5 py-8">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pr-16 sm:pr-24 lg:pr-28 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans font-light text-brand-cream/40 flex-wrap">
          <p>© {new Date().getFullYear()} Asset Homes Property Management LLC. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link href="/#contact" onClick={(e) => handleScrollTo(e, "/#contact", true)} className="hover:text-brand-gold transition-colors duration-300">Privacy Policy</Link>
            <Link href="/#contact" onClick={(e) => handleScrollTo(e, "/#contact", true)} className="hover:text-brand-gold transition-colors duration-300">Terms of Service</Link>
            <Link href="/#contact" onClick={(e) => handleScrollTo(e, "/#contact", true)} className="hover:text-brand-gold transition-colors duration-300">Regulatory Disclosures</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}

