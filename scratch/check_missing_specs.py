import re, json

with open(r'd:\soltronic-website\src\data\products.ts', 'r', encoding='utf-8') as f:
    code = f.read()

match = re.search(r'export const productsData: Product\[\] = (\[.*?\]);\n\nexport const featuredProductsData', code, re.DOTALL)
products = json.loads(match.group(1))

schemas = {
    'solar_panel': ['powerW', 'cellTechnology', 'cellType', 'cellConfiguration', 'frameThicknessMm', 'connector', 'frameColor', 'cecModel', 'weightKg', 'qtyPerPallet', 'dimensionsMm', 'productWarrantyYears', 'performanceWarrantyYears'],
    'solar_inverter': ['ratingKw', 'inverterType', 'phase', 'mpptCount', 'ipRating', 'useApplication', 'cecModel', 'ieee2030CsipAus', 'weightKg', 'dimensionsMm', 'productWarrantyYears'],
    'solar_battery': ['batteryCapacityKwh', 'usableEnergyKwh', 'ratedVoltageV', 'capacityAh', 'batteryType', 'voltageClass', 'ipRating', 'depthOfDischargePercent', 'cycleLife', 'maxChargeCurrentA', 'maxDischargeCurrentA', 'peakCurrentA', 'communication', 'bms', 'maxParallelUnits', 'cecModel', 'weightKg', 'dimensionsMm', 'productWarrantyYears'],
    'pressure_washer': ['powerW', 'maxPressureBar', 'maxPressurePsi', 'flowRateLpm', 'voltageV', 'frequencyHz', 'hoseLengthM', 'ipRating', 'motorType', 'useApplication', 'weightKg', 'dimensionsMm', 'productWarrantyYears'],
    'solar_accessory': ['accessoryType', 'model', 'useApplication', 'gridType', 'voltageRange', 'currentRange', 'ctRatio', 'ipRating', 'interface', 'communication', 'protocol', 'supportedDevices', 'powerConsumption', 'measurementAccuracy', 'weightKg', 'dimensionsMm', 'productWarrantyYears']
}

out_lines = []
out_lines.append(f"TOTAL PRODUCTS REVIEWED: {len(products)}\n")

for p in products:
    cat_key = p.get('categoryKey', 'solar_panel')
    spec_fields = schemas.get(cat_key, [])
    
    combined = {}
    combined.update(p.get('specifications', {}))
    combined.update(p.get('shipping', {}))
    combined.update(p.get('warrantyInfo', {}))

    present = [f for f in spec_fields if f in combined and combined[f] not in [None, '', 'N/A']]
    missing = [f for f in spec_fields if f not in combined or combined[f] in [None, '', 'N/A']]

    out_lines.append(f"• Product #{p['id']}: {p['title']} [{p['category']}]")
    out_lines.append(f"  Category Schema: {cat_key}")
    out_lines.append(f"  Existing Specs ({len(present)}): {', '.join(present)}")
    if missing:
        out_lines.append(f"  Missing Specs ({len(missing)}): {', '.join(missing)}")
    else:
        out_lines.append("  Missing Specs: None (100% Fully Populated)")
    out_lines.append("")

with open(r'd:\soltronic-website\scratch\report.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out_lines))

print("Report saved!")
