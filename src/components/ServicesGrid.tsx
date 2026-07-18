"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ServicesGrid() {
  const services: ServiceItem[] = [
    {
      title: "Residential Management",
      description: "Bespoke operations and end-to-end leasing services for luxury towers and exclusive villa communities.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600",
      link: "#services",
    },
    {
      title: "Commercial Operations",
      description: "Maximizing value, driving tenancy, and streamlining maintenance for premium offices and retail centers.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
      link: "#services",
    },
    {
      title: "Facilities Engineering",
      description: "Preventative MEP maintenance, energy audits, and smart building technology implementations.",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=600",
      link: "#services",
    },
    {
      title: "Tenant Relations & Leasing",
      description: "Seamless tenant onboarding, 24/7 helpdesk support, and proactive renewals that build high retention.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
      link: "#services",
    },
    {
      title: "Financial Yield Strategy",
      description: "Transparent financial reporting, operating budget design, cash-flow optimization, and yield reporting.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
      link: "#services",
    },
    {
      title: "Regulatory Compliance",
      description: "Navigating Abu Dhabi's property laws, municipality registrations, and health & safety compliance.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600",
      link: "#services",
    },
    {
      title: "Property Marketing",
      description: "Premium property placements, custom digital campaigns, and targeted marketing for high-end listings.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      link: "#services",
    },
    {
      title: "Concierge & Hospitality",
      description: "Curated experiences, front-desk staffing, valet management, and premium services for elite residences.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600",
      link: "#services",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="services" className="bg-brand-cream/10 py-20 sm:py-24 lg:py-32">
      <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
        
        {/* Header Content */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
            Our Capabilities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-black mb-4">
            Comprehensive Property Management Solutions
          </h2>
          <div className="h-[1px] w-12 bg-brand-gold mx-auto my-6" />
          <p className="text-brand-charcoal-light text-base font-sans leading-relaxed">
            Tailored property lifecycle management that maximizes tenant satisfaction, asset value, and owner returns.
          </p>
        </div>

        {/* Services Grid (4x2 on Large screens) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group flex flex-col bg-white border border-brand-gold/10 p-4 transition-all duration-300 hover:border-brand-gold/30 hover:shadow-lg"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-brand-beige">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Text content */}
              <div className="flex flex-col flex-1">
                <h3 className="font-serif text-lg font-medium text-brand-black mb-3">
                  {service.title}
                </h3>
                <p className="text-brand-charcoal-light text-sm font-sans leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                {/* Interactive link */}
                <Link
                  href={service.link}
                  className="inline-flex items-center text-xs font-sans font-bold tracking-wider text-brand-gold hover:text-brand-gold-dark uppercase mt-auto transition-colors duration-300"
                >
                  Explore service <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
