"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { Product } from '@/data/products';

export default function ProductsClient({ initialProducts }: { initialProducts: Product[] }) {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [offering, setOffering] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Read URL params on mount and when they change
  useEffect(() => {
    const urlSearch = searchParams.get('search') || '';
    const urlCategory = searchParams.get('category') || '';
    if (urlSearch) setSearchQuery(urlSearch);
    if (urlCategory) setCategory(urlCategory);
  }, [searchParams]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setOffering('');
    setCategory('');
    setBrand('');
    setSortBy('');
    setCurrentPage(1);
  };

  const itemsPerPage = 12;

  let filteredProducts = initialProducts.filter(product => {
    if (searchQuery && !product.title.toLowerCase().includes(searchQuery.toLowerCase()) && !product.description?.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (category) {
      const prodCat = product.category?.toLowerCase() || '';
      const filterCat = category.toLowerCase();
      
      const isMatch = prodCat === filterCat || 
                      (filterCat === 'batteries' && prodCat === 'storage') || 
                      (filterCat === 'storage' && prodCat === 'batteries');
                      
      if (!isMatch) {
        return false;
      }
    }
    if (brand && product.vendor?.toLowerCase() !== brand.toLowerCase()) {
      return false;
    }
    // Note: 'offering' filter is not applied as product data doesn't seem to have offering type
    return true;
  });

  if (sortBy) {
    filteredProducts.sort((a, b) => {
      const priceA = parseFloat(a.price?.toString().replace(/,/g, '') || '0');
      const priceB = parseFloat(b.price?.toString().replace(/,/g, '') || '0');
      if (sortBy === 'price-low') return priceA - priceB;
      if (sortBy === 'price-high') return priceB - priceA;
      if (sortBy === 'new') return -1; // Assuming newer items are at the top or there's a date field (mocked for now)
      return 0;
    });
  }

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-gray-50 text-slate-700">



      {/* Category Icons */}
      <div className="mt-8 overflow-x-auto pb-4 max-w-[80rem] mx-auto scrollbar-hide">
        <div className="flex md:justify-center justify-start items-end min-w-max lg:min-w-0 gap-8 lg:gap-14 px-4">
          {[
            { name: 'Promotions', icon: '/icons/promotions.png', href: '/promotions' },
            { name: 'Inverters', icon: '/icons/inverters.png', href: '/products?category=inverters' },
            { name: 'Batteries', icon: '/icons/storage.png', href: '/products?category=batteries' },
            { name: 'Panels', icon: '/icons/panels.png', href: '/products?category=panels' },
            { name: 'EV Chargers', icon: '/icons/ev-chargers.png', href: '/products?category=ev-chargers' },
            { name: 'Pressure Washers', icon: '/icons/pressure-washer.png', href: '/products?category=pressure-washers', scale: 'scale-[1.95]' },
            { name: 'Mountings', icon: '/icons/mountings.png', href: '/products?category=mountings' },
            { name: 'Electricals', icon: '/icons/electrincals.png', href: '/products?category=electricals' },
          ].map((category) => (
            <Link key={category.name} href={category.href} className="flex flex-col items-center gap-3 group min-w-[90px]">
              <div className="h-[60px] md:h-[70px] w-[60px] md:w-[70px] flex items-center justify-center relative">
                <img src={category.icon} alt={category.name} className={`max-h-full max-w-full object-contain mix-blend-multiply transition-all duration-300 group-hover:grayscale ${category.scale || ''}`} />
              </div>
              <span className="text-[13px] md:text-[14px] text-gray-700 font-medium group-hover:text-[#107022] transition-colors text-center mt-1 whitespace-nowrap">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <section className="pb-12 pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative">
        <div className="flex flex-col gap-8 relative">
            
            <div className="bg-white text-gray-800 rounded-[2rem] border border-gray-200 shadow-sm font-sans w-full p-5 flex flex-col gap-4">
              {/* Header and Top Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'wght' 300" }}>tune</span>
                  <h3 className="font-black tracking-[0.2em] text-xs uppercase pt-1 text-dark">Catalog Controls</h3>
                </div>
                
                <button onClick={handleResetFilters} className="flex items-center gap-2 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                  <span className="material-symbols-outlined text-[16px] font-bold">refresh</span> Reset
                </button>
              </div>
              
              {/* Search and Dropdowns Container */}
              <div className="flex flex-col md:flex-row gap-4 w-full">
                {/* Search */}
                <div className="relative flex-1">
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-2xl py-2.5 pl-12 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-400"
                  />
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" style={{ fontVariationSettings: "'wght' 300" }}>search</span>
                </div>

                {/* Dropdowns */}
                <div className="relative flex-1">
                  <select value={offering} onChange={(e) => setOffering(e.target.value)} className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-2xl py-2.5 pl-5 pr-10 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-medium cursor-pointer">
                    <option value="">Offerings</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="agricultural">Agricultural</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" style={{ fontVariationSettings: "'wght' 300" }}>expand_more</span>
                </div>
                <div className="relative flex-1">
                  <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-2xl py-2.5 pl-5 pr-10 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-medium cursor-pointer">
                    <option value="">Categories</option>
                    <option value="inverters">Inverters</option>
                    <option value="batteries">Batteries</option>
                    <option value="panels">Panels</option>
                    <option value="ev-chargers">EV Chargers</option>
                    <option value="pressure-washers">Pressure Washers</option>
                    <option value="mountings">Mountings</option>
                    <option value="electricals">Electricals</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" style={{ fontVariationSettings: "'wght' 300" }}>expand_more</span>
                </div>
                <div className="relative flex-1">
                  <select value={brand} onChange={(e) => setBrand(e.target.value)} className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-2xl py-2.5 pl-5 pr-10 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-medium cursor-pointer">
                    <option value="">Brands</option>
                    <option value="inverex">Inverex</option>
                    <option value="pylontech">Pylontech</option>
                    <option value="solis">Solis</option>
                    <option value="jinko">Jinko</option>
                    <option value="trina">Trina</option>
                    <option value="canadian-solar">Canadian Solar</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" style={{ fontVariationSettings: "'wght' 300" }}>expand_more</span>
                </div>
                <div className="relative flex-1">
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-2xl py-2.5 pl-5 pr-10 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-medium cursor-pointer">
                    <option value="">Sort by</option>
                    <option value="new">New</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" style={{ fontVariationSettings: "'wght' 300" }}>expand_more</span>
                </div>
              </div>
              
              {/* Apply Button */}
              <button className="w-full bg-primary hover:bg-primary/90 text-white text-[13px] font-bold uppercase tracking-[0.2em] py-2.5 rounded-[1.5rem] shadow-sm transition-colors">
                Apply
              </button>
            </div>
            
            <main className="w-full">

              
              {/* BEGIN: Product Grid */}
              {currentProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center px-4 bg-white rounded-[2rem] border border-gray-100 shadow-sm">
                  <span className="material-symbols-outlined text-6xl text-gray-300 mb-4" style={{ fontVariationSettings: "'wght' 200" }}>inventory_2</span>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">No products found</h3>
                  <p className="text-sm text-gray-500 max-w-md">We couldn't find any products matching your current filters. Try adjusting your search criteria or resetting the filters.</p>
                  <button onClick={handleResetFilters} className="mt-6 px-6 py-2.5 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-primary/90 transition-colors">
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {currentProducts.map((product, index) => (

                    <div key={index} className="bg-white flex flex-col group relative border border-gray-100 shadow-sm rounded-2xl overflow-hidden transition-all duration-300 hover:border-orange-200 hover:shadow-[0_0_25px_rgba(254,215,170,0.5)]">
                      
                      {/* Image Section */}
                      <div className="h-40 sm:h-56 bg-[#f4f7fb] flex justify-center items-center p-4 sm:p-6 overflow-hidden">
                        <div className="bg-white w-full h-full rounded-xl flex justify-center items-center p-2 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                          <img alt={product.title} className="max-h-full object-contain transition-transform duration-500 group-hover:scale-110 mix-blend-multiply" src={product.image} />
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="flex-1 flex flex-col p-4">
                        <span className="text-[10px] font-bold text-red-500 tracking-wider uppercase mb-1">{product.category}</span>
                        
                        <h3 className="text-[15px] font-bold text-[#0f172a] leading-snug mb-0.5 line-clamp-2">
                          {product.title}
                        </h3>
                        
                        <p className="text-xs text-gray-400 mb-2 font-medium">{product.vendor}</p>
                        
                        <p className="text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed">
                          {product.description}
                        </p>
                
                        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                          <div className="flex-1 min-w-[30%] bg-[#f8fafc] border border-gray-100 rounded-lg p-1.5 sm:p-2 text-center flex flex-col justify-center">
                            <span className="text-[11px] sm:text-[13px] font-bold text-[#0f172a] leading-tight">{product.power}</span>
                            <span className="text-[8px] sm:text-[9px] text-gray-400 uppercase font-semibold mt-1">{product.labels ? product.labels[0] : 'Power'}</span>
                          </div>
                          <div className="flex-1 min-w-[30%] bg-[#f8fafc] border border-gray-100 rounded-lg p-1.5 sm:p-2 text-center flex flex-col justify-center">
                            <span className="text-[11px] sm:text-[13px] font-bold text-[#0f172a] leading-tight">{product.efficiency}</span>
                            <span className="text-[8px] sm:text-[9px] text-gray-400 uppercase font-semibold mt-1">{product.labels ? product.labels[1] : 'Efficiency'}</span>
                          </div>
                          <div className="flex-1 min-w-[30%] bg-[#f8fafc] border border-gray-100 rounded-lg p-1.5 sm:p-2 text-center flex flex-col justify-center">
                            <span className="text-[11px] sm:text-[13px] font-bold text-[#0f172a] leading-tight">{product.warranty}</span>
                            <span className="text-[8px] sm:text-[9px] text-gray-400 uppercase font-semibold mt-1">{product.labels ? product.labels[2] : 'Warranty'}</span>
                          </div>
                        </div>
                        
                        <div>
                          <Link href={`/products/${(product as any).slug || 'soltronic-mono-550w'}`} className="w-full bg-[#ef4444] hover:bg-[#dc2626] text-white py-3 px-4 rounded-xl text-[14px] transition-all duration-300 text-center font-bold shadow-[0_4px_14px_rgba(239,68,68,0.4)] hover:shadow-[0_6px_20px_rgba(239,68,68,0.6)] flex items-center justify-center gap-2">
                            Get Quote <span className="text-lg leading-none">&rarr;</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {/* END: Product Grid */}
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 xl:gap-5">
                  <div className="col-span-2 lg:col-span-1 lg:col-start-4">
                    <nav className="flex w-full rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      <button 
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="flex-1 justify-center relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="sr-only">Previous</span>
                        <i className="fa-solid fa-chevron-left text-xs"></i>
                      </button>
                      {Array.from({ length: totalPages }).map((_, i) => (
                        <button 
                          key={i + 1}
                          onClick={() => handlePageChange(i + 1)}
                          className={`flex-1 justify-center relative inline-flex items-center px-4 py-2 border text-sm font-medium transition-colors ${
                            currentPage === i + 1 
                              ? 'z-10 bg-primary/10 border-primary text-primary' 
                              : 'bg-white border-gray-300 text-gray-500 hover:bg-primary hover:text-white'
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                      <button 
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="flex-1 justify-center relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="sr-only">Next</span>
                        <i className="fa-solid fa-chevron-right text-xs"></i>
                      </button>
                    </nav>
                  </div>
                </div>
              )}
            </main>
        </div>
      </section>



      {/* Brands Slider */}
      <section className="py-8 bg-white border-b border-gray-100 overflow-hidden relative">
        <style>{`
          @keyframes scroll-brands {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: scroll-brands 20s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Section Heading */}
          <div className="flex flex-col items-center justify-center mb-10 pt-4">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary/50 rounded-full"></span>
              <span className="text-primary font-black text-xs uppercase tracking-[0.3em]">Our Partners</span>
              <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary/50 rounded-full"></span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-800 text-center tracking-tight">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500">Global Brands</span>
            </h3>
          </div>

          {/* Slider Container - Auto Scrolling */}
          <div className="flex gap-4 w-max animate-marquee">
            
            {/* --- First Set of Logos --- */}
            {/* Inverex */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-4">
                <span className="text-red-600 font-black italic tracking-tighter text-xl">INVEREX</span>
              </div>
            </div>
            {/* Pylontech */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[220px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-2 py-1 overflow-visible">
                <img src="/images/pylontech-logo.png" alt="Pylontech" className="h-full w-auto object-contain max-h-[60px] transform scale-[2.5] origin-center" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.2)' }} />
              </div>
            </div>
            {/* Solis */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-2 py-1">
                <img src="/images/solis-logo.png" alt="Solis" className="h-full w-auto object-contain max-h-[55px] transform scale-150" />
              </div>
            </div>
            {/* Jinko Solar */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-4 py-2">
                <img src="/images/jinko-logo.png" alt="Jinko Solar" className="h-full w-auto object-contain max-h-[35px]" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.5) brightness(1.1)' }} />
              </div>
            </div>
            {/* Narada */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-6 py-3">
                <img src="/images/narada-logo.png" alt="Narada" className="h-full w-auto object-contain max-h-[22px]" />
              </div>
            </div>
            {/* Huawei */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-4 py-2">
                <img src="/images/huawei-logo.png" alt="Huawei" className="h-full w-auto object-contain max-h-[35px]" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.5) brightness(1.1)' }} />
              </div>
            </div>
            {/* Dyness */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-4">
                <span className="text-green-500 font-light tracking-widest text-lg">DY<span className="text-blue-500 font-bold">NESS</span></span>
              </div>
            </div>
            
            {/* --- Second Set of Logos for Seamless Looping --- */}
            {/* Inverex */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-4">
                <span className="text-red-600 font-black italic tracking-tighter text-xl">INVEREX</span>
              </div>
            </div>
            {/* Pylontech */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[220px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-2 py-1 overflow-visible">
                <img src="/images/pylontech-logo.png" alt="Pylontech" className="h-full w-auto object-contain max-h-[60px] transform scale-[2.5] origin-center" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.2)' }} />
              </div>
            </div>
            {/* Solis */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-2 py-1">
                <img src="/images/solis-logo.png" alt="Solis" className="h-full w-auto object-contain max-h-[55px] transform scale-150" />
              </div>
            </div>
            {/* Jinko Solar */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-4 py-2">
                <img src="/images/jinko-logo.png" alt="Jinko Solar" className="h-full w-auto object-contain max-h-[35px]" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.5) brightness(1.1)' }} />
              </div>
            </div>
            {/* Narada */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-6 py-3">
                <img src="/images/narada-logo.png" alt="Narada" className="h-full w-auto object-contain max-h-[22px]" />
              </div>
            </div>
            {/* Huawei */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-4 py-2">
                <img src="/images/huawei-logo.png" alt="Huawei" className="h-full w-auto object-contain max-h-[35px]" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.5) brightness(1.1)' }} />
              </div>
            </div>
            {/* Dyness */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-4">
                <span className="text-green-500 font-light tracking-widest text-lg">DY<span className="text-blue-500 font-bold">NESS</span></span>
              </div>
            </div>
            
          </div>
        </div>
      </section>










    </div>
  );
}
