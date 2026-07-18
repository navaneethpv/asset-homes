"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section className="bg-brand-cream/60 py-20 sm:py-24 lg:py-32 border-t border-b border-brand-gold/10">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center"
        >
          {/* Quote Symbol */}
          <span className="font-serif text-6xl text-brand-gold/30 select-none leading-none mb-4">
            “
          </span>

          {/* Testimonial Quote */}
          <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-brand-black leading-relaxed mb-10 max-w-3xl">
            Asset Homes has transformed our portfolio performance. Their level of technical expertise and transparency is unmatched in the UAE. I have absolute peace of mind knowing our assets are in their hands.
          </blockquote>

          {/* Divider */}
          <div className="w-16 h-[1.5px] bg-brand-gold mb-8" />

          {/* Client Info */}
          <div className="flex flex-col items-center">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-gold/30 mb-4 bg-brand-beige">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
                alt="His Excellency Salem Al Mansouri"
                fill
                className="object-cover"
              />
            </div>
            <cite className="not-italic font-serif text-base font-semibold text-brand-black mb-1">
              H.E. Salem Al Mansouri
            </cite>
            <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-wider text-brand-gold uppercase">
              Chairman, Al Mansouri Investments | Abu Dhabi
            </span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
