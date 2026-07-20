"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function WhyChooseUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-cream text-brand-charcoal selection:bg-brand-gold/30 selection:text-brand-black antialiased overflow-x-hidden pt-20">
      <Navbar />
      <main className="grow">
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}
