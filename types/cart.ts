import type { Money } from "@/types/product";

export type CartItem = {
  productId: string;
  variantId?: string;
  name: string;
  variantLabel?: string;
  unitPricePesewas: Money;
  quantity: number;
  imageUrl?: string;
  slug: string;
};

export type CartState = {
  items: CartItem[];
  isHydrated: boolean;
};

export type CartAction =
  | { type: "ADD_ITEM"; item: CartItem }
  | { type: "REMOVE_ITEM"; productId: string; variantId?: string }
  | { type: "UPDATE_QTY"; productId: string; variantId?: string; quantity: number }
  | { type: "CLEAR_CART" }
  | { type: "HYDRATE"; items: CartItem[] };
