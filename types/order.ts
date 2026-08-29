import type { CartItem } from "@/types/cart";

export type CustomerInfo = {
  name: string;
  phone: string;
  email: string;
  address: string;
  notes?: string;
};

export type OrderMetadata = {
  items: CartItem[];
  customer: CustomerInfo;
  subtotalPesewas: number;
};
