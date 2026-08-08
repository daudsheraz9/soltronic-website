"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const bottomNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'EPC Solutions', href: '/services' },
    { name: 'Promotions', href: '/promotions' },
    { name: 'Brands', href: '/brands' },
    { name: 'Calculator', href: '/calculator' },
    { name: 'News', href: '/news' },
    { name: 'Downloads', href: '/downloads' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="w-full sticky top-0 left-0 z-50 bg-[#107022] text-white font-sans shadow-md">
      {/* Top Row: Logo, Search Bar, Utility Actions (OSW safe-content-wrapper) */}
      <div className="max-w-[80rem] mx-auto px-4 p-2 flex items-center justify-between">

        {/* Left: Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="block relative w-32 h-10 md:h-16 lg:h-14">
            <Image src="/logo.png" alt="Soltronic Energy Logo" fill className="object-contain" priority />
          </Link>
        </div>

        {/* Center: OSW Search Bar */}
        <div className="flex-1 ml-2 md:ml-4 mr-0 md:mr-3 max-w-2xl lg:max-w-3xl">
          <div className="relative flex items-center w-full bg-white rounded-md overflow-hidden text-gray-800 h-10 shadow-inner">
            <input
              type="text"
              placeholder="Search for products (Brand / Name / Description)"
              className="w-full h-full pl-4 pr-10 outline-none bg-transparent text-[14px] placeholder:text-gray-400 font-normal"
            />
            <button className="absolute right-0 top-0 h-full px-3.5 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors">
              <span className="material-symbols-outlined text-xl">search</span>
            </button>
          </div>
        </div>

        {/* Right: Sign In & Favourite */}
        <div className="flex items-center gap-6 text-[12px] font-medium flex-shrink-0">
          <Link href="/signin" className="hidden lg:flex flex-col items-center gap-0.5 hover:text-white/80 transition-colors group">
            <span className="material-symbols-outlined text-2xl group-hover:scale-105 transition-transform">person</span>
            <span className="tracking-tight">Sign In</span>
          </Link>
          <Link href="/favourite" className="hidden lg:flex flex-col items-center gap-0.5 hover:text-white/80 transition-colors group">
            <span className="material-symbols-outlined text-2xl group-hover:scale-105 transition-transform">favorite_border</span>
            <span className="tracking-tight">Favourite</span>
          </Link>

          {/* Get Quote Button */}
          <Link href="/quote" className="hidden lg:flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-semibold text-[14px] transition-colors shadow-sm whitespace-nowrap">
            Get Quote
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className={`lg:block ${isMobileMenuOpen ? 'block bg-[#0e5c1c]' : 'hidden'}`}>
        <div className="max-w-[80rem] mx-auto px-4">
          <nav className="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-4 lg:gap-12 w-full overflow-x-auto no-scrollbar py-1">
            {bottomNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`relative py-2 text-[16px] font-normal whitespace-nowrap transition-colors border-b-[3px] ${isActive
                    ? 'text-orange-400 font-semibold border-orange-400'
                    : 'text-white/95 hover:text-orange-400 border-transparent hover:border-orange-400/70'
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
