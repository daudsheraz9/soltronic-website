"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function GreenSketchHeader() {
  const sliderImages = [
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583345209745-0d2dbd7d91e8?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1662998399589-9856a908eb88?q=80&w=1600&auto=format&fit=crop"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-gutter pt-8 md:pt-12 flex flex-col lg:flex-row gap-gutter">
      {/* Left Canvas (Hero & Categories) */}
      <div className="flex-1 flex flex-col gap-gutter overflow-hidden">
        {/* Hero Slider Section */}
        <section className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-sm group">
          {/* Slider Container */}
          <div className="w-full h-full relative" id="heroSlider">
            {sliderImages.map((src, index) => (
              <div key={index} className={`hero-slide w-full h-full relative ${currentSlide === index ? 'block' : 'hidden'}`}>
                <img
                  className="w-full h-full object-cover"
                  alt={`Solar project ${index + 1}`}
                  src={src}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-on-tertiary-fixed/90 via-on-tertiary-fixed/60 to-transparent"></div>
              </div>
            ))}
          </div>
          {/* Hero Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-24 w-full md:w-3/4 z-10">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-4 font-black drop-shadow-lg shadow-black">
              QUOTE AND DESIGN <br />
              SOLAR PROJECTS <br />
              <span className="text-green-500 drop-shadow-lg">IN MINUTES</span>
            </h1>
            <div className="flex items-center gap-4 mt-6">
              <button className="bg-secondary hover:bg-orange-600 text-white text-sm font-bold px-6 py-3 rounded-full flex items-center gap-2 transition-colors shadow-md">
                CREATE YOUR FREE ACCOUNT
                <span className="material-symbols-outlined text-lg bg-white text-secondary rounded-full w-6 h-6 flex items-center justify-center">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          {/* Slider Controls */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-on-tertiary/20 hover:bg-on-tertiary/40 backdrop-blur-sm rounded-full flex items-center justify-center text-on-tertiary opacity-0 group-hover:opacity-100 transition-opacity z-20"
            onClick={prevSlide}
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-on-tertiary/20 hover:bg-on-tertiary/40 backdrop-blur-sm rounded-full flex items-center justify-center text-on-tertiary opacity-0 group-hover:opacity-100 transition-opacity z-20"
            onClick={nextSlide}
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 flex-wrap justify-center w-full px-4" id="sliderDots">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                className={`w-6 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-primary-container w-8' : 'bg-surface-variant'}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </section>

        {/* Category Grid */}
      {/* Category Grid */}
      <section className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 pb-4">
          {/* Promotions */}
          <Link href="#" className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-sm cursor-pointer transition-all hover:scale-105 hover:bg-primary/10 hover:shadow-md duration-300 group">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-primary transition-colors duration-300" style={{ fontVariationSettings: '"wght" 200' }}>
              local_offer
            </span>
            <span className="text-xs font-semibold text-on-surface text-center">Promotions</span>
          </Link>

          {/* Panels */}
          <Link href="/products" className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-sm cursor-pointer transition-all hover:scale-105 hover:bg-primary/10 hover:shadow-md duration-300 group">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-primary transition-colors duration-300" style={{ fontVariationSettings: '"wght" 200' }}>
              solar_power
            </span>
            <span className="text-xs font-semibold text-on-surface text-center">Panels</span>
          </Link>

          {/* Inverters */}
          <Link href="#" className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-sm cursor-pointer transition-all hover:scale-105 hover:bg-primary/10 hover:shadow-md duration-300 group">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-primary transition-colors duration-300" style={{ fontVariationSettings: '"wght" 200' }}>
              settings_input_component
            </span>
            <span className="text-xs font-semibold text-on-surface text-center">Inverters</span>
          </Link>

          {/* Storage */}
          <Link href="#" className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-sm cursor-pointer transition-all hover:scale-105 hover:bg-primary/10 hover:shadow-md duration-300 group">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-primary transition-colors duration-300" style={{ fontVariationSettings: '"wght" 200' }}>
              battery_charging_full
            </span>
            <span className="text-xs font-semibold text-on-surface text-center">Storage</span>
          </Link>

          {/* Mountings */}
          <Link href="#" className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-sm cursor-pointer transition-all hover:scale-105 hover:bg-primary/10 hover:shadow-md duration-300 group">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-primary transition-colors duration-300" style={{ fontVariationSettings: '"wght" 200' }}>
              hardware
            </span>
            <span className="text-xs font-semibold text-on-surface text-center">Mountings</span>
          </Link>

          {/* EV Chargers */}
          <Link href="#" className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-sm cursor-pointer transition-all hover:scale-105 hover:bg-primary/10 hover:shadow-md duration-300 group">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-primary transition-colors duration-300" style={{ fontVariationSettings: '"wght" 200' }}>
              ev_station
            </span>
            <span className="text-xs font-semibold text-on-surface text-center">EV Chargers</span>
          </Link>

          {/* Heat Pump */}
          <Link href="#" className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-sm cursor-pointer transition-all hover:scale-105 hover:bg-primary/10 hover:shadow-md duration-300 group">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-primary transition-colors duration-300" style={{ fontVariationSettings: '"wght" 200' }}>
              hvac
            </span>
            <span className="text-xs font-semibold text-on-surface text-center">Heat Pump</span>
          </Link>

          {/* Electricals */}
          <Link href="#" className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-sm cursor-pointer transition-all hover:scale-105 hover:bg-primary/10 hover:shadow-md duration-300 group">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-primary transition-colors duration-300" style={{ fontVariationSettings: '"wght" 200' }}>
              electrical_services
            </span>
            <span className="text-xs font-semibold text-on-surface text-center">Electricals</span>
          </Link>
        </div>
      </section>

        <section className="w-full mt-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tier 1 Solar Panels Ad */}
            <div className="relative h-64 rounded-xl overflow-hidden shadow-sm group cursor-pointer border border-outline-variant">
              <img
                src="https://lh3.googleusercontent.com/aida/AP1WRLvFelbdJt0FCUyxwavwT_H9o9LdwnTNTL6CNxuRaTgjlQYbf-LeyB2DH-rEVi4i5xfM2LR22M8USMUtaXPLsRTG0LW2ALqILV0jc7q33DW6zUuzyZ58O53qSOtcNt5N_f39UhL0xg72Vznu69zZ-60Bw5mJuBoMbpjrANZyxkbVwqrkeTdJLxp8sDWlERROT2qcRcWSAyUMRG2RW31U1LiYihgczcKFneUQ0G0PpJm1MS7E3V-GxJji1CrK"
                alt="Tier 1 Solar Panels"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-tertiary-fixed/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {/* Premium Inverters Ad */}
            <div className="relative h-64 rounded-xl overflow-hidden shadow-sm group cursor-pointer border border-outline-variant">
              <img
                src="https://lh3.googleusercontent.com/aida/AP1WRLsngSU64o5XK-R5LRkL3Jq6B2U693fzzvfuXa2na-MMr7Awn2PM9oMxAk90kcyZaBZ1NSaxszY6-locZLNF9sqOsadhuIAWZ8j26OGk5bIwnwJr8jaJSFmZi02V1FiPSwOz4z-WrSWkNdKQOHcPst8vuRbfSwvWW0VC6Md8Fg8r_bfZUolzk676ErErYzEbLQKwcW10xRRELNwRNc6gqnRtZRMQ-dbTfznaMvOsnpYWQV8gq7L3iY9J1sNK"
                alt="Premium Inverters"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-tertiary-fixed/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </section>
      </div>

      {/* Right SideNavBar / Widgets Cluster */}
      <div className="w-full lg:w-80 flex flex-col gap-gutter shrink-0 hidden lg:flex">
        {/* GreenDeal Widget */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col">
          <div className="p-4 text-center border-b border-outline-variant/30">
            <h3 className="text-xl font-bold text-primary">GreenDeal</h3>
            <p className="text-sm font-bold text-secondary">STC-Battery</p>
            <p className="text-xs text-on-surface-variant mt-1">Fast Approval. Faster Payment.</p>
          </div>
          <div className="bg-primary px-4 py-3 flex justify-between items-center text-on-primary">
            <div>
              <p className="text-xs font-bold">Standard Payment</p>
              <p className="text-[10px] opacity-80">CER Approval</p>
            </div>
            <span className="text-xl font-bold">$39.37*</span>
          </div>
          <div className="bg-primary-container px-4 py-3 flex justify-between items-center text-on-primary-container">
            <div>
              <p className="text-xs font-bold">Next Day Payment</p>
              <p className="text-[10px] opacity-80">*Excluding CER creation fee</p>
            </div>
            <span className="text-xl font-bold">$38.37*</span>
          </div>
          <div className="p-3 bg-surface-container-lowest flex justify-center">
            <button className="bg-secondary-container text-on-secondary-container text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-1 hover:bg-secondary hover:text-white transition-colors">
              Learn More <span className="material-symbols-outlined text-sm">arrow_circle_right</span>
            </button>
          </div>
        </div>
        
        {/* Ad Banner 1 */}
        <div className="w-full h-48 rounded-xl overflow-hidden border border-outline-variant relative group cursor-pointer">
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            alt="Tier 1 solar panel cells"
            src="https://lh3.googleusercontent.com/aida/AP1WRLvFelbdJt0FCUyxwavwT_H9o9LdwnTNTL6CNxuRaTgjlQYbf-LeyB2DH-rEVi4i5xfM2LR22M8USMUtaXPLsRTG0LW2ALqILV0jc7q33DW6zUuzyZ58O53qSOtcNt5N_f39UhL0xg72Vznu69zZ-60Bw5mJuBoMbpjrANZyxkbVwqrkeTdJLxp8sDWlERROT2qcRcWSAyUMRG2RW31U1LiYihgczcKFneUQ0G0PpJm1MS7E3V-GxJji1CrK"
          />
          <div className="absolute inset-0 bg-on-tertiary-fixed/40 group-hover:bg-on-tertiary-fixed/30 transition-colors"></div>
          <div className="absolute inset-0 p-4 flex flex-col justify-center items-center text-center">
            
          </div>
        </div>

        {/* Ad Banner 2 */}
        <div className="w-full h-48 rounded-xl overflow-hidden border border-outline-variant relative group cursor-pointer bg-surface-container">
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            alt="Premium solar inverter"
            src="https://lh3.googleusercontent.com/aida/AP1WRLsngSU64o5XK-R5LRkL3Jq6B2U693fzzvfuXa2na-MMr7Awn2PM9oMxAk90kcyZaBZ1NSaxszY6-locZLNF9sqOsadhuIAWZ8j26OGk5bIwnwJr8jaJSFmZi02V1FiPSwOz4z-WrSWkNdKQOHcPst8vuRbfSwvWW0VC6Md8Fg8r_bfZUolzk676ErErYzEbLQKwcW10xRRELNwRNc6gqnRtZRMQ-dbTfznaMvOsnpYWQV8gq7L3iY9J1sNK"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-on-tertiary-fixed/80 via-transparent to-transparent"></div>
          <div className="absolute inset-0 p-4 flex flex-col justify-center items-center text-center">
            
          </div>
        </div>

        {/* Payment Widget */}
        <div className="w-full h-32 rounded-xl overflow-hidden border border-outline-variant relative group cursor-pointer">
          <img
            className="w-full h-full object-cover"
            alt="Contactless payment"
            src="https://lh3.googleusercontent.com/aida/AP1WRLv9rFxPm1Mo2as3LPzeLAyP95cjSyX-aHE-xzzGmzp3VK9QRVPmP051S3ArAgUrTSPQPwk2BQnsc5c2lNt2lvxdIr8CEfEdG1HZLf-jtKcyyp6RC2ikvDPAKoxACP-XUs8KBaVNPSNQgbp4qrEIdA18bwMltBQ6mN_vDDt0ibw8WJp_DeJOE6Drgk-iJCYg4YO5Ygx5AgKcu726rcBv-1DJdBwoXBz1CopluVxmS4sMB02dy2cz66fdbQA"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary-container/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 p-4 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-on-tertiary mb-1">Pay My Invoice</h3>
            <p className="text-xs text-tertiary-fixed">Easy Online Payment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
