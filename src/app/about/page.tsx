"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Shield, Award, Eye } from "lucide-react";

export default function AboutPage() {
  const pillars = [
    {
      icon: Shield,
      title: "Meticulous Stewardship",
      description: "We approach property management with an engineering-first mentality. From predictive HVAC servicing to proactive facade inspections, we protect the structural and aesthetic integrity of your assets."
    },
    {
      icon: Eye,
      title: "Absolute Transparency",
      description: "Our operations run on trust. Real estate wealth requires clear oversight, which is why we provide full-ledger accounting, regular digital reports, and direct channels for developer and owner audits."
    },
    {
      icon: Award,
      title: "Regulatory Precision",
      description: "Fully compliant with the Abu Dhabi Municipality (ADM) and Estidama standards. We ensure all certifications, contractor licenses, and tenancy contracts align with the UAE's evolving legal frameworks."
    }
  ];

  const milestones = [
    {
      year: "2021",
      title: "Founding & Vision",
      description: "Established in Abu Dhabi to bridge the gap between traditional leasing services and premium, institutional-grade asset preservation."
    },
    {
      year: "2023",
      title: "Portfolio Expansion",
      description: "Selected as the preferred management partner for high-occupancy developments across Al Reem Island and Yas Marina."
    },
    {
      year: "2025",
      title: "Sustainability Integration",
      description: "Transitioned 100% of managed assets to Estidama-compliant operations, saving average building utility costs by 18%."
    }
  ];

  const leaders = [
    {
      name: "Tariq Al Mansoori",
      role: "Founder & Managing Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
      bio: "Over 18 years of real estate management experience in the Gulf region, specializing in institutional asset optimization and municipal compliance."
    },
    {
      name: "Sarah Jenkins",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
      bio: "An MEP engineer by training, Sarah oversees our technical dispatch center and coordinates asset lifecycle strategies."
    },
    {
      name: "Faisal Al Hashimi",
      role: "Director of Client Services",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
      bio: "Faisal leads our advisory intake team, ensuring bespoke onboarding and customized concierge offerings for property owners."
    }
  ];

  return (
    <div className="bg-brand-cream min-h-screen flex flex-col selection:bg-brand-gold selection:text-brand-black">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-brand-gold/15">
        <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32 text-center md:text-left">
          <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
            Who We Are
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-black mb-6 max-w-4xl leading-tight">
            The Standard of Real Estate <span className="text-brand-gold italic">Stewardship</span>
          </h1>
          <p className="text-brand-charcoal-light text-base sm:text-lg font-sans leading-relaxed max-w-2xl font-light">
            Asset Homes Property Management LLC is dedicated to preserving, managing, and optimizing premium real estate assets across Abu Dhabi with uncompromising quality.
          </p>
        </div>
      </section>

      {/* Editorial Intro Section (Split layout matching TrustLegacy) */}
      <section className="bg-brand-beige py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Editorial text */}
            <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
              <span className="text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
                Our Purpose
              </span>
              
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-medium tracking-tight text-brand-black leading-tight mb-6">
                Protecting Wealth Through <span className="text-brand-gold italic">Precision Operations</span>
              </h2>
              
              <div className="space-y-6 text-brand-charcoal-light text-base font-sans font-light leading-relaxed">
                <p>
                  At Asset Homes, we believe that real estate assets require more than simple tenant oversight—they demand active, high-fidelity operations. We manage each property as a critical investment, preserving structural integrity while driving operational excellence.
                </p>
                <p>
                  From Al Bateen to Yas Island, we integrate local municipal insights with predictive building services. Our methodology ensures that your property conforms to the highest standards of energy efficiency, tenant satisfaction, and long-term asset appreciation.
                </p>
              </div>
            </div>

            {/* Right Column - Architectural Image */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative w-full aspect-16/10 sm:aspect-video lg:aspect-16/10 overflow-hidden shadow-xl rounded-tr-[24px]">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                  alt="Modern premium corporate glass tower in Abu Dhabi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pillars of Stewardship (Grid matching ServicesPage) */}
      <section className="py-24 sm:py-32 bg-brand-cream border-t border-brand-gold/15">
        <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
          
          <div className="max-w-2xl mb-16 md:mb-24">
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
              Our Core Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-black leading-tight">
              The Foundations of Our <span className="text-brand-gold italic">Philosophy</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="flex flex-col border-t border-brand-gold/20 pt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-brand-gold/5 border border-brand-gold/10 text-brand-gold rounded-none">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <span className="text-[9px] font-sans font-bold tracking-widest text-brand-gold uppercase">
                      Pillar 0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-brand-black mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-brand-charcoal-light text-sm font-sans font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-24 sm:py-32 bg-brand-beige border-t border-brand-gold/15">
        <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-black leading-tight">
              Milestones of <span className="text-brand-gold italic">Excellence</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-brand-gold/15">
            {milestones.map((item, idx) => (
              <div 
                key={item.year} 
                className={`pt-8 md:pt-0 ${idx > 0 ? "md:pl-12" : ""}`}
              >
                <span className="font-serif text-4xl sm:text-5xl font-light text-brand-gold mb-4 block">
                  {item.year}
                </span>
                <h3 className="font-serif text-lg font-semibold text-brand-black mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-charcoal-light text-sm font-sans font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Custodians / Leadership Team */}
      <section className="py-24 sm:py-32 bg-brand-cream border-t border-brand-gold/15">
        <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
          
          <div className="max-w-2xl mb-16 md:mb-24">
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
              Leadership
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-black leading-tight">
              The <span className="text-brand-gold italic">Custodians</span> of Your Investment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {leaders.map((leader) => (
              <div key={leader.name} className="group flex flex-col">
                {/* Photo container with top-right curve */}
                <div className="relative aspect-3/4 w-full overflow-hidden bg-brand-beige mb-6 rounded-tr-[32px] shadow-sm border border-brand-gold/10">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>

                <div>
                  <h3 className="font-serif text-xl font-medium text-brand-black mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-[10px] font-sans font-bold tracking-wider text-brand-gold uppercase mb-4">
                    {leader.role}
                  </p>
                  <p className="text-xs sm:text-sm font-sans font-light text-brand-charcoal-light leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action Banner (Matching services & footer styling) */}
      <section className="bg-brand-black text-brand-cream py-24 sm:py-32 border-t border-brand-gold/10">
        <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-6 block">
              ADVISORY & ONBOARDING
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6">
              Entrust Your Asset to <span className="text-brand-gold italic">Experts</span>
            </h2>
            <p className="text-brand-cream/70 text-sm sm:text-base font-sans font-light leading-relaxed mb-10">
              Arrange a private meeting with Tariq or our client services team to discuss tailored operational models for your real estate holdings.
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
