"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlockProps {
  num: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

function EditorialBlock({ num, title, description, image, imageAlt, reverse = false }: BlockProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center py-16 sm:py-24">
      {/* Text block */}
      <div className={`lg:col-span-5 flex flex-col justify-center ${reverse ? "lg:order-2 lg:col-start-8" : "lg:order-1 lg:col-start-1"}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          {/* Accent Line and Number */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-serif text-lg font-medium text-brand-gold">{num}</span>
            <div className="h-px w-8 bg-brand-gold/30" />
          </div>
          
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-brand-black mb-6 leading-tight">
            {title}
          </h3>
          <p className="text-brand-charcoal-light text-sm sm:text-base font-sans leading-relaxed mb-8">
            {description}
          </p>
          
          <div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 group/link text-[10px] font-sans font-bold tracking-widest text-brand-gold hover:text-brand-gold-dark uppercase transition-colors duration-300"
            >
              <span>Learn More</span>
              <div className="flex items-center">
                <div className="w-12 h-px bg-brand-gold/60 group-hover/link:w-16 transition-all duration-300" />
                <span className="text-[10px] -ml-px">→</span>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Image block */}
      <div className={`lg:col-span-6 ${reverse ? "lg:order-1 lg:col-start-1" : "lg:order-2 lg:col-start-7"}`}>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-beige">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover transform hover:scale-105 transition-transform duration-1000 ease-out"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const blocks: BlockProps[] = [
    {
      num: "01",
      title: "Dedicated Property Managers",
      description: "Every property is assigned a dedicated manager who oversees daily operations, tenant communication, maintenance coordination, and owner reporting. One point of contact ensures consistency and accountability.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Professional property manager meeting with clients inside a luxury residential building",
    },
    {
      num: "02",
      title: "Transparent Financial Reporting",
      description: "Receive clear monthly reports, rental income statements, maintenance records, and complete financial transparency so you always understand your property's performance.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Luxury office desk with financial reports, laptop, and modern workspace",
      reverse: true,
    },
    {
      num: "03",
      title: "Proactive Maintenance",
      description: "Routine inspections, preventive maintenance, and rapid response to maintenance requests help preserve your property's long-term value while reducing unexpected expenses.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Modern apartment maintenance inspection with high-end interiors",
    },
    {
      num: "04",
      title: "Trusted Local Expertise",
      description: "With deep knowledge of the Abu Dhabi property market, regulatory requirements, and tenant expectations, we provide reliable management that protects your investment and supports long-term growth.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Modern Abu Dhabi skyline with premium residential properties",
      reverse: true,
    },
  ];

  return (
    <section id="why-choose-us" className="bg-[#FAF8F5] py-24 sm:py-32">
      <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
        {/* Main Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-black mb-6 leading-tight">
            Why Property Owners Choose Asset Homes
          </h2>
          <p className="text-brand-charcoal-light text-base font-sans leading-relaxed max-w-2xl">
            We combine local expertise, transparent management, and proactive property care to protect your investment while delivering exceptional experiences for owners and tenants.
          </p>
        </div>

        {/* Editorial Blocks */}
        <div className="divide-y divide-brand-gold/10">
          {blocks.map((block) => (
            <EditorialBlock key={block.title} {...block} />
          ))}
        </div>
      </div>
    </section>
  );
}
