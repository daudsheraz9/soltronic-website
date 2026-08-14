"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Product } from '@/types/product';
import { useAuth } from '@/features/auth/context/AuthContext';
import { createClient } from '@/lib/supabase/client';

export interface FavouriteItem {
  product: Product;
  quantity: number;
  addedAt: string;
}

interface FavouriteContextType {
  favourites: FavouriteItem[];
  addToFavourite: (product: Product, quantity?: number) => void;
  removeFromFavourite: (productId: string) => void;
  toggleFavourite: (product: Product) => void;
  isFavourite: (productId: string) => boolean;
  updateQuantity: (productId: string, quantity: number) => void;
  clearFavourites: () => void;
  totalItemsCount: number;
  toastMessage: string | null;
  closeToast: () => void;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const FavouriteContext = createContext<FavouriteContextType>({
  favourites: [],
  addToFavourite: () => {},
  removeFromFavourite: () => {},
  toggleFavourite: () => {},
  isFavourite: () => false,
  updateQuantity: () => {},
  clearFavourites: () => {},
  totalItemsCount: 0,
  toastMessage: null,
  closeToast: () => {},
  isDrawerOpen: false,
  openDrawer: () => {},
  closeDrawer: () => {},
});

const LOCAL_STORAGE_KEY = 'soltronic_favourites_cart';

export function FavouriteProvider({ children }: { children: React.ReactNode }) {
  const [favourites, setFavourites] = useState<FavouriteItem[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { user } = useAuth();
  const supabase = createClient();

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      let localItems: FavouriteItem[] = [];
      if (saved) {
        localItems = JSON.parse(saved);
        setFavourites(localItems);
      }

      if (user) {
        syncSupabaseFavourites(user.id, localItems);
      }
    } catch (e) {
      console.error('Failed to load favourites from storage:', e);
    }
  }, [user]);

  const syncSupabaseFavourites = async (userId: string, localItems: FavouriteItem[]) => {
    try {
      await supabase.from('profiles').upsert({
        id: userId,
        email: user?.email,
        full_name: user?.user_metadata?.full_name,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'id' });

      if (localItems.length > 0) {
        await supabase.auth.updateUser({
          data: { favourites: localItems }
        });
      }
    } catch (err) {
      console.log('Supabase profile sync completed:', err);
    }
  };

  const saveFavourites = (newFavs: FavouriteItem[]) => {
    setFavourites(newFavs);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newFavs));
      if (user) {
        supabase.auth.updateUser({
          data: { favourites: newFavs }
        });
      }
    } catch (e) {
      console.error('Failed to save favourites to storage:', e);
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const closeToast = () => setToastMessage(null);

  const isFavourite = (productId: string) => {
    return favourites.some((item) => item.product.id === productId);
  };

  const addToFavourite = (product: Product, quantity: number = 1) => {
    const existingIndex = favourites.findIndex((item) => item.product.id === product.id);
    let updated: FavouriteItem[];

    if (existingIndex > -1) {
      updated = [...favourites];
      updated[existingIndex].quantity += quantity;
    } else {
      updated = [
        ...favourites,
        {
          product,
          quantity,
          addedAt: new Date().toISOString(),
        },
      ];
    }

    saveFavourites(updated);
    showToast(`Saved "${product.title}" to Favourites!`);
    openDrawer();
  };

  const removeFromFavourite = (productId: string) => {
    const target = favourites.find((item) => item.product.id === productId);
    const updated = favourites.filter((item) => item.product.id !== productId);
    saveFavourites(updated);
    if (target) {
      showToast(`Removed "${target.product.title}"`);
    }
  };

  const toggleFavourite = (product: Product) => {
    if (isFavourite(product.id)) {
      removeFromFavourite(product.id);
    } else {
      addToFavourite(product);
    }
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromFavourite(productId);
      return;
    }

    const updated = favourites.map((item) => {
      if (item.product.id === productId) {
        return { ...item, quantity };
      }
      return item;
    });

    saveFavourites(updated);
  };

  const clearFavourites = () => {
    saveFavourites([]);
    showToast('Cleared all items from Favourites');
  };

  const totalItemsCount = favourites.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <FavouriteContext.Provider
      value={{
        favourites,
        addToFavourite,
        removeFromFavourite,
        toggleFavourite,
        isFavourite,
        updateQuantity,
        clearFavourites,
        totalItemsCount,
        toastMessage,
        closeToast,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}

export const useFavourite = () => useContext(FavouriteContext);
