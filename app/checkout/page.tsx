import type { Metadata } from "next";
import { CheckoutFormLoader } from "@/components/shop/checkout-form-loader";

export const metadata: Metadata = { title: "Checkout" };

export default function CheckoutPage() {
  return <CheckoutFormLoader />;
}
