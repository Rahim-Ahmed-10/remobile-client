'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Wachidun Al-Rizky',
    quote:
      "It's awesome when you can buy a phone without going through complex verifications and paperwork. Because ReMobile does it all for you and brings the phone right to your home. Great service!",
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Tanvir Ahmed',
    quote:
      'Selling my old device was effortless. The physical inspection was quick, payment was instant, and the overall experience was super smooth.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    quote:
      'Found a verified iPhone 15 Pro in pristine condition at an incredible price. ReMobile is definitely my go-to marketplace for phones now.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Testimonial Card */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row gap-6 items-center">
          {/* User Image */}
          <div className="relative w-full md:w-64 h-72 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-800">
            <Image
              src={activeTestimonial.image}
              alt={activeTestimonial.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Testimonial Details */}
          <div className="flex-1 space-y-4 text-left">
            <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400 rotate-180 opacity-80" />
            
            <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
              "{activeTestimonial.quote}"
            </p>

            <div className="space-y-1.5 pt-2">
              <div className="flex items-center space-x-1">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                {activeTestimonial.name}
              </h4>
            </div>
          </div>
        </div>

        {/* Center Carousel Indicators (Dots) */}
        <div className="hidden lg:flex flex-col items-center justify-center space-y-2 lg:col-span-1">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-slate-900 dark:bg-white scale-125'
                  : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Right Side: Section Heading & Community Stats */}
        <div className="lg:col-span-4 space-y-8 text-left">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Client Re<span className="text-blue-600">Mobile</span> stories
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              When you reach your goals, our whole community celebrates with you. That's over 180 thousand members sharing verified deals.
            </p>
          </div>

          {/* User Avatar Stack & Counter */}
          <div className="space-y-3">
            <div className="flex items-center -space-x-3">
              <div className="relative w-12 h-12 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                  alt="User 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-12 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
                  alt="User 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-12 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop"
                  alt="User 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-900 bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                180k+
              </div>
            </div>

            <p className="text-xl font-extrabold text-slate-900 dark:text-white">
              180k+ <span className="text-slate-500 dark:text-slate-400 font-medium text-base">ReMobile Users</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;