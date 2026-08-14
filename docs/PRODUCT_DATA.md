# Product Data & Ingestion Architecture

## Overview
Soltronic Energy manages product catalogs across multiple categories:
- Solar Inverters
- Solar Storage Batteries
- Solar Panels (PV Modules)
- Pressure Washers & Accessories

## Product Data Flow

```text
Source Excel / Data Sheets
       │
       ▼
scripts/catalog/import-products.mjs
       │
       ▼
scripts/catalog/normalize-products.mjs
       │
       ▼
src/data/catalog/products.generated.ts
       │
       ▼
src/features/catalog/queries/
       │
       ▼
Next.js UI (/products, /products/[slug])
```

## Schema Management
Category-specific specification schemas live in `src/features/catalog/schemas/`.
Each product category enforces its specific technical parameter types (e.g. inverter max input voltage vs battery nominal capacity).
