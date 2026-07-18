"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, Compass } from "lucide-react";

interface Step {
  num: string;
  title: string;
  description: string;
}

export default function OperationalRoadmap() {
  const steps: Step[] = [
    {
      num: "01",
      title: "Onboarding & Audit",
      description: "Thorough assessment of structural integrity, tenant contracts, MEP systems, and financial ledgers.",
    },
    {
      num: "02",
      title: "Strategy & Valuation",
      description: "Establishing rent models, marketing strategy, and budget projections to optimize cash flow yields.",
    },
    {
      num: "03",
      title: "System Integration",
      description: "Deploying portal accounts for tenants and automated financial accounting integrations for the owner.",
    },
    {
      num: "04",
      title: "Active Stewardship",
      description: "Preventative facilities maintenance, 24/7 concierge operations, and active occupancy management.",
    },
    {
      num: "05",
      title: "Yield Optimization",
      description: "Quarterly review of utility spend, tenancy retention rates, and local market cap-rate trends to grow yields.",
    },
  ];

  const pillars = [
    {
      icon: ShieldCheck,
      title: "Professional Rigor",
      description: "We execute every workflow based on strict checklists, ensuring compliance with Abu Dhabi Municipality (ADM) guidelines and ADDC standards.",
    },
    {
      icon: Eye,
      title: "Transparent Reporting",
      description: "No hidden surcharges. Owners get access to a real-time portal featuring detailed cash flow ledgers, invoices, and tenancy contracts.",
    },
    {
      icon: Compass,
      title: "Client-Centric Dedication",
      description: "Bespoke hospitality structures ensure that tenant request tickets are processed rapidly, keeping occupancy high and turnovers low.",
    },
  ];

  return (
    <section id="methodology" className="bg-brand-cream py-20 sm:py-24 lg:py-32 border-t border-brand-gold/10">
      <div className="w-full max-w-none px-6 sm:px-12 lg:px-20 xl:px-32">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 block">
            Our Methodology
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-black mb-4">
            A Seamless Journey to Optimization
          </h2>
          <div className="h-px w-12 bg-brand-gold mx-auto my-6" />
        </div>

        {/* 5-step timeline */}
        <div className="relative mb-24 lg:mb-32">
          {/* Horizontal line for desktop connecting the steps */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[1.5px] bg-brand-gold/20 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Number badge */}
                <div className="w-14 h-14 rounded-full bg-brand-beige border-2 border-brand-gold text-brand-gold font-serif text-lg font-semibold flex items-center justify-center mb-6 shadow-sm">
                  {step.num}
                </div>
                <h3 className="font-serif text-lg font-medium text-brand-black mb-2.5">
                  {step.title}
                </h3>
                <p className="text-brand-charcoal-light text-xs sm:text-sm font-sans leading-relaxed max-w-[200px] lg:max-w-none mx-auto lg:mx-0">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Three Columns Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-brand-gold/15 pt-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col items-start"
              >
                <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-sm mb-5">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h4 className="font-serif text-xl font-medium text-brand-black mb-3">
                  {pillar.title}
                </h4>
                <p className="text-brand-charcoal-light text-sm sm:text-base font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
