import Link from 'next/link';
import Image from 'next/image';
import ServicesSlider from '@/components/ServicesSlider';
import TeamAccordion from '@/components/TeamAccordion';
import SavingsCalculator from '@/components/SavingsCalculator';
import HeroSlider from '@/components/HeroSlider';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { Product } from '@/data/products';

export default async function Home() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: featuredProductsData } = await supabase
    .from('products')
    .select('*')
    .limit(4);
  return (
    <>


      {/* Hero Section */}
      <section className="w-full pt-3 pb-2 px-4 max-w-[80rem] mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-start">
          {/* Main Banner */}
          <div className="w-full lg:w-[78%] xl:w-[946px] aspect-[946/425] xl:h-[330px] relative flex-shrink-0">
            <HeroSlider />
          </div>
          {/* Side Banners */}
          <div className="hidden lg:flex w-full lg:w-[20%] xl:w-[242px] xl:h-[330px] flex-col justify-between gap-3 flex-shrink-0">
            <Link href="#" className="w-full h-full xl:h-[158px] relative rounded-md shadow-sm overflow-hidden block group bg-white border border-gray-100">
              <Image src="/banner-side-1.png" alt="Side Banner 1" fill className="object-contain transition-transform duration-500 group-hover:scale-105" priority />
            </Link>
            <Link href="#" className="w-full h-full xl:h-[158px] relative rounded-md shadow-sm overflow-hidden block group bg-white border border-gray-100">
              <Image src="/banner-side-2.png" alt="Side Banner 2" fill className="object-contain transition-transform duration-500 group-hover:scale-105" priority />
            </Link>
          </div>
        </div>

        {/* Category Icons */}
        <div className="mt-10 overflow-x-auto pb-2 max-w-[80rem] mx-auto">
          <div className="flex justify-center items-end min-w-max lg:min-w-0 gap-8 lg:gap-16 px-4">
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
              <Link key={category.name} href={`/products?category=${category.name.toLowerCase()}`} className="flex flex-col items-center gap-3 group min-w-[80px]">
                <div className="h-[80px] w-[80px] flex items-center justify-center relative">
                  <Image src={category.icon} alt={category.name} fill className="object-contain mix-blend-multiply grayscale-0 transition-all duration-300 group-hover:grayscale" />
                </div>
                <span className="text-[13px] md:text-[14px] text-gray-700 font-medium group-hover:text-[#107022] transition-colors text-center mt-1">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <section className="py-16 bg-white rounded-3xl mt-12 mb-8 shadow-sm border border-gray-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-dark">Featured Products</h2>
              <Link className="text-primary font-medium text-sm flex items-center hover:underline" href="/products">View All Products <i className="fa-solid fa-arrow-right ml-2 text-xs"></i></Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {(featuredProductsData || []).map((product, index) => (
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
            
                    <div className="grid grid-cols-3 gap-2 mb-4 mt-auto">
                      {[
                        { label: "Power", value: product.power },
                        { label: "Efficiency", value: product.efficiency },
                        { label: "Warranty", value: product.warranty }
                      ].map((feature, i) => (
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
                      <div className="bg-[#f8fafc] rounded-2xl p-1 min-w-[100px] flex-shrink-0">
                        <div className="bg-white rounded-xl h-12 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-2">
                          <span className="text-red-600 font-black italic tracking-tighter text-sm">INVEREX</span>
                        </div>
                      </div>
                      {/* Pylontech */}
                      <div className="bg-[#f8fafc] rounded-2xl p-1 min-w-[130px] flex-shrink-0">
                        <div className="bg-white rounded-xl h-12 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-2 py-1 overflow-visible">
                          <img src="/images/pylontech-logo.png" alt="Pylontech" className="h-full w-auto object-contain max-h-[40px] transform scale-[2] origin-center" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.2)' }} />
                        </div>
                      </div>
                      {/* Solis */}
                      <div className="bg-[#f8fafc] rounded-2xl p-1 min-w-[100px] flex-shrink-0">
                        <div className="bg-white rounded-xl h-12 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-2 py-1">
                          <img src="/images/solis-logo.png" alt="Solis" className="h-full w-auto object-contain max-h-[30px] transform scale-[1.2]" />
                        </div>
                      </div>
                      {/* Jinko Solar */}
                      <div className="bg-[#f8fafc] rounded-2xl p-1 min-w-[100px] flex-shrink-0">
                        <div className="bg-white rounded-xl h-12 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-2 py-1">
                          <img src="/images/jinko-logo.png" alt="Jinko Solar" className="h-full w-auto object-contain max-h-[22px]" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.5) brightness(1.1)' }} />
                        </div>
                      </div>
                      {/* Narada */}
                      <div className="bg-[#f8fafc] rounded-2xl p-1 min-w-[100px] flex-shrink-0">
                        <div className="bg-white rounded-xl h-12 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-4 py-2">
                          <img src="/images/narada-logo.png" alt="Narada" className="h-full w-auto object-contain max-h-[14px]" />
                        </div>
                      </div>
                      {/* Huawei */}
                      <div className="bg-[#f8fafc] rounded-2xl p-1 min-w-[100px] flex-shrink-0">
                        <div className="bg-white rounded-xl h-12 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-2 py-1">
                          <img src="/images/huawei-logo.png" alt="Huawei" className="h-full w-auto object-contain max-h-[22px]" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.5) brightness(1.1)' }} />
                        </div>
                      </div>
                      {/* Dyness */}
                      <div className="bg-[#f8fafc] rounded-2xl p-1 min-w-[100px] flex-shrink-0">
                        <div className="bg-white rounded-xl h-12 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-2">
                          <span className="text-green-500 font-light tracking-widest text-xs">DY<span className="text-blue-500 font-bold">NESS</span></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
      </section>



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
          <div className="bg-surface-container-low rounded-xl p-3 sm:p-4 border border-outline-variant/20 flex flex-col lg:flex-row items-center gap-3 sm:gap-4 shadow-sm transition-transform duration-500 hover:-translate-y-1">
            <div className="w-full lg:w-1/4 space-y-1 text-center lg:text-left">
              <span className="text-[9px] sm:text-[10px] font-bold text-primary uppercase tracking-widest">Calculate Your Savings</span>
              <h2 className="text-xl sm:text-2xl font-bold text-on-surface leading-tight">See How Much You Can Save</h2>
              <p className="text-xs sm:text-sm text-on-surface-variant hidden sm:block">Use our calculator to estimate your savings with solar solutions.</p>
            </div>
            <SavingsCalculator />
            <div className="hidden lg:block w-32 shrink-0">
              <Image width={128} height={128} alt="Professional 3D Solar Savings Calculator" className="w-full h-auto rounded-xl shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASuSEZCzZymyyvLfwLQhOYXd6ygxOBl5ndOPLFm-ebqyKrQJkp94KKIH1kfpngXLt2x2PzPeieo0hIZUrFxkF-CLpcvleZKnJd0bopfmvrYdmdyQzYZSZCwJbS0Ph0NWTGbhDQQfc6T2qwsZ3d_warZ9dmWt12YFd_I_GCDgkOx-hDm3QqjWclmB5I4n7a2rWvAdkuhQSxkY1Jb-V9i9hKZBss4_lT8lK7zHKI1UKvhN-fXk5oNWlg" unoptimized />
            </div>
          </div>
          <div className="bg-surface-container-low rounded-xl p-3 sm:p-4 border border-outline-variant/20 flex flex-row items-center gap-4 sm:gap-6 shadow-sm transition-transform duration-500 hover:-translate-y-1">
            <div className="hidden sm:block sm:w-1/4 lg:w-1/4">
              <Image width={400} height={300} alt="Modern professional illustration of a contemporary home with solar panels and electric vehicles" className="w-full h-auto rounded-lg" src="/clean_energy_home.png" />
            </div>
            <div className="flex-grow space-y-2 sm:space-y-3">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-on-surface leading-tight">Ready to Switch to Clean Energy?</h2>
              <p className="text-sm sm:text-body-lg text-on-surface-variant">Get a customized solar solution tailored to your energy journey.</p>
              <div className="flex flex-row flex-wrap gap-2 sm:gap-4">
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
    </>
  );
}
