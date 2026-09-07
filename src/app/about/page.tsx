'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Smartphone, 
  Zap, 
  Users, 
  Award, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

const STATS = [
  { label: 'Verified Devices Sold', value: '10,000+' },
  { label: 'Happy Customers', value: '8,500+' },
  { label: 'Quality Checks', value: '50+ Points' },
  { label: 'Customer Rating', value: '4.9/5' },
];

const FEATURES = [
  {
    icon: ShieldCheck,
    title: '100% Verified Devices',
    description: 'Every phone undergoes a rigorous 50-point inspection before listing to ensure absolute functionality.'
  },
  {
    icon: Zap,
    title: 'Instant Buyer & Seller Match',
    description: 'Seamless marketplace experience designed for quick, secure, and hassle-free phone transactions.'
  },
  {
    icon: Award,
    title: 'Warranty Guaranteed',
    description: 'Enjoy peace of mind with our dedicated warranty and verified hardware authenticity guarantee.'
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#080C14] text-slate-800 dark:text-slate-200 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[140px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            About Our Marketplace
          </span>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Redefining How You Buy & Sell Smartphones
          </h1>
          
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We are building the most trusted destination for buying, selling, and exploring verified smartphones. Quality assurance, transparent pricing, and seamless security are at the core of everything we do.
          </p>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1 p-2">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">
                {stat.value}
              </h2>
              <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Mission & Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Why Choose Us?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            We bridge the gap between phone buyers and verified pre-owned tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 space-y-4 hover:border-blue-500/50 transition-all shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Value Statement / Quality Assurance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Our Promise of Quality
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every device on our platform is tested for battery health, screen responsiveness, network connectivity, and camera clarity. We make sure you get premium tech without the premium price tag.
            </p>
            
            <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Transparent grading system for used devices</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Instant customer support & dedicated assistance</span>
              </li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <Link
              href="/browse"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-blue-500/25 active:scale-95"
            >
              <span>Explore Showroom</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}