"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
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
  image: string;
}

export default function OperationalRoadmap() {
  const steps: Step[] = [
    {
      num: "01",
      title: "Onboarding & Audit",
      description: "Thorough assessment of structural integrity, tenant contracts, MEP systems, and financial ledgers.",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
    },
    {
      num: "02",
      title: "Strategy & Valuation",
      description: "Establishing rent models, marketing strategy, and budget projections to optimize cash flow yields.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    },
    {
      num: "03",
      title: "System Integration",
      description: "Deploying portal accounts for tenants and automated financial accounting integrations for the owner.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    },
    {
      num: "04",
      title: "Active Stewardship",
      description: "Preventative facilities maintenance, 24/7 concierge operations, and active occupancy management.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    },
    {
      num: "05",
      title: "Yield Optimization",
      description: "Quarterly review of utility spend, tenancy retention rates, and local market cap-rate trends to grow yields.",
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
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const track = trackRef.current;

      if (section && track) {
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
              start: "top 85%",
              toggleActions: "play none none none",
            }
          }
        );

        const mm = gsap.matchMedia();

        // DESKTOP: Horizontal Pinned Expanding Slides
        mm.add("(min-width: 1024px)", () => {
          const cards = gsap.utils.toArray(".roadmap-card");
          const totalWidth = track.scrollWidth;
          const viewportWidth = window.innerWidth;
          
          // Move track leftward so all cards scroll across
          const xTranslation = -(totalWidth - viewportWidth + 120);

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: `+=${totalWidth}`,
              pin: true,
              scrub: 0.5,
              invalidateOnRefresh: true,
            }
          });

          // Horizontal slide of the card track
          tl.to(track, {
            x: xTranslation,
            ease: "none",
          }, 0);

          // Card width transitions timeline distribution
          const cardDuration = 1 / (cards.length - 1);

          for (let i = 0; i < cards.length - 1; i++) {
            const startTime = i * cardDuration;

            // Collapse card i
            tl.to(`.roadmap-card-${i}`, { width: "240px", duration: cardDuration, ease: "power2.inOut" }, startTime)
              .to(`.roadmap-card-desc-${i}`, { opacity: 0, duration: cardDuration * 0.4, ease: "power2.inOut" }, startTime)
              .to(`.roadmap-card-overlay-${i}`, { opacity: 0.75, duration: cardDuration, ease: "power2.inOut" }, startTime);

            // Expand card i+1
            tl.to(`.roadmap-card-${i+1}`, { width: "560px", duration: cardDuration, ease: "power2.inOut" }, startTime)
              .to(`.roadmap-card-desc-${i+1}`, { opacity: 1, duration: cardDuration * 0.4, ease: "power2.inOut" }, startTime + cardDuration * 0.5)
              .to(`.roadmap-card-overlay-${i+1}`, { opacity: 0.35, duration: cardDuration, ease: "power2.inOut" }, startTime);
          }
        });

        // MOBILE & TABLET: Simple vertical staggers
        mm.add("(max-width: 1023px)", () => {
          gsap.fromTo(".roadmap-mobile-card",
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: ".roadmap-mobile-grid",
                start: "top 85%",
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
    <section 
      ref={sectionRef} 
      id="methodology" 
      className="bg-brand-beige py-20 lg:py-0 lg:h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="w-full max-w-none flex flex-col h-full lg:justify-between py-12 lg:py-24">
        
        {/* Section Header */}
        <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-32 mb-10 shrink-0">
          <span className="roadmap-eyebrow text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-3 block opacity-0">
            Our Methodology
          </span>
          <h2 className="roadmap-heading font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-black leading-tight opacity-0">
            A Seamless Journey to <span className="text-brand-gold italic">Optimization</span>
          </h2>
        </div>

        {/* DESKTOP TIMELINE: Pinned track */}
        <div className="hidden lg:block w-full overflow-hidden select-none mb-12">
          <div ref={trackRef} className="flex gap-6 px-6 sm:px-12 lg:px-20 xl:px-32 w-max">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className={`roadmap-card roadmap-card-${idx} relative h-[420px] shrink-0 overflow-hidden bg-brand-cream border border-brand-gold/15`}
                style={{ width: idx === 0 ? "560px" : "240px" }}
              >
                {/* Background image panel */}
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="560px"
                />
                
                {/* Visual filter overlay */}
                <div
                  className={`roadmap-card-overlay-${idx} absolute inset-0 bg-brand-black z-10 transition-opacity duration-300`}
                  style={{ opacity: idx === 0 ? 0.35 : 0.75 }}
                />

                {/* Fixed-width content container (doesn't squish during width animation) */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-brand-cream z-20 w-[480px]">
                  <div>
                    <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
                      {step.num} / Stage
                    </span>
                    <h3 className="font-serif text-2xl font-medium tracking-tight text-white mb-2">
                      {step.title}
                    </h3>
                  </div>

                  <div
                    className={`roadmap-card-desc-${idx} transition-opacity duration-300`}
                    style={{ opacity: idx === 0 ? 1 : 0 }}
                  >
                    <p className="text-xs sm:text-sm font-sans font-light text-brand-cream/80 leading-relaxed pr-8">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE TIMELINE: Stacked cards */}
        <div className="roadmap-mobile-grid lg:hidden px-6 sm:px-12 mb-16 space-y-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="roadmap-mobile-card relative h-[260px] overflow-hidden bg-brand-black border border-brand-gold/15 flex flex-col justify-between p-6 shadow-md"
            >
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover opacity-45"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="relative z-10">
                <span className="text-[9px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase block mb-2">
                  {step.num} / Stage
                </span>
                <h3 className="font-serif text-xl font-medium text-white">
                  {step.title}
                </h3>
              </div>
              <p className="relative z-10 text-xs font-sans font-light text-brand-cream/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Three Columns Core Pillars */}
        <div className="pillars-container w-full px-6 sm:px-12 lg:px-20 xl:px-32 border-t border-brand-gold/15 pt-8 shrink-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="pillar-item flex flex-col items-start"
                >
                  <div className="p-2.5 bg-brand-gold/10 text-brand-gold rounded-sm mb-3">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h4 className="font-serif text-base font-semibold text-brand-black mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="text-brand-charcoal-light text-xs font-sans leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
