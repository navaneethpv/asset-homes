"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SubAsset {
  name: string;
  location: string;
  image: string;
}

export default function AssetShowcase() {
  const assets: SubAsset[] = [
    {
      name: "Saadiyat Beach Villas",
      location: "Saadiyat Island, Abu Dhabi",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Al Reem Waterfront Towers",
      location: "Al Reem Island, Abu Dhabi",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Yas Marina Commercial Hub",
      location: "Yas Island, Abu Dhabi",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <section id="portfolio" className="bg-brand-cream py-20 sm:py-24 lg:py-32">
      <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
            Portfolio Showcase
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-7xl font-medium tracking-tight text-brand-black leading-tight">
            Assets Under <span className="text-brand-gold italic">Stewardship</span>
          </h2>
        </div>

        {/* Feature Signature Asset (Big Banner) */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] overflow-hidden shadow-xl mb-16 bg-brand-beige group">
          <Image
            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=1200"
            alt="The Signature Tower on Abu Dhabi Corniche"
            fill
            className="object-cover transform group-hover:scale-102 transition-transform duration-[2000ms] ease-out will-change-transform"
            sizes="100vw"
          />
          {/* Subtle linear overlay to guarantee excellent text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/35 to-transparent" />

          {/* Integrated Text Overlay (No Box) */}
          <div className="absolute bottom-8 left-8 right-8 sm:bottom-12 sm:left-12 max-w-xl text-brand-cream">
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
              Signature Asset
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 leading-tight">
              The Corniche Tower
            </h3>
            <p className="text-xs sm:text-sm font-sans font-light text-brand-cream/80 leading-relaxed mb-6">
              A premium 65-story mixed-use waterfront skyscraper overlooking the Abu Dhabi Arabian Gulf. Full leasehold operations, preventative maintenance, and five-star concierge services.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 group/link text-[10px] font-sans font-bold tracking-widest text-brand-gold hover:text-brand-gold-dark uppercase transition-colors duration-300"
            >
              <span>Consult portfolio options</span>
              <div className="flex items-center">
                <div className="w-12 h-px bg-brand-gold/60 group-hover/link:w-16 transition-all duration-300" />
                <span className="text-[10px] -ml-px transition-transform duration-300 group-hover/link:translate-x-1.5">→</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Multi-column minor showcases (Staggered layout on larger screens) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-24">
          {assets.map((asset, idx) => (
            <div
              key={asset.name}
              className={`group flex flex-col bg-transparent transition-all duration-300 ${
                idx === 1 ? "md:translate-y-10" : ""
              }`}
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-brand-beige mb-6 shadow-md">
                <Image
                  src={asset.image}
                  alt={asset.name}
                  fill
                  className="object-cover transform group-hover:scale-103 transition-transform duration-[1200ms] ease-out will-change-transform"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
              <div className="px-1">
                <span className="text-[9px] font-sans font-bold text-brand-gold uppercase tracking-[0.2em] mb-2 block">
                  {asset.location}
                </span>
                <h4 className="font-serif text-lg sm:text-xl font-medium text-brand-black mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  {asset.name}
                </h4>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 group/link text-[9px] font-sans font-bold tracking-widest text-brand-gold hover:text-brand-gold-dark uppercase transition-colors duration-300"
                >
                  <span>Explore Asset</span>
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View Complete Gallery CTA Button */}
        <div className="mt-16 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-brand-gold text-brand-black hover:bg-brand-black hover:text-brand-cream hover:border-brand-black text-xs font-sans font-semibold tracking-widest uppercase transition-all duration-300 shadow-xs"
          >
            Explore Complete Gallery
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
