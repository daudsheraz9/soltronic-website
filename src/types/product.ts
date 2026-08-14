import type { ProductCategoryKey } from '@/features/catalog/schemas/specificationSchemas';

export interface ProductSpec {
  [key: string]: any;
}

export interface ShippingInfo {
  [key: string]: any;
}

export interface WarrantyInfo {
  [key: string]: any;
}

export interface Product {
  id: string;
  slug: string;
  category: string;
  categoryKey?: ProductCategoryKey;
  title: string;
  vendor: string;
  description: string;
  power: string;
  efficiency: string;
  warranty: string;
  status?: string;
  labels?: string[];
  image: string;
  gallery?: string[];
  price: string;
  brandImage?: string;
  specifications: Record<string, any>;
  shipping: Record<string, any>;
  warrantyInfo: Record<string, any>;
}
