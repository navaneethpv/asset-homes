"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const stats = [
    { value: "AED 5B+", label: "Assets Under Management" },
    { value: "98%", label: "Client Retention Rate" },
    { value: "15k+", label: "Premium Units Managed" },
    { value: "24/7", label: "Dedicated Concierge Support" },
  ];

  return (
    <section className="relative bg-brand-cream pt-10 pb-20 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-32 overflow-hidden">
      <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
        
        {/* Main Grid: Left content, Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Text & CTAs) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4"
            >
              Property Management Services
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-black leading-[1.1] mb-6"
            >
              Professional Property Management for Exceptional Investments
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-charcoal-light text-base sm:text-lg font-sans font-normal leading-relaxed max-w-xl mb-8"
            >
              Asset Homes offers bespoke management strategies for luxury residential and premium commercial portfolios in Abu Dhabi. We bridge institutional rigor with personalized care to optimize yields and maintain architectural integrity.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-brand-black text-brand-cream hover:bg-brand-gold hover:text-brand-black text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm"
              >
                Our Services
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center gap-1.5 px-7 py-3.5 border border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-cream text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-300"
              >
                Explore Portfolio
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column (Hero Image) */}
          <div className="lg:col-span-5 relative w-full h-[450px] sm:h-[550px] lg:h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full h-full overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1200"
                alt="Abu Dhabi skyline dusk architecture"
                fill
                priority
                className="object-cover transform hover:scale-105 transition-transform duration-[2000ms] ease-out"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </div>

        {/* Stats strip - positioned elegantly below the grid content */}
        <div className="mt-20 lg:mt-24 border-t border-brand-gold/15 pt-8 sm:pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="flex flex-col border-l border-brand-gold/20 pl-4 sm:pl-6"
              >
                <span className="font-serif text-3xl sm:text-4xl font-semibold text-brand-gold tracking-tight mb-1">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-wider text-brand-charcoal-light uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
