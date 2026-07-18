"use client";

import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Our Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Our Heritage", href: "#heritage" },
    { name: "Methodology", href: "#methodology" },
  ];

  return (
    <footer id="contact" className="bg-brand-black text-brand-cream border-t border-brand-gold/10">
      
      {/* Top CTA Banner */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 border-b border-brand-cream/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4 leading-tight">
              Let’s Protect Your Investment.
            </h2>
            <p className="text-brand-cream/70 text-sm sm:text-base font-sans font-light leading-relaxed">
              Connect with our property advisors in Abu Dhabi to schedule a comprehensive portfolio review or discuss custom management plans.
            </p>
          </div>
          <div>
            <Link
              href="mailto:advisory@assethomes.ae"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-black hover:bg-brand-gold hover:text-brand-black text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg"
            >
              Schedule Consultation
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info Grid */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Column 1: Branding */}
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-white uppercase">
              ASSET HOMES
            </span>
            <span className="text-[9px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mt-1 mb-6">
              Property Management LLC
            </span>
            <p className="text-xs sm:text-sm font-sans font-light text-brand-cream/60 leading-relaxed">
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
                <MapPin className="w-4.5 h-4.5 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-sans font-light leading-relaxed">
                  Level 14, West Corniche Tower,<br />
                  Al Bateen, Abu Dhabi, UAE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a
                  href="tel:+97121234567"
                  className="text-xs sm:text-sm font-sans font-light hover:text-brand-gold transition-colors duration-300"
                >
                  +971 (0) 2 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
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
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans font-light text-brand-cream/40">
          <p>© {new Date().getFullYear()} Asset Homes Property Management LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#contact" className="hover:text-brand-gold transition-colors duration-300">Privacy Policy</Link>
            <Link href="#contact" className="hover:text-brand-gold transition-colors duration-300">Terms of Service</Link>
            <Link href="#contact" className="hover:text-brand-gold transition-colors duration-300">Regulatory Disclosures</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
