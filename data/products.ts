import type { Product } from "@/types/product";

/**
 * Starter catalog — placeholder SKUs for Veroin Snacks' plantain chip line.
 * Edit freely: swap names/prices/images, or add new products/categories in
 * data/categories.ts as the range grows.
 */
export const products: Product[] = [
  {
    id: "prod_original",
    slug: "original-plantain-chips",
    name: "Original Plantain Chips",
    shortDescription: "Thinly sliced, fried golden, lightly salted.",
    description:
      "Our signature chip: unripe plantain sliced paper-thin, fried in small batches until golden and crisp, and finished with a light hand of sea salt. No artificial flavoring, no shortcuts — just plantain the way it should taste.",
    categorySlug: "plantain-chips",
    images: ["/images/products/plantain-chips-original.png"],
    basePricePesewas: 1500,
    variants: [
      { id: "original-100g", label: "100g Pouch", pricePesewas: 1500, inStock: true },
      { id: "original-250g", label: "250g Pack", pricePesewas: 3000, inStock: true },
      { id: "original-500g", label: "500g Family Bag", pricePesewas: 5500, inStock: true },
    ],
    inStock: true,
    tags: ["bestseller"],
    featured: true,
  },
  {
    id: "prod_spicy",
    slug: "spicy-plantain-chips",
    name: "Spicy Plantain Chips",
    shortDescription: "Original recipe with a pepper-forward kick.",
    description:
      "All the crunch of our Original, dusted with a house pepper blend built around dried Ghanaian chili — enough heat to notice, not enough to hide the plantain underneath.",
    categorySlug: "plantain-chips",
    images: ["/images/products/plantain-chips-spicy.png"],
    basePricePesewas: 1600,
    variants: [
      { id: "spicy-100g", label: "100g Pouch", pricePesewas: 1600, inStock: true },
      { id: "spicy-250g", label: "250g Pack", pricePesewas: 3200, inStock: true },
      { id: "spicy-500g", label: "500g Family Bag", pricePesewas: 5800, inStock: true },
    ],
    inStock: true,
    tags: ["spicy"],
    featured: true,
  },
  {
    id: "prod_ripe",
    slug: "ripe-plantain-chips",
    name: "Ripe Plantain Chips",
    shortDescription: "Made with ripe plantain for a naturally sweet, caramelized crunch.",
    description:
      "Made from fully ripened plantain instead of the unripe green fruit, fried until the natural sugars caramelize at the edges. A sweeter, dessert-leaning chip with the same satisfying crunch — our original recipe, as seen on the bag.",
    categorySlug: "plantain-chips",
    images: ["/images/products/plantain-chips-ripe.png"],
    basePricePesewas: 1800,
    variants: [
      { id: "ripe-100g", label: "100g Pouch", pricePesewas: 1800, inStock: true },
      { id: "ripe-250g", label: "250g Pack", pricePesewas: 3500, inStock: true },
    ],
    inStock: true,
    tags: ["bestseller"],
    featured: true,
  },
  {
    id: "prod_garlic_herb",
    slug: "garlic-herb-plantain-chips",
    name: "Garlic & Herb Plantain Chips",
    shortDescription: "Savory garlic and mixed herbs over our classic crunch.",
    description:
      "A savory twist on the classic: roasted garlic and a blend of dried herbs dusted over thin-fried plantain. Great on its own, even better next to a cold drink.",
    categorySlug: "plantain-chips",
    images: ["/images/products/plantain-chips-garlic-herb.png"],
    basePricePesewas: 1700,
    variants: [
      { id: "garlic-herb-100g", label: "100g Pouch", pricePesewas: 1700, inStock: true },
      { id: "garlic-herb-250g", label: "250g Pack", pricePesewas: 3300, inStock: true },
    ],
    inStock: true,
    tags: ["new"],
    featured: true,
  },
  {
    id: "prod_honey_glazed",
    slug: "honey-glazed-plantain-chips",
    name: "Honey Glazed Plantain Chips",
    shortDescription: "A light honey glaze over caramelized ripe plantain.",
    description:
      "Ripe plantain fried until golden, then finished with a light honey glaze for a sticky-sweet edge. Our most dessert-like chip — pairs well with anything cold.",
    categorySlug: "plantain-chips",
    images: ["/images/products/plantain-chips-honey-glazed.png"],
    basePricePesewas: 1900,
    variants: [
      { id: "honey-glazed-100g", label: "100g Pouch", pricePesewas: 1900, inStock: true },
      { id: "honey-glazed-250g", label: "250g Pack", pricePesewas: 3700, inStock: true },
    ],
    inStock: true,
    tags: ["new"],
    featured: true,
  },
];

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}
