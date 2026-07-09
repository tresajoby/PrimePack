"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface CartItem {
  id: string;
  productSlug: string;
  variantId: string;
  variantName: string;
  weight: string;
  dimensions: string;
  zipperMode?: "with" | "without";
  valve: boolean;
  color: string | null;
  qty: number;
  pricePerPc: number;
  productImage: string;
}

interface CartCtx {
  items: CartItem[];
  mounted: boolean;
  addItem: (item: Omit<CartItem, "id">) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartCtx>({
  items: [],
  mounted: false,
  addItem: () => {},
  removeItem: () => {},
  updateQty: () => {},
  clearCart: () => {},
  totalItems: 0,
  totalPrice: 0,
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("primepack-cart");
      if (saved) setItems(JSON.parse(saved));
    } catch {}
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) localStorage.setItem("primepack-cart", JSON.stringify(items));
  }, [items, mounted]);

  const addItem = useCallback((item: Omit<CartItem, "id">) => {
    const id = [item.variantId, item.weight, item.zipperMode ?? "", item.valve ? "v" : "nv", item.color ?? ""].join("|");
    setItems(prev => {
      const existing = prev.find(i => i.id === id);
      if (existing) {
        return prev.map(i => i.id === id ? { ...i, qty: i.qty + item.qty, pricePerPc: item.pricePerPc } : i);
      }
      return [...prev, { ...item, id }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const updateQty = useCallback((id: string, qty: number) => {
    if (qty <= 0) {
      setItems(prev => prev.filter(i => i.id !== id));
    } else {
      setItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
    }
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((s, i) => s + i.qty, 0);
  const totalPrice = items.reduce((s, i) => s + i.qty * i.pricePerPc, 0);

  return (
    <CartContext.Provider value={{ items, mounted, addItem, removeItem, updateQty, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
