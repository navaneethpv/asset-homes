"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TrustLegacy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const textContainer = textContainerRef.current;
      const imageWrapper = imageWrapperRef.current;
      const image = imageRef.current;

      if (section && textContainer && imageWrapper) {
        const textElements = textContainer.querySelectorAll(".text-reveal");

        // 1. Entrance timeline
        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none none",
          }
        })
        .fromTo(imageWrapper,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
        )
        .fromTo(textElements,
          { x: 80, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.15 },
          "-=0.9"
        );

        // 2. Editorial Image Parallax (Only on desktop)
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          if (image) {
            gsap.fromTo(image,
              { y: 0, scale: 1.15 },
              {
                y: -80,
                scale: 1.15,
                ease: "none",
                scrollTrigger: {
                  trigger: imageWrapper,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.5,
                }
              }
            );
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="heritage" className="bg-brand-beige py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Editorial text block) */}
          <div ref={textContainerRef} className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
<<<<<<< HEAD
            <span className="text-reveal text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 opacity-0 block">
              15 Years of Experience
            </span>
=======
            <div className="text-reveal opacity-0 mb-4 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-xs font-sans font-semibold tracking-[0.2em] text-brand-gold uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                Since 2010
              </span>
              <span className="text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase">
                • 15 Years of Experience
              </span>
            </div>
>>>>>>> origin/feat
            
            <h2 className="text-reveal font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight text-brand-black leading-tight mb-5 opacity-0">
              Fifteen Years of <span className="text-brand-gold italic">Service &amp; Protection</span>
            </h2>
            
            <div className="space-y-4 text-brand-charcoal-light text-sm font-sans font-normal leading-relaxed">
              <p className="text-reveal opacity-0">
                With 15 years of experience in the real estate market, Asset Homes Property Management LLC delivers dedicated management and protection for property assets across Abu Dhabi and Al Ain.
              </p>
              <p className="text-reveal opacity-0">
                We focus on managing, protecting, and maximizing the potential of property assets, working collaboratively with real estate professionals to deliver exceptional service and exceed expectations at every step.
              </p>
              <p className="text-reveal border-l-2 border-brand-gold pl-4 italic text-brand-charcoal opacity-0">
                &quot;Our mission is to bring property and infrastructure management into the 21st Century by aligning the interests of the company and client through service, asset protection, and value maximization.&quot;
              </p>
            </div>
          </div>

          {/* Right Column (Offset image layout) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div 
              ref={imageWrapperRef}
              className="relative w-full aspect-16/10 sm:aspect-video lg:aspect-16/10 overflow-hidden shadow-xl rounded-sm border border-brand-gold/20 opacity-0"
            >
              <Image
                ref={imageRef}
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200"
                alt="Luxury property reception and lobby space"
                fill
                className="object-cover will-change-transform"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
