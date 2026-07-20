"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import { ArrowUpRight, Phone, Mail, MapPin, Clock, Compass, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  heroData,
  officeLocations,
  contactInfoItems,
  inquiryOptions,
  OfficeLocation
} from "@/data/contactData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap = {
  Phone,
  Mail,
  MapPin,
  Clock,
};

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);

  const [activeLocation, setActiveLocation] = useState<OfficeLocation>(officeLocations[0]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text reveals
      const revealElements = document.querySelectorAll(".c-reveal");
      revealElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      // 2. Hero Background Image Parallax
      const heroSection = heroSectionRef.current;
      const heroImage = heroImageRef.current;
      if (heroSection && heroImage) {
        gsap.fromTo(
          heroImage,
          { yPercent: 0, scale: 1.05 },
          {
            yPercent: 12,
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
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
    }, 1000);
  };

  const getMapEmbedUrl = (lat: number, lng: number) => {
    return `https://maps.google.com/maps?q=${lat},${lng}&hl=en&z=15&output=embed`;
  };

  return (
    <div
      ref={pageRef}
      className="bg-brand-cream text-brand-charcoal selection:bg-brand-gold/30 selection:text-brand-black antialiased overflow-x-hidden"
    >
      <Navbar />

      {/* =========================================================================
          HERO SECTION — High-Impact Photography & Editorial Copy
          ========================================================================= */}
      <section
        ref={heroSectionRef}
        className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:h-[90vh] w-full flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-12 lg:pt-28 lg:pb-20 border-b border-brand-gold/15 overflow-hidden"
      >
        {/* Full-screen Background Photography */}
        <Image
          ref={heroImageRef}
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600"
          alt="Asset Homes Executive Contact & Operations Hub"
          fill
          className="object-cover object-center pointer-events-none z-0 scale-[1.05]"
          priority
        />
        {/* Dark Editorial Overlay */}
        <div className="absolute inset-0 bg-brand-black/88 backdrop-blur-[2px] z-10" />

        {/* Top-Left Breadcrumb */}
        <div className="relative z-20 w-full max-w-none px-4 sm:px-8 lg:px-20 xl:px-32 pt-2 sm:pt-4">
          <Breadcrumb items={[{ label: "Contact Us" }]} />
        </div>

        {/* Hero Copy */}
        <div className="relative z-20 w-full max-w-none px-4 sm:px-8 lg:px-20 xl:px-32 my-auto py-6 sm:py-10 lg:py-12">
          <div className="max-w-4xl text-center md:text-left">
            <span className="c-reveal text-[9px] sm:text-xs font-sans font-bold tracking-[0.2em] sm:tracking-[0.3em] text-brand-gold uppercase mb-3 sm:mb-6 block">
              {heroData.eyebrow}
            </span>

            <h1 className="c-reveal font-serif text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-normal tracking-tight text-white mb-4 sm:mb-6 lg:mb-8 leading-[1.15] sm:leading-[1.1]">
              {heroData.titleLine1} <br className="hidden sm:inline" />
              <span className="text-brand-gold italic">{heroData.titleHighlight}</span>
            </h1>

            <p className="c-reveal text-brand-cream/80 text-xs sm:text-base lg:text-xl font-sans font-light leading-relaxed max-w-2xl mb-6 sm:mb-10 mx-auto md:mx-0">
              {heroData.description}
            </p>

            <div className="c-reveal flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a
                href="#inquiry-form"
                className="inline-flex items-center gap-2.5 sm:gap-3 px-5 py-3 sm:px-8 sm:py-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-black text-[10px] sm:text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 shadow-xl group"
              >
                <span>{heroData.ctaText}</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTACT DETAILS CARDS — Telephone, Email, Address, 24/7 Support
          ========================================================================= */}
      <section className="py-12 sm:py-20 lg:py-28 bg-brand-cream border-b border-brand-gold/15">
        <div className="w-full max-w-none px-4 sm:px-8 lg:px-20 xl:px-32">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {contactInfoItems.map((item) => {
              const IconComponent = iconMap[item.iconName as keyof typeof iconMap] || Phone;

              return (
                <div
                  key={item.id}
                  className="c-reveal group bg-brand-beige/70 p-6 sm:p-8 border border-brand-gold/20 hover:border-brand-gold/50 shadow-sm hover:shadow-xl transition-all duration-500 rounded-tr-[20px] sm:rounded-tr-[28px] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-gold/15 border border-brand-gold/30 text-brand-gold flex items-center justify-center mb-5">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <span className="text-[8px] sm:text-[9px] font-sans font-bold tracking-[0.2em] text-brand-gold uppercase block mb-1">
                      {item.subtitle}
                    </span>

                    <h3 className="font-serif text-lg sm:text-xl font-medium text-brand-black mb-2 group-hover:text-brand-gold transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-sans font-semibold text-brand-black mb-3">
                      {item.value}
                    </p>

                    <p className="text-[11px] sm:text-xs font-sans font-light text-brand-charcoal-light leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          INQUIRY INTAKE FORM — Luxury Form Component
          ========================================================================= */}
      <section id="inquiry-form" className="py-14 sm:py-24 lg:py-32 bg-brand-cream border-b border-brand-gold/15">
        <div className="w-full max-w-none px-4 sm:px-8 lg:px-20 xl:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Form Header & Guidance */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <span className="c-reveal text-[9px] sm:text-xs font-sans font-bold tracking-[0.2em] sm:tracking-[0.25em] text-brand-gold uppercase block">
                Direct Intake
              </span>

              <h2 className="c-reveal font-serif text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-brand-black leading-tight">
                Submit Your <br />
                <span className="text-brand-gold italic">Property Prospectus</span>
              </h2>

              <p className="c-reveal text-brand-charcoal-light text-xs sm:text-base font-sans font-light leading-relaxed">
                Whether onboarding a single luxury asset or an institutional portfolio, submit your query to connect directly with our operational leadership.
              </p>

              <div className="c-reveal pt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-brand-gold/15 text-brand-gold mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-semibold text-brand-black">Strict Confidentiality</h5>
                    <p className="text-xs font-sans font-light text-brand-charcoal-light">All financial and property data is handled under strict Non-Disclosure Protocols.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 bg-brand-gold/15 text-brand-gold mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-semibold text-brand-black">24-Hour Review Turnaround</h5>
                    <p className="text-xs font-sans font-light text-brand-charcoal-light">Senior advisory team reviews every submission within one business day.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Luxury Form */}
            <div className="lg:col-span-7">
              <div className="c-reveal bg-brand-beige/70 p-6 sm:p-10 border border-brand-gold/30 shadow-xl rounded-tr-[24px] sm:rounded-tr-[32px]">
                
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 bg-brand-gold/20 border border-brand-gold text-brand-gold mx-auto flex items-center justify-center rounded-full">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-brand-black">
                      Inquiry Received
                    </h3>
                    <p className="text-xs sm:text-sm font-sans font-light text-brand-charcoal-light max-w-md mx-auto leading-relaxed">
                      Thank you. Your submission has been securely routed to our senior advisory desk in Abu Dhabi. We will be in contact shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 px-6 py-2.5 bg-brand-black text-brand-cream text-[10px] font-sans font-bold uppercase tracking-widest"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[10px] font-sans font-bold tracking-widest text-brand-black uppercase block mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Tariq Al-Mansoori"
                          className="w-full px-4 py-3 bg-brand-cream border border-brand-gold/20 focus:border-brand-gold focus:outline-none text-xs sm:text-sm font-sans text-brand-black placeholder:text-brand-charcoal-light/50 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-sans font-bold tracking-widest text-brand-black uppercase block mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 bg-brand-cream border border-brand-gold/20 focus:border-brand-gold focus:outline-none text-xs sm:text-sm font-sans text-brand-black placeholder:text-brand-charcoal-light/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[10px] font-sans font-bold tracking-widest text-brand-black uppercase block mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+971 50 000 0000"
                          className="w-full px-4 py-3 bg-brand-cream border border-brand-gold/20 focus:border-brand-gold focus:outline-none text-xs sm:text-sm font-sans text-brand-black placeholder:text-brand-charcoal-light/50 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-sans font-bold tracking-widest text-brand-black uppercase block mb-2">
                          Inquiry Subject *
                        </label>
                        <select
                          required
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full px-4 py-3 bg-brand-cream border border-brand-gold/20 focus:border-brand-gold focus:outline-none text-xs sm:text-sm font-sans text-brand-black transition-colors"
                        >
                          {inquiryOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-sans font-bold tracking-widest text-brand-black uppercase block mb-2">
                        Message &amp; Property Details *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please provide details about your property address, unit count, or specific management requirements..."
                        className="w-full px-4 py-3 bg-brand-cream border border-brand-gold/20 focus:border-brand-gold focus:outline-none text-xs sm:text-sm font-sans text-brand-black placeholder:text-brand-charcoal-light/50 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-black text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 shadow-xl group disabled:opacity-50"
                    >
                      <span>{isSubmitting ? "Routing Submission..." : "Send Intake Inquiry"}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR LOCATIONS & GOOGLE MAP — Clean Bottom Map Section
          ========================================================================= */}
      <section className="py-14 sm:py-24 lg:py-32 bg-brand-beige border-b border-brand-gold/15">
        <div className="w-full max-w-none px-4 sm:px-8 lg:px-20 xl:px-32">
          
          {/* Section Heading */}
          <div className="max-w-3xl mb-8 sm:mb-14">
            <span className="c-reveal text-[9px] sm:text-xs font-sans font-bold tracking-[0.2em] sm:tracking-[0.25em] text-brand-gold uppercase mb-3 sm:mb-4 block">
              Headquarters &amp; Hubs
            </span>
            <h2 className="c-reveal font-serif text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-brand-black leading-tight">
              Our Physical <span className="text-brand-gold italic">Locations</span>
            </h2>
          </div>



          {/* Clean Map Frame Container */}
          <div className="c-reveal relative w-full h-[380px] sm:h-[480px] lg:h-[540px] bg-brand-cream border border-brand-gold/30 shadow-xl rounded-tr-[24px] sm:rounded-tr-[36px] overflow-hidden">
            
            {/* Standard Full-Color Google Map */}
            <iframe
              title={`Map - ${activeLocation.city}`}
              src={getMapEmbedUrl(activeLocation.lat, activeLocation.lng)}
              className="w-full h-full border-0"
              loading="lazy"
            />

            {/* Floating Info Panel */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto z-20 bg-brand-cream/95 backdrop-blur-md p-4 sm:p-6 border border-brand-gold/30 text-brand-charcoal shadow-2xl sm:max-w-md rounded-tr-[20px]">
              <div className="flex items-center justify-between gap-4 mb-2">
                <h4 className="font-serif text-base sm:text-lg font-medium text-brand-black">
                  {activeLocation.city}
                </h4>
                <span className="text-[9px] font-sans font-bold tracking-wider text-brand-gold uppercase bg-brand-gold/15 px-2 py-0.5 border border-brand-gold/30">
                  {activeLocation.area}
                </span>
              </div>

              <p className="text-xs font-sans font-light text-brand-charcoal-light leading-relaxed mb-3">
                {activeLocation.address}
              </p>

              <div className="pt-3 border-t border-brand-gold/20 flex flex-wrap items-center justify-between gap-3 text-[10px] sm:text-xs font-sans">
                <span className="text-brand-gold font-bold">{activeLocation.hours}</span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${activeLocation.lat},${activeLocation.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-black hover:text-brand-gold transition-colors font-bold uppercase tracking-wider"
                >
                  <span>Open Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          CINEMATIC CLOSING CTA — Matching All Pages
          ========================================================================= */}
      <section className="relative z-50 bg-brand-black text-brand-cream py-14 sm:py-24 lg:py-44 border-t border-brand-gold/15 overflow-hidden">
        <div className="w-full max-w-none px-4 sm:px-8 lg:px-20 xl:px-32 text-center relative z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <span className="c-reveal text-[9px] sm:text-xs font-sans font-bold tracking-[0.2em] sm:tracking-[0.3em] text-brand-gold uppercase mb-3 sm:mb-6 block">
              Emergency Technical Support
            </span>

            <h2 className="c-reveal font-serif text-2xl sm:text-4xl lg:text-6xl font-normal tracking-tight text-white mb-4 sm:mb-8 leading-tight">
              24/7 MEP Operations <span className="text-brand-gold italic">Dispatch</span>
            </h2>

            <p className="c-reveal text-brand-cream/75 text-xs sm:text-base lg:text-lg font-sans font-light leading-relaxed mb-6 sm:mb-10 lg:mb-12 max-w-xl">
              For urgent building emergencies, plumbing leaks, or HVAC electrical dispatches, call our rapid response center directly.
            </p>

            <div className="c-reveal">
              <a
                href="tel:+971280027738"
                className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-10 py-3.5 sm:py-5 bg-brand-gold hover:bg-brand-gold-dark text-brand-black text-[10px] sm:text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 shadow-2xl group"
              >
                <span>Call Emergency Dispatch</span>
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
