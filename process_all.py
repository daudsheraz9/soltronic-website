import os
import re
import json
import shutil
import openpyxl
from PIL import Image

try:
    from pillow_heif import register_heif_opener
    register_heif_opener()
except ImportError:
    pass

base_dir = r"d:\soltronic-website"
excel_path = os.path.join(base_dir, "public", "Soltronic_Product_Master_Clean_12AUG.xlsx")
img_src_dir = os.path.join(base_dir, "public", "Products-images")
img_out_dir = os.path.join(base_dir, "public", "products-webp")
products_ts_path = os.path.join(base_dir, "src", "data", "products.ts")

os.makedirs(img_out_dir, exist_ok=True)

print("--- Step 1: Converting Images to WEBP with Clean White Background ---")
image_files = os.listdir(img_src_dir)
converted_images = {}

for fname in image_files:
    fpath = os.path.join(img_src_dir, fname)
    if os.path.isfile(fpath):
        base_name = os.path.splitext(fname)[0]
        out_fname = f"{base_name}.webp"
        out_path = os.path.join(img_out_dir, out_fname)
        
        try:
            with Image.open(fpath) as img:
                if img.mode == 'P':
                    img = img.convert('RGBA')
                
                if img.mode in ('RGBA', 'LA') or 'transparency' in img.info:
                    bg = Image.new('RGB', img.size, (255, 255, 255))
                    alpha_mask = img.split()[-1] if img.mode in ('RGBA', 'LA') else None
                    if alpha_mask:
                        bg.paste(img, (0, 0), mask=alpha_mask)
                    else:
                        bg.paste(img, (0, 0))
                    final_img = bg
                else:
                    final_img = img.convert('RGB')
                
                final_img.save(out_path, "WEBP", quality=90)
            converted_images[base_name.lower()] = f"/products-webp/{out_fname}"
            print(f"Converted on White BG: {fname} -> {out_fname}")
        except Exception as e:
            dest_file = os.path.join(img_out_dir, fname)
            shutil.copy(fpath, dest_file)
            converted_images[base_name.lower()] = f"/products-webp/{fname}"
            print(f"Copied fallback: {fname}")

print(f"Successfully processed {len(converted_images)} images.")

print("\n--- Step 2: Reading Excel File ---")
wb = openpyxl.load_workbook(excel_path)
sheet = wb.active

headers = [cell.value for cell in sheet[1]]
rows_data = [dict(zip(headers, row)) for row in sheet.iter_rows(min_row=2, values_only=True) if any(row)]

def slugify(text):
    text = str(text).lower().strip()
    text = re.sub(r'\s+', '-', text)
    text = re.sub(r'[^\w\-]+', '', text)
    text = re.sub(r'\-\-+', '-', text)
    return text.strip('-')

def infer_category(title, cat_val=""):
    combined = (str(title) + " " + str(cat_val)).lower()
    if 'panel' in combined: return 'SOLAR PANELS'
    if 'inverter' in combined: return 'HYBRID INVERTERS'
    if 'battery' in combined or 'storage' in combined or 'lithium' in combined: return 'BATTERIES'
    if 'washer' in combined: return 'PRESSURE WASHERS'
    if 'charger' in combined or 'ev' in combined: return 'EV CHARGERS'
    if 'sensor' in combined or 'dongle' in combined or 'wlan' in combined: return 'ELECTRICALS'
    return 'SOLAR PANELS'

def infer_vendor(title, brand_val=""):
    if brand_val and str(brand_val).strip() and str(brand_val).strip() != 'None':
        return str(brand_val).strip()
    combined = str(title).lower()
    if 'huawei' in combined: return 'Huawei'
    if 'solis' in combined: return 'Solis'
    if 'risen' in combined: return 'Risen Energy'
    if 'canadian' in combined: return 'Canadian Solar'
    if 'pylontech' in combined or 'pylontect' in combined: return 'Pylontech'
    if 'volnex' in combined: return 'Volnex'
    if 'grovolt' in combined: return 'Grovolt'
    if 'goodwe' in combined: return 'GoodWe'
    if 'ingco' in combined: return 'INGCO'
    return 'Soltronic'

def parse_tech_specs(spec_text):
    specs = {
        "power": "N/A", "frameThickness": "N/A", "cellType": "N/A",
        "connector": "N/A", "frameColor": "N/A", "cell": "N/A",
        "cellTechnology": "N/A", "cecModel": "N/A"
    }
    if not spec_text or str(spec_text).strip() == 'None':
        return specs
    
    for line in str(spec_text).split('\n'):
        if ':' in line:
            k, v = line.split(':', 1)
            k_lower = k.strip().lower()
            val = v.strip()
            if 'power' in k_lower: specs['power'] = val
            elif 'frame thickness' in k_lower: specs['frameThickness'] = val
            elif 'cell type' in k_lower: specs['cellType'] = val
            elif 'connector' in k_lower: specs['connector'] = val
            elif 'frame color' in k_lower: specs['frameColor'] = val
            elif 'cell technology' in k_lower: specs['cellTechnology'] = val
            elif 'cell' == k_lower: specs['cell'] = val
            elif 'cec model' in k_lower: specs['cecModel'] = val
    return specs

def parse_shipping(ship_text):
    shipping = {"weight": "N/A", "qtyPerPallet": "N/A", "dimension": "N/A"}
    if not ship_text or str(ship_text).strip() == 'None':
        return shipping
    
    for line in str(ship_text).split('\n'):
        if ':' in line:
            k, v = line.split(':', 1)
            k_lower = k.strip().lower()
            val = v.strip()
            if 'weight' in k_lower: shipping['weight'] = val
            elif 'pallet' in k_lower or 'qty' in k_lower: shipping['qtyPerPallet'] = val
            elif 'dimension' in k_lower: shipping['dimension'] = val
    return shipping

def parse_warranty(spec_text):
    w_info = {"productWarranty": "10 Yrs", "performanceWarranty": "25 Yrs"}
    if not spec_text or str(spec_text).strip() == 'None':
        return w_info
    
    for line in str(spec_text).split('\n'):
        if ':' in line:
            k, v = line.split(':', 1)
            k_lower = k.strip().lower()
            val = v.strip()
            if 'product warranty' in k_lower: w_info['productWarranty'] = val
            elif 'performance warranty' in k_lower: w_info['performanceWarranty'] = val
    return w_info

# Smart Image Matcher
def find_product_images(title):
    norm_title = re.sub(r'[^\w]', '', title.lower())
    nums_title = set(re.findall(r'\d+\.?\d*', title))
    
    brands = ['huawei', 'solis', 'risen', 'canadian', 'pylontech', 'pylontect', 'volnex', 'grovolt', 'goodwe', 'ingco']
    title_brand = next((b for b in brands if b in norm_title), '')
    
    matched_v = {}
    
    for base_name, img_url in converted_images.items():
        v_match = re.search(r'v([1-4])$', base_name)
        v_num = int(v_match.group(1)) if v_match else 1
        prefix = base_name[:v_match.start()] if v_match else base_name
        norm_prefix = re.sub(r'[^\w]', '', prefix)
        nums_prefix = set(re.findall(r'\d+\.?\d*', prefix))
        
        prefix_brand = next((b for b in brands if b in norm_prefix), '')
        if title_brand and prefix_brand and title_brand != prefix_brand:
            continue
            
        common_nums = nums_title.intersection(nums_prefix)
        
        score = 0
        if title_brand and title_brand == prefix_brand:
            score += 15
        if common_nums:
            score += 25 * len(common_nums)
            
        title_tokens = set(re.findall(r'[a-zA-Z0-9]+', title.lower()))
        prefix_tokens = set(re.findall(r'[a-zA-Z0-9]+', prefix.lower()))
        overlap = title_tokens.intersection(prefix_tokens)
        score += len(overlap) * 2
        
        if norm_prefix in norm_title or norm_title in norm_prefix:
            score += 40
            
        if score > 15:
            if v_num not in matched_v or score > matched_v[v_num][0]:
                matched_v[v_num] = (score, img_url)

    gallery = []
    for v in [1, 2, 3, 4]:
        if v in matched_v:
            gallery.append(matched_v[v][1])
            
    main_image = gallery[0] if gallery else "/product-main-image-2.png"
    if not gallery:
        gallery = [main_image]

    return main_image, gallery

# Build Products array
products_list = []

for idx, r in enumerate(rows_data):
    title = r.get('Product Name') or r.get('Title') or r.get('Name') or f"Product {idx+1}"
    title = str(title).strip()
    
    desc = r.get('Product Description') or r.get('Product Details') or r.get('Description') or title
    model_series = r.get('Model / Series') or ''
    if model_series and str(model_series) != 'None':
        desc = f"{desc}\n\nModel: {model_series}"

    price_val = r.get('Prices') or r.get('Price') or ''
    if price_val and str(price_val) != 'None':
        try:
            price_str = f"Rs. {int(float(str(price_val).replace(',', ''))):,}"
        except:
            price_str = f"Rs. {price_val}"
    else:
        price_str = "Get Quote"

    status_val = str(r.get('Status') or 'In Stock').strip()

    category = infer_category(title, r.get('Category', ''))
    vendor = infer_vendor(title, r.get('Brand', ''))
    main_img, gallery_imgs = find_product_images(title)
    
    tech_specs = parse_tech_specs(r.get('Technical Specifications'))
    shipping_info = parse_shipping(r.get('Shipping Information'))
    warranty_info = parse_warranty(r.get('Technical Specifications'))

    power_str = tech_specs.get('power', 'N/A')
    if power_str == 'N/A':
        match = re.search(r'(\d+\.?\d*)\s*(kW|W|kWh)', title, re.IGNORECASE)
        if match:
            power_str = match.group(0)

    product_obj = {
        "id": str(idx + 1),
        "slug": slugify(title),
        "category": category,
        "title": title,
        "vendor": vendor,
        "description": str(desc),
        "power": power_str,
        "efficiency": "98%" if "inverter" in category.lower() else ("22.5%" if "panel" in category.lower() else "97%"),
        "warranty": warranty_info.get('productWarranty', '10 Yrs'),
        "status": status_val,
        "image": main_img,
        "gallery": gallery_imgs,
        "price": price_str,
        "specifications": tech_specs,
        "shipping": shipping_info,
        "warrantyInfo": warranty_info
    }
    products_list.append(product_obj)

# Step 3: Write products.ts
ts_content = f"""export interface ProductSpec {{
  power: string;
  frameThickness: string;
  cellType: string;
  connector: string;
  frameColor: string;
  cell: string;
  cellTechnology: string;
  cecModel: string;
}}

export interface ShippingInfo {{
  weight: string;
  qtyPerPallet: string;
  dimension: string;
}}

export interface WarrantyInfo {{
  productWarranty: string;
  performanceWarranty: string;
}}

export interface Product {{
  id: string;
  slug: string;
  category: string;
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
  specifications: ProductSpec;
  shipping: ShippingInfo;
  warrantyInfo: WarrantyInfo;
}}

export const productsData: Product[] = {json.dumps(products_list, indent=2)};

export const featuredProductsData: Product[] = {json.dumps(products_list[:4], indent=2)};
"""

with open(products_ts_path, 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"\nSuccessfully wrote updated products to {products_ts_path}")
