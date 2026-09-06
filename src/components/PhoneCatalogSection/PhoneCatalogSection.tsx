'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Bookmark, ChevronDown, ShieldCheck, Search } from 'lucide-react';

const categories = ['Most Popular', 'Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Realme'];

const initialPhones = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    category: 'Apple',
    price: '$999',
    badge: 'Verified',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop',
    isBookmarked: true,
  },
  {
    id: 2,
    name: 'Samsung S24 Ultra',
    category: 'Samsung',
    price: '$899',
    badge: 'Official Warranty',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop',
    isBookmarked: false,
  },
  {
    id: 3,
    name: 'Google Pixel 8 Pro',
    category: 'Google',
    price: '$699',
    badge: 'Like New',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800&auto=format&fit=crop',
    isBookmarked: false,
  },
  {
    id: 4,
    name: 'iPhone 14 Pro',
    category: 'Apple',
    price: '$799',
    badge: 'Verified',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop',
    isBookmarked: false,
  },
  {
    id: 5,
    name: 'OnePlus 12',
    category: 'OnePlus',
    price: '$649',
    badge: 'Official Warranty',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop',
    isBookmarked: false,
  },
  {
    id: 6,
    name: 'Xiaomi 14 Ultra',
    category: 'Xiaomi',
    price: '$849',
    badge: 'Like New',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800&auto=format&fit=crop',
    isBookmarked: false,
  },
];

const PhoneCatalogSection = () => {
  const [activeTab, setActiveTab] = useState('Most Popular');
  const [mode, setMode] = useState<'buy' | 'sell'>('buy');
  const [bookmarks, setBookmarks] = useState<number[]>([1]);

  const toggleBookmark = (id: number) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Let's Find Your Dream Phone
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base max-w-xl mx-auto">
            We recommend the very best and newest devices today, with verified listings and friendly prices for you.
          </p>
        </div>

        {/* Filter Widget Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl max-w-5xl mx-auto space-y-6">
          
          {/* Top Switcher (Buy / Sell) */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-800/60 p-1.5 rounded-2xl">
              <button
                onClick={() => setMode('buy')}
                className={`px-5 py-2 text-sm font-bold rounded-xl transition-all ${
                  mode === 'buy'
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Buy Phone
              </button>
              <button
                onClick={() => setMode('sell')}
                className={`px-5 py-2 text-sm font-bold rounded-xl transition-all ${
                  mode === 'sell'
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Sell Phone
              </button>
            </div>

            <button className="text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Advanced search &gt;
            </button>
          </div>

          {/* Filter Dropdowns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            
            <div className="space-y-1.5">
              <label className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Brand</label>
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 text-sm font-semibold cursor-pointer">
                <span>All Brands</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Storage</label>
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 text-sm font-semibold cursor-pointer">
                <span>All Storage</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Condition</label>
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 text-sm font-semibold cursor-pointer">
                <span>Like New</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Price Range</label>
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 text-sm font-semibold cursor-pointer">
                <span>$300 - $1000</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </div>
            </div>

          </div>

          {/* Search CTA Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-extrabold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
            <Search className="w-5 h-5" />
            <span>SHOW ME 1.8K PHONES</span>
          </button>
        </div>

        {/* Category Tabs & Brand Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-6 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-sm font-extrabold whitespace-nowrap transition-all relative pb-2 ${
                  activeTab === cat
                    ? 'text-slate-900 dark:text-white'
                    : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <span>Brand:</span>
            <div className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-xl cursor-pointer">
              <span className="text-slate-900 dark:text-white">All Brands</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Phone Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {initialPhones.map((phone) => {
            const bookmarked = bookmarks.includes(phone.id);
            return (
              <div
                key={phone.id}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between space-y-4"
              >
                {/* Top Info & Bookmark */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white">{phone.name}</h3>
                    <p className="text-xs font-medium text-slate-400">{phone.category}</p>
                  </div>
                  <button
                    onClick={() => toggleBookmark(phone.id)}
                    className={`p-2 rounded-xl transition-colors ${
                      bookmarked
                        ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Image Container */}
                <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <Image
                    src={phone.image}
                    alt={phone.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Badge & Price */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1.5 rounded-xl border border-blue-100 dark:border-blue-900/50 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{phone.badge}</span>
                  </div>
                  <span className="text-2xl font-black text-slate-900 dark:text-white">{phone.price}</span>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white text-slate-800 dark:text-slate-200 text-xs font-black py-3.5 rounded-xl transition-all uppercase tracking-wider">
                  Make an Offer
                </button>
              </div>
            );
          })}
        </div>

        {/* View More Button */}
        <div className="text-center pt-6">
          <button className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-extrabold px-10 py-4 rounded-2xl transition-all shadow-lg shadow-blue-500/20 uppercase text-xs tracking-widest">
            VIEW MORE PHONES
          </button>
        </div>

      </div>
    </section>
  );
};

export default PhoneCatalogSection;