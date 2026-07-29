"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Shield, Award, Eye } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Breadcrumb from "@/components/Breadcrumb";

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
      // 1. Hero Animations
      const heroSection = heroSectionRef.current;
      const heroImage = heroImageRef.current;
      const heroText = heroTextRef.current;

      if (heroSection) {
        if (heroText) {
          const heroElements = heroText.querySelectorAll(".hero-reveal");
          gsap.fromTo(
            heroElements,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power4.out",
              stagger: 0.15,
              delay: 0.2,
            },
          );
        }
        if (heroImage) {
          gsap.fromTo(
            heroImage,
            { yPercent: 0, scale: 1.05 },
            {
              yPercent: 15,
              ease: "none",
              scrollTrigger: {
                trigger: heroSection,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }
      }

      // 2. Intro Section
      const introSection = introSectionRef.current;
      const introImageWrapper = introImageWrapperRef.current;
      const introImage = introImageRef.current;
      const introText = introTextRef.current;

      if (introSection) {
        if (introImageWrapper && introImage) {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: introSection,
                start: "top 75%",
                toggleActions: "play none none none",
              },
            })
            .fromTo(
              introImageWrapper,
              { clipPath: "inset(0% 100% 0% 0%)" },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 1.6,
                ease: "power4.inOut",
              },
            )
            .fromTo(
              introImage,
              { scale: 1.1 },
              { scale: 1.0, duration: 2.0, ease: "power4.out" },
              "-=1.4",
            );
        }
        if (introText) {
          const introElements = introText.querySelectorAll(".intro-reveal");
          gsap.fromTo(
            introElements,
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
                toggleActions: "play none none none",
              },
            },
          );
        }
      }

      // 3. Pillars
      const pillarsSection = pillarsSectionRef.current;
      const pillarsText = pillarsTextRef.current;
      const pillarsGrid = pillarsGridRef.current;

      if (pillarsSection) {
        if (pillarsText) {
          const pillarsTitleElements =
            pillarsText.querySelectorAll(".pillars-reveal");
          gsap.fromTo(
            pillarsTitleElements,
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
                toggleActions: "play none none none",
              },
            },
          );
        }
        if (pillarsGrid) {
          const cards = pillarsGrid.querySelectorAll(".pillar-card");
          gsap.fromTo(
            cards,
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
                toggleActions: "play none none none",
              },
            },
          );
        }
      }

      // 4. Milestones
      const timelineSection = timelineSectionRef.current;
      const timelineLine = timelineLineRef.current;
      const timelineGrid = timelineGridRef.current;

      if (timelineSection) {
        if (timelineLine) {
          gsap.fromTo(
            timelineLine,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 1.8,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: timelineSection,
                start: "top 70%",
                toggleActions: "play none none none",
              },
            },
          );
        }
        if (timelineGrid) {
          const items = timelineGrid.querySelectorAll(".timeline-reveal");
          gsap.fromTo(
            items,
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
                toggleActions: "play none none none",
              },
            },
          );
        }
      }

      // 5. Story Section
      const storySection = storySectionRef.current;
      const storyImageWrapper = storyImageWrapperRef.current;
      const storyImageParallax = storyImageParallaxRef.current;
      const storyImage = storyImageRef.current;
      const storyText = storyTextRef.current;

      if (
        storySection &&
        storyImageWrapper &&
        storyImageParallax &&
        storyImage &&
        storyText
      ) {
        const storyTextElements = storyText.querySelectorAll(".story-reveal");
        gsap
          .timeline({
            scrollTrigger: {
              trigger: storySection,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          })
          .to(storyImageWrapper, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.8,
            ease: "power4.inOut",
          })
          .to(
            storyImage,
            { scale: 1.0, duration: 2.2, ease: "power4.out" },
            "-=1.6",
          )
          .fromTo(
            storyTextElements,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.4,
              ease: "power4.out",
              stagger: 0.15,
            },
            "-=1.4",
          );

        gsap.fromTo(
          storyImageParallax,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: storyImageWrapper,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.3,
            },
          },
        );
      }

      // 6. Team
      const teamSection = teamSectionRef.current;
      const teamTitle = teamTitleRef.current;
      const teamGrid = teamGridRef.current;

      if (teamSection) {
        if (teamTitle) {
          const titleElements =
            teamTitle.querySelectorAll(".team-title-reveal");
          gsap.fromTo(
            titleElements,
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
                toggleActions: "play none none none",
              },
            },
          );
        }
        if (teamGrid) {
          const members = teamGrid.querySelectorAll(".team-member-reveal");
          gsap.fromTo(
            members,
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
                toggleActions: "play none none none",
              },
            },
          );
        }
      }
    });

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      icon: Shield,
      title: "Exceptional Service",
      description:
        "We aim to delight and surprise our clients, delivering exceptional service and exceeding tenant expectations at every step of every transaction.",
    },
    {
      icon: Eye,
      title: "Asset & Infrastructure Protection",
      description:
        "We focus on managing, protecting, and maximizing the potential of property and infrastructure assets into the 21st Century.",
    },
    {
      icon: Award,
      title: "Collaborative Expertise",
      description:
        "Backed by 15 years of experience in the real estate market, working collaboratively with professionals to ensure quality living.",
    },
  ];

  const milestones = [
    {
      year: "15 Years",
      title: "Proven Market Presence",
      description:
        "Fifteen years of dedicated real estate and property management experience across Abu Dhabi and Al Ain.",
    },
    {
      year: "21st Century",
      title: "Aligned Management Mission",
      description:
        "Aligning company and client interests through continuous service, asset protection, and value maximization.",
    },
  ];

  const leaders = [
    {
      name: "Abdul Salam Mundodan Muhammed Koya",
      role: "Managing Director",
      image: "/teams/abdul-salam-mundodan.png",
    },
    {
      name: "Midlaj",
      role: "Office Manager",
      image: "/teams/midlaj.png",
    },
    {
      name: "Haneefa Mundodan",
      role: "Administrative Manager",
      image: "/teams/haneefa.png",
    },
    {
      name: "Abdul Rasak",
      role: "HR Manager",
      image: "/teams/abdul-rasak.png",
    },
    {
      name: "Muhammed Abdul Rahman Sadak",
      role: "Accounts manager",
      image: "/teams/muhammed-abdul-rahman-sadak.png",
    },
    {
      name: "Fayis Thekkumpurathu",
      role: "Supervisor",
      image: "/teams/fayis.png",
    },
  ];

  return (
    <div className="bg-brand-cream min-h-screen flex flex-col selection:bg-brand-gold selection:text-brand-black">
      <Navbar />

      {/* ── Hero Banner ── */}
      <section
        ref={heroSectionRef}
        className="relative pt-20 pb-10 md:pt-24 md:pb-14 border-b border-brand-gold/15 overflow-hidden"
      >
        <Image
          ref={heroImageRef}
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600"
          alt="Premium real estate architecture at dusk"
          fill
          className="object-cover object-center pointer-events-none z-0 scale-[1.05]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-brand-black/90 backdrop-blur-[3px] z-10" />

        <div
          ref={heroTextRef}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16"
        >
          <div className="hero-reveal mb-4 flex justify-start">
            <Breadcrumb items={[{ label: "About Us" }]} />
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="hero-reveal mb-3 flex items-center justify-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-xs font-sans font-semibold tracking-[0.2em] text-brand-gold uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                Since 2010
              </span>
            </div>
            <span className="hero-reveal text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-3 block">
              Asset Homes Property Management LLC
            </span>
            <h1 className="hero-reveal font-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white mb-3 max-w-2xl mx-auto leading-tight">
              Bringing Management Into The{" "}
              <span className="text-brand-gold italic">21st Century</span>
            </h1>
            <p className="hero-reveal text-brand-cream/80 text-xs sm:text-sm font-sans leading-relaxed max-w-md mx-auto font-normal">
              Established in 2010 with 15 years of experience, we protect property assets and
              deliver quality living across Abu Dhabi and Al Ain.
            </p>
          </div>
        </div>
      </section>

      {/* ── Intro Split Section ── */}
      <section
        ref={introSectionRef}
        className="bg-brand-beige py-10 sm:py-14 lg:py-16 overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left – text */}
            <div
              ref={introTextRef}
              className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1"
            >
              <span className="intro-reveal text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-3 block">
                Our Mission &amp; Purpose
              </span>
              <h2 className="intro-reveal font-serif text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-brand-black leading-tight mb-4">
                Aligning Interests Through{" "}
                <span className="text-brand-gold italic">
                  Service &amp; Protection
                </span>
              </h2>
              <div className="intro-reveal space-y-3 text-brand-charcoal-light text-xs sm:text-sm font-sans font-light leading-relaxed">
                <p>
                  Our mission is to bring property and infrastructure management
                  into the 21st Century by aligning the interests of the company
                  and client through service and asset protection as well as
                  ensuring the maximization of the asset value.
                </p>
                <p>
                  We aim to delight and surprise our clients, exceed tenant
                  expectations at every step of every transaction, and provide
                  quality living from a team that cares.
                </p>
              </div>
            </div>

            {/* Right – image */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex items-center">
              <div
                ref={introImageWrapperRef}
                className="relative w-full aspect-16/10 lg:aspect-16/10 overflow-hidden shadow-xl rounded-tr-[20px]"
                style={{ clipPath: "inset(0% 100% 0% 0%)" }}
              >
                <Image
                  ref={introImageRef}
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                  alt="Modern premium corporate glass tower in Abu Dhabi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pillars of Stewardship ── */}
      <section
        ref={pillarsSectionRef}
        className="py-10 sm:py-14 lg:py-16 bg-brand-cream border-t border-brand-gold/15"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left sticky label */}
            <div
              ref={pillarsTextRef}
              className="lg:col-span-4 flex flex-col justify-start lg:sticky lg:top-24 h-fit"
            >
              <span className="pillars-reveal text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-3 block">
                Our Core Principles
              </span>
              <h2 className="pillars-reveal font-serif text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-brand-black leading-tight mb-3">
                The Foundations of Our{" "}
                <span className="text-brand-gold italic">Philosophy</span>
              </h2>
              <div className="pillars-reveal w-8 h-px bg-brand-gold mb-3" />
              <p className="pillars-reveal text-brand-charcoal-light text-xs sm:text-sm font-sans font-light leading-relaxed">
                Stewardship is more than simple oversight. It is a philosophy
                that guides our daily actions, ensuring client wealth is
                preserved with engineering-level precision and absolute
                integrity.
              </p>
            </div>

            {/* Right pillar cards */}
            <div ref={pillarsGridRef} className="lg:col-span-8 space-y-3">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="pillar-card relative group bg-brand-beige/30 hover:bg-brand-beige/80 p-4 sm:p-6 border border-brand-gold/10 hover:border-brand-gold/35 transition-all duration-500 rounded-tr-[16px] overflow-hidden flex flex-col justify-center"
                  >
                    <div className="absolute -right-2 top-2 font-serif text-6xl font-semibold text-brand-gold/5 select-none pointer-events-none z-0">
                      0{idx + 1}
                    </div>
                    <div className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
                      <div className="shrink-0 p-2 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
                        <Icon className="w-4 h-4 stroke-[1.2]" />
                      </div>
                      <div className="space-y-1.5 pr-8">
                        <h3 className="font-serif text-base font-medium text-brand-black">
                          {pillar.title}
                        </h3>
                        <p className="text-brand-charcoal-light text-xs font-sans font-light leading-relaxed">
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

      {/* ── Milestones Timeline ── */}
      <section
        ref={timelineSectionRef}
        className="bg-brand-beige py-10 sm:py-14 lg:py-16 border-t border-brand-gold/15"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl mb-8 md:mb-10">
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-2 block">
              Our Journey
            </span>
            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-brand-black leading-tight">
              Milestones of{" "}
              <span className="text-brand-gold italic">Excellence</span>
            </h2>
          </div>

          <div className="relative">
            <div
              ref={timelineLineRef}
              className="absolute top-5 left-0 right-0 h-[1.5px] bg-brand-gold/35 hidden md:block z-0 origin-left"
            />
            <div
              ref={timelineGridRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
            >
              {milestones.map((item) => (
                <div
                  key={item.year}
                  className="timeline-reveal pt-6 md:pt-0 relative"
                >
                  <div className="absolute top-[12px] left-0 w-2.5 h-2.5 rounded-full bg-brand-gold border-4 border-brand-beige hidden md:block z-10" />
                  <span className="font-serif text-2xl sm:text-3xl font-light text-brand-gold mb-2 mt-4 block">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-sm font-semibold text-brand-black mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-brand-charcoal-light text-xs font-sans font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Signature Story Section ── */}
      <section
        ref={storySectionRef}
        className="bg-[#F8F5F0] py-10 sm:py-14 lg:py-16 relative overflow-hidden z-10 border-t border-brand-gold/15"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left – image */}
          <div className="lg:col-span-7 flex flex-col">
            <div
              ref={storyImageWrapperRef}
              className="relative w-full aspect-16/9 overflow-hidden bg-brand-beige shadow-lg"
              style={{ clipPath: "inset(0% 100% 0% 0%)" }}
            >
              <div
                ref={storyImageParallaxRef}
                className="relative w-full h-full"
              >
                <Image
                  ref={storyImageRef}
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600"
                  alt="Luxury minimalist architecture villa at dusk"
                  fill
                  className="object-cover scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>
            </div>
            <span className="text-[9px] font-sans font-bold tracking-[0.25em] text-[#1F1F1F]/40 uppercase mt-3 block">
              Architectural Detail, Yas Island Waterfront — Abu Dhabi
            </span>
          </div>

          {/* Right – text */}
          <div
            ref={storyTextRef}
            className="lg:col-span-5 flex flex-col justify-center space-y-4"
          >
            <span className="story-reveal text-[10px] font-sans font-bold tracking-[0.3em] text-brand-gold uppercase block">
              OUR COMMITMENT
            </span>
            <h2 className="story-reveal font-serif text-xl sm:text-2xl lg:text-3xl font-light text-brand-black leading-tight">
              Every Property Deserves{" "}
              <span className="text-brand-gold italic font-serif">
                Exceptional Stewardship
              </span>
            </h2>
            <p className="story-reveal text-brand-charcoal-light text-xs sm:text-sm font-sans font-light leading-relaxed">
              Every asset represents years of dedication, investment, and
              ambition. Our responsibility extends beyond management—we preserve
              value, anticipate challenges, and ensure every property continues
              to perform for generations.
            </p>
            <div className="story-reveal border-l border-brand-gold/30 pl-4 py-1">
              <span className="font-serif italic text-xs sm:text-sm text-brand-gold block">
                &ldquo;True property management begins long before issues
                arise.&rdquo;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership Team ── */}
      <section
        ref={teamSectionRef}
        className="py-10 sm:py-14 lg:py-16 bg-brand-cream border-t border-brand-gold/15"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div ref={teamTitleRef} className="max-w-2xl mb-8 md:mb-10">
            <span className="team-title-reveal text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-2 block">
              Leadership
            </span>
            <h2 className="team-title-reveal font-serif text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-brand-black leading-tight">
              The People Behind{" "}
              <span className="text-brand-gold italic">Asset Homes</span>
            </h2>
          </div>

          <div
            ref={teamGridRef}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto"
          >
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="team-member-reveal group flex flex-col items-start w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)]"
              >
                {/* Photo */}
                <div className="relative aspect-4/5 w-full overflow-hidden bg-brand-beige mb-3 rounded-tr-[12px] shadow-xs border border-brand-gold/30 group-hover:border-brand-gold transition-colors duration-300">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    className="object-cover object-top rounded-tr-[12px] transition-transform duration-500 ease-out group-hover:scale-103 select-none pointer-events-none"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-sm sm:text-base font-medium text-brand-black leading-snug">
                    {leader.name}
                  </h3>
                  <p className="text-[9px] font-sans font-bold tracking-wider text-brand-gold uppercase mt-0.5">
                    {leader.role}
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
