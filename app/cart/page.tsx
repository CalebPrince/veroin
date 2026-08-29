"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartLineItem } from "@/components/shop/cart-line-item";
import { CartSummary } from "@/components/shop/cart-summary";
import { WhatsAppOrderButton } from "@/components/shop/whatsapp-order-button";
import { useCart } from "@/lib/cart/use-cart";

export default function CartPage() {
  const { items, subtotalPesewas, isHydrated } = useCart();

  if (isHydrated && items.length === 0) {
    return (
      <div className="py-24 text-center px-4">
        <ShoppingBag className="mx-auto size-10 text-espresso/30" />
        <h1 className="mt-4 font-heading font-bold text-2xl text-ink">Your cart is empty</h1>
        <p className="mt-2 text-espresso/60">Add some plantain chips to get started.</p>
        <Button asChild className="mt-6">
          <Link href="/shop">Shop Now</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <h1 className="font-heading font-extrabold text-3xl text-ink mb-8">Your Cart</h1>
        <div className="divide-y divide-kraft border-t border-b border-kraft">
          {items.map((item) => (
            <CartLineItem key={`${item.productId}-${item.variantId}`} item={item} />
          ))}
        </div>
        <div className="mt-2 max-w-sm ml-auto">
          <CartSummary subtotalPesewas={subtotalPesewas} />
          <div className="flex flex-col gap-3 mt-2">
            <Button asChild size="lg">
              <Link href="/checkout">Checkout</Link>
            </Button>
            <WhatsAppOrderButton source="cart" items={items} size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
