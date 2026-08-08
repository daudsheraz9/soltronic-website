export interface ProductSpec {
  power: string;
  frameThickness: string;
  cellType: string;
  connector: string;
  frameColor: string;
  cell: string;
  cellTechnology: string;
  cecModel: string;
}

export interface ShippingInfo {
  weight: string;
  qtyPerPallet: string;
  dimension: string;
}

export interface WarrantyInfo {
  productWarranty: string;
  performanceWarranty: string;
}

export interface Product {
  id: string;
  slug: string;
  category: string;
  title: string;
  vendor: string;
  description: string;
  power: string;
  efficiency: string;
  warranty: string;
  labels?: string[];
  image: string;
  gallery?: string[];
  price: string;
  brandImage?: string;
  specifications: ProductSpec;
  shipping: ShippingInfo;
  warrantyInfo: WarrantyInfo;
}
