"use client";

import React from 'react';
import { useFavourite } from '@/context/FavouriteContext';
import { Product } from '@/data/products';

export default function FavouriteButton({ product, className = '' }: { product: Product; className?: string }) {
  const { toggleFavourite, isFavourite } = useFavourite();
  const active = isFavourite(product.id);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavourite(product);
      }}
      aria-label={active ? 'Remove from Favourites' : 'Add to Favourites'}
      className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 shadow-sm ${
        active
          ? 'bg-orange-500 text-white hover:bg-orange-600 scale-110'
          : 'bg-white/80 text-gray-400 hover:text-orange-500 hover:bg-white'
      } ${className}`}
    >
      <span className="material-symbols-outlined text-lg leading-none block">
        {active ? 'favorite' : 'favorite_border'}
      </span>
    </button>
  );
}
