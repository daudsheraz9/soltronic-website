import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import ProductDetail from '@/features/catalog/components/ProductDetail';
import { notFound } from 'next/navigation';
import { productsData } from '@/data/products';
import { Product } from '@/types/product';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const localProduct = productsData.find((p) => p.slug === resolvedParams.slug);

  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data: product } = await supabase
      .from('products')
      .select('title, description')
      .eq('slug', resolvedParams.slug)
      .single();

    if (product) {
      return {
        title: `${product.title} | Soltronic`,
        description: product.description,
      };
    }
  } catch (e) {
    // Ignore and fallback to local metadata
  }

  if (localProduct) {
    return {
      title: `${localProduct.title} | Soltronic`,
      description: localProduct.description,
    };
  }

  return {
    title: 'Product Not Found | Soltronic',
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const localProduct = productsData.find((p) => p.slug === resolvedParams.slug);

  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data: dbProduct, error } = await supabase
      .from('products')
      .select('*')
      .eq('slug', resolvedParams.slug)
      .single();

    if (dbProduct && !error) {
      const mergedProduct = {
        ...localProduct,
        ...dbProduct,
        specifications: {
          ...(localProduct?.specifications || {}),
          ...(dbProduct.specifications || {}),
        },
        shipping: {
          ...(localProduct?.shipping || {}),
          ...(dbProduct.shipping || {}),
        },
        warrantyInfo: {
          ...(localProduct?.warrantyInfo || {}),
          ...(dbProduct.warranty_info || dbProduct.warrantyInfo || {}),
        },
      };

      return <ProductDetail initialProduct={mergedProduct as Product} />;
    }
  } catch (err) {
    console.error('Supabase query error in ProductDetailPage:', err);
  }

  if (!localProduct) {
    notFound();
  }

  return <ProductDetail initialProduct={localProduct} />;
}
