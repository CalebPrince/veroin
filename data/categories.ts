import type { Category } from "@/types/product";

/**
 * More categories (e.g. cocoyam chips, chin chin, dried coconut) will be added
 * here as Veroin Snacks grows beyond plantain chips — components read this
 * list dynamically rather than hardcoding category names.
 */
export const categories: Category[] = [
  {
    slug: "plantain-chips",
    name: "Plantain Chips",
    description: "Sliced thin, fried golden, and seasoned in small batches.",
    imageUrl: "/images/products/plantain-chips-original.png",
  },
];
