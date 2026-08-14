"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: "/banner-main.png",
    alt: "Main Banner 1",
    link: "#"
  },
  {
    id: 2,
    image: "/banner-main-2.png",
    alt: "Main Banner 2",
    link: "#"
  },
  {
    id: 3,
    image: "/banner-main-3.png",
    alt: "Main Banner 3",
    link: "#"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-md shadow-sm group">
      <div 
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0">
            <Link href={slide.link} className="block w-full h-full relative">
              <Image 
                src={slide.image} 
                alt={slide.alt} 
                fill
                className="object-cover"
                priority={idx === 0}
              />
            </Link>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10 px-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-sm transition-all duration-300 ${
              currentSlide === idx 
                ? 'bg-white w-9 opacity-100' 
                : 'bg-white/40 hover:bg-white/70 w-5 opacity-60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      
      <button 
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Previous slide"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button 
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Next slide"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  );
}
