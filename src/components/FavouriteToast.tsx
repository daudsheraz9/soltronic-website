"use client";

import React from 'react';
import { useFavourite } from '@/context/FavouriteContext';

export default function FavouriteToast() {
  const { toastMessage, closeToast } = useFavourite();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#0f172a] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-gray-800 flex items-center gap-3 animate-slideUp">
      <span className="material-symbols-outlined text-[#107022] text-xl">favorite</span>
      <span className="text-xs font-semibold">{toastMessage}</span>
      <button
        onClick={closeToast}
        className="ml-2 text-gray-400 hover:text-white transition"
      >
        <span className="material-symbols-outlined text-sm">close</span>
      </button>
    </div>
  );
}
