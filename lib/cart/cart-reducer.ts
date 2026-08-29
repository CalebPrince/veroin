import type { CartAction, CartItem, CartState } from "@/types/cart";

export const initialCartState: CartState = { items: [], isHydrated: false };

function sameLine(a: { productId: string; variantId?: string }, b: { productId: string; variantId?: string }) {
  return a.productId === b.productId && a.variantId === b.variantId;
}

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, items: action.items, isHydrated: true };

    case "ADD_ITEM": {
      const existing = state.items.find((i) => sameLine(i, action.item));
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            sameLine(i, action.item) ? { ...i, quantity: i.quantity + action.item.quantity } : i
          ),
        };
      }
      return { ...state, items: [...state.items, action.item] };
    }

    case "UPDATE_QTY": {
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((i) => !sameLine(i, action)),
        };
      }
      return {
        ...state,
        items: state.items.map((i) => (sameLine(i, action) ? { ...i, quantity: action.quantity } : i)),
      };
    }

    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((i) => !sameLine(i, action)) };

    case "CLEAR_CART":
      return { ...state, items: [] };

    default:
      return state;
  }
}

export function getSubtotalPesewas(items: CartItem[]): number {
  return items.reduce((sum, i) => sum + i.unitPricePesewas * i.quantity, 0);
}

export function getItemCount(items: CartItem[]): number {
  return items.reduce((sum, i) => sum + i.quantity, 0);
}
