"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function EventsPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Initial entrance animation
    gsap.from(".event-card", {
      opacity: 0,
      scale: 0.8,
      z: -500, // starting far back in 3D space
      duration: 1.5,
      stagger: 0.2,
      ease: "power4.out"
    });
  }, { scope: container });

  const events = [
    {
      title: "Solar for Beginners Webinar",
      date: "August 15, 2026",
      time: "2:00 PM - 3:00 PM PKT",
      type: "Online",
      description: "Learn the basics of solar technology, how net metering works in Pakistan, and if your home is a good fit."
    },
    {
      title: "Lahore Expo: Renewable Energy Tech",
      date: "September 5, 2026",
      time: "10:00 AM - 6:00 PM PKT",
      type: "In-Person",
      description: "Visit our booth at the Expo Center to see live demonstrations of the latest hybrid inverters and batteries."
    },
    {
      title: "Community Outreach: Clean Energy",
      date: "September 20, 2026",
      time: "9:00 AM - 1:00 PM PKT",
      type: "In-Person",
      description: "Join our engineers as we conduct free energy audits for local communities."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-gray-200 pt-8 pb-32 overflow-hidden relative" ref={container}>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Upcoming <span className="text-orange-500">Events</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our webinars, expos, and community outreach programs to learn more about the future of energy.
          </p>
        </div>

        {/* Isometric Grid Container */}
        <div 
          className="flex flex-wrap justify-center gap-12" 
          style={{ 
            perspective: '1500px',
            transformStyle: 'preserve-3d',
            transform: 'rotateX(20deg) rotateY(-15deg)' // Gentle isometric tilt
          }}
        >
          {events.map((event, index) => (
            <div 
              key={index} 
              className="event-card w-full max-w-sm"
              style={{
                transformStyle: 'preserve-3d',
                transform: `translateZ(${index * 50}px)` // Stacking them in Z-space
              }}
            >
              <div className="bg-white/40 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-[30px_30px_60px_rgba(0,0,0,0.1),-10px_-10px_40px_rgba(255,255,255,0.8)] hover:shadow-[40px_40px_80px_rgba(0,0,0,0.15),-15px_-15px_50px_rgba(255,255,255,0.9)] transition-all duration-500 hover:-translate-y-4 cursor-pointer relative group">
                
                <div className="absolute top-0 right-0 p-6 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${event.type === 'Online' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>
                    {event.type}
                  </span>
                </div>
                
                <div className="mb-8 border-l-4 border-[#1A4D2E] pl-4">
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">{event.date}</div>
                  <div className="text-xs text-gray-400 mt-1">{event.time}</div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{event.title}</h3>
                <p className="text-gray-600 mb-8">{event.description}</p>
                
                <button className="w-full py-3 bg-[#1A4D2E] text-white rounded-xl font-bold hover:bg-[#123620] transition-colors shadow-lg">
                  Register Now
                </button>

                {/* Floating 3D Accent */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-tr from-orange-400 to-yellow-300 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" style={{ transform: 'translateZ(-20px)' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
