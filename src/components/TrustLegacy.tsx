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
                  scrub: true,
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
    <section ref={sectionRef} id="heritage" className="bg-brand-beige py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Editorial text block) */}
          <div ref={textContainerRef} className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            <span className="text-reveal text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 opacity-0 block">
              Our Heritage
            </span>
            
            <h2 className="text-reveal font-serif text-3xl sm:text-4xl lg:text-7xl font-medium tracking-tight text-brand-black leading-tight mb-6 opacity-0">
              A Legacy of <span className="text-brand-gold italic">Trust</span> in the Heart of Abu Dhabi
            </h2>
            
            <div className="space-y-6 text-brand-charcoal-light text-base font-sans font-normal leading-relaxed">
              <p className="text-reveal opacity-0">
                Founded on the principles of transparency and architectural preservation, Asset Homes Property Management LLC has established itself as the trusted partner for local and institutional real estate owners across the United Arab Emirates.
              </p>
              <p className="text-reveal opacity-0">
                We recognize that property is more than bricks and mortar; it is a critical asset class that requires strategic oversight. From Al Reem Island to Saadiyat Beach, our deep understanding of the Abu Dhabi regulatory landscape and tenant demography allows us to curate bespoke management plans that unlock maximum value.
              </p>
              <p className="text-reveal border-l-2 border-brand-gold pl-4 italic text-brand-charcoal opacity-0">
                &quot;Our mission is to safeguard and elevate your real estate wealth, ensuring that every asset performs to its maximum potential under our meticulous stewardship.&quot;
              </p>
            </div>
          </div>

          {/* Right Column (Offset image layout) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div 
              ref={imageWrapperRef}
              className="relative w-full aspect-16/10 sm:aspect-video lg:aspect-16/10 overflow-hidden shadow-xl opacity-0"
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
