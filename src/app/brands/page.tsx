"use client";

import React, { useState } from 'react';
import Link from 'next/link';

import { allBrands } from './brandsData';

export default function BrandsPage() {
  const alphabets = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const brandList = alphabets.map(letter => ({
    letter,
    brands: allBrands.filter(b => letter === '#' ? !/^[A-Z]/i.test(b.name) : b.name.toUpperCase().startsWith(letter))
  })).filter(group => group.brands.length > 0);

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white text-slate-800">
      
      {/* Page Header */}
      <div className="flex flex-col gap-4 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1A4D2E] to-green-500 w-fit tracking-tight">
          Brands
        </h1>
        {/* Categories removed */}
      </div>

      {/* Featured Brands Marquee */}
      <div className="relative mb-12 border-b border-gray-200 pb-8 overflow-hidden group">
        {/* Fading Edges */}
        <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee hover:[animation-play-state:paused] gap-4 w-max">
          {[...allBrands.filter(b => b.logo), ...allBrands.filter(b => b.logo)].map((brand, idx) => (
            <Link href="/products?category=Panels" key={idx} className="flex flex-col gap-2 flex-shrink-0 w-36 sm:w-40">
              <div className="aspect-square border border-gray-300 flex items-center justify-center p-4 overflow-hidden group/card hover:border-gray-400 transition-colors cursor-pointer bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {brand.logo ? (
                  <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain transition-all duration-300" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                ) : (
                  <span className="text-gray-400 text-sm font-semibold text-center">{brand.name}</span>
                )}
              </div>
              <span className="text-xs font-bold text-gray-700 text-center">{brand.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Alphabet Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {alphabets.map((letter, idx) => (
          <button 
            key={idx} 
            className="w-8 h-8 flex items-center justify-center bg-gray-50 hover:bg-gray-200 text-xs text-gray-500 transition-colors"
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Main List Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Search Bar Sidebar */}
        <div className="md:col-span-1">
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 pointer-events-none">
              <span className="material-symbols-outlined text-sm">search</span>
            </span>
            <input 
              type="text" 
              placeholder="Search brands" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 rounded py-2 pl-9 pr-3 text-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 text-gray-600 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Brands List */}
        <div className="md:col-span-3">
          <div className="flex flex-col gap-10">
            {brandList.map((group, idx) => (
              <div key={idx} className="flex flex-row">
                
                {/* Letter Column */}
                <div className="w-12 flex-shrink-0 pt-1">
                  <span className="text-xs font-semibold text-gray-700">{group.letter}</span>
                </div>
                
                {/* Vertical Divider */}
                <div className="w-px bg-gray-200 mx-4"></div>
                
                {/* Brands Grid */}
                <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-6 gap-x-4 pl-4 pt-1">
                  {group.brands.map((brand, bIdx) => (
                    <Link href="/products?category=Panels" key={bIdx} className="flex flex-col items-center gap-2 group/item cursor-pointer">
                      <div className="w-full aspect-square border border-gray-200 rounded-md flex items-center justify-center p-3 bg-white hover:border-gray-300 hover:shadow-sm transition-all overflow-hidden">
                        {brand.logo ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain transition-transform group-hover/item:scale-105" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        ) : (
                          <div className="text-gray-400 text-xs font-semibold text-center break-words">{brand.name}</div>
                        )}
                      </div>
                      <span className="text-xs text-gray-600 group-hover/item:text-primary transition-colors text-center font-medium line-clamp-2">{brand.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}
