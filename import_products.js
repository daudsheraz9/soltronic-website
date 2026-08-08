const xlsx = require('xlsx');
const fs = require('fs');

const workbook = xlsx.readFile('public/Soltronic_Products_By_Category.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(worksheet);

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

const products = data.map((row, index) => {
  const name = row['Product Name'] || `Product ${index + 1}`;
  
  let category = "SOLAR PANELS";
  if (name.toLowerCase().includes('inverter') || (row['Type'] && row['Type'].toLowerCase().includes('inverter'))) {
    category = "HYBRID INVERTERS";
  } else if (name.toLowerCase().includes('battery') || (row['Type'] && row['Type'].toLowerCase().includes('battery'))) {
    category = "BATTERIES";
  }

  const powerMatch = row['Rating (kW)'];
  const powerStr = powerMatch ? `${powerMatch}kW` : "";
  const imageUrl = row['Product Image Link'] || "/product-main-image-2.png";

  return {
    id: (index + 1).toString(),
    slug: slugify(name),
    category: category,
    title: name,
    vendor: "By SOLTRONIC",
    description: row['Product Details'] || name,
    power: powerStr,
    efficiency: "98%", 
    warranty: "10 Yrs",
    image: imageUrl,
    gallery: [
      imageUrl,
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCOV7CGyIyyNRwGT5fXxmXVnGK2TKlo6eqc1pND82B8rWP8BFQwwccIdgIYoJ9YK6UWnTO6EZ_Ao75bgIH9nAkyIMPuWo14d4Xhzn4SlI9JOph_dhZXpJHKoCbA8rBzC6RAd9OvMVDC6iwVsQFxhHKw5u5jFimt3Sf2SgiYGNqbPhkMVXusXoRhUeO-polx01-9AXyJDEzYJczRme74JGKJVVcKwcnUsQpmUeXDw8fNf8ok7lD9WGJG',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCvKylMFXefPhfevGgbOMkSCAdzC-61y8dl4k4_7iHYVawETTLDVPeiiQz5ts7YOtWVZ6hq8s0DGKcxwhGxoKHwlse_jhNRXX0rETnM70dnVuHzi8VZANnldV4Ze0gTu78I_Tp1yDCxZlpry-EuCRg63nK0NXrJV6_JrIcZwOGuaByidkO2bXHmySRhIXFQqmLmROr7mkEpAZALnMWXx_v5f4hQs5CGQ9ol6oy--Hf0GGGix1FN3tB5'
    ],
    price: row['Prices'] ? `Rs. ${row['Prices']}` : "Get Quote",
    specifications: {
      power: powerStr,
      frameThickness: "N/A",
      cellType: "N/A",
      connector: "N/A",
      frameColor: "N/A",
      cell: "N/A",
      cellTechnology: "N/A",
      cecModel: row['CEC Model'] || "N/A"
    },
    shipping: {
      weight: row['Weight (kg)'] ? row['Weight (kg)'].toString() : "N/A",
      qtyPerPallet: "N/A",
      dimension: row['Dimension (L*W*H mm)'] || "N/A"
    },
    warrantyInfo: {
      productWarranty: "10 Yrs",
      performanceWarranty: "25 Yrs"
    }
  };
});

let outputStr = `export interface ProductSpec {
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

export const productsData: Product[] = ${JSON.stringify(products, null, 2)};

export const featuredProductsData: Product[] = ${JSON.stringify(products.slice(0, 4), null, 2)};
`;

fs.writeFileSync('src/data/products.ts', outputStr);
console.log('Successfully written to src/data/products.ts');
