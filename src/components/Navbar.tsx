"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="bg-surface shadow-sm sticky top-0 z-50 flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto w-full backdrop-blur-sm">
      <div className="flex items-center gap-3">
        {/* Logo Icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary relative overflow-hidden">
          <span className="material-symbols-outlined text-secondary text-2xl absolute" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
        </div>
        {/* Logo Text */}
        <div className="flex flex-col leading-none">
          <span className="text-xl font-bold tracking-tight text-primary uppercase">Soltronic</span>
          <span className="text-sm font-semibold tracking-widest text-secondary uppercase">Energy</span>
        </div>
      </div>

      <nav className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.name}
              href={link.href}
              className={`pb-1 text-label-md font-label-md transition-colors ${
                isActive 
                  ? 'text-secondary border-b-2 border-secondary font-bold' 
                  : 'text-on-surface-variant hover:text-secondary'
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
          className="inline-flex items-center justify-center bg-secondary text-on-secondary px-6 py-2.5 rounded-md font-label-md text-label-md hover:bg-secondary/90 transition-all hover:-translate-y-0.5 shadow-sm"
        >
          Get Free Quote <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
        </Link>
      </div>

      <button className="md:hidden text-on-surface p-2">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
}
