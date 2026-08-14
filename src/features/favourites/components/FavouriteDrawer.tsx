"use client";

import React from 'react';
import Link from 'next/link';
import { useFavourite } from '@/features/favourites/context/FavouriteContext';

export default function FavouriteDrawer() {
  const {
    favourites,
    isDrawerOpen,
    closeDrawer,
    removeFromFavourite,
    updateQuantity,
    totalItemsCount,
  } = useFavourite();

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={closeDrawer}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity animate-fadeIn"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-gray-100 animate-slideLeft">
          
          <div className="p-5 bg-[#107022] text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">favorite</span>
              <h2 className="font-bold text-base tracking-wide">Saved Selection ({totalItemsCount})</h2>
            </div>
            <button
              onClick={closeDrawer}
              className="p-1 rounded-full hover:bg-white/10 transition text-white"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {favourites.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <span className="material-symbols-outlined text-5xl mb-2 block">favorite_border</span>
                <p className="text-xs font-semibold">Your selection is currently empty.</p>
                <p className="text-[11px] text-gray-400 mt-1">Browse products and tap the heart icon to save items.</p>
              </div>
            ) : (
              favourites.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 relative group"
                >
                  <div className="w-16 h-16 bg-white rounded-lg p-1 flex-shrink-0 flex items-center justify-center border border-gray-100">
                    <img src={product.image} alt={product.title} className="max-h-full object-contain mix-blend-multiply" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] font-bold text-red-500 uppercase tracking-wider block">{product.category}</span>
                    <h4 className="text-xs font-bold text-gray-900 truncate">{product.title}</h4>
                    <p className="text-[10px] text-gray-500 font-medium">{product.vendor}</p>
                    
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white text-xs">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="px-2 py-0.5 text-gray-600 hover:bg-gray-100 font-bold"
                        >
                          -
                        </button>
                        <span className="px-2 font-bold text-gray-800">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="px-2 py-0.5 text-gray-600 hover:bg-gray-100 font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromFavourite(product.id)}
                    className="text-gray-400 hover:text-red-500 p-1 transition"
                  >
                    <span className="material-symbols-outlined text-lg">delete</span>
                  </button>
                </div>
              ))
            )}
          </div>

          {favourites.length > 0 && (
            <div className="p-5 border-t border-gray-100 bg-gray-50 space-y-3">
              <div className="flex justify-between items-center text-xs font-bold text-gray-800">
                <span>Total Items Selected:</span>
                <span className="text-[#107022] text-sm">{totalItemsCount}</span>
              </div>

              <a
                href={`https://wa.me/923277770090?text=${encodeURIComponent(
                  `Hello Soltronic Energy,\n\nI would like to request a quotation for my saved selection:\n\n` +
                  favourites.map((f) => `• ${f.quantity}x ${f.product.title} (${f.product.price})`).join('\n') +
                  `\n\nPlease provide pricing and details. Thank you!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeDrawer}
                className="w-full bg-[#ef4444] hover:bg-[#dc2626] text-white py-3 px-4 rounded-xl text-xs font-bold transition shadow-md flex items-center justify-center gap-2"
              >
                Request Quotation for Favourites &rarr;
              </a>

              <Link
                href="/favourite"
                onClick={closeDrawer}
                className="w-full bg-white border border-gray-200 hover:border-[#107022] text-gray-800 py-2.5 px-4 rounded-xl text-xs font-bold transition text-center block"
              >
                View Full Favourites Page
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
