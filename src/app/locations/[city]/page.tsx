import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

type Props = {
  params: Promise<{ city: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const city = resolvedParams.city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    title: `Best Solar Panels & Inverters in ${city} | Soltronic Energy`,
    description: `Looking for top-quality solar panels and inverters in ${city}? Soltronic Energy offers end-to-end solar solutions, installations, and products tailored for ${city}.`,
  };
}

export default async function LocationPage({ params }: Props) {
  const resolvedParams = await params;
  const city = resolvedParams.city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  
  const { data: products } = await supabase.from('products').select('*').limit(8);

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Solar Solutions in ${city}`,
    "description": `Discover the best solar products and installation services in ${city}.`,
  };

  return (
    <main className="w-full overflow-x-hidden pt-10 pb-10">
      <SchemaMarkup schema={localSchema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="bg-surface-container-low rounded-3xl p-8 md:p-12 border border-outline-variant/20 mb-12 text-center shadow-sm">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Local Solar Solutions</span>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Reliable Solar Energy in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500">{city}</span>
          </h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg mb-8">
            Whether you need tier-1 solar panels, high-efficiency inverters, or a complete solar system installation, Soltronic Energy brings the best clean energy solutions right to {city}.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/epc" className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition shadow-lg">
              Get a Free Quote in {city}
            </Link>
          </div>
        </div>

        {/* Dynamic Products Grid */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">Top Solar Products Available in {city}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(products || []).map((product, index) => (
              <Link href={`/products/${product.id}`} key={index} className="bg-white group border border-gray-100 shadow-sm rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-md transition block p-4">
                <div className="h-40 bg-[#f4f7fb] flex justify-center items-center rounded-xl p-4 mb-4">
                  <img src={product.image} alt={product.title} className="max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition duration-500" />
                </div>
                <h3 className="text-sm font-bold text-[#0f172a] line-clamp-2">{product.title}</h3>
                <p className="text-xs text-gray-500 mt-2">{product.vendor}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Value Prop Section */}
        <div className="grid md:grid-cols-2 gap-8 bg-surface-bright rounded-2xl p-8 border border-gray-100">
          <div>
            <h3 className="text-2xl font-bold mb-4">Why Choose Us in {city}?</h3>
            <ul className="space-y-3 text-on-surface-variant">
              <li className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500"></i> Fast, reliable shipping & support</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500"></i> Expert local installation partners</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500"></i> Genuine tier-1 brands</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500"></i> Best prices and after-sales service</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-center text-center">
            <h4 className="font-bold text-xl mb-2">Ready to switch to solar?</h4>
            <p className="text-sm text-gray-500 mb-4">Join hundreds of satisfied customers saving on energy bills.</p>
            <Link href="/contact" className="bg-black text-white py-2 px-4 rounded-lg font-bold mx-auto">Contact Our {city} Team</Link>
          </div>
        </div>

      </div>
    </main>
  );
}
