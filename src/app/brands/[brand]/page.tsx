import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

type Props = {
  params: Promise<{ brand: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const brand = resolvedParams.brand.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    title: `${brand} Solar Panels, Inverters & Batteries | Soltronic Energy`,
    description: `Discover top-tier ${brand} solar products at Soltronic Energy. Compare prices, check specifications, and get quotes for ${brand} inverters and panels.`,
  };
}

export default async function BrandPage({ params }: Props) {
  const resolvedParams = await params;
  const brandSlug = resolvedParams.brand.toLowerCase().replace(/-/g, ' ');
  const brand = resolvedParams.brand.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  
  // ilike allows case-insensitive matching for the brand name
  const { data: products } = await supabase.from('products').select('*').ilike('vendor', `%${brandSlug}%`).limit(12);

  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${brand} Solar Products`,
    "description": `Shop and explore ${brand} solar products and solutions.`,
  };

  return (
    <main className="w-full overflow-x-hidden pt-10 pb-10">
      <SchemaMarkup schema={brandSchema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Hero */}
        <div className="bg-surface-container-low rounded-3xl p-8 md:p-12 border border-outline-variant/20 mb-12 flex flex-col items-center text-center shadow-sm">
          <div className="h-20 w-40 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
            <span className="text-2xl font-black text-gray-800 uppercase tracking-widest">{brand}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            {brand} Solar Solutions
          </h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg mb-8">
            As an authorized partner and trusted installer, Soltronic Energy provides the complete range of {brand} solar panels, inverters, and energy storage systems.
          </p>
        </div>

        {/* Dynamic Products Grid for the Brand */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-dark">Available {brand} Products</h2>
          </div>
          
          {products && products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <Link href={`/products/${product.id}`} key={index} className="bg-white flex flex-col group border border-gray-100 shadow-sm rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-md transition p-4">
                  <div className="h-40 bg-[#f4f7fb] flex justify-center items-center rounded-xl p-4 mb-4">
                    <img src={product.image} alt={product.title} className="max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition duration-500" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <span className="text-[10px] font-bold text-red-500 tracking-wider uppercase mb-1">{product.category}</span>
                    <h3 className="text-sm font-bold text-[#0f172a] line-clamp-2">{product.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-xl p-8 text-center text-gray-500">
              <p>No products currently found for this brand in our database. Please check back later or contact us for availability.</p>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
