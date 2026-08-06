"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function PromotionsPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Staggered entrance
    gsap.from(".promo-card", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: container });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, card: HTMLDivElement | null) => {
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // 3D hover effect using GSAP for smooth transition
    gsap.to(card, {
      rotateX: -y / 15,
      rotateY: x / 15,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (card: HTMLDivElement | null) => {
    if (!card) return;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  const promos = [
    {
      title: "Summer Solar Sale",
      discount: "20% OFF",
      description: "Beat the heat and the bills. Install a full solar array this summer and get 20% off standard installation costs.",
      color: "from-orange-400 to-amber-500"
    },
    {
      title: "Battery Bundle",
      discount: "FREE UPGRADE",
      description: "Purchase a premium solar system and receive a free battery capacity upgrade to keep your home powered through the night.",
      color: "from-green-500 to-emerald-700"
    },
    {
      title: "Referral Reward",
      discount: "Rs 50,000",
      description: "Refer a neighbor. When they complete their installation, you receive a flat Rs 50,000 cashback directly to your bank account.",
      color: "from-blue-500 to-indigo-600"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20 overflow-hidden relative" ref={container}>
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Special <span className="text-[#1A4D2E]">Promotions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take advantage of our current offers to maximize your savings and transition to clean energy faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10" style={{ perspective: '1000px' }}>
          {promos.map((promo, index) => (
            <div 
              key={index}
              className="promo-card"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-3xl h-full shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] flex flex-col items-start relative overflow-hidden group">
                
                {/* Glassmorphism gradient orb inside card */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${promo.color} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} style={{ transform: 'translateZ(-10px)' }}></div>
                
                <div className="mb-6 relative" style={{ transform: 'translateZ(30px)' }}>
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${promo.color} shadow-lg`}>
                    {promo.discount}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4" style={{ transform: 'translateZ(40px)' }}>
                  {promo.title}
                </h3>
                
                <p className="text-gray-600 mb-8 flex-grow" style={{ transform: 'translateZ(20px)' }}>
                  {promo.description}
                </p>
                
                <button 
                  className="mt-auto flex items-center gap-2 font-bold text-[#1A4D2E] group-hover:text-orange-500 transition-colors"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  Claim Offer
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
