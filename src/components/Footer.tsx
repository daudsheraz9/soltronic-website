import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-on-tertiary-fixed dark:bg-surface-container-lowest full-width mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg px-gutter py-section-padding max-w-container-max mx-auto">
        <div className="space-y-stack-md">
          <div className="flex items-center">
            <Link href="/">
              <img src="/logo.png" alt="Soltronic Energy Logo" className="h-16 w-auto mb-2" />
            </Link>
          </div>
          <p className="text-body-md font-body-md text-surface-variant dark:text-on-surface-variant">Delivering innovative and sustainable solar solutions for a greener tomorrow.</p>
          <div className="flex gap-4">
            <Link className="text-surface-variant hover:text-secondary-fixed transition-colors" href="#"><span className="material-symbols-outlined">qr_code_2</span></Link>
            <Link className="text-surface-variant hover:text-secondary-fixed transition-colors" href="#"><span className="material-symbols-outlined">share</span></Link>
            <Link className="text-surface-variant hover:text-secondary-fixed transition-colors" href="#"><span className="material-symbols-outlined">photo_camera</span></Link>
          </div>
        </div>
        
        <div>
          <h4 className="text-label-md font-label-md text-background mb-4 font-bold uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-body-md font-body-md">
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/">Home</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/about">About Us</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/services">Services</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/products">Products</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-label-md font-label-md text-background mb-4 font-bold uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-body-md font-body-md">
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/epc">Solar EPC</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="#">Solar Installations</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="#">Net Metering</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="#">Battery Storage</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="/pv">PV Modules</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-label-md font-label-md text-background mb-4 font-bold uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-body-md font-body-md">
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="#">Careers</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="#">Blog</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="#">Privacy Policy</Link></li>
            <li className=""><Link className="text-surface-variant dark:text-on-surface-variant hover:text-secondary-fixed transition-colors hover:translate-x-1 inline-block transition-transform" href="#">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-surface-variant/20">
        <div className="px-gutter py-6 max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center text-body-md font-body-md text-surface-variant">
          <p className="">© 2024 Soltronic Energy. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">Made with <span className="material-symbols-outlined text-sm text-secondary">favorite</span> for a Sustainable Future</p>
        </div>
      </div>
    </footer>
  );
}
