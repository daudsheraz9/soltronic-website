import { COMPETITORS } from '@/data/competitors';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solar Company Comparisons in Pakistan | Soltronic Energy',
  description: 'Compare Soltronic Energy with top solar installers and companies in Pakistan. Discover differences in component quality, net metering support, and pricing.',
};

export default function CompetitorsIndexPage() {
  return (
    <main className="w-full overflow-x-hidden pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-2">Transparent Evaluations</span>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Solar Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500">Comparisons</span>
          </h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            See how Soltronic Energy compares against other solar solution providers across Pakistan in terms of open hardware, warranties, and engineering excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {COMPETITORS.map((comp) => (
            <Link
              key={comp.slug}
              href={`/vs/${comp.slug}`}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-green-300 hover:shadow-md transition block group"
            >
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-primary transition mb-1">
                Soltronic <span className="text-xs text-gray-400 font-normal">vs</span> {comp.name}
              </h2>
              <p className="text-xs text-gray-500 line-clamp-2 mb-4">{comp.highlight}</p>
              <div className="flex items-center text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                Read Comparison &rarr;
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
