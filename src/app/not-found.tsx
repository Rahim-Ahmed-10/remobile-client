'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Smartphone, Home, ArrowLeft, Store, HelpCircle } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#080C14] text-slate-800 dark:text-slate-200 flex items-center justify-center p-6 transition-colors duration-300">
      
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[140px] transform -translate-y-10"></div>
      </div>

      <div className="relative z-10 max-w-lg w-full text-center space-y-8 p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl shadow-slate-200/50 dark:shadow-none">
        
        {/* Animated Visual Graphic */}
        <div className="relative inline-flex items-center justify-center pt-2">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="text-7xl sm:text-8xl font-black tracking-tighter text-slate-200 dark:text-slate-800 select-none">
              4
            </span>
            
            {/* Center Phone Badge */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/30">
              <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 animate-bounce" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-500 border-2 border-white dark:border-slate-900 rounded-full animate-ping" />
            </div>

            <span className="text-7xl sm:text-8xl font-black tracking-tighter text-slate-200 dark:text-slate-800 select-none">
              4
            </span>
          </div>
        </div>

        {/* Professional Header & Subtitle */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          {/* Go Back Button */}
          <button
            onClick={() => router.back()}
            className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-[0.98] shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>

          {/* Back to Home Button */}
          <Link
            href="/"
            className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-500/25 transition-all active:scale-[0.98]"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Quick Links Footer */}
        <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <Link 
            href="/browse" 
            className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Store className="w-3.5 h-3.5" />
            <span>Explore Showroom</span>
          </Link>

          <span className="text-slate-300 dark:text-slate-700">•</span>

          <Link 
            href="/faq" 
            className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Help Center</span>
          </Link>
        </div>

      </div>
    </main>
  );
}