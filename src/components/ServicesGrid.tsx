"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ServiceItem {
  num: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ServicesGrid() {
  const services: ServiceItem[] = [
    {
      num: "01",
      title: "Property Management",
      description: "Complete end-to-end management for residential and commercial properties.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600",
      link: "#services",
    },
    {
      num: "02",
      title: "Tenant Management",
      description: "Professional tenant screening and relationship management.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
      link: "#services",
    },
    {
      num: "03",
      title: "Maintenance Services",
      description: "Preventive and emergency maintenance to keep properties in excellent condition.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
      link: "#services",
    },
    {
      num: "04",
      title: "Infrastructure Management",
      description: "Complete facility and infrastructure management solutions.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
      link: "#services",
    },
    {
      num: "05",
      title: "Lease Management",
      description: "Efficient lease administration and documentation.",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=600",
      link: "#services",
    },
    {
      num: "06",
      title: "Financial Reporting",
      description: "Transparent reporting and financial oversight for property owners.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
      link: "#services",
    },
    {
      num: "07",
      title: "Compliance Management",
      description: "Ensuring regulatory compliance and operational excellence.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600",
      link: "#services",
    },
    {
      num: "08",
      title: "24/7 Client Support",
      description: "Dedicated assistance whenever property owners need us.",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=600",
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
    <section id="services" className="bg-brand-cream py-20 sm:py-24 lg:py-32">
      <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-7xl font-medium tracking-tight text-brand-black mb-6 leading-tight">
            Comprehensive Property Management <span className="text-brand-gold italic">Solutions</span>
          </h2>
          <p className="text-brand-charcoal-light text-base font-sans leading-relaxed max-w-2xl mx-auto">
            We provide end-to-end management services designed to protect your investment, enhance value, and deliver peace of mind.
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
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group flex flex-col bg-white border border-brand-gold/10 p-5 transition-all duration-300 hover:border-brand-gold/25 hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 w-full overflow-hidden mb-6 bg-brand-beige">
                {/* Number Overlay */}
                <div className="absolute top-4 left-4 z-10 flex flex-col items-start pointer-events-none">
                  <span className="font-serif text-lg font-semibold text-brand-gold leading-none drop-shadow-xs">
                    {service.num}
                  </span>
                  <div className="h-px w-6 bg-brand-gold mt-1" />
                </div>
                
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-1200 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Text content */}
              <div className="flex flex-col grow">
                <h3 className="font-serif text-lg font-medium text-brand-black mb-3">
                  {service.title}
                </h3>
                <p className="text-brand-charcoal-light text-sm font-sans leading-relaxed mb-6 grow">
                  {service.description}
                </p>
                
                {/* Interactive link with line and arrow */}
                <div className="mt-auto">
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-3 group/link text-[10px] font-sans font-bold tracking-widest text-brand-gold hover:text-brand-gold-dark uppercase transition-colors duration-300"
                  >
                    <span>Learn More</span>
                    <div className="flex items-center">
                      <div className="w-12 h-px bg-brand-gold/60 group-hover/link:w-16 transition-all duration-300" />
                      <span className="text-[10px] -ml-px">→</span>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services CTA Button */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-brand-gold text-brand-black hover:bg-brand-black hover:text-brand-cream hover:border-brand-black text-xs font-sans font-semibold tracking-widest uppercase transition-all duration-300 shadow-xs"
          >
            View All Services
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
