import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import ProductsClient from './ProductsClient';
import { Product } from '@/data/products';

export const metadata = {
  title: 'Products | Soltronic',
  description: 'Explore our range of solar panels, inverters, storage, and more.',
};

export default async function ProductsPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: products } = await supabase.from('products').select('*');

  return (
    <ProductsClient initialProducts={(products as Product[]) || []} />
  );
}
