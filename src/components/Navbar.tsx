"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Heritage", href: "#heritage" },
    { name: "Methodology", href: "#methodology" },
    { name: "Insights", href: "#insights" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-gold/10 bg-brand-cream/80 backdrop-blur-md transition-colors duration-300">
      <div className="w-full flex h-24 items-center justify-between px-6 sm:px-12 lg:px-20 xl:px-32">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Asset Homes Property Management Logo"
            width={180}
            height={100}
            className="h-18 w-auto object-contain brightness-0"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-sans font-medium tracking-wide text-brand-charcoal hover:text-brand-gold transition-colors duration-300 group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-black text-brand-cream hover:bg-brand-gold hover:text-brand-black text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-300"
          >
            Schedule Consultation
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2 text-brand-charcoal hover:text-brand-gold focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-brand-gold/15 bg-brand-beige overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-6 sm:px-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-sans font-medium tracking-wide text-brand-charcoal hover:text-brand-gold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-brand-gold/10">
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
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
