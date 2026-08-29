import type { Money } from "@/types/product";

const formatter = new Intl.NumberFormat("en-GH", {
  style: "currency",
  currency: "GHS",
  currencyDisplay: "symbol",
  minimumFractionDigits: 2,
});

/** Formats integer pesewas as a cedi string, e.g. 1500 -> "₵15.00". */
export function formatMoney(pesewas: Money): string {
  const formatted = formatter.format(pesewas / 100);
  // Intl renders GHS as "GH₵" in some locales/environments — normalize to "₵".
  return formatted.replace("GH₵", "₵").replace("GHS", "₵");
}

export function pesewasToCedis(pesewas: Money): number {
  return pesewas / 100;
}
