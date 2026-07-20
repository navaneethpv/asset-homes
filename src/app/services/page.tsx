"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Landmark, Building2, Wrench, Headphones } from "lucide-react";

export default function ServicesPage() {
  const detailedServices = [
    {
      icon: Building2,
      title: "Asset Operations & Leasing",
      description: "Comprehensive lifecycle management designed to maximize occupancy and secure premium lease terms. We oversee tenancy agreements, coordinate renewals, manage move-in/move-out workflows, and handle municipality documentation.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
      features: ["Tenancy contract lifecycle execution", "Tenant screening & vetting", "Ejari registration & municipal compliance", "Bespoke marketing & vacant positioning"]
    },
    {
      icon: Wrench,
      title: "Technical & MEP Engineering",
      description: "Preventative and corrective building services executed by certified specialists. We maintain mechanical, electrical, plumbing, and HVAC systems to maximize energy efficiency and structural longevity.",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800",
      features: ["24/7 emergency response engineering", "Comprehensive HVAC & MEP maintenance", "Energy audit & consumption optimization", "Estidama green building compliance"]
    },
    {
      icon: Landmark,
      title: "Financial Stewardship & Yields",
      description: "Meticulous accounting structures to track and optimize your assets' financial performance. We handle rental collection, utility audits, vendor payments, and supply quarterly cash-flow ledgers.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      features: ["Rent collection & escrow management", "Real-time owner dashboard tracking", "Detailed operating budget forecasts", "Utility bill audit & VAT compliance"]
    },
    {
      icon: Headphones,
      title: "Bespoke Tenant Concierge",
      description: "Delivering a hospitality-focused living experience that keeps resident turnover exceptionally low. Our dedicated helpdesk and mobile portal streamline service request dispatch and communication.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      features: ["Dedicated digital tenant portal", "Rapid request dispatch protocols", "Move-in onboarding assistance", "Premium property concierge staff"]
    }
  ];

  return (
    <div className="bg-brand-cream min-h-screen flex flex-col selection:bg-brand-gold selection:text-brand-black">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-24 pb-16 md:pt-28 md:pb-24 border-b border-brand-gold/15">
        <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32 text-center md:text-left">
          <div className="mb-4 flex justify-start">
            <Breadcrumb items={[{ label: "Services" }]} />
          </div>

          <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
            Our Offerings
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-black mb-6 max-w-4xl leading-tight">
            Institutional-Grade <span className="text-brand-gold italic">Services</span>
          </h1>
          <p className="text-brand-charcoal-light text-base sm:text-lg font-sans leading-relaxed max-w-2xl font-light">
            Asset Homes delivers absolute peace of mind through meticulously structured operational oversight, maximizing asset longevity and investment yields across Abu Dhabi.
          </p>
        </div>
      </section>

      {/* Detailed Services Catalog */}
      <section className="py-24 sm:py-32 lg:py-40">
        <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
          <div className="space-y-32">
            {detailedServices.map((service, idx) => {
              const Icon = service.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={service.title}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
                >
                  {/* Text Container */}
                  <div
                    className={`lg:col-span-6 flex flex-col ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 bg-brand-gold/5 border border-brand-gold/10 text-brand-gold">
                        <Icon className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase">
                        0{idx + 1} / Operations
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-brand-black mb-6">
                      {service.title}
                    </h2>

                    <p className="text-brand-charcoal-light text-sm sm:text-base font-sans leading-relaxed mb-8 font-light">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-3 mb-10">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-3 text-xs sm:text-sm font-sans text-brand-charcoal">
                          <span className="w-1.5 h-1.5 bg-brand-gold shrink-0 rotate-45" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-6 py-3.5 border border-brand-gold text-brand-black hover:bg-brand-black hover:text-brand-cream hover:border-brand-black text-[10px] font-sans font-bold tracking-widest uppercase transition-all duration-300"
                      >
                        Enquire About Service
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Image Container with Architectural Arched Curve */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div
                      className={`relative aspect-4/3 w-full overflow-hidden bg-brand-beige shadow-xl ${
                        isEven
                          ? "rounded-tr-[120px] sm:rounded-tr-[180px]"
                          : "rounded-tl-[120px] sm:rounded-tl-[180px]"
                      }`}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transform hover:scale-105 transition-transform duration-1000 ease-out"
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Call to Action */}
      <section className="bg-brand-black text-brand-cream py-24 sm:py-32 border-t border-brand-gold/10">
        <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-6 block">
              Bespeaking Operations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6">
              Ready to Secure Your Portfolio&apos;s <span className="text-brand-gold italic">Legacy</span>?
            </h2>
            <p className="text-brand-cream/70 text-sm sm:text-base font-sans font-light leading-relaxed mb-10">
              Work with Abu Dhabi&apos;s premiere boutique operations team. Get a customized stewardship proposal matching the unique physical and financial scale of your properties.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-black hover:bg-white text-[10px] font-sans font-bold tracking-widest uppercase transition-all duration-300"
            >
              Consult an Advisor
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
