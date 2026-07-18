"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Testimonial() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const clientInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const quote = quoteRef.current;
      const divider = dividerRef.current;
      const clientInfo = clientInfoRef.current;

      if (section) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none none",
          }
        });

        tl.fromTo(".quote-symbol",
          { opacity: 0, scale: 0.5, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.5)" }
        )
        .fromTo(quote,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(divider,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, ease: "power3.inOut" },
          "-=0.6"
        )
        .fromTo(clientInfo?.children || [],
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.15 },
          "-=0.4"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-brand-cream py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="text-center flex flex-col items-center">
          
          {/* Quote Symbol */}
          <span className="quote-symbol font-serif text-6xl text-brand-gold/30 select-none leading-none mb-4 opacity-0 block">
            “
          </span>

          {/* Testimonial Quote */}
          <blockquote 
            ref={quoteRef}
            className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-brand-black leading-relaxed mb-10 max-w-3xl opacity-0"
          >
            Asset Homes has transformed our portfolio performance. Their level of technical expertise and transparency is unmatched in the UAE. I have absolute peace of mind knowing our assets are in their hands.
          </blockquote>

          {/* Divider */}
          <div 
            ref={dividerRef}
            className="w-16 h-[1.5px] bg-brand-gold mb-8 origin-center" 
            style={{ transform: "scaleX(0)" }}
          />

          {/* Client Info */}
          <div ref={clientInfoRef} className="flex flex-col items-center">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-gold/30 mb-4 bg-brand-beige opacity-0">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
                alt="His Excellency Salem Al Mansouri"
                fill
                className="object-cover"
              />
            </div>
            <cite className="not-italic font-serif text-base font-semibold text-brand-black mb-1 opacity-0 block">
              H.E. Salem Al Mansouri
            </cite>
            <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-wider text-brand-gold uppercase opacity-0 block">
              Chairman, Al Mansouri Investments | Abu Dhabi
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
