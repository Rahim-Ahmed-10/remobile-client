'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ChevronLeft, ChevronRight, ArrowUpRight, Smartphone, ShieldCheck } from 'lucide-react';

const phones = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    subtitle: '256GB - Natural Titanium',
    price: '$999',
    badge: 'NEW',
    mainImage: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop',
    previewImage: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=400&auto=format&fit=crop',
    tag: 'Verified Listing',
  },
  {
    id: 2,
    name: 'Samsung S24 Ultra',
    subtitle: '512GB - Titanium Gray',
    price: '$899',
    badge: 'HOT',
    mainImage: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000&auto=format&fit=crop',
    previewImage: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=400&auto=format&fit=crop',
    tag: 'Official Warranty',
  },
];

const ProfessionalBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % phones.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + phones.length) % phones.length);
  };

  const activePhone = phones[currentIndex];

  return (
    <section className="bg-slate-100 dark:bg-[#121214] text-slate-900 dark:text-white py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* 1440px Container */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* 1. Left Section: Heading & Social Proof */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-8 py-2">
          <div className="space-y-6">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-slate-800/80 border border-blue-200 dark:border-slate-700/60 text-blue-600 dark:text-blue-400 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
              <span>Best Mobile Marketplace</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              Find & sell <br />
              your best phone <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                easily.
              </span>
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-base max-w-md leading-relaxed font-normal">
              We help you buy or sell pre-owned phones safely and quickly with 100% verified listings.
            </p>
          </div>

          {/* Rating Stars & Trust Badge */}
          <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800/80">
            <div className="flex items-center gap-1.5 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-400" />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <p className="text-lg font-bold text-slate-900 dark:text-white">12k+</p>
              <span className="text-sm text-slate-500 dark:text-slate-400">Satisfied Customer Reviews</span>
            </div>
          </div>
        </div>

        {/* 2. Middle Section: Large Main Showcase Image */}
        <div className="lg:col-span-5 relative h-[500px] lg:h-[540px] rounded-3xl overflow-hidden shadow-2xl group border border-slate-200 dark:border-slate-800/80 bg-slate-200 dark:bg-slate-900">
          <Image
            src={activePhone.mainImage}
            alt={activePhone.name}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

          {/* View Catalog Bottom Bar Overlay */}
          <Link
            href="/browse"
            className="absolute bottom-0 left-0 right-0 bg-white/20 dark:bg-white/10 backdrop-blur-md hover:bg-white/30 dark:hover:bg-white/20 text-white font-semibold py-4 px-6 flex items-center justify-between border-t border-white/20 transition-all duration-200 group/btn"
          >
            <span className="text-xs font-bold tracking-widest uppercase">VIEW FULL CATALOG</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>

        {/* 3. Right Section: Dynamic Product Card & Navigation */}
        <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-6">
          
          {/* Detailed Product Card */}
          <div className="bg-white dark:bg-[#1C1C1F] border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-xl space-y-4 transition-colors">
            {/* Title & Badge */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{activePhone.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{activePhone.subtitle}</p>
              </div>
              <span className="bg-blue-600 text-white dark:bg-white dark:text-black text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wide">
                {activePhone.badge}
              </span>
            </div>

            {/* Preview Image Frame */}
            <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <Image
                src={activePhone.previewImage}
                alt={activePhone.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Price & Status */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>{activePhone.tag}</span>
              </div>
              <span className="text-2xl font-black text-slate-900 dark:text-white">{activePhone.price}</span>
            </div>

            {/* Action Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-extrabold py-3.5 px-4 rounded-2xl transition-all uppercase tracking-wider shadow-md shadow-blue-500/20">
              MAKE AN OFFER
            </button>
          </div>

          {/* Slider Pagination Controls */}
          <div className="flex items-center justify-between px-1">
            <span className="text-base font-extrabold tracking-widest text-slate-900 dark:text-white">
              0{currentIndex + 1}<span className="text-xs text-slate-400 dark:text-slate-600">/0{phones.length}</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="w-11 h-11 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-[#1C1C1F] hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-800 dark:text-white transition-all shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="w-11 h-11 rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-[#1C1C1F] hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-800 dark:text-white transition-all shadow-sm active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProfessionalBanner;