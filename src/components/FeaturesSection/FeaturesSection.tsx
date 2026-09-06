'use client';

import React from 'react';
import { Award, Star, Zap } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Quality Choice',
    description: "We provide several quality phone options for you so you don't have to worry about the quality.",
    icon: Award,
  },
  {
    id: 2,
    title: 'Exclusive Service For You',
    description: 'We are ready to help find your dream phone for your daily needs.',
    icon: Star,
  },
  {
    id: 3,
    title: 'Fast and Safe Transaction',
    description: 'Transaction process is completed within 24 hours (verified by Bank International).',
    icon: Zap,
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.id} className="flex items-start space-x-4 group">
              {/* Icon Container */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center transition-transform group-hover:scale-110">
                <Icon className="w-6 h-6 fill-current" />
              </div>

              {/* Text Content */}
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;