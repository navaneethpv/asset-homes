"use client";

import { useEffect, useRef } from "react";
import { ShieldCheck, Eye, Compass } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Step {
  num: string;
  title: string;
  description: string;
}

export default function OperationalRoadmap() {
  const steps: Step[] = [
    {
      num: "01",
      title: "Onboarding & Audit",
      description: "Thorough assessment of structural integrity, tenant contracts, MEP systems, and financial ledgers.",
    },
    {
      num: "02",
      title: "Strategy & Valuation",
      description: "Establishing rent models, marketing strategy, and budget projections to optimize cash flow yields.",
    },
    {
      num: "03",
      title: "System Integration",
      description: "Deploying portal accounts for tenants and automated financial accounting integrations for the owner.",
    },
    {
      num: "04",
      title: "Active Stewardship",
      description: "Preventative facilities maintenance, 24/7 concierge operations, and active occupancy management.",
    },
    {
      num: "05",
      title: "Yield Optimization",
      description: "Quarterly review of utility spend, tenancy retention rates, and local market cap-rate trends to grow yields.",
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
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const timeline = timelineRef.current;
      const line = lineRef.current;

      if (section && timeline) {
        // Entrance Header
        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
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

        // Core Pillars Stagger Reveal
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
              start: "top 80%",
              toggleActions: "play none none none",
            }
          }
        );

        // Responsive Timeline Animations
        const mm = gsap.matchMedia();

        // DESKTOP: Pinned Timeline
        mm.add("(min-width: 1024px)", () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: timeline,
              start: "top 35%",
              end: "+=500",
              pin: true,
              scrub: 1,
            }
          });

          // Draw the connecting line
          if (line) {
            tl.fromTo(line, 
              { scaleX: 0 }, 
              { scaleX: 1, ease: "none", duration: 2 }
            );
          }

          // Light up each step as progress bar reaches it
          steps.forEach((_, idx) => {
            const stepNum = idx + 1;
            const positionTime = (idx / (steps.length - 1)) * 2;
            
            tl.fromTo(`.step-badge-${stepNum}`,
              { scale: 0.9, backgroundColor: "#f4f0e6", borderColor: "rgba(197, 160, 89, 0.2)", color: "rgba(197, 160, 89, 0.6)" },
              { scale: 1.1, backgroundColor: "#c5a059", borderColor: "#c5a059", color: "#0f0f0f", duration: 0.25 },
              positionTime
            )
            .fromTo(`.step-text-${stepNum}`,
              { opacity: 0.25, y: 15 },
              { opacity: 1, y: 0, duration: 0.25 },
              positionTime
            );
          });
        });

        // MOBILE & TABLET: Simple Scroll Stagger (No Pinning)
        mm.add("(max-width: 1023px)", () => {
          gsap.fromTo(".step-mobile-reveal",
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.15,
              scrollTrigger: {
                trigger: timeline,
                start: "top 80%",
                toggleActions: "play none none none",
              }
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="methodology" className="bg-brand-beige py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="roadmap-eyebrow text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block opacity-0">
            Our Methodology
          </span>
          <h2 className="roadmap-heading font-serif text-3xl sm:text-4xl lg:text-7xl font-medium tracking-tight text-brand-black mb-4 leading-tight opacity-0">
            A Seamless Journey to <span className="text-brand-gold italic">Optimization</span>
          </h2>
          <div className="h-px w-12 bg-brand-gold mx-auto my-6" />
        </div>

        {/* 5-step timeline */}
        <div ref={timelineRef} className="relative mb-24 lg:mb-32">
          {/* Background Connecting Line (faint gold) */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-px bg-brand-gold/15 z-0" />
          
          {/* Active Connecting Line (animates on scrub) */}
          <div 
            ref={lineRef}
            className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-px bg-brand-gold z-0 origin-left"
            style={{ transform: "scaleX(0)" }}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className="step-mobile-reveal flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Number badge */}
                <div className={`step-badge-${idx + 1} w-14 h-14 rounded-full bg-brand-beige border-2 border-brand-gold/20 text-brand-gold/60 font-serif text-lg font-semibold flex items-center justify-center mb-6 shadow-sm transition-all duration-300 lg:scale-90`}>
                  {step.num}
                </div>
                <div className={`step-text-${idx + 1} transition-all duration-300 lg:opacity-25`}>
                  <h3 className="font-serif text-lg font-medium text-brand-black mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-brand-charcoal-light text-xs sm:text-sm font-sans leading-relaxed max-w-[200px] lg:max-w-none mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Three Columns Core Pillars */}
        <div className="pillars-container grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-brand-gold/15 pt-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="pillar-item flex flex-col items-start"
              >
                <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-sm mb-5">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h4 className="font-serif text-xl font-medium text-brand-black mb-3">
                  {pillar.title}
                </h4>
                <p className="text-brand-charcoal-light text-sm sm:text-base font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
