"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-gutter py-6 max-w-container-max mx-auto w-full">
      <div className="flex items-center">
        <Link href="/">
          <img src="/logo.png" alt="Soltronic Energy Logo" className="h-20 md:h-24 w-auto object-contain py-1" />
        </Link>
      </div>

      <nav className="hidden md:flex items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-1.5 shadow-sm">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.name}
              href={link.href}
              className={`px-6 py-2 text-label-md font-label-md transition-colors rounded-full ${
                isActive 
                  ? 'bg-white text-black font-bold shadow-sm' 
                  : 'text-black/80 hover:text-black hover:bg-white/10'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="hidden md:block">
        <Link 
          href="#" 
          className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-full font-label-md text-label-md hover:bg-neutral-800 transition-all hover:-translate-y-0.5 shadow-sm"
        >
          Get Free Quote <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
        </Link>
      </div>

      <button 
        className="md:hidden text-on-surface p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface shadow-lg border-t border-surface-variant/20 md:hidden flex flex-col items-center py-6 gap-6 z-40">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-title-md font-title-md transition-colors ${
                  isActive 
                    ? 'text-secondary font-bold' 
                    : 'text-on-surface hover:text-secondary'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link 
            href="#" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-full font-label-lg text-label-lg hover:bg-neutral-800 transition-all shadow-sm w-11/12 max-w-xs"
          >
            Get Free Quote <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
          </Link>
        </div>
      )}
    </header>
  );
}
