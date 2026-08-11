"use client";

import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface EventItem {
  id: string;
  title: string;
  category: 'expo' | 'training' | 'corporate' | 'community';
  categoryLabel: string;
  date: string;
  location: string;
  image: string;
  description: string;
}

const EVENTS: EventItem[] = [
  {
    id: 'evt-1',
    title: 'Middle East Energy Expo 2026',
    category: 'expo',
    categoryLabel: 'Global Expos',
    date: 'March 15, 2026',
    location: 'Dubai World Trade Centre',
    image: '/solar_team.png',
    description: 'Soltronic showcased our latest high-voltage BESS systems to an international audience, forging new partnerships across the MENA region.',
  },
  {
    id: 'evt-2',
    title: 'Advanced Inverter Troubleshooting Workshop',
    category: 'training',
    categoryLabel: 'Technical Training',
    date: 'May 10, 2026',
    location: 'Soltronic HQ, Lahore',
    image: '/gallery_textile_solar_1786337105438.png',
    description: 'A hands-on masterclass for our top EPC partners, deep-diving into Tier-1 inverter diagnostics, remote telemetry, and firmware optimizations.',
  },
  {
    id: 'evt-3',
    title: 'Annual Sustainability Leadership Summit',
    category: 'corporate',
    categoryLabel: 'Corporate Event',
    date: 'July 22, 2026',
    location: 'Serena Hotel, Islamabad',
    image: '/CEO-3 (1).png',
    description: 'Keynotes from our executive team discussing the future of smart grids in Pakistan, net-metering policies, and accelerating corporate ESG goals.',
  },
  {
    id: 'evt-4',
    title: 'Solar For Schools: Rural Electrification Drive',
    category: 'community',
    categoryLabel: 'Community Impact',
    date: 'February 5, 2026',
    location: 'Interior Sindh',
    image: '/gallery_agri_solar_1786337138449.png',
    description: 'Our engineering teams volunteered to deploy off-grid 5kW systems across 12 primary schools, ensuring uninterrupted power for digital classrooms.',
  },
  {
    id: 'evt-5',
    title: 'Soltronic Engineers Mega-Hackathon',
    category: 'corporate',
    categoryLabel: 'Corporate Event',
    date: 'April 18, 2026',
    location: 'Arfa Technology Park',
    image: '/waseembhatti.png',
    description: 'A 48-hour internal coding and hardware sprint resulting in breakthroughs for our proprietary AI energy management software, Sol AI.',
  },
  {
    id: 'evt-6',
    title: 'Agrivoltaics & Smart Farming Expo',
    category: 'expo',
    categoryLabel: 'Regional Expos',
    date: 'June 30, 2026',
    location: 'Multan Expo Center',
    image: '/gallery_residence_solar_1786337122242.png',
    description: 'Demonstrating the power of solar VFD water pumps and agrivoltaics to regional farmers, highlighting massive diesel savings and increased yields.',
  }
];

export default function EventsGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const containerRef = useRef<HTMLDivElement>(null);
  
  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'expo', label: 'Expos & Trade Shows' },
    { id: 'training', label: 'Technical Training' },
    { id: 'corporate', label: 'Corporate Events' },
    { id: 'community', label: 'Community Impact' },
  ];

  const filteredEvents = EVENTS.filter(
    evt => selectedCategory === 'all' || evt.category === selectedCategory
  );

  useGSAP(() => {
    // Spatial Floating Entry Animation for Header
    gsap.from('.antigravity-header-element', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // 3D Staggered entrance for cards
    ScrollTrigger.batch('.antigravity-card', {
      onEnter: (elements) => {
        gsap.fromTo(elements, 
          { 
            y: 100, 
            opacity: 0, 
            rotationX: -15, 
            transformPerspective: 1000 
          },
          { 
            y: 0, 
            opacity: 1, 
            rotationX: 0, 
            duration: 1, 
            stagger: 0.15, 
            ease: 'back.out(1.7)',
            overwrite: true 
          }
        );
      },
      once: true
    });

    // Parallax background
    gsap.to('.parallax-bg', {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

  }, { scope: containerRef, dependencies: [selectedCategory] });

  return (
    <div ref={containerRef} className="min-h-screen bg-[#051810] text-slate-100 font-sans overflow-hidden relative selection:bg-emerald-500 selection:text-white">
      
      {/* Deep Spatial Background Layer (Parallax) */}
      <div className="parallax-bg absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-900/40 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#107022]/30 blur-[150px]"></div>
        <div className="absolute top-[40%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-orange-600/10 blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Antigravity Header */}
        <div className="text-center space-y-6 mb-10">
          <div className="antigravity-header-element inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-emerald-400 text-xs font-black tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(16,112,34,0.3)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Inside Soltronic
          </div>
          <h1 className="antigravity-header-element text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-tight drop-shadow-2xl">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-100 to-white">Global Footprint</span> &<br/> Corporate Events
          </h1>
          <p className="antigravity-header-element text-lg sm:text-xl text-emerald-100/70 max-w-2xl mx-auto font-light leading-relaxed">
            From international expos to specialized engineering masterclasses. Witness the momentum behind Pakistan's clean energy transition.
          </p>
        </div>

        {/* Glassmorphic Filter Bar */}
        <div className="antigravity-header-element flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2.5 rounded-2xl text-sm font-bold tracking-wide transition-all duration-300 backdrop-blur-xl border ${
                selectedCategory === cat.id
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-[0_0_20px_rgba(16,112,34,0.4)] scale-105'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:scale-105'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3D Isometric Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 perspective-[2000px]">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="antigravity-card group relative"
              style={{ willChange: 'transform' }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"></div>
              
              <div className="h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden flex flex-col shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out group-hover:[transform:rotateX(5deg)_rotateY(-5deg)_translateY(-10px)] group-hover:shadow-[20px_30px_50px_rgba(0,0,0,0.5)] group-hover:border-emerald-500/30">
                
                {/* Spatial Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051810] to-transparent opacity-80"></div>
                  
                  {/* Floating Date Badge */}
                  <div className="absolute top-5 right-5 bg-black/40 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xl">
                    {evt.date}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-1 relative z-10 -mt-10">
                  <div className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-black uppercase tracking-widest rounded-lg mb-4 self-start shadow-[0_0_15px_rgba(16,112,34,0.3)]">
                    {evt.categoryLabel}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 leading-snug group-hover:text-emerald-300 transition-colors">
                    {evt.title}
                  </h3>
                  <p className="text-sm text-emerald-100/60 leading-relaxed mb-6 flex-1">
                    {evt.description}
                  </p>
                  
                  {/* Footer Row */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-5 mt-auto">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-emerald-200 transition-colors">
                      <span className="material-symbols-outlined text-[16px]">location_on</span>
                      {evt.location}
                    </span>
                    <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300 text-white shadow-[0_0_0_rgba(16,112,34,0)] group-hover:shadow-[0_0_20px_rgba(16,112,34,0.5)]">
                      <span className="material-symbols-outlined text-sm -rotate-45 group-hover:rotate-0 transition-transform duration-300">arrow_forward</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-2xl font-light text-emerald-100/50">No events found in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}
