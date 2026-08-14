export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
}

export const mainNav: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Products', href: '/products' },
  { title: 'Brands', href: '/brands' },
  { title: 'Solar Calculator', href: '/pv' },
  { title: 'EPC Services', href: '/epc' },
  { title: 'About Us', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

export const footerNav = {
  solutions: [
    { title: 'Solar Panels', href: '/products?category=solar-panels' },
    { title: 'On-Grid Inverters', href: '/products?category=on-grid-inverters' },
    { title: 'Hybrid Inverters', href: '/products?category=hybrid-inverters' },
    { title: 'Lithium Batteries', href: '/products?category=storage-batteries' },
  ],
  company: [
    { title: 'About Soltronic', href: '/about' },
    { title: 'EPC Services', href: '/epc' },
    { title: 'News & Insights', href: '/news' },
    { title: 'Events & Expo', href: '/events' },
    { title: 'Contact Us', href: '/contact' },
  ],
  resources: [
    { title: 'Solar Calculator', href: '/pv' },
    { title: 'Product Downloads', href: '/downloads' },
    { title: 'Gallery', href: '/gallery' },
    { title: 'Promotions', href: '/promotions' },
  ],
};
