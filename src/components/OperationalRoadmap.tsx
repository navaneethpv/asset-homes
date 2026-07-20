"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ShieldCheck, Eye, Compass, ArrowRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Step {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export default function OperationalRoadmap() {
  const [activeStep, setActiveStep] = useState(0);

  const steps: Step[] = [
    {
      num: "01",
      title: "Onboarding & Audit",
      subtitle: "Full Asset Inspection",
      description: "Thorough assessment of structural integrity, tenant contracts, MEP systems, and financial ledgers.",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
    },
    {
      num: "02",
      title: "Strategy & Valuation",
      subtitle: "Yield Framework",
      description: "Establishing rent models, marketing strategy, and budget projections to optimize cash flow yields.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    },
    {
      num: "03",
      title: "System Integration",
      subtitle: "Digital Onboarding",
      description: "Deploying portal accounts for tenants and automated financial accounting integrations for the owner.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    },
    {
      num: "04",
      title: "Active Stewardship",
      subtitle: "24/7 Operations",
      description: "Preventative facilities maintenance, 24/7 concierge operations, and active occupancy management.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    },
    {
      num: "05",
      title: "Yield Optimization",
      subtitle: "Continuous Growth",
      description: "Quarterly review of utility spend, tenancy retention rates, and local market cap-rate trends.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const pillars = [
    {
      icon: ShieldCheck,
      title: "Professional Rigor",
      description: "We execute every workflow based on strict checklists, ensuring compliance with Abu Dhabi Municipality (ADM) guidelines and ADDC standards.",
    },
    {
      icon: Eye,
      title: "Transparent Reporting",
      description: "No hidden surcharges. Owners get access to a real-time portal featuring detailed cash flow ledgers, invoices, and tenancy contracts.",
    },
    {
      icon: Compass,
      title: "Client-Centric Dedication",
      description: "Bespoke hospitality structures ensure that tenant request tickets are processed rapidly, keeping occupancy high and turnovers low.",
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      if (section) {
        // Entrance Header
        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        })
        .fromTo(".roadmap-eyebrow",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 }
        )
        .fromTo(".roadmap-heading",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        );

        // Step Cards Stagger Reveal
        gsap.fromTo(".step-card",
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: ".steps-grid",
              start: "top 85%",
              toggleActions: "play none none none",
            }
          }
        );

        // Pillars Stagger Reveal
        gsap.fromTo(".pillar-item",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: ".pillars-container",
              start: "top 85%",
              toggleActions: "play none none none",
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="methodology" 
      className="bg-brand-beige py-16 sm:py-20 lg:py-24 scroll-mt-24 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="roadmap-eyebrow text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-3 block opacity-0">
            Our Methodology
          </span>
          <h2 className="roadmap-heading font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight text-brand-black leading-tight mb-4 opacity-0">
            A Seamless Journey to <span className="text-brand-gold italic">Optimization</span>
          </h2>
          <p className="text-brand-charcoal-light text-sm sm:text-base font-sans leading-relaxed font-normal">
            A structured operational execution model engineered to protect capital, elevate tenant satisfaction, and maximize long-term asset yields across Abu Dhabi.
          </p>
        </div>

        {/* 5-Step Methodology Grid */}
        <div className="steps-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12 sm:mb-16">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              onClick={() => setActiveStep(idx)}
              onMouseEnter={() => setActiveStep(idx)}
              className={`step-card group relative bg-brand-cream border transition-all duration-500 rounded-sm overflow-hidden flex flex-col justify-between cursor-pointer p-4 shadow-xs ${
                activeStep === idx
                  ? "border-brand-gold shadow-lg -translate-y-1 bg-white"
                  : "border-brand-gold/25 hover:border-brand-gold/50 hover:shadow-md"
              }`}
            >
              {/* Step Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-serif text-3xl font-semibold tracking-tight transition-colors duration-300 ${
                    activeStep === idx ? "text-brand-gold" : "text-brand-gold/80 group-hover:text-brand-gold"
                  }`}>
                    {step.num}
                  </span>
                  <span className="text-[9px] font-sans font-bold tracking-widest text-brand-charcoal-light/80 uppercase">
                    Stage {step.num}
                  </span>
                </div>

                {/* Connecting Line */}
                <div className="w-full h-0.5 bg-brand-gold/15 mb-4 overflow-hidden">
                  <div 
                    className={`h-full bg-brand-gold transition-all duration-500 ${
                      activeStep === idx ? "w-full" : "w-0 group-hover:w-1/2"
                    }`}
                  />
                </div>

                {/* Image Banner */}
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-xs mb-5 bg-brand-beige">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
                </div>

                {/* Text Content */}
                <span className="text-[9px] font-sans font-bold tracking-wider text-brand-gold uppercase block mb-1">
                  {step.subtitle}
                </span>
                <h3 className="font-serif text-lg font-semibold text-brand-black mb-2 leading-snug group-hover:text-brand-gold transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-xs font-sans font-light text-brand-charcoal-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Card Footer Indicator */}
              <div className="mt-6 pt-4 border-t border-brand-gold/10 flex items-center justify-between text-[9px] font-sans font-bold uppercase tracking-wider text-brand-gold">
                <span>{activeStep === idx ? "Active Stage" : "Explore Stage"}</span>
                <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  activeStep === idx ? "translate-x-1 text-brand-gold" : "text-brand-gold/40 group-hover:translate-x-1 group-hover:text-brand-gold"
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Core Pillars Grid */}
        <div className="pillars-container border-t border-brand-gold/15 pt-12 sm:pt-16">
          <div className="mb-8">
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase block mb-2">
              Operational Principles
            </span>
            <h3 className="font-serif text-2xl font-medium text-brand-black">
              Built on Institutional Rigor & Integrity
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="pillar-item bg-brand-cream/80 border border-brand-gold/15 p-6 rounded-sm hover:border-brand-gold/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-sm mb-4 w-fit border border-brand-gold/20">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <h4 className="font-serif text-lg font-semibold text-brand-black mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs font-sans leading-relaxed font-light text-brand-charcoal-light">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-brand-gold/10 flex items-center gap-1.5 text-[9px] font-sans font-semibold tracking-wider text-brand-gold uppercase">
                    <CheckCircle2 className="w-3 h-3 text-brand-gold" />
                    <span>Verified Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
