"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface RowProps {
  category: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

function DetailRow({ category, title, description, points, image, imageAlt, reverse = false }: RowProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center py-12 sm:py-16">
      
      {/* Text block */}
      <div className={`lg:col-span-6 flex flex-col justify-center ${reverse ? "lg:order-2" : "lg:order-1"}`}>
        <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-3">
          {category}
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-brand-black leading-snug mb-5">
          {title}
        </h3>
        <p className="text-brand-charcoal-light text-sm sm:text-base font-sans leading-relaxed mb-6">
          {description}
        </p>
        <ul className="space-y-3.5">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </span>
              <span className="text-brand-charcoal text-sm font-sans font-medium">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image block */}
      <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : "lg:order-2"}`}>
        <div className="relative aspect-[16/10] w-full overflow-hidden shadow-lg bg-brand-beige">
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-full relative"
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover transform hover:scale-103 transition-transform duration-[1200ms]"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </motion.div>
        </div>
      </div>

    </div>
  );
}

export default function InstitutionalGrade() {
  const rows: RowProps[] = [
    {
      category: "Portfolio Advisory",
      title: "Bespoke Portfolio Operations & Strategy",
      description: "We orchestrate tailored management workflows that map directly to the owner's investment horizon. Through strict fiscal controls and regular market value assessments, we optimize cash flows and keep overhead low.",
      points: [
        "Dynamic rental indexation customized to neighborhood trends",
        "Quarterly asset valuations and localized cap-rate modeling",
        "Structured marketing strategies that minimize vacancy windows"
      ],
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Premium modern residential real estate block",
    },
    {
      category: "Tenant Relations",
      title: "Seamless Resident & Tenant Integration",
      description: "A premium property requires a premium hospitality experience. We treat residents as clients, ensuring swift response cycles, seamless digital payments, and luxury concierge features that inspire long-term leases.",
      points: [
        "Integrated tenant portals for mobile lease management and payments",
        "Average maintenance ticketing resolution within 4 hours",
        "Exclusive loyalty and hospitality benefits for luxury residences"
      ],
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Hotel lobby check in receptionist greeting a client",
      reverse: true,
    },
    {
      category: "Smart Facilities",
      title: "Advanced Engineering & Facilities Management",
      description: "Our dedicated facilities engineers implement strict preventative care schedules that reduce sudden breakdowns and defer expensive replacements. We leverage smart monitoring systems to drive energy efficiency.",
      points: [
        "Rigorous preventative MEP (mechanical, electrical, plumbing) checklists",
        "24/7 HVAC and central cooling system sensor monitoring",
        "Sustainable energy and water reduction program designs"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Data center server racks engineering infrastructure",
    }
  ];

  return (
    <section className="bg-brand-cream py-20 sm:py-24 lg:py-32 border-t border-brand-gold/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Main Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
            Operational Excellence
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-black">
            Institutional-Grade Management
          </h2>
        </div>

        {/* Alternating Detail Rows */}
        <div className="divide-y divide-brand-gold/10">
          {rows.map((row, index) => (
            <DetailRow key={row.title} {...row} />
          ))}
        </div>

      </div>
    </section>
  );
}
