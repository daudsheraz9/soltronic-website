"use client";

import React from 'react';
import { Product } from '@/data/products';
import { CATEGORY_SCHEMAS, mapCategoryToKey, FieldDefinition } from '@/data/specificationSchemas';

export default function ProductSpecificationDisplay({ product }: { product: Product }) {
  const categoryKey = product.categoryKey || mapCategoryToKey(product.category);
  const schema = CATEGORY_SCHEMAS[categoryKey] || CATEGORY_SCHEMAS.solar_panel;

  // Helper to extract value from specifications, shipping, or warrantyInfo objects
  const getFieldValue = (key: string): { value: string | number | boolean | null; unit?: string } => {
    let rawVal: any = undefined;

    if (product.specifications && key in product.specifications) {
      rawVal = product.specifications[key];
    } else if (product.shipping && key in product.shipping) {
      rawVal = product.shipping[key];
    } else if (product.warrantyInfo && key in product.warrantyInfo) {
      rawVal = product.warrantyInfo[key];
    }

    // Fallback key lookups for legacy or database-provided records
    if (rawVal === undefined || rawVal === null || rawVal === '' || rawVal === 'N/A' || rawVal === 'n/a') {
      if (key === 'powerW' || key === 'ratingKw') rawVal = product.specifications?.power || product.power;
      else if (key === 'frameThicknessMm') rawVal = product.specifications?.frameThickness;
      else if (key === 'cellType') rawVal = product.specifications?.cellType;
      else if (key === 'connector') rawVal = product.specifications?.connector;
      else if (key === 'frameColor') rawVal = product.specifications?.frameColor;
      else if (key === 'cellConfiguration') rawVal = product.specifications?.cell;
      else if (key === 'cellTechnology') rawVal = product.specifications?.cellTechnology;
      else if (key === 'cecModel') rawVal = product.specifications?.cecModel;
      else if (key === 'weightKg') rawVal = product.shipping?.weight || product.shipping?.weightKg;
      else if (key === 'qtyPerPallet') rawVal = product.shipping?.qtyPerPallet;
      else if (key === 'dimensionsMm') rawVal = product.shipping?.dimension || product.shipping?.dimensionsMm;
      else if (key === 'productWarrantyYears') rawVal = product.warrantyInfo?.productWarranty || product.warranty;
      else if (key === 'performanceWarrantyYears') rawVal = product.warrantyInfo?.performanceWarranty;
    }

    // Filter out invalid / N/A values
    if (
      rawVal === undefined ||
      rawVal === null ||
      rawVal === '' ||
      rawVal === 'N/A' ||
      rawVal === 'n/a'
    ) {
      return { value: null };
    }

    return { value: rawVal };
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {schema.sections.map((section, sectionIdx) => {
        // Collect populated fields for this section
        const populatedFields = section.fields
          .map((field) => {
            const { value } = getFieldValue(field.key);
            return { field, value };
          })
          .filter((item) => item.value !== null);

        // Do not render empty sections
        if (populatedFields.length === 0) return null;

        return (
          <div
            key={sectionIdx}
            className="bg-gray-50/80 rounded-2xl p-5 sm:p-6 border border-gray-200/60 shadow-2xs hover:border-gray-300/80 transition-colors"
          >
            <h4 className="text-base font-bold text-gray-900 mb-4 border-b border-gray-200/80 pb-2.5 flex items-center justify-between">
              <span>{section.title}</span>
              <span className="w-2 h-2 rounded-full bg-primary/80"></span>
            </h4>

            <div className="space-y-3">
              {populatedFields.map(({ field, value }) => {
                const formattedVal = typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value;
                const unitDisplay = field.unit && !String(formattedVal).includes(field.unit) ? ` ${field.unit}` : '';

                return (
                  <div
                    key={field.key}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1.5 border-b border-gray-100 last:border-0 text-xs sm:text-sm"
                  >
                    <span className="text-gray-500 font-medium">{field.label}</span>
                    <span className="text-gray-900 font-semibold text-right break-words max-w-full sm:max-w-[220px]">
                      {formattedVal}{unitDisplay}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
