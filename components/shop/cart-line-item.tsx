"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { Price } from "@/components/shared/price";
import { useCart } from "@/lib/cart/use-cart";
import type { CartItem } from "@/types/cart";

export function CartLineItem({ item }: { item: CartItem }) {
  const { updateQty, removeItem } = useCart();

  return (
    <div className="flex gap-3 py-4">
      <Link href={`/shop/${item.slug}`} className="relative size-20 shrink-0 rounded-lg overflow-hidden bg-kraft/40 border border-kraft">
        {item.imageUrl ? <Image src={item.imageUrl} alt={item.name} fill className="object-cover" /> : null}
      </Link>
      <div className="flex flex-1 flex-col min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <Link href={`/shop/${item.slug}`} className="font-heading font-semibold text-ink line-clamp-1">
              {item.name}
            </Link>
            {item.variantLabel ? <p className="text-xs text-espresso/60">{item.variantLabel}</p> : null}
          </div>
          <button
            onClick={() => removeItem(item.productId, item.variantId)}
            aria-label={`Remove ${item.name}`}
            className="text-espresso/40 hover:text-pepper-red shrink-0"
          >
            <X className="size-4" />
          </button>
        </div>
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="inline-flex items-center rounded-full border border-kraft">
            <button
              className="p-1.5 hover:text-pepper-red disabled:opacity-30"
              onClick={() => updateQty(item.productId, item.quantity - 1, item.variantId)}
              aria-label="Decrease quantity"
            >
              <Minus className="size-3.5" />
            </button>
            <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
            <button
              className="p-1.5 hover:text-palm-green"
              onClick={() => updateQty(item.productId, item.quantity + 1, item.variantId)}
              aria-label="Increase quantity"
            >
              <Plus className="size-3.5" />
            </button>
          </div>
          <Price pesewas={item.unitPricePesewas * item.quantity} className="text-sm" />
        </div>
      </div>
    </div>
  );
}
