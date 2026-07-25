"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 
        Gold Curtain Layer (Double-curtain clipWipe)
        Wipes from left to right using a luxury editorial ease curve.
      */}
      <motion.div
        className="fixed inset-0 bg-brand-gold z-9999 pointer-events-none"
        initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        animate={{ clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
      />
      
      {/* 
        Black Curtain Layer
        Follows shortly after the gold layer to reveal the new page content.
      */}
      {/* <motion.div
        className="fixed inset-0 bg-brand-black z-9998 pointer-events-none"
        initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        animate={{ clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" }}
        transition={{ duration: 0.95, delay: 0.08, ease: [0.76, 0, 0.24, 1] }}
      /> */}
      
      {children}
    </>
  );
}
