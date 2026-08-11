import { COMPETITORS } from '@/data/competitors';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

type Props = {
  params: Promise<{ competitor: string }>
}

export async function generateStaticParams() {
  return COMPETITORS.map((c) => ({
    competitor: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const competitor = COMPETITORS.find((c) => c.slug === resolvedParams.competitor);
  
  if (!competitor) {
    return {
      title: 'Solar Company Comparison | Soltronic Energy',
    };
  }

  return {
    title: `Soltronic Energy vs ${competitor.name} Comparison | Best Solar in Pakistan`,
    description: `Comparing Soltronic Energy vs ${competitor.name}. Evaluate system design, Tier-1 hardware options, warranty terms, and pricing for your solar system in Pakistan.`,
  };
}

export default async function CompetitorComparisonPage({ params }: Props) {
  const resolvedParams = await params;
  const competitor = COMPETITORS.find((c) => c.slug === resolvedParams.competitor);

  if (!competitor) {
    notFound();
  }

  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Soltronic Energy vs ${competitor.name}`,
    "description": `Comprehensive comparison of solar solution providers in Pakistan: Soltronic Energy vs ${competitor.name}.`,
  };

  return (
    <main className="w-full overflow-x-hidden pt-10 pb-10">
      <SchemaMarkup schema={comparisonSchema} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/vs" className="hover:underline">Comparisons</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">Soltronic vs {competitor.name}</span>
        </nav>

        {/* Hero Banner */}
        <div className="bg-surface-container-low rounded-3xl p-8 md:p-12 border border-outline-variant/20 mb-12 text-center shadow-sm">
          <span className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm mb-2 block">Solar Provider Comparison</span>
          <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4">
            Soltronic Energy <span className="text-gray-400">vs</span> {competitor.name}
          </h1>
          <p className="text-on-surface-variant max-w-3xl mx-auto text-base md:text-lg mb-8">
            Looking for the right solar energy partner in Pakistan? Compare technical capabilities, component flexibility, and long-term service value between Soltronic Energy and {competitor.name}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/epc" className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition shadow-lg">
              Get Soltronic Quote
            </Link>
            <Link href="/contact" className="border border-gray-300 text-gray-800 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition">
              Consult Solar Engineer
            </Link>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-12">
          <div className="p-6 bg-gray-50 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900">Feature Comparison Overview</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100/70 text-gray-700 uppercase font-bold text-xs tracking-wider">
                  <th className="p-4 sm:p-5">Feature / Metric</th>
                  <th className="p-4 sm:p-5 bg-green-50 text-green-900 border-l border-r border-green-100">Soltronic Energy</th>
                  <th className="p-4 sm:p-5">{competitor.name}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800">Hardware Openness</td>
                  <td className="p-4 sm:p-5 bg-green-50/50 text-green-900 font-medium">100% Open Standards (No vendor lock-in)</td>
                  <td className="p-4 sm:p-5 text-gray-600">{competitor.highlight}</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800">Tier-1 Components</td>
                  <td className="p-4 sm:p-5 bg-green-50/50 text-green-900 font-medium">Direct Sourced Tier-1 Panels & Inverters</td>
                  <td className="p-4 sm:p-5 text-gray-600">Standard Market Sourcing</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800">Net Metering Support</td>
                  <td className="p-4 sm:p-5 bg-green-50/50 text-green-900 font-medium">Complete End-to-End DISCO Approval</td>
                  <td className="p-4 sm:p-5 text-gray-600">Full / Partial Execution</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800">Custom Engineering</td>
                  <td className="p-4 sm:p-5 bg-green-50/50 text-green-900 font-medium">Tailored SLDs & Load Optimization</td>
                  <td className="p-4 sm:p-5 text-gray-600">Package-based or Custom EPC</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800">Nationwide Footprint</td>
                  <td className="p-4 sm:p-5 bg-green-50/50 text-green-900 font-medium">All Major Cities across Pakistan</td>
                  <td className="p-4 sm:p-5 text-gray-600">{competitor.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Why Soltronic Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Customers Choose Soltronic Energy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {competitor.soltronicAdvantage.map((adv, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 bg-green-100 text-green-700 rounded-xl flex items-center justify-center font-bold text-lg mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{adv}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready for an Unbiased Solar Proposal?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm md:text-base">
            Get an exact bill-saving estimate and custom engineering layout for your home or business in Pakistan.
          </p>
          <Link href="/epc" className="bg-primary hover:bg-green-600 text-white px-8 py-3.5 rounded-xl font-bold transition inline-block shadow-lg">
            Request Free Proposal
          </Link>
        </div>

      </div>
    </main>
  );
}
