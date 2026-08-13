"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useFavourite } from '@/context/FavouriteContext';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, signOut } = useAuth();
  const { totalItemsCount, openDrawer } = useFavourite();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [globalSearch, setGlobalSearch] = useState('');

  const handleGlobalSearch = () => {
    if (globalSearch.trim()) {
      router.push(`/products?search=${encodeURIComponent(globalSearch.trim())}`);
      setIsMobileMenuOpen(false);
      setIsMobileSearchOpen(false);
    }
  };

  const bottomNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'EPC Solutions', href: '/services' },
    { name: 'Promotions', href: '/promotions' },
    { name: 'Brands', href: '/brands' },
    { name: 'News', href: '/news' },
    { name: 'Downloads', href: '/downloads' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="w-full sticky top-0 left-0 z-50 bg-[#107022] text-white font-sans shadow-md">
      {/* Top Row: Logo, Search Bar, Utility Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-2 flex items-center justify-between">

        {/* Left: Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="block relative w-32 h-10 md:h-16 lg:h-14">
            <Image src="/logo.png" alt="Soltronic Energy Logo" fill sizes="128px" className="object-contain" priority />
          </Link>
        </div>

        {/* Desktop Search Bar (Hidden on Mobile) */}
        <div className="hidden md:flex flex-1 ml-4 mr-3 max-w-2xl lg:max-w-3xl">
          <div className="relative flex items-center w-full bg-white rounded-md overflow-hidden text-gray-800 h-10 shadow-inner">
            <input
              type="text"
              placeholder="Search for products (Brand / Name / Description)"
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleGlobalSearch(); }}
              className="w-full h-full pl-4 pr-10 outline-none bg-transparent text-[14px] placeholder:text-gray-400 font-normal"
            />
            <button onClick={handleGlobalSearch} className="absolute right-0 top-0 h-full px-3.5 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors">
              <span className="material-symbols-outlined text-xl">search</span>
            </button>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 md:gap-6 text-[12px] font-medium flex-shrink-0">
          {user ? (
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-white/70">Signed in as</span>
                <span className="text-xs font-bold truncate max-w-[120px]">{user.user_metadata?.full_name || user.email?.split('@')[0]}</span>
              </div>
              <button
                onClick={() => signOut()}
                className="text-[11px] bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 rounded transition"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link href="/signin" className="hidden lg:flex flex-col items-center gap-0.5 hover:text-white/80 transition-colors group">
              <span className="material-symbols-outlined text-2xl group-hover:scale-105 transition-transform">person</span>
              <span className="tracking-tight">Sign In</span>
            </Link>
          )}

          <button 
            onClick={openDrawer}
            className="relative flex flex-col items-center gap-0.5 hover:text-white/80 transition-colors group"
          >
            <div className="relative flex leading-none">
              <span className="material-symbols-outlined text-2xl group-hover:scale-105 transition-transform">favorite_border</span>
              {totalItemsCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow">
                  {totalItemsCount}
                </span>
              )}
            </div>
            <span className="tracking-tight hidden lg:block">Favourite</span>
          </button>

          {/* Get Quote Button */}
          <Link href="/quote" className="hidden lg:flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-semibold text-[14px] transition-colors shadow-sm whitespace-nowrap">
            Get Quote
          </Link>

          {/* Mobile Search Icon Toggle */}
          <button
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors"
            onClick={() => {
              setIsMobileSearchOpen(!isMobileSearchOpen);
              if (isMobileMenuOpen) setIsMobileMenuOpen(false);
            }}
            aria-label="Toggle search"
          >
            <span className="material-symbols-outlined text-2xl">{isMobileSearchOpen ? 'close' : 'search'}</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              if (isMobileSearchOpen) setIsMobileSearchOpen(false);
            }}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Expandable Search Bar */}
      {isMobileSearchOpen && (
        <div className="md:hidden px-4 pb-3 pt-1 bg-[#107022] border-t border-white/10 animate-fadeIn">
          <div className="relative flex items-center w-full bg-white rounded-md overflow-hidden text-gray-800 h-10 shadow-md">
            <input
              type="text"
              autoFocus
              placeholder="Search products..."
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleGlobalSearch(); }}
              className="w-full h-full pl-4 pr-10 outline-none bg-transparent text-[14px] placeholder:text-gray-400 font-normal"
            />
            <button onClick={handleGlobalSearch} className="absolute right-0 top-0 h-full px-3.5 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors">
              <span className="material-symbols-outlined text-xl">search</span>
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navigation Bar */}
      <div className={`lg:block ${isMobileMenuOpen ? 'block bg-[#0e5c1c]' : 'hidden'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0 w-full overflow-x-auto no-scrollbar py-1 px-2 lg:px-4">
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
