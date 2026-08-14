"use client";

import React, { useState } from 'react';
import { Product } from '@/types/product';
import { CATEGORY_SCHEMAS, ProductCategoryKey, mapCategoryToKey } from '@/features/catalog/schemas/specificationSchemas';

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
      category: currentSchema.label.toUpperCase(),
      specifications,
      shipping,
      warrantyInfo,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6 max-w-4xl mx-auto">
      <div className="border-b border-gray-100 pb-4">
        <h3 className="text-xl font-bold text-gray-900">Manage Product Specification</h3>
        <p className="text-xs text-gray-500 mt-1">Structured category-based schema editor for Soltronic Energy products</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Product Category</label>
          <select
            value={categoryKey}
            onChange={(e) => handleCategoryChange(e.target.value as ProductCategoryKey)}
            className="w-full border border-gray-200 rounded-xl p-2.5 text-sm font-semibold text-gray-800 bg-gray-50 outline-none focus:border-primary"
          >
            {Object.values(CATEGORY_SCHEMAS).map((sch) => (
              <option key={sch.categoryKey} value={sch.categoryKey}>
                {sch.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-200 rounded-xl p-2.5 text-sm font-semibold text-gray-800 bg-gray-50 outline-none focus:border-primary"
          >
            <option value="In Stock">In Stock</option>
            <option value="Limited Stock">Limited Stock</option>
            <option value="Pre-Order">Pre-Order</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-200 rounded-xl p-2.5 text-sm text-gray-800 outline-none focus:border-primary"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Brand / Vendor</label>
          <input
            type="text"
            value={vendor}
            onChange={(e) => setVendor(e.target.value)}
            className="w-full border border-gray-200 rounded-xl p-2.5 text-sm text-gray-800 outline-none focus:border-primary"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Price (PKR)</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border border-gray-200 rounded-xl p-2.5 text-sm text-gray-800 outline-none focus:border-primary"
            placeholder="Rs. 250,000"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full border border-gray-200 rounded-xl p-2.5 text-sm text-gray-800 outline-none focus:border-primary"
        />
      </div>

      {currentSchema.sections.map((section, secIdx) => (
        <div key={secIdx} className="bg-gray-50/70 p-5 rounded-2xl border border-gray-100 space-y-4">
          <h4 className="font-bold text-sm text-gray-900 border-b border-gray-200/80 pb-2">{section.title}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.fields.map((field) => {
              const currentVal =
                secIdx === 0
                  ? specifications[field.key]
                  : secIdx === 1
                  ? shipping[field.key]
                  : warrantyInfo[field.key];

              const handleChange = (val: any) => {
                if (secIdx === 0) handleSpecChange(field.key, val);
                else if (secIdx === 1) handleShippingChange(field.key, val);
                else handleWarrantyChange(field.key, val);
              };

              return (
                <div key={field.key}>
                  <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                    {field.label} {field.unit ? `(${field.unit})` : ''}
                  </label>

                  {field.type === 'select' ? (
                    <select
                      value={currentVal || ''}
                      onChange={(e) => handleChange(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg p-2 text-xs bg-white text-gray-800 outline-none focus:border-primary"
                    >
                      <option value="">-- Select --</option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type === 'number' ? 'number' : 'text'}
                      value={currentVal || ''}
                      onChange={(e) => handleChange(field.type === 'number' ? Number(e.target.value) : e.target.value)}
                      className="w-full border border-gray-200 rounded-lg p-2 text-xs bg-white text-gray-800 outline-none focus:border-primary"
                      placeholder={`Enter ${field.label}`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
        <button
          type="submit"
          className="bg-primary hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition shadow-sm text-sm"
        >
          Save Product Data
        </button>
      </div>
    </form>
  );
}
