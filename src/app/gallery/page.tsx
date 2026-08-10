"use client";

import { useState } from 'react';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  category: 'commercial' | 'residential' | 'utility' | 'storage' | 'ev';
  categoryLabel: string;
  capacity: string;
  location: string;
  completionYear: string;
  image: string;
  fallbackImage: string;
  galleryImages: string[];
  components: string[];
  annualGen: string;
  co2Saved: string;
  roiPeriod: string;
  description: string;
  challenge: string;
  solution: string;
  clientName: string;
  clientRole: string;
  testimonial: string;
}

const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Faisalabad Mega Textile Industrial Park Solar Plant',
    category: 'commercial',
    categoryLabel: 'Commercial & Industrial',
    capacity: '2.5 MWp',
    location: 'Faisalabad Industrial Estate, Punjab',
    completionYear: '2025',
    image: '/gallery_textile_solar_1786337105438.png',
    fallbackImage: '/banner-main.png',
    galleryImages: [
      '/gallery_textile_solar_1786337105438.png',
      '/banner-main.png',
      '/banner-main-2.png'
    ],
    components: ['Solis 110K-5G Inverters', 'Jinko Tiger Pro 550W N-Type', 'Soltronic Custom Heavy Duty Rail Mounts'],
    annualGen: '3.65 GWh / year',
    co2Saved: '2,920 Tons / year',
    roiPeriod: '2.8 Years',
    description: 'A massive 2.5 MWp rooftop solar installation powering one of Pakistan’s largest textile manufacturing hubs with zero grid downtime.',
    challenge: 'High daytime energy consumption with frequent grid load shedding caused production line halts costing thousands of dollars per hour.',
    solution: 'Designed and deployed an integrated high-efficiency N-type solar array synchronized with zero-export grid control and high-voltage Solis string inverters.',
    clientName: 'Tariq Mehmood',
    clientRole: 'VP Operations, Al-Karam Fabrics Unit 4',
    testimonial: 'Soltronic Energy delivered flawless engineering execution. Our electricity tariff overhead dropped by 68% in the first quarter alone.'
  },
  {
    id: 'proj-2',
    title: 'Lahore Executive Green Villa Hybrid Energy System',
    category: 'residential',
    categoryLabel: 'Residential Rooftop',
    capacity: '35 kWp + 60 kWh BESS',
    location: 'DHA Phase 6, Lahore',
    completionYear: '2025',
    image: '/gallery_residence_solar_1786337122242.png',
    fallbackImage: '/clean_energy_home.png',
    galleryImages: [
      '/gallery_residence_solar_1786337122242.png',
      '/clean_energy_home.png',
      '/banner-side-1.png'
    ],
    components: ['Inverex Nitrox 30kW Hybrid Inverter', 'Pylontech Force H2 LiFePO4 Battery', 'Canadian Solar 580W Bifacial'],
    annualGen: '52,000 kWh / year',
    co2Saved: '41.6 Tons / year',
    roiPeriod: '3.2 Years',
    description: 'Ultra-luxurious residential smart energy installation featuring continuous 24/7 backup, smart HVAC load management, and sleek aesthetic roof integration.',
    challenge: 'Customer required complete energy independence for high-power central air conditioning without diesel generator noise or fumes.',
    solution: 'Engineered a high-voltage hybrid storage architecture backed by Pylontech lithium batteries that smoothly transitions in under 10ms during outages.',
    clientName: 'Dr. Shahzad Malik',
    clientRole: 'Homeowner',
    testimonial: 'We havent noticed a single power outage in 8 months. Soltronic’s mobile monitoring app gives us real-time peace of mind.'
  },
  {
    id: 'proj-3',
    title: 'Multan Agricultural Solar Irrigation & Cold Storage',
    category: 'utility',
    categoryLabel: 'Solar Farms & Agri',
    capacity: '1.2 MW Grid-Tied Solar',
    location: 'Multan Region, Punjab',
    completionYear: '2024',
    image: '/gallery_agri_solar_1786337138449.png',
    fallbackImage: '/banner-main-3.png',
    galleryImages: [
      '/gallery_agri_solar_1786337138449.png',
      '/banner-main-3.png',
      '/below-ad.jpeg'
    ],
    components: ['Huawei SUN2000-100KTL', 'Longi Hi-MO 6 Panels', 'Auto-Tracking Ground Mount System'],
    annualGen: '1.82 GWh / year',
    co2Saved: '1,450 Tons / year',
    roiPeriod: '2.5 Years',
    description: 'High-impact agrivoltaic project supporting high-capacity tubewells and temperature-controlled fruit storage facilities across 15 acres.',
    challenge: 'Remote location with weak grid infrastructure and erratic voltage fluctuations causing frequent equipment burnout.',
    solution: 'Implemented dynamic voltage stabilization with active power filtering and robust heavy-duty ground-mounted solar arrays.',
    clientName: 'Chaudhry Wasim Akram',
    clientRole: 'Director, Green Valley Agri Farms',
    testimonial: 'Our diesel consumption for irrigation fell to practically zero. Soltronic transformed our entire farm economics.'
  },
  {
    id: 'proj-4',
    title: 'Karachi Port Logistics Center Microgrid & BESS',
    category: 'storage',
    categoryLabel: 'Battery Energy Storage',
    capacity: '800 kW / 1.5 MWh BESS',
    location: 'Port Qasim, Karachi',
    completionYear: '2025',
    image: '/gallery_bess_container_1786337154136.png',
    fallbackImage: '/banner-main-2.png',
    galleryImages: [
      '/gallery_bess_container_1786337154136.png',
      '/banner-main-2.png',
      '/right-side-ad1.jpeg'
    ],
    components: ['Sungrow Industrial BESS Container', 'Solis High Efficiency Inverters', 'Fire Suppression Smart Rack System'],
    annualGen: '1.25 GWh / year',
    co2Saved: '1,000 Tons / year',
    roiPeriod: '3.5 Years',
    description: 'Containerized utility-grade battery energy storage system ensuring zero-interruption power for cold-chain shipping logistics.',
    challenge: 'Unpredictable port power grids threatening temperature-sensitive perishable cargo worth millions in export value.',
    solution: 'Turnkey deployment of a 1.5 MWh liquid-cooled lithium battery container with instantaneous automatic grid failover.',
    clientName: 'Kamran Siddiqui',
    clientRole: 'General Manager, Qasim Logistics Hub',
    testimonial: 'The absolute gold standard in industrial energy reliability. Soltronic engineered a world-class microgrid solution.'
  },
  {
    id: 'proj-5',
    title: 'Islamabad Corporate Tower Ultrafast EV Charging Hub',
    category: 'ev',
    categoryLabel: 'EV Infrastructure',
    capacity: '360 kW DC Fast Chargers',
    location: 'Blue Area, Islamabad',
    completionYear: '2025',
    image: '/gallery_ev_charging_1786337173828.png',
    fallbackImage: '/right-side-ad1.jpeg',
    galleryImages: [
      '/gallery_ev_charging_1786337173828.png',
      '/right-side-ad1.jpeg',
      '/banner-main.png'
    ],
    components: ['Soltronic 180kW Dual-Gun DC Fast Chargers', 'Solar Canopy Rooftop 120kWp', 'OCPP 1.6J Cloud Billing Hub'],
    annualGen: '180,000 kWh / year',
    co2Saved: '144 Tons / year',
    roiPeriod: '3.0 Years',
    description: 'Premier urban electric vehicle charging station powered by clean rooftop solar energy, capable of charging 6 vehicles simultaneously.',
    challenge: 'High peak demand charges from utility provider when multiple EV fleet vehicles charged at the same time.',
    solution: 'Paired solar canopy generation with smart peak-shaving software to buffer charging loads dynamically.',
    clientName: 'Zubair Farooq',
    clientRole: 'Facility Director, Summit Towers',
    testimonial: 'Clean, fast, and remarkably reliable. Soltronic built Islamabad’s most futuristic solar-assisted charging destination.'
  },
  {
    id: 'proj-6',
    title: 'Sialkot Surgical Goods Export Facility Rooftop',
    category: 'commercial',
    categoryLabel: 'Commercial & Industrial',
    capacity: '850 kWp Solar',
    location: 'Sialkot Export Zone, Punjab',
    completionYear: '2024',
    image: '/gallery_textile_solar_1786337105438.png',
    fallbackImage: '/banner-main.png',
    galleryImages: [
      '/gallery_textile_solar_1786337105438.png',
      '/banner-main.png'
    ],
    components: ['Inverex Aeromax 100K Inverters', 'Risen 560W Bifacial Modules', 'Zero Export Smart Metering'],
    annualGen: '1.24 GWh / year',
    co2Saved: '992 Tons / year',
    roiPeriod: '2.6 Years',
    description: 'Green manufacturing certification milestone project providing 100% solar energy coverage for precision surgical instrument crafting.',
    challenge: 'Strict international European compliance requirements for green energy usage across supply chain exports.',
    solution: 'Designed and installed an ISO-compliant rooftop solar matrix with real-time carbon audit dashboards.',
    clientName: 'Usman Dar',
    clientRole: 'CEO, Precision Surgical Ltd.',
    testimonial: 'Soltronic helped us secure top EU green supply chain certifications. Outstanding craftsmanship and support.'
  }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTabImageIndex, setActiveTabImageIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercial & Industrial' },
    { id: 'residential', label: 'Residential Rooftops' },
    { id: 'utility', label: 'Solar Farms & Agri' },
    { id: 'storage', label: 'Battery Storage (BESS)' },
    { id: 'ev', label: 'EV Infrastructure' },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.capacity.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.components.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-20">
      
      {/* Dynamic Antigravity Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c4a16] via-[#107022] to-[#0a3510] text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        
        {/* Decorative Grid Lines & Glowing Orbs */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Soltronic Installation Portfolio
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200">Clean Energy</span> Realities
              </h1>
              <p className="text-lg text-emerald-100/90 leading-relaxed">
                Explore our landmark solar energy installations across Pakistan. From MW-scale industrial rooftops to ultra-reliable hybrid residential estates and utility battery microgrids.
              </p>
            </div>

            {/* Spatial Floating Stats Card */}
            <div className="w-full lg:w-auto grid grid-cols-2 gap-4 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 text-center">
                <span className="block text-3xl sm:text-4xl font-black text-amber-300">650+</span>
                <span className="text-xs text-emerald-100 font-medium uppercase tracking-wider mt-1 block">Projects Built</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 text-center">
                <span className="block text-3xl sm:text-4xl font-black text-emerald-300">85+ MW</span>
                <span className="text-xs text-emerald-100 font-medium uppercase tracking-wider mt-1 block">Installed Power</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 text-center">
                <span className="block text-3xl sm:text-4xl font-black text-emerald-300">140k T</span>
                <span className="text-xs text-emerald-100 font-medium uppercase tracking-wider mt-1 block">CO₂ Offset</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 text-center">
                <span className="block text-3xl sm:text-4xl font-black text-amber-300">99.8%</span>
                <span className="text-xs text-emerald-100 font-medium uppercase tracking-wider mt-1 block">Grid Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Controls & Filters Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white/90 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-4 sm:p-6 shadow-xl space-y-5">
          
          {/* Top Row: Search & View Toggles */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-96">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
                search
              </span>
              <input
                type="text"
                placeholder="Search by city, capacity, component (e.g. Solis, Lahore)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-gray-50/80 border border-gray-200 rounded-2xl text-sm outline-none focus:border-[#107022] focus:ring-2 focus:ring-[#107022]/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Results Count & View Mode Switcher */}
            <div className="flex items-center justify-between w-full sm:w-auto gap-4">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Showing <strong className="text-[#107022] font-bold text-sm">{filteredProjects.length}</strong> Projects
              </span>
              
              <div className="flex items-center bg-gray-100 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    viewMode === 'grid'
                      ? 'bg-white text-[#107022] shadow-sm font-bold'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  <span className="material-symbols-outlined text-lg">grid_view</span>
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('compact')}
                  className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    viewMode === 'compact'
                      ? 'bg-white text-[#107022] shadow-sm font-bold'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  <span className="material-symbols-outlined text-lg">view_list</span>
                  Compact
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#107022] text-white border-[#107022] shadow-md shadow-[#107022]/20 scale-105'
                      : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Project Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
            <span className="material-symbols-outlined text-5xl text-gray-300 mb-3">search_off</span>
            <h3 className="text-xl font-bold text-gray-800 mb-1">No Projects Found</h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
              We couldn’t find any solar installations matching "{searchQuery}". Try selecting another category or resetting filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-[#107022] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:bg-[#0c591b] transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  setActiveTabImageIndex(0);
                }}
                className="group cursor-pointer bg-white/90 backdrop-blur-md rounded-3xl border border-gray-200/80 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
              >
                {/* Image Container with Capacity Badge */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-900 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== project.fallbackImage) {
                        target.src = project.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-95 group-hover:opacity-100"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                  {/* Category Pill Top Left */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#107022] px-3 py-1 rounded-full text-xs font-bold shadow-md uppercase tracking-wider">
                    {project.categoryLabel}
                  </div>

                  {/* Capacity Pill Top Right */}
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-black shadow-md">
                    ⚡ {project.capacity}
                  </div>

                  {/* Location & Year Bottom Left */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs z-10">
                    <span className="flex items-center gap-1 font-medium text-emerald-200">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      {project.location}
                    </span>
                    <span className="bg-black/40 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-mono text-gray-300">
                      {project.completionYear}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 leading-snug group-hover:text-[#107022] transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Highlights Metrics Pill */}
                  <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center">
                    <div>
                      <span className="text-[10px] font-semibold text-gray-400 uppercase block">Annual Yield</span>
                      <span className="text-xs font-bold text-slate-800">{project.annualGen}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-gray-400 uppercase block">CO₂ Saved</span>
                      <span className="text-xs font-bold text-emerald-600">{project.co2Saved}</span>
                    </div>
                  </div>

                  {/* Component Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.components.slice(0, 2).map((comp, idx) => (
                      <span
                        key={idx}
                        className="bg-emerald-50 text-[#107022] border border-emerald-100 text-[11px] font-semibold px-2.5 py-0.5 rounded-lg"
                      >
                        {comp}
                      </span>
                    ))}
                    {project.components.length > 2 && (
                      <span className="bg-gray-100 text-gray-600 text-[11px] font-semibold px-2 py-0.5 rounded-lg">
                        +{project.components.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#107022] group-hover:text-orange-500 transition-colors">
                    <span>View Technical Breakdown</span>
                    <span className="material-symbols-outlined text-base transform group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Compact View Layout */
          <div className="space-y-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  setActiveTabImageIndex(0);
                }}
                className="group cursor-pointer bg-white backdrop-blur-md rounded-2xl border border-gray-200 p-4 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row items-center gap-6"
              >
                <div className="relative h-32 w-full md:w-48 rounded-xl overflow-hidden shrink-0 bg-slate-900 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== project.fallbackImage) {
                        target.src = project.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-1 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#107022] bg-emerald-50 px-2.5 py-0.5 rounded-md">
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-md">
                      ⚡ {project.capacity}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#107022] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-1">{project.description}</p>
                </div>
                <div className="flex items-center gap-6 text-right shrink-0">
                  <div>
                    <span className="text-[10px] text-gray-400 block font-semibold">LOCATION</span>
                    <span className="text-xs font-bold text-slate-800">{project.location}</span>
                  </div>
                  <button className="bg-[#107022] hover:bg-orange-500 text-white p-2.5 rounded-xl transition-colors">
                    <span className="material-symbols-outlined text-base">visibility</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Environmental & Financial Impact Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-700">
          <div className="max-w-xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Why Soltronic Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Ready to Upgrade Your Property to <span className="text-emerald-400">Zero-Outage Solar</span>?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every project in our portfolio is engineered using premium Tier-1 components, precise CAD design, zero-export compliance, and dedicated lifetime maintenance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href="/calculator"
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-7 py-3.5 rounded-2xl text-sm transition-all shadow-lg text-center"
            >
              Calculate Solar ROI →
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-3.5 rounded-2xl text-sm transition-all text-center"
            >
              Consult an Engineer
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Modal Lightbox for Project Specs & Gallery */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 relative text-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 bg-slate-900/70 hover:bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
            >
              ✕
            </button>

            {/* Main Showcase Image & Thumbnails */}
            <div className="relative h-72 sm:h-96 w-full bg-slate-950 flex items-center justify-center">
              <img
                src={selectedProject.galleryImages[activeTabImageIndex] || selectedProject.fallbackImage}
                alt={selectedProject.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = selectedProject.fallbackImage;
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

              {/* Title & Location Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                  {selectedProject.categoryLabel} • {selectedProject.capacity}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black leading-tight">
                  {selectedProject.title}
                </h2>
                <p className="text-xs text-emerald-300 font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  {selectedProject.location} (Commissioned {selectedProject.completionYear})
                </p>
              </div>

              {/* Image Carousel Thumbnails */}
              {selectedProject.galleryImages.length > 1 && (
                <div className="absolute top-4 left-4 flex gap-2">
                  {selectedProject.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTabImageIndex(idx)}
                      className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                        activeTabImageIndex === idx ? 'border-amber-400 scale-105' : 'border-white/50 opacity-70'
                      }`}
                    >
                      <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Detailed Body Section */}
            <div className="p-6 sm:p-8 space-y-8">
              
              {/* Technical Specifications Grid */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#107022] mb-3">
                  Technical Specifications & Metrics
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl text-center">
                    <span className="text-[10px] font-bold text-gray-400 uppercase block">System Capacity</span>
                    <span className="text-lg font-black text-slate-900">{selectedProject.capacity}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl text-center">
                    <span className="text-[10px] font-bold text-gray-400 uppercase block">Annual Output</span>
                    <span className="text-lg font-black text-[#107022]">{selectedProject.annualGen}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl text-center">
                    <span className="text-[10px] font-bold text-gray-400 uppercase block">CO₂ Abated</span>
                    <span className="text-lg font-black text-emerald-600">{selectedProject.co2Saved}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl text-center">
                    <span className="text-[10px] font-bold text-gray-400 uppercase block">Estimated Payback</span>
                    <span className="text-lg font-black text-orange-600">{selectedProject.roiPeriod}</span>
                  </div>
                </div>
              </div>

              {/* Challenge vs Solution Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-amber-50/60 border border-amber-200/80 p-5 rounded-2xl space-y-2">
                  <h4 className="text-sm font-bold text-amber-900 flex items-center gap-2">
                    <span className="material-symbols-outlined text-amber-600">warning</span>
                    Project Challenge
                  </h4>
                  <p className="text-xs text-amber-950/80 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>
                <div className="bg-emerald-50/60 border border-emerald-200/80 p-5 rounded-2xl space-y-2">
                  <h4 className="text-sm font-bold text-[#107022] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#107022]">verified</span>
                    Soltronic Engineering Solution
                  </h4>
                  <p className="text-xs text-emerald-950/80 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Installed Components List */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-3">
                  Tier-1 Hardware Components Installed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.components.map((comp, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold px-3.5 py-1.5 rounded-xl flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#107022]"></span>
                      {comp}
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Endorsement Quote */}
              {selectedProject.testimonial && (
                <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-3">
                  <span className="material-symbols-outlined text-3xl text-amber-400">format_quote</span>
                  <p className="text-sm italic text-slate-200 leading-relaxed">
                    "{selectedProject.testimonial}"
                  </p>
                  <div>
                    <span className="block text-xs font-bold text-white">{selectedProject.clientName}</span>
                    <span className="text-[11px] text-emerald-400">{selectedProject.clientRole}</span>
                  </div>
                </div>
              )}

              {/* Footer Modal CTA */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-500 font-medium">
                  Want a similar customized solar design for your business or home?
                </span>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto bg-[#107022] hover:bg-orange-500 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors shadow-md text-center"
                >
                  Request Technical Proposal →
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
