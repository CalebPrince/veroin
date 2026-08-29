"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Price } from "@/components/shared/price";
import { WhatsAppOrderButton } from "@/components/shop/whatsapp-order-button";
import { useCart } from "@/lib/cart/use-cart";
import { toast } from "sonner";
import type { Product } from "@/types/product";

const TAG_STYLES: Record<string, string> = {
  spicy: "bg-pepper-red text-cream-base",
  new: "bg-plantain-gold text-espresso",
  bestseller: "bg-ink text-cream-base",
};

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const defaultVariant = product.variants?.[0];
  const price = defaultVariant?.pricePesewas ?? product.basePricePesewas;

  function handleAdd() {
    addItem({
      productId: product.id,
      variantId: defaultVariant?.id,
      name: product.name,
      variantLabel: defaultVariant?.label,
      unitPricePesewas: price,
      quantity: 1,
      imageUrl: product.images[0],
      slug: product.slug,
    });
    toast.success(`${product.name} added to cart`);
  }

  return (
    <div className="group relative flex flex-col rounded-2xl border border-kraft bg-cream-card overflow-hidden transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/10">
      <Link href={`/shop/${product.slug}`} className="relative aspect-square overflow-hidden bg-kraft/40">
        {product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : null}
        {product.tags?.[0] ? (
          <Badge className={`absolute top-3 left-3 ${TAG_STYLES[product.tags[0]] ?? ""} capitalize`}>
            {product.tags[0]}
          </Badge>
        ) : null}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-heading text-lg font-semibold text-ink">{product.name}</h3>
        </Link>
        <p className="text-sm text-espresso/70 line-clamp-2">{product.shortDescription}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <Price pesewas={price} className="text-lg text-espresso" />
          <Button size="sm" onClick={handleAdd} className="gap-1.5">
            <ShoppingBag className="size-4" /> Add
          </Button>
        </div>
        <WhatsAppOrderButton
          source="single"
          product={product}
          variantOption={defaultVariant}
          quantity={1}
          size="sm"
          className="w-full mt-1"
        />
      </div>
    </div>
  );
}
