'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon, ArrowRight, Smartphone } from 'lucide-react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check initial theme state from document
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white p-2 rounded-xl">
              <Smartphone className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Re<span className="text-blue-600">Mobile</span>
            </span>
          </Link>

          {/* Centered Floating Pill Navigation */}
          <div className="hidden md:flex items-center bg-slate-100/80 dark:bg-slate-800/80 p-1.5 rounded-full border border-slate-200/50 dark:border-slate-700/50 shadow-inner">
            <Link 
              href="/" 
              className="bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 font-semibold text-sm px-5 py-2 rounded-full shadow-sm flex items-center gap-1.5 transition-all"
            >
              Home <span className="text-xs">●</span>
            </Link>
            <Link 
              href="/browse" 
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium text-sm px-5 py-2 rounded-full transition"
            >
              Browse Phones
            </Link>
            <Link 
              href="/about" 
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium text-sm px-5 py-2 rounded-full transition"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium text-sm px-5 py-2 rounded-full transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Right Section: Theme Toggle & Action Button */}
          <div className="flex items-center space-x-3">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors focus:outline-none"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600" />
              )}
            </button>

            {/* Sell Phone Button */}
            <Link 
              href="/sell" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
            >
              <span>+ Sell Phone</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;