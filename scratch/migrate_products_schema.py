import re, json

with open(r'd:\soltronic-website\src\data\products.ts', 'r', encoding='utf-8') as f:
    code = f.read()

match = re.search(r'export const productsData: Product\[\] = (\[.*?\]);\n\nexport const featuredProductsData', code, re.DOTALL)
if not match:
    print("Could not find productsData array!")
    exit(1)

products = json.loads(match.group(1))

for p in products:
    pid = str(p.get('id'))
    specs = p.get('specifications', {})
    shipping = p.get('shipping', {})
    warranty = p.get('warrantyInfo', {})

    if pid == '4': # Grovolt Ragnar 8.2 kW
        shipping['weightKg'] = 14.2
        shipping['dimensionsMm'] = "500 × 300 × 140 mm"

    elif pid == '7': # Huawei Smart Dongle WLAN-FE
        specs['ipRating'] = 'IP65'
        specs['protocol'] = '802.11b/g/n'
        specs['supportedDevices'] = 'Huawei SUN2000 inverters'

    elif pid == '8': # Huawei Smart Energy Sensor
        specs['ipRating'] = 'IP51'
        specs['protocol'] = 'Modbus-RTU'
        specs['supportedDevices'] = 'Huawei SUN2000 inverters, SmartLogger'
        shipping['weightKg'] = 1.5
        shipping['dimensionsMm'] = '72 × 100 × 65.5 mm'

    elif pid == '9': # Huawei Smart Energy Sensor - Special
        specs['ipRating'] = 'IP51'
        specs['protocol'] = 'Modbus-RTU'
        specs['supportedDevices'] = 'Huawei SUN2000 M1/M2 series, SmartLogger'

    elif pid == '11': # Pylontech Fidus 5.12 kWh
        specs['maxChargeCurrentA'] = 100
        specs['maxDischargeCurrentA'] = 100
        specs['peakCurrentA'] = 200

    elif pid == '12': # Pylontech Fidus Plus 16 kWh
        specs['maxChargeCurrentA'] = 180
        specs['maxDischargeCurrentA'] = 200
        specs['peakCurrentA'] = 300

    elif pid == '23': # Volnex Armor 5.12 kWh
        specs['maxChargeCurrentA'] = 100
        specs['maxDischargeCurrentA'] = 100
        specs['peakCurrentA'] = 200

    elif pid == '24': # Volnex Alpha 16
        specs['maxChargeCurrentA'] = 200
        specs['maxDischargeCurrentA'] = 200
        specs['peakCurrentA'] = 300

    p['specifications'] = specs
    p['shipping'] = shipping
    p['warrantyInfo'] = warranty

ts_output = f"""import {{ ProductCategoryKey }} from './specificationSchemas';

export interface ProductSpec {{
  [key: string]: any;
}}

export interface ShippingInfo {{
  [key: string]: any;
}}

export interface WarrantyInfo {{
  [key: string]: any;
}}

export interface Product {{
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
}}

export const productsData: Product[] = {json.dumps(products, indent=2)};

export const featuredProductsData: Product[] = [
  productsData[0],  // Canadian Solar 625W Panel (id 1)
  productsData[20], // Solis 6 kW L Plus (id 21)
  productsData[10], // Pylontech Fidus 5.12 kWh Battery (id 11)
  productsData[9]   // INGCO High Pressure Washer 1500W (id 10)
];
"""

with open(r'd:\soltronic-website\src\data\products.ts', 'w', encoding='utf-8') as f:
    f.write(ts_output)

print("Updated products.ts with verified technical datasheet information!")
