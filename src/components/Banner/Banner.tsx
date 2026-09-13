'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const phones = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    subtitle: '256GB - Natural Titanium',
    price: '$999',
    badge: 'NEW ARRIVAL',
    mainImage: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop',
    glowColor: 'from-blue-600/40 via-cyan-500/20 to-transparent',
    tag: '100% Verified',
  },
  {
    id: 2,
    name: 'Samsung S24 Ultra',
    subtitle: '512GB - Titanium Gray',
    price: '$899',
    badge: 'BEST SELLER',
    mainImage: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000&auto=format&fit=crop',
    glowColor: 'from-purple-600/40 via-pink-500/20 to-transparent',
    tag: 'Official Warranty',
  },
  {
    id: 3,
    name: 'Google Pixel 8 Pro',
    subtitle: '128GB - Bay Blue',
    price: '$799',
    badge: 'SPECIAL DEAL',
    mainImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1000&auto=format&fit=crop',
    glowColor: 'from-emerald-500/40 via-teal-500/20 to-transparent',
    tag: 'Strictly Tested',
  },
];

const ProfessionalBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play feature
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phones.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const activePhone = phones[currentIndex];

  return (
    <section className="relative bg-slate-50 text-slate-900 dark:bg-[#030509] dark:text-white py-16 px-4 sm:px-6 lg:px-12 flex items-center overflow-hidden min-h-[600px] transition-colors duration-300">
      
      {/* Dynamic Dark & Light Theme Background Glow */}
      <div className={`absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br ${activePhone.glowColor} rounded-full blur-[160px] pointer-events-none transition-all duration-1000 opacity-70`} />
      
      {/* Top Subtle Light Ray */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 dark:via-cyan-500/30 to-transparent" />

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
        
        {/* Left Content Area */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm dark:shadow-[0_0_15px_rgba(34,211,238,0.15)] w-fit backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 animate-pulse" />
              <span>ReMobile Verified Ecosystem</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
              Discover & trade <br />
              smartphones with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
                total clarity.
              </span>
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-md leading-relaxed font-normal">
              Experience the safest marketplace for pre-owned and new flagship devices backed by rigorous multi-point testing.
            </p>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80 max-w-md">
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">4.9 / 5.0 Rating</p>
            </div>
            <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800" />
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Over 12k+ Verified Customers</p>
          </div>
        </div>

        {/* Right Slider Area */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          
          <div className="relative w-full h-[440px] sm:h-[480px] flex items-center justify-center perspective-[1400px]">
            {phones.map((phone, index) => {
              const offset = (index - currentIndex + phones.length) % phones.length;
              
              let zIndex = 0;
              let xOffset = '0%';
              let scale = 0.75;
              let rotateY = 0;
              let opacity = 0;
              let filter = 'blur(6px)';

              if (offset === 0) {
                zIndex = 30;
                xOffset = '0%';
                scale = 1;
                rotateY = 0;
                opacity = 1;
                filter = 'blur(0px)';
              } else if (offset === 1) {
                zIndex = 20;
                xOffset = '54%';
                scale = 0.82;
                rotateY = -28;
                opacity = 0.55;
                filter = 'blur(2px)';
              } else if (offset === phones.length - 1) {
                zIndex = 20;
                xOffset = '-54%';
                scale = 0.82;
                rotateY = 28;
                opacity = 0.55;
                filter = 'blur(2px)';
              }

              return (
                <motion.div
                  key={phone.id}
                  initial={false}
                  animate={{
                    x: xOffset,
                    scale: scale,
                    rotateY: rotateY,
                    opacity: opacity,
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ zIndex, filter }}
                  className="absolute w-[260px] sm:w-[300px] aspect-[9/17] rounded-[28px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-950 cursor-pointer group transition-colors"
                  onClick={() => setCurrentIndex(index)}
                >
                  <Image
                    src={phone.mainImage}
                    alt={phone.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  
                  {/* Glassmorphic Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 dark:from-slate-950 via-slate-900/30 dark:via-slate-950/40 to-slate-900/10 dark:to-slate-950/10 flex flex-col justify-between p-5">
                    
                    {/* Top Badges */}
                    <div className="flex justify-between items-center">
                      <span className="bg-blue-600 text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                        {phone.badge}
                      </span>
                      <div className="flex items-center gap-1 text-[10px] text-emerald-400 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-800">
                        <ShieldCheck className="w-3 h-3" />
                        <span className="font-semibold">{phone.tag}</span>
                      </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight leading-tight">{phone.name}</h3>
                        <p className="text-[11px] text-slate-300 font-medium mt-0.5">{phone.subtitle}</p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-white/10">
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase tracking-wider text-slate-300 font-bold">Starting at</span>
                          <span className="text-xl font-black text-white">{phone.price}</span>
                        </div>
                        <Link
                          href="/browse"
                          className="bg-white/20 hover:bg-white/30 active:scale-95 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-2 rounded-lg flex items-center gap-1 transition-all border border-white/20 shadow-lg"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>View Deal</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProfessionalBanner;