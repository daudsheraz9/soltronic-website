"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PromotionsPage() {
  const smallPromos = [
    {
      title: "UNBEATABLE PACKAGE - INVEREX + JINKO",
      image: "/unbeatable-package.png"
    },
    {
      title: "COMMERCIAL STORAGE PACKAGE",
      image: "/c&i-storage.png"
    },
    {
      title: "UNBEATABLE PACKAGE - GROWATT + PYLONTECH",
      image: "/unbeatablepackage2.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-8 md:pt-5 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Promotion */}
        <div className="mb-12">
          <h2 className="text-sm md:text-base font-bold text-[#1A4D2E] mb-4">Special Battery Sale</h2>
          
          <div className="w-full rounded-2xl overflow-hidden relative shadow-md">
            <Image 
              src="/promotion-page-main-banner.jpeg" 
              alt="Madness Battery Prices" 
              width={1200} 
              height={400} 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Small Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {smallPromos.map((promo, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight pl-1">{promo.title}</h3>
              
              <Link href="#" className="block w-full rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow relative">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
