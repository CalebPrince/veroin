"use client";

import { useState } from "react";
import { ShoppingBag, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Price } from "@/components/shared/price";
import { VariantSelector } from "@/components/shop/variant-selector";
import { WhatsAppOrderButton } from "@/components/shop/whatsapp-order-button";
import { useCart } from "@/lib/cart/use-cart";
import { toast } from "sonner";
import type { Product } from "@/types/product";

export function ProductDetailPurchase({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [variantId, setVariantId] = useState(product.variants?.[0]?.id ?? "");
  const [quantity, setQuantity] = useState(1);

  const variant = product.variants?.find((v) => v.id === variantId);
  const price = variant?.pricePesewas ?? product.basePricePesewas;

  function handleAdd() {
    addItem({
      productId: product.id,
      variantId: variant?.id,
      name: product.name,
      variantLabel: variant?.label,
      unitPricePesewas: price,
      quantity,
      imageUrl: product.images[0],
      slug: product.slug,
    });
    toast.success(`${product.name} added to cart`);
  }

  return (
    <div className="space-y-6">
      <Price pesewas={price} className="text-2xl text-ink" />

      {product.variants ? (
        <div>
          <p className="text-sm font-semibold text-ink mb-2">Size</p>
          <VariantSelector variants={product.variants} selectedId={variantId} onSelect={setVariantId} />
        </div>
      ) : null}

      <div>
        <p className="text-sm font-semibold text-ink mb-2">Quantity</p>
        <div className="inline-flex items-center rounded-full border border-kraft">
          <button
            className="p-2.5 hover:text-pepper-red"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
          >
            <Minus className="size-4" />
          </button>
          <span className="w-8 text-center font-medium">{quantity}</span>
          <button
            className="p-2.5 hover:text-palm-green"
            onClick={() => setQuantity((q) => q + 1)}
            aria-label="Increase quantity"
          >
            <Plus className="size-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button size="lg" onClick={handleAdd} className="gap-2 flex-1">
          <ShoppingBag className="size-4" /> Add to Cart
        </Button>
        <WhatsAppOrderButton
          source="single"
          product={product}
          variantOption={variant}
          quantity={quantity}
          size="lg"
          className="flex-1"
        />
      </div>
    </div>
  );
}
