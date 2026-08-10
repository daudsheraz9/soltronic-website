"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const sliderImages = [
  "/product-main-image-1.png",
  "/product-main-image-2.png",
  "/product-main-image-3.png",
  "/product-main-image-4.png",
  "/product-main-image-5.png",
  "/product-main-image-6.png",
  "/product-main-image-7.png",
  "/banner-main.png",
  "/banner-main-2.png",
  "/banner-main-3.png"
];

export default function GreenSketchHeader({ 
  hideCategories = false,
  hideBottomAds = false
}: { 
  hideCategories?: boolean;
  hideBottomAds?: boolean;
} = {}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-gutter pt-4 flex flex-col lg:flex-row gap-gutter">
      {/* Left Canvas (Hero & Categories) */}
      <div className="flex-1 flex flex-col gap-gutter overflow-hidden">
        {/* Hero Slider Section */}
        <section className="relative w-full rounded-xl overflow-hidden shadow-sm group">
          {/* Slider Container */}
          <div className="w-full relative" id="heroSlider">
            {sliderImages.map((src, index) => (
              <div key={index} className={`hero-slide w-full relative ${currentSlide === index ? 'block' : 'hidden'}`}>
                <Image
                  src={src}
                  alt={`Solar project ${index + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

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
      {!hideCategories && (
        <section className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 pb-4">
          {/* Promotions */}
          <Link href="/promotions" className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-sm cursor-pointer transition-all hover:scale-105 hover:bg-primary/10 hover:shadow-md duration-300 group">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-primary transition-colors duration-300" style={{ fontVariationSettings: '"wght" 200' }}>
              local_offer
            </span>
            <span className="text-xs font-semibold text-on-surface text-center">Promotions</span>
          </Link>

          {/* Inverters */}
          <Link href="/products?category=inverters" className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-sm cursor-pointer transition-all hover:scale-105 hover:bg-primary/10 hover:shadow-md duration-300 group">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-primary transition-colors duration-300" style={{ fontVariationSettings: '"wght" 200' }}>
              settings_input_component
            </span>
            <span className="text-xs font-semibold text-on-surface text-center">Inverters</span>
          </Link>

          {/* Batteries */}
          <Link href="/products?category=batteries" className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-sm cursor-pointer transition-all hover:scale-105 hover:bg-primary/10 hover:shadow-md duration-300 group">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-primary transition-colors duration-300" style={{ fontVariationSettings: '"wght" 200' }}>
              battery_charging_full
            </span>
            <span className="text-xs font-semibold text-on-surface text-center">Batteries</span>
          </Link>

          {/* Panels */}
          <Link href="/products?category=panels" className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-sm cursor-pointer transition-all hover:scale-105 hover:bg-primary/10 hover:shadow-md duration-300 group">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-primary transition-colors duration-300" style={{ fontVariationSettings: '"wght" 200' }}>
              solar_power
            </span>
            <span className="text-xs font-semibold text-on-surface text-center">Panels</span>
          </Link>

          {/* EV Chargers */}
          <Link href="/products?category=ev-chargers" className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-sm cursor-pointer transition-all hover:scale-105 hover:bg-primary/10 hover:shadow-md duration-300 group">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-primary transition-colors duration-300" style={{ fontVariationSettings: '"wght" 200' }}>
              ev_station
            </span>
            <span className="text-xs font-semibold text-on-surface text-center">EV Chargers</span>
          </Link>

          {/* Pressure Washers */}
          <Link href="/products?category=pressure-washers" className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-sm cursor-pointer transition-all hover:scale-105 hover:bg-primary/10 hover:shadow-md duration-300 group">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-primary transition-colors duration-300" style={{ fontVariationSettings: '"wght" 200' }}>
              cleaning_services
            </span>
            <span className="text-xs font-semibold text-on-surface text-center">Pressure Washers</span>
          </Link>

          {/* Mountings */}
          <Link href="/products?category=mountings" className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-sm cursor-pointer transition-all hover:scale-105 hover:bg-primary/10 hover:shadow-md duration-300 group">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-primary transition-colors duration-300" style={{ fontVariationSettings: '"wght" 200' }}>
              hardware
            </span>
            <span className="text-xs font-semibold text-on-surface text-center">Mountings</span>
          </Link>

          {/* Electricals */}
          <Link href="/products?category=electricals" className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-sm cursor-pointer transition-all hover:scale-105 hover:bg-primary/10 hover:shadow-md duration-300 group">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-primary transition-colors duration-300" style={{ fontVariationSettings: '"wght" 200' }}>
              electrical_services
            </span>
            <span className="text-xs font-semibold text-on-surface text-center">Electricals</span>
          </Link>
        </div>
        </section>
      )}

      {!hideBottomAds && (
        <section className="w-full mt-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tier 1 Solar Panels Ad */}
            <div className="relative rounded-xl overflow-hidden shadow-sm group cursor-pointer border border-outline-variant aspect-[16/9] md:aspect-[21/9]">
              <Image
                src="/below-ad.jpeg"
                alt="Tier 1 Solar Panels"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-tertiary-fixed/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {/* Premium Inverters Ad */}
            <div className="relative rounded-xl overflow-hidden shadow-sm group cursor-pointer border border-outline-variant aspect-[16/9] md:aspect-[21/9]">
              <Image
                src="/right-side-ad1.jpeg"
                alt="Premium Inverters"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-tertiary-fixed/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </section>
      )}
      </div>

      {/* Right SideNavBar / Widgets Cluster */}
      <div className="w-full lg:w-80 flex flex-col gap-gutter shrink-0 hidden lg:flex">
        {/* GreenDeal Widget Placeholder */}
        <div className="w-full rounded-xl overflow-hidden border border-outline-variant relative group cursor-pointer">
          <Image
            src="/right-side-ad2.png"
            alt="GreenDeal STC-Battery"
            width={400}
            height={300}
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {/* Ad Banner 1 */}
        <div className="w-full rounded-xl overflow-hidden border border-outline-variant relative group cursor-pointer">
          <Image
            src="/banner-side-1.png"
            alt="Tier 1 solar panel cells"
            width={400}
            height={300}
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-on-tertiary-fixed/40 group-hover:bg-on-tertiary-fixed/30 transition-colors"></div>
        </div>

        {/* Ad Banner 2 */}
        <div className="w-full rounded-xl overflow-hidden border border-outline-variant relative group cursor-pointer bg-surface-container">
          <Image
            src="/banner-side-2.png"
            alt="Premium solar inverter"
            width={400}
            height={300}
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-on-tertiary-fixed/80 via-transparent to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
