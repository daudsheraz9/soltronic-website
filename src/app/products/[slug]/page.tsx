import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import ProductDetailClient from './ProductDetailClient';
import { notFound } from 'next/navigation';
import { Product } from '@/data/products';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: product } = await supabase
    .from('products')
    .select('title, description')
    .eq('slug', resolvedParams.slug)
    .single();

  if (!product) {
    return {
      title: 'Product Not Found | Soltronic',
    };
  }

  return {
    title: `${product.title} | Soltronic`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', resolvedParams.slug)
    .single();

  if (error || !product) {
    notFound();
  }

  return (
    <ProductDetailClient initialProduct={product as Product} />
  );
}
