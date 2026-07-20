"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-2">
      <ol className="flex items-center space-x-2 text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-brand-cream/70">
        <li>
          <Link
            href="/"
            className="hover:text-brand-gold transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <ChevronRight className="w-3 h-3 text-brand-gold/60 shrink-0" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-brand-gold transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-brand-gold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
