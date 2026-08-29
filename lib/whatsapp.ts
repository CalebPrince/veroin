import { formatMoney } from "@/lib/money";
import { siteConfig } from "@/data/site-config";
import type { CartItem } from "@/types/cart";
import type { Product, ProductVariant } from "@/types/product";

type WhatsAppOrderInput =
  | { type: "single"; product: Product; variant?: ProductVariant; quantity: number }
  | { type: "cart"; items: CartItem[] }
  | { type: "bulk"; name: string; details: string };

export function buildWhatsAppOrderMessage(input: WhatsAppOrderInput): string {
  if (input.type === "bulk") {
    return `Hi ${siteConfig.shortName}! Bulk/wholesale inquiry from ${input.name}:\n${input.details}`;
  }

  if (input.type === "single") {
    const { product, variant, quantity } = input;
    const unitPrice = variant?.pricePesewas ?? product.basePricePesewas;
    const label = variant ? ` (${variant.label})` : "";
    const lineTotal = formatMoney(unitPrice * quantity);
    return (
      `Hi ${siteConfig.shortName}! I'd like to order:\n` +
      `- ${product.name}${label} x${quantity} — ${lineTotal}\n\n` +
      `Total: ${lineTotal}`
    );
  }

  const lines = input.items.map((i) => {
    const label = i.variantLabel ? ` (${i.variantLabel})` : "";
    return `- ${i.name}${label} x${i.quantity} — ${formatMoney(i.unitPricePesewas * i.quantity)}`;
  });
  const total = input.items.reduce((sum, i) => sum + i.unitPricePesewas * i.quantity, 0);

  return (
    `Hi ${siteConfig.shortName}! I'd like to order:\n` +
    `${lines.join("\n")}\n\n` +
    `Total: ${formatMoney(total)}`
  );
}

export function buildWhatsAppLink(message: string, phoneNumber: string = siteConfig.whatsappNumber): string {
  const digitsOnly = phoneNumber.replace(/\D/g, "");
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
}
