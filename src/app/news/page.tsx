"use client";

import React, { useState, useRef, useMemo } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ARTICLES_DATA, Article } from '@/data/newsData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CATEGORIES = ["All", "Industry Policy", "Tech & Innovation", "Market Analysis", "ESG & Sustainability"];

// Safe Image Component with fallback
function SafeImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`bg-gradient-to-br from-[#107022] to-emerald-800 flex flex-col items-center justify-center p-6 text-white text-center ${className || ''}`}>
        <span className="material-symbols-outlined text-4xl mb-2 opacity-80">wb_sunny</span>
        <span className="text-xs font-bold uppercase tracking-wider opacity-90">Soltronic Energy</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={className}
    />
  );
}

export default function NewsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // GSAP Entrance Animations
  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(".anim-news-card", 
      { y: 20, opacity: 0.8 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power1.out" }
    );
  }, { scope: containerRef });

  // Featured stories selection
  const featuredList = ARTICLES_DATA.filter(a => a.featured);
  const firstFeatured = featuredList[0] || ARTICLES_DATA[0];
  const secondFeatured = featuredList.length > 1 ? featuredList[1] : ARTICLES_DATA[1];

  // Filtered Articles
  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      // Don't duplicate featured in the grid when on default view
      if (selectedCategory === "All" && !searchQuery) {
        if (article.id === firstFeatured.id || article.id === secondFeatured.id) return false;
      }

      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
      const matchesSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, firstFeatured.id, secondFeatured.id]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedEmail) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setSubscribedEmail("");
      }, 4000);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 relative font-sans pb-12" ref={containerRef}>
      
      {/* Top Live Ticker Bar */}
      <div className="bg-[#107022] text-white py-2.5 px-4 text-xs shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-hidden">
          <div className="flex items-center gap-2 font-bold uppercase tracking-wider flex-shrink-0 bg-emerald-800/80 px-2.5 py-1 rounded">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping inline-block" />
            <span className="material-symbols-outlined text-sm">trending_up</span>
            Live Updates
          </div>
          <div className="flex-1 overflow-hidden whitespace-nowrap">
            <div className="animate-marquee font-medium flex items-center">
              <span className="mx-6">🏛️ NEPRA Removes Prior Approval for Sub-25kW Solar Systems</span>
              <span className="mx-6">⚡ NEPRA Transitions to Net Billing Framework</span>
              <span className="mx-6">🔋 Hoymiles & SolarMax Expand Microinverter & Storage Tech</span>
              <span className="mx-6">🌱 Rooftop Solar Saves Pakistan $12 Billion in Fuel Imports</span>
              {/* Duplicate set for infinite loop */}
              <span className="mx-6">🏛️ NEPRA Removes Prior Approval for Sub-25kW Solar Systems</span>
              <span className="mx-6">⚡ NEPRA Transitions to Net Billing Framework</span>
              <span className="mx-6">🔋 Hoymiles & SolarMax Expand Microinverter & Storage Tech</span>
              <span className="mx-6">🌱 Rooftop Solar Saves Pakistan $12 Billion in Fuel Imports</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-emerald-100 text-[11px] flex-shrink-0">
            <span className="material-symbols-outlined text-xs">schedule</span>
            Updated Today
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        

        {/* Featured Stories Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Main Featured Story (Large Size) */}
          {firstFeatured && (
            <Link 
              href={`/news/${firstFeatured.slug}`}
              className="lg:col-span-2 anim-news-card group cursor-pointer bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="h-64 sm:h-80 relative overflow-hidden bg-slate-100 flex-shrink-0">
                <SafeImage src={firstFeatured.image} alt={firstFeatured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 bg-[#107022] text-white text-[10px] font-bold rounded uppercase tracking-wider shadow-sm">Featured Story</span>
                  <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#107022] rounded uppercase tracking-wider border border-slate-200 shadow-sm">{firstFeatured.category}</span>
                </div>
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2 font-medium">
                  <span>{firstFeatured.date}</span>
                  <span className="flex items-center gap-1 text-[#107022] font-semibold"><span className="material-symbols-outlined text-xs">schedule</span>{firstFeatured.readTime}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#107022] transition-colors line-clamp-2 leading-snug">{firstFeatured.title}</h2>
                <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4 flex-1">{firstFeatured.excerpt}</p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-end mt-auto">
                  <span className="text-sm font-bold text-[#107022] group-hover:text-orange-600 flex items-center gap-1 transition-colors">Read Full Article<span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span></span>
                </div>
              </div>
            </Link>
          )}

          {/* Second Featured Story */}
          {secondFeatured && (
            <Link 
              href={`/news/${secondFeatured.slug}`}
              className="lg:col-span-1 anim-news-card group cursor-pointer bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-64 sm:h-80 relative overflow-hidden bg-slate-100 flex-shrink-0">
                  <SafeImage src={secondFeatured.image} alt={secondFeatured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-[#107022] border border-slate-200 shadow-sm uppercase tracking-wider">
                    {secondFeatured.category}
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2 font-medium">
                    <span>{secondFeatured.date}</span>
                    <span className="flex items-center gap-1 text-[#107022] font-semibold"><span className="material-symbols-outlined text-xs">schedule</span>{secondFeatured.readTime}</span>
                  </div>
                  <h2 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#107022] transition-colors line-clamp-2 leading-snug">{secondFeatured.title}</h2>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">{secondFeatured.excerpt}</p>
                </div>
              </div>
              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-end mt-auto">
                <span className="text-xs font-bold text-[#107022] group-hover:text-orange-600 flex items-center gap-1 transition-colors">Read Full Article<span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">arrow_forward</span></span>
              </div>
            </Link>
          )}
        </div>

        {/* Filters & Search Controls */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 mb-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-[#107022] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input 
              type="text"
              placeholder="Search news or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-9 pr-8 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#107022] focus:ring-1 focus:ring-[#107022] transition-all"
            />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-base">
              search
            </span>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="news-grid-container">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
              <span className="material-symbols-outlined text-5xl text-slate-400 mb-2">search_off</span>
              <h3 className="text-base font-bold text-slate-800 mb-1">No articles match your search</h3>
              <p className="text-xs text-slate-500 mb-6">Try clearing your filters or searching for another solar term.</p>
              <button 
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="px-4 py-2 bg-[#107022] text-white text-xs font-bold rounded-xl hover:bg-emerald-800 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className="anim-news-card group cursor-pointer bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-48 relative overflow-hidden bg-slate-100">
                      <SafeImage 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-[#107022] border border-slate-200 shadow-sm uppercase tracking-wider">
                        {article.category}
                      </div>
                    </div>

                    <div className="p-5 sm:p-6">
                      <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2 font-medium">
                        <span>{article.date}</span>
                        <span className="flex items-center gap-1 text-[#107022] font-semibold">
                          <span className="material-symbols-outlined text-xs">schedule</span>
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#107022] transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-end">
                    <span className="text-xs font-bold text-[#107022] group-hover:text-orange-600 flex items-center gap-1 transition-colors">
                      Read Full Article
                      <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="pt-4 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 text-center shadow-md">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#107022] flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-2xl">mail</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Subscribe to Soltronic Energy Briefs
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mb-6">
            Get weekly executive summaries on net metering tariffs, solar panel price trends, and green energy loans directly in your inbox.
          </p>

          {isSubscribed ? (
            <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-[#107022] text-xs font-bold inline-flex items-center gap-2">
              <span className="material-symbols-outlined text-base">check_circle</span>
              Thank you! You are now subscribed to Soltronic Clean Energy Briefings.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                required
                placeholder="Enter your email address..."
                value={subscribedEmail}
                onChange={(e) => setSubscribedEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#107022] transition-all"
              />
              <button 
                type="submit"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#107022] hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                Subscribe
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Marquee Keyframe */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
