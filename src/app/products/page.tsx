import Link from 'next/link';

export default function Products() {
  return (
    <div className="bg-gray-50 text-slate-700">
      {/* TopNavBar */}


      {/* Hero Section */}
      <header className="relative bg-white pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 pr-0 lg:pr-12 mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight mb-4">
                Premium Solar<br/>Products for a<br/><span className="text-primary">Smarter Tomorrow</span>
              </h1>
              <p className="text-gray-600 mb-8 max-w-lg">
                High-performance, reliable and future-ready solar products for homes, businesses and industries.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <button className="bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors shadow-sm flex items-center gap-2">
                  Explore Products <i className="fa-solid fa-arrow-right text-sm"></i>
                </button>
                <button className="bg-white border border-gray-300 hover:border-primary text-gray-700 hover:text-primary px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2 shadow-sm">
                  Download Catalogue <i className="fa-solid fa-download text-sm"></i>
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-start">
                  <div className="text-primary text-xl mb-2"><i className="fa-solid fa-bolt-lightning"></i></div>
                  <h4 className="font-bold text-dark text-xs mb-1">High Efficiency</h4>
                  <p className="text-[10px] text-gray-500">Maximum Performance</p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-primary text-xl mb-2"><i className="fa-solid fa-shield-check"></i></div>
                  <h4 className="font-bold text-dark text-xs mb-1">Trusted Quality</h4>
                  <p className="text-[10px] text-gray-500">Global Standards</p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-primary text-xl mb-2"><i className="fa-regular fa-clock"></i></div>
                  <h4 className="font-bold text-dark text-xs mb-1">Long Lasting</h4>
                  <p className="text-[10px] text-gray-500">Built to Endure</p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-primary text-xl mb-2"><i className="fa-solid fa-microchip"></i></div>
                  <h4 className="font-bold text-dark text-xs mb-1">Smart &amp; Reliable</h4>
                  <p className="text-[10px] text-gray-500">Advanced Technology</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <img alt="Premium Solar Products Showcase" className="w-full h-auto rounded-2xl shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQwmC0yCT4-0_qDaiS8Cqgm7mlZmJqK9J5wNbrkIbZNRuQvowgwlZbJJBxEH1oEpypyS0HB7SE7QPJ5_3TQ3kM7T3VZHubA6d3uCAMkKFIPks1CKVpzNr_rDcL1hfpaYWBgHzddJ4O0mvxykaWkyHgp-PgYmTax2vSSfFvHhT29woXsEWwKsaQrdYgJV9RpKKdiYFPtbKxizeJ8DsbKtWYJuiCCZOvD7PlNdObbCR94DUGtkORAEyH" />
            </div>
          </div>
        </div>
      </header>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-2">Product Categories</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <Link className="bg-white p-6 rounded-xl border border-gray-100 shadow-card hover:border-primary hover:shadow-md transition-all flex flex-col items-center text-center group" href="#">
              <div className="w-16 h-16 bg-green-50 text-primary rounded-full flex items-center justify-center text-2xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <i className="fa-solid fa-solar-panel"></i>
              </div>
              <h3 className="font-semibold text-sm text-dark mb-2">Solar Panels</h3>
              <i className="fa-solid fa-arrow-right text-gray-300 text-xs mt-auto group-hover:text-primary transition-colors"></i>
            </Link>
            <Link className="bg-white p-6 rounded-xl border border-gray-100 shadow-card hover:border-primary hover:shadow-md transition-all flex flex-col items-center text-center group" href="#">
              <div className="w-16 h-16 bg-green-50 text-primary rounded-full flex items-center justify-center text-2xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <i className="fa-solid fa-plug"></i>
              </div>
              <h3 className="font-semibold text-sm text-dark mb-2">Hybrid Inverters</h3>
              <i className="fa-solid fa-arrow-right text-gray-300 text-xs mt-auto group-hover:text-primary transition-colors"></i>
            </Link>
            <Link className="bg-white p-6 rounded-xl border border-gray-100 shadow-card hover:border-primary hover:shadow-md transition-all flex flex-col items-center text-center group" href="#">
              <div className="w-16 h-16 bg-green-50 text-primary rounded-full flex items-center justify-center text-2xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <i className="fa-solid fa-plug-circle-bolt"></i>
              </div>
              <h3 className="font-semibold text-sm text-dark mb-2">On-Grid Inverters</h3>
              <i className="fa-solid fa-arrow-right text-gray-300 text-xs mt-auto group-hover:text-primary transition-colors"></i>
            </Link>
            <Link className="bg-white p-6 rounded-xl border border-gray-100 shadow-card hover:border-primary hover:shadow-md transition-all flex flex-col items-center text-center group" href="#">
              <div className="w-16 h-16 bg-green-50 text-primary rounded-full flex items-center justify-center text-2xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <i className="fa-solid fa-battery-full"></i>
              </div>
              <h3 className="font-semibold text-sm text-dark mb-2">Lithium Batteries</h3>
              <i className="fa-solid fa-arrow-right text-gray-300 text-xs mt-auto group-hover:text-primary transition-colors"></i>
            </Link>
            <Link className="bg-white p-6 rounded-xl border border-gray-100 shadow-card hover:border-primary hover:shadow-md transition-all flex flex-col items-center text-center group" href="#">
              <div className="w-16 h-16 bg-green-50 text-primary rounded-full flex items-center justify-center text-2xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <i className="fa-solid fa-layer-group"></i>
              </div>
              <h3 className="font-semibold text-sm text-dark mb-2">Mounting Structures</h3>
              <i className="fa-solid fa-arrow-right text-gray-300 text-xs mt-auto group-hover:text-primary transition-colors"></i>
            </Link>
            <Link className="bg-white p-6 rounded-xl border border-gray-100 shadow-card hover:border-primary hover:shadow-md transition-all flex flex-col items-center text-center group" href="#">
              <div className="w-16 h-16 bg-green-50 text-primary rounded-full flex items-center justify-center text-2xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <i className="fa-solid fa-charging-station"></i>
              </div>
              <h3 className="font-semibold text-sm text-dark mb-2">EV Chargers</h3>
              <i className="fa-solid fa-arrow-right text-gray-300 text-xs mt-auto group-hover:text-primary transition-colors"></i>
            </Link>
            <Link className="bg-white p-6 rounded-xl border border-gray-100 shadow-card hover:border-primary hover:shadow-md transition-all flex flex-col items-center text-center group" href="#">
              <div className="w-16 h-16 bg-green-50 text-primary rounded-full flex items-center justify-center text-2xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <i className="fa-solid fa-gears"></i>
              </div>
              <h3 className="font-semibold text-sm text-dark mb-2">Accessories</h3>
              <i className="fa-solid fa-arrow-right text-gray-300 text-xs mt-auto group-hover:text-primary transition-colors"></i>
            </Link>
          </div>
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
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6 flex justify-center bg-gray-50 h-48 items-center border-b border-gray-100">
                <img alt="Soltronic Mono 550W" className="max-h-full object-contain mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_qZ7pDPwB7wV-LQeYeSF3GkkR72JPBas-Yjj9LJwcb4B4ABhP9ja4G57if4k3QKNBpTLKhf3VZLbcvH-z_yAu1D6LMbuwULHA2dBJKLEj3u0Z8peKyA1KIAUDDYn-oJLZOa31XprQ-9e4M-3kjN0Nshxaq9Zi5AYU3XwuhBYciFD1QuUSfGxuTIzu_-uTI2e_4D2liY_vZNfBx1qtTojv2_5JLl4C7na_AnvkyKo4V8SNNgkaxnTi" />
              </div>
              <div className="p-5">
                <div className="text-xs text-gray-500 mb-1">Solar Panel</div>
                <h3 className="font-bold text-dark text-lg mb-4">Soltronic Mono 550W</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fa-solid fa-bolt text-primary mt-1 mr-3 text-sm w-4"></i>
                    <div>
                      <div className="font-semibold text-sm text-dark">550W</div>
                      <div className="text-xs text-gray-500">Power Output</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-percent text-primary mt-1 mr-3 text-sm w-4"></i>
                    <div>
                      <div className="font-semibold text-sm text-dark">21.3%</div>
                      <div className="text-xs text-gray-500">Max Efficiency</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-shield-check text-primary mt-1 mr-3 text-sm w-4"></i>
                    <div>
                      <div className="font-semibold text-sm text-dark">25 Years</div>
                      <div className="text-xs text-gray-500">Product Warranty</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-chart-line text-primary mt-1 mr-3 text-sm w-4"></i>
                    <div>
                      <div className="font-semibold text-sm text-dark">30 Years</div>
                      <div className="text-xs text-gray-500">Linear Performance</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6 flex justify-center bg-gray-50 h-48 items-center border-b border-gray-100">
                <img alt="Soltronic HES 6kW" className="max-h-full object-contain mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNfTE5ZRCUsrSAgcfqoYpBgjuPpwd19ItR9EnnnCfJxJSJ56ACoOoNqTLs6eby5uk73EgkkM-n7kYnNPfftGjOtrSuj2yQsXePCM3bBUAZt7r-vBVJPQsXVUDhbf4058qRwPpYOhqqeGHBmeVOYWpK8-QhVtXJj3bRd_vH5nrcXSTER9fKnoYuDay256ICxd0m_Xp-tojSrcxSwwvm438VlB78i610XjfR3NHIEf9V3mgWYD-g58Up" />
              </div>
              <div className="p-5">
                <div className="text-xs text-gray-500 mb-1">Hybrid Inverter</div>
                <h3 className="font-bold text-dark text-lg mb-4">Soltronic HES 6kW</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fa-solid fa-bolt text-primary mt-1 mr-3 text-sm w-4"></i>
                    <div>
                      <div className="font-semibold text-sm text-dark">6kW</div>
                      <div className="text-xs text-gray-500">Rated Power</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-percent text-primary mt-1 mr-3 text-sm w-4"></i>
                    <div>
                      <div className="font-semibold text-sm text-dark">97.6%</div>
                      <div className="text-xs text-gray-500">Max Efficiency</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-shield text-primary mt-1 mr-3 text-sm w-4"></i>
                    <div>
                      <div className="font-semibold text-sm text-dark">IP65</div>
                      <div className="text-xs text-gray-500">Protection</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-calendar-check text-primary mt-1 mr-3 text-sm w-4"></i>
                    <div>
                      <div className="font-semibold text-sm text-dark">5 Years</div>
                      <div className="text-xs text-gray-500">Warranty</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6 flex justify-center bg-gray-50 h-48 items-center border-b border-gray-100">
                <img alt="Soltronic Power 10kWh" className="max-h-full object-contain mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwaggCrbcuHBkOzTepLQM0tXScCIVZ3ZlOxg7N779PGd1ARxmVBZC-c7YWWooQaPUjnL7Mlnc4pF75Wa0hRRoh5_kkj9NZSJaJCXGmYkAcgl089Hm56syt5F5EPzB2j-EjaSh8fhbtX4q3SQvipsSZZRL3s-1JXvKOKVVIolRe5ZM42QZSeFKVAnfdTPjeAnjr47o28sjygME4OP-Yyc8Z9JkpjyTXwaL3uwsYgAtT2Hz-mvjZg9GG" />
              </div>
              <div className="p-5">
                <div className="text-xs text-gray-500 mb-1">Lithium Battery</div>
                <h3 className="font-bold text-dark text-lg mb-4">Soltronic Power 10kWh</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fa-solid fa-battery-full text-primary mt-1 mr-3 text-sm w-4"></i>
                    <div>
                      <div className="font-semibold text-sm text-dark">10.24 kWh</div>
                      <div className="text-xs text-gray-500">Usable Capacity</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-arrows-rotate text-primary mt-1 mr-3 text-sm w-4"></i>
                    <div>
                      <div className="font-semibold text-sm text-dark">6000+</div>
                      <div className="text-xs text-gray-500">Life Cycles</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-arrow-up-right-dots text-primary mt-1 mr-3 text-sm w-4"></i>
                    <div>
                      <div className="font-semibold text-sm text-dark">&gt;95%</div>
                      <div className="text-xs text-gray-500">DOD</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-shield-check text-primary mt-1 mr-3 text-sm w-4"></i>
                    <div>
                      <div className="font-semibold text-sm text-dark">10 Years</div>
                      <div className="text-xs text-gray-500">Warranty</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6 flex justify-center bg-gray-50 h-48 items-center border-b border-gray-100">
                <img alt="Soltronic EV Pro 7kW" className="max-h-full object-contain mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8YwhkJRiWJlfYAX0-Vvit1ZJLGaMc6Xs1Ib7bWbG3MHThdlSToUq7krrH0K_L0vtO5LMD-mw0jErKrVEOt_sZx9YnfJJHArUwnSDiaEDd0-X60dGYIH-qns1x7-zH4G6ZLnYKPS8JjJe8VGhyuY147NyQKTPY_lmD6-wc5VYCNSO5lfeGQ0Lm4HN5IWpkpaKWfJxwVJ4HkGEMLErJ6990YTpujwL9-xpIQJAUG0ci420jMlMutMsK" />
              </div>
              <div className="p-5">
                <div className="text-xs text-gray-500 mb-1">EV Charger</div>
                <h3 className="font-bold text-dark text-lg mb-4">Soltronic EV Pro 7kW</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fa-solid fa-bolt-lightning text-primary mt-1 mr-3 text-sm w-4"></i>
                    <div>
                      <div className="font-semibold text-sm text-dark">7kW</div>
                      <div className="text-xs text-gray-500">Charging Power</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-plug text-primary mt-1 mr-3 text-sm w-4"></i>
                    <div>
                      <div className="font-semibold text-sm text-dark">Type 2</div>
                      <div className="text-xs text-gray-500">Connector</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-wifi text-primary mt-1 mr-3 text-sm w-4"></i>
                    <div>
                      <div className="font-semibold text-sm text-dark">OCPP 1.6</div>
                      <div className="text-xs text-gray-500">Smart Charging</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-calendar text-primary mt-1 mr-3 text-sm w-4"></i>
                    <div>
                      <div className="font-semibold text-sm text-dark">3 Years</div>
                      <div className="text-xs text-gray-500">Warranty</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Slider */}
      <section className="py-10 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-sm font-semibold text-gray-500 mb-8 uppercase tracking-wider">Trusted by Global Brands</h3>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <i className="fa-solid fa-chevron-left text-gray-300 cursor-pointer hidden md:block"></i>
            <img alt="Longi Solar" className="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9JfpTxlBbsbIp7tkRW07hXp2oiqvzqABmgoxmoXC5HvR8FD0ZsrF7Y99fNTIzZv38TbiEKzcBsQMBzh2grfLTO-e8rfsaH76HQ5P2Ga9hTnoI-wh3jlNgW0lMsdVN2ohF1H-RVa3P1blF916Hbjq6S7WmKmdM6Noqalbcw8pa8CNbezSLaHJWx1cHN4VOqZ4Dr4C3S7GYJfDDyZvO4Nt8AAkTtrAOUybi03peh1vWg52BfWGKgK06" />
            <img alt="Jinko Solar" className="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAI24_wBdl69BWkCt32AqIRbZQ1mO-TJOyoTHm618OlGhHuS2lIZSwY1hS_VeBSRVogHjufBCFsMGQzB8NsrlTjzV3zMNwj3VqxjJaUjJMG4yZwd1DOlxU52ysfM-ik8reuZSD6M0cdXnS7o0gC3-x2Fno6hougXppO12v-nyV2SboF5aB6MUYU1taiAga21SFWecPFGun36bj9149KMMh2Pal3kEzPCxGep0jBLlRh1cj6jN0_ZOn" />
            <img alt="Canadian Solar" className="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDby9eY_966yk77K6skr8UwWIuNf-CQLtHXg_tHGaH-tBOwquTSZ5Umkjc7DXfuqi-ubKla5C_jh-BLrMC9rMRefkOOtmjeS7UjkdKaMxitFFSnjYstTYzLhsp8qox5eC-uB817r3BnMPrtv-SwQQ6BhVB7a7DCP8ngBgitK-B_oOps4sIbF7M-fVKYrTP64e9DF7gv9OKUwY2gYrSUl5TirppxLu4LWSpQ8bJfNA4cARpF8AUxfo7h" />
            <img alt="Trina Solar" className="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEAFWZFs9SC3Uz2owSTKalBJUaNfzNq4Tz61fKmfRV-6uAHhN1uigiyVhw4HmBIkUi3jk04dVRFeMSDzQ9A1XLXQUCDawldoy75ohmNkxEfHlszyY1_26NJiisr3hEew08ua-Zco8ux74rVjOVsqmxDaDy_9ZNtYrX3oL4-Kgcpgv4FEcRG-uD0ZWTTvQ0weCgBub4KtNCz8ZoUwg50frkW5BETjCFBSgZuWcRSguh4RXLl83nW3Fz" />
            <img alt="JA Solar" className="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJIbUflgAQfAdIOXvhGju1ReJ057ypPMYq07Q69vwzzCNJ-KGVnPZ7xVt1dbjTFZC3aGWeIdzcKbz-O9FzwADg75P9BpOJkAmeuTpljA_Ll9-G0LVJ51pCRL4m6eKk0zT23Uk2UGBBxM6AzLBjkQhVZOQE-6J-aUQK_zEVX9KexyTwkphgkNStUFYV7vCRINUhhXHKhxextFzXPmoGZybYHt6j-ZV2dlt2TVnClLhMIIRTiRpeADN-" />
            <img alt="Sungrow" className="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVU6AgVXQQAU3hi6XD4JQdgx5T3SpRxPiGJZaFNk8GB8rZ8PKbEGhyhlYQHbHkXnPKl5CBxs9Fc9am5jwJVAuQZwhcBcFnxdOUF-GOEmBVUEEV_DDcJTrp4tQdEcqkShB8ycPpieNG9PDbnKkM_ARxHViqSkHdqX2uDX8KcdLXy3qKkdcPevO8-YPgxC7NZNDmm3s7lwTjifnbdS0cRFQxi64Eb7se0GCbbXCUIm5hdZMz5ruXsCC6" />
            <i className="fa-solid fa-chevron-right text-gray-300 cursor-pointer hidden md:block"></i>
          </div>
        </div>
      </section>

      {/* Compare Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-2">Compare Top Products</h2>
          </div>
          <div className="overflow-x-auto bg-white rounded-xl shadow-card border border-gray-200">
            <table className="w-full min-w-[800px] text-sm text-left">
              <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 w-1/4" scope="col">Features</th>
                  <th className="px-6 py-4 text-center border-l border-gray-200 w-1/4" scope="col">
                    <img alt="Mono 550W" className="mx-auto mb-2 h-12 object-contain mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-zU2TBIO2-GYb903ulFCQp4nE4FwyziHjFWvCLP9Jo1ktOm7uw-j70dbuWxLRl5zI9HpDD9ePi1VWJ3kMhrF2oEBFkz6fGthf5mIVNh3eWcCJszxjQfg20pq2L3NglcW1SiAiVCMht50R4B91gWDT98r7LoQRloBR0AJO4DQN3GS85Y4PUL9t1Rlzzb4F21GrYj15GamuwOdNoaViB4No9le4CydSdU0b4-1_EB1wHBAdpRrwu6iS" />
                    Soltronic<br/>Mono 550W
                  </th>
                  <th className="px-6 py-4 text-center border-l border-gray-200 w-1/4" scope="col">
                    <img alt="HES 6kW" className="mx-auto mb-2 h-12 object-contain mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjVrgOrFRiyg6PAUqJF02fTp1fePbzWvpgZtamEZGnCfWJRGovol6DtSs7h9FF_gNiHdN4TzNBgaaq-cD1-pBmVyACp6KI8uRNG38Li_2hWVMxQ-0AhEHVKY-JCCFuEIjN0DWRhhXinw0vfFkguPvQTDtRsuZtbP6AWeI4CaX2FSDRhAu_tOLcWvq02CiPbSPSV32aY18DQfzfp1mLZ4n51r630LSGhuE6yINZ_PtALdWepqEdMzyx" />
                    Soltronic HES 6kW
                  </th>
                  <th className="px-6 py-4 text-center border-l border-gray-200 w-1/4" scope="col">
                    <img alt="Power 10kWh" className="mx-auto mb-2 h-12 object-contain mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzinRsstpu3NWo9U_yMvYpsImlkgrfWDbfVY-bp0E_rYHjhJX8dVb0PHhVpI7A9CscC7M0X50hwNUqNdfbWwiGpPs556pIAa6l3YepmCrK-FlofM8s4bcZGJix1ml6JNbb3Hv_xs9yk0KxNxqsmD1Q2DnQdetlEl6m4amqqUKn10oJtkjgluiUhyqtU3m2-LXLL_WdO44-Wk4hcvxdq8PMJkyVuRXYwC0Z9D2UBeSlAmdvTEuGaeOR" />
                    Soltronic Power<br/>10kWh
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-600">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-dark">Power / Capacity</td>
                  <td className="px-6 py-4 text-center border-l border-gray-200">550W</td>
                  <td className="px-6 py-4 text-center border-l border-gray-200">6kW</td>
                  <td className="px-6 py-4 text-center border-l border-gray-200">10.24 kWh</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-dark">Efficiency</td>
                  <td className="px-6 py-4 text-center border-l border-gray-200">21.3%</td>
                  <td className="px-6 py-4 text-center border-l border-gray-200">97.6%</td>
                  <td className="px-6 py-4 text-center border-l border-gray-200">&gt;95%</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-dark">Warranty</td>
                  <td className="px-6 py-4 text-center border-l border-gray-200">25 Years</td>
                  <td className="px-6 py-4 text-center border-l border-gray-200">5 Years</td>
                  <td className="px-6 py-4 text-center border-l border-gray-200">10 Years</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-dark">Ideal For</td>
                  <td className="px-6 py-4 text-center border-l border-gray-200">Residential / Commercial</td>
                  <td className="px-6 py-4 text-center border-l border-gray-200">Homes / Businesses</td>
                  <td className="px-6 py-4 text-center border-l border-gray-200">Energy Storage</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-dark">Smart Monitoring</td>
                  <td className="px-6 py-4 text-center text-primary border-l border-gray-200"><i className="fa-solid fa-check"></i></td>
                  <td className="px-6 py-4 text-center text-primary border-l border-gray-200"><i className="fa-solid fa-check"></i></td>
                  <td className="px-6 py-4 text-center text-primary border-l border-gray-200"><i className="fa-solid fa-check"></i></td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-dark">Protection</td>
                  <td className="px-6 py-4 text-center border-l border-gray-200">IP68</td>
                  <td className="px-6 py-4 text-center border-l border-gray-200">IP65</td>
                  <td className="px-6 py-4 text-center border-l border-gray-200">IP20</td>
                </tr>
              </tbody>
            </table>
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
