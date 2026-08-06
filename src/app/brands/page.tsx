"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function BrandsPage() {
  const featuredBrands = [
    { name: 'Jinko Solar', domain: 'jinkosolar.com' },
    { name: 'Longi', domain: 'longi.com' },
    { name: 'Canadian Solar', domain: 'canadiansolar.com' },
    { name: 'Trina Solar', domain: 'trinasolar.com' },
    { name: 'SunPower', domain: 'sunpower.com' },
    { name: 'Qcells', domain: 'qcells.com' },
    { name: 'First Solar', domain: 'firstsolar.com' },
  ];
  
  const alphabets = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const brandList = [
    { letter: 'A', brands: ['Aiko Solar', 'Aptos Solar', 'Axitec'] },
    { letter: 'B', brands: ['Boviet Solar', 'BYD Solar'] },
    { letter: 'C', brands: ['Canadian Solar', 'CertainTeed'] },
    { letter: 'E', brands: ['Enphase', 'Evergreen Solar'] },
    { letter: 'F', brands: ['First Solar', 'Fronius'] },
    { letter: 'G', brands: ['GoodWe', 'Growatt'] },
    { letter: 'H', brands: ['Hanwha Qcells', 'Huawei'] },
    { letter: 'J', brands: ['JA Solar', 'Jinko Solar'] },
    { letter: 'L', brands: ['LG Solar', 'Longi Solar'] },
    { letter: 'M', brands: ['Meyer Burger', 'Mission Solar'] },
    { letter: 'P', brands: ['Panasonic', 'Peimar', 'Phono Solar'] },
    { letter: 'Q', brands: ['Qcells'] },
    { letter: 'R', brands: ['REC Group', 'Renogy'] },
    { letter: 'S', brands: ['Silfab Solar', 'SMA', 'SolarEdge', 'SunPower'] },
    { letter: 'T', brands: ['Talesun', 'Tesla', 'Trina Solar'] },
    { letter: 'V', brands: ['Vikram Solar'] },
    { letter: 'Y', brands: ['Yingli Solar'] },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white text-slate-800">
      
      {/* Page Header */}
      <div className="flex flex-col gap-4 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1A4D2E] to-green-500 w-fit tracking-tight">
          Brands
        </h1>
        <div className="flex items-center gap-4 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1A4D2E] via-green-500 to-yellow-500 w-fit">
          <span className="cursor-pointer hover:opacity-80 transition-opacity">Inverters</span>
          <span className="text-gray-300 pointer-events-none">•</span>
          <span className="cursor-pointer hover:opacity-80 transition-opacity">Panels</span>
          <span className="text-gray-300 pointer-events-none">•</span>
          <span className="cursor-pointer hover:opacity-80 transition-opacity">Batteries</span>
        </div>
      </div>

      {/* Featured Brands Marquee */}
      <div className="relative mb-12 border-b border-gray-200 pb-8 overflow-hidden group">
        {/* Fading Edges */}
        <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee hover:[animation-play-state:paused] gap-4 w-max">
          {[...featuredBrands, ...featuredBrands].map((brand, idx) => {
            const iconName = brand.domain.split('.')[0] + '-icon.png';
            return (
              <Link href="/products?category=Panels" key={idx} className="flex flex-col gap-2 flex-shrink-0 w-36 sm:w-40">
                <div className="aspect-square border border-gray-300 flex items-center justify-center p-4 overflow-hidden group/card hover:border-gray-400 transition-colors cursor-pointer bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/${iconName}`} alt={brand.name} className="w-16 h-16 object-contain grayscale group-hover/card:grayscale-0 transition-all duration-300" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                </div>
                <span className="text-xs font-bold text-gray-700 text-center">{brand.name}</span>
              </Link>
            );
          })}
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
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4 pl-4 pt-1">
                  {group.brands.map((brand, bIdx) => (
                    <div key={bIdx} className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">
                      {brand}
                    </div>
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
