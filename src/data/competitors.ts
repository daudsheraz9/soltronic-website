export interface Competitor {
  slug: string;
  name: string;
  rating?: number;
  highlight: string;
  description: string;
  soltronicAdvantage: string[];
}

export const COMPETITORS: Competitor[] = [
  {
    slug: 'solar-citizen',
    name: 'Solar Citizen',
    rating: 4.9,
    highlight: 'Engineering-led with Sol AI monitoring platform',
    description: 'Engineering-led solar company with nationwide coverage and proprietary string-level monitoring.',
    soltronicAdvantage: [
      'Tailored open-system hardware without proprietary software locks',
      'Direct Tier-1 manufacturer warranties and transparent pricing',
      'Rapid turnaround times for residential and commercial systems',
    ],
  },
  {
    slug: 'alpha-solar',
    name: 'Alpha Solar',
    highlight: 'Established Lahore residential installer with large warehouse operations',
    description: 'One of Lahore established solar companies with thousands of residential installations.',
    soltronicAdvantage: [
      'End-to-end customized energy audits vs standard off-the-shelf packages',
      'Advanced hybrid and lithium-ion battery integration expertise',
      'Dedicated post-installation maintenance and SLA guarantees',
    ],
  },
  {
    slug: 'premier-energy',
    name: 'Premier Energy',
    highlight: 'Major industrial & commercial solar EPC contractor',
    description: 'Major Pakistani solar company handling residential, commercial, and industrial rooftop projects.',
    soltronicAdvantage: [
      'Agile, customer-centric project delivery for residential & SME clients',
      'Competitive component pricing with direct brand sourcing',
      'Personalized engineering consultation',
    ],
  },
  {
    slug: 'beyond-green-energy',
    name: 'Beyond Green Energy',
    highlight: 'Digital marketing focused residential solar installer',
    description: 'Active in Lahore with a strong content-driven presence serving 5kW to 20kW residential systems.',
    soltronicAdvantage: [
      'Local physical presence and engineering-led execution in Punjab & nationwide',
      'Comprehensive net metering documentation and disco approval support',
      'Tier-1 N-Type TOPCon panel technology focus',
    ],
  },
  {
    slug: 'skyelectric',
    name: 'SkyElectric',
    highlight: 'Proprietary hardware & software subscription eco-system',
    description: 'Integrated smart solar system provider featuring proprietary smart inverters and batteries.',
    soltronicAdvantage: [
      'Zero vendor lock-in — compatible with all industry-standard Tier-1 inverters & batteries',
      'Significantly lower upfront capital investment and no recurring software lock fees',
      'Flexible system upgradeability and component replacement',
    ],
  },
  {
    slug: 'zorays-solar',
    name: 'Zorays Solar',
    highlight: 'Engineering-focused solar enterprise in Lahore',
    description: 'Lahore-based installer known for technical competence and social enterprise projects.',
    soltronicAdvantage: [
      'Scalable commercial and industrial solar engineering capabilities',
      'Direct Tier-1 brand partnerships (Inverex, Solis, Huawei, Pylontech)',
      'Fast-track net-metering processing',
    ],
  },
  {
    slug: 'beacon-energy',
    name: 'Beacon Energy',
    highlight: 'Industrial and utility-scale solar developer',
    description: 'Focused primarily on commercial and industrial projects above 100kW.',
    soltronicAdvantage: [
      'Seamless coverage for residential (3kW-20kW) as well as commercial & industrial projects',
      'Fast deployment cycles for residential and commercial customers',
      'Tailored financing and turnkey EPC solutions',
    ],
  },
  {
    slug: 'sunergy-solutions',
    name: 'Sunergy Solutions',
    highlight: 'Community residential installer in Lahore (DHA & Bahria Town)',
    description: 'Residential and small commercial installer with consistent installation quality.',
    soltronicAdvantage: [
      'Nationwide service footprint across all major Pakistani cities',
      'Direct access to top-tier solar component inventory',
      'Comprehensive smart energy calculator and automated ROI estimation',
    ],
  },
  {
    slug: 'ebr-energy',
    name: 'EBR Energy',
    highlight: 'Established energy EPC for commercial & industrial',
    description: 'Pakistan-wide energy company with systematic project execution and documentation.',
    soltronicAdvantage: [
      'Rapid residential turnarounds alongside commercial EPC',
      'Modern digital monitoring and remote performance diagnostics',
      'Transparent price quotes with zero hidden fees',
    ],
  },
  {
    slug: 'solis-energy-pakistan',
    name: 'Solis Energy Pakistan',
    highlight: 'Quick residential solar installations',
    description: 'Residential installer offering standard 5kW to 20kW packages.',
    soltronicAdvantage: [
      'Comprehensive long-term warranty backed directly by manufacturers',
      'Multi-brand inverter options (Solis, Huawei, Inverex, Sungrow)',
      'Dedicated engineering and safety audit protocols',
    ],
  },
  {
    slug: 'innovo-corporation',
    name: 'Innovo Corporation',
    highlight: 'Industrial & commercial solar engineering',
    description: 'Pakistani EPC providing turnkey solar energy solutions.',
    soltronicAdvantage: [
      'Complete residential through industrial product ecosystem',
      'Interactive online savings estimation tools',
      'Responsive customer support and maintenance',
    ],
  },
  {
    slug: 'ae-power',
    name: 'AE Power',
    highlight: 'Solar import & distribution pioneer',
    description: 'One of the early players in solar component distribution and EPC in Pakistan.',
    soltronicAdvantage: [
      'Direct end-user warranty support and rapid replacement',
      'Modern, high-efficiency N-type solar panel selection',
      'Custom hybrid storage solutions',
    ],
  },
  {
    slug: 'znc-solar',
    name: 'ZNC Solar',
    highlight: 'Solar component distributor & system integrator',
    description: 'Major distributor of solar panels and inverters across Pakistan.',
    soltronicAdvantage: [
      'Turnkey installation & EPC execution directly for end users',
      'Hassle-free net metering and DISCO approval services',
      'Complete home & commercial energy management solutions',
    ],
  },
  {
    slug: 'inverex',
    name: 'Inverex Solar Energy',
    highlight: 'Leading solar inverter & panel brand in Pakistan',
    description: 'Pakistani household brand for solar inverters, nitrox systems, and panels.',
    soltronicAdvantage: [
      'Soltronic integrates genuine Inverex products with multi-brand hybrid design options',
      'Unbiased component recommendation matching exact customer budget',
      'Professional engineering installation and wiring standards',
    ],
  },
  {
    slug: 'knox',
    name: 'Knox Solar',
    highlight: 'Solar inverter and panel provider',
    description: 'Popular solar energy brand providing inverters and solar equipment in Pakistan.',
    soltronicAdvantage: [
      'Customized multi-brand integration',
      'Full turnkey engineering and commissioning',
      'Lifetime customer support and monitoring',
    ],
  },
  {
    slug: 'diwan-international',
    name: 'Diwan International',
    highlight: 'Industrial equipment and solar distribution',
    description: 'Established business group distributing power and solar technology.',
    soltronicAdvantage: [
      'Dedicated residential and commercial solar EPC focus',
      'Transparent online quotes and direct ROI calculation',
      'Fast localized dispatch and execution',
    ],
  },
  {
    slug: 'zero-carbon',
    name: 'Zero Carbon',
    highlight: 'Renewable energy EPC firm',
    description: 'Solar solution provider targeting commercial, industrial, and agricultural sectors.',
    soltronicAdvantage: [
      'Residential to industrial full-spectrum coverage',
      'Competitive pricing models',
      'Fast net-metering turnaround times',
    ],
  },
  {
    slug: 'ams',
    name: 'AMS Solar',
    highlight: 'Residential & commercial solar solutions provider',
    description: 'Pakistani solar company serving home and business owners.',
    soltronicAdvantage: [
      'Strict quality assurance and engineering standards',
      'Tier-1 certified solar component selection',
      'Dedicated account management',
    ],
  },
  {
    slug: 'pantera',
    name: 'Pantera Energy',
    highlight: 'Established solar EPC brand in Pakistan',
    description: 'One of Pakistan early solar companies serving residential and corporate clients.',
    soltronicAdvantage: [
      'Modern high-efficiency solar panel technology (TOPCon, N-Type)',
      'Transparent pricing without high brand premium markup',
      'Advanced smart energy monitoring tools',
    ],
  },
  {
    slug: 'zewinic',
    name: 'Zewinic Solar',
    highlight: 'Solar inverter & energy solution provider',
    description: 'Solar technology provider offering inverters and clean energy products.',
    soltronicAdvantage: [
      'Broad selection of global Tier-1 brands',
      'End-to-end system design, installation, and net-metering',
      'Comprehensive warranty handling',
    ],
  },
];
