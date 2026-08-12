import os, re, json, openpyxl

excel_path = r"d:\soltronic-website\public\Soltronic_Product_Master_Clean_12AUG.xlsx"
img_out_dir = r"d:\soltronic-website\public\products-webp"
img_src_dir = r"d:\soltronic-website\public\Products-images"
products_ts_path = r"d:\soltronic-website\src\data\products.ts"

# Get all webp files in products-webp AND original Products-images
available_files = {}

# Map base names to webp URL (or fallback)
for fname in os.listdir(img_out_dir):
    base = os.path.splitext(fname)[0].lower()
    available_files[base] = f"/products-webp/{fname}"

for fname in os.listdir(img_src_dir):
    base = os.path.splitext(fname)[0].lower()
    if base not in available_files:
        available_files[base] = f"/Products-images/{fname}"

wb = openpyxl.load_workbook(excel_path)
sheet = wb.active
headers = [cell.value for cell in sheet[1]]
rows_data = [dict(zip(headers, row)) for row in sheet.iter_rows(min_row=2, values_only=True) if any(row)]

def normalize(text):
    return re.sub(r'[^\w]', '', str(text).lower())

def extract_numbers(text):
    return set(re.findall(r'\d+\.?\d*', str(text)))

def match_images_for_product(title):
    norm_title = normalize(title)
    nums_title = extract_numbers(title)
    
    # Brands
    brands = ['huawei', 'solis', 'risen', 'canadian', 'pylontech', 'pylontect', 'volnex', 'grovolt', 'goodwe', 'ingco']
    title_brand = next((b for b in brands if b in norm_title), '')
    
    matched_v = {}
    
    for base_name, img_url in available_files.items():
        v_match = re.search(r'v([1-4])$', base_name)
        v_num = int(v_match.group(1)) if v_match else 1
        prefix = base_name[:v_match.start()] if v_match else base_name
        norm_prefix = normalize(prefix)
        nums_prefix = extract_numbers(prefix)
        
        # Check brand match
        prefix_brand = next((b for b in brands if b in norm_prefix), '')
        if title_brand and prefix_brand and title_brand != prefix_brand:
            continue
            
        # Check number overlap (e.g. 625, 115, 8.2, 5.12, 16, 740, 1500)
        common_nums = nums_title.intersection(nums_prefix)
        
        score = 0
        if title_brand and title_brand == prefix_brand:
            score += 10
        if common_nums:
            score += 20 * len(common_nums)
            
        # Token overlap
        title_tokens = set(re.findall(r'[a-zA-Z0-9]+', title.lower()))
        prefix_tokens = set(re.findall(r'[a-zA-Z0-9]+', prefix.lower()))
        overlap = title_tokens.intersection(prefix_tokens)
        score += len(overlap) * 2
        
        if norm_prefix in norm_title or norm_title in norm_prefix:
            score += 30
            
        if score > 15:
            if v_num not in matched_v or score > matched_v[v_num][0]:
                matched_v[v_num] = (score, img_url, base_name)
                
    gallery = []
    for v in [1, 2, 3, 4]:
        if v in matched_v:
            gallery.append(matched_v[v][1])
            
    main_img = gallery[0] if gallery else "/product-main-image-2.png"
    if not gallery:
        gallery = [main_img]
        
    return main_img, gallery, matched_v

print("=== PRODUCT TO IMAGE MATCHING REPORT ===")
all_matched_correctly = True
for idx, r in enumerate(rows_data):
    title = str(r.get('Product Name') or r.get('Title') or f"Product {idx+1}").strip()
    main_img, gallery, debug = match_images_for_product(title)
    print(f"\n[{idx+1}] {title}")
    print(f"   -> Main Image: {main_img}")
    print(f"   -> Gallery ({len(gallery)}): {gallery}")
    if "/product-main-image-2.png" in main_img:
        print("   WARNING: NO IMAGE MATCHED!")
        all_matched_correctly = False
