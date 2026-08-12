"use client";

import React, { useState, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  image: string;
  featured?: boolean;
  trending?: boolean;
  tags: string[];
}

const ARTICLES: Article[] = [
  {
    id: "news-1",
    slug: "nepra-net-metering-update-2026",
    title: "NEPRA Finalizes Updated Net Metering Guidelines 2026: What Solar System Owners Need to Know",
    category: "Industry Policy",
    date: "August 8, 2026",
    readTime: "5 min read",
    author: {
      name: "Engr. Tariq Mehmood",
      role: "Chief Technical Advisor, Soltronic Energy",
      avatar: "/CEO-3.png"
    },
    excerpt: "The National Electric Power Regulatory Authority (NEPRA) has released revised guidelines for grid-connected photovoltaic systems. Learn how the new framework preserves payback periods while improving grid stability.",
    content: [
      "In a major policy update aimed at fostering sustainable energy expansion while preserving grid balance, NEPRA has officially issued the 2026 Net Metering Regulatory Guidelines. The decision comes after extensive consultations with industry leaders, including Soltronic Energy.",
      "Key provisions of the new framework guarantee that existing residential and commercial net-metered consumers maintain their existing buyback contracts for the full duration of their initial terms.",
      "For new applicants, NEPRA has introduced dynamic peak/off-peak export billing along with streamlined 14-day fast-track net metering approvals for certified Tier-1 equipment installations.",
      "Soltronic Energy's engineering team has already updated all our standard on-grid and hybrid inverter configurations to fully comply with NEPRA's mandatory anti-islanding and rapid shutdown standards."
    ],
    keyTakeaways: [
      "Existing net-metering contracts are 100% grandfathered for their original term.",
      "New applications benefit from a simplified 14-day fast-track approval workflow.",
      "Dual-port hybrid smart inverters now receive priority grid connection certification.",
      "Payback periods for 10kW - 50kW residential & commercial systems remain highly attractive at 2.5 to 3.2 years."
    ],
    image: "/gallery_residence_solar_1786337122242.png",
    featured: true,
    trending: true,
    tags: ["NEPRA", "Net Metering", "Policy", "Solar Export", "Grid Compliance"]
  },
  {
    id: "news-2",
    slug: "soltronic-100mw-bess-punjab-milestone",
    title: "Soltronic Energy Commissions Landmark 100MWh Commercial Battery Storage Facility in Punjab",
    category: "Soltronic Milestones",
    date: "August 2, 2026",
    readTime: "4 min read",
    author: {
      name: "Syed Ali Raza",
      role: "Head of Utility Infrastructure",
      avatar: "/QamarMaqsood.png"
    },
    excerpt: "Soltronic has successfully energized one of Pakistan's largest containerized Battery Energy Storage Systems (BESS), ensuring uninterrupted 24/7 power for major industrial clusters.",
    content: [
      "Soltronic Energy is proud to announce the formal commissioning of our flagship 100MWh Utility-Scale Battery Energy Storage System (BESS) located in the industrial belt of Faisalabad, Punjab.",
      "Designed using high-density Lithium Iron Phosphate (LFP) chemistry with advanced liquid cooling, the installation shields industrial manufacturing plants from power dips and grid load-shedding while capturing peak solar production.",
      "This landmark project demonstrates how utility-grade storage eliminates reliance on expensive diesel generators, cutting industrial operational carbon footprints by over 45,000 metric tons annually."
    ],
    keyTakeaways: [
      "100MWh capacity provides 4 hours of continuous peak load support to 12 major industrial units.",
      "Equipped with Soltronic AI-driven EMS for real-time peak shaving and arbitrage.",
      "LFP battery cell architecture certified for 6,000+ deep discharge cycles at 90% DoD.",
      "Reduces regional industrial diesel consumption by 14.5 million liters per year."
    ],
    image: "/gallery_bess_container_1786337154136.png",
    featured: true,
    trending: true,
    tags: ["BESS", "Battery Storage", "Faisalabad", "Industrial Solar", "LFP Batteries"]
  },
  {
    id: "news-3",
    slug: "topcon-n-type-efficiency-breakthrough",
    title: "Understanding N-Type TOPCon & HJT: Why 2026 is the Year of High-Efficiency Solar Panels",
    category: "Tech & Innovation",
    date: "July 26, 2026",
    readTime: "6 min read",
    author: {
      name: "Dr. Ayesha Malik",
      role: "Lead R&D Scientist",
      avatar: "/NasirRashid.png"
    },
    excerpt: "N-Type TOPCon and Heterojunction (HJT) solar panels are replacing traditional P-Type panels. Explore how their superior temperature coefficients yield up to 12% more energy during hot summers.",
    content: [
      "As ambient summer temperatures across Pakistan exceed 45°C, conventional solar panels suffer from power degradation. N-Type TOPCon cell architecture mitigates this loss through superior thermal stability.",
      "Soltronic's latest lineup of 625W to 740W bifacial modules utilizes N-Type TOPCon and HJT cells with temperature coefficients of -0.29%/°C compared to older PERC panels (-0.35%/°C).",
      "Additionally, the bifaciality factor reaching 85% allows the rear side of the panel to harvest reflected sunlight from concrete roofs or bright ground cover, boosting total daily power generation."
    ],
    keyTakeaways: [
      "N-Type panels experience less than 1% degradation in Year 1 compared to 2% for legacy PERC.",
      "Bifacial rear-side gain generates 10% - 25% additional power depending on roof surface albedo.",
      "30-Year linear power warranty guarantees 87.4% output retention after three decades.",
      "High power density reduces mounting structure and cabling costs by up to 15%."
    ],
    image: "/banner-main-2.png",
    featured: false,
    trending: false,
    tags: ["TOPCon", "HJT", "Bifacial Panels", "Solar Tech", "Panel Efficiency"]
  },
  {
    id: "news-4",
    slug: "green-financing-bank-partnerships-2026",
    title: "Soltronic Partners with Leading Banks for Low-Interest Solar Financing Programs",
    category: "Market Analysis",
    date: "July 18, 2026",
    readTime: "3 min read",
    author: {
      name: "Hamza Farooq",
      role: "Corporate Finance Director",
      avatar: "/zaeemmaalik.png"
    },
    excerpt: "Transitioning to solar power has never been more accessible. Soltronic's new Green Energy Loan program offers markup rates as low as 6% with up to 5-year repayment tenures.",
    content: [
      "To eliminate upfront capital barriers for homeowners and SMEs, Soltronic Energy has partnered with top commercial banks to launch the 2026 Soltronic Green Financing Solution.",
      "Customers can now apply directly through Soltronic's online portal for pre-approved loans covering up to 80% of total EPC project cost with minimal documentation and expedited processing times.",
      "By offsetting monthly grid electricity bills against the loan EMI, most commercial clients achieve immediate net-positive cash flow from month one."
    ],
    keyTakeaways: [
      "Up to 80% project financing available for 5kW to 500kW rooftop installations.",
      "Flexible repayment tenures ranging from 12 months up to 5 years.",
      "Fast-track verification process with approval response within 5 business days.",
      "Zero early termination penalties for corporate borrowers."
    ],
    image: "/clean_energy_home.png",
    featured: false,
    trending: false,
    tags: ["Financing", "Green Loans", "Solar ROI", "Banking", "Commercial Solar"]
  },
  {
    id: "news-5",
    slug: "agricultural-solar-pumping-solutions",
    title: "Solar Water Pumping Drives Irrigation Security Across Regional Farming Belts",
    category: "ESG & Sustainability",
    date: "July 05, 2026",
    readTime: "5 min read",
    author: {
      name: "Zubair Hashmi",
      role: "Head of Agri-Solar Solutions",
      avatar: "/waseembhatti.png"
    },
    excerpt: "Replacing diesel tube wells with high-torque Soltronic VFD solar pump controllers empowers farmers with reliable day-time irrigation while drastically cutting crop production overheads.",
    content: [
      "Rising fuel prices have severely impacted agricultural productivity. Soltronic Energy's dedicated Agri-Solar wing has successfully converted over 1,500 diesel tube-wells to solar-powered VFD systems over the past year.",
      "Our IP65-rated solar pump controllers feature automatic MPPT tracking, dry-run protection, and remote GSM monitoring, allowing farmers to control pump speed and schedule irrigation directly from their smartphones.",
      "The initiative has secured over 8,000 acres of farmland against fuel scarcity, boosting crop yields and ensuring food security in regional farming belts."
    ],
    keyTakeaways: [
      "100% elimination of daily diesel expenditures for tube-well operation.",
      "Intelligent MPPT controllers deliver full water flow even during low-light morning hours.",
      "Heavy-duty galvanized mounting structures withstand high agricultural field wind loads.",
      "Integrated IoT telemetry enables remote pump diagnostics and water usage metrics."
    ],
    image: "/gallery_agri_solar_1786337138449.png",
    featured: false,
    trending: false,
    tags: ["Agri Solar", "Solar Pump", "VFD Controllers", "Irrigation", "Sustainability"]
  },
  {
    id: "news-6",
    slug: "ev-charging-infrastructure-expansion",
    title: "Soltronic Deploys Ultra-Fast Commercial EV Chargers Across National Transport Corridors",
    category: "Tech & Innovation",
    date: "June 22, 2026",
    readTime: "4 min read",
    author: {
      name: "Sana Chaudhry",
      role: "Director of Clean Mobility",
      avatar: "/asadurrehman.png"
    },
    excerpt: "Soltronic is accelerating electric vehicle adoption with the rollout of 180kW DC Fast Chargers along major motorways, powered directly by solar-plus-storage canopy stations.",
    content: [
      "Electric vehicle adoption in Pakistan is growing rapidly, requiring robust high-speed charging infrastructure. Soltronic Energy has signed an agreement with major motorway station operators to deploy solar-assisted DC Fast Charging Hubs.",
      "Each charging plaza features 120kW - 180kW dual-gun CCS2 chargers capable of replenishing EV batteries from 10% to 80% in under 25 minutes.",
      "The charging stations are backed by rooftop solar canopies and integrated battery storage to minimize grid strain during peak highway travel hours."
    ],
    keyTakeaways: [
      "180kW High-power DC Fast Chargers with dual CCS2 connectors.",
      "Integrated solar canopy generates green power on-site.",
      "Seamless payment integration via Soltronic Mobile App.",
      "Reduces interstate EV range anxiety across key transport corridors."
    ],
    image: "/gallery_ev_charging_1786337173828.png",
    featured: false,
    trending: false,
    tags: ["EV Charging", "DC Fast Charger", "Clean Mobility", "Solar Canopy", "Infrastructure"]
  },
  {
    id: "news-7",
    slug: "new-import-tariff-impact",
    title: "How Recent Import Tariffs Will Impact Solar Panel Prices in Q4 2026",
    category: "Industry Policy",
    date: "August 10, 2026",
    readTime: "3 min read",
    author: {
      name: "Engr. Tariq Mehmood",
      role: "Chief Technical Advisor, Soltronic Energy",
      avatar: "/CEO-3.png"
    },
    excerpt: "A deep dive into the newly announced tariff structure for imported photovoltaic equipment and how it will affect end-user ROI in the coming months.",
    content: [
      "The Ministry of Energy recently announced revisions to the import tariff structure for Tier-1 solar modules.",
      "While local assembly plants receive incentives, fully imported panels might see a slight price adjustment. Soltronic ensures our supply chain remains insulated from sudden shocks.",
      "We advise commercial clients to lock in their EPC contracts now before the Q4 price hikes take full effect."
    ],
    keyTakeaways: [
      "Import tariffs adjusted to favor local assembly.",
      "Slight increase expected in Q4 for fully imported panels.",
      "Locking in EPC contracts early mitigates pricing risks."
    ],
    image: "/banner-main-2.png",
    featured: false,
    trending: false,
    tags: ["Tariffs", "Import Policy", "Pricing", "Solar Market"]
  },
  {
    id: "news-8",
    slug: "soltronic-reaches-1gw-installed-capacity",
    title: "Soltronic Energy Crosses 1GW of Total Installed Capacity Nationwide",
    category: "Soltronic Milestones",
    date: "August 11, 2026",
    readTime: "2 min read",
    author: {
      name: "Syed Ali Raza",
      role: "Head of Utility Infrastructure",
      avatar: "/QamarMaqsood.png"
    },
    excerpt: "A historic moment for Pakistan's renewable sector as Soltronic successfully surpasses 1 Gigawatt of deployed solar power across residential, commercial, and utility sectors.",
    content: [
      "After five years of aggressive expansion and unwavering commitment to quality, Soltronic Energy has officially crossed the 1GW milestone of installed solar capacity.",
      "This achievement represents millions of tons of CO2 offset and billions of rupees saved in energy costs for our clients.",
      "We thank our dedicated engineering teams, partners, and customers for trusting Soltronic to lead the clean energy transition."
    ],
    keyTakeaways: [
      "1GW total installed capacity reached.",
      "Massive reduction in national carbon footprint.",
      "Reaffirms Soltronic's position as a market leader."
    ],
    image: "/gallery_bess_container_1786337154136.png",
    featured: false,
    trending: true,
    tags: ["1GW", "Milestone", "Clean Energy", "Market Leader"]
  }
];



const CATEGORIES = ["All", "Industry Policy", "Soltronic Milestones", "Tech & Innovation", "Market Analysis", "ESG & Sustainability"];

// Image Component with Fallback to avoid broken images or blank gaps
function SafeImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`bg-gradient-to-br from-[#107022] to-emerald-800 flex flex-col items-center justify-center p-6 text-white text-center ${className || ''}`}>
        <span className="material-symbols-outlined text-4xl mb-2 opacity-80">wb_sunny</span>
        <span className="text-xs font-bold uppercase tracking-wider opacity-90">Soltronic Energy</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={className}
    />
  );
}

export default function NewsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // GSAP Entrance Animations (Safe fade-in without hiding cards initially)
  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(".anim-news-card", 
      { y: 20, opacity: 0.8 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power1.out" }
    );
  }, { scope: containerRef });

  // Filtered Articles
  const featuredList = ARTICLES.filter(a => a.featured);
  const firstFeatured = featuredList[0] || ARTICLES[0];
  const secondFeatured = featuredList.length > 1 ? featuredList[1] : ARTICLES[1];

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      // Don't show featured in the main grid if we are on the default view
      if (selectedCategory === "All" && !searchQuery) {
        if (article.id === firstFeatured.id || article.id === secondFeatured.id) return false;
      }

      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
      const matchesSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, firstFeatured.id, secondFeatured.id]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedEmail) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setSubscribedEmail("");
      }, 4000);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 relative font-sans pb-12" ref={containerRef}>
      
      {/* Top Ticker Bar - Clean Light Green */}
      <div className="bg-[#107022] text-white py-2.5 px-4 text-xs shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-hidden">
          <div className="flex items-center gap-2 font-bold uppercase tracking-wider flex-shrink-0 bg-emerald-800/80 px-2.5 py-1 rounded">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping inline-block" />
            <span className="material-symbols-outlined text-sm">trending_up</span>
            Live Updates
          </div>
          <div className="flex-1 overflow-hidden whitespace-nowrap">
            <div className="animate-marquee font-medium flex items-center">
              <span className="mx-6">☀️ NEPRA Net-Metering Buyback Guaranteed for 7 Years</span>
              <span className="mx-6">⚡ Soltronic 100MWh BESS Commercial Operation Underway</span>
              <span className="mx-6">🌱 Over 140,000 Tons CO2 Offset Nationwide</span>
              <span className="mx-6">🔋 High-Efficiency N-Type TOPCon Panels Now In Stock</span>
              {/* Duplicate set for seamless continuous infinite scroll loop */}
              <span className="mx-6">☀️ NEPRA Net-Metering Buyback Guaranteed for 7 Years</span>
              <span className="mx-6">⚡ Soltronic 100MWh BESS Commercial Operation Underway</span>
              <span className="mx-6">🌱 Over 140,000 Tons CO2 Offset Nationwide</span>
              <span className="mx-6">🔋 High-Efficiency N-Type TOPCon Panels Now In Stock</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-emerald-100 text-[11px] flex-shrink-0">
            <span className="material-symbols-outlined text-xs">schedule</span>
            Updated Today
          </div>
        </div>
      </div>


      {/* Main Content Area */}
      <section className="pt-4 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        


        {/* Featured Stories Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Main Featured Story (Large Size) */}
          {firstFeatured && (
            <div 
              onClick={() => setSelectedArticle(firstFeatured)}
              className="lg:col-span-2 anim-news-card group cursor-pointer bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="h-64 sm:h-80 relative overflow-hidden bg-slate-100 flex-shrink-0">
                <SafeImage src={firstFeatured.image} alt={firstFeatured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 bg-[#107022] text-white text-[10px] font-bold rounded uppercase tracking-wider shadow-sm">Featured Story</span>
                  <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#107022] rounded uppercase tracking-wider border border-slate-200 shadow-sm">{firstFeatured.category}</span>
                </div>
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2 font-medium">
                  <span>{firstFeatured.date}</span>
                  <span className="flex items-center gap-1 text-[#107022] font-semibold"><span className="material-symbols-outlined text-xs">schedule</span>{firstFeatured.readTime}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#107022] transition-colors line-clamp-2 leading-snug">{firstFeatured.title}</h3>
                <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4 flex-1">{firstFeatured.excerpt}</p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-end mt-auto">
                  <span className="text-sm font-bold text-[#107022] group-hover:text-orange-600 flex items-center gap-1 transition-colors">Read Article<span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span></span>
                </div>
              </div>
            </div>
          )}

          {/* Second Featured Story (Normal Size) */}
          {secondFeatured && (
            <div 
              onClick={() => setSelectedArticle(secondFeatured)}
              className="lg:col-span-1 anim-news-card group cursor-pointer bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-64 sm:h-80 relative overflow-hidden bg-slate-100 flex-shrink-0">
                  <SafeImage src={secondFeatured.image} alt={secondFeatured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-[#107022] border border-slate-200 shadow-sm uppercase tracking-wider">
                    {secondFeatured.category}
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2 font-medium">
                    <span>{secondFeatured.date}</span>
                    <span className="flex items-center gap-1 text-[#107022] font-semibold"><span className="material-symbols-outlined text-xs">schedule</span>{secondFeatured.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#107022] transition-colors line-clamp-2 leading-snug">{secondFeatured.title}</h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">{secondFeatured.excerpt}</p>
                </div>
              </div>
              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-end mt-auto">
                <span className="text-xs font-bold text-[#107022] group-hover:text-orange-600 flex items-center gap-1 transition-colors">Read Article<span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">arrow_forward</span></span>
              </div>
            </div>
          )}
        </div>

        {/* Filters & Search Controls */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 mb-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-[#107022] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input 
              type="text"
              placeholder="Search news or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-9 pr-8 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#107022] focus:ring-1 focus:ring-[#107022] transition-all"
            />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-base">
              search
            </span>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="news-grid-container">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
              <span className="material-symbols-outlined text-5xl text-slate-400 mb-2">search_off</span>
              <h3 className="text-base font-bold text-slate-800 mb-1">No articles match your search</h3>
              <p className="text-xs text-slate-500 mb-6">Try clearing your filters or searching for another solar term.</p>
              <button 
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="px-4 py-2 bg-[#107022] text-white text-xs font-bold rounded-xl hover:bg-emerald-800 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="anim-news-card group cursor-pointer bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-48 relative overflow-hidden bg-slate-100">
                      <SafeImage 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-[#107022] border border-slate-200 shadow-sm uppercase tracking-wider">
                        {article.category}
                      </div>
                    </div>

                    <div className="p-5 sm:p-6">
                      <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2 font-medium">
                        <span>{article.date}</span>
                        <span className="flex items-center gap-1 text-[#107022] font-semibold">
                          <span className="material-symbols-outlined text-xs">schedule</span>
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#107022] transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-end">
                    <span className="text-xs font-bold text-[#107022] group-hover:text-orange-600 flex items-center gap-1 transition-colors">
                      Read Article
                      <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>


      {/* Newsletter Signup */}
      <section className="pt-4 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 text-center shadow-md">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#107022] flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-2xl">mail</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Subscribe to Soltronic Energy Briefs
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mb-6">
            Get weekly executive summaries on net metering tariffs, solar panel price trends, and green energy loans directly in your inbox.
          </p>

          {isSubscribed ? (
            <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-[#107022] text-xs font-bold inline-flex items-center gap-2">
              <span className="material-symbols-outlined text-base">check_circle</span>
              Thank you! You are now subscribed to Soltronic Clean Energy Briefings.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                required
                placeholder="Enter your email address..."
                value={subscribedEmail}
                onChange={(e) => setSubscribedEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#107022] transition-all"
              />
              <button 
                type="submit"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#107022] hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                Subscribe
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Article Detail Modal View */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-slate-800">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between z-30">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-emerald-50 text-[#107022] font-bold text-[10px] rounded uppercase tracking-wider border border-emerald-200">
                  {selectedArticle.category}
                </span>
                <span className="text-xs text-slate-500">• {selectedArticle.readTime}</span>
              </div>

              <button 
                onClick={() => setSelectedArticle(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors text-xs font-bold"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="pt-1 pb-4 border-b border-slate-100">
                <p className="text-xs text-slate-500">{selectedArticle.date}</p>
              </div>

              <div className="rounded-2xl overflow-hidden h-60 sm:h-80 relative shadow-inner bg-slate-100">
                <SafeImage 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Key Takeaways */}
              <div className="p-5 bg-emerald-50/70 border border-emerald-200 rounded-2xl">
                <h4 className="text-xs font-bold text-[#107022] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">verified</span>
                  Key Takeaways
                </h4>
                <ul className="space-y-2">
                  {selectedArticle.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                      <span className="text-[#107022] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Paragraphs */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                {selectedArticle.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-[10px] text-slate-600 font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 border-t border-slate-100 px-6 py-4 flex items-center justify-between">
              <span className="text-xs text-slate-500">Share this article:</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => alert('Article link copied to clipboard!')}
                  className="px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 shadow-sm"
                >
                  <span className="material-symbols-outlined text-xs">link</span>
                  Copy Link
                </button>
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-1.5 bg-[#107022] hover:bg-emerald-800 text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Marquee Keyframe */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
