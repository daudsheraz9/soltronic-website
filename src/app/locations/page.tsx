import { PAKISTAN_CITIES } from '@/data/pakistanCities';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solar Energy Services Across Pakistan | Soltronic Energy',
  description: 'Soltronic Energy provides solar panel installation, inverters, and net-metering services across major cities in Pakistan including Lahore, Karachi, Islamabad, Faisalabad, Multan, and more.',
};

export default function LocationsIndexPage() {
  return (
    <main className="w-full overflow-x-hidden pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-2">Nationwide Coverage</span>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Solar Solutions Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500">Pakistan</span>
          </h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            Select your city to explore tailored solar energy packages, local irradiance data, and installation services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PAKISTAN_CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}`}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-green-300 hover:shadow-md transition block group"
            >
              <span className="text-xs font-bold text-green-600 uppercase tracking-wider block mb-1">{city.province}</span>
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-primary transition mb-2">{city.name}</h2>
              <p className="text-xs text-gray-500 line-clamp-2 mb-4">{city.description}</p>
              <div className="flex items-center text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                Explore {city.name} Solar Solutions &rarr;
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
