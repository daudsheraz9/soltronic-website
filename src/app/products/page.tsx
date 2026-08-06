import Link from 'next/link';
import GreenSketchHeader from '@/components/GreenSketchHeader';

export default function Products() {
  return (
    <div className="bg-gray-50 text-slate-700">
      {/* TopNavBar */}


      {/* Hero Section */}
      <GreenSketchHeader />

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-8">
            <aside className="w-full md:w-80 h-fit flex-shrink-0 bg-white text-gray-800 p-6 md:p-8 rounded-[2rem] border border-gray-200 shadow-sm flex flex-col gap-6 font-sans">
              {/* Header */}
              <div className="flex items-center gap-3 text-primary">
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'wght' 300" }}>tune</span>
                <h3 className="font-black tracking-[0.2em] text-xs uppercase pt-1 text-dark">Catalog Controls</h3>
              </div>
              
              {/* Top Controls */}
              <div className="flex items-center justify-between gap-4 mt-2">
                <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-200">
                  <button className="px-4 py-1.5 rounded-md bg-white shadow-sm text-xs font-bold text-gray-800">Grid</button>
                  <button className="px-4 py-1.5 rounded-md text-xs font-bold text-gray-500 hover:text-gray-800 transition-colors">List</button>
                </div>
                <button className="flex items-center gap-2 text-[11px] font-bold text-gray-500 uppercase tracking-widest hover:text-gray-800 transition-colors pt-1">
                  <span className="material-symbols-outlined text-[16px] font-bold">refresh</span> Reset Filters
                </button>
              </div>
              
              <hr className="border-gray-200 my-2" />
              
              {/* Search */}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-gray-400"
                />
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" style={{ fontVariationSettings: "'wght' 300" }}>search</span>
              </div>

              {/* Dropdowns */}
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <select className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-2xl py-4 pl-5 pr-12 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-medium cursor-pointer">
                    <option>All Offerings</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" style={{ fontVariationSettings: "'wght' 300" }}>expand_more</span>
                </div>
                <div className="relative">
                  <select className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-2xl py-4 pl-5 pr-12 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-medium cursor-pointer">
                    <option>All Categories</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" style={{ fontVariationSettings: "'wght' 300" }}>expand_more</span>
                </div>
                <div className="relative">
                  <select className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-2xl py-4 pl-5 pr-12 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-medium cursor-pointer">
                    <option>All Brands</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" style={{ fontVariationSettings: "'wght' 300" }}>expand_more</span>
                </div>
                <div className="relative">
                  <select className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-2xl py-4 pl-5 pr-12 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-medium cursor-pointer">
                    <option>Featured</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" style={{ fontVariationSettings: "'wght' 300" }}>expand_more</span>
                </div>
              </div>
              
              {/* Apply Button */}
              <button className="w-full mt-4 bg-primary text-white text-[13px] font-bold uppercase tracking-[0.2em] py-4 rounded-[1.5rem] hover:bg-primary/90 transition-colors shadow-sm transform hover:-translate-y-0.5">
                Apply
              </button>
            </aside>
            
            <main className="flex-1 w-full">
              {/* BEGIN: Ask AI Search Bar */}
              <div className="flex items-center w-full bg-white border border-gray-200 rounded-full p-2 shadow-sm mb-8 transition-all focus-within:shadow-md focus-within:border-primary">
                <div className="pl-4 pr-3 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'wght' 300" }}>auto_awesome</span>
                </div>
                <input 
                  type="text" 
                  placeholder="Ask AI: e.g. '10kW hybrid solar inverter under PKR 500,000'" 
                  className="flex-1 bg-transparent border-none focus:outline-none text-gray-800 text-sm md:text-[15px] px-1 w-full placeholder-gray-400"
                />
                <button className="bg-primary text-white text-xs font-bold tracking-[0.15em] px-8 py-3 rounded-full hover:bg-primary/90 transition-colors flex-shrink-0 shadow-sm ml-2">
                  SEARCH
                </button>
              </div>
              {/* END: Ask AI Search Bar */}
              
              {/* BEGIN: Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/* Product Card 1 */}
                <div className="bg-white flex flex-col group relative border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-64 flex justify-center items-center p-4 mb-2">
                    <img alt="Trina Solar Panel" className="max-h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqumhx99bLuLjSVp12v7CQWOuq4Agsl7cO7X8W4BqzU2cswL4T8T5cJSrm6dUbmYHMX65rjz1EtKhmbpnVMHRRIn6Y1dfma3CpE6r0gFPUzl2veZRu7qWSjuLPDHvwh_ElQbwfiw4JpaXT6MKMKeMzYSR1--KC7HBPyA9iCCpRNZnkjiY7DTNOtfcx9ZzH3o6Achxp9Tnbqr22tsYVDyvbqTO2w7P7hxbY6OYkTkHqjFo9GXCCDM96Lg" />
                  </div>
                  <div className="flex-1 flex flex-col p-4 pt-0">
                    <h3 className="text-sm text-gray-800 leading-tight mb-1 line-clamp-3">Trina Solar 505W N-type i-TOPCon Ultra Monocrystalline 156 Cells Dual Glass Blackframe 30mm...</h3>
                    <p className="text-xs text-gray-400 mb-3 truncate">TRN-TSM-505NEG10R.28Z/30/21</p>
                    <div className="mt-auto">
                      <button className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded text-sm transition-colors text-center font-medium">Login for price</button>
                    </div>
                  </div>
                </div>
                {/* Product Card 2 */}
                <div className="bg-white flex flex-col group relative border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-64 flex justify-center items-center p-4 mb-2">
                    <img alt="Canadian Solar Panel" className="max-h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbAlFK8cLWCsCW48wAmkshmWT6NvOzsdKleEHNjf--rP0LB6bLfbc1OX8-A_u4IV9ICT2idcW41tNfnQDtjbqCh4R4mEvJWx5mJ6p3pGduDv0Z5cEhJtlQko1CGYJkDEG4kFGZnWlR7d3_cqafy-JBrzSitWpYH8EuZBPrUZhdU1kwhXZBnA6h1RV86XtsMJLqxCXQE5xi6cBW4hde-pposBfdQhxqk9czoa4KOmfmS3wMIOrLzplLDg" />
                  </div>
                  <div className="flex-1 flex flex-col p-4 pt-0">
                    <h3 className="text-sm text-gray-800 leading-tight mb-1 line-clamp-3">Canadian Solar CS6.2-54TM 510W N-Type TOPCon Monofacial 108half-cell (Black Frame) 30m...</h3>
                    <p className="text-xs text-gray-400 mb-3 truncate">CSI-CS6.2-54TM-510/30/21</p>
                    <div className="mt-auto">
                      <button className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded text-sm transition-colors text-center font-medium">Login for price</button>
                    </div>
                  </div>
                </div>
                {/* Product Card 3 */}
                <div className="bg-white flex flex-col group relative border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-64 flex justify-center items-center p-4 mb-2">
                    <img alt="Risen Solar Panel" className="max-h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqUGu_h2Ji7nwDakhuKDKHhXp63OyLPwn10g4WjID204M2EkRpsXf9bgNcRSOs9hCcEu2VUTzQ_AgUP_jQ_tuIOwRZgVAFNhW6XBkBqbQLrA_iqIkQL1ECul6nyrHkKtWAfeCYlyRYrtMcJ8yBakkoPpgpuFIaBYCwDB2jJDB42ci8-Axir91aTsFVbd0_klAcawc0I3WiRhT2nlPKMmZc2EF85Nr5_PBEPfFQ1a5MN_1vB6wNdBhkjg" />
                  </div>
                  <div className="flex-1 flex flex-col p-4 pt-0">
                    <h3 className="text-sm text-gray-800 leading-tight mb-1 line-clamp-3">Risen RSM132-11 630W N-type TOPCon Bifacial 132half-cells sliver 30mm MC4 EVO2...</h3>
                    <p className="text-xs text-gray-400 mb-3 truncate">RIS-RSM132-11-630BNDG/30/21</p>
                    <div className="mt-auto">
                      <button className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded text-sm transition-colors text-center font-medium">Login for price</button>
                    </div>
                  </div>
                </div>
                {/* Product Card 4 */}
                <div className="bg-white flex flex-col group relative border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-64 flex justify-center items-center p-4 mb-2">
                    <img alt="Suntech Solar Panel" className="max-h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuv48Y2mnTzl_BIoTrd2I3siHmricdzynlsNcdPZD7UMUlK5H_RBr-CVbynoX4tgCMcAHopqr5Ta-vYXHLZ5P-3CdK456Y6sPN1JV1liTjRu_hm4EGGkg2-TtrzYmfQAtmHreZmkH3dq_EAUUTe7_rP_JqeIqJ2YMUxj4MKIMcXHdKuUA3gF4hfacaA2LAF0quiwI6uACBwh8kmjB_8sH_xKUVoO5uUrwSHamklXQhSGKhzKEpy2A5_A" />
                  </div>
                  <div className="flex-1 flex flex-col p-4 pt-0">
                    <h3 className="text-sm text-gray-800 leading-tight mb-1 line-clamp-3">Suntech Ultra VPro 440W TOPCon N-type Bifacial Double Glass 96Half-Cell Black 30mm MC4-...</h3>
                    <p className="text-xs text-gray-400 mb-3 truncate">STE-STP440S-H48-Nth+/21/30</p>
                    <div className="mt-auto">
                      <button className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded text-sm transition-colors text-center font-medium">Login for price</button>
                    </div>
                  </div>
                </div>
                {/* Product Card 5 */}
                <div className="bg-white flex flex-col group relative border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-64 flex justify-center items-center p-4 mb-2">
                    <img alt="Canadian Solar Panel" className="max-h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4axaTSZ8wgWgh9rCnq81T5SD7uxTlRAx_uNKw-OY1nYuNq-0iB3h_5wsEvPKJ3z-CtPY9oGeHT5nS-Wj3swZ8M1iAG4vRsqkTyrR5YpOozQ5qd54FRA5ddPam3OZ6QbBqWh8rRfwN_QMoG6vaXfM3STcZb04x7NYPzzRAL8YaQ_q3JIOxE4M6oFSfdmBJSV3QnDxTa6U_RsosDmhokVUpNp13rWO5dU-s-cFF5ldFcw2R8yd58reDww" />
                  </div>
                  <div className="flex-1 flex flex-col p-4 pt-0">
                    <h3 className="text-sm text-gray-800 leading-tight mb-1 line-clamp-3">Canadian CS6.2-66TB 620W TOPCon 132 half-cell Sliver 30mm MC4 EVO2 (CS6.2-66TB-...</h3>
                    <p className="text-xs text-gray-400 mb-3 truncate">CSI-CS6.2-66TB-620/30/21</p>
                    <div className="mt-auto">
                      <button className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded text-sm transition-colors text-center font-medium">Login for price</button>
                    </div>
                  </div>
                </div>
                {/* Product Card 6 */}
                <div className="bg-white flex flex-col group relative border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-64 flex justify-center items-center p-4 mb-2">
                    <img alt="TW Solar Panel" className="max-h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg4T-ddVuGheZrmkdbCUjJWU2TQrAGD30k3_9DiUtSyXIbm3glmSyR6Q2MbMJxyJkGx41dY2KudZnsARrPBtysJp-7YjMDRcRZfHnV1OlSTkGVToOr_CNZs8EdZcwaBp1IP762wSiC9yq25W61BYs-x7FmTUbMBcc27PRDq7swyiYoRQqw9KJ5sMb91JX4IgYamRjeNwI0SgYKoI84lMMwZK2ftitWj5obmjkx79Q5FyliYqMGb5xI3A" />
                  </div>
                  <div className="flex-1 flex flex-col p-4 pt-0">
                    <h3 className="text-sm text-gray-800 leading-tight mb-1 line-clamp-3">TW Solar 465W N-Type Mono 96 Halfcells Bifacial Black Frame 30mm MC4 EVO2 1200mm Cabl...</h3>
                    <p className="text-xs text-gray-400 mb-3 truncate">TW-TWMNH-48HD465/30/21</p>
                    <div className="mt-auto">
                      <button className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded text-sm transition-colors text-center font-medium">Login for price</button>
                    </div>
                  </div>
                </div>
                {/* Product Card 7 */}
                <div className="bg-white flex flex-col group relative border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-64 flex justify-center items-center p-4 mb-2">
                    <img alt="Trina Solar Panel" className="max-h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTvwFa6wI5Bmss5w9BTowTbkLPL-tXyDyRudUpmpIDJtAhktSO5iKpxg2sFHrQx_JUBCQjz4zBl-IDSi8Tq4iWlFfSpKdDQ31ZmQc8pS29xcZcRIaiL6Kt4sXROPZkq3GwYOWM6FYnXIZzqFJmuxxLy85MeF6y5ohZhHHWgC5cVSyKnOByiISgs7MfFHuyUmL0gG5-FxylpINKPkS8i_PH2c1AN5_kvLui6naDdXqSdVmszoeeKdhX3A" />
                  </div>
                  <div className="flex-1 flex flex-col p-4 pt-0">
                    <h3 className="text-sm text-gray-800 leading-tight mb-1 line-clamp-3">Trina Solar 475W N-type i-TOPCon Ultra Monocrystalline 96 HalfCells Dual Glass Blackframe 30mm...</h3>
                    <p className="text-xs text-gray-400 mb-3 truncate">TRN-TSM-475NEG9RH.28/30/21</p>
                    <div className="mt-auto">
                      <button className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded text-sm transition-colors text-center font-medium">Login for price</button>
                    </div>
                  </div>
                </div>
                {/* Product Card 8 */}
                <div className="bg-white flex flex-col group relative border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-64 flex justify-center items-center p-4 mb-2">
                    <img alt="Risen Solar Panel" className="max-h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArBzAlcNZXFXIb3O4v2AbbFbk4u7ZqotiqnZzkgBLYiKy7dUceIDcgdSoqyG23N17Ny5MjZ0JWg7obciY0MhW7mls4A3vL4M9PgpV9GY0Ud4y15d5t0UUi3SfWz5KcsgNWl6E1-ZPDeqAfK40Wguyi0Fi3oXBIYB3ZUN8pWh9t_UXl0M9mdCUham9Ix5yvSxc0FBXtfi7R973PTLxG9gvDdOAVHE3ZqR2NYWOiYahjcE7fUBH0mMNU8Q" />
                  </div>
                  <div className="flex-1 flex flex-col p-4 pt-0">
                    <h3 className="text-sm text-gray-800 leading-tight mb-1 line-clamp-3">Risen RSM144-9 595W N-type TOPCon Bifacial 144half-cells sliver 30mm MC4 EVO2 [RSM14...</h3>
                    <p className="text-xs text-gray-400 mb-3 truncate">RIS-RSM144-9-595BNDG/30/21</p>
                    <div className="mt-auto">
                      <button className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded text-sm transition-colors text-center font-medium">Login for price</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* END: Product Grid */}
              
              {/* Pagination */}
              <div className="mt-10 flex justify-center">
                <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <Link href="#" className="relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                    <span className="sr-only">Previous</span>
                    <i className="fa-solid fa-chevron-left text-xs"></i>
                  </Link>
                  <Link href="#" aria-current="page" className="z-10 bg-primary/10 border-primary text-primary relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    1
                  </Link>
                  <Link href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-primary hover:text-white transition-colors relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    2
                  </Link>
                  <Link href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-primary hover:text-white transition-colors relative inline-flex items-center px-4 py-2 border text-sm font-medium hidden md:inline-flex">
                    3
                  </Link>
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ...
                  </span>
                  <Link href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-primary hover:text-white transition-colors relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    8
                  </Link>
                  <Link href="#" className="relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                    <span className="sr-only">Next</span>
                    <i className="fa-solid fa-chevron-right text-xs"></i>
                  </Link>
                </nav>
              </div>
            </main>
        </div>
      </section>



      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-dark">Featured Products</h2>
            <Link className="text-primary font-medium text-sm flex items-center hover:underline" href="#">View All Products <i className="fa-solid fa-arrow-right ml-2 text-xs"></i></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-[1.5rem] overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group relative">
              <div className="flex justify-center bg-[#f0f4f8] h-56 items-center p-4">
                <img alt="Soltronic Mono 550W" className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_qZ7pDPwB7wV-LQeYeSF3GkkR72JPBas-Yjj9LJwcb4B4ABhP9ja4G57if4k3QKNBpTLKhf3VZLbcvH-z_yAu1D6LMbuwULHA2dBJKLEj3u0Z8peKyA1KIAUDDYn-oJLZOa31XprQ-9e4M-3kjN0Nshxaq9Zi5AYU3XwuhBYciFD1QuUSfGxuTIzu_-uTI2e_4D2liY_vZNfBx1qtTojv2_5JLl4C7na_AnvkyKo4V8SNNgkaxnTi" />
              </div>
              <div className="p-6">
                <div className="text-primary font-bold text-[10px] tracking-wider uppercase mb-2">SOLAR PANELS</div>
                <h3 className="font-bold text-[#0f172a] text-lg mb-1">Soltronic Mono 550W</h3>
                <p className="text-[#94a3b8] text-xs font-medium mb-6 uppercase">By SOLTRONIC</p>
                
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="bg-[#f8fafc] rounded-xl p-3 flex flex-col items-center justify-center border border-gray-100 text-center">
                    <span className="font-bold text-dark text-sm mb-1">550W</span>
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wide">POWER</span>
                  </div>
                  <div className="bg-[#f8fafc] rounded-xl p-3 flex flex-col items-center justify-center border border-gray-100 text-center">
                    <span className="font-bold text-dark text-sm mb-1">21.3%</span>
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wide">EFFICIENCY</span>
                  </div>
                  <div className="bg-[#f8fafc] rounded-xl p-3 flex flex-col items-center justify-center border border-gray-100 text-center">
                    <span className="font-bold text-dark text-sm mb-1">25 Yrs</span>
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wide">WARRANTY</span>
                  </div>
                </div>
                
                <button className="w-full bg-primary text-white py-3 rounded-2xl font-bold text-sm hover:bg-primary/90 transition-colors">
                  Get Quote &rarr;
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-[1.5rem] overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group relative">
              <div className="flex justify-center bg-[#f0f4f8] h-56 items-center p-4">
                <img alt="Soltronic HES 6kW" className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNfTE5ZRCUsrSAgcfqoYpBgjuPpwd19ItR9EnnnCfJxJSJ56ACoOoNqTLs6eby5uk73EgkkM-n7kYnNPfftGjOtrSuj2yQsXePCM3bBUAZt7r-vBVJPQsXVUDhbf4058qRwPpYOhqqeGHBmeVOYWpK8-QhVtXJj3bRd_vH5nrcXSTER9fKnoYuDay256ICxd0m_Xp-tojSrcxSwwvm438VlB78i610XjfR3NHIEf9V3mgWYD-g58Up" />
              </div>
              <div className="p-6">
                <div className="text-primary font-bold text-[10px] tracking-wider uppercase mb-2">HYBRID INVERTERS</div>
                <h3 className="font-bold text-[#0f172a] text-lg mb-1">Soltronic HES 6kW</h3>
                <p className="text-[#94a3b8] text-xs font-medium mb-6 uppercase">By SOLTRONIC</p>
                
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="bg-[#f8fafc] rounded-xl p-3 flex flex-col items-center justify-center border border-gray-100 text-center">
                    <span className="font-bold text-dark text-sm mb-1">6kW</span>
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wide">POWER</span>
                  </div>
                  <div className="bg-[#f8fafc] rounded-xl p-3 flex flex-col items-center justify-center border border-gray-100 text-center">
                    <span className="font-bold text-dark text-sm mb-1">97.6%</span>
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wide">EFFICIENCY</span>
                  </div>
                  <div className="bg-[#f8fafc] rounded-xl p-3 flex flex-col items-center justify-center border border-gray-100 text-center">
                    <span className="font-bold text-dark text-sm mb-1">5 Yrs</span>
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wide">WARRANTY</span>
                  </div>
                </div>
                
                <button className="w-full bg-primary text-white py-3 rounded-2xl font-bold text-sm hover:bg-primary/90 transition-colors">
                  Get Quote &rarr;
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-[1.5rem] overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group relative">
              <div className="flex justify-center bg-[#f0f4f8] h-56 items-center p-4">
                <img alt="Soltronic Power 10kWh" className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwaggCrbcuHBkOzTepLQM0tXScCIVZ3ZlOxg7N779PGd1ARxmVBZC-c7YWWooQaPUjnL7Mlnc4pF75Wa0hRRoh5_kkj9NZSJaJCXGmYkAcgl089Hm56syt5F5EPzB2j-EjaSh8fhbtX4q3SQvipsSZZRL3s-1JXvKOKVVIolRe5ZM42QZSeFKVAnfdTPjeAnjr47o28sjygME4OP-Yyc8Z9JkpjyTXwaL3uwsYgAtT2Hz-mvjZg9GG" />
              </div>
              <div className="p-6">
                <div className="text-primary font-bold text-[10px] tracking-wider uppercase mb-2">LITHIUM BATTERIES</div>
                <h3 className="font-bold text-[#0f172a] text-lg mb-1">Soltronic Power 10kWh</h3>
                <p className="text-[#94a3b8] text-xs font-medium mb-6 uppercase">By SOLTRONIC</p>
                
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="bg-[#f8fafc] rounded-xl p-3 flex flex-col items-center justify-center border border-gray-100 text-center">
                    <span className="font-bold text-dark text-sm mb-1">10kWh</span>
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wide">CAPACITY</span>
                  </div>
                  <div className="bg-[#f8fafc] rounded-xl p-3 flex flex-col items-center justify-center border border-gray-100 text-center">
                    <span className="font-bold text-dark text-sm mb-1">&gt;95%</span>
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wide">DOD</span>
                  </div>
                  <div className="bg-[#f8fafc] rounded-xl p-3 flex flex-col items-center justify-center border border-gray-100 text-center">
                    <span className="font-bold text-dark text-sm mb-1">10 Yrs</span>
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wide">WARRANTY</span>
                  </div>
                </div>
                
                <button className="w-full bg-primary text-white py-3 rounded-2xl font-bold text-sm hover:bg-primary/90 transition-colors">
                  Get Quote &rarr;
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-200 rounded-[1.5rem] overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group relative">
              <div className="flex justify-center bg-[#f0f4f8] h-56 items-center p-4">
                <img alt="Soltronic EV Pro 7kW" className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8YwhkJRiWJlfYAX0-Vvit1ZJLGaMc6Xs1Ib7bWbG3MHThdlSToUq7krrH0K_L0vtO5LMD-mw0jErKrVEOt_sZx9YnfJJHArUwnSDiaEDd0-X60dGYIH-qns1x7-zH4G6ZLnYKPS8JjJe8VGhyuY147NyQKTPY_lmD6-wc5VYCNSO5lfeGQ0Lm4HN5IWpkpaKWfJxwVJ4HkGEMLErJ6990YTpujwL9-xpIQJAUG0ci420jMlMutMsK" />
              </div>
              <div className="p-6">
                <div className="text-primary font-bold text-[10px] tracking-wider uppercase mb-2">EV CHARGERS</div>
                <h3 className="font-bold text-[#0f172a] text-lg mb-1">Soltronic EV Pro 7kW</h3>
                <p className="text-[#94a3b8] text-xs font-medium mb-6 uppercase">By SOLTRONIC</p>
                
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="bg-[#f8fafc] rounded-xl p-3 flex flex-col items-center justify-center border border-gray-100 text-center">
                    <span className="font-bold text-dark text-sm mb-1">7kW</span>
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wide">POWER</span>
                  </div>
                  <div className="bg-[#f8fafc] rounded-xl p-3 flex flex-col items-center justify-center border border-gray-100 text-center">
                    <span className="font-bold text-dark text-sm mb-1">Type 2</span>
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wide">CONNECTOR</span>
                  </div>
                  <div className="bg-[#f8fafc] rounded-xl p-3 flex flex-col items-center justify-center border border-gray-100 text-center">
                    <span className="font-bold text-dark text-sm mb-1">3 Yrs</span>
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wide">WARRANTY</span>
                  </div>
                </div>
                
                <button className="w-full bg-primary text-white py-3 rounded-2xl font-bold text-sm hover:bg-primary/90 transition-colors">
                  Get Quote &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Slider */}
      <section className="py-8 bg-white border-b border-gray-100 overflow-hidden relative">
        <style>{`
          @keyframes scroll-brands {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: scroll-brands 20s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Section Heading */}
          <div className="flex flex-col items-center justify-center mb-10 pt-4">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary/50 rounded-full"></span>
              <span className="text-primary font-black text-xs uppercase tracking-[0.3em]">Our Partners</span>
              <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary/50 rounded-full"></span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-800 text-center tracking-tight">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500">Global Brands</span>
            </h3>
          </div>

          {/* Slider Container - Auto Scrolling */}
          <div className="flex gap-4 w-max animate-marquee">
            
            {/* --- First Set of Logos --- */}
            {/* Inverex */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-4">
                <span className="text-red-600 font-black italic tracking-tighter text-xl">INVEREX</span>
              </div>
            </div>
            {/* Pylontech */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[220px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-2 py-1 overflow-visible">
                <img src="/images/pylontech-logo.png" alt="Pylontech" className="h-full w-auto object-contain max-h-[60px] transform scale-[2.5] origin-center" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.2)' }} />
              </div>
            </div>
            {/* Solis */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-2 py-1">
                <img src="/images/solis-logo.png" alt="Solis" className="h-full w-auto object-contain max-h-[55px] transform scale-150" />
              </div>
            </div>
            {/* Jinko Solar */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-4 py-2">
                <img src="/images/jinko-logo.png" alt="Jinko Solar" className="h-full w-auto object-contain max-h-[35px]" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.5) brightness(1.1)' }} />
              </div>
            </div>
            {/* Narada */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-6 py-3">
                <img src="/images/narada-logo.png" alt="Narada" className="h-full w-auto object-contain max-h-[22px]" />
              </div>
            </div>
            {/* Huawei */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-4 py-2">
                <img src="/images/huawei-logo.png" alt="Huawei" className="h-full w-auto object-contain max-h-[35px]" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.5) brightness(1.1)' }} />
              </div>
            </div>
            {/* Dyness */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-4">
                <span className="text-green-500 font-light tracking-widest text-lg">DY<span className="text-blue-500 font-bold">NESS</span></span>
              </div>
            </div>
            
            {/* --- Second Set of Logos for Seamless Looping --- */}
            {/* Inverex */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-4">
                <span className="text-red-600 font-black italic tracking-tighter text-xl">INVEREX</span>
              </div>
            </div>
            {/* Pylontech */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[220px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-2 py-1 overflow-visible">
                <img src="/images/pylontech-logo.png" alt="Pylontech" className="h-full w-auto object-contain max-h-[60px] transform scale-[2.5] origin-center" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.2)' }} />
              </div>
            </div>
            {/* Solis */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-2 py-1">
                <img src="/images/solis-logo.png" alt="Solis" className="h-full w-auto object-contain max-h-[55px] transform scale-150" />
              </div>
            </div>
            {/* Jinko Solar */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-4 py-2">
                <img src="/images/jinko-logo.png" alt="Jinko Solar" className="h-full w-auto object-contain max-h-[35px]" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.5) brightness(1.1)' }} />
              </div>
            </div>
            {/* Narada */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-6 py-3">
                <img src="/images/narada-logo.png" alt="Narada" className="h-full w-auto object-contain max-h-[22px]" />
              </div>
            </div>
            {/* Huawei */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-4 py-2">
                <img src="/images/huawei-logo.png" alt="Huawei" className="h-full w-auto object-contain max-h-[35px]" style={{ mixBlendMode: 'multiply', filter: 'contrast(1.5) brightness(1.1)' }} />
              </div>
            </div>
            {/* Dyness */}
            <div className="bg-[#f8fafc] rounded-2xl p-2 min-w-[160px] flex-shrink-0">
              <div className="bg-white rounded-xl h-16 flex items-center justify-center border border-gray-50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] px-4">
                <span className="text-green-500 font-light tracking-widest text-lg">DY<span className="text-blue-500 font-bold">NESS</span></span>
              </div>
            </div>
            
          </div>
        </div>
      </section>



      {/* Brochure CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="w-full md:w-1/3 flex justify-center">
              <img alt="Product Brochure" className="h-48 object-contain transform -rotate-6 shadow-md border border-gray-100 bg-white p-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKGnpOF6-8fn6-xMMNRvsSONIZJkk0Dw2tjtIDV2SL9o22wvKR4XwyVhy7dJ_i_TGcDmTbX-9OcMdIEo7GiZcUVYlPqOQ-Zx0k8qvI14ostvzWFCtsk5_0-y_TFVXe5RRaEnkcWek_m3dmqkFZ8DuKb-fkg__FRASMgC9oL-mWoa0ivD2vZJaF0q15Jr2PRiZo3pujJyD89_PMx3Uav4_7DXYHbBiyYw5siGrBM3QbRMYOdwTJXHMt" />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-dark mb-2">All Our Products. One Brochure.</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Download our detailed product catalogue and explore complete specifications, features and solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-2.5 rounded-md font-medium transition-colors flex items-center gap-2">
                  Download Brochure <i className="fa-solid fa-download text-sm"></i>
                </button>
                <div className="flex gap-6 text-gray-500 text-xs">
                  <div className="flex flex-col items-center text-center">
                    <i className="fa-regular fa-file-lines text-primary text-xl mb-1"></i>
                    <span className="">Detailed<br/>Specifications</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <i className="fa-solid fa-microchip text-primary text-xl mb-1"></i>
                    <span className="">Latest<br/>Technologies</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <i className="fa-solid fa-cubes text-primary text-xl mb-1"></i>
                    <span className="">Complete<br/>Product Range</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="bg-gray-50 border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary text-xl shadow-sm">
                <i className="fa-solid fa-headset"></i>
              </div>
              <div>
                <h4 className="font-bold text-dark text-sm">Expert Support</h4>
                <p className="text-xs text-gray-500">Get help from our solar experts</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary text-xl shadow-sm">
                <i className="fa-solid fa-truck-fast"></i>
              </div>
              <div>
                <h4 className="font-bold text-dark text-sm">Fast Delivery</h4>
                <p className="text-xs text-gray-500">On-time delivery across the country</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary text-xl shadow-sm">
                <i className="fa-solid fa-certificate"></i>
              </div>
              <div>
                <h4 className="font-bold text-dark text-sm">Certified Quality</h4>
                <p className="text-xs text-gray-500">Tested &amp; certified for reliability</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary text-xl shadow-sm">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <div>
                <h4 className="font-bold text-dark text-sm">Secure Warranty</h4>
                <p className="text-xs text-gray-500">Assured warranty on all products</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
