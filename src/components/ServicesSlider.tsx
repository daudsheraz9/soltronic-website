"use client";

import { useRef } from 'react';
import Link from 'next/link';

export default function ServicesSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative max-w-container-max mx-auto group">
      {/* Navigation Arrows */}
      <button 
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 w-12 h-12 bg-white text-neutral-800 rounded-full shadow-lg border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-neutral-100"
        aria-label="Scroll left"
      >
        <span className="material-symbols-outlined text-2xl font-bold">arrow_back</span>
      </button>

      <button 
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 w-12 h-12 bg-white text-neutral-800 rounded-full shadow-lg border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-neutral-100"
        aria-label="Scroll right"
      >
        <span className="material-symbols-outlined text-2xl font-bold">arrow_forward</span>
      </button>

      {/* Slider Container */}
      <div 
        ref={sliderRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-4 pt-10 px-4 md:px-8 hide-scrollbar" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}} />
        
        {/* Card 1 */}
        <div className="snap-center shrink-0 w-[250px] relative rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-2 border-white bg-gradient-to-br from-blue-500 to-indigo-600 text-white overflow-visible transition-all hover:-translate-y-2 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] duration-300">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border-[4px] border-surface-bright">
            <img src="/icons/icon_solar_epc.png" alt="Solar EPC" className="w-[72px] h-[72px] object-contain" />
          </div>
          <div className="pt-12 pb-4 px-6 text-center flex flex-col h-full">
            <h4 className="text-xl font-bold mb-2 font-headline-md">Solar EPC</h4>
            <p className="text-sm text-white/90 mb-4 flex-grow">Comprehensive Engineering, Procurement, and Construction services for solar projects of all scales.</p>
            <Link href="/services" className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-bold py-2 px-6 rounded-full transition-colors text-sm tracking-wide">LEARN MORE</Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="snap-center shrink-0 w-[250px] relative rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-2 border-white bg-gradient-to-br from-emerald-500 to-teal-600 text-white overflow-visible transition-all hover:-translate-y-2 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] duration-300">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border-[4px] border-surface-bright">
            <img src="/icons/icon_solar_install.png" alt="Solar Installations" className="w-[72px] h-[72px] object-contain" />
          </div>
          <div className="pt-12 pb-4 px-6 text-center flex flex-col h-full">
            <h4 className="text-xl font-bold mb-2 font-headline-md">Solar Installations</h4>
            <p className="text-sm text-white/90 mb-4 flex-grow">Professional installation of solar panels for residential, commercial, and industrial properties.</p>
            <Link href="/services" className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-bold py-2 px-6 rounded-full transition-colors text-sm tracking-wide">LEARN MORE</Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="snap-center shrink-0 w-[250px] relative rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-2 border-white bg-gradient-to-br from-orange-400 to-red-500 text-white overflow-visible transition-all hover:-translate-y-2 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] duration-300">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border-[4px] border-surface-bright">
            <img src="/icons/icon_net_metering.png" alt="Net Metering" className="w-[72px] h-[72px] object-contain" />
          </div>
          <div className="pt-12 pb-4 px-6 text-center flex flex-col h-full">
            <h4 className="text-xl font-bold mb-2 font-headline-md">Net Metering</h4>
            <p className="text-sm text-white/90 mb-4 flex-grow">Seamless grid integration, allowing you to earn credits for excess energy produced.</p>
            <Link href="/services" className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-bold py-2 px-6 rounded-full transition-colors text-sm tracking-wide">LEARN MORE</Link>
          </div>
        </div>

        {/* Card 4 */}
        <div className="snap-center shrink-0 w-[250px] relative rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-2 border-white bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white overflow-visible transition-all hover:-translate-y-2 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] duration-300">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border-[4px] border-surface-bright">
            <img src="/icons/icon_battery.png" alt="Battery Storage" className="w-[72px] h-[72px] object-contain" />
          </div>
          <div className="pt-12 pb-4 px-6 text-center flex flex-col h-full">
            <h4 className="text-xl font-bold mb-2 font-headline-md">Battery Storage</h4>
            <p className="text-sm text-white/90 mb-4 flex-grow">Advanced energy storage solutions to keep your power running even during outages.</p>
            <Link href="/services" className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-bold py-2 px-6 rounded-full transition-colors text-sm tracking-wide">LEARN MORE</Link>
          </div>
        </div>

        {/* Card 5 */}
        <div className="snap-center shrink-0 w-[250px] relative rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-2 border-white bg-gradient-to-br from-cyan-500 to-blue-600 text-white overflow-visible transition-all hover:-translate-y-2 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] duration-300">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border-[4px] border-surface-bright">
            <img src="/icons/icon_maintenance.png" alt="Maintenance" className="w-[72px] h-[72px] object-contain" />
          </div>
          <div className="pt-12 pb-4 px-6 text-center flex flex-col h-full">
            <h4 className="text-xl font-bold mb-2 font-headline-md">Maintenance</h4>
            <p className="text-sm text-white/90 mb-4 flex-grow">Ongoing support, monitoring, and maintenance to ensure peak system performance.</p>
            <Link href="/services" className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-bold py-2 px-6 rounded-full transition-colors text-sm tracking-wide">LEARN MORE</Link>
          </div>
        </div>

        {/* Card 6 */}
        <div className="snap-center shrink-0 w-[250px] relative rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-2 border-white bg-gradient-to-br from-rose-400 to-pink-600 text-white overflow-visible transition-all hover:-translate-y-2 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] duration-300">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border-[4px] border-surface-bright">
            <img src="/icons/icon_ev_charging.png" alt="EV Charging" className="w-[72px] h-[72px] object-contain" />
          </div>
          <div className="pt-12 pb-4 px-6 text-center flex flex-col h-full">
            <h4 className="text-xl font-bold mb-2 font-headline-md">EV Charging</h4>
            <p className="text-sm text-white/90 mb-4 flex-grow">Fast and reliable electric vehicle charging stations powered by clean solar energy.</p>
            <Link href="/services" className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-bold py-2 px-6 rounded-full transition-colors text-sm tracking-wide">LEARN MORE</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
