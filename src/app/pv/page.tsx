import Link from 'next/link';

export default function PVPage() {
  return (
    <main className="bg-gray-50 pb-20 pt-8">

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left: Image Gallery */}
          <div className="lg:col-span-4 bg-white p-4 rounded-xl border border-gray-200">
            <div className="bg-gray-100 rounded-lg mb-4 h-[350px] flex items-center justify-center overflow-hidden">
              <img alt="Titan Series Bifacial Module" className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOV7CGyIyyNRwGT5fXxmXVnGK2TKlo6eqc1pND82B8rWP8BFQwwccIdgIYoJ9YK6UWnTO6EZ_Ao75bgIH9nAkyIMPuWo14d4Xhzn4SlI9JOph_dhZXpJHKoCbA8rBzC6RAd9OvMVDC6iwVsQFxhHKw5u5jFimt3Sf2SgiYGNqbPhkMVXusXoRhUeO-polx01-9AXyJDEzYJczRme74JGKJVVcKwcnUsQpmUeXDw8fNf8ok7lD9WGJG"/>
            </div>
            <div className="grid grid-cols-5 gap-2">
              <div className="bg-gray-100 rounded-md h-16 border-2 border-primary overflow-hidden cursor-pointer">
                <img alt="Thumbnail 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvKylMFXefPhfevGgbOMkSCAdzC-61y8dl4k4_7iHYVawETTLDVPeiiQz5ts7YOtWVZ6hq8s0DGKcxwhGxoKHwlse_jhNRXX0rETnM70dnVuHzi8VZANnldV4Ze0gTu78I_Tp1yDCxZlpry-EuCRg63nK0NXrJV6_JrIcZwOGuaByidkO2bXHmySRhIXFQqmLmROr7mkEpAZALnMWXx_v5f4hQs5CGQ9ol6oy--Hf0GGGix1FN3tB5"/>
              </div>
              <div className="bg-gray-100 rounded-md h-16 border border-gray-200 overflow-hidden cursor-pointer">
                <img alt="Thumbnail 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkLGY5jL17ZDBWuvsqk2DJzpaVUrtL6RDxwlrjIRuXkpSNAhUNfKWIgYv59zvI3X7W-CscVtcGzMf5X9hrXJRTuRqy6uWFzG6SyKmt4au-TyxulUf4Qdgvbq0F6Lf8cdByVxKCl3j3Ea0FRvRpWhXyfHVIV4reeJE6rrD2UIFyHelSJcEJknQakHEC302xcgNFUSre7TRs3MPZukUMfstNrWQisJlRpwN6Pm7IimFkpc8VER19r1HL"/>
              </div>
              <div className="bg-gray-100 rounded-md h-16 border border-gray-200 overflow-hidden cursor-pointer">
                <img alt="Thumbnail 3" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXVp4dHSNnXD_t6qugSr1XKJb_mDFVojZEbJqwTb0do3VQx2wB8ZdS735Nuev9aIemj41ercgJcMxRzuNl-b_zXCvwVHW-b71BgTTyRcWgxf46vNL8gixnLMV_ltA-KEtoldec62Vifz74CayDnU2hvGJNhswMgCbQV7XSQJEXDBqkNtkDOFVLx-QVrEpWq5S7_cEJkrZWrEtXGcig0kOa5RTxtTRKu0GQFGqyn1noGygg1WdhxDwn"/>
              </div>
              <div className="bg-gray-100 rounded-md h-16 border border-gray-200 overflow-hidden cursor-pointer">
                <img alt="Thumbnail 4" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpjfKNd34XkAnujs3-S02V-hLgnq4FxfFZ1h8VzE1bXAX8tEz1Pdt5is_Ku-ZdVxNnQ2dIT4KI0Zd2KgbxYvxKE1iDRHbX1Wofv7eOO-7yAw9SKcxpuwxrn7PHW0m4WO6-eNm06xKKgJRaWO3PDlSyST25Qj2e-VuBuNyinL06LCFOncSKC9rNgxmXQDFi_srPo1RNjaFELqrD46nbongoH3CaI_2RIWSGaGgkl1KEcFB4_xxGzFNp"/>
              </div>
              <div className="bg-gray-100 rounded-md h-16 border border-gray-200 flex items-center justify-center text-gray-500 font-medium cursor-pointer">
                +2
              </div>
            </div>
          </div>
          
          {/* Middle: Product Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5 bg-green-50 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-4 w-max">
              <i className="fa-solid fa-certificate"></i> Tier 1 Certified
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2 leading-tight">
              Titan Series<br/>
              <span className="text-secondary">Bifacial</span> Module
            </h1>
            <div className="flex gap-4 mb-6 text-gray-500 text-xl">
              <i className="fa-solid fa-shield-halved cursor-pointer hover:text-gray-700"></i>
              <i className="fa-solid fa-bolt cursor-pointer hover:text-gray-700"></i>
              <i className="fa-solid fa-share-nodes cursor-pointer hover:text-gray-700"></i>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Maximize your energy yield with our advanced dual-glass bifacial technology. Designed for utility-scale and commercial applications.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8 border-t border-b border-gray-200 py-6">
              <div>
                <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Power</div>
                <div className="text-2xl font-bold text-primary">550W+</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Efficiency</div>
                <div className="text-2xl font-bold text-primary">22.8%</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Bifaciality</div>
                <div className="text-2xl font-bold text-primary">85%</div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button className="w-full bg-primary text-white py-3.5 rounded-lg font-semibold hover:bg-green-800 transition-colors flex items-center justify-center gap-2">
                Request Quote <i className="fa-solid fa-arrow-right"></i>
              </button>
              <button className="w-full bg-white text-gray-800 border-2 border-gray-300 py-3.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <i className="fa-solid fa-download"></i> Datasheet
              </button>
            </div>
          </div>
          
          {/* Right: Action Cards */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-primary shrink-0">
                <i className="fa-regular fa-comment-dots text-lg"></i>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Enquiry</h3>
                <p className="text-sm text-gray-500">Ask product related queries</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-primary shrink-0">
                <i className="fa-solid fa-file-invoice-dollar text-lg"></i>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Quotation</h3>
                <p className="text-sm text-gray-500">Get fast pricing details</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-primary shrink-0">
                <i className="fa-solid fa-code-compare text-lg"></i>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Compare</h3>
                <p className="text-sm text-gray-500">Compare with other series</p>
              </div>
            </div>
            
            {/* Technical Highlight Card */}
            <div className="bg-gradient-to-br from-[#7cb342] to-[#fbc02d] p-6 rounded-xl text-white relative overflow-hidden mt-2">
              <div className="absolute right-4 top-4 opacity-50">
                <i className="fa-regular fa-sun text-4xl"></i>
              </div>
              <div className="text-xs uppercase font-bold tracking-wider mb-2 opacity-90">Technical Highlight</div>
              <h3 className="text-lg font-bold mb-6 pr-8">World's First Bifacial PV Capacity</h3>
              <div className="flex items-end justify-between">
                <div className="text-sm font-semibold">7000+ MW Installed</div>
                <i className="fa-solid fa-solar-panel text-3xl opacity-50"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Column: Pricing & Availability */}
          <div className="lg:col-span-5">
            <div className="h-full border-2 border-secondary rounded-xl p-8 bg-white">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Pricing &amp; Availability</h2>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-secondary">$0.28</span>
                <span className="text-gray-600 font-medium">/ Watt (Starting)</span>
              </div>
              <div className="flex items-center gap-2 text-primary font-semibold mb-8">
                <span className="material-symbols-outlined">check_circle</span>
                <span>In Stock - Ready for Dispatch</span>
              </div>
              <div className="text-sm text-gray-600 leading-relaxed">
                <p>*Volume discounts available for utility-scale projects.</p>
                <p>Contact sales for a custom quote.</p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Technical Documentation */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="text-xl font-bold text-gray-900">Technical Documentation</h2>
            {/* Documentation Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <span className="text-sm font-semibold text-gray-800">Installation Manual</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <span className="text-sm font-semibold text-gray-800">Warranty Policy</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">workspace_premium</span>
                </div>
                <span className="text-sm font-semibold text-gray-800">Certificates (ISO,UL)</span>
              </div>
            </div>
            
            {/* Technical Assistance Alert */}
            <div className="bg-green-50 border border-primary/20 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">support_agent</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Technical Assistance</h4>
                  <p className="text-sm text-gray-700">Need help choosing or designing system for your project?</p>
                </div>
              </div>
              <button className="bg-white border border-primary text-primary px-6 py-2 rounded-lg font-bold hover:bg-primary hover:text-white transition-colors shrink-0">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Electrical Data */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Electrical Data (STC)</h3>
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="px-4 py-3 text-sm font-bold text-gray-800">Parameter</th>
                    <th className="px-4 py-3 text-sm font-bold text-gray-800">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Maximum Power (Pmax)</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">550W</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Open Circuit Voltage (Voc)</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">49.8V</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Short Circuit Current (Isc)</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">13.98A</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Module Efficiency</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">22.8%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Frame</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">Anodized Aluminum Alloy</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Junction Box</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">IP68 Rated, 3 Diodes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Operating Temperature</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">-40°C ~ +85°C</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Max System Voltage</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">1500V DC</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Right Column: Mechanical Data */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Mechanical Data</h3>
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#fff3e0]">
                    <th className="px-4 py-3 text-sm font-bold text-gray-800">Parameter</th>
                    <th className="px-4 py-3 text-sm font-bold text-gray-800">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Cell Type</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">N-Type Monocrystalline</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Dimensions</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">2278 x 1134 x 30 mm</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Weight</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">32.5 kg</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Glass</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">2.0 mm Heat Strengthened</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Frame</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">Anodized Aluminum Alloy</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Junction Box</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">IP68 Rated, 3 Diodes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Operating Temperature</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">-40°C ~ +85°C</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Max System Voltage</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">1500V DC</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Advanced Engineering Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Bifacial Technology */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-primary mb-4">
              <span className="material-symbols-outlined text-4xl" style={{ color: '#2e7d32' }}>wb_sunny</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Bifacial Technology</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Capture up to 30% additional power gain from the rear side using reflected light from the ground.</p>
          </div>
          {/* Tier 1 Reliability */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-primary mb-4">
              <span className="material-symbols-outlined text-4xl" style={{ color: '#2e7d32' }}>verified</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Tier 1 Reliability</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Recognized by BloombergNEF as Tier 1 ensuring maximum bankability and industry-leading quality standards.</p>
          </div>
          {/* Anti-PID Resistance */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-primary mb-4">
              <span className="material-symbols-outlined text-4xl" style={{ color: '#2e7d32' }}>shield</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Anti-PID Resistance</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Advanced cell technology minimizes Potential Induced Degradation for long-term durability in extreme conditions.</p>
          </div>
          {/* Low LCOE */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="text-primary mb-4">
              <span className="material-symbols-outlined text-4xl" style={{ color: '#2e7d32' }}>trending_down</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Low LCOE</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Optimized design reduces balance-of-system costs, delivering the lowest Levelized Cost of Energy for large-scale projects.</p>
          </div>
        </div>
      </section>
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Related Projects</h2>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors">
              <i className="fa-solid fa-chevron-left text-xs"></i>
            </button>
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors">
              <i className="fa-solid fa-chevron-right text-xs"></i>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-56 w-full overflow-hidden">
              <img alt="Industrial Textile Mill" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNhun3rf2CshnR_vj9-UeqSuFFGdpxq8sa1p3NUby8IQNgLs3R35-SbkYzlYWoDGM5R0ZL9f2McmHSkLTImnL4e2zMWRNVcUBClCUnYmpPyuehjUFFl72DjVQ-gRuPja3z2jam58uD-Q3i0qDwZmlmOZWnXzTlTEguXFhdAp-8hb7o-PV5Mt6ULCJqqYKKT6Ha4VvZqFDfp0K31woDb-QRhbZy1fTpZLmjJwHw5H_Kqfqz-itX5Y5SEupXxlJALFTBTQ"/>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Industrial Textile Mill</h3>
              <p className="text-sm text-gray-500 mb-5">1.2MW Utility-Scale Installation</p>
              <div className="flex items-end justify-between">
                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">location_on</span> Gujranwala
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span> 2024
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">bolt</span> 4,200 Panels
                  </div>
                </div>
                <button className="border border-primary text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-colors shrink-0">
                  View Project
                </button>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-56 w-full overflow-hidden">
              <img alt="Commercial Logistics Center" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB67wH2Ze3dej2mpH7wOdX4XH5ZIcCnjlwn5_AEdogoJ4CISNTUHWF8d-SqQgkh7qNZG_YImuvqQ60Sxg6y4JeiMe-8ma_LaVRvGJwuDI6Hxhn0vlzQGDPi3-0YR6BNjW-QgzWrJhwHW_ABTJ8fntsJETyF3AqRJc7EOOMqiXPEEygsfU_P1vtsjmxwwiTChArXeb7EDDArOYkYH9X72H5XIY7MkFa2qG3uCY26AkYydRg7vknvc_ovq6azlwf6I2e-Aw"/>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Commercial Logistics Center</h3>
              <p className="text-sm text-gray-500 mb-5">750kW Rooftop Array</p>
              <div className="flex items-end justify-between">
                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">location_on</span> Sialkot
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span> 2024
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">bolt</span> 2,800 Panels
                  </div>
                </div>
                <button className="border border-primary text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-colors shrink-0">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
