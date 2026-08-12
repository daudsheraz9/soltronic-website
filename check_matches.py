import os, re, openpyxl

excel_path = r"d:\soltronic-website\public\Soltronic_Product_Master_Clean_12AUG.xlsx"
img_src_dir = r"d:\soltronic-website\public\Products-images"

wb = openpyxl.load_workbook(excel_path)
sheet = wb.active

headers = [cell.value for cell in sheet[1]]
rows_data = []
for row in sheet.iter_rows(min_row=2, values_only=True):
    if any(row):
        r_dict = dict(zip(headers, row))
        rows_data.append(r_dict)

image_files = os.listdir(img_src_dir)
image_prefixes = set()
for f in image_files:
    base = os.path.splitext(f)[0]
    v_match = re.search(r'v[1-4]$', base)
    if v_match:
        prefix = base[:v_match.start()]
        image_prefixes.add((prefix, f))

print("=== IMAGE PREFIXES ===")
for p, f in sorted(image_prefixes):
    print(f"Prefix: {p} -> Sample file: {f}")

print("\n=== EXCEL PRODUCTS ===")
for idx, r in enumerate(rows_data):
    title = r.get('Product Name') or r.get('Title') or f"Product {idx+1}"
    print(f"[{idx+1}] {title}")
