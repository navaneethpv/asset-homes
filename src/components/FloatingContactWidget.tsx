"use client";

import { PhoneCall } from "lucide-react";

export default function FloatingContactWidget() {
  const phoneNumber = "+971280027738";
  const whatsappUrl = `https://wa.me/971280027738?text=${encodeURIComponent(
    "Hello Asset Homes, I would like to inquire about your property management services."
  )}`;

  return (
    <div className="fixed right-0 bottom-20 sm:bottom-28 z-50 flex flex-col items-end gap-3 pointer-events-auto selection:bg-none">
      
      {/* 1. Official WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-end h-11 sm:h-12 bg-brand-black/95 backdrop-blur-md border border-r-0 border-emerald-500/30 hover:border-emerald-500 rounded-l-full text-white shadow-2xl transition-all duration-400 ease-out overflow-hidden max-w-[44px] sm:max-w-[48px] hover:max-w-[240px] sm:hover:max-w-[250px] cursor-pointer"
      >
        {/* Expanded Text Label */}
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out whitespace-nowrap text-[10px] sm:text-[11px] font-sans font-bold tracking-widest uppercase text-emerald-400 pl-4 sm:pl-5 pr-2.5">
          WhatsApp Advisory
        </span>

        {/* Official Crisp WhatsApp Vector Icon */}
        <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-brand-black transition-colors duration-300 rounded-full">
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.993L2 22l5.233-1.237a9.96 9.96 0 004.779 1.221h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.667-1.04-5.176-2.928-7.062A9.923 9.923 0 0012.012 2zm5.727 14.195c-.244.686-1.42 1.312-1.956 1.396-.518.08-1.168.115-3.593-.85-2.977-1.185-4.88-4.22-5.029-4.417-.148-.197-1.21-1.611-1.21-3.072 0-1.462.766-2.181 1.04-2.477.273-.296.596-.37.794-.37.198 0 .396.002.57.01.183.008.43-.069.673.514.244.584.832 2.03.905 2.179.073.148.123.321.025.518-.099.197-.148.32-.296.495-.148.174-.312.389-.446.522-.148.148-.303.31-.13.606.173.296.769 1.267 1.65 2.052 1.134 1.008 2.091 1.321 2.388 1.469.297.148.471.123.644-.074.173-.197.742-.865.94-1.162.198-.297.396-.247.668-.148.272.099 1.73.816 2.027.964.297.148.495.222.569.346.074.123.074.717-.17 1.403z" />
          </svg>
        </div>
      </a>

      {/* 2. Direct Call Action Button */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call Advisory"
        className="group relative flex items-center justify-end h-11 sm:h-12 bg-brand-black/95 backdrop-blur-md border border-r-0 border-brand-gold/30 hover:border-brand-gold rounded-l-full text-white shadow-2xl transition-all duration-400 ease-out overflow-hidden max-w-[44px] sm:max-w-[48px] hover:max-w-[240px] sm:hover:max-w-[250px] cursor-pointer"
      >
        {/* Expanded Text Label */}
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out whitespace-nowrap text-[10px] sm:text-[11px] font-sans font-bold tracking-widest uppercase text-brand-gold pl-4 sm:pl-5 pr-2.5">
          Call Advisory
        </span>

        {/* Crisp Lucide PhoneCall Icon Container */}
        <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-brand-gold/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-colors duration-300 rounded-full">
          <PhoneCall className="w-4.5 h-4.5 stroke-[1.75]" />
        </div>
      </a>

    </div>
  );
}
