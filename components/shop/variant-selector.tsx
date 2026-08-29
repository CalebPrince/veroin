"use client";

import { cn } from "@/lib/utils";
import { formatMoney } from "@/lib/money";
import type { ProductVariant } from "@/types/product";

export function VariantSelector({
  variants,
  selectedId,
  onSelect,
}: {
  variants: ProductVariant[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Size">
      {variants.map((v) => {
        const active = v.id === selectedId;
        return (
          <button
            key={v.id}
            type="button"
            role="radio"
            aria-checked={active}
            disabled={!v.inStock}
            onClick={() => onSelect(v.id)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active
                ? "border-ink bg-ink text-cream-base"
                : "border-kraft bg-cream-card text-espresso hover:border-ink",
              !v.inStock && "opacity-40 cursor-not-allowed"
            )}
          >
            {v.label} · {formatMoney(v.pricePesewas)}
          </button>
        );
      })}
    </div>
  );
}
