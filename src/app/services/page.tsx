import Link from 'next/link';

export default function Services() {
  return (
    <>
      <main>
        {/* BEGIN: Hero Section */}
        <section className="relative bg-gray-900 text-white pt-40 pb-24 md:pt-48 lg:pb-32" data-purpose="hero-section">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="Solar Farm" className="w-full h-full object-cover opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5jPJF5tW3diMMhiQxLI5fbl7-W3AmTggJrrtj2uKIu4VB-pR1MrQIqOvNi4YK9SpXTsu_OVD8mVUqq-xsHKdAT_yV4WUyD7dj3TkgYa6YEWI1x8TTfYHfI8-mrWA1JOsJsyF1eASyZuNukjC1XiXYPUidr39bSnyxPQdVfmfsO1dxloSi23EUtY2d7cTXeguucvZHV97gEglaydQae3gbo4hGB6NlaUTMQt0DPlHKOXe0hpbKVpNL" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-2xl">

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">Our Services</h1>
              <p className="text-lg text-gray-200 mb-10 max-w-xl">End-to-end solar energy solutions for homes, businesses, industries and agriculture.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm font-medium">
                <div className="flex items-center gap-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <svg className="w-6 h-6 text-[#2e7d32]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span>Expert<br/>Engineers</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <svg className="w-6 h-6 text-[#2e7d32]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span>Premium<br/>Quality</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <svg className="w-6 h-6 text-[#2e7d32]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span>On-time<br/>Delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <svg className="w-6 h-6 text-[#2e7d32]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span>After Sales<br/>Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BEGIN: What We Offer */}
        <section className="py-20 bg-gray-50" data-purpose="services-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-[#2e7d32] font-bold tracking-wider text-sm uppercase mb-2">What We Offer</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete <span className="text-[#2e7d32]">Solar</span> Solutions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">From consultation to installation and maintenance, we provide everything you need to switch to clean, renewable and affordable solar energy.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service Card 1 */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition">
                <img alt="Industrial Solar" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw3iG1EJ8T5q7MkGpCHBC_vA0MB7wLQWLLX5j_cwExmp74tNqrPgCWzpOsHpoIPw7mcIh0TF7kTjhC35JuqmsAH7WrNrqBLfQGS_vcB9t-_pVOggO57674X5NjBzexYj86x8eMTD5t3ujU1GxtPIOlU_5-wp836GfbZoBxaC0dJH4rcqJdDKTcET_DyuSvORogRGfOvEtUGcDI8G4Vs2SuI7sLr5sOILPofSmviHG79l2KJeHcdzRN" />
                <div className="p-6 relative">
                  <div className="absolute -top-8 left-6 bg-[#2e7d32] text-white p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mt-4 mb-2">Industrial Solar Solutions</h4>
                  <p className="text-gray-600 text-sm mb-4">High-performance solar systems for factories and large-scale industries to cut energy costs.</p>
                  <a className="text-[#f57c00] font-medium text-sm flex items-center hover:underline" href="#">Learn More &rarr;</a>
                </div>
              </div>
              {/* Service Card 2 */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition">
                <img alt="Residential Solar" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNM6V6G6EDM0nNICdIG-unE0tOzj4Lk0t0RKAOMtW74yPf55WIJehkdd5OOsAq_xAxGgbSFMP-5_8WCPMXDks_EszkfXs6IHa13tfQkEcGBMi8u10cdDAdz5r0xBuUbthNnp5z3AUxk7PbAyRTlZ5hbJYmHP1saQmIg3fhD4sFBXH_RAW_1M01XxHphwqq9xFZHgPLucxaaw7Yl12nMX_yE2fIMoc32eszQModbFQHc7-Sw1EnUqdD" />
                <div className="p-6 relative">
                  <div className="absolute -top-8 left-6 bg-[#f57c00] text-white p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mt-4 mb-2">Residential Solar Solutions</h4>
                  <p className="text-gray-600 text-sm mb-4">Smart and reliable solar solutions for homes to reduce bills and ensure energy independence.</p>
                  <a className="text-[#f57c00] font-medium text-sm flex items-center hover:underline" href="#">Learn More &rarr;</a>
                </div>
              </div>
              {/* Service Card 3 */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition">
                <img alt="Commercial Solar" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEqoU_wXXUaxTni-y1JxD39zQQbzWvO2oUP-yjM7UNS0eKtrjzFdf0C7cgVNkm9dc-deOr5xaDdz8DQueGxNe_vl2f89GBVxg3r104FX4JZu40kKRqNi8AjtbU6LlhJFxkYpUQRf_YSY2kHeyOeYBb08vQi5R-iVmZfz9AEzjwYHv36ZWnXRJxNDTnez09DQeBgFyQ4W-lsU2b_ZYVtX_7f7xSeK4NzQYQMhoftRHlR2qyjfPyWSwD" />
                <div className="p-6 relative">
                  <div className="absolute -top-8 left-6 bg-[#2e7d32] text-white p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mt-4 mb-2">Commercial Solar Solutions</h4>
                  <p className="text-gray-600 text-sm mb-4">Customized solar systems for businesses to boost sustainability and save operating costs.</p>
                  <a className="text-[#f57c00] font-medium text-sm flex items-center hover:underline" href="#">Learn More &rarr;</a>
                </div>
              </div>
              {/* Service Card 4 */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition">
                <img alt="Agricultural Solar" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmveAQF2de1hWTphmw1PUafC9jklvVtT4Nhrucpup8z7zwvd9sBUr1pNK6AuPUiZGvtTwKneHOy5c8Gu6I5sDjq7j8MLX6c-JlK4YuqfuM8K0aJ2lSD5iZBmH2ekkLnXxyrU3A7nMsIJjPZUZdATY_yZOEjwBrvL8lo8l84tYSEN0EtBLUIir4WuIbjE_kN9HkNyuUUgrZ6YZc72sH8vM3teNJ_FfOp49qyOddCYNCcnDTHi3_tfAV" />
                <div className="p-6 relative">
                  <div className="absolute -top-8 left-6 bg-[#f57c00] text-white p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mt-4 mb-2">Agricultural Solar Solutions</h4>
                  <p className="text-gray-600 text-sm mb-4">Power your farms and irrigation systems with clean, affordable and sustainable energy.</p>
                  <a className="text-[#f57c00] font-medium text-sm flex items-center hover:underline" href="#">Learn More &rarr;</a>
                </div>
              </div>
              {/* Service Card 5 */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition">
                <img alt="Net Metering" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnCuz0xKXPWECUBEIU9MSHHaxSi47GiBdYh1XFCFx0_CkiF8RqgFZyplj52cazSviRJKG_QQUYT-iqDb_Kh1LfAv9QvdtQx-dgdpPHtRjOJT8VHsbNJsqaAhNYWNWu2u88iCMO2m0tHwJLPKQ1bvaIlvPbPUqPLuqEPMTq97RYZLby42eIx4o-EoprlS70TxKzTEwvBsGDiK2HxWrX04o8YztWZQNvalkcRWDaNHLxAa-b6QRCI6zd" />
                <div className="p-6 relative">
                  <div className="absolute -top-8 left-6 bg-[#2e7d32] text-white p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mt-4 mb-2">Net Metering Solutions</h4>
                  <p className="text-gray-600 text-sm mb-4">Feed excess energy back to the grid and earn credits through net metering.</p>
                  <a className="text-[#f57c00] font-medium text-sm flex items-center hover:underline" href="#">Learn More &rarr;</a>
                </div>
              </div>
              {/* Service Card 6 */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition">
                <img alt="Battery Storage" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg02Z2M20WR2aP3m3MIQNbZIiIUvwbYMq7lhXk2O9QuLtc9d1LkG1XEGRtO9t2Smegdo0di2hDHIHYu5-D7ujOd_Ilaz4uWKUH2xvb1eUSTh_Vzij9p7QOUyi7_jsshtZJrEjbsdz9BZRPTk6d-Ui-ORkTtAnleQw6qikVPWwHlOJzHikpQNSD1qTQ88_NBxYDB2WYo_TIWwjnwMGEgaX2yzGqNsM69PIqXZLaFBEObWblZblXR6mv" />
                <div className="p-6 relative">
                  <div className="absolute -top-8 left-6 bg-[#f57c00] text-white p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mt-4 mb-2">Solar Battery Storage</h4>
                  <p className="text-gray-600 text-sm mb-4">Store excess solar energy and use it when you need it the most with advanced batteries.</p>
                  <a className="text-[#f57c00] font-medium text-sm flex items-center hover:underline" href="#">Learn More &rarr;</a>
                </div>
              </div>
              {/* Service Card 7 */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition">
                <img alt="O&M" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASSyIvpNBbAg9yL7whmza6e4Yy8_CdUWg6WB1VaBAOLCaoNlFmo59Cp2SK7CAi9mhqyGTtSn78dYgadCTnCmn2cgGMv9QXA-pMzR0dEGI2wwHX0y9tSvTcaH14eDMHVNLmRMjcdpmeyj34GP2qtUI8HYN39Ww_uyEldugmRQFNT5qLeOjwhQp37yPHSGugPw7tJxSIp4z-ICu7cLK_XQr392Dejh-ve25zYKUIfMPCexCL7fXmMbFw" />
                <div className="p-6 relative">
                  <div className="absolute -top-8 left-6 bg-[#2e7d32] text-white p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mt-4 mb-2">Operation &amp; Maintenance</h4>
                  <p className="text-gray-600 text-sm mb-4">Keep your solar system performing at its best with our professional O&amp;M services.</p>
                  <a className="text-[#f57c00] font-medium text-sm flex items-center hover:underline" href="#">Learn More &rarr;</a>
                </div>
              </div>
              {/* Service Card 8 */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition">
                <img alt="EV Charging" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCouCo-EjGPZGciok8n4qCLB_3ZNfL9qq4lRG-V7goTt06pKAG8Pqu9P6hpQMmWu3Ur8MSzwtFtv33sdpXrl5rwbpobNGx8f7o398dfQqmjD4f4xZ0FV-SJxvP-fn58fGquTbrbEP6PpCteq8ZQwWbayxHLgpoEwPGfRXA4t1zmlAbY4DE9MQN7j1dmuv-yvgIZB0-9Rtv1yq7yMebcJXIscSdW1QR_Icl31QdOEuMLfUX9lyAuCazN" />
                <div className="p-6 relative">
                  <div className="absolute -top-8 left-6 bg-[#f57c00] text-white p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mt-4 mb-2">EV Charging Solutions</h4>
                  <p className="text-gray-600 text-sm mb-4">Smart and fast EV charging solutions for homes, businesses and public spaces.</p>
                  <a className="text-[#f57c00] font-medium text-sm flex items-center hover:underline" href="#">Learn More &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BEGIN: Our Process */}
        <section className="py-20 bg-white" data-purpose="process-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#e8f5e9] rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-[#2e7d32] font-bold tracking-wider text-sm uppercase mb-2">Our Process</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We <span className="text-[#2e7d32]">Work</span></h2>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start relative">
              <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-green-200 -z-10"></div>
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/6 mb-8 md:mb-0 relative">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center border-2 border-[#2e7d32] mb-4 z-10 shadow-sm">
                  <svg className="w-8 h-8 text-[#2e7d32]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </div>
                <span className="text-[#2e7d32] font-bold text-xl mb-1">01</span>
                <h4 className="font-bold text-gray-900 mb-2">Consultation</h4>
                <p className="text-xs text-gray-600">We understand your needs and analyze feasibility.</p>
                <div className="hidden md:flex absolute top-8 right-0 translate-x-1/2 -translate-y-1/2 z-0 text-[#2e7d32] bg-[#e8f5e9] w-8 h-8 items-center justify-center rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/6 mb-8 md:mb-0 relative">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center border-2 border-[#2e7d32] mb-4 z-10 shadow-sm">
                  <svg className="w-8 h-8 text-[#2e7d32]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </div>
                <span className="text-[#2e7d32] font-bold text-xl mb-1">02</span>
                <h4 className="font-bold text-gray-900 mb-2">System Design</h4>
                <p className="text-xs text-gray-600">Our experts design the best solar solution for your requirement.</p>
                <div className="hidden md:flex absolute top-8 right-0 translate-x-1/2 -translate-y-1/2 z-0 text-[#2e7d32] bg-[#e8f5e9] w-8 h-8 items-center justify-center rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/6 mb-8 md:mb-0 relative">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center border-2 border-[#2e7d32] mb-4 z-10 shadow-sm">
                  <svg className="w-8 h-8 text-[#f57c00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </div>
                <span className="text-[#2e7d32] font-bold text-xl mb-1">03</span>
                <h4 className="font-bold text-gray-900 mb-2">Proposal</h4>
                <p className="text-xs text-gray-600">We provide a transparent proposal with complete breakdown.</p>
                <div className="hidden md:flex absolute top-8 right-0 translate-x-1/2 -translate-y-1/2 z-0 text-[#2e7d32] bg-[#e8f5e9] w-8 h-8 items-center justify-center rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
              {/* Step 4 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/6 mb-8 md:mb-0 relative">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center border-2 border-[#2e7d32] mb-4 z-10 shadow-sm">
                  <svg className="w-8 h-8 text-[#2e7d32]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </div>
                <span className="text-[#2e7d32] font-bold text-xl mb-1">04</span>
                <h4 className="font-bold text-gray-900 mb-2">Installation</h4>
                <p className="text-xs text-gray-600">Professional installation with high-quality equipment.</p>
                <div className="hidden md:flex absolute top-8 right-0 translate-x-1/2 -translate-y-1/2 z-0 text-[#2e7d32] bg-[#e8f5e9] w-8 h-8 items-center justify-center rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
              {/* Step 5 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/6 mb-8 md:mb-0 relative">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center border-2 border-[#2e7d32] mb-4 z-10 shadow-sm">
                  <svg className="w-8 h-8 text-[#2e7d32]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </div>
                <span className="text-[#2e7d32] font-bold text-xl mb-1">05</span>
                <h4 className="font-bold text-gray-900 mb-2">Commissioning</h4>
                <p className="text-xs text-gray-600">System testing and grid connection for optimal performance.</p>
                <div className="hidden md:flex absolute top-8 right-0 translate-x-1/2 -translate-y-1/2 z-0 text-[#2e7d32] bg-[#e8f5e9] w-8 h-8 items-center justify-center rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
              {/* Step 6 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/6 mb-0 relative">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center border-2 border-[#2e7d32] mb-4 z-10 shadow-sm">
                  <svg className="w-8 h-8 text-[#2e7d32]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </div>
                <span className="text-[#2e7d32] font-bold text-xl mb-1">06</span>
                <h4 className="font-bold text-gray-900 mb-2">Support</h4>
                <p className="text-xs text-gray-600">Lifetime support and maintenance for peace of mind.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BEGIN: Why Choose Us */}
        <section className="py-20 rounded-3xl" data-purpose="why-choose-us" style={{ backgroundColor: "rgb(253, 245, 237)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why Choose <span className="text-[#2e7d32]">Soltronic Energy?</span></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#e8f5e9] p-3 rounded-lg text-[#2e7d32]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Experienced &amp;<br/>Certified Team</h4>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#e8f5e9] p-3 rounded-lg text-[#2e7d32]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Quality Products<br/>&amp; Technology</h4>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#e8f5e9] p-3 rounded-lg text-[#2e7d32]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Customized<br/>Solutions</h4>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#e8f5e9] p-3 rounded-lg text-[#2e7d32]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Reliable After<br/>Sales Support</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-[400px]">
                <img alt="Solar Panels" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOjma9--40rkqfgj98MxuyiMkxFrAMY0iDB5Sm8cciAAlcPZaBXpMWUt3t812qJRjndUfg0Sj1bXzWC5GX5MMqgAAFVEm7nDCfNC5RCCGJXm7bOc5Nra9y2PsT4tDCdcvWA5BFGyGY7UjHZ6SGp6QXOtXVe4qlO3CdjLAfaWJJcG6HMw0dqMqWOjbWZGnDtJU-4za57LswX3aMMpz5L-SxoleouNuccT5mePXlS9m4oATBUO8J2sBR" />
                <div className="absolute bottom-6 right-6 bg-white p-6 rounded-xl shadow-lg max-w-[250px]">
                  <h4 className="font-bold text-lg mb-2">Clean Energy<br/>Better Future</h4>
                  <p className="text-sm text-gray-600 mb-4">Join thousands of satisfied customers in building a sustainable tomorrow.</p>
                  <div className="w-10 h-10 bg-[#e8f5e9] rounded-full flex items-center justify-center text-[#2e7d32]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BEGIN: CTA Section */}
        <section className="py-20" data-purpose="footer-cta">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#2e7d32] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-xl">
              <div className="flex items-center gap-4 mb-6 md:mb-0">
                <div className="bg-white/20 p-4 rounded-full">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to Go Solar?</h3>
                  <p className="text-green-100">Get a free consultation and personalized quote for your solar solution.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <a className="bg-white text-[#2e7d32] px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition flex items-center gap-2" href="https://wa.me/923277770090" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Talk to Expert
                </a>
                <a className="bg-[#f57c00] text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition flex items-center gap-2" href="/contact">
                  Get Free Quote <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
