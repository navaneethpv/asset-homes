import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingContactWidget from "@/components/FloatingContactWidget";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Asset Homes Property Management LLC | Abu Dhabi, UAE",
  description: "Institutional-grade and bespoke property management services for exceptional investments in Abu Dhabi, United Arab Emirates.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LenisProvider>
          {children}
          <FloatingContactWidget />
          <ScrollToTop />
        </LenisProvider>
      </body>
    </html>
  );
}

