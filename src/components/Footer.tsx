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

  const quickLinks = [
    { name: "Our Portfolio", href: "/#portfolio", isHash: true },
    { name: "Services", href: "/#services", isHash: true },
    { name: "Our Heritage", href: "/#heritage", isHash: true },
    { name: "Methodology", href: "/#methodology", isHash: true },
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
        <div className="relative z-20 w-full px-6 sm:px-12 lg:px-20 xl:px-32 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
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
              href="mailto:advisory@assethomes.ae"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-black hover:bg-brand-gold hover:text-brand-black text-[10px] font-sans font-bold tracking-widest uppercase transition-all duration-300 border border-white hover:border-brand-gold shadow-none"
            >
              Schedule Consultation
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info Grid */}
      <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32 py-16 lg:py-20">
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
              Premium, institutional-grade property lifecycle operations for real estate investors and developers across Abu Dhabi.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-sans font-bold tracking-widest text-brand-gold uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
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
          <div>
            <h3 className="text-xs font-sans font-bold tracking-widest text-brand-gold uppercase mb-6">
              Abu Dhabi Office
            </h3>
            <ul className="space-y-4 text-brand-cream/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-sans font-light leading-relaxed">
                  Level 14, West Corniche Tower,<br />
                  Al Bateen, Abu Dhabi, UAE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href="tel:+97121234567"
                  className="text-xs sm:text-sm font-sans font-light hover:text-brand-gold transition-colors duration-300"
                >
                  +971 (0) 2 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href="mailto:advisory@assethomes.ae"
                  className="text-xs sm:text-sm font-sans font-light hover:text-brand-gold transition-colors duration-300"
                >
                  advisory@assethomes.ae
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Compliance */}
          <div>
            <h3 className="text-xs font-sans font-bold tracking-widest text-brand-gold uppercase mb-6">
              Certifications
            </h3>
            <ul className="space-y-4 text-brand-cream/70 text-xs sm:text-sm">
              <li className="flex flex-col border-l border-brand-gold/20 pl-3">
                <span className="font-semibold text-brand-cream">ADM Registered</span>
                <span className="text-[10px] text-brand-cream/50 font-sans tracking-wide">Abu Dhabi Municipality Compliance</span>
              </li>
              <li className="flex flex-col border-l border-brand-gold/20 pl-3">
                <span className="font-semibold text-brand-cream">ADDC Certified</span>
                <span className="text-[10px] text-brand-cream/50 font-sans tracking-wide">Water & Energy Efficiency Standard</span>
              </li>
              <li className="flex flex-col border-l border-brand-gold/20 pl-3">
                <span className="font-semibold text-brand-cream">ESTIDAMA compliant</span>
                <span className="text-[10px] text-brand-cream/50 font-sans tracking-wide">Sustainable Operations Framework</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-brand-cream/5 py-8">
        <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans font-light text-brand-cream/40">
          <p>© {new Date().getFullYear()} Asset Homes Property Management LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/#contact" onClick={(e) => handleScrollTo(e, "/#contact", true)} className="hover:text-brand-gold transition-colors duration-300">Privacy Policy</Link>
            <Link href="/#contact" onClick={(e) => handleScrollTo(e, "/#contact", true)} className="hover:text-brand-gold transition-colors duration-300">Terms of Service</Link>
            <Link href="/#contact" onClick={(e) => handleScrollTo(e, "/#contact", true)} className="hover:text-brand-gold transition-colors duration-300">Regulatory Disclosures</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}

