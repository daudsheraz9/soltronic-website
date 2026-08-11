import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import ProductsClient from './ProductsClient';
import { Product } from '@/data/products';

import { Metadata } from 'next';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const category = resolvedParams.category;
  
  if (category && typeof category === 'string') {
    const formattedCat = category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return {
      title: `${formattedCat} | Solar Products & Equipment | Soltronic Energy`,
      description: `Explore our top-quality ${formattedCat} at Soltronic Energy in Pakistan. Get the best solar panels, inverters, and accessories for residential and commercial use.`,
      keywords: [`${category} pakistan`, `solar ${category} price`, `buy ${category}`, `soltronic ${category}`],
    }
  }

  return {
    title: 'All Solar Products | Panels, Inverters & Batteries | Soltronic Energy',
    description: 'Explore our full range of solar panels, inverters, storage batteries, EV chargers, and mounting structures at Soltronic Energy Pakistan.',
    keywords: ['solar products pakistan', 'solar panels', 'solar inverters', 'lithium batteries', 'ev chargers lahore'],
  };
}
export default async function ProductsPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: products } = await supabase.from('products').select('*');

  return (
    <ProductsClient initialProducts={(products as Product[]) || []} />
  );
}
