import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-on-tertiary-fixed dark:bg-surface-container-lowest full-width mt-auto border-t border-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
        <div className="sm:col-span-2 lg:col-span-5 space-y-4 lg:pr-16">
          <div className="flex items-center -ml-4">
            <Link href="/" className="relative w-64 h-16 md:h-20 block">
              <Image src="/logo.png" alt="Soltronic Energy Logo" fill className="object-contain object-left" />
            </Link>
          </div>
          <p className="text-body-md font-body-md text-surface-variant dark:text-on-surface-variant leading-relaxed text-justify">
            Delivering innovative and sustainable solar solutions for a greener tomorrow. We specialize in high-efficiency solar EPC, cutting-edge net metering, and reliable battery storage systems. Power your home or business with clean, renewable energy and take control of your future.
          </p>
          <div className="flex gap-4">
            <Link className="text-surface-variant hover:text-secondary-fixed transition-colors" href="/contact"><span className="material-symbols-outlined">qr_code_2</span></Link>
            <Link className="text-surface-variant hover:text-secondary-fixed transition-colors" href="/contact"><span className="material-symbols-outlined">share</span></Link>
            <Link className="text-surface-variant hover:text-secondary-fixed transition-colors" href="/contact"><span className="material-symbols-outlined">photo_camera</span></Link>
          </div>
        </div>
        
        <div className="lg:col-span-2 lg:col-start-7 lg:pt-16">
          <h4 className="text-label-md font-label-md text-on-surface mb-4 font-bold uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-body-md font-body-md">
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/">Home</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/about">About Us</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/services">Services</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/products">Products</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="lg:col-span-2 lg:pt-16">
          <h4 className="text-label-md font-label-md text-on-surface mb-4 font-bold uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-body-md font-body-md">
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/epc">Solar EPC</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/services">Solar Installations</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/services">Net Metering</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/services">Battery Storage</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/pv">PV Modules</Link></li>
          </ul>
        </div>
        
        <div className="lg:col-span-2 lg:pt-16">
          <h4 className="text-label-md font-label-md text-on-surface mb-4 font-bold uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-body-md font-body-md">
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/about">Careers</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/about">Blog</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/about">Privacy Policy</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/about">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-surface-variant/20">
        <div className="px-gutter py-4 max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center text-body-md font-body-md text-surface-variant">
          <p className="">© 2026 Soltronic Energy. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">Made with <span className="material-symbols-outlined text-sm text-secondary">favorite</span> for a Sustainable Future</p>
        </div>
      </div>
    </footer>
  );
}
