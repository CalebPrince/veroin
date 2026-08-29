"use client";

import { createContext, useEffect, useReducer, type Dispatch } from "react";
import type { CartAction, CartItem, CartState } from "@/types/cart";
import { cartReducer, initialCartState } from "@/lib/cart/cart-reducer";

const STORAGE_KEY = "veroin_cart";

export const CartStateContext = createContext<CartState>(initialCartState);
export const CartDispatchContext = createContext<Dispatch<CartAction>>(() => {});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  // Read persisted cart only after mount (client-only) to avoid SSR/client
  // hydration mismatches — server and first client render always start empty.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const items: CartItem[] = raw ? JSON.parse(raw) : [];
      dispatch({ type: "HYDRATE", items });
    } catch {
      dispatch({ type: "HYDRATE", items: [] });
    }
  }, []);

  useEffect(() => {
    if (!state.isHydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // localStorage unavailable (private mode, quota, etc.) — cart still works in-memory.
    }
  }, [state.items, state.isHydrated]);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>{children}</CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}
