import Link from 'next/link';
import Image from 'next/image';
import ServicesSlider from '@/components/ServicesSlider';
import TeamAccordion from '@/components/TeamAccordion';
import SavingsCalculator from '@/components/SavingsCalculator';
import ProductBanner from '@/components/ProductBanner';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { Product, featuredProductsData as staticFeaturedProducts } from '@/data/products';
import SchemaMarkup from '@/components/SchemaMarkup';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soltronic Energy - Premium Solar Solutions & EPC in Pakistan',
  description: 'Discover top-tier solar solutions for homes and businesses in Pakistan. Explore solar panels, inverters, and full EPC services with Soltronic Energy.',
  keywords: ['solar panels pakistan', 'best inverters lahore', 'buy solar systems', 'commercial solar installation', 'residential solar pakistan'],
  alternates: {
    canonical: 'https://soltronicsenergy.com',
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Soltronic Energy",
  "image": "https://soltronicsenergy.com/icon-favicon.png",
  "@id": "https://soltronicsenergy.com",
  "url": "https://soltronicsenergy.com",
  "telephone": "+923000000000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office # 123, Tech Tower",
    "addressLocality": "Lahore",
    "addressRegion": "Punjab",
    "postalCode": "54000",
    "addressCountry": "PK"
  }
};

import FavouriteButton from '@/components/FavouriteButton';

export default async function Home() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const targetIds = ['1', '21', '11', '10'];
  const { data: dbProducts } = await supabase
    .from('products')
    .select('*')
    .in('id', targetIds);

  let featuredProductsData = staticFeaturedProducts;
  if (dbProducts && dbProducts.length === 4) {
    const sorted = targetIds.map(id => dbProducts.find(p => String(p.id) === id)).filter(Boolean);
    if (sorted.length === 4) {
      featuredProductsData = sorted;
    }
  }

  return (
    <main className="w-full overflow-x-hidden">
      <SchemaMarkup schema={localBusinessSchema} />
      {/* Product Banner with Slider and Side Ads */}
      <ProductBanner />

      {/* Category Icons Row */}
      <div className="mt-8 sm:mt-10 mb-6 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-hide">
        <div className="flex sm:grid sm:grid-cols-8 justify-between items-start w-max sm:w-full gap-4 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 pb-2">
          {[
            { name: 'Promotions', icon: '/icons/promotions.png', href: '/promotions' },
            { name: 'Inverters', icon: '/icons/inverters.png', href: '/products?category=inverters' },
            { name: 'Batteries', icon: '/icons/storage.png', href: '/products?category=batteries' },
            { name: 'Panels', icon: '/icons/panels.png', href: '/products?category=panels' },
            { name: 'EV Chargers', icon: '/icons/ev-chargers.png', href: '/products?category=ev-chargers' },
            { name: 'Pressure Washers', icon: '/icons/pressure-washer.png', href: '/products?category=pressure-washers', scale: 'scale-[1.40]' },
            { name: 'Mountings', icon: '/icons/mountings.png', href: '/products?category=mountings' },
            { name: 'Electricals', icon: '/icons/electrincals.png', href: '/products?category=electricals' },
          ].map((category) => (
            <Link key={category.name} href={category.href} className="flex flex-col items-center gap-2 group min-w-[75px] md:min-w-[85px]">
              <div className="h-[54px] md:h-[70px] w-[54px] md:w-[70px] flex items-center justify-center relative overflow-hidden">
                <img src={category.icon} alt={category.name} className={`max-h-full max-w-full object-contain mix-blend-multiply transition-all duration-300 group-hover:scale-110 ${category.scale || ''}`} />
              </div>
              <span className="text-[12px] md:text-[14px] text-gray-700 font-medium group-hover:text-[#107022] transition-colors text-center mt-1 whitespace-nowrap">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>


      {/* Featured Products */}
      <section className="pt-8 pb-16 bg-white rounded-3xl mt-4 sm:mt-6 mb-8 shadow-sm border border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-dark">Featured Products</h2>
            <Link className="text-primary font-medium text-sm flex items-center hover:underline" href="/products">View All Products <i className="fa-solid fa-arrow-right ml-2 text-xs"></i></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {(featuredProductsData || []).map((product: any, index: number) => (
              <Link key={index} href={`/products/${product.slug || 'soltronic-mono-550w'}`} className="bg-white flex flex-col group relative border border-gray-100 shadow-sm rounded-2xl overflow-hidden transition-all duration-300 hover:border-orange-200 hover:shadow-[0_0_25px_rgba(254,215,170,0.5)] cursor-pointer">

                {/* Image Section */}
                <div className="h-40 sm:h-56 bg-[#f4f7fb] flex justify-center items-center p-4 sm:p-6 overflow-hidden relative">
                  <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-emerald-500 text-white shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    {product.status || 'In Stock'}
                  </span>
                  <FavouriteButton product={product} className="absolute top-3 right-3 z-10" />
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
                    {[
                      { label: "Power", value: product.power },
                      { label: "Efficiency", value: product.efficiency },
                      { label: "Warranty", value: product.warranty }
                    ].map((feature, i) => (
                      <div key={i} className="flex-1 min-w-[30%] bg-[#f8fafc] border border-gray-100 rounded-lg p-1.5 sm:p-2 text-center flex flex-col justify-center">
                        <span className="text-[11px] sm:text-[13px] font-bold text-[#0f172a] leading-tight">{feature.value}</span>
                        <span className="text-[8px] sm:text-[9px] text-gray-400 uppercase font-semibold mt-1">{feature.label}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div className="w-full bg-[#ef4444] hover:bg-[#dc2626] text-white py-3 px-4 rounded-xl text-[14px] transition-all duration-300 text-center font-bold shadow-[0_4px_14px_rgba(239,68,68,0.4)] hover:shadow-[0_6px_20px_rgba(239,68,68,0.6)] flex items-center justify-center gap-2">
                      Get Quote <span className="text-lg leading-none">&rarr;</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-4 pb-2 overflow-hidden relative">
        <style>{`
              @keyframes scroll-brands {
                0% { transform: translateX(0); }
                100% { transform: translateX(-25%); }
              }
              .animate-marquee {
                animation: scroll-brands 20s linear infinite;
              }
              .animate-marquee:hover {
                animation-play-state: paused;
              }
            `}</style>

        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="text-center z-10 relative">
            <span className="text-label-md font-bold text-on-surface-variant uppercase tracking-widest block">Trusted By</span>
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500 mt-1">Global Brands</h3>
          </div>

          <div className="overflow-hidden w-full relative mt-2">
            <div className="flex gap-2 pr-2 w-max animate-marquee">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="contents">
                  {/* Inverex */}
                  <a href="https://www.inverex.pk/" target="_blank" rel="noopener noreferrer" className="bg-[#f8fafc] rounded-2xl p-1 min-w-[100px] flex-shrink-0 block hover:opacity-80 transition-opacity">
                    <div className="bg-white rounded-xl h-12 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-2">
                      <span className="text-red-600 font-black italic tracking-tighter text-sm">INVEREX</span>
                    </div>
                  </a>
                  {/* Pylontech */}
                  <a href="https://www.pylontech.com.cn/" target="_blank" rel="noopener noreferrer" className="bg-[#f8fafc] rounded-2xl p-1 min-w-[130px] flex-shrink-0 block hover:opacity-80 transition-opacity">
                    <div className="bg-white rounded-xl h-12 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-2 py-1 overflow-visible">
                      <img src="/images/pylontech-logo.png" alt="Pylontech" className="h-full w-auto object-contain max-h-[40px] transform scale-[2] origin-center" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.2)' }} />
                    </div>
                  </a>
                  {/* Solis */}
                  <a href="https://www.solisinverters.com/" target="_blank" rel="noopener noreferrer" className="bg-[#f8fafc] rounded-2xl p-1 min-w-[100px] flex-shrink-0 block hover:opacity-80 transition-opacity">
                    <div className="bg-white rounded-xl h-12 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-2 py-1">
                      <img src="/images/solis-logo.png" alt="Solis" className="h-full w-auto object-contain max-h-[30px] transform scale-[1.2]" />
                    </div>
                  </a>
                  {/* Jinko Solar */}
                  <a href="https://www.jinkosolar.com/" target="_blank" rel="noopener noreferrer" className="bg-[#f8fafc] rounded-2xl p-1 min-w-[100px] flex-shrink-0 block hover:opacity-80 transition-opacity">
                    <div className="bg-white rounded-xl h-12 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-2 py-1">
                      <img src="/images/jinko-logo.png" alt="Jinko Solar" className="h-full w-auto object-contain max-h-[22px]" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.5) brightness(1.1)' }} />
                    </div>
                  </a>
                  {/* Narada */}
                  <a href="https://www.naradapower.com/" target="_blank" rel="noopener noreferrer" className="bg-[#f8fafc] rounded-2xl p-1 min-w-[100px] flex-shrink-0 block hover:opacity-80 transition-opacity">
                    <div className="bg-white rounded-xl h-12 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-4 py-2">
                      <img src="/images/narada-logo.png" alt="Narada" className="h-full w-auto object-contain max-h-[14px]" />
                    </div>
                  </a>
                  {/* Huawei */}
                  <a href="https://solar.huawei.com/" target="_blank" rel="noopener noreferrer" className="bg-[#f8fafc] rounded-2xl p-1 min-w-[100px] flex-shrink-0 block hover:opacity-80 transition-opacity">
                    <div className="bg-white rounded-xl h-12 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-2 py-1">
                      <img src="/images/huawei-logo.png" alt="Huawei" className="h-full w-auto object-contain max-h-[22px]" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.5) brightness(1.1)' }} />
                    </div>
                  </a>
                  {/* Dyness */}
                  <a href="https://www.dyness.com/" target="_blank" rel="noopener noreferrer" className="bg-[#f8fafc] rounded-2xl p-1 min-w-[100px] flex-shrink-0 block hover:opacity-80 transition-opacity">
                    <div className="bg-white rounded-xl h-12 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-2">
                      <span className="text-green-500 font-light tracking-widest text-xs">DY<span className="text-blue-500 font-bold">NESS</span></span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>




      {/* Services Section */}
      <section className="pt-4 pb-4 px-gutter bg-surface-bright overflow-hidden">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-2">
            <span className="text-label-md font-label-md text-primary tracking-widest uppercase">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-headline-lg text-[#B8860B] mt-1">End-to-End Solar Solutions</h2>
            <p className="text-body-md font-body-lg text-on-surface-variant mt-1 max-w-2xl mx-auto">From consultancy to commissioning, we have you covered at every step of your journey.</p>
          </div>

          <ServicesSlider />
        </div>
      </section>



      {/* Team/Projects/Testimonials Section */}
      <section className="py-8 px-gutter bg-surface-bright">
        <div className="max-w-container-max mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline-lg text-on-surface mb-6">Meet the People Behind Our Success</h2>
            <TeamAccordion />
          </div>





        </div>
      </section>

      {/* Savings Section */}
      <section className="py-2 px-4 md:px-gutter bg-surface-bright">
        <div className="max-w-container-max mx-auto space-y-3 md:space-y-4">
          <div className="bg-surface-container-low rounded-2xl p-4 sm:p-5 border border-outline-variant/20 flex flex-col lg:flex-row items-center gap-4 sm:gap-6 shadow-sm transition-transform duration-500 hover:-translate-y-1">
            {/* Header Text (First on Mobile order-1, Right side on Desktop lg:order-3) */}
            <div className="w-full lg:w-1/4 space-y-1.5 text-center order-1 lg:order-3">
              <span className="text-[10px] sm:text-[11px] font-bold text-primary uppercase tracking-widest block">Calculate Your Savings</span>
              <h2 className="text-xl sm:text-2xl font-bold text-on-surface leading-snug">How Much You Can Save</h2>
              <p className="text-xs sm:text-sm text-on-surface-variant">Use our calculator to estimate your savings with solar solutions.</p>
            </div>

            {/* Interactive Calculator Controls (Middle on Mobile order-2 & Desktop lg:order-2) */}
            <div className="w-full lg:flex-1 order-2 lg:order-2">
              <SavingsCalculator />
            </div>

            {/* Calculator Image (Hidden on Mobile, Left side on Desktop lg:order-1) */}
            <div className="hidden lg:flex w-[150px] shrink-0 justify-center items-center order-3 lg:order-1">
              <Image 
                width={150} 
                height={150} 
                alt="Professional 3D Solar Savings Calculator" 
                className="w-full h-auto max-h-[150px] rounded-xl shadow-sm object-contain hover:scale-105 transition-transform duration-300" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASuSEZCzZymyyvLfwLQhOYXd6ygxOBl5ndOPLFm-ebqyKrQJkp94KKIH1kfpngXLt2x2PzPeieo0hIZUrFxkF-CLpcvleZKnJd0bopfmvrYdmdyQzYZSZCwJbS0Ph0NWTGbhDQQfc6T2qwsZ3d_warZ9dmWt12YFd_I_GCDgkOx-hDm3QqjWclmB5I4n7a2rWvAdkuhQSxkY1Jb-V9i9hKZBss4_lT8lK7zHKI1UKvhN-fXk5oNWlg" 
                unoptimized 
              />
            </div>
          </div>
          <div className="bg-surface-container-low rounded-xl p-3 sm:p-4 border border-outline-variant/20 flex flex-row items-center gap-4 sm:gap-6 shadow-sm transition-transform duration-500 hover:-translate-y-1">
            <div className="hidden sm:block sm:w-1/4 lg:w-1/4">
              <Image width={400} height={300} alt="Modern professional illustration of a contemporary home with solar panels and electric vehicles" className="w-full h-auto rounded-lg" src="/clean_energy_home.png" />
            </div>
            <div className="flex-grow space-y-2 sm:space-y-3 text-center">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-on-surface leading-tight">Ready to Switch to Clean Energy?</h2>
              <p className="text-sm sm:text-body-lg text-on-surface-variant">Get a customized solar solution tailored to your energy journey.</p>
              <div className="flex flex-row flex-wrap justify-center gap-2 sm:gap-4">
                <Link href="/epc" className="bg-black text-white px-3 sm:px-6 py-2 sm:py-2.5 rounded text-xs sm:text-base font-bold flex items-center gap-1 sm:gap-2 hover:bg-neutral-800 transition-all w-fit shadow-lg">
                  Get Free Quote <span className="material-symbols-outlined text-[14px] sm:text-sm">arrow_forward</span>
                </Link>
                <Link href="/contact" className="border-2 border-outline-variant text-on-surface px-3 sm:px-6 py-2 sm:py-2.5 rounded text-xs sm:text-base font-bold flex items-center gap-1 sm:gap-2 hover:bg-surface-container-high transition-all w-fit">
                  Talk to Expert <span className="material-symbols-outlined text-[14px] sm:text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
