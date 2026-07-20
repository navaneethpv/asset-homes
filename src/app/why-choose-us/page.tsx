"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";

export default function WhyChooseUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-cream text-brand-charcoal selection:bg-brand-gold/30 selection:text-brand-black antialiased overflow-x-hidden">
      <Navbar />

      <main className="grow">
        {/* Hero Header Banner with Architectural Background Image */}
        <section className="relative pt-28 pb-20 md:pt-32 md:pb-28 border-b border-brand-gold/15 overflow-hidden">
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600"
            alt="Luxury architectural property background"
            fill
            className="object-cover object-center pointer-events-none z-0 scale-[1.05]"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-brand-black/90 backdrop-blur-[2px] z-10" />

          {/* Content */}
          <div className="relative z-20 w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
            {/* Top Left Breadcrumb */}
            <div className="mb-4 flex justify-start">
              <Breadcrumb items={[{ label: "Why Choose Us" }]} />
            </div>

            <div className="text-center flex flex-col items-center">
              <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
                Our Operational Standards
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
                Why Property Owners <span className="text-brand-gold italic">Choose</span> Asset Homes
              </h1>

              <p className="text-brand-cream/90 text-base sm:text-lg font-sans leading-relaxed max-w-2xl mx-auto font-light">
                We combine deep local expertise, 100% transparent management, and proactive engineering-grade property care to protect your investment across Abu Dhabi.
              </p>
            </div>
          </div>
        </section>

        {/* Unmodified WhyChooseUs Content Blocks */}
        <WhyChooseUs />
      </main>

      <Footer />
    </div>
  );
}
