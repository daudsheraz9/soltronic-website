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
    id: 'expo-1',
    title: 'Solar Pakistan 2026',
    category: 'expo',
    categoryLabel: 'Lahore Expo Centre',
    date: 'April 17 – 19, 2026',
    location: 'Expo Centre Lahore',
    image: '/expo_solar_pakistan_2026.png',
    description: 'Organized by Fakt Exhibitions (Pvt) Ltd. Brought together international & domestic manufacturers, suppliers, and contractors. Key players like Crown Micro and Eenovance highlighted residential energy storage & smart infrastructure to address grid instability.',
  },
  {
    id: 'expo-2',
    title: 'International Solar Energy Meet (ISEM) 2026',
    category: 'expo',
    categoryLabel: 'Lahore Expo Centre',
    date: 'June 12 – 14, 2026',
    location: 'Expo Centre Lahore',
    image: '/expo_isem_pakistan_2026.png',
    description: 'Organized by White Paper Summits. A strategic B2B exhibition focusing on commercial & industrial scale solar projects, building public-private partnerships to integrate low-cost power into Pakistan\'s national energy mix.',
  },
  {
    id: 'expo-3',
    title: 'Solar & Storage Pakistan 2026',
    category: 'expo',
    categoryLabel: 'Lahore Expo Centre',
    date: 'July 10 – 12, 2026',
    location: 'Expo Centre Lahore',
    image: '/expo_solar_storage_2026.png',
    description: 'Organized by Pakistan Solar Association (PSA). Widely recognized as one of the largest solar trade shows of the year. Explicitly centered on next-gen lithium battery banks, hybrid inverters, EV charging, and live technical demonstrations.',
  },
  {
    id: 'evt-2',
    title: 'Advanced Inverter Troubleshooting Workshop',
    category: 'training',
    categoryLabel: 'Technical Training',
    date: 'May 10, 2026',
    location: 'Soltronic HQ, Lahore',
    image: '/gallery_textile_solar_1786337105438.png',
    description: 'A hands-on masterclass for top EPC partners, deep-diving into Tier-1 inverter diagnostics, remote telemetry, and firmware optimizations.',
  },
  {
    id: 'evt-aug14',
    title: 'Pakistan Independence Day (14th August) Celebration',
    category: 'corporate',
    categoryLabel: 'Corporate Event',
    date: 'August 14, 2026',
    location: 'Soltronic HQ, Lahore',
    image: '/gallery_14_august_celebration.png',
    description: 'Soltronic Energy celebrated Pakistan\'s 79th Independence Day with great national pride. Executive leadership and engineering teams gathered for a flag-hoisting ceremony, cake cutting, festive green & white decor, and a renewed commitment to empowering Pakistan with clean solar energy.',
  },
  {
    id: 'evt-3',
    title: 'Annual Sustainability Leadership Summit',
    category: 'corporate',
    categoryLabel: 'Corporate Event',
    date: 'July 22, 2026',
    location: 'Serena Hotel, Islamabad',
    image: '/CEO-3 (1).png',
    description: 'Keynotes from executive team discussing the future of smart grids in Pakistan, net-metering policies, and accelerating corporate ESG goals.',
  },
  {
    id: 'evt-4',
    title: 'Solar For Schools: Rural Electrification Drive',
    category: 'community',
    categoryLabel: 'Community Impact',
    date: 'February 5, 2026',
    location: 'Interior Sindh',
    image: '/gallery_agri_solar_1786337138449.png',
    description: 'Soltronic engineering teams volunteered to deploy off-grid 5kW systems across 12 primary schools, ensuring uninterrupted power for digital classrooms.',
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
    <div ref={containerRef} className="min-h-screen bg-gray-50 text-slate-900 font-sans overflow-hidden relative selection:bg-emerald-500 selection:text-white">
      
      {/* Deep Spatial Background Layer (Parallax) */}
      <div className="parallax-bg absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-900/40 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#107022]/30 blur-[150px]"></div>
        <div className="absolute top-[40%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-orange-600/10 blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        

        {/* Glassmorphic Filter Bar */}
        <div className="antigravity-header-element flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2.5 rounded-2xl text-sm font-bold tracking-wide transition-all duration-300 backdrop-blur-xl border ${
                selectedCategory === cat.id
                  ? 'bg-emerald-100 text-emerald-700 border-emerald-300 shadow-sm scale-105'
                  : 'bg-white text-slate-600 border-gray-200 hover:bg-gray-50 hover:scale-105 shadow-sm'
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
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/50 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"></div>
              
              <div className="h-full bg-white border border-gray-200 rounded-[2rem] overflow-hidden flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-500 ease-out group-hover:[transform:rotateX(5deg)_rotateY(-5deg)_translateY(-10px)] group-hover:shadow-[10px_20px_40px_rgba(0,0,0,0.1)] group-hover:border-emerald-300">
                
                {/* Spatial Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                  
                  {/* Floating Date Badge */}
                  <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md border border-gray-200 text-emerald-800 px-4 py-2 rounded-xl text-xs font-bold shadow-sm">
                    {evt.date}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-1 relative z-10 -mt-10">
                  <div className="inline-block px-3 py-1 bg-emerald-100 border border-emerald-200 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-lg mb-4 self-start shadow-sm">
                    {evt.categoryLabel}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-emerald-600 transition-colors">
                    {evt.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                    {evt.description}
                  </p>
                  
                  {/* Footer Row */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-5 mt-auto">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 group-hover:text-emerald-700 transition-colors">
                      <span className="material-symbols-outlined text-[16px]">location_on</span>
                      {evt.location}
                    </span>
                    <button className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300 text-gray-600 group-hover:text-white group-hover:border-emerald-600 shadow-sm">
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
            <p className="text-2xl font-light text-gray-500">No events found in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}
