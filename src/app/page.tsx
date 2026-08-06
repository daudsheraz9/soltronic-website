import Link from 'next/link';
import ServicesSlider from '@/components/ServicesSlider';
import TeamAccordion from '@/components/TeamAccordion';
import SavingsCalculator from '@/components/SavingsCalculator';
import HeroSlider from '@/components/HeroSlider';
export default function Home() {
  return (
    <>


      {/* Hero Section */}
      <section className="w-full pt-4 pb-8 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Main Banner */}
          <div className="w-full lg:w-[70%] xl:w-[75%] h-[250px] md:h-[400px] lg:h-auto">
            <HeroSlider />
          </div>
          {/* Side Banners */}
          <div className="w-full lg:w-[30%] xl:w-[25%] flex flex-col gap-4">
            <Link href="#" className="block w-full">
              <img src="/banner-side-1.png" alt="Side Banner 1" className="w-full h-auto object-cover rounded-md shadow-sm" />
            </Link>
            <Link href="#" className="block w-full h-full">
              <img src="/banner-side-2.png" alt="Side Banner 2" className="w-full h-full object-cover rounded-md shadow-sm" />
            </Link>
          </div>
        </div>

        {/* Category Icons */}
        <div className="mt-12 overflow-x-auto pb-4">
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
      </section>



      {/* Services Section */}
      <section className="py-section-padding px-gutter bg-surface-bright overflow-hidden">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-stack-lg">
            <span className="text-label-md font-label-md text-primary tracking-widest uppercase">Our Services</span>
            <h2 className="text-headline-lg md:text-display font-headline-lg text-[#B8860B] mt-2">End-to-End Solar Solutions</h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant mt-4 max-w-2xl mx-auto">From consultancy to commissioning, we have you covered at every step of your journey.</p>
          </div>

          <ServicesSlider />
        </div>
      </section>



      {/* Team/Projects/Testimonials Section */}
      <section className="py-section-padding px-gutter bg-surface-bright">
        <div className="max-w-container-max mx-auto space-y-24">
          <div className="text-center">
            <h2 className="text-headline-lg md:text-display font-headline-lg text-on-surface mb-12">Meet the People Behind Our Success</h2>
            <TeamAccordion />
          </div>



          <div className="py-12 border-y border-outline-variant/20">
            <div className="flex flex-col md:flex-row items-center justify-start gap-12 md:gap-20 lg:gap-32">
              <div className="shrink-0">
                <span className="text-label-md font-bold text-on-surface-variant uppercase tracking-widest">Trusted By</span>
                <h3 className="text-headline-md font-bold text-on-surface">Global Brands</h3>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all">
                <img src="/solislogo.png" alt="Solis" className="h-12 md:h-16 w-auto object-contain mix-blend-multiply" />
                <img src="/risen.png" alt="Risen" className="h-12 md:h-16 w-auto object-contain mix-blend-multiply" />
                <img src="/huawei.png" alt="Huawei" className="h-12 md:h-16 w-auto object-contain mix-blend-multiply" />
                <img src="/pylontech-logo.webp" alt="Pylontech" className="h-12 md:h-16 w-auto object-contain mix-blend-multiply" />
                <img src="/volnex.png" alt="Volnex" className="h-12 md:h-16 w-auto object-contain mix-blend-multiply" />
                <img src="/naradalogo.png" alt="Narada" className="h-12 md:h-16 w-auto object-contain mix-blend-multiply" />
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Savings Section */}
      <section className="py-12 px-gutter bg-surface-bright">
        <div className="max-w-container-max mx-auto space-y-8">
          <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/20 flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3 space-y-4">
              <span className="text-label-md font-bold text-primary uppercase tracking-widest">Calculate Your Savings</span>
              <h2 className="text-headline-lg font-bold text-on-surface leading-tight">See How Much You Can Save</h2>
              <p className="text-body-md text-on-surface-variant">Use our calculator to estimate your savings with solar solutions.</p>
            </div>
            <SavingsCalculator />
            <div className="hidden lg:block w-48 shrink-0">
              <img alt="Professional 3D Solar Savings Calculator" className="w-full h-auto rounded-xl shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASuSEZCzZymyyvLfwLQhOYXd6ygxOBl5ndOPLFm-ebqyKrQJkp94KKIH1kfpngXLt2x2PzPeieo0hIZUrFxkF-CLpcvleZKnJd0bopfmvrYdmdyQzYZSZCwJbS0Ph0NWTGbhDQQfc6T2qwsZ3d_warZ9dmWt12YFd_I_GCDgkOx-hDm3QqjWclmB5I4n7a2rWvAdkuhQSxkY1Jb-V9i9hKZBss4_lT8lK7zHKI1UKvhN-fXk5oNWlg" />
            </div>
          </div>
          <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/20 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/5">
              <img alt="Modern professional illustration of a contemporary home with solar panels and electric vehicles" className="w-full h-auto rounded-lg" src="https://lh3.googleusercontent.com/aida/AP1WRLt1j--BylxjLbb6JXxZ1f0vCIDj_6G-vR7E4xePnN5lWMeQrfGHklhEuZnDve_fKb-E_c8Lk4Guwyc1GvlYSjdJjPdUKOsoMYXwSTso3W6IxKU9UuqiKdT9NMg1HFaPd23XiqAYPHeYzPj2t_Iwve03MPLc_cGmhUb-TrRpr1jGdY2QDs3RwYR_en1DlBKDaKGu3KZr9YUkX4dYq9KTVFxf-mt_b8w4-oC4W-oGTGJCz_r1Bas4nB0hZVs" />
            </div>
            <div className="flex-grow space-y-6">
              <h2 className="text-headline-lg md:text-display font-bold text-on-surface leading-tight">Ready to Switch to Clean Energy?</h2>
              <p className="text-body-lg text-on-surface-variant">Get a customized solar solution tailored to your energy journey.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/epc" className="bg-black text-white px-8 py-3 rounded font-bold flex items-center gap-2 hover:bg-neutral-800 transition-all w-fit">
                  Get Free Quote <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <Link href="/contact" className="border-2 border-outline-variant text-on-surface px-8 py-3 rounded font-bold flex items-center gap-2 hover:bg-surface-container-high transition-all w-fit">
                  Talk to Expert <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
