"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesData } from "@/data/servicesData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (section) {
        // Staggered reveal of header
        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          })
          .fromTo(
            ".services-eyebrow",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
          )
          .fromTo(
            ".services-heading",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            "-=0.4"
          )
          .fromTo(
            ".services-desc",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            "-=0.6"
          )
          .fromTo(
            ".service-card",
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.08,
            },
            "-=0.4"
          );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-brand-cream py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="services-eyebrow text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block opacity-0">
            Our Services
          </span>
          <h2 className="services-heading font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight text-brand-black mb-4 leading-tight opacity-0">
            Comprehensive Property Management{" "}
            <span className="text-brand-gold italic">Solutions</span>
          </h2>
          <p className="services-desc text-brand-charcoal-light text-base font-sans leading-relaxed max-w-2xl mx-auto opacity-0">
            We provide end-to-end management services designed to protect your
            investment, enhance value, and deliver peace of mind.
          </p>
        </div>

        {/* Services Grid (4x2 on Large screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:border-t sm:border-l border-brand-gold/10">
          {servicesData.map((service) => {
            const serviceHref = `/services#${service.id}`;

            return (
              <div
                key={service.id}
                className="service-card group flex flex-col bg-transparent border-b border-brand-gold/10 last:border-b-transparent sm:border-r sm:border-b sm:border-b-brand-gold/10 p-0 py-8 sm:p-6 lg:p-8 transition-colors duration-500 hover:bg-brand-gold/2 opacity-0"
              >
                {/* Image Container wrapped in Link */}
                <Link
                  href={serviceHref}
                  className="relative aspect-16/10 w-full overflow-hidden mb-6 bg-brand-beige block"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform group-hover:scale-103 transition-transform duration-1200 ease-out will-change-transform"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </Link>

                {/* Text content - shifts 2px on hover */}
                <div className="flex flex-col grow transform group-hover:translate-x-[2px] transition-transform duration-300">
                  {/* Number and Title */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-serif text-[10px] sm:text-xs font-semibold text-brand-gold tracking-widest">
                      {service.number}
                    </span>
                    <div className="h-px w-4 bg-brand-gold/30" />
                  </div>

                  <h3 className="font-serif text-base sm:text-lg lg:text-xl font-medium mb-2 leading-tight">
                    <Link href={serviceHref} className="text-brand-black group-hover:text-brand-gold transition-colors duration-300">
                      {service.title}
                    </Link>
                  </h3>

                  <p className="text-brand-charcoal-light text-xs sm:text-sm font-sans leading-relaxed mb-6 grow">
                    {service.description}
                  </p>

                  {/* Interactive link with line and arrow */}
                  <div className="mt-auto">
                    <Link
                      href={serviceHref}
                      className="inline-flex items-center gap-3 group/link text-[9px] sm:text-[10px] font-sans font-bold tracking-widest text-brand-gold hover:text-brand-gold-dark uppercase transition-colors duration-300"
                    >
                      <span>Learn More</span>
                      <div className="flex items-center">
                        <div className="w-10 sm:w-12 h-px bg-brand-gold/60 group-hover/link:w-16 transition-all duration-300" />
                        <span className="text-[9px] sm:text-[10px] -ml-px transition-transform duration-300 group-hover/link:translate-x-1.5">
                          →
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services CTA Button */}
        <div className="mt-10 text-center">
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
