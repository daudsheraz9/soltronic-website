"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function NewsPage() {
  const container = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // Parallax background elements
    gsap.to(".parallax-bg", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Staggered domino entrances for news cards
    gsap.from(".news-card", {
      scrollTrigger: {
        trigger: ".news-grid",
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      rotateX: 45,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out"
    });
  }, { scope: container });

  const newsItems = [
    {
      date: "August 5, 2026",
      category: "Industry Update",
      title: "NEPRA Announces New Net Metering Guidelines",
      excerpt: "The latest update to net metering policies provides better compensation rates for residential solar exporters across Pakistan.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1c75b1d5?auto=format&fit=crop&q=80&w=800"
    },
    {
      date: "July 22, 2026",
      category: "Company News",
      title: "Soltronic Reaches 10,000 Installations Milestone",
      excerpt: "We're proud to announce that over 10,000 homes are now powered by clean, renewable Soltronic energy systems.",
      image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=800"
    },
    {
      date: "July 10, 2026",
      category: "Technology",
      title: "Next-Gen Solar Panels: What to Expect",
      excerpt: "The introduction of N-Type TopCon technology means higher efficiency in extreme summer temperatures.",
      image: "https://images.unsplash.com/photo-1509391366360-1f9597d81232?auto=format&fit=crop&q=80&w=800"
    },
    {
      date: "June 28, 2026",
      category: "Community",
      title: "Soltronic's Rural Electrification Initiative",
      excerpt: "Bringing off-grid solar solutions to remote villages to ensure 24/7 power availability for schools and clinics.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-900 pt-8 pb-32 relative overflow-hidden" ref={container}>
      
      {/* BEGIN: Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-6 text-sm text-gray-500 flex items-center gap-2 mb-12 relative z-10">
        <a className="hover:text-emerald-400 transition-colors" href="/">Home</a>
        <span className="text-gray-700">/</span>
        <span className="text-white font-medium">News</span>
      </nav>
      {/* END: Breadcrumbs */}

      {/* Deep Space Parallax Backgrounds */}
      <div className="parallax-bg absolute top-0 left-0 w-full h-[150%] z-0 opacity-20 pointer-events-none"
           style={{ 
             backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(26, 77, 46, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)' 
           }}>
      </div>
      
      {/* 3D Floating Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
           style={{
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
             backgroundSize: '40px 40px',
             transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-200px)'
           }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A4D2E] to-emerald-400">Updates</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stay informed with the latest news, policy changes, and technological advancements in the solar sector.
          </p>
        </div>

        <div className="news-grid grid grid-cols-1 md:grid-cols-2 gap-12" style={{ perspective: '1200px' }}>
          {newsItems.map((news, index) => (
            <article 
              key={index} 
              className="news-card bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-white/15 transition-colors group cursor-pointer"
            >
              <div className="h-64 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{news.category}</span>
                  <span className="text-sm text-gray-400">{news.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {news.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                  Read Full Article
                  <span className="material-symbols-outlined text-sm transform group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
