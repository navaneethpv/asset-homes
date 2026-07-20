"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      // BLOCK 1 ANIMATION
      // Image slides from RIGHT (x: 120 -> 0), text fades upward separately (y: 40 -> 0)
      const block1 = document.querySelector("#block-1");
      if (block1) {
        const imgWrapper = block1.querySelector(".image-wrapper");
        const textElements = block1.querySelectorAll(".text-element");

        gsap.timeline({
          scrollTrigger: {
            trigger: block1,
            start: "top 75%",
            end: "bottom 40%",
            toggleActions: "play none none none",
          }
        })
        .fromTo(imgWrapper, 
          { x: 120, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
        )
        .fromTo(textElements,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.15 },
          "-=0.8"
        );
      }

      // BLOCK 2 ANIMATION
      // Image rises from BOTTOM (y: 150 -> 0, scale 1.08 -> 1), text slides from LEFT (x: -80 -> 0)
      const block2 = document.querySelector("#block-2");
      if (block2) {
        const imgWrapper = block2.querySelector(".image-wrapper");
        const img = block2.querySelector(".block-image");
        const textElements = block2.querySelectorAll(".text-element");

        gsap.timeline({
          scrollTrigger: {
            trigger: block2,
            start: "top 75%",
            end: "bottom 40%",
            toggleActions: "play none none none",
          }
        })
        .fromTo(imgWrapper,
          { y: 150, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
        )
        .fromTo(img,
          { scale: 1.08 },
          { scale: 1, duration: 1.2, ease: "power3.out" },
          "<"
        )
        .fromTo(textElements,
          { x: -80, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.15 },
          "-=0.6"
        );
      }

      // BLOCK 3 ANIMATION
      // Image mask reveal (inset(0 100% 0 0) -> inset(0), scale 1.08 -> 1), text fades, line grows
      const block3 = document.querySelector("#block-3");
      if (block3) {
        const imgWrapper = block3.querySelector(".image-wrapper");
        const img = block3.querySelector(".block-image");
        const goldLine = block3.querySelector(".gold-line");
        const textElements = block3.querySelectorAll(".text-element");

        if (goldLine) {
          gsap.set(goldLine, { transformOrigin: "left" });
        }

        gsap.timeline({
          scrollTrigger: {
            trigger: block3,
            start: "top 75%",
            end: "bottom 40%",
            toggleActions: "play none none none",
          }
        })
        .fromTo(imgWrapper,
          { clipPath: "inset(0 100% 0 0)", opacity: 0 },
          { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 1.2, ease: "power3.out" }
        )
        .fromTo(img,
          { scale: 1.08 },
          { scale: 1, duration: 1.2, ease: "power3.out" },
          "<"
        )
        .fromTo(goldLine,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6, ease: "power3.out" },
          "-=0.8"
        )
        .fromTo(textElements,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.15 },
          "-=0.6"
        );
      }

      // BLOCK 4 ANIMATION
      // Image enters from LEFT (x: -120 -> 0), text enters from RIGHT (x: 80 -> 0), CTA last
      const block4 = document.querySelector("#block-4");
      if (block4) {
        const imgWrapper = block4.querySelector(".image-wrapper");
        const img = block4.querySelector(".block-image");
        const textElements = block4.querySelectorAll(".text-element-main");
        const cta = block4.querySelector(".cta-element");

        gsap.timeline({
          scrollTrigger: {
            trigger: block4,
            start: "top 75%",
            end: "bottom 40%",
            toggleActions: "play none none none",
          }
        })
        .fromTo(imgWrapper,
          { x: -120, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
        )
        .fromTo(img,
          { scale: 1.08 },
          { scale: 1, duration: 1.2, ease: "power3.out" },
          "<"
        )
        .fromTo(textElements,
          { x: 80, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.15 },
          "-=0.8"
        )
        .fromTo(cta,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        );
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} id="why-choose-us" className="bg-brand-beige py-24 sm:py-20">
      <div className="w-full max-w-none px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-7xl font-medium tracking-tight text-brand-black mb-6 leading-tight">
            Why Property Owners <span className="text-brand-gold italic">Choose</span> Asset Homes
          </h2>
          <p className="text-brand-charcoal-light text-base font-sans leading-relaxed max-w-2xl mx-auto">
            We combine local expertise, transparent management, and proactive property care to protect your investment while delivering exceptional experiences for owners and tenants.
          </p>
        </div>

        {/* Editorial Blocks */}
        <div className="divide-y divide-brand-gold/10">
          
          {/* BLOCK 1 */}
          <div id="block-1" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-12 sm:py-16">
            {/* Text block */}
            <div className="lg:col-span-6 flex flex-col justify-center lg:order-1">
              <div className="flex flex-col">
                <div className="text-element flex items-center gap-3 mb-6">
                  <span className="font-serif text-lg font-medium text-brand-gold">01</span>
                  <div className="h-px w-8 bg-brand-gold/30" />
                </div>
                
                <h3 className="text-element font-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-brand-black mb-6 leading-tight">
                  Local Expertise & Meticulous Care
                </h3>
                <p className="text-element text-brand-charcoal-light text-sm sm:text-base font-sans leading-relaxed mb-8">
                  Our team possesses deep local knowledge of Abu Dhabi&apos;s premier communities—from Al Reem to Saadiyat. We provide proactive asset management that prevents issues before they arise, ensuring your property is maintained to the highest standards.
                </p>
                
                <div className="text-element">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-3 group/link text-[10px] font-sans font-bold tracking-widest text-brand-gold hover:text-brand-gold-dark uppercase transition-colors duration-300"
                  >
                    <span>Learn More</span>
                    <div className="flex items-center">
                      <div className="w-12 h-px bg-brand-gold/60 group-hover/link:w-16 transition-all duration-300" />
                      <span className="text-[10px] -ml-px transition-transform duration-300 group-hover/link:translate-x-1.5">→</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* Image block */}
            <div className="lg:col-span-6 lg:order-2">
              <div className="image-wrapper relative aspect-[3/2] w-full overflow-hidden bg-brand-beige shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
                  alt="Luxury villa residential property in Abu Dhabi"
                  fill
                  className="block-image object-cover transform hover:scale-103 transition-transform duration-[350ms] ease-out will-change-transform"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>

          {/* BLOCK 2 */}
          <div id="block-2" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-12 sm:py-16">
            {/* Text block */}
            <div className="lg:col-span-6 flex flex-col justify-center lg:order-2">
              <div className="flex flex-col">
                <div className="text-element flex items-center gap-3 mb-6">
                  <span className="font-serif text-lg font-medium text-brand-gold">02</span>
                  <div className="h-px w-8 bg-brand-gold/30" />
                </div>
                
                <h3 className="text-element font-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-brand-black mb-6 leading-tight">
                  Transparent & Detailed Operations
                </h3>
                <p className="text-element text-brand-charcoal-light text-sm sm:text-base font-sans leading-relaxed mb-8">
                  We believe in absolute transparency. Owners receive regular updates, detailed financial reporting, and clear communication on tenant relations and maintenance, giving you complete visibility and control over your investment.
                </p>
                
                <div className="text-element">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-3 group/link text-[10px] font-sans font-bold tracking-widest text-brand-gold hover:text-brand-gold-dark uppercase transition-colors duration-300"
                  >
                    <span>Learn More</span>
                    <div className="flex items-center">
                      <div className="w-12 h-px bg-brand-gold/60 group-hover/link:w-16 transition-all duration-300" />
                      <span className="text-[10px] -ml-px transition-transform duration-300 group-hover/link:translate-x-1.5">→</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* Image block */}
            <div className="lg:col-span-6 lg:order-1">
              <div className="image-wrapper relative aspect-[3/2] w-full overflow-hidden bg-brand-beige shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
                  alt="Modern luxury property interior living space"
                  fill
                  className="block-image object-cover transform hover:scale-103 transition-transform duration-[350ms] ease-out will-change-transform"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>

          {/* BLOCK 3 */}
          <div id="block-3" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-12 sm:py-16">
            {/* Text block */}
            <div className="lg:col-span-6 flex flex-col justify-center lg:order-1">
              <div className="flex flex-col">
                <div className="text-element flex items-center gap-3 mb-6">
                  <span className="font-serif text-lg font-medium text-brand-gold">03</span>
                  <div className="gold-line h-px w-8 bg-brand-gold/30" />
                </div>
                
                <h3 className="text-element font-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-brand-black mb-6 leading-tight">
                  Proactive Maintenance & Optimization
                </h3>
                <p className="text-element text-brand-charcoal-light text-sm sm:text-base font-sans leading-relaxed mb-8">
                  Routine inspections, preventive maintenance, and rapid response to maintenance requests help preserve your property&apos;s long-term value while reducing unexpected expenses.
                </p>
                
                <div className="text-element">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-3 group/link text-[10px] font-sans font-bold tracking-widest text-brand-gold hover:text-brand-gold-dark uppercase transition-colors duration-300"
                  >
                    <span>Learn More</span>
                    <div className="flex items-center">
                      <div className="w-12 h-px bg-brand-gold/60 group-hover/link:w-16 transition-all duration-300" />
                      <span className="text-[10px] -ml-px transition-transform duration-300 group-hover/link:translate-x-1.5">→</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* Image block */}
            <div className="lg:col-span-6 lg:order-2">
              <div className="image-wrapper relative aspect-[3/2] w-full overflow-hidden bg-brand-beige shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
                  alt="Beautiful modern home exterior with swimming pool"
                  fill
                  className="block-image object-cover transform hover:scale-103 transition-transform duration-[350ms] ease-out will-change-transform"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>

          {/* BLOCK 4 */}
          <div id="block-4" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-12 sm:py-16">
            {/* Text block */}
            <div className="lg:col-span-6 flex flex-col justify-center lg:order-2">
              <div className="flex flex-col">
                <div className="text-element-main flex items-center gap-3 mb-6">
                  <span className="font-serif text-lg font-medium text-brand-gold">04</span>
                  <div className="h-px w-8 bg-brand-gold/30" />
                </div>
                
                <h3 className="text-element-main font-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-brand-black mb-6 leading-tight">
                  Elevated Tenant & Owner Experiences
                </h3>
                <p className="text-element-main text-brand-charcoal-light text-sm sm:text-base font-sans leading-relaxed mb-8">
                  By combining high-end hospitality practices with efficient operations, we deliver an exceptional experience that keeps quality tenants happy and ensures steady rental yields.
                </p>
                
                <div className="cta-element">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-3 group/link text-[10px] font-sans font-bold tracking-widest text-brand-gold hover:text-brand-gold-dark uppercase transition-colors duration-300"
                  >
                    <span>Learn More</span>
                    <div className="flex items-center">
                      <div className="w-12 h-px bg-brand-gold/60 group-hover/link:w-16 transition-all duration-300" />
                      <span className="text-[10px] -ml-px transition-transform duration-300 group-hover/link:translate-x-1.5">→</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* Image block */}
            <div className="lg:col-span-6 lg:order-1">
              <div className="image-wrapper relative aspect-[3/2] w-full overflow-hidden bg-brand-beige shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800"
                  alt="Modern Abu Dhabi skyline with premium residential properties"
                  fill
                  className="block-image object-cover transform hover:scale-103 transition-transform duration-[350ms] ease-out will-change-transform"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
