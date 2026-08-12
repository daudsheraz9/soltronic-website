"use client";

import React, { useState } from 'react';
import { Product } from '@/data/products';
import { CATEGORY_SCHEMAS, ProductCategoryKey, mapCategoryToKey } from '@/data/specificationSchemas';

export default function AdminProductForm({
  initialProduct,
  onSave,
}: {
  initialProduct?: Partial<Product>;
  onSave: (product: Partial<Product>) => void;
}) {
  const [categoryKey, setCategoryKey] = useState<ProductCategoryKey>(
    initialProduct?.categoryKey || (initialProduct?.category ? mapCategoryToKey(initialProduct.category) : 'solar_panel')
  );

  const [title, setTitle] = useState(initialProduct?.title || '');
  const [vendor, setVendor] = useState(initialProduct?.vendor || '');
  const [price, setPrice] = useState(initialProduct?.price || '');
  const [description, setDescription] = useState(initialProduct?.description || '');
  const [status, setStatus] = useState(initialProduct?.status || 'In Stock');

  const [specifications, setSpecifications] = useState<Record<string, any>>(initialProduct?.specifications || {});
  const [shipping, setShipping] = useState<Record<string, any>>(initialProduct?.shipping || {});
  const [warrantyInfo, setWarrantyInfo] = useState<Record<string, any>>(initialProduct?.warrantyInfo || {});

  const currentSchema = CATEGORY_SCHEMAS[categoryKey];

  const handleCategoryChange = (newKey: ProductCategoryKey) => {
    setCategoryKey(newKey);
    // Keep category-safe merge behavior
  };

  const handleSpecChange = (key: string, value: any) => {
    setSpecifications((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleShippingChange = (key: string, value: any) => {
    setShipping((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleWarrantyChange = (key: string, value: any) => {
    setWarrantyInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...initialProduct,
      title,
      vendor,
      price,
      description,
      status,
      categoryKey,
      category: currentSchema.label,
      specifications,
      shipping,
      warrantyInfo,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-8 max-w-4xl mx-auto">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">Product Details & Specifications</h3>
        <p className="text-xs text-gray-500">Manage product information with category-specific technical schemas.</p>
      </div>

      {/* General Product Information */}
      <div className="space-y-4 pt-4 border-t border-gray-100">
        <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider">General Information</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Category</label>
            <select
              value={categoryKey}
              onChange={(e) => handleCategoryChange(e.target.value as ProductCategoryKey)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {Object.values(CATEGORY_SCHEMAS).map((s) => (
                <option key={s.categoryKey} value={s.categoryKey}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Brand / Vendor</label>
            <input
              type="text"
              value={vendor}
              onChange={(e) => setVendor(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary"
              placeholder="e.g. Solis, Canadian Solar"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-700 mb-1">Product Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary"
              placeholder="Full Product Name"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary"
              placeholder="e.g. Rs. 385,000"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Stock Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary"
            >
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
              <option value="Pre-Order">Pre-Order</option>
            </select>
          </div>
        </div>
      </div>

      {/* Dynamic Category Specifications Form */}
      {currentSchema.sections.map((section) => (
        <div key={section.title} className="space-y-4 pt-4 border-t border-gray-100">
          <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider">{section.title}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {section.fields.map((field) => {
              const currentValue =
                section.title === 'Specifications'
                  ? specifications[field.key] || ''
                  : section.title === 'Shipping Information'
                  ? shipping[field.key] || ''
                  : warrantyInfo[field.key] || '';

              const handleValueChange = (val: any) => {
                if (section.title === 'Specifications') handleSpecChange(field.key, val);
                else if (section.title === 'Shipping Information') handleShippingChange(field.key, val);
                else handleWarrantyChange(field.key, val);
              };

              return (
                <div key={field.key}>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    {field.label} {field.unit ? `(${field.unit})` : ''}
                  </label>

                  {field.type === 'select' ? (
                    <select
                      value={currentValue}
                      onChange={(e) => handleValueChange(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select Option</option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type === 'number' ? 'number' : 'text'}
                      value={currentValue}
                      onChange={(e) => handleValueChange(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary"
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div className="pt-4 border-t border-gray-100 flex justify-end">
        <button
          type="submit"
          className="bg-primary hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition text-sm shadow-md"
        >
          Save Product Specifications
        </button>
      </div>
    </form>
  );
}
