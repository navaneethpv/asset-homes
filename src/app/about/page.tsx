"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Shield, Award, Eye } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  const introSectionRef = useRef<HTMLDivElement>(null);
  const introImageWrapperRef = useRef<HTMLDivElement>(null);
  const introImageRef = useRef<HTMLImageElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);

  const pillarsSectionRef = useRef<HTMLDivElement>(null);
  const pillarsTextRef = useRef<HTMLDivElement>(null);
  const pillarsGridRef = useRef<HTMLDivElement>(null);

  const timelineSectionRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const timelineGridRef = useRef<HTMLDivElement>(null);

  const storySectionRef = useRef<HTMLDivElement>(null);
  const storyImageWrapperRef = useRef<HTMLDivElement>(null);
  const storyImageParallaxRef = useRef<HTMLDivElement>(null);
  const storyImageRef = useRef<HTMLImageElement>(null);
  const storyTextRef = useRef<HTMLDivElement>(null);

  const teamSectionRef = useRef<HTMLDivElement>(null);
  const teamTitleRef = useRef<HTMLDivElement>(null);
  const teamGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Animations (Entrance & Parallax Scroll)
      const heroSection = heroSectionRef.current;
      const heroImage = heroImageRef.current;
      const heroText = heroTextRef.current;

      if (heroSection) {
        if (heroText) {
          const heroElements = heroText.querySelectorAll(".hero-reveal");
          gsap.fromTo(heroElements,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", stagger: 0.15, delay: 0.2 }
          );
        }
        if (heroImage) {
          gsap.fromTo(heroImage,
            { yPercent: 0, scale: 1.05 },
            {
              yPercent: 15,
              ease: "none",
              scrollTrigger: {
                trigger: heroSection,
                start: "top top",
                end: "bottom top",
                scrub: true
              }
            }
          );
        }
      }

      // 2. Editorial Intro Split Section Animations
      const introSection = introSectionRef.current;
      const introImageWrapper = introImageWrapperRef.current;
      const introImage = introImageRef.current;
      const introText = introTextRef.current;

      if (introSection) {
        if (introImageWrapper && introImage) {
          gsap.timeline({
            scrollTrigger: {
              trigger: introSection,
              start: "top 75%",
              toggleActions: "play none none none"
            }
          })
          .fromTo(introImageWrapper,
            { clipPath: "inset(0% 100% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.6, ease: "power4.inOut" }
          )
          .fromTo(introImage,
            { scale: 1.1 },
            { scale: 1.0, duration: 2.0, ease: "power4.out" },
            "-=1.4"
          );
        }
        if (introText) {
          const introElements = introText.querySelectorAll(".intro-reveal");
          gsap.fromTo(introElements,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power4.out",
              stagger: 0.15,
              scrollTrigger: {
                trigger: introText,
                start: "top 80%",
                toggleActions: "play none none none"
              }
            }
          );
        }
      }

      // 3. Pillars of Stewardship Section Animations
      const pillarsSection = pillarsSectionRef.current;
      const pillarsText = pillarsTextRef.current;
      const pillarsGrid = pillarsGridRef.current;

      if (pillarsSection) {
        if (pillarsText) {
          const pillarsTitleElements = pillarsText.querySelectorAll(".pillars-reveal");
          gsap.fromTo(pillarsTitleElements,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power4.out",
              stagger: 0.15,
              scrollTrigger: {
                trigger: pillarsText,
                start: "top 80%",
                toggleActions: "play none none none"
              }
            }
          );
        }
        if (pillarsGrid) {
          const cards = pillarsGrid.querySelectorAll(".pillar-card");
          gsap.fromTo(cards,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power4.out",
              stagger: 0.2,
              scrollTrigger: {
                trigger: pillarsGrid,
                start: "top 75%",
                toggleActions: "play none none none"
              }
            }
          );
        }
      }

      // 4. Milestones Timeline Animations
      const timelineSection = timelineSectionRef.current;
      const timelineLine = timelineLineRef.current;
      const timelineGrid = timelineGridRef.current;

      if (timelineSection) {
        if (timelineLine) {
          gsap.fromTo(timelineLine,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 1.8,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: timelineSection,
                start: "top 70%",
                toggleActions: "play none none none"
              }
            }
          );
        }
        if (timelineGrid) {
          const items = timelineGrid.querySelectorAll(".timeline-reveal");
          gsap.fromTo(items,
            { y: 45, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power4.out",
              stagger: 0.2,
              scrollTrigger: {
                trigger: timelineGrid,
                start: "top 75%",
                toggleActions: "play none none none"
              }
            }
          );
        }
      }

      // 5. Signature Storytelling Animations
      const storySection = storySectionRef.current;
      const storyImageWrapper = storyImageWrapperRef.current;
      const storyImageParallax = storyImageParallaxRef.current;
      const storyImage = storyImageRef.current;
      const storyText = storyTextRef.current;

      if (storySection && storyImageWrapper && storyImageParallax && storyImage && storyText) {
        const storyTextElements = storyText.querySelectorAll(".story-reveal");

        gsap.timeline({
          scrollTrigger: {
            trigger: storySection,
            start: "top 75%",
            toggleActions: "play none none none",
          }
        })
        .to(storyImageWrapper, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.8,
          ease: "power4.inOut"
        })
        .to(storyImage, {
          scale: 1.0,
          duration: 2.2,
          ease: "power4.out"
        }, "-=1.6")
        .fromTo(storyTextElements,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.4, ease: "power4.out", stagger: 0.15 },
          "-=1.4"
        );

        gsap.fromTo(storyImageParallax,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: storyImageWrapper,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.3,
            }
          }
        );
      }

      // 6. The Custodians / Leadership Animations
      const teamSection = teamSectionRef.current;
      const teamTitle = teamTitleRef.current;
      const teamGrid = teamGridRef.current;

      if (teamSection) {
        if (teamTitle) {
          const titleElements = teamTitle.querySelectorAll(".team-title-reveal");
          gsap.fromTo(titleElements,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power4.out",
              stagger: 0.15,
              scrollTrigger: {
                trigger: teamTitle,
                start: "top 80%",
                toggleActions: "play none none none"
              }
            }
          );
        }
        if (teamGrid) {
          const members = teamGrid.querySelectorAll(".team-member-reveal");
          gsap.fromTo(members,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power4.out",
              stagger: 0.2,
              scrollTrigger: {
                trigger: teamGrid,
                start: "top 75%",
                toggleActions: "play none none none"
              }
            }
          );
        }
      }

    });

    return () => ctx.revert();
  }, []);

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
      <section ref={heroSectionRef} className="relative pt-40 pb-24 md:pt-48 md:pb-32 border-b border-brand-gold/15 overflow-hidden">
        {/* Background Image */}
        <Image
          ref={heroImageRef}
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600"
          alt="Premium real estate architecture at dusk"
          fill
          className="object-cover object-center pointer-events-none z-0 scale-[1.05]"
          priority
        />
        {/* Dark Cinematic Overlay */}
        <div className="absolute inset-0 bg-brand-black/92 backdrop-blur-[3px] z-10" />

        <div ref={heroTextRef} className="relative z-20 w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32 text-center flex flex-col items-center">
          <span className="hero-reveal text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
            Who We Are
          </span>
          <h1 className="hero-reveal font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
            The Standard of Real Estate <span className="text-brand-gold italic">Stewardship</span>
          </h1>
          <p className="hero-reveal text-brand-cream/90 text-base sm:text-lg font-sans leading-relaxed max-w-xl mx-auto font-normal">
            Asset Homes Property Management LLC is dedicated to preserving, managing, and optimizing premium real estate assets across Abu Dhabi with uncompromising quality.
          </p>
        </div>
      </section>

      {/* Editorial Intro Section (Split layout matching TrustLegacy) */}
      <section ref={introSectionRef} className="bg-brand-beige py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Left Column - Editorial text */}
            <div ref={introTextRef} className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
              <span className="intro-reveal text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
                Our Purpose
              </span>
              
              <h2 className="intro-reveal font-serif text-2xl sm:text-3xl lg:text-5xl font-medium tracking-tight text-brand-black leading-tight mb-6">
                Protecting Wealth Through <span className="text-brand-gold italic">Precision Operations</span>
              </h2>
              
              <div className="intro-reveal space-y-6 text-brand-charcoal-light text-base font-sans font-light leading-relaxed">
                <p>
                  At Asset Homes, we believe that real estate assets require more than simple tenant oversight—they demand active, high-fidelity operations. We manage each property as a critical investment, preserving structural integrity while driving operational excellence.
                </p>
                <p>
                  From Al Bateen to Yas Island, we integrate local municipal insights with predictive building services. Our methodology ensures that your property conforms to the highest standards of energy efficiency, tenant satisfaction, and long-term asset appreciation.
                </p>
              </div>
            </div>

            {/* Right Column - Architectural Image */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex items-center">
              <div ref={introImageWrapperRef} className="relative w-full aspect-16/10 sm:aspect-video lg:h-[480px] overflow-hidden shadow-xl rounded-tr-[24px]" style={{ clipPath: "inset(0% 100% 0% 0%)" }}>
                <Image
                  ref={introImageRef}
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

      {/* Pillars of Stewardship (Premium Asymmetrical Sticky Layout) */}
      <section ref={pillarsSectionRef} className="py-24 sm:py-32 bg-brand-cream border-t border-brand-gold/15">
        <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Sticky Column for Section Title */}
            <div ref={pillarsTextRef} className="lg:col-span-4 flex flex-col justify-start lg:sticky lg:top-28 h-fit">
              <span className="pillars-reveal text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
                Our Core Principles
              </span>
              <h2 className="pillars-reveal font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-black leading-tight mb-6">
                The Foundations of Our <span className="text-brand-gold italic">Philosophy</span>
              </h2>
              <div className="pillars-reveal w-12 h-[1px] bg-brand-gold mb-6" />
              <p className="pillars-reveal text-brand-charcoal-light text-sm font-sans font-light leading-relaxed">
                Stewardship is more than simple oversight. It is a philosophy that guides our daily actions, ensuring client wealth is preserved with engineering-level precision and absolute integrity.
              </p>
            </div>

            {/* Right Column - Staggered Pillar Panels */}
            <div ref={pillarsGridRef} className="lg:col-span-8 space-y-8">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={pillar.title} 
                    className="pillar-card relative group bg-brand-beige/30 hover:bg-brand-beige/80 p-8 sm:p-10 border border-brand-gold/10 hover:border-brand-gold/35 transition-all duration-500 rounded-tr-[24px] overflow-hidden min-h-[160px] flex flex-col justify-center"
                  >
                    {/* Faint Background Number Watermark */}
                    <div className="absolute -right-2 top-2 font-serif text-7xl sm:text-8xl font-semibold text-brand-gold/[0.02] select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-103 z-0">
                      0{idx + 1}
                    </div>

                    <div className="relative z-10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                      {/* Icon container */}
                      <div className="flex-shrink-0 p-3 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-none">
                        <Icon className="w-6 h-6 stroke-[1.2]" />
                      </div>

                      {/* Content */}
                      <div className="space-y-3 pr-12">
                        <h3 className="font-serif text-xl font-medium text-brand-black">
                          {pillar.title}
                        </h3>
                        <p className="text-brand-charcoal-light text-sm font-sans font-light leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Milestones of Excellence */}
      <section ref={timelineSectionRef} className="bg-brand-beige py-24 sm:py-32 border-t border-brand-gold/15">
        <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
          
          <div className="max-w-2xl mb-16 md:mb-24">
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-black leading-tight">
              Milestones of <span className="text-brand-gold italic">Excellence</span>
            </h2>
          </div>

          <div className="relative">
            {/* Horizontal timeline track line */}
            <div ref={timelineLineRef} className="absolute top-5 left-0 right-0 h-[1.5px] bg-brand-gold/35 hidden md:block z-0 origin-left" />

            <div ref={timelineGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {milestones.map((item, idx) => (
                <div 
                  key={item.year} 
                  className="timeline-reveal pt-8 md:pt-0 relative"
                >
                  {/* Timeline dot indicator */}
                  <div className="absolute top-[14px] left-0 w-3.5 h-3.5 rounded-full bg-brand-gold border-4 border-brand-beige hidden md:block z-10" />

                  <span className="font-serif text-4xl sm:text-5xl font-light text-brand-gold mb-4 mt-6 block">
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
        </div>
      </section>

      {/* Signature Storytelling Section */}
      <section 
        ref={storySectionRef}
        className="min-h-screen lg:h-[110vh] flex flex-col justify-center bg-[#F8F5F0] py-24 lg:py-0 relative overflow-hidden z-10 border-t border-brand-gold/15"
      >
        <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Large Architectural Photography */}
          <div className="lg:col-span-7 flex flex-col">
            <div 
              ref={storyImageWrapperRef}
              className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:h-[75vh] overflow-hidden bg-brand-beige shadow-2xl"
              style={{ clipPath: "inset(0% 100% 0% 0%)" }}
            >
              <div ref={storyImageParallaxRef} className="relative w-full h-full">
                <Image
                  ref={storyImageRef}
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600"
                  alt="Luxury minimalist architecture villa at dusk"
                  fill
                  className="object-cover scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, 55vw"
                  priority
                />
              </div>
            </div>
            {/* Small image caption aligned to the left */}
            <span className="text-[9px] font-sans font-bold tracking-[0.25em] text-[#1F1F1F]/40 uppercase mt-4 block">
              Architectural Detail, Yas Island Waterfront — Abu Dhabi
            </span>
          </div>

          {/* Right Column - Floating Editorial Text Block */}
          <div 
            ref={storyTextRef}
            className="lg:col-span-5 flex flex-col justify-center space-y-8 lg:pl-8"
          >
            <span className="story-reveal text-[10px] font-sans font-bold tracking-[0.3em] text-[#C6A15B] uppercase block">
              OUR COMMITMENT
            </span>
            
            <h2 className="story-reveal font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1F1F1F] leading-tight">
              Every Property Deserves <span className="text-[#C6A15B] italic font-serif">Exceptional Stewardship</span>
            </h2>
            
            <p className="story-reveal text-[#1F1F1F]/80 text-sm sm:text-base font-sans font-light leading-relaxed">
              Every asset represents years of dedication, investment, and ambition. Our responsibility extends beyond management—we preserve value, anticipate challenges, and ensure every property continues to perform for generations.
            </p>

            <div className="story-reveal border-l border-[#C6A15B]/30 pl-6 py-2">
              <span className="font-serif italic text-base text-[#C6A15B] block">
                "True property management begins long before issues arise."
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* The Custodians / Leadership Team */}
      <section ref={teamSectionRef} className="py-24 sm:py-32 bg-brand-cream border-t border-brand-gold/15">
        <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
          
          <div ref={teamTitleRef} className="max-w-2xl mb-16 md:mb-24">
            <span className="team-title-reveal text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
              Leadership
            </span>
            <h2 className="team-title-reveal font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-black leading-tight">
              The <span className="text-brand-gold italic">Custodians</span> of Your Investment
            </h2>
          </div>

          <div ref={teamGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {leaders.map((leader) => (
              <div key={leader.name} className="team-member-reveal group flex flex-col">
                {/* Photo container with top-right curve */}
                <div 
                  className="relative aspect-3/4 w-full overflow-hidden bg-brand-beige mb-6 rounded-tr-[32px] shadow-sm border border-brand-gold/10 isolation-isolate"
                  style={{ borderTopRightRadius: "32px" }}
                >
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover rounded-tr-[32px] grayscale-[25%] contrast-[105%] brightness-[98%] transition-transform duration-700 ease-out group-hover:scale-103"
                    style={{ borderTopRightRadius: "32px" }}
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

      <Footer />
    </div>
  );
}
