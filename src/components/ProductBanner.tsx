"use client";

import { useState, useEffect } from 'react';

const mainImages = [
  '/product-main-image-1.png',
  '/product-main-image-2.png',
  '/product-main-image-3.png',
  '/product-main-image-4.png',
  '/product-main-image-5.png',
  '/product-main-image-6.png',
  '/product-main-image-7.png',
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side: Main Slider */}
        <div className="lg:w-[68%] relative rounded-xl overflow-hidden group shadow-sm flex-shrink-0">
          {/* Aspect ratio container forces the height of the left side, which then forces the right side to match */}
          <div 
            className="flex transition-transform duration-500 ease-in-out aspect-[2/1] lg:aspect-[2.15/1]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {mainImages.map((src, i) => (
              <div key={i} className="w-full h-full flex-shrink-0 relative bg-gray-100">
                <img 
                  src={src} 
                  alt={`Solar Offer ${i + 1}`} 
                  className="absolute inset-0 w-full h-full object-fill md:object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Slider Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {mainImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={() => setCurrentIndex((prev) => (prev - 1 + mainImages.length) % mainImages.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous slide"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button 
            onClick={() => setCurrentIndex((prev) => (prev + 1) % mainImages.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next slide"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        {/* Right Side: Static Ads */}
        <div className="lg:w-[32%] flex flex-col gap-8">
          <div className="flex-1 rounded-xl overflow-hidden relative shadow-sm border border-gray-200 bg-white group">
            <img 
              src="/right-side-ad1.jpeg" 
              alt="Fidus Plus Battery" 
              className="absolute inset-0 w-full h-full object-fill sm:object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          </div>
          <div className="flex-1 rounded-xl overflow-hidden relative shadow-sm border border-gray-200 bg-white group">
            <img 
              src="/right-side-ad2.png" 
              alt="Pylontech Fidus 5kW Battery" 
              className="absolute inset-0 w-full h-full object-fill sm:object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
