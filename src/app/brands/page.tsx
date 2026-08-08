"use client";

import React from 'react';
import { allBrands } from './brandsData';

const categories = [
  'Inverter',
  'Battery',
  'Storage',
  'Panel',
  'EV',
  'Electrical'
];

export default function BrandsPage() {
  const categorizedBrands = categories.map((category, index) => {
    return {
      name: category,
      brands: allBrands.filter((_, idx) => idx % categories.length === index)
    };
  });

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white text-slate-800 overflow-x-hidden">
      {/* BEGIN: Breadcrumbs */}
      <nav className="text-sm text-gray-500 flex items-center gap-2 mb-8">
        <a className="hover:text-primary transition-colors" href="/">Home</a>
        <i className="fa-solid fa-chevron-right text-[10px]"></i>
        <span className="text-gray-800 font-medium">Brands</span>
      </nav>
      {/* END: Breadcrumbs */}
      <style>{`
        @keyframes scroll-brands {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: scroll-brands 80s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="flex flex-col gap-4 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1A4D2E] to-green-500 w-fit mx-auto tracking-tight">
          Brands
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Explore our extensive range of premium products from trusted global manufacturers.</p>
      </div>

      <div className="flex flex-col gap-12">
        {categorizedBrands.map((category, cIdx) => (
          <section key={cIdx} className="w-full">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 pl-4 border-l-4 border-primary">
              {category.name}
            </h3>
            
            <div className="overflow-hidden relative group w-full py-2">
              <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

              <div className="flex gap-2 w-max animate-marquee">
                {[...category.brands, ...category.brands].map((brand, idx) => (
                  <div key={idx} className="bg-[#f8fafc] rounded-2xl p-1 min-w-[140px] flex-shrink-0 cursor-pointer">
                    <div className="bg-white rounded-xl h-16 md:h-20 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-3 py-2 overflow-hidden hover:border-gray-200 transition-colors">
                      {brand.logo ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img 
                          src={brand.logo} 
                          alt={brand.name} 
                          className="max-h-full w-auto object-contain transition-transform duration-300 hover:scale-110" 
                          onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                        />
                      ) : (
                        <span className="text-gray-400 text-xs font-semibold text-center">{brand.name}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
