"use client";
import Link from 'next/link';
import ProductBanner from '@/components/ProductBanner';
import { useState, useEffect } from 'react';

const productsData = [
  {
    category: "Solar Panels",
    title: "Trina Solar 505W N-type i-TOPCon Ultra Monocrystalline",
    vendor: "By Soltronic Energy",
    description: "TRN-TSM-505NEG10R.28Z/30/21 - High efficiency N-type i-TOPCon dual glass monocrystalline solar panel.",
    power: "505W",
    efficiency: "21.5%",
    warranty: "12 Yrs",
    image: "/product-main-image-1.png"
  },
  {
    category: "Solar Panels",
    title: "Canadian Solar CS6.2-54TM 510W N-Type TOPCon Monofacial",
    vendor: "By Soltronic Energy",
    description: "CSI-CS6.2-54TM-510/30/21 - N-Type TOPCon Monofacial solar panel with 108 half-cells.",
    power: "510W",
    efficiency: "22.0%",
    warranty: "12 Yrs",
    image: "/product-main-image-2.png"
  },
  {
    category: "Solar Panels",
    title: "Risen RSM132-11 630W N-type TOPCon Bifacial",
    vendor: "By Soltronic Energy",
    description: "RIS-RSM132-11-630BNDG/30/21 - High power N-type TOPCon Bifacial solar panel.",
    power: "630W",
    efficiency: "22.5%",
    warranty: "15 Yrs",
    image: "/product-main-image-3.png"
  },
  {
    category: "Solar Panels",
    title: "Suntech Ultra VPro 440W TOPCon N-type Bifacial",
    vendor: "By Soltronic Energy",
    description: "STE-STP440S-H48-Nth+/21/30 - Ultra VPro series TOPCon N-type Bifacial Double Glass solar module.",
    power: "440W",
    efficiency: "21.8%",
    warranty: "12 Yrs",
    image: "/product-main-image-4.png"
  },
  {
    category: "Solar Panels",
    title: "Canadian CS6.2-66TB 620W TOPCon 132 half-cell",
    vendor: "By Soltronic Energy",
    description: "CSI-CS6.2-66TB-620/30/21 - High capacity TOPCon solar panel featuring 132 half-cells.",
    power: "620W",
    efficiency: "22.3%",
    warranty: "12 Yrs",
    image: "/product-main-image-5.png"
  },
  {
    category: "Solar Panels",
    title: "TW Solar 465W N-Type Mono 96 Halfcells Bifacial",
    vendor: "By Soltronic Energy",
    description: "TW-TWMNH-48HD465/30/21 - N-Type Mono Bifacial solar panel with black frame.",
    power: "465W",
    efficiency: "21.6%",
    warranty: "15 Yrs",
    image: "/product-main-image-6.png"
  },
  {
    category: "Solar Panels",
    title: "Trina Solar 475W N-type i-TOPCon Ultra Monocrystalline",
    vendor: "By Soltronic Energy",
    description: "TRN-TSM-475NEG9RH.28/30/21 - Compact and powerful N-type i-TOPCon dual glass monocrystalline.",
    power: "475W",
    efficiency: "22.1%",
    warranty: "12 Yrs",
    image: "/product-main-image-7.png"
  },
  {
    category: "Solar Panels",
    title: "Risen RSM144-9 595W N-type TOPCon Bifacial",
    vendor: "By Soltronic Energy",
    description: "RIS-RSM144-9-595BNDG/30/21 - Large format N-type TOPCon Bifacial solar panel.",
    power: "595W",
    efficiency: "22.4%",
    warranty: "15 Yrs",
    image: "/product-main-image-1.png"
  }
];

const featuredProductsData = [
  {
    category: "SOLAR PANELS",
    title: "Soltronic Mono 550W",
    vendor: "By SOLTRONIC",
    description: "High efficiency monocrystalline solar panel for residential and commercial use.",
    features: [
      { value: "550W", label: "POWER" },
      { value: "21.3%", label: "EFFICIENCY" },
      { value: "25 Yrs", label: "WARRANTY" }
    ],
    image: "/product-main-image-2.png"
  },
  {
    category: "HYBRID INVERTERS",
    title: "Soltronic HES 6kW",
    vendor: "By SOLTRONIC",
    description: "Reliable and efficient hybrid inverter for residential solar systems.",
    features: [
      { value: "6kW", label: "POWER" },
      { value: "97.6%", label: "EFFICIENCY" },
      { value: "5 Yrs", label: "WARRANTY" }
    ],
    image: "/product-main-image-3.png"
  },
  {
    category: "LITHIUM BATTERIES",
    title: "Soltronic Power 10kWh",
    vendor: "By SOLTRONIC",
    description: "Long-lasting lithium battery storage for continuous power supply.",
    features: [
      { value: "10kWh", label: "CAPACITY" },
      { value: ">95%", label: "DOD" },
      { value: "10 Yrs", label: "WARRANTY" }
    ],
    image: "/product-main-image-4.png"
  },
  {
    category: "EV CHARGERS",
    title: "Soltronic EV Pro 7kW",
    vendor: "By SOLTRONIC",
    description: "Fast and safe EV charger for home and commercial parking.",
    features: [
      { value: "7kW", label: "POWER" },
      { value: "Type 2", label: "CONNECTOR" },
      { value: "3 Yrs", label: "WARRANTY" }
    ],
    image: "/product-main-image-5.png"
  }
];

export default function Products() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [offering, setOffering] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleResetFilters = () => {
    setSearchQuery('');
    setOffering('');
    setCategory('');
    setBrand('');
    setSortBy('');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 text-slate-700">
      {/* Hero Section */}
      <ProductBanner />

      {/* Category Icons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 overflow-x-auto pb-4">
        <div className="flex justify-between items-end min-w-max lg:min-w-0 gap-6 lg:gap-2 px-2">
          {[
            { name: 'Promotions', icon: '/icons/promotions.png' },
            { name: 'Panels', icon: '/icons/panels.png' },
            { name: 'Inverters', icon: '/icons/inverters.png' },
            { name: 'Storage', icon: '/icons/storage.png' },
            { name: 'Mountings', icon: '/icons/mountings.png' },
            { name: 'EV Chargers', icon: '/icons/ev-chargers.png' },
            { name: 'Heat Pump', icon: '/icons/heat-pump.png' },
            { name: 'Electricals', icon: '/icons/electrincals.png' },
          ].map((category) => (
            <Link key={category.name} href={`/products?category=${category.name.toLowerCase()}`} className="flex flex-col items-center gap-4 group min-w-[100px]">
              <div className="h-16 md:h-20 flex items-center justify-center transition-transform group-hover:-translate-y-1">
                <img src={category.icon} alt={category.name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
              </div>
              <span className="text-sm md:text-base text-neutral-800 font-medium group-hover:text-[#107022] transition-colors text-center">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative">
        <div className={`flex ${isScrolled ? 'flex-col md:flex-row items-start' : 'flex-col'} gap-8 relative transition-all duration-300`}>
            
            <aside 
              className={`bg-white text-gray-800 rounded-[2rem] border border-gray-200 shadow-sm font-sans transition-all duration-300 z-10 flex-shrink-0 ${
                isScrolled 
                  ? 'w-full md:w-80 h-fit p-6 md:p-8 flex flex-col gap-6 sticky top-4' 
                  : 'w-full p-6 flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-6'
              }`}
            >
              {/* Header and Top Controls */}
              <div className={`flex ${isScrolled ? 'flex-col gap-4' : 'flex-col sm:flex-row xl:flex-col gap-4 sm:items-center xl:items-start justify-between min-w-max'}`}>
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'wght' 300" }}>tune</span>
                  <h3 className="font-black tracking-[0.2em] text-xs uppercase pt-1 text-dark">Catalog Controls</h3>
                </div>
                
                <div className="flex items-center justify-end gap-4">
                  <button onClick={handleResetFilters} className="flex items-center gap-2 text-[11px] font-bold text-gray-500 uppercase tracking-widest hover:text-gray-800 transition-colors pt-1">
                    <span className="material-symbols-outlined text-[16px] font-bold">refresh</span> {isScrolled ? "Reset Filters" : "Reset"}
                  </button>
                </div>
              </div>
              
              {isScrolled ? <hr className="border-gray-200 my-2" /> : <div className="hidden xl:block w-px h-12 bg-gray-200 self-center"></div>}
              
              {/* Search and Dropdowns Container */}
              <div className={`flex ${isScrolled ? 'flex-col gap-4' : 'flex-col md:flex-row flex-wrap lg:flex-nowrap gap-4 flex-1'}`}>
                {/* Search */}
                <div className={`relative ${isScrolled ? 'w-full' : 'w-full md:w-48 lg:flex-1'}`}>
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-gray-400"
                  />
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" style={{ fontVariationSettings: "'wght' 300" }}>search</span>
                </div>

                {/* Dropdowns */}
                <div className="relative flex-1 min-w-[140px]">
                  <select value={offering} onChange={(e) => setOffering(e.target.value)} className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-2xl py-4 pl-5 pr-10 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-medium cursor-pointer">
                    <option value="">Offerings</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="agricultural">Agricultural</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" style={{ fontVariationSettings: "'wght' 300" }}>expand_more</span>
                </div>
                <div className="relative flex-1 min-w-[140px]">
                  <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-2xl py-4 pl-5 pr-10 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-medium cursor-pointer">
                    <option value="">Categories</option>
                    <option value="panels">Panels</option>
                    <option value="inverters">Inverters</option>
                    <option value="batteries">Batteries</option>
                    <option value="ev-chargers">EV Chargers</option>
                    <option value="accessories">Accessories</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" style={{ fontVariationSettings: "'wght' 300" }}>expand_more</span>
                </div>
                <div className="relative flex-1 min-w-[140px]">
                  <select value={brand} onChange={(e) => setBrand(e.target.value)} className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-2xl py-4 pl-5 pr-10 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-medium cursor-pointer">
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
                <div className="relative flex-1 min-w-[140px]">
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-2xl py-4 pl-5 pr-10 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-medium cursor-pointer">
                    <option value="">Sort by</option>
                    <option value="new">New</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" style={{ fontVariationSettings: "'wght' 300" }}>expand_more</span>
                </div>
              </div>
              
              {/* Apply Button */}
              <button className={`${isScrolled ? 'w-full mt-4' : 'w-full xl:w-auto px-8'} bg-primary text-white text-[13px] font-bold uppercase tracking-[0.2em] py-4 rounded-[1.5rem] hover:bg-primary/90 transition-colors shadow-sm transform hover:-translate-y-0.5 min-w-max`}>
                Apply
              </button>
            </aside>
            
            <main className="flex-1 w-full min-w-0">

              
              {/* BEGIN: Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productsData.map((product, index) => (
                  <div key={index} className="bg-white flex flex-col group relative border border-gray-100 shadow-sm rounded-2xl overflow-hidden transition-all duration-300 hover:border-orange-200 hover:shadow-[0_0_25px_rgba(254,215,170,0.5)]">
                    
                    {/* Image Section */}
                    <div className="h-56 bg-[#f4f7fb] flex justify-center items-center p-6 overflow-hidden">
                      <div className="bg-white w-full h-full rounded-xl flex justify-center items-center p-2 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                        <img alt={product.title} className="max-h-full object-contain transition-transform duration-500 group-hover:scale-110 mix-blend-multiply" src={product.image} />
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex-1 flex flex-col p-5">
                      <span className="text-[10px] font-bold text-red-500 tracking-wider uppercase mb-2">{product.category}</span>
                      
                      <h3 className="text-[15px] font-bold text-[#0f172a] leading-snug mb-1 line-clamp-2">
                        {product.title}
                      </h3>
                      
                      <p className="text-xs text-gray-400 mb-3 font-medium">{product.vendor}</p>
                      
                      <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                        {product.description}
                      </p>
              
                      <div className="grid grid-cols-3 gap-2 mb-5 mt-auto">
                        <div className="bg-[#f8fafc] border border-gray-100 rounded-lg p-2 text-center flex flex-col justify-center">
                          <span className="text-[13px] font-bold text-[#0f172a] leading-tight">{product.power}</span>
                          <span className="text-[9px] text-gray-400 uppercase font-semibold mt-1">Power</span>
                        </div>
                        <div className="bg-[#f8fafc] border border-gray-100 rounded-lg p-2 text-center flex flex-col justify-center">
                          <span className="text-[13px] font-bold text-[#0f172a] leading-tight">{product.efficiency}</span>
                          <span className="text-[9px] text-gray-400 uppercase font-semibold mt-1">Efficiency</span>
                        </div>
                        <div className="bg-[#f8fafc] border border-gray-100 rounded-lg p-2 text-center flex flex-col justify-center">
                          <span className="text-[13px] font-bold text-[#0f172a] leading-tight">{product.warranty}</span>
                          <span className="text-[9px] text-gray-400 uppercase font-semibold mt-1">Warranty</span>
                        </div>
                      </div>
                      
                      <div>
                        <button className="w-full bg-[#ef4444] hover:bg-[#dc2626] text-white py-3 px-4 rounded-xl text-[14px] transition-all duration-300 text-center font-bold shadow-[0_4px_14px_rgba(239,68,68,0.4)] hover:shadow-[0_6px_20px_rgba(239,68,68,0.6)] flex items-center justify-center gap-2">
                          Get Quote <span className="text-lg leading-none">&rarr;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* END: Product Grid */}
              
              {/* Pagination */}
              <div className="mt-10 flex justify-center">
                <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <Link href="#" className="relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                    <span className="sr-only">Previous</span>
                    <i className="fa-solid fa-chevron-left text-xs"></i>
                  </Link>
                  <Link href="#" aria-current="page" className="z-10 bg-primary/10 border-primary text-primary relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    1
                  </Link>
                  <Link href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-primary hover:text-white transition-colors relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    2
                  </Link>
                  <Link href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-primary hover:text-white transition-colors relative inline-flex items-center px-4 py-2 border text-sm font-medium hidden md:inline-flex">
                    3
                  </Link>
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ...
                  </span>
                  <Link href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-primary hover:text-white transition-colors relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    8
                  </Link>
                  <Link href="#" className="relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                    <span className="sr-only">Next</span>
                    <i className="fa-solid fa-chevron-right text-xs"></i>
                  </Link>
                </nav>
              </div>
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

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-dark">Featured Products</h2>
            <Link className="text-primary font-medium text-sm flex items-center hover:underline" href="#">View All Products <i className="fa-solid fa-arrow-right ml-2 text-xs"></i></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProductsData.map((product, index) => (
              <div key={index} className="bg-white flex flex-col group relative border border-gray-100 shadow-sm rounded-2xl overflow-hidden transition-all duration-300 hover:border-orange-200 hover:shadow-[0_0_25px_rgba(254,215,170,0.5)]">
                
                {/* Image Section */}
                <div className="h-56 bg-[#f4f7fb] flex justify-center items-center p-6 overflow-hidden">
                  <div className="bg-white w-full h-full rounded-xl flex justify-center items-center p-2 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                    <img alt={product.title} className="max-h-full object-contain transition-transform duration-500 group-hover:scale-110 mix-blend-multiply" src={product.image} />
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="flex-1 flex flex-col p-5">
                  <span className="text-[10px] font-bold text-red-500 tracking-wider uppercase mb-2">{product.category}</span>
                  
                  <h3 className="text-[15px] font-bold text-[#0f172a] leading-snug mb-1 line-clamp-2">
                    {product.title}
                  </h3>
                  
                  <p className="text-xs text-gray-400 mb-3 font-medium">{product.vendor}</p>
                  
                  <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                    {product.description}
                  </p>
          
                  <div className="grid grid-cols-3 gap-2 mb-5 mt-auto">
                    {product.features.map((feature, i) => (
                      <div key={i} className="bg-[#f8fafc] border border-gray-100 rounded-lg p-2 text-center flex flex-col justify-center">
                        <span className="text-[13px] font-bold text-[#0f172a] leading-tight">{feature.value}</span>
                        <span className="text-[9px] text-gray-400 uppercase font-semibold mt-1">{feature.label}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <button className="w-full bg-[#ef4444] hover:bg-[#dc2626] text-white py-3 px-4 rounded-xl text-[14px] transition-all duration-300 text-center font-bold shadow-[0_4px_14px_rgba(239,68,68,0.4)] hover:shadow-[0_6px_20px_rgba(239,68,68,0.6)] flex items-center justify-center gap-2">
                      Get Quote <span className="text-lg leading-none">&rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>








    </div>
  );
}
