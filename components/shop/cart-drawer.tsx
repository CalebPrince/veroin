"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CartLineItem } from "@/components/shop/cart-line-item";
import { CartSummary } from "@/components/shop/cart-summary";
import { WhatsAppOrderButton } from "@/components/shop/whatsapp-order-button";
import { useCart } from "@/lib/cart/use-cart";

export function CartDrawer() {
  const { items, itemCount, subtotalPesewas } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={`Cart, ${itemCount} items`} className="relative">
          <ShoppingBag className="size-5" />
          {itemCount > 0 ? (
            <span className="absolute -top-1 -right-1 flex size-4.5 items-center justify-center rounded-full bg-pepper-red text-[10px] font-bold text-cream-base">
              {itemCount}
            </span>
          ) : null}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-cream-base">
        <SheetHeader>
          <SheetTitle className="font-heading text-ink">Your Cart</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto px-4 divide-y divide-kraft">
          {items.length === 0 ? (
            <p className="text-espresso/60 py-8 text-center text-sm">Your cart is empty.</p>
          ) : (
            items.map((item) => <CartLineItem key={`${item.productId}-${item.variantId}`} item={item} />)
          )}
        </div>
        {items.length > 0 ? (
          <SheetFooter className="border-t border-kraft pt-2">
            <CartSummary subtotalPesewas={subtotalPesewas} />
            <Button asChild size="lg" className="w-full">
              <Link href="/checkout">Checkout</Link>
            </Button>
            <WhatsAppOrderButton source="cart" items={items} className="w-full" />
          </SheetFooter>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
