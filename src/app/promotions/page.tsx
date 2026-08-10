"use client";

import React from 'react';
import Link from 'next/link';

export default function PromotionsPage() {
  const smallPromos = [
    {
      title: "UNBEATABLE PACKAGE - INVEREX + JINKO",
      heading: "UNBEATABLE PACKAGE",
      subheading: "Solar + Battery + Mounting",
      details: "Jinko 550W | Inverex 5kW",
      bgClass: "bg-gradient-to-br from-slate-900 to-slate-800",
      textColor: "text-white",
      accent: "text-blue-400"
    },
    {
      title: "COMMERCIAL STORAGE PACKAGE",
      heading: "MEGA DEAL",
      subheading: "C&I PACKAGE",
      details: "POWERED BY SOLIS",
      bgClass: "bg-gradient-to-r from-purple-100 to-purple-200",
      textColor: "text-purple-900",
      accent: "text-purple-600"
    },
    {
      title: "UNBEATABLE PACKAGE - GROWATT + PYLONTECH",
      heading: "UNBEATABLE PACKAGE",
      subheading: "Solar & Battery",
      details: "Growatt × Pylontech",
      bgClass: "bg-gradient-to-r from-yellow-400 to-amber-500",
      textColor: "text-red-700",
      accent: "text-red-900"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-8 md:pt-5 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Promotion */}
        <div className="mb-12">
          <h2 className="text-sm md:text-base font-bold text-[#1A4D2E] mb-4">Special Battery Sale</h2>
          
          <div className="w-full rounded-2xl overflow-hidden relative shadow-md bg-gradient-to-r from-blue-50 via-teal-50 to-blue-100 flex flex-col md:flex-row min-h-[300px] md:min-h-[400px]">
            {/* Left Content */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10">
              <h1 className="text-5xl md:text-7xl font-black text-[#107022] italic leading-tight uppercase tracking-tight">
                Madness<br />
                Battery Prices
              </h1>
              <div className="mt-6 inline-block bg-[#00a651] text-white font-bold px-6 py-2 rounded uppercase tracking-wider text-lg w-fit shadow-sm">
                Maximise Returns
              </div>
            </div>

            {/* Right Graphics area (Mocking the stacked batteries) */}
            <div className="w-full md:w-1/2 relative min-h-[250px] flex items-end justify-center p-6 bg-gradient-to-b from-transparent to-blue-100/50">
               {/* Decorative background elements to simulate product presence */}
               <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
               
               <div className="relative z-10 flex gap-4 items-end justify-center w-full">
                 <div className="w-24 h-48 bg-white rounded-lg shadow-xl border border-gray-200 flex items-center justify-center relative">
                   <span className="text-gray-400 font-bold text-xs uppercase transform -rotate-90 tracking-widest">Battery 1</span>
                 </div>
                 <div className="w-32 h-64 bg-slate-100 rounded-lg shadow-2xl border border-gray-300 flex items-center justify-center relative z-20">
                    <span className="text-gray-500 font-bold text-sm uppercase transform -rotate-90 tracking-widest">Inverter</span>
                 </div>
                 <div className="w-28 h-56 bg-white rounded-lg shadow-xl border border-gray-200 flex items-center justify-center relative">
                    <span className="text-gray-400 font-bold text-xs uppercase transform -rotate-90 tracking-widest">Battery 2</span>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Small Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {smallPromos.map((promo, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight pl-1">{promo.title}</h3>
              
              <Link href="#" className={`block w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow relative p-6 flex flex-col justify-center items-center text-center group ${promo.bgClass}`}>
                {/* Overlay gradient for hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                
                <h4 className={`text-2xl sm:text-3xl font-black italic uppercase mb-2 ${promo.textColor} transform group-hover:scale-105 transition-transform duration-300`}>
                  {promo.heading}
                </h4>
                
                <div className={`text-sm sm:text-base font-bold px-4 py-1 rounded-full bg-white/90 backdrop-blur-sm mb-4 shadow-sm inline-block ${promo.accent}`}>
                  {promo.subheading}
                </div>
                
                <p className={`text-sm font-medium ${promo.textColor} opacity-90 mt-auto`}>
                  {promo.details}
                </p>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
