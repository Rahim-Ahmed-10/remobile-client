'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Smartphone, ShoppingBag, ShieldCheck } from 'lucide-react';

const stats = [
  { value: '180K +', label: 'ACTIVE USER' },
  { value: '12K +', label: 'GOOD REVIEW' },
  { value: '48K +', label: 'PHONES AVAILABLE' },
];

const services = [
  {
    id: 'browse',
    title: 'Browse Phones',
    count: '1.6K phones available',
    description: 'Explore verified pre-owned and new smartphones with competitive prices and authentic condition reports.',
    badge: null,
    href: '/browse',
    icon: Smartphone,
  },
  {
    id: 'buy',
    title: 'Buy Phone',
    count: '3.4K phones available',
    description: 'Get your dream device with flexible installment plans through our verified partner network.',
    badge: null,
    href: '/browse',
    icon: ShoppingBag,
  },
  {
    id: 'sell',
    title: 'Sell Phone',
    count: null,
    description: 'List your mobile phone instantly, connect with genuine buyers, and receive quick secure payouts.',
    badge: 'Register Now',
    href: '/sell',
    icon: ShieldCheck,
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto relative">
        
        {/* Top Split Section */}
        <div className="relative rounded-3xl overflow-hidden bg-blue-600 dark:bg-blue-700 text-white p-8 sm:p-12 lg:p-16 mb-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                All the service we will <br className="hidden sm:inline" />
                provide you
              </h2>
              <p className="text-blue-100 text-base sm:text-lg max-w-lg leading-relaxed font-normal">
                Get the phone of your dreams with flexible options of your choice. Enjoy attractive offers on ReMobile through our trusted marketplace partners.
              </p>
            </div>

            {/* Right Card Container (Overlapping Layout) */}
            <div className="lg:col-span-6 lg:pl-6">
              <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={service.id}>
                      <Link
                        href={service.href}
                        className="group flex items-start justify-between gap-4 p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200"
                      >
                        <div className="space-y-2 flex-1">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="text-xl sm:text-2xl font-bold tracking-tight">
                              {service.title}
                            </span>
                            {service.count && (
                              <span className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 font-medium">
                                {service.count}
                              </span>
                            )}
                            {service.badge && (
                              <span className="bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                                {service.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
                            {service.description}
                          </p>
                        </div>

                        <div className="pt-1 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all">
                          <ChevronRight className="w-6 h-6" />
                        </div>
                      </Link>

                      {index < services.length - 1 && (
                        <div className="my-4 border-b border-slate-100 dark:border-slate-800/80" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                {stat.value}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;