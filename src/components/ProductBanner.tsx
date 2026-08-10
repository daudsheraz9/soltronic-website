"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const mainImages = [
  '/product-main-image-1.png',
  '/product-main-image-2.png',
  '/product-main-image-3.png',
  '/product-main-image-4.png',
  '/product-main-image-5.png',
  '/product-main-image-6.png',
  '/product-main-image-7.png',
  '/banner-main.png',
  '/banner-main-2.png',
  '/banner-main-3.png',
];

export default function ProductBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mainImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-between items-stretch">
        {/* Left Side: Main Banner Slider */}
        <div className="w-full lg:w-[68%] relative rounded-xl sm:rounded-2xl overflow-hidden group shadow-sm flex-shrink-0 bg-gray-100 aspect-[2/1] lg:aspect-[2.15/1]">
          <div 
            className="flex w-full h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {mainImages.map((src, i) => (
              <div key={i} className="w-full h-full flex-shrink-0 relative">
                <img 
                  src={src} 
                  alt={`Solar Offer ${i + 1}`} 
                  className="w-full h-full object-fill sm:object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Slider Dash Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 px-4">
            {mainImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'bg-white w-6 opacity-100' : 'bg-white/50 hover:bg-white/80 w-2 opacity-70'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={() => setCurrentIndex((prev) => (prev - 1 + mainImages.length) % mainImages.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
            aria-label="Previous slide"
          >
            <i className="fa-solid fa-chevron-left text-sm"></i>
          </button>
          <button 
            onClick={() => setCurrentIndex((prev) => (prev + 1) % mainImages.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
            aria-label="Next slide"
          >
            <i className="fa-solid fa-chevron-right text-sm"></i>
          </button>
        </div>

        {/* Right Side: Static Side Ads Stack (Hidden on mobile) */}
        <div className="hidden sm:flex w-full lg:w-[32%] flex-row lg:flex-col gap-3 sm:gap-4 flex-shrink-0">
          <Link href="/products" className="flex-1 rounded-xl sm:rounded-2xl overflow-hidden relative shadow-sm border border-gray-100 bg-white group block min-h-[140px] lg:min-h-0">
            <img 
              src="/right-side-ad1.jpeg" 
              alt="Solis Inverter Offer" 
              className="absolute inset-0 w-full h-full object-fill sm:object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          </Link>
          <Link href="/products" className="flex-1 rounded-xl sm:rounded-2xl overflow-hidden relative shadow-sm border border-gray-100 bg-white group block min-h-[140px] lg:min-h-0">
            <img 
              src="/right-side-ad2.png" 
              alt="Pylontech Battery Storage Solution" 
              className="absolute inset-0 w-full h-full object-fill sm:object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

