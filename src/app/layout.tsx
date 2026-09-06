import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";

import "./globals.css";
import ThemeInit from "@/components/ThemeInit";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReMobile Marketplace",
  description: "A marketplace for buying and selling mobile phones.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-white dark:bg-black text-slate-900 dark:text-slate-100 transition-colors duration-300"
      >
        <ThemeInit />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}