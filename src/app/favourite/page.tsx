"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useFavourite } from '@/context/FavouriteContext';

export default function FavouritePage() {
  const {
    favourites,
    removeFromFavourite,
    updateQuantity,
    clearFavourites,
    totalItemsCount,
  } = useFavourite();

  return (
    <main className="w-full min-h-[85vh] bg-[#f8fafc] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-[#107022] text-2xl">favorite</span>
              <span className="text-xs font-bold text-[#107022] uppercase tracking-widest">Saved Solar Selections</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f172a]">Your Favourites ({totalItemsCount})</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Review your saved panels, inverters, and accessories before requesting a formal quote.
            </p>
          </div>

          {favourites.length > 0 && (
            <div className="flex items-center gap-3">
              <button
                onClick={clearFavourites}
                className="text-xs font-semibold text-gray-500 hover:text-red-600 px-4 py-2 rounded-xl border border-gray-200 hover:border-red-200 transition"
              >
                Clear All
              </button>
              <Link
                href="/products"
                className="text-xs font-bold text-[#107022] bg-white px-4 py-2 rounded-xl border border-gray-200 hover:border-[#107022] transition"
              >
                + Add More Products
              </Link>
            </div>
          )}
        </div>

        {favourites.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm max-w-2xl mx-auto my-12">
            <div className="w-20 h-20 bg-emerald-50 text-[#107022] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-4xl">favorite_border</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Your Favourites List is Empty</h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto mb-6">
              You haven’t added any solar panels, inverters, or energy storage products to your selection yet.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#107022] hover:bg-[#0e5c1c] text-white px-6 py-3 rounded-xl font-bold text-xs transition shadow-md"
            >
              Browse Products <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        ) : (
          /* Main Favourites Layout */
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Items List */}
            <div className="lg:col-span-8 space-y-4">
              {favourites.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition duration-300 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 relative group"
                >
                  {/* Thumbnail */}
                  <div className="w-28 h-28 bg-[#f4f7fb] rounded-xl p-3 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 text-center sm:text-left">
                    <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider block mb-1">
                      {product.category}
                    </span>
                    <h3 className="text-base font-bold text-[#0f172a] leading-tight mb-1">
                      {product.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium mb-2">{product.vendor}</p>

                    {/* Specs Pills */}
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-2">
                      {product.power && (
                        <span className="bg-[#f8fafc] border border-gray-100 text-gray-700 text-[11px] font-semibold px-2.5 py-1 rounded-md">
                          Power: {product.power}
                        </span>
                      )}
                      {product.efficiency && (
                        <span className="bg-[#f8fafc] border border-gray-100 text-gray-700 text-[11px] font-semibold px-2.5 py-1 rounded-md">
                          Efficiency: {product.efficiency}
                        </span>
                      )}
                      {product.warranty && (
                        <span className="bg-[#f8fafc] border border-gray-100 text-gray-700 text-[11px] font-semibold px-2.5 py-1 rounded-md">
                          Warranty: {product.warranty}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantity & Actions */}
                  <div className="flex sm:flex-col items-center justify-between w-full sm:w-auto gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
                    <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="px-3 py-1.5 text-gray-600 hover:bg-gray-200 transition font-bold"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 text-xs font-bold text-gray-800">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="px-3 py-1.5 text-gray-600 hover:bg-gray-200 transition font-bold"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromFavourite(product.id)}
                      className="text-xs font-semibold text-red-500 hover:text-red-700 flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-base">delete</span>
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Summary & Quote Conversion Box */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm sticky top-24 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Selection Summary</h3>
                <p className="text-xs text-gray-500">Summary of saved components for your project.</p>
              </div>

              <div className="space-y-3 text-xs border-y border-gray-100 py-4">
                <div className="flex justify-between text-gray-600">
                  <span>Total Saved Components</span>
                  <span className="font-bold text-gray-900">{totalItemsCount} items</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>System Support</span>
                  <span className="font-bold text-green-700">Tier-1 Guaranteed</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Net Metering Eligible</span>
                  <span className="font-bold text-green-700">Yes</span>
                </div>
              </div>

              {/* Quote CTA */}
              <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 text-center">
                <span className="text-[10px] font-bold text-[#107022] uppercase tracking-wider block mb-1">
                  Ready to Turn Favourites into a System?
                </span>
                <h4 className="font-bold text-sm text-gray-900 mb-2">Request an Itemized Quote</h4>
                <p className="text-[11px] text-gray-600 mb-4">
                  Send your saved configuration to our engineering team for an exact price quote & layout.
                </p>
                <Link
                  href={`/epc?items=${encodeURIComponent(
                    favourites.map((f) => `${f.quantity}x ${f.product.title}`).join(', ')
                  )}`}
                  className="w-full bg-[#ef4444] hover:bg-[#dc2626] text-white py-3 px-4 rounded-xl text-xs font-bold transition shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Request Quote for Selection &rarr;
                </Link>
              </div>
            </div>

          </div>
        )}

      </div>
    </main>
  );
}
