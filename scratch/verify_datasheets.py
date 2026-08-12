import os, re, json

pdf_dir = r'd:\soltronic-website\public\Products Datasheets'
pdf_files = set(os.listdir(pdf_dir))

with open(r'd:\soltronic-website\src\data\products.ts', 'r', encoding='utf-8') as f:
    code = f.read()

match = re.search(r'export const productsData: Product\[\] = (\[.*?\]);\n\nexport const featuredProductsData', code, re.DOTALL)
products = json.loads(match.group(1))

print(f"Total PDFs in folder: {len(pdf_files)}")
print(f"Total Products in ts: {len(products)}\n")

matched_count = 0
for p in products:
    title = p['title']
    expected_filename = f"{title}.pdf"
    
    if expected_filename in pdf_files:
        matched_count += 1
        print(f"MATCH: {title}")
    else:
        close_matches = [f for f in pdf_files if p['slug'] in f.lower() or p['vendor'].lower() in f.lower()]
        print(f"MISMATCH: '{title}' -> Expected '{expected_filename}'")
        print(f"   Close files in dir: {close_matches}")

print(f"\nTotal exact matches: {matched_count}/{len(products)}")
