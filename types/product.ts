/** Integer pesewas (1 GHS = 100 pesewas) — avoids floating point rounding on money. */
export type Money = number;

export type ProductVariant = {
  id: string;
  label: string;
  pricePesewas: Money;
  sku?: string;
  inStock: boolean;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  categorySlug: string;
  images: string[];
  basePricePesewas: Money;
  variants?: ProductVariant[];
  inStock: boolean;
  tags?: string[];
  featured?: boolean;
};

export type Category = {
  slug: string;
  name: string;
  description?: string;
  imageUrl?: string;
};
