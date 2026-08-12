import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-on-tertiary-fixed dark:bg-surface-container-lowest full-width mt-auto border-t border-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
        <div className="sm:col-span-2 lg:col-span-5 lg:pr-16">
          <div className="flex items-center -ml-4 mb-4">
            <Link href="/" className="relative w-64 h-16 md:h-20 block">
              <Image src="/logo.png" alt="Soltronic Energy Logo" fill className="object-contain object-left" />
            </Link>
          </div>
          <p className="text-[14px] font-body-md text-surface-variant dark:text-on-surface-variant leading-relaxed text-justify mb-10">
            Delivering innovative and sustainable solar solutions for a greener tomorrow. We specialize in high-efficiency solar EPC, cutting-edge net metering, and reliable battery storage systems. Power your home or business with clean, renewable energy and take control of your future.
          </p>
          <div className="space-y-1 text-[14px] font-body-md text-surface-variant dark:text-on-surface-variant">
            <p><strong>Address:</strong> 91K Block J Phase 2 Johar Town, Lahore</p>
            <p><strong>Phone:</strong> +92 327 7770090</p>
            <p><strong>Email:</strong> info@soltronicsenergy.com</p>
          </div>
        </div>

        <div className="lg:col-span-2 lg:col-start-7 lg:pt-14">
          <h4 className="text-[16px] font-label-md text-on-surface mb-4 font-bold uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-[14px] font-body-md">
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/">Home</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/about">About Us</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/services">Services</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/products">Products</Link></li>

            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2 lg:pt-14">
          <h4 className="text-[16px] font-label-md text-on-surface mb-4 font-bold uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-[14px] font-body-md">
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/epc">Solar EPC</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/services">Solar Installations</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/services">Net Metering</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/services">Battery Storage</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/pv">PV Modules</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2 lg:pt-14">
          <h4 className="text-[16px] font-label-md text-on-surface mb-4 font-bold uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-[14px] font-body-md">
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/about">Careers</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/about">Blog</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/about">Privacy Policy</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/about">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-surface-variant/20">
        <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] font-body-sm text-surface-variant text-center md:text-left">
            Copyright © 2021-2026 Soltronic Energy Distribution (Private) Limited, All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <Link className="text-surface-variant hover:text-secondary-fixed transition-colors" href="/contact"><span className="material-symbols-outlined">qr_code_2</span></Link>
            <Link className="text-surface-variant hover:text-secondary-fixed transition-colors" href="/contact"><span className="material-symbols-outlined">share</span></Link>
            <Link className="text-surface-variant hover:text-secondary-fixed transition-colors" href="/contact">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link className="text-surface-variant hover:text-secondary-fixed transition-colors" href="/contact">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link className="text-surface-variant hover:text-secondary-fixed transition-colors" href="/contact">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link className="text-surface-variant hover:text-secondary-fixed transition-colors" href="/contact">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.28-1.15 4.32-3.03 5.46-1.53.93-3.41 1.17-5.11.75-2.09-.52-3.77-2.02-4.49-4.06-.51-1.45-.48-3.09.09-4.5.6-1.47 1.84-2.59 3.32-3.08 1.43-.47 3.03-.4 4.39.18v4.19c-.83-.43-1.83-.55-2.72-.25-.97.33-1.64 1.25-1.75 2.27-.08.79.23 1.62.8 2.16.59.56 1.46.77 2.25.61.9-.18 1.6-.92 1.77-1.8.07-.35.1-.71.1-1.07V.02h.38z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
