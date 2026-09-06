'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight, ArrowDown, ShieldCheck, Sparkles, Smartphone } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: '$999',
    tag: 'Trending',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    price: '$899',
    tag: 'Hot Deal',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop',
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const currentProduct = products[currentIndex];

  return (
    <section className="bg-slate-100 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* 1440px Container Kept Intact */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative">
        
        {/* Left Card: Info & CTA */}
        <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 flex flex-col justify-between shadow-sm border border-slate-200/60 dark:border-slate-800">
          
          <div className="space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-semibold px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span>1,200+ Verified Phones Available</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.12] tracking-tight">
              Your source for <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                marketplace phones
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-lg leading-relaxed">
              Buy and sell pre-owned smartphones directly with trusted users. Safe, verified, and hassle-free marketplace listings.
            </p>

            {/* Primary Action Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/browse"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-7 py-3.5 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:scale-95"
              >
                <span>Explore Products</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Bottom Section: Brands & Badges */}
          <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-5">
            {/* Brand Names */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-slate-400 dark:text-slate-500 font-bold text-sm uppercase tracking-wider">
              <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">SAMSUNG</span>
              <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Apple</span>
              <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Google</span>
              <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">OnePlus</span>
              <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Xiaomi</span>
            </div>

            {/* Stat Pill Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-1.5 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-xs font-medium px-3.5 py-1.5 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                <span>Verified Listings</span>
              </div>
              <div className="inline-flex items-center gap-1.5 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-xs font-medium px-3.5 py-1.5 rounded-xl">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>8,450+ Satisfied Clients</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Card: Modern Showcase with Dynamic Blur & Lighting */}
        <div className="lg:col-span-6 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700 rounded-3xl p-6 sm:p-10 relative min-h-[440px] lg:min-h-[520px] flex items-center justify-center overflow-hidden shadow-xl">
          
          {/* Ambient Lighting Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-300/30 rounded-full blur-2xl pointer-events-none"></div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            aria-label="Previous image"
            className="absolute left-4 sm:left-6 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-all flex items-center justify-center border border-white/20 shadow-md active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={nextSlide}
            aria-label="Next image"
            className="absolute right-4 sm:right-6 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-all flex items-center justify-center border border-white/20 shadow-md active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Center Glass Frame Showcase */}
          <div className="relative w-full max-w-sm h-80 sm:h-96 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/25 shadow-2xl p-3.5 flex items-center justify-center group transition-transform duration-500 hover:scale-[1.02]">
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-inner">
              <Image
                src={currentProduct.image}
                alt={currentProduct.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
            </div>
          </div>

          {/* Floating Product Badge */}
          <div className="absolute bottom-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-2xl z-20 border border-white/50 dark:border-slate-800 text-right">
            <div className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-0.5">
              {currentProduct.tag}
            </div>
            <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              {currentProduct.name}
            </h2>
            <div className="flex items-center justify-end gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
              <span className="text-blue-600 dark:text-blue-400 font-extrabold">{currentProduct.price}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                In Stock
              </span>
            </div>
          </div>

        </div>

        {/* Center Circular Scroll Badge */}
        <div className="hidden lg:flex absolute bottom-[-22px] left-1/2 -translate-x-1/2 z-30 items-center justify-center bg-slate-100 dark:bg-slate-950 p-2 rounded-full">
          <div className="w-20 h-20 bg-white dark:bg-slate-900 rounded-full shadow-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center relative">
            <ArrowDown className="w-5 h-5 text-slate-700 dark:text-slate-300 animate-bounce" />
            <svg className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none" viewBox="0 0 100 100">
              <path
                id="circlePath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                fill="none"
              />
              <text className="text-[9px] fill-slate-500 dark:fill-slate-400 font-semibold tracking-widest uppercase">
                <textPath href="#circlePath">
                  Learn more • Learn more •
                </textPath>
              </text>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;