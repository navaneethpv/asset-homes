"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Property {
  id: string;
  name: string;
  category: "Residential" | "Commercial" | "Waterfront";
  location: string;
  image: string;
  description: string;
}

export default function GalleryPage() {
  const [filter, setFilter] = useState<"All" | "Residential" | "Commercial" | "Waterfront">("All");

  const properties: Property[] = [
    {
      id: "corniche",
      name: "The Corniche Tower",
      category: "Waterfront",
      location: "Al Bateen, Abu Dhabi",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800",
      description: "A landmark 65-story skyscraper with bespoke glass cladding and five-star waterfront facilities."
    },
    {
      id: "yas-marina",
      name: "Yas Marina Residences",
      category: "Waterfront",
      location: "Yas Island, Abu Dhabi",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
      description: "Luxury marina-front living spaces with automated operations and premium preventative upkeep."
    },
    {
      id: "saadiyat-villas",
      name: "Saadiyat Beach Estates",
      category: "Residential",
      location: "Saadiyat Island, Abu Dhabi",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      description: "Ultra-exclusive private beachfront residences managed with strict architectural audit routines."
    },
    {
      id: "capital-plaza",
      name: "Capital Plaza Commercial",
      category: "Commercial",
      location: "Downtown, Abu Dhabi",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      description: "High-volume institutional corporate spaces supported by MEP operations and predictive servicing."
    },
    {
      id: "reem-island",
      name: "Al Reem Heights",
      category: "Residential",
      location: "Al Reem Island, Abu Dhabi",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      description: "Premium high-rise residential apartments operating on full-ledger accounting integrations."
    },
    {
      id: "gate-district",
      name: "The Gate Business Hub",
      category: "Commercial",
      location: "Al Maryah Island, Abu Dhabi",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      description: "Sophisticated corporate business suites featuring smart energy tracking and Estidama certifications."
    }
  ];

  const filteredProperties = filter === "All" 
    ? properties 
    : properties.filter(p => p.category === filter);

  return (
    <div className="bg-brand-cream min-h-screen flex flex-col selection:bg-brand-gold selection:text-brand-black">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 border-b border-brand-gold/15">
        <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32 text-center md:text-left">
          <div className="mb-6 flex justify-start">
            <Breadcrumb items={[{ label: "Gallery" }]} />
          </div>

          <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
            Stewardship Portfolio
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-black mb-6 max-w-4xl leading-tight">
            Curated Assets <span className="text-brand-gold italic">Gallery</span>
          </h1>
          <p className="text-brand-charcoal-light text-base sm:text-lg font-sans leading-relaxed max-w-2xl font-light">
            An editorial look at signature residential, commercial, and waterfront landmarks under active Asset Homes management.
          </p>
        </div>
      </section>

      {/* Interactive Gallery */}
      <section className="py-16 sm:py-24">
        <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
          
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-16 border-b border-brand-gold/10 pb-6">
            {(["All", "Residential", "Commercial", "Waterfront"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 text-[10px] font-sans font-bold tracking-widest uppercase transition-all duration-300 ${
                  filter === cat
                    ? "bg-brand-black text-brand-cream border border-brand-black"
                    : "text-brand-charcoal hover:text-brand-gold bg-transparent border border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProperties.map((prop) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  key={prop.id}
                  className="group flex flex-col bg-transparent"
                >
                  {/* Image container with top-right curve */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-brand-beige mb-5 rounded-tr-[24px] shadow-sm">
                    <Image
                      src={prop.image}
                      alt={prop.name}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                    <div className="absolute top-4 left-4 bg-brand-black/75 backdrop-blur-xs text-brand-gold text-[9px] font-sans font-bold tracking-widest uppercase px-3 py-1.5 border border-brand-gold/20">
                      {prop.category}
                    </div>
                  </div>

                  <div className="px-1">
                    <h3 className="font-serif text-lg font-semibold text-brand-black mb-1 group-hover:text-brand-gold transition-colors duration-300">
                      {prop.name}
                    </h3>
                    <p className="text-[10px] font-sans font-bold tracking-wider text-brand-gold uppercase mb-3">
                      {prop.location}
                    </p>
                    <p className="text-xs sm:text-sm font-sans font-light text-brand-charcoal-light leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Review Banner */}
      <section className="bg-brand-beige py-24 sm:py-32 border-t border-brand-gold/15">
        <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-6 block">
              Investment Review
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-black mb-6">
              Maximize Your Property’s <span className="text-brand-gold italic">Valuation</span>
            </h2>
            <p className="text-brand-charcoal-light text-sm sm:text-base font-sans font-light leading-relaxed mb-10">
              Submit your property address or developer prospectus to receive a detailed compliance and operations feasibility audit report.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-black text-brand-cream hover:bg-brand-gold hover:text-brand-black text-[10px] font-sans font-bold tracking-widest uppercase transition-all duration-300"
            >
              Request Operations Audit
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
