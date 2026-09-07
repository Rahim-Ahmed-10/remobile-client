'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  SlidersHorizontal, 
  ChevronDown, 
  Check, 
  Star, 
  Smartphone, 
  ArrowUpDown,
  Grid,
  List,
  Filter
} from 'lucide-react';

interface PhoneItem {
  id: string;
  title: string;
  brand: string;
  condition: 'Brand New' | 'Used' | 'Refurbished';
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  storage: string;
  image: string;
  isVerified: boolean;
}

const SAMPLE_PHONES: PhoneItem[] = [
  {
    id: '1',
    title: 'iPhone 15 Pro Max',
    brand: 'Apple',
    condition: 'Brand New',
    price: 1199,
    originalPrice: 1299,
    rating: 4.9,
    reviews: 128,
    storage: '256GB',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=600',
    isVerified: true,
  },
  {
    id: '2',
    title: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    condition: 'Brand New',
    price: 1099,
    rating: 4.8,
    reviews: 94,
    storage: '512GB',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=600',
    isVerified: true,
  },
  {
    id: '3',
    title: 'Google Pixel 8 Pro',
    brand: 'Google',
    condition: 'Used',
    price: 699,
    originalPrice: 899,
    rating: 4.7,
    reviews: 56,
    storage: '128GB',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=600',
    isVerified: true,
  },
  {
    id: '4',
    title: 'iPhone 13 Pro',
    brand: 'Apple',
    condition: 'Refurbished',
    price: 580,
    originalPrice: 650,
    rating: 4.6,
    reviews: 210,
    storage: '128GB',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600',
    isVerified: true,
  },
  {
    id: '5',
    title: 'OnePlus 12',
    brand: 'OnePlus',
    condition: 'Brand New',
    price: 799,
    rating: 4.8,
    reviews: 42,
    storage: '256GB',
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&q=80&w=600',
    isVerified: true,
  },
  {
    id: '6',
    title: 'Xiaomi 14 Ultra',
    brand: 'Xiaomi',
    condition: 'Used',
    price: 749,
    rating: 4.5,
    reviews: 31,
    storage: '512GB',
    image: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=600',
    isVerified: false,
  },
];

const BRANDS = ['All Brands', 'Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'];
const CONDITIONS = ['All Conditions', 'Brand New', 'Used', 'Refurbished'];

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [selectedCondition, setSelectedCondition] = useState('All Conditions');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredPhones = SAMPLE_PHONES.filter((phone) => {
    const matchesSearch = phone.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'All Brands' || phone.brand === selectedBrand;
    const matchesCondition = selectedCondition === 'All Conditions' || phone.condition === selectedCondition;
    return matchesSearch && matchesBrand && matchesCondition;
  });

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#080C14] text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Top Banner & Search */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Explore Phones
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Browse verified smartphones with full guarantee
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search phone name or model..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:border-blue-500 transition-colors shadow-sm"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            </div>
          </div>

          {/* Quick Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {BRANDS.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-4 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedBrand === brand
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block space-y-6 p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-blue-500" />
                <span>Filters</span>
              </h2>
              <button 
                onClick={() => { setSelectedBrand('All Brands'); setSelectedCondition('All Conditions'); }}
                className="text-xs text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Reset All
              </button>
            </div>

            {/* Condition Filter */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider">Condition</h3>
              <div className="space-y-2">
                {CONDITIONS.map((cond) => (
                  <label key={cond} className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400 cursor-pointer hover:text-slate-900 dark:hover:text-white transition-colors">
                    <input
                      type="radio"
                      name="condition"
                      checked={selectedCondition === cond}
                      onChange={() => setSelectedCondition(cond)}
                      className="accent-blue-600 w-3.5 h-3.5"
                    />
                    <span>{cond}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid Header & Content */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Control Bar */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400">
              <p>Showing <span className="font-bold text-slate-900 dark:text-white">{filteredPhones.length}</span> results</p>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 font-medium"
                >
                  <Filter className="w-3.5 h-3.5" />
                  <span>Filter</span>
                </button>

                <div className="flex items-center gap-1">
                  <ArrowUpDown className="w-3.5 h-3.5" />
                  <span>Sort by:</span>
                  <select className="bg-transparent font-semibold text-slate-900 dark:text-white outline-none cursor-pointer">
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Mobile Filters Dropdown */}
            {showMobileFilters && (
              <div className="lg:hidden p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase">Condition</h4>
                  <div className="flex flex-wrap gap-2">
                    {CONDITIONS.map((cond) => (
                      <button
                        key={cond}
                        onClick={() => setSelectedCondition(cond)}
                        className={`px-3 py-1 rounded-lg text-xs font-medium ${
                          selectedCondition === cond ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {cond}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Product Cards Grid */}
            {filteredPhones.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPhones.map((phone) => (
                  <div 
                    key={phone.id}
                    className="group rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 p-4 transition-all hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Container */}
                      <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 mb-4">
                        <img 
                          src={phone.image} 
                          alt={phone.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                          {phone.condition}
                        </span>
                        {phone.isVerified && (
                          <span className="absolute top-2.5 right-2.5 p-1 rounded-full bg-emerald-500/90 text-white shadow-sm" title="Verified Device">
                            <Check className="w-3 h-3" />
                          </span>
                        )}
                      </div>

                      {/* Info */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                          <span>{phone.brand}</span>
                          <span className="font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px]">{phone.storage}</span>
                        </div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {phone.title}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-amber-500">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span className="font-semibold">{phone.rating}</span>
                          <span className="text-slate-400">({phone.reviews})</span>
                        </div>
                      </div>
                    </div>

                    {/* Price & Action */}
                    <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                      <div>
                        <span className="text-base font-extrabold text-slate-900 dark:text-white">${phone.price}</span>
                        {phone.originalPrice && (
                          <span className="text-xs text-slate-400 line-through ml-1.5">${phone.originalPrice}</span>
                        )}
                      </div>
                      <Link
                        href={`/browse/${phone.id}`}
                        className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all active:scale-95"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <Smartphone className="w-10 h-10 text-slate-400 mx-auto" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">No phones found</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Try adjusting your filters or search criteria.</p>
              </div>
            )}

          </div>

        </div>

      </div>
    </main>
  );
}