import Link from 'next/link';
import ServicesSlider from '@/components/ServicesSlider';
import TeamAccordion from '@/components/TeamAccordion';
import SavingsCalculator from '@/components/SavingsCalculator';
export default function Home() {
  return (
    <>


      {/* Hero Section */}
      <section className="relative min-h-[100vh] lg:min-h-[800px] flex items-center justify-center px-gutter pt-section-padding pb-section-padding">
        <div className="absolute inset-0 z-0">
          <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-on-primary-fixed/80 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-container-max mx-auto text-left text-on-primary pt-32 md:pt-48 pb-32 md:pb-48">
          <div className="max-w-2xl space-y-stack-md">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-archivo-black uppercase text-on-primary leading-tight tracking-tighter drop-shadow-lg">Powering a<br /><span className="text-inverse-primary drop-shadow-md">Sustainable</span><br />Future</h1>
            <p className="text-body-lg md:text-xl font-medium text-on-primary/95 max-w-xl drop-shadow-md mt-4">Innovative Solar Solutions for Homes, Businesses and Industries. Building a Greener, Better Tomorrow.</p>
            <div className="flex flex-col sm:flex-row gap-stack-sm pt-stack-md">
              <Link className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded font-label-md text-label-md hover:bg-neutral-800 transition-all hover:-translate-y-0.5 shadow-sm" href="/contact">
                Get Free Quote <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </Link>
              <Link className="inline-flex items-center justify-center border-2 border-on-primary text-on-primary bg-transparent px-8 py-3 rounded font-label-md text-label-md hover:bg-on-primary/10 transition-all" href="/epc">
                Our Projects <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-16 z-20 px-gutter max-w-container-max mx-auto">
        <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-xl">
          <div className="rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              </div>
              <div>
                <h3 className="text-headline-md font-bold text-white leading-none">120+</h3>
                <p className="text-label-md text-white/90 mt-1">MW+ Installed Capacity</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30"></div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>domain</span>
              </div>
              <div>
                <h3 className="text-headline-md font-bold text-white leading-none">850+</h3>
                <p className="text-label-md text-white/90 mt-1">Projects Completed</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30"></div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
              </div>
              <div>
                <h3 className="text-headline-md font-bold text-white leading-none">650+</h3>
                <p className="text-label-md text-white/90 mt-1">Happy Clients</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30"></div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
              </div>
              <div>
                <h3 className="text-headline-md font-bold text-white leading-none">1.2M+</h3>
                <p className="text-label-md text-white/90 mt-1">Tons of CO₂ Savings</p>
              </div>
            </div>
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

      {/* CEO Message Section */}
      <section className="py-section-padding px-gutter bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-stack-lg lg:gap-16 items-center">
          <div className="space-y-6">
            <div>
              <span className="text-label-md font-label-md text-primary tracking-widest uppercase font-bold">CEO MESSAGE</span>
              <h2 className="text-headline-lg md:text-display font-headline-lg text-on-surface font-bold mt-2 leading-tight">A Message from<br />Our CEO</h2>
              <div className="w-16 h-1 bg-primary mt-4"></div>
            </div>
            <p className="text-body-md md:text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
              At Soltronic Energy Distribution, We are leading a transformative shift in energy, A shift powered by Innovation, Dedication and a unified vision for a Sustainable Future. As the CEO of this Innovative Company, I am both Privileged and Enthusiastic to guide our Exceptional Team in revolutionizing the way the world harnesses and utilizes solar energy. Our mission is clear and unwavering: 'To make Clean, Renewable Energy accessible and Efficient for Everyone.' We are driven by the conviction that Solar Energy is not merely an alternative but a crucial solution to the global energy challenge. Through pioneering technologies and strategic partnerships, We deliver High-Quality Solar Solutions tailored to meet our Clients' diverse needs while making a significant impact on reducing carbon footprints.
            </p>
            <div className="pt-2">
              <p className="text-label-md font-bold text-on-surface">Mr. Faheem Maalik</p>
              <p className="text-body-md text-on-surface-variant italic">CEO Soltronic Energy Distribution</p>
            </div>
          </div>
          <div className="relative w-full mt-12 lg:mt-0 px-4 py-8 max-w-[700px] mx-auto">
            <div className="relative z-10 bg-surface-container-lowest p-2 shadow-md">
              <img alt="CEO Faheem Maalik" className="w-full h-auto object-cover" src="/CEO-3.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Team/Projects/Testimonials Section */}
      <section className="py-section-padding px-gutter bg-surface-bright">
        <div className="max-w-container-max mx-auto space-y-24">
          <div className="text-center">
            <h2 className="text-headline-lg md:text-display font-headline-lg text-on-surface mb-12">Meet the People Behind Our Success</h2>
            <TeamAccordion />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-label-md font-bold text-primary uppercase tracking-widest">Our Projects</span>
              <h2 className="text-headline-lg font-bold text-on-surface leading-tight">Powering Progress Across Industries</h2>
              <p className="text-body-md text-on-surface-variant">Explore our successful solar projects that drive sustainability and efficiency.</p>
              <Link className="inline-flex items-center justify-center bg-primary text-on-primary px-6 py-3 rounded font-label-md hover:bg-primary/90 transition-all" href="/epc">
                View All Projects <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm border border-outline-variant/20">
                <div className="relative h-48">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzfV7A4Vw6jb-qGTumtz3BNeOe41GdYrKs024vW1twLBEiqn3N2rpVFo4uYyqeC9lFUNQoxFq6NTAX8VfJGOrtF_AqZAwvExLFor4wIqSRtldUMC5cw9-85ND0Dbi6GzzeULK7HbEbA8VssXccNe9ohNA4XVfc14GhsqMl1I8xVevd4Le_l9mStUYZ-YVWfezy2c1xJj032vOPYnxFHZcGp4eMkduDErkKgawqtQdZd5SRRXsLoXFR" />
                  <span className="absolute top-2 left-2 bg-on-surface/80 text-on-primary text-[10px] px-2 py-0.5 rounded">Industrial</span>
                  <span className="absolute bottom-2 left-2 bg-secondary-container text-on-secondary text-[10px] px-2 py-0.5 rounded">Active</span>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-on-surface">Industrial Facility</h4>
                  <p className="text-primary font-bold text-sm mt-1">1.2 MW</p>
                  <p className="text-xs text-on-surface-variant">Multan, Punjab</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm border border-outline-variant/20">
                <div className="relative h-48">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzfV7A4Vw6jb-qGTumtz3BNeOe41GdYrKs024vW1twLBEiqn3N2rpVFo4uYyqeC9lFUNQoxFq6NTAX8VfJGOrtF_AqZAwvExLFor4wIqSRtldUMC5cw9-85ND0Dbi6GzzeULK7HbEbA8VssXccNe9ohNA4XVfc14GhsqMl1I8xVevd4Le_l9mStUYZ-YVWfezy2c1xJj032vOPYnxFHZcGp4eMkduDErkKgawqtQdZd5SRRXsLoXFR" />
                  <span className="absolute top-2 left-2 bg-on-surface/80 text-on-primary text-[10px] px-2 py-0.5 rounded">Industrial</span>
                  <span className="absolute bottom-2 left-2 bg-secondary-container text-on-secondary text-[10px] px-2 py-0.5 rounded">Active</span>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-on-surface">Commercial Building</h4>
                  <p className="text-primary font-bold text-sm mt-1">750 KW</p>
                  <p className="text-xs text-on-surface-variant">Lahore, Punjab</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm border border-outline-variant/20">
                <div className="relative h-48">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzfV7A4Vw6jb-qGTumtz3BNeOe41GdYrKs024vW1twLBEiqn3N2rpVFo4uYyqeC9lFUNQoxFq6NTAX8VfJGOrtF_AqZAwvExLFor4wIqSRtldUMC5cw9-85ND0Dbi6GzzeULK7HbEbA8VssXccNe9ohNA4XVfc14GhsqMl1I8xVevd4Le_l9mStUYZ-YVWfezy2c1xJj032vOPYnxFHZcGp4eMkduDErkKgawqtQdZd5SRRXsLoXFR" />
                  <span className="absolute top-2 left-2 bg-on-surface/80 text-on-primary text-[10px] px-2 py-0.5 rounded">Industrial</span>
                  <span className="absolute bottom-2 left-2 bg-secondary-container text-on-secondary text-[10px] px-2 py-0.5 rounded">Active</span>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-on-surface">Logistics Warehouse</h4>
                  <p className="text-primary font-bold text-sm mt-1">1 MW</p>
                  <p className="text-xs text-on-surface-variant">Faisalabad, Punjab</p>
                </div>
              </div>
            </div>
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

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/4 shrink-0">
              <span className="text-label-md font-bold text-primary uppercase tracking-widest block mb-4">TESTIMONIALS</span>
              <h2 className="text-headline-lg font-bold text-on-surface leading-tight">What Our<br />Clients Say</h2>
            </div>
            <div className="flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/20 flex flex-col">
                  <span className="material-symbols-outlined text-secondary-container text-3xl mb-4">format_quote</span>
                  <p className="text-body-md text-on-surface-variant mb-6 flex-grow">"Soltronic Energy delivered exceptional results with their solar solutions. Highly professional and environment conscious."</p>
                  <div className="flex items-center gap-3">
                    <img alt="Rashid Mahmood" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj_XIj7YmRHisC4FdOYZ53JOkBP64OAsbe8fp-itPRckZQ0gwYr2GU58H-TuH3KzS2q2nAH6Qk0vOg3g4MEWpncz08u1erPRuRwpWXqZVL5xQoicdcH1Ov4OInYxYhnbfS6Oxk21BCwMcttQlfel-c8WvwEjh_2ZPsyPErqyC49cKo__Zx8jqxFyOfGN-_0KLbcYWT-VSjfLk-i5ui9Mbaoee8-FV_RBzTgHDurl3vx7RH5DvwT8P2" />
                    <div>
                      <h5 className="font-bold text-on-surface text-sm">Rashid Mahmood</h5>
                      <p className="text-xs text-on-surface-variant">Factory Manager</p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/20 flex flex-col">
                  <span className="material-symbols-outlined text-secondary-container text-3xl mb-4">format_quote</span>
                  <p className="text-body-md text-on-surface-variant mb-6 flex-grow">"Professional team, timely delivery and excellent after-sales service. Highly recommended!"</p>
                  <div className="flex items-center gap-3">
                    <img alt="Aisha Bano" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwnTi7p7572oeE44Sq6aQSmjW6_glkyv6gRkJcsBTrn1sL7AUVOGp0lMVq8XCsVua1WzS_HN165M_ZIKKPXUVhb0Wq4-b8wwa9Ga0K-2hm6Va3BvT3MBzNku6hEJmFnBVaheige5WyX3lv_AXkQyIPvA02rtGZKCAJEFOUNc3FdQTDrhAsALhD_FuIJtag92FajGuO7oD3MJpw-lp4RyP4F476PaeieLSq7xRzbYUTMlEF9amd9keD" />
                    <div>
                      <h5 className="font-bold text-on-surface text-sm">Aisha Bano</h5>
                      <p className="text-xs text-on-surface-variant">Operations Head</p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/20 flex flex-col">
                  <span className="material-symbols-outlined text-secondary-container text-3xl mb-4">format_quote</span>
                  <p className="text-body-md text-on-surface-variant mb-6 flex-grow">"Switching to solar with Soltronic Energy was one of the best decisions for our business."</p>
                  <div className="flex items-center gap-3">
                    <img alt="Usman Saif" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGXnVOwVn43eUp-g-vuxp_m05_HIPA9cajTaHSU0HR-duSKcz7e6IoqOc7z0OuLFtkRUoWVjqUJJdE_WoMvvGDMbC73soQQ5BKMaXUKhbNZcDG01LNWoHjsM7mVczqGDgandb7dpPKubEW6eL5g41QZYL3uJDJWl-xndvFXqbsBdP4Y7TyVrdpp0t_h9ZN6K0EVj3pcg5izXVXnkqK8T0OJONau0-PpBR2wvlgfEpD-TyaF_4LNzrD" />
                    <div>
                      <h5 className="font-bold text-on-surface text-sm">Usman Saif</h5>
                      <p className="text-xs text-on-surface-variant">CEO</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-8">
                <div className="w-2 h-2 rounded-full bg-secondary-container"></div>
                <div className="w-2 h-2 rounded-full bg-outline-variant/30"></div>
                <div className="w-2 h-2 rounded-full bg-outline-variant/30"></div>
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
