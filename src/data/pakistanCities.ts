export interface PakistanCity {
  slug: string;
  name: string;
  province: string;
  sunHoursPerDay: number;
  popularPackages: string[];
  description: string;
}

export const PAKISTAN_CITIES: PakistanCity[] = [
  {
    slug: 'lahore',
    name: 'Lahore',
    province: 'Punjab',
    sunHoursPerDay: 5.5,
    popularPackages: ['5kW Residential', '10kW Hybrid', '20kW Commercial'],
    description: 'Lahore features high solar irradiance ideal for on-grid and hybrid solar installations to combat rising grid tariffs.',
  },
  {
    slug: 'karachi',
    name: 'Karachi',
    province: 'Sindh',
    sunHoursPerDay: 5.8,
    popularPackages: ['10kW On-Grid', '15kW Hybrid', '50kW Industrial'],
    description: 'Karachi coastal region offers year-round consistent sunshine, making solar battery storage and hybrid systems highly efficient.',
  },
  {
    slug: 'islamabad',
    name: 'Islamabad',
    province: 'Capital Territory',
    sunHoursPerDay: 5.4,
    popularPackages: ['5kW Hybrid', '10kW Net Metering', '15kW Residential'],
    description: 'Islamabad residential areas benefit significantly from net metering and reliable Tier-1 solar panel systems.',
  },
  {
    slug: 'rawalpindi',
    name: 'Rawalpindi',
    province: 'Punjab',
    sunHoursPerDay: 5.4,
    popularPackages: ['5kW Residential', '10kW Hybrid'],
    description: 'Rawalpindi homeowners are rapidly switching to smart solar inverters and battery backup systems.',
  },
  {
    slug: 'faisalabad',
    name: 'Faisalabad',
    province: 'Punjab',
    sunHoursPerDay: 5.6,
    popularPackages: ['20kW Commercial', '50kW Industrial', '100kW Industrial'],
    description: 'As Pakistan industrial hub, Faisalabad textile and manufacturing sectors maximize ROI with large-scale commercial solar.',
  },
  {
    slug: 'multan',
    name: 'Multan',
    province: 'Punjab',
    sunHoursPerDay: 6.0,
    popularPackages: ['10kW Hybrid', '15kW On-Grid', 'Agricultural Tube Well Solar'],
    description: 'Multan boasts some of the highest peak sun hours in Punjab, perfect for high-yield solar energy generation.',
  },
  {
    slug: 'peshawar',
    name: 'Peshawar',
    province: 'Khyber Pakhtunkhwa',
    sunHoursPerDay: 5.5,
    popularPackages: ['5kW Hybrid', '10kW Hybrid'],
    description: 'Peshawar solar solutions focus on reliable hybrid inverters and lithium battery storage systems.',
  },
  {
    slug: 'gujranwala',
    name: 'Gujranwala',
    province: 'Punjab',
    sunHoursPerDay: 5.5,
    popularPackages: ['10kW Commercial', '20kW Industrial'],
    description: 'Gujranwala thriving industrial ecosystem relies on solar solutions to maintain uninterrupted production.',
  },
  {
    slug: 'sialkot',
    name: 'Sialkot',
    province: 'Punjab',
    sunHoursPerDay: 5.4,
    popularPackages: ['10kW Commercial', '15kW Hybrid'],
    description: 'Sialkot export industries lower operational overhead with custom commercial rooftop solar installations.',
  },
  {
    slug: 'quetta',
    name: 'Quetta',
    province: 'Balochistan',
    sunHoursPerDay: 6.2,
    popularPackages: ['5kW Off-Grid', '10kW Hybrid'],
    description: 'Quetta exceptionally clear skies provide maximum solar generation efficiency for residential and commercial off-grid setups.',
  },
  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    province: 'Sindh',
    sunHoursPerDay: 5.7,
    popularPackages: ['5kW Hybrid', '10kW On-Grid'],
    description: 'Hyderabad high temperatures and solar potential make high-efficiency bifacial solar panels a top choice.',
  },
  {
    slug: 'bahawalpur',
    name: 'Bahawalpur',
    province: 'Punjab',
    sunHoursPerDay: 5.9,
    popularPackages: ['5kW Residential', '10kW Hybrid'],
    description: 'Bahawalpur excellent solar radiation makes solar energy adoption swift and highly economical.',
  },
];
