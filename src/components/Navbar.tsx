"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const bottomNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Promotions', href: '/promotions' },
    { name: 'Brands', href: '/brands' },
    { name: 'Calculator', href: '/calculator' },
    { name: 'News', href: '/news' },
    { name: 'Events', href: '/events' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="w-full sticky top-0 left-0 z-50 bg-[#107022]/70 backdrop-blur-md text-white">
      {/* Top Row: Logo, Search, Utility Links */}
      <div className="border-b border-white/10 py-2 px-gutter flex flex-wrap lg:flex-nowrap justify-between items-center gap-4">
        
        {/* Left: Logo & Region */}
        <div className="flex items-center gap-6">
          <Link href="/">
            <img src="/logo.png" alt="Soltronic Energy Logo" className="h-16 md:h-20 w-auto object-contain scale-110 origin-left" />
          </Link>

        </div>

        {/* Center: Search Bar */}
        <div className="order-last lg:order-none w-full lg:w-[500px] xl:w-[600px] lg:px-4 mx-auto">
          <div className="relative flex items-center w-full bg-white rounded-full shadow-sm text-black">
            <input 
              type="text" 
              placeholder="Search for products (Brand / Name / Description)" 
              className="w-full py-2 px-5 outline-none rounded-l-full bg-transparent text-sm"
            />
            <button className="p-2 px-4 hover:bg-neutral-100 rounded-r-full transition-colors">
              <span className="material-symbols-outlined text-black">search</span>
            </button>
          </div>
        </div>

        {/* Right: Sign In & Favourite */}
        <div className="flex items-center gap-6 text-sm">
          <Link href="/signin" className="hidden lg:flex flex-col items-center gap-1 hover:text-white/80 transition-colors">
            <span className="material-symbols-outlined">person</span>
            <span>Sign In</span>
          </Link>
          <Link href="/favourite" className="hidden lg:flex flex-col items-center gap-1 hover:text-white/80 transition-colors">
            <span className="material-symbols-outlined">favorite</span>
            <span>Favourite</span>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Bottom Row: Navigation Links */}
      <div className={`lg:block ${isMobileMenuOpen ? 'block absolute w-full top-full left-0 z-50 shadow-lg bg-[#107022]/95 backdrop-blur-xl border-b border-white/10' : 'hidden'}`}>
        <div className="max-w-container-max mx-auto px-gutter overflow-x-auto w-full">
          <nav className="flex flex-col lg:flex-row items-start lg:items-center py-2 lg:py-0 w-full">
            {bottomNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name}
                  href={link.href}
                  className={`flex-1 px-4 py-2 lg:py-2.5 text-sm font-bold transition-all duration-300 w-full text-left lg:text-center whitespace-nowrap ${
                    isActive 
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#f57c00] to-yellow-400 border-l-4 lg:border-l-0 lg:border-b-2 border-[#f57c00] bg-white/5 lg:bg-transparent' 
                      : 'text-white/90 hover:text-white hover:bg-white/10 lg:hover:bg-transparent lg:hover:text-transparent lg:hover:bg-clip-text lg:hover:bg-gradient-to-r lg:hover:from-[#f57c00] lg:hover:to-yellow-400'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
