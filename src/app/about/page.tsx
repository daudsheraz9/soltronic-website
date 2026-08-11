import Link from 'next/link';

export default function Team() {
  return (
    <main>

      {/* BEGIN: Hero Section */}
      <section className="relative bg-surface pt-12 pb-12 md:pt-16 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">Meet the Experts<br />
              <span className="text-primary text-brand">Powering a Greener Future</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Our team of passionate professionals is dedicated to delivering innovative, sustainable, and reliable solar solutions for a brighter tomorrow.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img alt="Team at solar farm" className="w-full h-full object-cover object-center opacity-40 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC44mKqqkBEPPlnfHrDlsVIIl59TuGkbC7L4EJCPHClU6kSDjOZ1eXkIucpEoFGdx7B6OOXcYCTcGMZBJN_11D-J3BVve3UzG1zAVHC2L9iZ9fZyuhDItE9kGB4lC3tv5LK3A3A9S2bRteJ6iS15eY3LfZJGMMq71517mSgFIqleB8N-hBDzRfP9uOUyrYDQSU0nwKe3gAXlPKXJpup2spwynG_7q-QlQ2VKzfgh2NXcyoBD8Vj4Bqc" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
        </div>
      </section>
      {/* END: Hero Section */}
      
      {/* BEGIN: Leadership Section */}
      <section className="pt-8 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Leadership</h2>
          <p className="text-gray-500 mb-8">Guiding a sustainable tomorrow</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Leader 1 */}
            <div className="bg-surface rounded-2xl p-6 shadow-card text-left transition-transform hover:-translate-y-1">
              <img alt="Faheem Maalik" className="w-full h-64 object-cover object-top rounded-xl mb-6" src="/CEO-3%20(1).png" />
              <h3 className="text-xl font-bold text-gray-900">Faheem Maalik</h3>
              <p className="text-brand font-medium text-sm mb-4">CEO &amp; Founder</p>
              <p className="text-gray-600 text-sm mb-6">Leading the vision for a cleaner, brighter tomorrow.</p>
              <a className="text-gray-400 hover:text-blue-600 transition-colors" href="#"><i className="fa-brands fa-linkedin text-xl"></i></a>
            </div>
            {/* Leader 2 */}
            <div className="bg-surface rounded-2xl p-6 shadow-card text-left transition-transform hover:-translate-y-1">
              <img alt="Khursheed Abbas" className="w-full h-64 object-cover object-top rounded-xl mb-6" src="/cmo.jpg" />
              <h3 className="text-xl font-bold text-gray-900">Khursheed Abbas</h3>
              <p className="text-brand font-medium text-sm mb-4">CMO</p>
              <p className="text-gray-600 text-sm mb-6">Driving innovation through marketing and expertise.</p>
              <a className="text-gray-400 hover:text-blue-600 transition-colors" href="#"><i className="fa-brands fa-linkedin text-xl"></i></a>
            </div>
            {/* Leader 3 */}
            <div className="bg-surface rounded-2xl p-6 shadow-card text-left transition-transform hover:-translate-y-1">
              <img alt="Muhammad Waseem Bhatti" className="w-full h-64 object-cover object-top rounded-xl mb-6" src="/coo.png" />
              <h3 className="text-xl font-bold text-gray-900">Muhammad Waseem Bhatti</h3>
              <p className="text-brand font-medium text-sm mb-4">COO</p>
              <p className="text-gray-600 text-sm mb-6">Ensuring excellence in every step we take.</p>
              <a className="text-gray-400 hover:text-blue-600 transition-colors" href="#"><i className="fa-brands fa-linkedin text-xl"></i></a>
            </div>
          </div>
        </div>
      </section>
      {/* END: Leadership Section */}
      
      {/* BEGIN: Departments Section */}
      <section className="pt-8 pb-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Departments</h2>
          <p className="text-gray-500 mb-8">Dedicated teams building a sustainable future together</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-4"><i className="fa-solid fa-gear text-xl"></i></div>
              <h4 className="font-semibold text-gray-900 text-sm mb-2">Engineering</h4>
              <p className="text-xs text-gray-500">Designing innovative solar solutions</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-4"><i className="fa-solid fa-list-check text-xl"></i></div>
              <h4 className="font-semibold text-gray-900 text-sm mb-2">Project Management</h4>
              <p className="text-xs text-gray-500">Delivering projects on time and on budget</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-4"><i className="fa-solid fa-handshake text-xl"></i></div>
              <h4 className="font-semibold text-gray-900 text-sm mb-2">Sales &amp; Consulting</h4>
              <p className="text-xs text-gray-500">Helping you find the right solutions</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-4"><i className="fa-solid fa-bolt text-xl"></i></div>
              <h4 className="font-semibold text-gray-900 text-sm mb-2">Operations</h4>
              <p className="text-xs text-gray-500">Ensuring smooth and reliable performance</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-4"><i className="fa-solid fa-headset text-xl"></i></div>
              <h4 className="font-semibold text-gray-900 text-sm mb-2">Customer Support</h4>
              <p className="text-xs text-gray-500">Supporting you every step</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-4"><i className="fa-solid fa-wrench text-xl"></i></div>
              <h4 className="font-semibold text-gray-900 text-sm mb-2">Installation Teams</h4>
              <p className="text-xs text-gray-500">Expert installation for lasting impact</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img alt="Team meeting" className="rounded-xl h-48 w-full object-cover col-span-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC44mKqqkBEPPlnfHrDlsVIIl59TuGkbC7L4EJCPHClU6kSDjOZ1eXkIucpEoFGdx7B6OOXcYCTcGMZBJN_11D-J3BVve3UzG1zAVHC2L9iZ9fZyuhDItE9kGB4lC3tv5LK3A3A9S2bRteJ6iS15eY3LfZJGMMq71517mSgFIqleB8N-hBDzRfP9uOUyrYDQSU0nwKe3gAXlPKXJpup2spwynG_7q-QlQ2VKzfgh2NXcyoBD8Vj4Bqc" />
              <img alt="Solar farm" className="rounded-xl h-48 w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBF4Ee6XZ31Uevxbz_eqfmTwAXfU5_Mo21tykrwXdL6mTsUbQmlMMXJEx05iXFOIeoqNeO2kg1pX93DeGM89k5vlYNmeJoYsjWB7Ixlw10uCDpHcyYV3GE64ZMoNto-6EcJ6NyU03ZW0gCitby8GVX4dY8biHjRtgXr_slW-BVC6pPKJfATRwYHadIBWDcjI1SZ21svnExUhN9Psc5haDx5eISdSqz4vrJZdVl8-XgZCjMXYRaIx05" />
              <img alt="Solar panel close up" className="rounded-xl h-48 w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdxqcHdwhEowLKAbrgfVByq1QzsuEoqN3ixcOFuCosuUT3P6khB5xR99yrgstkKCb_7gtPxi9DuOzDhGaTe4V8adliXYAaQNQuiNQ-WJWDnNlXAsasu7BUM7-cBuSc7Mn0WNLSBMG-R4K8ta31NUFv_Xf1tjORqLJUs_8SmtataUL0KoJN6kpzb21Jj0d67MkKlvmuobQwV4ipNiuluncycHaLC_fYEc2gI105_quZ13tU6j-B6Rdx" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Culture</h2>
              <p className="text-gray-600 mb-8">We believe in teamwork, respect, and a shared vision for a better tomorrow. Together, we create solutions that power progress and protect our planet.</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3"><div className="w-10 h-10 bg-brand/10 text-brand rounded-lg flex items-center justify-center"><i className="fa-solid fa-lightbulb"></i></div><span className="font-semibold text-gray-900">Innovation</span></div>
                <div className="flex items-center gap-3"><div className="w-10 h-10 bg-brand/10 text-brand rounded-lg flex items-center justify-center"><i className="fa-solid fa-leaf"></i></div><span className="font-semibold text-gray-900">Sustainability</span></div>
                <div className="flex items-center gap-3"><div className="w-10 h-10 bg-brand/10 text-brand rounded-lg flex items-center justify-center"><i className="fa-solid fa-shield-halved"></i></div><span className="font-semibold text-gray-900">Integrity</span></div>
                <div className="flex items-center gap-3"><div className="w-10 h-10 bg-brand/10 text-brand rounded-lg flex items-center justify-center"><i className="fa-solid fa-star"></i></div><span className="font-semibold text-gray-900">Excellence</span></div>
                <div className="flex items-center gap-3"><div className="w-10 h-10 bg-brand/10 text-brand rounded-lg flex items-center justify-center"><i className="fa-solid fa-users"></i></div><span className="font-semibold text-gray-900">Customer Focus</span></div>
                <div className="flex items-center gap-3"><div className="w-10 h-10 bg-brand/10 text-brand rounded-lg flex items-center justify-center"><i className="fa-solid fa-check-circle"></i></div><span className="font-semibold text-gray-900">Safety</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: Departments Section */}
      
      {/* BEGIN: Achievements Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Achievements</h2>
          <p className="text-gray-500 mb-12">Numbers that drive a brighter tomorrow</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm text-center">
              <i className="fa-solid fa-calendar-check text-brand text-2xl mb-3"></i>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">10+</h3>
              <p className="text-xs text-gray-500">Years Experience</p>
            </div>
            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm text-center">
              <i className="fa-solid fa-user-gear text-brand text-2xl mb-3"></i>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">250+</h3>
              <p className="text-xs text-gray-500">Certified Engineers</p>
            </div>
            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm text-center">
              <i className="fa-solid fa-solar-panel text-brand text-2xl mb-3"></i>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">850+</h3>
              <p className="text-xs text-gray-500">Successful Installations</p>
            </div>
            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm text-center">
              <i className="fa-solid fa-face-smile text-brand text-2xl mb-3"></i>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">1,200+</h3>
              <p className="text-xs text-gray-500">Happy Clients</p>
            </div>
            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm text-center">
              <i className="fa-solid fa-bolt text-brand text-2xl mb-3"></i>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">150M+</h3>
              <p className="text-xs text-gray-500">Units of KWh Generated</p>
            </div>
          </div>
        </div>
      </section>
      

      {/* END: Achievements Section */}
      
      {/* BEGIN: CTA Section */}
      <section className="pb-12 pt-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2e7d32] rounded-2xl overflow-hidden p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center">
            <div className="md:w-1/2 flex flex-col items-center text-center">
              <span className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-4 block">Join Our Team</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Build a Sustainable Future Together</h2>
              <p className="text-white/90 text-lg mb-8 max-w-md mx-auto">Be part of a passionate team driving real change and a cleaner tomorrow.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a className="bg-[#f57c00] hover:bg-[#ff9800] text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2" href="#">
                  View Careers <i className="fa-solid fa-arrow-right"></i>
                </a>
                <a className="border-2 border-white/50 hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-colors" href="#">
                  Contact HR
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-end">
              <img alt="Solar engineers illustration" className="w-full max-w-md object-contain rounded-2xl" src="/solar_team.png" />
            </div>
          </div>
        </div>
      </section>
      {/* END: CTA Section */}
    </main>
  );
}
