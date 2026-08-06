import pandas as pd
import json
import math

df = pd.read_excel('public/gnrix (5).xlsx')
brands = []
for i, r in df.iterrows():
    name = str(r.get('Brands', '')).strip()
    if name == 'nan' or not name:
        continue
    logo = r.get('Brands logos', '')
    if isinstance(logo, float) and math.isnan(logo):
        logo = ''
    else:
        logo = str(logo).strip()
    brands.append({'name': name, 'logo': logo})

brands = sorted(brands, key=lambda x: x['name'].lower())

with open('public/brands_data.json', 'w') as f:
    json.dump(brands, f)
