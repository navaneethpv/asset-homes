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
    <section id="portfolio" className="bg-brand-cream/40 py-20 sm:py-24 lg:py-32">
      <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
            Portfolio Showcase
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-black">
            Assets Under Stewardship
          </h2>
        </div>

        {/* Feature Signature Asset (Big Banner) */}
        <div className="relative w-full aspect-21/10 sm:aspect-21/9 overflow-hidden shadow-2xl mb-12 bg-brand-beige group">
          <Image
            src="https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?auto=format&fit=crop&q=80&w=1200"
            alt="The Signature Tower on Abu Dhabi Corniche"
            fill
            className="object-cover transform group-hover:scale-103 transition-transform duration-2000 ease-out"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-brand-black/50 via-transparent to-brand-black/10" />

          {/* Overlapping Info Card */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 md:max-w-md bg-brand-black/80 backdrop-blur-md border border-brand-gold/25 p-6 sm:p-8 text-brand-cream">
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase block mb-2">
              Signature Asset
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-medium mb-3">
              The Corniche Tower
            </h3>
            <p className="text-xs sm:text-sm font-sans font-light text-brand-cream/80 leading-relaxed mb-6">
              A premium 65-story mixed-use waterfront skyscraper overlooking the Abu Dhabi Arabian Gulf. Full leasehold operations, preventative maintenance, and five-star concierge services.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1 text-xs font-sans font-bold tracking-wider text-brand-gold hover:text-brand-gold-dark uppercase transition-colors duration-300"
            >
              Consult portfolio options
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Multi-column minor showcases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {assets.map((asset) => (
            <div key={asset.name} className="group flex flex-col bg-white border border-brand-gold/10 p-3 transition-all duration-300 hover:border-brand-gold/25">
              <div className="relative aspect-4/3 w-full overflow-hidden bg-brand-beige mb-4">
                <Image
                  src={asset.image}
                  alt={asset.name}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-1200 ease-out"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
              <div className="px-1 pb-2">
                <h4 className="font-serif text-base font-semibold text-brand-black mb-1 group-hover:text-brand-gold transition-colors duration-300">
                  {asset.name}
                </h4>
                <p className="text-xs font-sans font-medium text-brand-charcoal-light uppercase tracking-wider">
                  {asset.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
