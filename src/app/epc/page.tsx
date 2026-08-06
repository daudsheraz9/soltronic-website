import Link from 'next/link';

export default function EPCPage() {
  return (
    <main className="bg-white pb-10 pt-32 md:pt-40">
      {/* BEGIN: Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mb-4">
        <nav className="text-sm text-gray-500 flex items-center gap-2">
          <Link className="hover:text-primary" href="/">Home</Link>
          <i className="fa-solid fa-chevron-right text-[10px]"></i>
          <Link className="hover:text-primary" href="/services">EPC Projects</Link>
          <i className="fa-solid fa-chevron-right text-[10px]"></i>
          <span className="text-gray-800 font-medium">Commercial Logistics Center</span>
        </nav>
      </div>
      {/* END: Breadcrumbs */}

      {/* BEGIN: Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Images */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <img alt="Commercial Logistics Center" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHHzw7xrbNCT93E6y7pZdOzxHlZzpgNJxsixYEckdvEjDdqje47SUJ5cVEdZrPPAi4RAR4dOybrgRkc2W-rveF7qlQUsCk7HsJUIdfDzLmUCytxsQLMGrbkqeFufxggtKcYv7XmeoWGzlLGocIryuVS-doOTr4nhRqn3uIp54KpetNWZnhj3hONLYIWef-jWYT_S87TJ7iiyHT1EUPcuar7FUY_QZETsCBjhP5citmY82WEINyfHT4" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
                <i className="fa-solid fa-circle-check text-primary text-sm"></i>
                <span className="text-sm font-semibold text-primary">Completed</span>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              <img alt="Thumbnail 1" className="w-24 h-16 object-cover rounded cursor-pointer border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0hINym4-eEeUotbR26yL5zg2kUwatsTEuWTQLy6uvxLMmnU8rhiBOwzUtXF9z04bSpS_ICO2ht4lMZzw3m4bVOoNOxYzmDnADN8sPZ65AKhnbAb4n0lWp8vwXmak30TjQzl4XsvvC80lxEw6A5Wy69fR5AtSqeQnO10oE3rUnN8yhMlEVTQbrJOBEVseLJ0osDXVi0Vf94AEM7MMDpOVISrVaw0JD0F5by4S3TaGtL5CI0_Ciy9F0" />
              <img alt="Thumbnail 2" className="w-24 h-16 object-cover rounded cursor-pointer opacity-70 hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7_WijUflu2QhVSN2dCOc-clLVqZ_yDYuz9RidBzYyVK2rG5_pye7fvqM1SU8zDK683xrXZl80cGsY4xQp-qo0C8JTj2zhpIB3UFL5obeH_Nr8T1LZNkkX2t3arA5PXRJu3LCWpUZmk5UTtlDlUJB0IpJRNRiLegfDWncwMR8jNUO_896SUiP7-0Zq5YZfQrjXwl6r_fbXyYDDwlqdr7SBA3hMhISE028Mv0Pv5elI4KfQ0VkZioTR" />
              <img alt="Thumbnail 3" className="w-24 h-16 object-cover rounded cursor-pointer opacity-70 hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaHYQt8-A5qc87YsmMtjJBIz-5egkL0GE5GOUuGto4hfvFaEFqkluNYj_khx_uyMGC5oupbgmGo5bp45DTNhjeuIYRZdYhbpRi53d3k3acBCt2HhWaii1Fh9imF-2V_4TUGEJLGmLJnv667XkpO6Dkx7ceI3_vFWykK8OO_fZIkxuq2dsi5QN5KptZfavr0j58hpgviftmFTGJB2QUy1M0Dr8775sqEdC0QZ8XOrXB-fSzB5nwZGV6" />
              <img alt="Thumbnail 4" className="w-24 h-16 object-cover rounded cursor-pointer opacity-70 hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYBdKtHxwCEg_UJAmPwElrsVscPj_RJzhqw2K9b17Xteik9Vm7vMtDe5zS59cO8C8zLjBTLLA69rhzSOC52GdQhYZ1AX4b5IVqJxCkglOAVqukD3YrNxWGWKTYNQMU2COxZgWLftrDsTB1Vu-B68TSn4RAtwjTs4spcYlvfmoL_5JDgDYTe6lhsESg2UPHWMvN9q3KSaEZ3-aVPg89F1sbzjZ-iSvlu-CONWdVtul9dbmnDw22NM7e" />
              <div className="w-24 h-16 bg-gray-100 rounded flex items-center justify-center cursor-pointer text-gray-600 font-medium hover:bg-gray-200">
                +2
              </div>
            </div>
          </div>
          {/* Right: Details */}
          <div className="lg:col-span-5 flex flex-col">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">Commercial Logistics Center – Lahore</h1>
            <p className="text-lg text-primary font-semibold mb-6">750 kW Rooftop Solar Project</p>
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6 text-sm">
              <div className="flex items-center gap-2"><i className="fa-solid fa-location-dot"></i> Lahore, Pakistan</div>
              <div className="flex items-center gap-2"><i className="fa-regular fa-calendar"></i> 2024</div>
              <div className="flex items-center gap-2"><i className="fa-solid fa-industry"></i> Commercial</div>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              A high-efficiency rooftop solar solution designed to reduce energy costs and carbon footprint for a large-scale logistics facility.
            </p>
            <div className="flex flex-col gap-4 mb-8">
              <button className="bg-primary hover:bg-green-800 text-white py-3 px-6 rounded-sm font-semibold flex items-center justify-center gap-2 transition-colors w-full sm:w-auto">
                Request Similar Quote <i className="fa-solid fa-arrow-right"></i>
              </button>
              <button className="border border-primary text-primary hover:bg-green-50 py-3 px-6 rounded-sm font-semibold flex items-center justify-center gap-2 transition-colors w-full sm:w-auto">
                <i className="fa-solid fa-download"></i> Download Case Study
              </button>
            </div>
            {/* Snapshot Widget */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 mt-auto">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Project Snapshot</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                <div className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-full shadow-sm text-primary"><i className="fa-solid fa-bolt"></i></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">System Size</p>
                    <p className="font-bold text-gray-900">750 kW</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-full shadow-sm text-primary"><i className="fa-solid fa-chart-line"></i></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Annual Generation</p>
                    <p className="font-bold text-gray-900">1.1 GWh</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-full shadow-sm text-primary"><i className="fa-solid fa-cloud"></i></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">CO₂ Offset (Yearly)</p>
                    <p className="font-bold text-gray-900">~860 Tonnes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-full shadow-sm text-primary"><i className="fa-regular fa-clock"></i></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Completion Time</p>
                    <p className="font-bold text-gray-900">8 Weeks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: Hero Section */}

      {/* BEGIN: Content Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-200 mt-2">
        <div className="flex space-x-8 overflow-x-auto">
          <a className="text-primary border-b-2 border-primary font-semibold py-4 px-1 text-sm whitespace-nowrap" href="#">Overview</a>
          <a className="py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap" href="#">Technical Details</a>
          <a className="py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap" href="#">Equipment Used</a>
          <a className="py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap" href="#">Gallery</a>
          <a className="py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap" href="#">Downloads</a>
        </div>
      </section>
      {/* END: Content Tabs */}

      {/* BEGIN: Project Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Soltronics Energy executed a turnkey EPC solution for a leading logistics facility in Lahore. The system is engineered to deliver maximum efficiency, reliability, and long-term savings.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-700">
                <i className="fa-solid fa-circle-check text-primary mt-1"></i> Tailored design for high energy demand
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <i className="fa-solid fa-circle-check text-primary mt-1"></i> Advanced monitoring &amp; performance tracking
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <i className="fa-solid fa-circle-check text-primary mt-1"></i> Grid-connected rooftop installation
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <i className="fa-solid fa-circle-check text-primary mt-1"></i> Comprehensive O&amp;M support
              </li>
            </ul>
          </div>
          {/* Key Highlights */}
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Key Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded shadow-sm border border-gray-100 flex gap-4 items-center">
                <div className="bg-orange-50 text-secondary p-3 rounded-full flex-shrink-0">
                  <i className="fa-regular fa-sun text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">High Efficiency Modules</h4>
                  <p className="text-xs text-gray-500 mt-1">Tier 1 Bifacial Panels</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm border border-gray-100 flex gap-4 items-center">
                <div className="bg-orange-50 text-secondary p-3 rounded-full flex-shrink-0">
                  <i className="fa-solid fa-desktop text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Smart Monitoring System</h4>
                  <p className="text-xs text-gray-500 mt-1">Real-time insights</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm border border-gray-100 flex gap-4 items-center">
                <div className="bg-orange-50 text-secondary p-3 rounded-full flex-shrink-0">
                  <i className="fa-solid fa-shield-halved text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">25+ Years Performance</h4>
                  <p className="text-xs text-gray-500 mt-1">Durable &amp; Reliable</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm border border-gray-100 flex gap-4 items-center">
                <div className="bg-orange-50 text-secondary p-3 rounded-full flex-shrink-0">
                  <i className="fa-solid fa-chart-pie text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Reduced Energy Cost by 40%+</h4>
                  <p className="text-xs text-gray-500 mt-1">For the client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: Project Overview */}

      {/* BEGIN: Key Figures Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-green-50 rounded-xl p-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8 md:gap-4 border border-green-100">
          <h3 className="text-xl font-bold text-gray-900 whitespace-nowrap">Key Figures</h3>
          <div className="flex flex-wrap justify-center md:justify-around w-full gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">750 <span className="text-lg">kW</span></div>
              <div className="text-sm text-gray-600 font-medium">Installed Capacity</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-green-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">1,050,000 <span className="text-lg">kWh</span></div>
              <div className="text-sm text-gray-600 font-medium">Annual Generation</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-green-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">~40%</div>
              <div className="text-sm text-gray-600 font-medium">Energy Cost Saved</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-green-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">860 <span className="text-lg">Tonnes</span></div>
              <div className="text-sm text-gray-600 font-medium">CO₂ Offset / Year</div>
            </div>
          </div>
        </div>
      </section>
      {/* END: Key Figures Banner */}

      {/* BEGIN: Other Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Other EPC Projects</h2>
          <a className="text-secondary hover:text-orange-700 font-medium flex items-center gap-2" href="#">View All Projects <i className="fa-solid fa-arrow-right text-sm"></i></a>
        </div>
        <div className="relative">
          {/* Nav buttons (visual only for this static demo) */}
          <button className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md border border-gray-100 text-gray-500 hover:text-primary z-10 hidden sm:block">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md border border-gray-100 text-gray-500 hover:text-primary z-10 hidden sm:block">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Project 1 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-48">
                <img alt="Industrial Textile Mill" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZLfArQGGT2FA31Q1rTyIKtHQElYcmmrGhpSom6ir0OmQj5eXmuQYoL7flhtNlW0aE9d7cw-LHlO_z6L_Px54wuvw9i9AV2BEEMVr1MscwVXjuZXRbnCyjp0cMoJLmiQqFcIVLXJlb1zAcp0jiwhp7AAHZwnc1bPmT_TYWYSg8qaOl03dhxVdsOip4No70Liazb611FwwGbW4ygIoNTGGjnCjTMq5P9Qs7k6pq_fWZKhc0uBzhfDm1" />
                <span className="absolute top-3 right-3 bg-white text-primary text-xs font-bold px-2 py-1 rounded-sm shadow-sm">Completed</span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-gray-900 text-lg mb-1">Industrial Textile Mill</h3>
                <p className="text-sm text-gray-500 mb-3">Faisalabad</p>
                <div className="flex gap-3 text-xs text-gray-600 mb-4 font-medium">
                  <span className="">1.2 MW</span>
                  <span className="">•</span>
                  <span className="">Industrial</span>
                </div>
                <div className="flex gap-4 text-xs text-gray-500 mb-6">
                  <span className="flex items-center gap-1"><i className="fa-regular fa-calendar"></i> 2024</span>
                  <span className="flex items-center gap-1"><i className="fa-solid fa-solar-panel"></i> 1,850 Panels</span>
                </div>
                <button className="mt-auto w-full border border-primary text-primary hover:bg-green-50 py-2 rounded-sm font-medium transition-colors text-sm">View Project</button>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-48">
                <img alt="Hotel &amp; Resort" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAL7XQONB6vqmZ7p8dwk8QSQPz7GS4FnKJQ1oobUi2s_Jmj_eQ_N7d33K68DK07D1dNV1QP6Yd8tjfwe4YBZb7e2QSzPx3R1GVTdcwwkLwEEzKvkekKB9BuoqWuYmfYm9oWXT7GkP01ghqKiY6dP1J5Zhb4GD2DqFNVpV16vz3aa0IM8VB8MeYKVgQboFmRPY9NyvqbIAux50IGKh9i0vmy5xqAudah0hMw7KxjQQLilOiic2Kca7K" />
                <span className="absolute top-3 right-3 bg-white text-primary text-xs font-bold px-2 py-1 rounded-sm shadow-sm">Completed</span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-gray-900 text-lg mb-1">Hotel &amp; Resort – Islamabad</h3>
                <div className="flex gap-3 text-xs text-gray-600 mb-4 mt-2 font-medium">
                  <span className="">450 kW</span>
                  <span className="">•</span>
                  <span className="">Commercial</span>
                </div>
                <div className="flex gap-4 text-xs text-gray-500 mb-6">
                  <span className="flex items-center gap-1"><i className="fa-regular fa-calendar"></i> 2024</span>
                  <span className="flex items-center gap-1"><i className="fa-solid fa-solar-panel"></i> 980 Panels</span>
                </div>
                <button className="mt-auto w-full border border-primary text-primary hover:bg-green-50 py-2 rounded-sm font-medium transition-colors text-sm">View Project</button>
              </div>
            </div>
            {/* Project 3 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-48">
                <img alt="University Campus" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB28L-rn3T8c6R39_eBYj8Xy1MeZkVy3JigTMdGYqlFbCc7aOm_pZeOKKAmd8yfBZvrP7TRlleBZR_ZcDhGpRtYpvVSZMTYaDRMnxLzVl7J5U5t7_KhaRrnhLcfAFHikfNt1MSamQOhlIHlxsrlcBO9rQBkE1_qCtVUf3Dpe-4HSsUBSHjKGiS39RMmlsIioTKyIoLtj3af88zi4cHoAHSW1o5RcFVFzeeTRiez0XAVyqcZSNxm_BWl" />
                <span className="absolute top-3 right-3 bg-white text-primary text-xs font-bold px-2 py-1 rounded-sm shadow-sm">Completed</span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-gray-900 text-lg mb-1">University Campus – Multan</h3>
                <div className="flex gap-3 text-xs text-gray-600 mb-4 mt-2 font-medium">
                  <span className="">300 kW</span>
                  <span className="">•</span>
                  <span className="">Institutional</span>
                </div>
                <div className="flex gap-4 text-xs text-gray-500 mb-6">
                  <span className="flex items-center gap-1"><i className="fa-regular fa-calendar"></i> 2023</span>
                  <span className="flex items-center gap-1"><i className="fa-solid fa-solar-panel"></i> 720 Panels</span>
                </div>
                <button className="mt-auto w-full border border-primary text-primary hover:bg-green-50 py-2 rounded-sm font-medium transition-colors text-sm">View Project</button>
              </div>
            </div>
            {/* Project 4 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-48">
                <img alt="Cold Storage Facility" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhogfTghdo-dDKqOPvgqmIXoiETLj_PNFKdENDF_MJP9CPgsWOSMzZg-iXMPipluj_CQnmzac-c8AoloCK1oqtZSRtiljIJQShGa8lgVbChTBKwcaLb1iqHhlPSjIvkvO-oVilbPeFexLwpvGw99XJXEqMcy4Bte_m8O4iGqj0eUqkCOYYBXfvrRq5DnblOOEW5dS_cExo8wJu_KUG3R8MYYua49-PsKWHBkq9fBIUxw1Z5yEw9uuI" />
                <span className="absolute top-3 right-3 bg-orange-50 text-secondary text-xs font-bold px-2 py-1 rounded-sm shadow-sm">Ongoing</span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-gray-900 text-lg mb-1">Cold Storage Facility – Karachi</h3>
                <div className="flex gap-3 text-xs text-gray-600 mb-4 mt-2 font-medium">
                  <span className="">1.5 MW</span>
                  <span className="">•</span>
                  <span className="">Industrial</span>
                </div>
                <div className="flex gap-4 text-xs text-gray-500 mb-6">
                  <span className="flex items-center gap-1"><i className="fa-regular fa-calendar"></i> 2025</span>
                  <span className="flex items-center gap-1"><i className="fa-solid fa-solar-panel"></i> 2,700 Panels</span>
                </div>
                <button className="mt-auto w-full border border-primary text-primary hover:bg-green-50 py-2 rounded-sm font-medium transition-colors text-sm">View Project</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: Other Projects */}

      {/* BEGIN: CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-green-50 rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 right-0 left-auto w-1/2 hidden md:block">
            <img alt="Solar Panels" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_88QsqsX4Iwr-UzHfe4ckDZQhUVb-IKHwWOoazolr189TQ6sukf6fispG7eY36mDQmxwqIkF6B0I4OHyBt9FOip5hdWhuPM1y35TbeT9QJASLPsOPmjVsqCDRH6p0BD_EiAlnXCOZWjRVc8Nb9eHDmRnF-PZECljgg7ao8DiOB6TnsvnuRVCeQQqb9JZd8xuVpdL3earhYkr9KaEM7ZHVgi8RArlyJz0p0N_kB7MHwgkhN2pKQbgZ" style={{ clipPath: 'polygon(20% 0px, 100% 0px, 100% 100%, 0px 100%)' }} />
          </div>
          <div className="relative z-10 p-10 md:p-16 max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Have a similar project in mind?</h2>
            <p className="text-gray-600 mb-8 text-lg">Let our experts design the best solution for your needs.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a className="bg-secondary hover:bg-orange-700 text-white text-center py-3 px-6 rounded-sm font-bold transition-colors shadow-sm" href="#">Talk to an Expert</a>
              <a className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 text-center py-3 px-6 rounded-sm font-bold transition-colors shadow-sm" href="#">Request Proposal</a>
            </div>
          </div>
        </div>
      </section>
      {/* END: CTA Section */}
    </main>
  );
}
