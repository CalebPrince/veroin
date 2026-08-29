"use client";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/shared/social-icons";
import { buildWhatsAppLink, buildWhatsAppOrderMessage } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import type { CartItem } from "@/types/cart";
import type { Product, ProductVariant } from "@/types/product";

type Props = {
  className?: string;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  label?: string;
} & (
  | { source: "single"; product: Product; variantOption?: ProductVariant; quantity: number }
  | { source: "cart"; items: CartItem[] }
);

export function WhatsAppOrderButton(props: Props) {
  const message =
    props.source === "single"
      ? buildWhatsAppOrderMessage({
          type: "single",
          product: props.product,
          variant: props.variantOption,
          quantity: props.quantity,
        })
      : buildWhatsAppOrderMessage({ type: "cart", items: props.items });

  const disabled = props.source === "cart" && props.items.length === 0;
  const href = buildWhatsAppLink(message);

  return (
    <Button
      asChild={!disabled}
      disabled={disabled}
      variant={props.variant ?? "outline"}
      size={props.size ?? "default"}
      className={cn(
        !props.variant &&
          "border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-green hover:text-cream-base",
        props.className
      )}
    >
      {disabled ? (
        <span className="inline-flex items-center gap-2">
          <WhatsAppIcon className="size-4" /> {props.label ?? "Order on WhatsApp"}
        </span>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
          <WhatsAppIcon className="size-4" /> {props.label ?? "Order on WhatsApp"}
        </a>
      )}
    </Button>
  );
}
