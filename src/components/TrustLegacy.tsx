"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustLegacy() {
  return (
    <section id="heritage" className="bg-brand-beige py-20 sm:py-24 lg:py-32">
      <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Editorial text block) */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            <span className="text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4">
              Our Heritage
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-7xl font-medium tracking-tight text-brand-black leading-tight mb-6">
              A Legacy of <span className="text-brand-gold italic">Trust</span> in the Heart of Abu Dhabi
            </h2>
            
            <div className="space-y-6 text-brand-charcoal-light text-base font-sans font-normal leading-relaxed">
              <p>
                Founded on the principles of transparency and architectural preservation, Asset Homes Property Management LLC has established itself as the trusted partner for local and institutional real estate owners across the United Arab Emirates.
              </p>
              <p>
                We recognize that property is more than bricks and mortar; it is a critical asset class that requires strategic oversight. From Al Reem Island to Saadiyat Beach, our deep understanding of the Abu Dhabi regulatory landscape and tenant demography allows us to curate bespoke management plans that unlock maximum value.
              </p>
              <p className="border-l-2 border-brand-gold pl-4 italic text-brand-charcoal">
                &quot;Our mission is to safeguard and elevate your real estate wealth, ensuring that every asset performs to its maximum potential under our meticulous stewardship.&quot;
              </p>
            </div>
          </div>

          {/* Right Column (Offset image layout) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative w-full aspect-16/10 sm:aspect-video lg:aspect-16/10 overflow-hidden shadow-xl">
              <motion.div
                initial={{ scale: 1.05, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full h-full relative"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200"
                  alt="Luxury property reception and lobby space"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-1500"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
