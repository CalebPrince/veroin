"use client";

import { useCallback, useContext, useMemo } from "react";
import { CartDispatchContext, CartStateContext } from "@/lib/cart/cart-context";
import { getItemCount, getSubtotalPesewas } from "@/lib/cart/cart-reducer";
import type { CartItem } from "@/types/cart";

export function useCart() {
  const state = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);

  const addItem = useCallback((item: CartItem) => dispatch({ type: "ADD_ITEM", item }), [dispatch]);

  const removeItem = useCallback(
    (productId: string, variantId?: string) => dispatch({ type: "REMOVE_ITEM", productId, variantId }),
    [dispatch]
  );

  const updateQty = useCallback(
    (productId: string, quantity: number, variantId?: string) =>
      dispatch({ type: "UPDATE_QTY", productId, variantId, quantity }),
    [dispatch]
  );

  const clearCart = useCallback(() => dispatch({ type: "CLEAR_CART" }), [dispatch]);

  const subtotalPesewas = useMemo(() => getSubtotalPesewas(state.items), [state.items]);
  const itemCount = useMemo(() => getItemCount(state.items), [state.items]);

  return {
    items: state.items,
    isHydrated: state.isHydrated,
    subtotalPesewas,
    itemCount,
    addItem,
    removeItem,
    updateQty,
    clearCart,
  };
}
